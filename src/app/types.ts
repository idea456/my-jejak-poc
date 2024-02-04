import type GtfsRealtimeBindings from "gtfs-realtime-bindings";

export type VehicleRealTime =
    GtfsRealtimeBindings.transit_realtime.IVehiclePosition & {
        trip?: GtfsRealtimeBindings.transit_realtime.ITripDescriptor;
    };
