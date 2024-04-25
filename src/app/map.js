"use client";

import React from 'react'
import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Map() {
    const [zoomLevel, setZoomLevel] = React.useState(15);

    const containerStyle = {
        width: '100%',
        height: '90vh'
    };

    const center = {
        lat: 22.31897909079156,
        lng: 114.17166042056174
    };


    function MyComponent() {
        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        })

        const [map, setMap] = React.useState(null)

        const onLoad = React.useCallback(function callback(map) {
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(center);

            setMap(map)
        }, [])

        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])

        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={zoomLevel}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            </GoogleMap>
        ) : <></>
    }

    return <MyComponent/>
}