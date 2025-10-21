import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Phone, CheckCircle, Shield } from 'lucide-react';

const BalconySafetyNets = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-professional-lg overflow-hidden">
          <div className="h-64 md:h-80 relative">
            <img 
<<<<<<< HEAD
              src="/images/Blog 1.webp" 
=======
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop" 
>>>>>>> 193e07086d05fa80a406818c5ad9d94e72c5760a
              alt="Balcony Safety Nets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Safety Nets
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>JARA Safety Nets Team</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                <span>Safety, Balcony, Protection</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ensuring Peace of Mind: The Importance of Balcony Safety Nets
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <strong>Balcony Nets:</strong> A Crucial Element for Peaceful Living. In today's fast-paced world, 
                ensuring the protection of our loved ones is of utmost importance. One area that often goes 
                overlooked is balcony safety.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Balcony Safety Nets Are Essential</h2>
              
              <p className="text-gray-700 mb-6">
                Balconies are wonderful spaces that provide fresh air, natural light, and a connection to the outdoors. 
                However, they also present significant safety risks, especially for children, elderly family members, 
                and pets. Accidental falls from balconies can result in serious injuries or worse.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Key Benefits of Balcony Safety Nets
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span><strong>Child Safety:</strong> Prevents children from accidentally falling through balcony railings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span><strong>Pet Protection:</strong> Keeps pets safe while allowing them to enjoy the balcony</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span><strong>Peace of Mind:</strong> Allows you to relax knowing your family is protected</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span><strong>Unobstructed View:</strong> Maintains the aesthetic appeal of your balcony</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing the Right Safety Net</h2>
              
              <p className="text-gray-700 mb-6">
                When selecting balcony safety nets, several factors should be considered to ensure maximum protection 
                and durability:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Material Quality</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality HDPE or nylon nets that are UV resistant and weatherproof, ensuring long-lasting protection.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Installation</h3>
                  <p className="text-gray-600 text-sm">
                    Expert installation by trained professionals ensures proper tension and secure mounting.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Sizing</h3>
                  <p className="text-gray-600 text-sm">
                    Nets should be custom-fitted to your specific balcony dimensions for optimal coverage.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Regular inspection and maintenance ensure continued safety and performance over time.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation Process</h2>
              
              <p className="text-gray-700 mb-6">
                Professional installation of balcony safety nets involves several key steps to ensure maximum safety 
                and effectiveness:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                <li><strong>Site Assessment:</strong> Our experts visit your property to measure and assess the balcony structure</li>
                <li><strong>Custom Design:</strong> Nets are designed specifically for your balcony's dimensions and requirements</li>
                <li><strong>Professional Installation:</strong> Trained technicians install the nets using proper mounting techniques</li>
                <li><strong>Quality Testing:</strong> Each installation is tested to ensure it meets safety standards</li>
                <li><strong>Final Inspection:</strong> A thorough inspection ensures everything is properly secured</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose JARA Safety Nets?</h2>
              
              <p className="text-gray-700 mb-6">
                With over 12 years of experience in safety net installation, JARA Safety Nets has become the trusted 
                choice for families across Hyderabad. Our commitment to quality and safety is unmatched.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Promise to You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-blue-800">Free Installation & Inspection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-blue-800">Quality & Warranty Assured</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-blue-800">12+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-blue-800">Professional Team</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-600 text-white rounded-lg p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Balcony?</h3>
              <p className="text-blue-100 mb-6">
                Get a free consultation and quote for your balcony safety net installation. 
                Our experts are ready to help you choose the best solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+918074616049"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BalconySafetyNets;
