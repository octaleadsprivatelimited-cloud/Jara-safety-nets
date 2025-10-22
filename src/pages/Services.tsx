import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Phone, CheckCircle, Home, Bird, Baby, Target, Eye, Building, Shirt, Bug, Sun, TreePine, LucideIcon } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';
import AnimatedCard from '../components/AnimatedCard';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  slug: string;
}

const Services = () => {
  const serviceImages = [
    {
      title: 'Balcony Safety Nets',
      image: '/images/Balcony Safety Nets.webp',
      description: 'Professional balcony safety installation'
    },
    {
      title: 'Bird Protection Nets', 
      image: '/images/Bird Protection Nets.webp',
      description: 'Effective bird prevention solutions'
    },
    {
      title: 'Sports Nets',
      image: '/images/Sports Nets.webp',
      description: 'Professional sports facility nets'
    }
  ];

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
      color: 'purple',
      slug: 'children-safety-nets'
    },
    {
      icon: Target,
      title: 'Cricket Practice Nets',
      description: 'Professional cricket practice nets for sports facilities, schools, and residential areas.',
      color: 'orange',
      slug: 'cricket-practice-nets'
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
      color: 'yellow',
      slug: 'coconut-safety-nets'
    },
    {
      icon: Building,
      title: 'Building Safety Nets',
      description: 'Comprehensive building safety net solutions for construction and renovation projects.',
      color: 'teal',
      slug: 'building-safety-nets'
    },
    {
      icon: Shirt,
      title: 'Cloth Hangers',
      description: 'Durable and weather-resistant cloth hanging solutions for outdoor spaces.',
      color: 'pink',
      slug: 'cloth-hangers'
    },
    {
      icon: CheckCircle,
      title: 'Bird Spikes',
      description: 'Effective bird deterrent spikes to prevent birds from landing on ledges and surfaces.',
      color: 'lime',
      slug: 'bird-spikes'
    },
    {
      icon: Bug,
      title: 'Mosquito Nets',
      description: 'High-quality mosquito nets for windows and doors to protect against insects.',
      color: 'cyan',
      slug: 'mosquito-nets'
    },
    {
      icon: Sun,
      title: 'Shade Nets',
      description: 'Professional shade netting solutions for agricultural and commercial applications.',
      color: 'emerald',
      slug: 'shade-nets'
    },
    {
      icon: Building,
      title: 'Deck Area Safety Nets',
      description: 'Safety net solutions for deck areas, terraces, and elevated platforms.',
      color: 'violet',
      slug: 'deck-area-safety-nets'
    },
    {
      icon: Building,
      title: 'Building Covering',
      description: 'Complete building covering solutions for construction sites and temporary structures.',
      color: 'amber',
      slug: 'building-covering'
    },
    {
      icon: TreePine,
      title: 'Green Grass Installation',
      description: 'Artificial and natural grass installation services for lawns, terraces, and gardens.',
      color: 'rose',
      slug: 'green-grass-installation'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden animate-gradient-shift">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-mesh opacity-20"></div>
          <FloatingElements count={6} colors={['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="small" />
          <ParallaxElement speed={0.3} direction="up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 animate-liquid-morph"></div>
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="down">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 animate-morphing"></div>
          </ParallaxElement>
          <div className="relative">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Professional Installation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Our Premium Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Professional safety net solutions for all your needs. From balcony safety to bird protection, 
                we provide comprehensive netting services with expert installation.
              </p>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceImages.map((service, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 200}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10 animate-pulse-glow"></div>
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img 
                        src={service.image} 
                        alt={service.description}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-200 transition-colors duration-300 animate-text-reveal">{service.title}</h3>
                    <p className="text-blue-100 text-sm animate-fade-in-up">{service.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center text-gradient animate-text-reveal">Service Categories</h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-full -translate-y-10 translate-x-10 animate-pulse-glow"></div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4 animate-text-reveal">Safety & Bird Nets</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="animate-fade-in-up">• Balcony Safety Nets</li>
                  <li className="animate-fade-in-up">• Kids Net for Balcony</li>
                  <li className="animate-fade-in-up">• Pets Safety Nets</li>
                  <li className="animate-fade-in-up">• Grill Balcony Safety Nets</li>
                  <li className="animate-fade-in-up">• Pigeon Nets</li>
                  <li className="animate-fade-in-up">• Bird Spikes</li>
                  <li className="animate-fade-in-up">• Building Safety Nets</li>
                  <li className="animate-fade-in-up">• Duct Area Safety Nets</li>
                  <li className="animate-fade-in-up">• Construction Safety Nets</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-600/10 rounded-full -translate-y-10 translate-x-10 animate-wave"></div>
                <h3 className="text-xl font-semibold text-green-800 mb-4 animate-text-reveal">Invisible Grills</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="animate-fade-in-up">• Invisible safety grill for balcony</li>
                  <li className="animate-fade-in-up">• Balcony invisible grill</li>
                  <li className="animate-fade-in-up">• Invisible grills for windows</li>
                  <li className="animate-fade-in-up">• Casement invisible grille</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600/10 rounded-full -translate-y-10 translate-x-10 animate-morphing"></div>
                <h3 className="text-xl font-semibold text-orange-800 mb-4 animate-text-reveal">Sports Nets</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="animate-fade-in-up">• Cricket Practice Nets</li>
                  <li className="animate-fade-in-up">• Sports Ball Stop Nets</li>
                  <li className="animate-fade-in-up">• Football Ball Stop Netting</li>
                  <li className="animate-fade-in-up">• Terrace Cricket Nets</li>
                  <li className="animate-fade-in-up">• Swimming Pool Safety Nets</li>
                  <li className="animate-fade-in-up">• Shade Nets</li>
                </ul>
              </div>
            </ScrollAnimation>
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
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10"></div>
          <FloatingElements count={6} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center text-gradient animate-text-reveal">All Our Services</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceImages = [
                '/images/Balcony Safety Nets.webp', // Balcony Safety Nets
                '/images/Bird Protection Nets.webp', // Bird Protection Nets
                '/images/Children Safety Nets.avif', // Children Safety Nets
                '/images/Cricket Practice Nets.webp', // Cricket Practice Nets
                '/images/All Sports Nets.avif', // All Sports Nets
                '/images/All Invisible Grills.webp', // Invisible Grills
                '/images/Coconut Safety Nets.webp', // Coconut Safety Nets
                '/images/Building Safety Nets.avif', // Building Safety Nets
                '/images/Cloth Hangers.webp', // Cloth Hangers
                '/images/Bird Spikes.webp', // Bird Spikes
                '/images/Mosquito Nets.avif', // Mosquito Nets
                '/images/Shade Nets.webp', // Shade Nets
                '/images/Deck Area Safety Nets.webp', // Deck Area Safety Nets
                '/images/Building Covering.avif', // Building Covering
                '/images/Green Grass Installation.avif'  // Green Grass Installation
              ];
              
              return (
                <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 100}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative group">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={serviceImages[index]} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${getColorClasses(service.color)}`}>
                          {React.createElement(service.icon, { className: "w-6 h-6" })}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm font-semibold text-gray-800">Professional Service</p>
                      </div>
                    </div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 animate-text-reveal">{service.title}</h3>
                      <p className="text-gray-600 mb-4 animate-fade-in-up">
                        {service.description}
                      </p>
                      <div className="flex space-x-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 hover:scale-105 relative z-20"
                        >
                          Read More →
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-all duration-300 hover:scale-105 relative z-20"
                        >
                          Request a Quote →
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          <ParallaxElement speed={0.3} direction="up">
            <div className="absolute top-10 left-10 w-16 h-16 bg-blue-600/10 rounded-full animate-pulse-glow"></div>
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="down">
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-600/10 rounded-full animate-wave"></div>
          </ParallaxElement>
          <div className="relative">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">Need Custom Solutions?</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <p className="text-gray-600 mb-6 animate-fade-in-up">
                We provide customized safety net solutions tailored to your specific requirements. 
                Contact us for expert consultation and installation services.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CreativeButton
                  variant="gradient"
                  size="lg"
                  className="inline-flex items-center justify-center"
                  onClick={() => window.location.href = 'tel:+918074616049'}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </CreativeButton>
                <CreativeButton
                  variant="glow"
                  size="lg"
                  className="inline-flex items-center justify-center"
                  onClick={() => window.location.href = 'https://wa.me/918074616049?text=Hi%2C%20I%27m%20interested%20in%20your%20safety%20net%20services'}
                >
                  <Users className="mr-2 w-5 h-5" />
                  WhatsApp Chat
                </CreativeButton>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
