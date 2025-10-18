import React from 'react';
import { Shield, Users, Award, Clock, Phone, MapPin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About JARA Safety Nets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Owned by Philip Raju (Prop.) - Your trusted partner in safety solutions
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About JARA Safety Nets</h2>
            <p className="text-gray-600 mb-4">
              JARA Safety Nets is owned and operated by Philip Raju (Prop.), a leading manufacturer and supplier of quality netting with installation & warranty. We specialize in complete safety & bird proofing solutions by installation of nets, cost effective and customizable.
            </p>
            <p className="text-gray-600 mb-4">
              Our team with 12+ years of experience is expert in installation of quality pigeon netting and safety nets. We are the best choice for your safety nets services, offering free installation and free inspection for all our services.
            </p>
            <p className="text-gray-600 mb-4">
              We offer best quality nets & competitive price. Our team was trained in fixing and installation of nets in apartments, industries and all sports nets. We install nets by following all safety norms by wearing safety rope along with all required safety equipments.
            </p>
            <p className="text-gray-600">
              Based in Hyderabad, Telangana, we serve customers across the region with dedication and professionalism. Our mission is to protect every space with safety and strength, ensuring peace of mind for families and communities.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">12+</h3>
                <p className="text-blue-100">Years Experience</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">500+</h3>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">100%</h3>
                <p className="text-blue-100">Quality Assured</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">24/7</h3>
                <p className="text-blue-100">Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Our Service Works</h2>
          <div className="grid grid-cols resources-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Identifying Problems</h3>
              <p className="text-gray-600">
                We assess your property and identify specific safety requirements and potential risks.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Your Problem</h3>
              <p className="text-gray-600">
                Our experts research and analyze the best solutions for your specific requirements.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions Your Problem</h3>
              <p className="text-gray-600">
                We provide customized safety net solutions tailored to your specific needs.
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation with Experts</h3>
              <p className="text-gray-600">
                Our expert team provides professional consultation and installation services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 8074616049</p>
              <p className="text-gray-600">+91 8466055207</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">philipraju1999@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Green Park Colony, Road No.9<br />
                Karmanghat, Hyderabad<br />
                Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To provide the highest quality safety net solutions that protect lives, property, and investments while maintaining the highest standards of service and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;