"use client";

import { useRapidBus } from "@/hooks";
import Map, { Marker, GeolocateControl, NavigationControl } from "react-map-gl";

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
function generateColorFromString(str: string) {
    // Generate a hash code for the input string
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
        hashCode = str.charCodeAt(i) + ((hashCode << 5) - hashCode);
    }

    // Convert the hash code to a hexadecimal color code
    let color = "#";
    for (let i = 0; i < 3; i++) {
        const value = (hashCode >> (i * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
    }

    return color;
}

const LiveMap = () => {
    const { data: feeds } = useRapidBus();

    console.log(feeds);

    if (!feeds) return <h1>Loading...</h1>;

    return (
        <>
            <Map
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
                {feeds.buses.map((feed) => {
                    const color = generateColorFromString(feed.trip?.routeId);
                    return (
                        <Marker
                            key={feed.id}
                            longitude={feed.position?.longitude}
                            latitude={feed.position?.latitude}
                            anchor='bottom'
                        >
                            <svg
                                version='1.1'
                                id='svg2'
                                width='40'
                                height='40'
                                viewBox='0 0 200 200'
                            >
                                <g
                                    transform='translate(-270.42958,-442.3622)'
                                    id='layer1'
                                />
                                <g
                                    transform='translate(-270.42958,-442.3622)'
                                    id='layer2'
                                />
                                <g
                                    transform='translate(-270.42958,-442.3622)'
                                    id='layer3'
                                >
                                    <g
                                        transform='matrix(3.112676,0,0,3.1111103,-857.91547,-902.76424)'
                                        id='g3874'
                                    >
                                        <path
                                            d='m 360,454.86218 a 22.5,22.5 0 1 1 -45,0 22.5,22.5 0 1 1 45,0 z'
                                            transform='translate(47.5,0)'
                                            id='path2998'
                                            style={{
                                                fill: color,
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                        <path
                                            d='m 376,470.36218 c -1,0 -1,-1 -1,-4 l -3,0 0,-19 c 0,-9 4,-10 9,-10 l 8,0 c 5,0 9,1 9,10 l 0,19 -3,0 c 0,3 0,4 -1,4 l -1,0 c -1,0 -1,-1 -1,-4 l -14,0 c 0,3 0,4 -1,4 z'
                                            id='path3846'
                                            style={{
                                                fill: "#ffffff",
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                        <path
                                            d='m 360,454.86218 a 22.5,22.5 0 1 1 -45,0 22.5,22.5 0 1 1 45,0 z'
                                            transform='matrix(-0.088889,0,0,0.08888887,423.00004,419.93)'
                                            id='path2998-1-4'
                                            style={{
                                                fill: color,
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                        <path
                                            d='m 395,454.36218 c 0,-6 0,-10 -2,-10 l -16,0 c -2,0 -2,4 -2,10 z'
                                            id='path3799-9'
                                            style={{
                                                fill: color,
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                        <path
                                            d='m 379,440.36218 c 0,-1 1,-1 1,-1 l 10,0 c 0,0 1,0 1,1 0,1 -1,1 -1,1 l -10,0 c 0,0 -1,0 -1,-1 z'
                                            id='path3843'
                                            style={{
                                                fill: color,
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                        <path
                                            d='m 360,454.86218 a 22.5,22.5 0 1 1 -45,0 22.5,22.5 0 1 1 45,0 z'
                                            transform='matrix(-0.088889,0,0,0.08888887,407.00004,419.93)'
                                            id='path2998-1-4-4'
                                            style={{
                                                fill: color,
                                                fillOpacity: 1,
                                                stroke: "none",
                                            }}
                                        />
                                    </g>
                                </g>
                            </svg>
                        </Marker>
                    );
                })}
            </Map>
        </>
    );
};

export default LiveMap;
