import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, X, ChevronUp } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleWidget = () => {
    setIsExpanded(!isExpanded);
  };

  const contactInfo = {
    phone: '+91 8074616049',
    phoneUrl: 'tel:+918074616049',
    whatsappNumber: '918074616049',
    whatsappUrl: 'https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20your%20safety%20net%20services',
    locationUrl: 'https://www.google.com/maps?q=Green+Park+Colony,+Road+No.9,+Karmanghat,+Hyderabad,+Telangana'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main floating button */}
      <div className="flex flex-col items-end space-y-3">
        {/* Expanded contact options */}
        {isExpanded && (
          <div className="flex flex-col space-y-3 mb-3">
            {/* WhatsApp Button */}
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat on WhatsApp
              </span>
            </a>

            {/* Phone Button */}
            <a
              href={contactInfo.phoneUrl}
              className="group flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              title="Call Us"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Call {contactInfo.phone}
              </span>
            </a>

            {/* Location Button */}
            <a
              href={contactInfo.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              title="View Location"
            >
              <MapPin className="w-6 h-6" />
              <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                View Our Location
              </span>
            </a>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleWidget}
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isExpanded 
              ? 'bg-gray-600 hover:bg-gray-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          title={isExpanded ? "Close Contact Options" : "Contact Us"}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <ChevronUp className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile-friendly version */}
      <div className="md:hidden">
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 min-w-64 border">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Contact Us</h3>
              
              {/* WhatsApp */}
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">WhatsApp</p>
                  <p className="text-xs text-gray-600">Quick chat support</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={contactInfo.phoneUrl}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Phone Call</p>
                  <p className="text-xs text-gray-600">{contactInfo.phone}</p>
                </div>
              </a>

              {/* Location */}
              <a
                href={contactInfo.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Location</p>
                  <p className="text-xs text-gray-600">View on Google Maps</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingContactWidget;
