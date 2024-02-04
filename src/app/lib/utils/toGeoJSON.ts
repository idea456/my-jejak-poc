import { VehicleRealTime } from "@/app/types";

export const toGeoJSON = (data: VehicleRealTime[]) => {
    const features = data.map((entity) => ({
        type: "Feature",
        properties: {
            iconSize: [40, 40],
        },
        geometry: {
            type: "Point",
            coordinates: [
                entity.position?.latitude,
                entity.position?.longitude,
            ],
        },
    }));

    return {
        type: "FeatureCollection",
        features,
    };
};
