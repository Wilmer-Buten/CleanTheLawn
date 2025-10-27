import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import GoogleMap from './GoogleMap';

const ServiceAreas: React.FC = () => {
  const serviceAreas = React.useMemo(() => [
    'Berwyn Heights', 'Bladensburg', 'Bowie', 'Brentwood', 'Capitol Heights',
    'Cheverly', 'College Park', 'District Heights', 'Fairmount Heights',
    'Glenarden', 'Greenbelt', 'Hyattsville', 'Landover Hills', 'Laurel',
    'New Carrollton', 'Riverdale Park', 'Seat Pleasant', 'University Park', 'Upper Marlboro'
  ], []);

  return (
    <section className="py-20 bg-green-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-6 font-nature px-4">
            <span className="text-emerald-600">Service Areas</span> in Prince George's County
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-2xl mx-auto font-organic px-4">
            We proudly serve communities throughout Prince George's County with 
            professional landscaping and lawn care services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <MapPin className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-green-800">
                Cities We Serve
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center space-x-2 p-2 sm:p-3 bg-white rounded-lg hover:bg-green-50 transition-all duration-300 border border-green-200 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-green-700 hover:text-emerald-600 transition-colors duration-150 text-xs sm:text-sm font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-green-200 shadow-lg">
              <h4 className="text-base sm:text-lg font-semibold text-emerald-600 mb-3">
                Don't See Your Area?
              </h4>
              <p className="text-green-700 text-xs sm:text-sm leading-relaxed">
                We're always expanding our service areas! Contact us to see if we 
                can provide services in your location. We may be able to accommodate 
                special requests for nearby areas.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                  Interactive Service Map
                </h3>
                <p className="text-sm sm:text-base text-green-700">
                  Click on any marker to see service details
                </p>
              </div>
              <GoogleMap 
                height="h-64 sm:h-80 lg:h-96" 
                showServiceAreas={true} 
                interactive={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;