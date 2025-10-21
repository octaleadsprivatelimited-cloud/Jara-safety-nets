import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Phone, CheckCircle, Bird } from 'lucide-react';

const PigeonPreventionNets = () => {
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
              src="/images/Blog 2.avif" 
=======
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop" 
>>>>>>> 193e07086d05fa80a406818c5ad9d94e72c5760a
              alt="Pigeon Prevention Nets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Bird Protection
              </span>
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>JARA Safety Nets Team</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                <span>Bird Control, Pigeon Nets, Protection</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Protecting Your Property: The Importance of Pigeon Prevention Nets
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <strong>Safeguard Your Assets:</strong> The Significance of Pigeon Prevention Nets. Protecting your 
                property is of utmost importance. Pigeon nets play a crucial role in ensuring the security and 
                well-being of your property.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Pigeon Problem</h2>
              
              <p className="text-gray-700 mb-6">
                Pigeons are among the most common urban birds that can cause significant damage to buildings and 
                create health hazards. They nest in building crevices, balconies, and ledges, leading to:
              </p>

              <div className="bg-red-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <Bird className="w-6 h-6 mr-2" />
                  Problems Caused by Pigeons
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Health Risks:</strong> Droppings can carry diseases and create respiratory issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Property Damage:</strong> Acidic droppings can corrode building materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Noise Pollution:</strong> Constant cooing and flapping can disturb residents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <span><strong>Aesthetic Issues:</strong> Unsightly droppings and nesting materials</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Pigeon Prevention Nets Work</h2>
              
              <p className="text-gray-700 mb-6">
                Pigeon prevention nets are specially designed barriers that prevent pigeons from accessing specific 
                areas of your building. These nets are:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Barrier</h3>
                  <p className="text-gray-600 text-sm">
                    Creates a physical barrier that prevents pigeons from landing or nesting in protected areas.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Humane Solution</h3>
                  <p className="text-gray-600 text-sm">
                    Provides a humane way to deter pigeons without causing them harm, simply redirecting them elsewhere.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Weather Resistant</h3>
                  <p className="text-gray-600 text-sm">
                    Made from durable materials that withstand various weather conditions and UV exposure.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Low Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Requires minimal maintenance while providing long-term protection against pigeon infestation.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Pigeon Prevention Solutions</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pigeon Nets</h3>
                  <p className="text-gray-700 mb-4">
                    The most effective solution for large areas. These nets are installed to cover balconies, 
                    terraces, and building facades, creating a complete barrier against pigeons.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Custom-sized for specific areas</li>
                    <li>UV resistant and weatherproof</li>
                    <li>Nearly invisible when properly installed</li>
                    <li>Long-lasting protection</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bird Spikes</h3>
                  <p className="text-gray-700 mb-4">
                    Ideal for ledges, window sills, and other narrow surfaces where pigeons tend to perch. 
                    These spikes make it uncomfortable for birds to land.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Stainless steel construction</li>
                    <li>Easy to install and maintain</li>
                    <li>Effective deterrent for small areas</li>
                    <li>Blends with building architecture</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation Process</h2>
              
              <p className="text-gray-700 mb-6">
                Professional installation ensures maximum effectiveness and durability of pigeon prevention systems:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                <li><strong>Site Survey:</strong> Our experts assess the area to identify pigeon activity and determine the best solution</li>
                <li><strong>Custom Design:</strong> Nets are designed to fit your specific building structure and requirements</li>
                <li><strong>Professional Installation:</strong> Trained technicians install the system using proper mounting techniques</li>
                <li><strong>Quality Testing:</strong> Each installation is tested to ensure it effectively prevents pigeon access</li>
                <li><strong>Maintenance Guide:</strong> We provide guidance on maintaining the system for long-term effectiveness</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Professional Installation</h2>
              
              <div className="bg-green-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">Why Choose Professional Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Expert Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Proper Installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Quality Materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800">Warranty Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-600 text-white rounded-lg p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">Need Pigeon Prevention Solutions?</h3>
              <p className="text-green-100 mb-6">
                Get a free consultation and quote for your pigeon prevention needs. 
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
        </article>
      </div>
    </div>
  );
};

export default PigeonPreventionNets;
