import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, CheckCircle } from 'lucide-react';

interface GoogleMapProps {
  height?: string;
  showServiceAreas?: boolean;
  interactive?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  height = 'h-96', 
  showServiceAreas = true,
  interactive = true 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const serviceAreas = [
    { name: 'Athens', lat: 34.8021, lng: -86.9717, population: '25,000+' },
    { name: 'Huntsville', lat: 34.7304, lng: -86.5861, population: '215,000+' },
    { name: 'Madison', lat: 34.6993, lng: -86.7483, population: '50,000+' },
    { name: 'Decatur', lat: 34.6059, lng: -86.9833, population: '55,000+' },
    { name: 'Hartselle', lat: 34.4401, lng: -86.9447, population: '15,000+' },
    { name: 'Ardmore', lat: 34.9918, lng: -86.8503, population: '1,200+' },
    { name: 'Belle Mina', lat: 34.6807, lng: -86.8844, population: '800+' },
    { name: 'Brownsboro', lat: 34.7451, lng: -86.4522, population: '1,000+' },
    { name: 'Elkmont', lat: 34.9262, lng: -86.9636, population: '500+' },
    { name: 'Grant', lat: 34.5951, lng: -86.2519, population: '900+' },
    { name: 'Guntersville', lat: 34.3581, lng: -86.2947, population: '8,500+' },
    { name: 'Gurley', lat: 34.6951, lng: -86.3719, population: '800+' },
    { name: 'Harvest', lat: 34.8562, lng: -86.7744, population: '5,500+' },
    { name: 'Hazel Green', lat: 34.9301, lng: -86.5719, population: '4,000+' },
    { name: 'Laceys Spring', lat: 34.6751, lng: -86.3719, population: '1,200+' },
    { name: 'Meridianville', lat: 34.8512, lng: -86.5744, population: '7,000+' },
    { name: 'Mooresville', lat: 34.6251, lng: -86.8844, population: '60+' },
    { name: 'New Hope', lat: 34.5401, lng: -86.4022, population: '2,800+' },
    { name: 'New Market', lat: 34.9062, lng: -86.4419, population: '1,600+' }
  ];

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      // Center map on North Alabama
      const center = { lat: 34.7304, lng: -86.5861 }; // Huntsville center

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: center,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{ "color": "#1f2937" }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#84cc16" }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#1f2937" }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#4b5563" }]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#374151" }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#4b5563" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#6b7280" }]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#4b5563" }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#1e40af" }]
          }
        ],
        disableDefaultUI: !interactive,
        gestureHandling: interactive ? 'auto' : 'none',
        zoomControl: interactive,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: interactive
      });

      if (showServiceAreas) {
        // Add markers for each service area
        serviceAreas.forEach((area, index) => {
          const marker = new window.google.maps.Marker({
            position: { lat: area.lat, lng: area.lng },
            map: map,
            title: area.name,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#84cc16',
              fillOpacity: 0.8,
              strokeColor: '#65a30d',
              strokeWeight: 2
            },
            animation: window.google.maps.Animation.DROP
          });

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; color: #1f2937;">
                <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">${area.name}</h3>
                <p style="margin: 0; font-size: 14px; color: #4b5563;">Population: ${area.population}</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #84cc16; font-weight: 600;">✓ Service Available</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            setSelectedArea(area.name);
            infoWindow.open(map, marker);
          });

          // Animate marker appearance
          setTimeout(() => {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(() => {
              marker.setAnimation(null);
            }, 2000);
          }, index * 200);
        });

        // Add service area circle overlay
        const serviceCircle = new window.google.maps.Circle({
          strokeColor: '#84cc16',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#84cc16',
          fillOpacity: 0.1,
          map: map,
          center: center,
          radius: 50000 // 50km radius
        });
      }

      setIsLoaded(true);
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Listen for Google Maps API to load
      const handleApiLoaded = () => {
        initMap();
      };
      
      window.addEventListener('googleMapsApiLoaded', handleApiLoaded);
      
      // Cleanup event listener
      return () => {
        window.removeEventListener('googleMapsApiLoaded', handleApiLoaded);
      };
    }
  }, [showServiceAreas, interactive]);

  return (
    <div className={`relative ${height} rounded-2xl overflow-hidden border border-gray-600 shadow-lg`}>
      {!isLoaded ? (
        // Loading State
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-lime-400 border-t-transparent rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <h3 className="text-white font-semibold mb-2">Loading Service Areas</h3>
            <p className="text-gray-400 text-sm">Mapping North Alabama coverage...</p>
          </motion.div>
        </div>
      ) : (
        // Map Container (Demo Version)
        <div className="w-full h-full bg-gray-700 relative">
          {/* Demo Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop")',
              filter: 'sepia(100%) hue-rotate(60deg) saturate(0.8)'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60" />
          
          {/* Interactive Service Points */}
          <div className="absolute inset-0 p-4">
            {serviceAreas.slice(0, 8).map((area, index) => (
              <motion.div
                key={area.name}
                className="absolute cursor-pointer group"
                style={{
                  left: `${20 + (index % 4) * 20}%`,
                  top: `${20 + Math.floor(index / 4) * 30}%`
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedArea(selectedArea === area.name ? null : area.name)}
              >
                {/* Service Point */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedArea === area.name 
                      ? 'bg-lime-400 border-lime-300' 
                      : 'bg-lime-400/80 border-lime-300'
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-lime-400"
                  animate={{
                    scale: [1, 2.5],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                {/* Info Popup */}
                {selectedArea === area.name && (
                  <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-lime-400 rounded-lg p-3 min-w-32 shadow-xl"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-sm mb-1">{area.name}</h4>
                      <p className="text-gray-400 text-xs mb-2">{area.population}</p>
                      <div className="flex items-center justify-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-lime-400" />
                        <span className="text-lime-400 text-xs font-medium">Available</span>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Map Legend */}
            <motion.div
              className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-lime-400" />
                <span>Service Coverage</span>
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-lime-400 rounded-full" />
                  <span className="text-gray-300 text-xs">Active Service Area</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 border-2 border-lime-400 rounded-full" />
                  <span className="text-gray-300 text-xs">Coverage Zone</span>
                </div>
              </div>
            </motion.div>

            {/* Service Stats */}
            <motion.div
              className="absolute bottom-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-600"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-lime-400 mb-1">19</div>
                <div className="text-gray-300 text-xs">Cities Served</div>
              </div>
            </motion.div>

            {/* Interactive Instructions */}
            {interactive && (
              <motion.div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-lime-400/90 backdrop-blur-sm rounded-full px-4 py-2 border border-lime-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-black" />
                  <span className="text-black text-sm font-medium">Click markers to explore</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
      
      {/* Map Reference Note */}
      <div className="absolute top-2 right-2 bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-600">
        <span className="text-gray-400 text-xs">Interactive Demo Map</span>
      </div>
    </div>
  );
};

export default GoogleMap;