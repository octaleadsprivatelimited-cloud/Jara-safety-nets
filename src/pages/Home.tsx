import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Phone, ArrowRight, Eye, Target, Building, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-primary text-white section-padding">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Free Installation & Inspection
            </h1>
            <div className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
              +91 8074616049
            </div>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto">
              JARA Safety Nets - Complete Safety & Bird Proofing Solutions by Installation of Nets. 
              Cost Effective, Customizable. We are Leading Manufacturer and Supplier of Quality Netting with Installation & Warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center text-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Title Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop" 
                  alt="Children Safety Nets - JARA Safety Nets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  Child Safe
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900">Children Safety Nets</h3>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop" 
                  alt="Duct Area Safety Nets - Bird Protection Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  Bird Free
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900">Duct Area Safety Nets</h3>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop" 
                  alt="All Invisible Grills - Modern Security Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  Invisible
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900">All Invisible Grills</h3>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop" 
                  alt="Sports Nets Installation - Cricket, Football, Tennis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  Sports Ready
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-900">Sports Nets Installation</h3>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enquiry Us</h2>
          <p className="text-xl mb-8 text-blue-100">Best Quality Netting - Submit Here</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">JARA Safety Services & Invisible Grills</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Submit Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Installation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free Installation & Free Inspection
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Balcony Nets</h3>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Grills for Windows</h3>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Casement Invisible Grills</h3>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Cricket Nets</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="text-center p-6 bg-indigo-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Balcony Invisible Grills</h3>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Industrial Safety Nets</h3>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Bird Spikes</h3>
            </div>
            
            <div className="text-center p-6 bg-teal-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Building Nets</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Are The Best Choice For You Safety Nets Services
              </h2>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                JARA Safety Services & Invisible Grills
              </h3>
              <p className="text-gray-600 mb-6">
                Complete Bird Proofing Solutions by Installation of Nets, Cost Effective, Customizable. 
                We are Leading Manufacturer and Supplier of Bird Netting with Installation & Warranty.
                Our Team with 12+ Years of Experience & Expert in Installation of Quality Pigeon Netting
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-semibold text-gray-900">+91 8074616049</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">Call Us</p>
              <p className="text-gray-600 mt-4">Quality & Warranty Assured for Nets</p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                alt="Safety Nets Installation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Safety Nets Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Nets Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality & Warranty Assured for Nets - 12+ Years of Experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Children Safety Nets</h3>
              <p className="text-gray-600 mb-4">+91 8074616049</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Duct Area Safety Nets</h3>
              <p className="text-gray-600 mb-4">+91 8074616049</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">All Invisible Grills</h3>
              <p className="text-gray-600 mb-4">+91 8074616049</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">Sports Nets Installation</h3>
              <p className="text-gray-600 mb-4">+91 8074616049</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Installation from Experts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Installation from Experts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the best choice for your safety nets services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">12+ Years Experience</h3>
              <p className="text-gray-600 text-sm">
                We are having 12+ Years of Experience in Installing All types of Safety Nets
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Trained Team</h3>
              <p className="text-gray-600 text-sm">
                Our Team was trained in fixing and installation of nets in Apartments, Industries and all sports nets
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Safety Norms</h3>
              <p className="text-gray-600 text-sm">
                We Install Nets by Following all Safety Norms by wearing Safety Rope along with All Required Safety Equipments
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Expert Service</h3>
              <p className="text-gray-600 text-sm">
                Expert fixing safety nets, we have served almost all major residential & commercial requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about safety solutions and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop" 
                  alt="Balcony Safety Nets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Balcony Nets</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  "Ensuring Peace of Mind: The Importance of Balcony Nets"
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Balcony Nets:</strong> A Crucial Element for Peaceful Living. In today's fast-paced world, ensuring the protection of our loved ones is of utmost importance. One area that often goes overlooked is balcony safety...
                </p>
                <Link to="/blog/balcony-safety-nets" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop" 
                  alt="Pigeon Prevention Nets"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Pigeon Nets</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  "Protecting Your Property: The Importance of Pigeon Prevention Nets"
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Safeguard Your Assets:</strong> The Significance of Pigeon Prevention Nets. Protecting your property is of utmost importance. Pigeon nets play a crucial role in ensuring the security and well-being of your property...
                </p>
                <Link to="/blog/pigeon-prevention-nets" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            24/7 Support Services Help?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Need immediate assistance? Our expert team is available round the clock to help you with all your safety net requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Enquiry Now
            </Link>
            <a
              href="tel:+918074616049"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get a free quote for your safety net requirements. Our experts are ready to help you choose the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Get Free Quote
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;