import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Eye, Home, Award, Shield, Star, MapPin } from 'lucide-react';

const InvisibleGrillsService = () => {
  const features = [
    "Stainless Steel Construction",
    "Invisible Design", 
    "High Security",
    "10 Year Warranty",
    "Professional Installation",
    "Custom Sizing Available"
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Unobstructed View",
      description: "Maintains clear visibility while providing essential security for your windows and balconies."
    },
    {
      icon: Shield,
      title: "Maximum Security",
      description: "High-tensile stainless steel wires provide strong protection against break-ins and accidents."
    },
    {
      icon: Home,
      title: "Aesthetic Appeal",
      description: "Blends seamlessly with your home's architecture without compromising on security."
    },
    {
      icon: Award,
      title: "Durable Construction",
      description: "Weather-resistant materials ensure long-lasting performance in all conditions."
    }
  ];

  const types = [
    {
      name: "Balcony Invisible Grills",
      description: "Perfect for balconies, providing security without blocking the view",
      price: "₹200-300/sq ft"
    },
    {
      name: "Window Invisible Grills", 
      description: "Ideal for windows, maintaining visibility while ensuring safety",
      price: "₹150-250/sq ft"
    },
    {
      name: "Casement Invisible Grills",
      description: "Specialized grills for casement windows with smooth operation",
      price: "₹180-280/sq ft"
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
                Invisible Grills
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Modern invisible grills that provide security without obstructing your view. 
                Made with high-tensile stainless steel wires for maximum protection.
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
                src="/images/All Invisible Grills.webp" 
                alt="Invisible Grills"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Invisible Grills?</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Invisible Grills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">{type.price}</div>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stainless Steel Wires</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 316 Grade Stainless Steel</li>
                <li>• 1.5mm - 2mm thickness</li>
                <li>• Corrosion resistant</li>
                <li>• High tensile strength</li>
                <li>• Weatherproof design</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mounting Hardware</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stainless steel brackets</li>
                <li>• Weather-resistant screws</li>
                <li>• Tension adjustment system</li>
                <li>• Professional mounting clips</li>
                <li>• Anti-theft fasteners</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customization Options</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Multiple wire thickness options</li>
                <li>• Various spacing patterns</li>
                <li>• Color matching available</li>
                <li>• Custom design patterns</li>
                <li>• Specialized finishes</li>
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
                question: "How invisible are the grills?",
                answer: "Our invisible grills are designed to be nearly invisible from a distance while providing maximum security. The thin stainless steel wires blend seamlessly with your window frames."
              },
              {
                question: "What is the maintenance required for invisible grills?",
                answer: "Minimal maintenance is required. Regular cleaning with mild soap and water is sufficient. The stainless steel construction ensures long-lasting performance with minimal upkeep."
              },
              {
                question: "Can invisible grills be installed on any type of window?",
                answer: "Yes, our invisible grills can be installed on various window types including casement, sliding, and fixed windows. We provide custom solutions for all window configurations."
              },
              {
                question: "Do invisible grills affect the view from inside?",
                answer: "No, invisible grills are designed to maintain the clear view from inside while providing security. The thin wires are barely noticeable from inside the room."
              },
              {
                question: "What is the warranty period for invisible grills?",
                answer: "We provide 10 years warranty on our invisible grills. The stainless steel construction ensures durability and long-term performance with minimal maintenance."
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
                description: "We measure your windows/balconies and assess the installation requirements."
              },
              {
                step: "2", 
                title: "Custom Design",
                description: "Grills are designed to fit your specific requirements and aesthetic preferences."
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Expert technicians install the grills using proper mounting techniques."
              },
              {
                step: "4",
                title: "Quality Check",
                description: "Final inspection ensures everything is properly installed and functioning."
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

        {/* Installation Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation Guide</h2>
          <div className="bg-white rounded-xl shadow-professional-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Installation Checklist</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Ensure window frames are clean and dry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Remove any existing grills or obstructions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Provide clear access to installation areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Confirm design preferences and measurements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Installation Care</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Regular cleaning with mild detergent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Inspect mounting hardware periodically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Avoid using abrasive cleaning materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Schedule annual maintenance inspections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Kumar",
                location: "Hyderabad",
                rating: 5,
                text: "The invisible grills are perfect! They provide security without blocking our view. Highly recommended."
              },
              {
                name: "Meera Joshi",
                location: "Secunderabad", 
                rating: 5,
                text: "Excellent quality and professional installation. The grills blend perfectly with our home design."
              },
              {
                name: "Vikram Singh",
                location: "Gachibowli",
                rating: 5,
                text: "Great service and quality products. The invisible grills give us peace of mind with our children."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Install Invisible Grills?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote for your invisible grill installation. 
            Our experts will help you choose the perfect solution for your home.
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

export default InvisibleGrillsService;
