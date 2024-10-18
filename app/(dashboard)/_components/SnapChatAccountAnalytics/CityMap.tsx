"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import { Skeleton } from "@/components/ui/skeleton"; // Adjust the import path based on your structure

const CityMap: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Define multiple positions
  const positions = [
    { coords: [51.505, -0.09] as LatLngTuple, label: "Location 1" },
    { coords: [51.51, -0.1] as LatLngTuple, label: "Location 2" },
    { coords: [51.49, -0.08] as LatLngTuple, label: "Location 3" },
  ];

  // Calculate average coordinates for centering
  const avgLat =
    positions.reduce((sum, pos) => sum + pos.coords[0], 0) / positions.length;
  const avgLng =
    positions.reduce((sum, pos) => sum + pos.coords[1], 0) / positions.length;

  const center: LatLngTuple = [avgLat, avgLng]; // Create LatLngTuple for center

  useEffect(() => {
    // Set default icon for the marker
    const DefaultIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    // Set the default icon for all markers
    L.Marker.prototype.options.icon = DefaultIcon;

    // Simulate loading for demonstration (remove in production)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second

    return () => {
      clearTimeout(timeoutId); // Clean up the timeout on unmount
    };
  }, []);

  // Show loading skeleton or message
  if (loading) {
    return <Skeleton className="h-72 w-full" />;
  }

  return (
    <MapContainer
      center={center} // Use the LatLngTuple
      zoom={13}
      style={{ height: "300px", width: "100%" }} // Set background color here
      className="leaflet-container"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
      {positions.map((position, index) => (
        <CircleMarker
          key={index}
          center={position.coords}
          radius={10}
          color="#11244B"
          fillColor="#2C6BF1"
          fillOpacity={1}
          stroke={true}
          weight={4}
        >
          <Popup>{position.label}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default CityMap;
