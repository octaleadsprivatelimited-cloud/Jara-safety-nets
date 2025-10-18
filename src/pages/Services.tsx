import React from 'react';
import { Users, Phone, CheckCircle, Home, Bird, Baby, Target, Eye, Building, Shirt, Bug, Sun, TreePine, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  slug: string;
}

const Services = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      teal: 'bg-teal-100 text-teal-600',
      pink: 'bg-pink-100 text-pink-600',
      lime: 'bg-lime-100 text-lime-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      violet: 'bg-violet-100 text-violet-600',
      amber: 'bg-amber-100 text-amber-600',
      rose: 'bg-rose-100 text-rose-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  const services: Service[] = [
    {
      icon: Home,
      title: 'Balcony Safety Nets',
      description: 'Secure your balcony with high-quality safety nets to prevent falls and protect your family.',
      color: 'blue',
      slug: 'balcony-safety-nets'
    },
    {
      icon: Bird,
      title: 'Bird Protection Nets',
      description: 'Keep birds away from your property while maintaining aesthetics with our bird protection solutions.',
      color: 'green',
      slug: 'bird-protection-nets'
    },
    {
      icon: Baby,
      title: 'Children Safety Nets',
      description: 'Create a safe environment for children with specially designed safety nets for windows and balconies.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Cricket Practice Nets',
      description: 'Professional cricket practice nets for sports facilities, schools, and residential areas.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'All Sports Nets',
      description: 'Comprehensive sports net solutions for football, badminton, tennis, and other sports.',
      color: 'red',
      slug: 'sports-nets'
    },
    {
      icon: Eye,
      title: 'Invisible Grills',
      description: 'Modern invisible grills that provide security without obstructing your view.',
      color: 'indigo',
      slug: 'invisible-grills'
    },
    {
      icon: TreePine,
      title: 'Coconut Safety Nets',
      description: 'Protect against falling coconuts with our specialized safety net systems.',
      color: 'yellow'
    },
    {
      icon: Building,
      title: 'Building Safety Nets',
      description: 'Comprehensive building safety net solutions for construction and renovation projects.',
      color: 'teal'
    },
    {
      icon: Shirt,
      title: 'Cloth Hangers',
      description: 'Durable and weather-resistant cloth hanging solutions for outdoor spaces.',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'Bird Spikes',
      description: 'Effective bird deterrent spikes to prevent birds from landing on ledges and surfaces.',
      color: 'lime'
    },
    {
      icon: Bug,
      title: 'Mosquito Nets',
      description: 'High-quality mosquito nets for windows and doors to protect against insects.',
      color: 'cyan'
    },
    {
      icon: Sun,
      title: 'Shade Nets',
      description: 'Professional shade netting solutions for agricultural and commercial applications.',
      color: 'emerald'
    },
    {
      icon: Building,
      title: 'Deck Area Safety Nets',
      description: 'Safety net solutions for deck areas, terraces, and elevated platforms.',
      color: 'violet'
    },
    {
      icon: Building,
      title: 'Building Covering',
      description: 'Complete building covering solutions for construction sites and temporary structures.',
      color: 'amber'
    },
    {
      icon: TreePine,
      title: 'Green Grass Installation',
      description: 'Artificial and natural grass installation services for lawns, terraces, and gardens.',
      color: 'rose'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive safety net solutions for all your protection needs
          </p>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Safety & Bird Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Balcony Safety Nets</li>
                <li>• Kids Net for Balcony</li>
                <li>• Pets Safety Nets</li>
                <li>• Grill Balcony Safety Nets</li>
                <li>• Pigeon Nets</li>
                <li>• Bird Spikes</li>
                <li>• Building Safety Nets</li>
                <li>• Duct Area Safety Nets</li>
                <li>• Construction Safety Nets</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Invisible Grills</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Invisible safety grill for balcony</li>
                <li>• Balcony invisible grill</li>
                <li>• Invisible grills for windows</li>
                <li>• Casement invisible grille</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Sports Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Cricket Practice Nets</li>
                <li>• Sports Ball Stop Nets</li>
                <li>• Football Ball Stop Netting</li>
                <li>• Terrace Cricket Nets</li>
                <li>• Swimming Pool Safety Nets</li>
                <li>• Shade Nets</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Service Descriptions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Service Information</h2>
          
          {/* Safety & Bird Nets Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Safety & Bird Nets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Balcony Safety Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  High-quality safety nets for balconies to prevent falls and protect your family. 
                  Made with durable materials and professional installation.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Kids Net for Balcony</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Specially designed safety nets for children's protection on balconies. 
                  Child-safe materials with secure installation.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Pets Safety Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Pet-friendly safety nets to keep your beloved pets safe on balconies and terraces. 
                  Strong and durable for all pet sizes.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Pigeon Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Professional pigeon netting solutions to keep pigeons away from your property. 
                  Effective and aesthetically pleasing.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Bird Spikes</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Bird deterrent spikes to prevent birds from landing on ledges, windowsills, and other surfaces.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Construction Safety Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Heavy-duty safety nets for construction sites to protect workers and prevent falling objects.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
          </div>

          {/* Invisible Grills Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-800 mb-8">Invisible Grills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Invisible Safety Grill for Balcony</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Modern invisible grills that provide security without obstructing your view. 
                  Made with high-tensile stainless steel wires.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Balcony Invisible Grill</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Custom invisible grills for balconies that blend seamlessly with your architecture while providing security.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Invisible Grills for Windows</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Window invisible grills that maintain the aesthetic appeal while ensuring safety and security.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Casement Invisible Grille</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Specialized invisible grills for casement windows with smooth operation and durability.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
          </div>

          {/* Sports Nets Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-orange-800 mb-8">Sports Nets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Cricket Practice Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Professional cricket practice nets for sports facilities, schools, and residential areas. 
                  High-quality materials for durability.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Sports Ball Stop Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Ball stop nets for various sports including football, basketball, and tennis. 
                  Prevents balls from going out of bounds.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Football Ball Stop Netting</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Specialized football ball stop netting for training grounds and sports facilities. 
                  Heavy-duty construction for football use.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Terrace Cricket Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Cricket nets designed for terrace installations. Perfect for residential cricket practice areas.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Swimming Pool Safety Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Safety nets for swimming pools to prevent accidents and ensure pool safety. 
                  Weather-resistant materials.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Shade Nets</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Shade netting solutions for agricultural and commercial applications. 
                  UV resistant and durable.
                </p>
                <p className="text-blue-600 font-semibold">+91 8074616049</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceImages = [
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop', // Balcony Safety Nets
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop', // Bird Protection Nets
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop', // Children Safety Nets
                'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop', // Cricket Practice Nets
                'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop', // All Sports Nets
                'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop', // Invisible Grills
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop', // Coconut Safety Nets
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop', // Building Safety Nets
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop', // Cloth Hangers
                'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop', // Bird Spikes
                'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop', // Mosquito Nets
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop', // Shade Nets
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop', // Deck Area Safety Nets
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop', // Building Covering
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop'  // Green Grass Installation
              ];
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 relative">
                    <img 
                      src={serviceImages[index]} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${getColorClasses(service.color)}`}>
                        {React.createElement(service.icon, { className: "w-6 h-6" })}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Learn More →
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                      >
                        Request Quote →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Solutions?</h2>
          <p className="text-gray-600 mb-6">
            We provide customized safety net solutions tailored to your specific requirements. 
            Contact us for expert consultation and installation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918074616049" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <a 
              href="https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20your%20safety%20net%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;