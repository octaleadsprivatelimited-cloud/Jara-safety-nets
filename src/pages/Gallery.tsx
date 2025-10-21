import React from 'react';
import { MapPin, Eye, Phone } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive safety net installations and solutions
          </p>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Safety & Bird Nets Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Balcony Safety Net', image: '/images/Balcony Safety Nets.webp', badge: 'Safety First', badgeColor: 'bg-blue-600' },
              { name: 'Kids Net for Balcony', image: '/images/Children Safety Nets.avif', badge: 'Child Safe', badgeColor: 'bg-green-600' },
              { name: 'Pets Safety Nets', image: '/images/Children Safety Nets.avif', badge: 'Pet Friendly', badgeColor: 'bg-purple-600' },
              { name: 'Grill Balcony Safety Nets', image: '/images/All Invisible Grills.webp', badge: 'Secure', badgeColor: 'bg-orange-600' },
              { name: 'Pigeon Nets', image: '/images/Bird Protection Nets.webp', badge: 'Bird Free', badgeColor: 'bg-red-600' },
              { name: 'Bird Spikes', image: '/images/Bird Spikes.webp', badge: 'Deterrent', badgeColor: 'bg-indigo-600' },
              { name: 'Building Safety Nets', image: '/images/Building Safety Nets.avif', badge: 'Industrial', badgeColor: 'bg-teal-600' },
              { name: 'Duct Area Safety Nets', image: '/images/Duct Area Safety Nets.avif', badge: 'Ventilation', badgeColor: 'bg-yellow-600' },
              { name: 'Construction Safety Nets', image: '/images/Building Covering.avif', badge: 'Construction', badgeColor: 'bg-pink-600' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={service.image} 
                    alt={`${service.name} - JARA Safety Nets Professional Installation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                  <div className="mt-2">
                    <a 
                      href="tel:+918074616049"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Invisible Grills Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Invisible safety grill for balcony', image: '/images/All Invisible Grills.webp' },
              { name: 'Balcony invisible grill', image: '/images/All Invisible Grills.webp' },
              { name: 'Invisible grills for windows', image: '/images/All Invisible Grills.webp' },
              { name: 'Casement invisible grille', image: '/images/All Invisible Grills.webp' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={service.image} 
                    alt={`${service.name} - JARA Safety Nets Professional Installation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                  <div className="mt-2">
                    <a 
                      href="tel:+918074616049"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sports Nets Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Cricket Practice Nets', image: '/images/Cricket Practice Nets.webp' },
              { name: 'Sports Ball Stop Nets', image: '/images/All Sports Nets.avif' },
              { name: 'Football Ball Stop Netting', image: '/images/All Sports Nets.avif' },
              { name: 'Terrace Cricket Nets', image: '/images/Cricket Practice Nets.webp' },
              { name: 'Swimming Pool Safety Nets', image: '/images/Sports Nets.webp' },
              { name: 'Shade Nets', image: '/images/Shade Nets.webp' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={service.image} 
                    alt={`${service.name} - JARA Safety Nets Professional Installation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Hyderabad, Telangana</span>
                  </div>
                  <div className="mt-2">
                    <a 
                      href="tel:+918074616049"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See Your Project Here?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today for a free consultation and quote. Let us help you choose the perfect safety net solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918074616049"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 8074616049
              </a>
              <a 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;