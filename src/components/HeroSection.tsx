import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Users, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Quick Stats */}
      <div className="relative bg-white/10 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-blue-200">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-blue-200">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-blue-200">Quality Assured</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
