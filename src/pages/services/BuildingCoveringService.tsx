import React from 'react';
import { Building, Shield, CheckCircle, Phone, Award, Users, Zap } from 'lucide-react';

const BuildingCoveringService = () => {
  const features = [
    {
      icon: Building,
      title: 'Complete Building Protection',
      description: 'Comprehensive building covering solutions for construction sites and temporary structures.'
    },
    {
      icon: Shield,
      title: 'Weather Protection',
      description: 'Protect your building from harsh weather conditions during construction and renovation.'
    },
    {
      icon: CheckCircle,
      title: 'Professional Installation',
      description: 'Expert installation ensuring proper coverage and secure fastening for maximum protection.'
    }
  ];

  const benefits = [
    'Protects building from weather damage',
    'Prevents dust and debris accumulation',
    'Maintains construction schedule',
    'Reduces maintenance requirements',
    'Customizable for different building sizes',
    'Professional installation with warranty'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building Covering
              </h1>
              <p className="text-xl text-amber-100 mb-8">
                Complete building covering solutions for construction sites and temporary structures. 
                Protect your building from weather damage and maintain construction schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918074616049"
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <a
                  href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Building%20Covering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Building Covering.avif"
                alt="Building Covering"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-amber-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Building Covering Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Protection Benefits</h3>
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
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Building Assessment</h3>
              <p className="text-gray-600 text-sm">We assess your building structure and determine the best covering solution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Material Selection</h3>
              <p className="text-gray-600 text-sm">Choose the right covering material based on your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">Expert installation ensuring proper coverage and secure fastening.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Inspection</h3>
              <p className="text-gray-600 text-sm">Final inspection to ensure complete protection and proper installation.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose JARA Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience in building covering and construction protection.</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Trained professionals with expertise in construction site protection.</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">All installations come with warranty and quality guarantee.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Building?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Get a free quote for building covering services. Our experts are ready to help you protect your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918074616049"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <a
              href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Building%20Covering"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingCoveringService;
