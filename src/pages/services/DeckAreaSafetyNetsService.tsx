import React from 'react';
import { Building, Shield, CheckCircle, Phone, Award, Users, Home } from 'lucide-react';

const DeckAreaSafetyNetsService = () => {
  const features = [
    {
      icon: Building,
      title: 'Deck-Specific Design',
      description: 'Safety nets specifically designed for deck areas, terraces, and elevated platforms.'
    },
    {
      icon: Shield,
      title: 'Fall Prevention',
      description: 'Comprehensive fall prevention solutions for deck areas and elevated spaces.'
    },
    {
      icon: CheckCircle,
      title: 'Professional Installation',
      description: 'Expert installation ensuring proper coverage and secure mounting for maximum safety.'
    }
  ];

  const benefits = [
    'Prevents falls from deck areas',
    'Allows unobstructed views',
    'Weather-resistant materials',
    'Easy to maintain and clean',
    'Customizable for different deck sizes',
    'Professional installation with warranty'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Deck Area Safety Nets
              </h1>
              <p className="text-xl text-violet-100 mb-8">
                Safety net solutions for deck areas, terraces, and elevated platforms. 
                Ensure safety while maintaining the beauty and functionality of your outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918074616049"
                  className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <a
                  href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Deck%20Area%20Safety%20Nets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors inline-flex items-center justify-center"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Deck Area Safety Nets.webp"
                alt="Deck Area Safety Nets"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-violet-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our Deck Area Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-600" />
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Safety Benefits</h3>
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
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Deck Assessment</h3>
              <p className="text-gray-600 text-sm">We assess your deck area and determine the best safety net configuration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Design safety nets tailored to your specific deck requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">Expert installation ensuring proper coverage and secure mounting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Safety Inspection</h3>
              <p className="text-gray-600 text-sm">Final inspection to ensure all safety standards are met.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose JARA Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-violet-50 rounded-lg">
              <Award className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of experience in deck safety net installations.</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-lg">
              <Users className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Trained professionals with expertise in deck area safety solutions.</p>
            </div>
            <div className="text-center p-6 bg-violet-50 rounded-lg">
              <Shield className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">All installations come with warranty and quality guarantee.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Deck Area?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Get a free quote for deck area safety nets installation. Our experts are ready to help you create a safe outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918074616049"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <a
              href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20Deck%20Area%20Safety%20Nets"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckAreaSafetyNetsService;
