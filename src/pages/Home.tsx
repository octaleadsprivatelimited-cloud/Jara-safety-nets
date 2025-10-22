import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Phone, ArrowRight, Eye, Target, Building, Zap, CheckCircle, Star, Clock, MapPin, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Info Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 8074616049</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">philipraju1999@gmail.com</span>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-sm font-semibold">FREE INSTALLATION & FREE INSPECTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20" style={{
        backgroundImage: 'url(/images/Blog 1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <FloatingElements count={6} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']} size="small" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Your Reliable Partner for Safety Net Solutions
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 drop-shadow-md">
                At JARA Safety Nets, we recognize that peace of mind comes from feeling secure. 
                Whether it's protecting your home, business, or loved ones, we're committed to 
                offering customized safety solutions that meet your specific needs.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CreativeButton variant="gradient" size="lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </CreativeButton>
                <CreativeButton variant="glow" size="lg">
                  <Shield className="mr-2 w-5 h-5" />
                  Get Free Quote
                </CreativeButton>
              </div>
            </ScrollAnimation>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SAFETY NETS</h3>
                <p className="text-gray-600 mb-4">Complete safety solutions for balconies, construction sites, and industrial areas.</p>
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  View Services <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">BIRD NETS</h3>
                <p className="text-gray-600 mb-4">Effective bird control solutions to protect your property from pigeons and other birds.</p>
                <Link to="/services" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                  View Services <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SPORTS NETS</h3>
                <p className="text-gray-600 mb-4">Professional sports netting for cricket, football, and other sporting activities.</p>
                <Link to="/services" className="text-orange-600 font-semibold hover:text-orange-800 transition-colors">
                  View Services <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* All Types of Safety Nets Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All Types of Safety Nets Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in installing safety nets for a variety of applications, including 
                balcony safety, pigeon control, anti-bird protection, cricket practice, child safety, 
                construction sites, duct areas, buildings, industrial facilities, swimming pools, 
                stairways, monkey prevention, terrace protection, glass protection, car parking, 
                coconut trees, and more.
              </p>
            </div>
          </ScrollAnimation>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Balcony Safety Nets */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Balcony Safety Nets.webp"
                    alt="Balcony Safety Nets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Safety
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Balcony Safety Nets</h3>
                  <p className="text-gray-600 mb-4">
                    Ensure balcony safety with our high-quality Balcony Safety Nets service. 
                    Our durable nets provide protection against accidents and keep your loved ones safe.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/balcony-safety-nets" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Pigeon Nets */}
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Bird Protection Nets.webp"
                    alt="Pigeon Nets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Bird Control
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pigeon Nets</h3>
                  <p className="text-gray-600 mb-4">
                    Safeguard your property from bothersome pigeons with our high-quality Pigeon Nets. 
                    Engineered to deter birds while preserving aesthetic appeal.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/bird-protection-nets" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Cricket Practice Nets */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Cricket Practice Nets.webp"
                    alt="Cricket Practice Nets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Sports
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cricket Practice Nets</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your cricket training with our premium Cricket Practice Nets. 
                    Engineered for durability and peak performance, our nets offer a secure setting.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/cricket-practice-nets" className="text-orange-600 font-semibold hover:text-orange-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Kids Net For Balcony */}
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Children Safety Nets.avif"
                    alt="Kids Net For Balcony"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Kids Safety
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kids Net For Balcony</h3>
                  <p className="text-gray-600 mb-4">
                    Ensure a safe play area for your Children with our balcony nets designed specifically for Kids. 
                    Crafted with child safety as a priority.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/children-safety-nets" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Anti Bird Nets */}
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Bird Protection Nets.webp"
                    alt="Anti Bird Nets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Anti Bird
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Anti Bird Nets</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your property clean and safe from avian intruders with our premium Anti-Bird Nets. 
                    Designed to effectively deter birds without harming them.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/bird-protection-nets" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Pets Safety Nets */}
            <ScrollAnimation animation="fadeInUp" delay={700}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src="/images/Children Safety Nets.avif"
                    alt="Pets Safety Nets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    Pet Safety
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pets Safety Nets</h3>
                  <p className="text-gray-600 mb-4">
                    Ensure the safety of your beloved pets with our reliable Pet Safety Nets. 
                    Designed to create a secure environment for your furry friends.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link to="/services/children-safety-nets" className="text-pink-600 font-semibold hover:text-pink-800 transition-colors">
                      Read More <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Phone className="w-4 h-4 mr-1" />
                      +91 8074616049
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                "Choosing Professional Safety Net Services" - For Safety, Bird, or Sports Nets: Enjoy Numerous Benefits
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise And Experience</h3>
                <p className="text-gray-600">
                  Our seasoned professionals bring years of experience to every project, ensuring precision and reliability.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Installation</h3>
                <p className="text-gray-600">
                  We prioritize professionalism, adhering to industry standards to ensure the effectiveness and durability of our safety nets.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Solutions</h3>
                <p className="text-gray-600">
                  Tailored to your unique needs, whether for construction sites, sports facilities, or residential properties.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellent Customer Service</h3>
                <p className="text-gray-600">
                  From initial consultation to post-installation support, we prioritize your safety and satisfaction.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Our expert team is ready to provide 
              you with the best safety net solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CreativeButton variant="glow" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 8074616049
              </CreativeButton>
              <CreativeButton variant="gradient" size="lg" className="bg-green-600 hover:bg-green-700">
                <Shield className="mr-2 w-5 h-5" />
                Get Free Quote
              </CreativeButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;