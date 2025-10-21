import React from 'react';
import { TreePine, Shield, CheckCircle, Phone, Award, Users, Building } from 'lucide-react';

const GreenGrassInstallationService = () => {
  const features = [
    {
      icon: TreePine,
      title: 'Natural & Artificial Grass',
      description: 'Both natural and artificial grass installation services for all types of spaces and requirements.'
    },
    {
      icon: Shield,
      title: 'Professional Installation',
      description: 'Expert installation by trained professionals ensuring proper drainage and foundation.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Materials',
      description: 'High-quality grass materials that are durable, weather-resistant, and long-lasting.'
    }
  ];

  const benefits = [
    'Creates beautiful green spaces in any environment',
    'Low maintenance requirements',
    'Weather-resistant and durable',
    'Improves air quality and aesthetics',
    'Customizable for different spaces',
    'Professional installation with warranty'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Green Grass Installation
              </h1>
              <p className="text-xl text-rose-100 mb-8">
                Transform your spaces with beautiful green grass installations. 
                We provide both natural and artificial grass solutions for residential and commercial properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918074616049"
                  className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <a
                  href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Green%20Grass%20Installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors inline-flex items-center justify-center"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Green Grass Installation.avif"
                alt="Green Grass Installation"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-rose-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Green Grass Installation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-rose-600" />
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Installation Benefits</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Long-term Benefits</h3>
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
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Site Assessment</h3>
              <p className="text-gray-600 text-sm">We assess your space and determine the best grass type and installation method.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Ground Preparation</h3>
              <p className="text-gray-600 text-sm">Prepare the ground with proper drainage and foundation for optimal results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Grass Installation</h3>
              <p className="text-gray-600 text-sm">Professional installation of natural or artificial grass with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Final Inspection</h3>
              <p className="text-gray-600 text-sm">Quality check and maintenance instructions for long-lasting results.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose JARA Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-rose-50 rounded-lg">
              <Award className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience in grass installation and landscaping services.</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg">
              <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Trained professionals with expertise in both natural and artificial grass installation.</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg">
              <Shield className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">All installations come with warranty and quality guarantee.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space with Green Grass?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
            Get a free quote for green grass installation. Our experts are ready to help you create beautiful green spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918074616049"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <a
              href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Green%20Grass%20Installation"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenGrassInstallationService;
