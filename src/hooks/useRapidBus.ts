import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import GtfsRealtimeBindings from "gtfs-realtime-bindings";

const getRapidBus = async () => {
    const res = await fetch(
        `https://api.data.gov.my/gtfs-realtime/vehicle-position/prasarana?category=rapid-bus-kl`,
    );

    const data = await res.arrayBuffer();
    try {
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
            new Uint8Array(data),
        );

        return feed.entity;
    } catch (err) {
        console.log(err);
    }
};

const useRapidBus = () => {
    const { data, ...rest } = useQuery({
        queryKey: ["rapid", "bus", "kl"],
        queryFn: getRapidBus,
        refetchInterval: 30 * 1000,
    });

    const formattedData = useMemo(() => {
        if (!data) return;

        const routes = new Set();

        return {
            routes,
            buses: data.map((entity) => {
                routes.add(entity.vehicle?.trip?.routeId);
                return { id: entity.id, ...entity.vehicle };
            }),
        };
    }, [data]);

    return { data: formattedData, ...rest };
};

export default useRapidBus;
