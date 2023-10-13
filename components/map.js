"use client";

import { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

export default function Map({ pois = [] }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

  // default map center to sf geo center
  const defaultCenter = {
    lat: 37.77492,
    lng: -122.45567,
  };
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    const calcCenter = () => {
      if (pois?.length === 0) {
        setCenter(defaultCenter);
      } else if (pois.length === 1) {
        setCenter(pois.at(0));
      } else {
        setCenter({
          lat:
            pois.reduce((prev, item) => (prev?.lat || prev) + item.lat) /
            pois.length,
          lng:
            pois.reduce((prev, item) => (prev?.lng || prev) + item.lng) /
            pois.length,
        });
      }
    };
    calcCenter();
  }, [pois]);

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  };

  return (
    <>
      {!isLoaded && (
        <p className="w-full text-center">
          Map loading...Please make sure that Google services are available at
          your location.
        </p>
      )}

      {isLoaded && (
        <GoogleMap
          options={mapOptions}
          center={center}
          zoom={13}
          mapContainerStyle={{ width: "1280px", height: "800px" }}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          {pois.map((item) => (
            <MarkerF
              key={`poi:lat-${item.lat}-lng-${item.long}`}
              position={item}
              onLoad={() => console.log("Marker Loaded: ", item)}
            />
          ))}
        </GoogleMap>
      )}
    </>
  );
}
