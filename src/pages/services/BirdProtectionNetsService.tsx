import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Bird, Home, Award, Shield, Star, MapPin } from 'lucide-react';

const BirdProtectionNetsService = () => {
  const features = [
    "UV Resistant Material",
    "Weatherproof Design", 
    "Bird Deterrent",
    "3 Year Warranty",
    "Professional Installation",
    "Custom Sizing Available"
  ];

  const benefits = [
    {
      icon: Bird,
      title: "Effective Bird Control",
      description: "Prevents birds from accessing your property while maintaining the aesthetic appeal of your building."
    },
    {
      icon: Shield,
      title: "Property Protection",
      description: "Protects your property from bird droppings, nesting, and potential damage caused by bird activity."
    },
    {
      icon: Home,
      title: "Aesthetic Design",
      description: "Blends seamlessly with your building's architecture without compromising on functionality."
    },
    {
      icon: Award,
      title: "Durable Construction",
      description: "High-quality materials ensure long-lasting protection against various weather conditions."
    }
  ];

  const types = [
    {
      name: "Pigeon Nets",
      description: "Specialized nets to prevent pigeons from roosting and nesting on your property",
    },
    {
      name: "Bird Spikes", 
      description: "Physical deterrents to prevent birds from landing on ledges and surfaces",
    },
    {
      name: "Bird Netting",
      description: "Comprehensive netting solutions for large areas and complex structures",
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bird Protection Nets
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Keep birds away from your property while maintaining aesthetics with our professional 
                bird protection solutions. Effective, durable, and visually appealing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+918074616049"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 

                src="/images/Bird Protection Nets.webp" 
                alt="Bird Protection Nets"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-green-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Bird Protection Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Bird Protection Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <a 
                  href="tel:+918074616049"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Materials & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bird Netting</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• HDPE or Nylon construction</li>
                <li>• UV resistant up to 5 years</li>
                <li>• Weatherproof design</li>
                <li>• Various mesh sizes available</li>
                <li>• Easy installation and maintenance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bird Spikes</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stainless steel construction</li>
                <li>• Weather-resistant design</li>
                <li>• Humane bird deterrent</li>
                <li>• Easy to install</li>
                <li>• Long-lasting effectiveness</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Hardware</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stainless steel mounting clips</li>
                <li>• Weather-resistant screws</li>
                <li>• Tension adjustment system</li>
                <li>• Professional mounting brackets</li>
                <li>• Corrosion-resistant materials</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How effective are bird protection nets?",
                answer: "Our bird protection nets are highly effective in preventing birds from accessing your property. They provide a physical barrier while maintaining the aesthetic appeal of your building."
              },
              {
                question: "What types of birds can be deterred?",
                answer: "Our solutions are effective against pigeons, sparrows, crows, and other common urban birds. We provide specialized solutions based on the specific bird species in your area."
              },
              {
                question: "Do bird protection nets require maintenance?",
                answer: "Minimal maintenance is required. Regular inspection and cleaning ensure optimal performance. We provide maintenance services as part of our packages."
              },
              {
                question: "Can bird protection nets be installed on any surface?",
                answer: "Yes, our bird protection solutions can be installed on various surfaces including concrete, metal, wood, and glass. We provide custom mounting solutions for different surface types."
              },
              {
                question: "Are bird protection solutions humane?",
                answer: "Yes, our bird protection solutions are humane and do not harm birds. They simply prevent birds from accessing specific areas and redirect them to other locations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                description: "We assess your property to identify bird activity and determine the best protection strategy."
              },
              {
                step: "2", 
                title: "Custom Design",
                description: "Bird protection solutions are designed to fit your specific requirements and building structure."
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Expert technicians install the bird protection system using proper mounting techniques."
              },
              {
                step: "4",
                title: "Quality Testing",
                description: "Final inspection ensures the bird protection system is properly installed and effective."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Hyderabad",
                rating: 5,
                text: "Excellent bird protection solution! The nets are barely visible and very effective in keeping pigeons away from our balcony."
              },
              {
                name: "Sunita Reddy",
                location: "Secunderabad", 
                rating: 5,
                text: "Professional installation and great results. No more bird droppings on our terrace. Highly recommended!"
              },
              {
                name: "Vikram Singh",
                location: "Gachibowli",
                rating: 5,
                text: "The bird spikes work perfectly. Easy installation and maintenance. Our building looks clean and bird-free now."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Bird Protection Solutions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote for your bird protection needs. 
            Our experts will assess your property and recommend the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918074616049"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdProtectionNetsService;
