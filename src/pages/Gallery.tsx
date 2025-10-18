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
              { name: 'Balcony Safety Net', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop', badge: 'Safety First', badgeColor: 'bg-blue-600' },
              { name: 'Kids Net for Balcony', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop', badge: 'Child Safe', badgeColor: 'bg-green-600' },
              { name: 'Pets Safety Nets', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop', badge: 'Pet Friendly', badgeColor: 'bg-purple-600' },
              { name: 'Grill Balcony Safety Nets', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop', badge: 'Secure', badgeColor: 'bg-orange-600' },
              { name: 'Pigeon Nets', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop', badge: 'Bird Free', badgeColor: 'bg-red-600' },
              { name: 'Bird Spikes', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop', badge: 'Deterrent', badgeColor: 'bg-indigo-600' },
              { name: 'Building Safety Nets', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop', badge: 'Industrial', badgeColor: 'bg-teal-600' },
              { name: 'Duct Area Safety Nets', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop', badge: 'Ventilation', badgeColor: 'bg-yellow-600' },
              { name: 'Construction Safety Nets', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop', badge: 'Construction', badgeColor: 'bg-pink-600' }
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
              { name: 'Invisible safety grill for balcony', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop' },
              { name: 'Balcony invisible grill', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop' },
              { name: 'Invisible grills for windows', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop' },
              { name: 'Casement invisible grille', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop' }
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
              { name: 'Cricket Practice Nets', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop' },
              { name: 'Sports Ball Stop Nets', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop' },
              { name: 'Football Ball Stop Netting', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop' },
              { name: 'Terrace Cricket Nets', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop' },
              { name: 'Swimming Pool Safety Nets', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop' },
              { name: 'Shade Nets', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop' }
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