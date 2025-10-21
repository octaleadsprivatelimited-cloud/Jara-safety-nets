import React from 'react';
import { Shield, Users, Award, Clock, Phone, MapPin, Mail, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: '12+ Years Experience',
      description: 'We have 12+ years of experience in installing all types of safety nets',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Trained Team',
      description: 'Our team is trained in fixing and installation of nets in apartments, industries and all sports nets',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Safety Norms',
      description: 'We install nets by following all safety norms with proper safety equipment',
      color: 'purple'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Quality & Warranty Assured for all our safety net installations',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Are The Best Choice For Your Safety Nets Services
            </h2>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              JARA Safety Services & Invisible Grills
            </h3>
            <p className="text-gray-600 mb-6">
              Complete Bird Proofing Solutions by Installation of Nets, Cost Effective, Customizable. 
              We are Leading Manufacturer and Supplier of Bird Netting with Installation & Warranty.
              Our Team with 12+ Years of Experience & Expert in Installation of Quality Pigeon Netting
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">+91 8074616049</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Call Us</p>
            <p className="text-gray-600">Quality & Warranty Assured for Nets</p>
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

        {/* Features Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
