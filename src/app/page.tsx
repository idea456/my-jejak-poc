import Map, { NavigationControl, GeolocateControl } from "react-map-gl";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import "mapbox-gl/dist/mapbox-gl.css";
import LiveMap from "@/components/LiveMap";

export default function Home() {
    const queryClient = new QueryClient();

    // await queryClient.prefetchQuery({
    //     queryKey: ["posts"],
    //     queryFn: getPosts,
    // });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main>
                {/* <Map
                mapboxAccessToken={mapboxToken}
                mapStyle='mapbox://styles/mapbox/streets-v12'
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14,
                }}
                style={{ width: "100vw", height: "100vh" }}
            >
                <GeolocateControl position='top-left' />
                <NavigationControl position='top-left' />
            </Map> */}
                <LiveMap />
            </main>
        </HydrationBoundary>
    );
}
