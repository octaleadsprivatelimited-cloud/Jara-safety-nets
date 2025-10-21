import React from 'react';
import { Shirt, Shield, CheckCircle, Phone, Award, Users, Home } from 'lucide-react';

const ClothHangersService = () => {
  const features = [
    {
      icon: Shirt,
      title: 'Durable Cloth Hangers',
      description: 'Durable and weather-resistant cloth hanging solutions for outdoor spaces and laundry areas.'
    },
    {
      icon: Shield,
      title: 'Weather Resistant',
      description: 'High-quality materials that withstand outdoor conditions and provide long-lasting performance.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Installation',
      description: 'Simple installation process that provides secure and reliable cloth hanging solutions.'
    }
  ];

  const benefits = [
    'Durable and weather-resistant materials',
    'Easy to install and maintain',
    'Suitable for outdoor use',
    'Customizable for different spaces',
    'Professional installation service',
    'Long-lasting performance'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloth Hangers
              </h1>
              <p className="text-xl text-pink-100 mb-8">
                Durable and weather-resistant cloth hanging solutions for outdoor spaces. 
                Perfect for laundry areas, balconies, and outdoor drying spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918074616049"
                  className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <a
                  href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Cloth%20Hangers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors inline-flex items-center justify-center"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Cloth Hangers.webp"
                alt="Cloth Hangers"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-pink-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Cloth Hangers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Material Benefits</h3>
              <ul className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Installation Benefits</h3>
              <ul className="space-y-3">
                {benefits.slice(3).map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Space Assessment</h3>
              <p className="text-gray-600 text-sm">We assess your space and determine the best cloth hanger configuration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Design cloth hangers tailored to your specific space requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">Expert installation ensuring proper mounting and functionality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">Final inspection to ensure proper installation and functionality.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose JARA Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <Award className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience in cloth hanger installations.</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Trained professionals with expertise in outdoor hanging solutions.</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <Shield className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">All installations come with warranty and quality guarantee.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Install Cloth Hangers?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Get a free quote for cloth hangers installation. Our experts are ready to help you create the perfect drying space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918074616049"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <a
              href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Cloth%20Hangers"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothHangersService;
