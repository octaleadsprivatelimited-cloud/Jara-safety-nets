import React from 'react';
import { MapPin, Eye, Phone } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const Gallery = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="absolute inset-0 bg-mesh opacity-20"></div>
          <FloatingElements count={6} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']} size="small" />
          <ParallaxElement speed={0.3} direction="up">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/10 rounded-full animate-pulse-glow"></div>
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="down">
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-600/10 rounded-full animate-wave"></div>
          </ParallaxElement>
          <div className="relative">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-gradient animate-text-reveal">
                Our Gallery
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Explore our comprehensive safety net installations and solutions
              </p>
            </ScrollAnimation>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-green-50/20"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center text-gradient animate-text-reveal">Safety & Bird Nets Gallery</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Balcony Safety Net', image: '/images/Balcony Safety Nets.webp', badge: 'Safety First', badgeColor: 'bg-blue-600' },
              { name: 'Kids Net for Balcony', image: '/images/Children Safety Nets.avif', badge: 'Child Safe', badgeColor: 'bg-green-600' },
              { name: 'Pets Safety Nets', image: '/images/Children Safety Nets.avif', badge: 'Pet Friendly', badgeColor: 'bg-purple-600' },
              { name: 'Grill Balcony Safety Nets', image: '/images/All Invisible Grills.webp', badge: 'Secure', badgeColor: 'bg-orange-600' },
              { name: 'Pigeon Nets', image: '/images/Bird Protection Nets.webp', badge: 'Bird Free', badgeColor: 'bg-red-600' },
              { name: 'Bird Spikes', image: '/images/Bird Spikes.webp', badge: 'Deterrent', badgeColor: 'bg-indigo-600' },
              { name: 'Building Safety Nets', image: '/images/Building Safety Nets.avif', badge: 'Industrial', badgeColor: 'bg-teal-600' },
              { name: 'Duct Area Safety Nets', image: '/images/Duct Area Safety Nets.avif', badge: 'Ventilation', badgeColor: 'bg-yellow-600' },
              { name: 'Construction Safety Nets', image: '/images/Building Covering.avif', badge: 'Construction', badgeColor: 'bg-pink-600' }
            ].map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.name} - JARA Safety Nets Professional Installation`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}>
                        {service.badge}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300 animate-text-reveal">{service.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 animate-fade-in-up">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                    <div className="mt-2">
                      <a 
                        href="tel:+918074616049"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center hover:scale-105 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        +91 8074616049
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-green-600/0 group-hover:from-blue-600/5 group-hover:to-green-600/5 transition-all duration-500 rounded-lg"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <div className="mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-blue-50/20"></div>
          <FloatingElements count={3} colors={['#10b981', '#3b82f6', '#f59e0b']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center text-gradient animate-text-reveal">Invisible Grills Gallery</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Invisible safety grill for balcony', image: '/images/All Invisible Grills.webp' },
              { name: 'Balcony invisible grill', image: '/images/All Invisible Grills.webp' },
              { name: 'Invisible grills for windows', image: '/images/All Invisible Grills.webp' },
              { name: 'Casement invisible grille', image: '/images/All Invisible Grills.webp' }
            ].map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.name} - JARA Safety Nets Professional Installation`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        Invisible
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300 animate-text-reveal">{service.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 animate-fade-in-up">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                    <div className="mt-2">
                      <a 
                        href="tel:+918074616049"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center hover:scale-105 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        +91 8074616049
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 to-blue-600/0 group-hover:from-green-600/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-lg"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <div className="mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-red-50/20"></div>
          <FloatingElements count={4} colors={['#f59e0b', '#ef4444', '#3b82f6', '#10b981']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center text-gradient animate-text-reveal">Sports Nets Gallery</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Cricket Practice Nets', image: '/images/Cricket Practice Nets.webp' },
              { name: 'Sports Ball Stop Nets', image: '/images/Sports Nets.webp' },
              { name: 'Football Ball Stop Netting', image: '/images/All Sports Nets.avif' },
              { name: 'Terrace Cricket Nets', image: '/images/Cricket Practice Nets.webp' },
              { name: 'Swimming Pool Safety Nets', image: '/images/Sports Nets.webp' },
              { name: 'Shade Nets', image: '/images/Shade Nets.webp' }
            ].map((service, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.name} - JARA Safety Nets Professional Installation`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        Sports
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300 animate-text-reveal">{service.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 animate-fade-in-up">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                    <div className="mt-2">
                      <a 
                        href="tel:+918074616049"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center hover:scale-105 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        +91 8074616049
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-red-600/0 group-hover:from-orange-600/5 group-hover:to-red-600/5 transition-all duration-500 rounded-lg"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 relative overflow-hidden">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            <div className="absolute inset-0 bg-mesh opacity-10"></div>
            <FloatingElements count={5} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="small" />
            <ParallaxElement speed={0.3} direction="up">
              <div className="absolute top-10 left-10 w-16 h-16 bg-blue-600/10 rounded-full animate-pulse-glow"></div>
            </ParallaxElement>
            <ParallaxElement speed={0.4} direction="down">
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-600/10 rounded-full animate-wave"></div>
            </ParallaxElement>
            <div className="relative">
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">
                  Ready to See Your Project Here?
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <p className="text-gray-600 mb-6 animate-fade-in-up">
                  Contact us today for a free consultation and quote. Let us help you choose the perfect safety net solution for your needs.
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
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Quote
                  </CreativeButton>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;