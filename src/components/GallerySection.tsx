import React from 'react';
import { MapPin, Eye, Phone } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      name: 'Balcony Safety Net',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
      category: 'Safety Nets'
    },
    {
      name: 'Kids Net for Balcony',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      category: 'Safety Nets'
    },
    {
      name: 'Pets Safety Nets',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop',
      category: 'Safety Nets'
    },
    {
      name: 'Invisible Grills',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
      category: 'Invisible Grills'
    },
    {
      name: 'Cricket Practice Nets',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop',
      category: 'Sports Nets'
    },
    {
      name: 'Building Safety Nets',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop',
      category: 'Safety Nets'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive safety net installations and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center">
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

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See Your Project Here?
            </h3>
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
    </section>
  );
};

export default GallerySection;
