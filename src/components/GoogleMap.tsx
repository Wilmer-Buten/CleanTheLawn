"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface GoogleMapProps {
  height?: string
}

const GoogleMap: React.FC<GoogleMapProps> = ({ height = "h-96" }) => {
  const mapRef = useRef<HTMLDivElement>(null)

  const serviceAreas = [
    {
      name: "Berwyn Heights",
      lat: 38.9945,
      lng: -76.9108,
      paths: [
        { lat: 39.000, lng: -76.905 },
        { lat: 39.000, lng: -76.920 },
        { lat: 38.989, lng: -76.920 },
        { lat: 38.989, lng: -76.905 },
      ],
    },
    {
      name: "Bladensburg",
      lat: 38.9395,
      lng: -76.9277,
      paths: [
        { lat: 38.950, lng: -76.940 },
        { lat: 38.950, lng: -76.915 },
        { lat: 38.929, lng: -76.915 },
        { lat: 38.929, lng: -76.940 },
      ],
    },
    {
      name: "Bowie",
      lat: 39.0073,
      lng: -76.7791,
      paths: [
        { lat: 39.030, lng: -76.810 },
        { lat: 39.030, lng: -76.740 },
        { lat: 38.985, lng: -76.740 },
        { lat: 38.985, lng: -76.810 },
      ],
    },
    {
      name: "Brentwood",
      lat: 38.9412,
      lng: -76.9563,
      paths: [
        { lat: 38.948, lng: -76.965 },
        { lat: 38.948, lng: -76.947 },
        { lat: 38.934, lng: -76.947 },
        { lat: 38.934, lng: -76.965 },
      ],
    },
    {
      name: "Capitol Heights",
      lat: 38.8851,
      lng: -76.9155,
      paths: [
        { lat: 38.895, lng: -76.925 },
        { lat: 38.895, lng: -76.905 },
        { lat: 38.875, lng: -76.905 },
        { lat: 38.875, lng: -76.925 },
      ],
    },
    {
      name: "Cheverly",
      lat: 38.9284,
      lng: -76.9158,
      paths: [
        { lat: 38.938, lng: -76.925 },
        { lat: 38.938, lng: -76.905 },
        { lat: 38.918, lng: -76.905 },
        { lat: 38.918, lng: -76.925 },
      ],
    },
    {
      name: "College Park",
      lat: 38.9807,
      lng: -76.9369,
      paths: [
        { lat: 38.995, lng: -76.955 },
        { lat: 38.995, lng: -76.920 },
        { lat: 38.965, lng: -76.920 },
        { lat: 38.965, lng: -76.955 },
      ],
    },
    {
      name: "District Heights",
      lat: 38.8573,
      lng: -76.8894,
      paths: [
        { lat: 38.870, lng: -76.905 },
        { lat: 38.870, lng: -76.875 },
        { lat: 38.845, lng: -76.875 },
        { lat: 38.845, lng: -76.905 },
      ],
    },
    {
      name: "Fairmount Heights",
      lat: 38.9009,
      lng: -76.9119,
      paths: [
        { lat: 38.908, lng: -76.920 },
        { lat: 38.908, lng: -76.904 },
        { lat: 38.894, lng: -76.904 },
        { lat: 38.894, lng: -76.920 },
      ],
    },
    {
      name: "Glenarden",
      lat: 38.924,
      lng: -76.8608,
      paths: [
        { lat: 38.935, lng: -76.875 },
        { lat: 38.935, lng: -76.845 },
        { lat: 38.913, lng: -76.845 },
        { lat: 38.913, lng: -76.875 },
      ],
    },
    {
      name: "Greenbelt",
      lat: 39.004,
      lng: -76.8758,
      paths: [
        { lat: 39.020, lng: -76.895 },
        { lat: 39.020, lng: -76.855 },
        { lat: 38.988, lng: -76.855 },
        { lat: 38.988, lng: -76.895 },
      ],
    },
    {
      name: "Hyattsville",
      lat: 38.9559,
      lng: -76.9453,
      paths: [
        { lat: 38.970, lng: -76.960 },
        { lat: 38.970, lng: -76.930 },
        { lat: 38.942, lng: -76.930 },
        { lat: 38.942, lng: -76.960 },
      ],
    },
    {
      name: "Landover Hills",
      lat: 38.9334,
      lng: -76.8897,
      paths: [
        { lat: 38.940, lng: -76.900 },
        { lat: 38.940, lng: -76.880 },
        { lat: 38.927, lng: -76.880 },
        { lat: 38.927, lng: -76.900 },
      ],
    },
    {
      name: "Laurel",
      lat: 39.0993,
      lng: -76.8483,
      paths: [
        { lat: 39.120, lng: -76.870 },
        { lat: 39.120, lng: -76.825 },
        { lat: 39.078, lng: -76.825 },
        { lat: 39.078, lng: -76.870 },
      ],
    },
    {
      name: "New Carrollton",
      lat: 38.9801,
      lng: -76.8747,
      paths: [
        { lat: 38.990, lng: -76.885 },
        { lat: 38.990, lng: -76.865 },
        { lat: 38.970, lng: -76.865 },
        { lat: 38.970, lng: -76.885 },
      ],
    },
    {
      name: "University Park",
      lat: 38.9734,
      lng: -76.9419,
      paths: [
        { lat: 38.980, lng: -76.950 },
        { lat: 38.980, lng: -76.934 },
        { lat: 38.967, lng: -76.934 },
        { lat: 38.967, lng: -76.950 },
      ],
    },
  ]

  const mapCenter = { lat: 38.9445, lng: -76.8727 }

  const mapOptions = {
    zoom: 10,
    center: mapCenter,
    // Minimal controls for maximum performance
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    scaleControl: false,
    rotateControl: false,
    
    // Performance optimizations
    disableDefaultUI: false,
    gestureHandling: "auto",
    draggable: true, // Explicitly enable dragging
    scrollwheel: true, // Allow zooming with scroll wheel
    disableDoubleClickZoom: false, // Allow double-click to zoom
    keyboardShortcuts: false,
    clickableIcons: false,
    
    // Ultra-fast dragging settings
    optimized: true,
    tilt: 0,
    heading: 0,
    
    // Reduce visual complexity
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  }

  useEffect(() => {
    const initMap = () => {
      try {
        if (!mapRef.current) return;

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        // Add service area polygons
        serviceAreas.forEach((area) => {
          const polygon = new window.google.maps.Polygon({
            paths: area.paths,
            strokeColor: "#10b981",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            fillColor: "#10b981",
            fillOpacity: 0.25,
          });

          polygon.setMap(map);

          // Add info window for each area
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; font-family: Arial, sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #065f46; font-size: 16px;">${area.name}</h3>
                <p style="margin: 0; color: #047857; font-size: 14px;">✅ Service Area Covered</p>
                <p style="margin: 4px 0 0 0; color: #059669; font-size: 12px;">Professional landscaping services available</p>
              </div>
            `,
          });

          polygon.addListener("click", () => {
            infoWindow.setPosition({ lat: area.lat, lng: area.lng });
            infoWindow.open(map);
          });
        });
        map.addListener("dragend", () => {
          console.log("Drag ended, center:", map.getCenter().toJSON());
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    if (window.google?.maps) {
      console.log("Google Maps API already loaded");
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap&loading=async`;
      script.async = true;
      script.defer = true;
      script.onerror = () => console.error("Failed to load Google Maps API");
      script.onload = () => console.log("Google Maps API script loaded");
      window.initMap = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className={`w-full ${height}`}
      style={{ minHeight: "300px", position: "relative", zIndex: 0 }}
    />
  );
}

export default GoogleMap;