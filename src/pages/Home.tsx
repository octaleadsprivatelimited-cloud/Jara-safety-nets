import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Phone, ArrowRight, Target, Building, Zap, CheckCircle, Star, Clock, MapPin, Mail, Sparkles } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const Home = () => {
  return (
    <div className="min-h-screen">

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with modern gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/balcony-safety-nets.webp)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        
        {/* Floating elements */}
        <FloatingElements count={8} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16']} size="medium" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white/90 text-sm font-medium">Professional Safety Solutions</span>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your Reliable Partner for
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Safety Net Solutions
                </span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                At JARA Safety Nets, we recognize that peace of mind comes from feeling secure. 
                Whether it's protecting your home, business, or loved ones, we're committed to 
                offering customized safety solutions that meet your specific needs.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scaleIn" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <a
                  href="tel:+918074616049"
                  className="group w-full sm:w-auto bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call Now: +91 8074616049
                </a>
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Shield className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Get Free Quote
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive safety solutions tailored to your specific needs
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety Nets</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete safety solutions for balconies, construction sites, and industrial areas with premium quality materials.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:gap-3 gap-2"
                >
                  View Services 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bird Protection</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Effective bird control solutions to protect your property from pigeons and other birds while maintaining aesthetics.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors group-hover:gap-3 gap-2"
                >
                  View Services 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sports Nets</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional sports netting for cricket, football, and other sporting activities with durable construction.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors group-hover:gap-3 gap-2"
                >
                  View Services 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* All Types of Safety Nets Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Safety Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We specialize in installing safety nets for a variety of applications, including 
                balcony safety, pigeon control, anti-bird protection, cricket practice, child safety, 
                construction sites, duct areas, buildings, industrial facilities, swimming pools, 
                stairways, monkey prevention, terrace protection, glass protection, car parking, 
                coconut trees, and more.
              </p>
            </div>
          </ScrollAnimation>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Balcony Safety Nets */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Balcony Safety Nets.webp"
                    alt="Balcony Safety Nets"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Safety
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Balcony Safety Nets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Ensure balcony safety with our high-quality Balcony Safety Nets service. 
                    Our durable nets provide protection against accidents and keep your loved ones safe.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/balcony-safety-nets" 
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Pigeon Nets */}
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Bird Protection Nets.webp"
                    alt="Pigeon Nets"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Bird Control
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Pigeon Nets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Safeguard your property from bothersome pigeons with our high-quality Pigeon Nets. 
                    Engineered to deter birds while preserving aesthetic appeal.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/bird-protection-nets" 
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Cricket Practice Nets */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Cricket Practice Nets.webp"
                    alt="Cricket Practice Nets"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Sports
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Cricket Practice Nets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Enhance your cricket training with our premium Cricket Practice Nets. 
                    Engineered for durability and peak performance, our nets offer a secure setting.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/cricket-practice-nets" 
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Kids Net For Balcony */}
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Children Safety Nets.avif"
                    alt="Kids Net For Balcony"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Kids Safety
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Kids Net For Balcony</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Ensure a safe play area for your Children with our balcony nets designed specifically for Kids. 
                    Crafted with child safety as a priority.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/children-safety-nets" 
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Anti Bird Nets */}
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Bird Protection Nets.webp"
                    alt="Anti Bird Nets"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Anti Bird
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Anti Bird Nets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Keep your property clean and safe from avian intruders with our premium Anti-Bird Nets. 
                    Designed to effectively deter birds without harming them.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/bird-protection-nets" 
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Pets Safety Nets */}
            <ScrollAnimation animation="fadeInUp" delay={700}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/images/Balcony Safety Nets.webp"
                    alt="Pets Safety Nets"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Pet Safety
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Pets Safety Nets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Ensure the safety of your beloved pets with our reliable Pet Safety Nets. 
                    Designed to create a secure environment for your furry friends.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/services/children-safety-nets" 
                      className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-800 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a 
                      href="tel:+918074616049"
                      className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose JARA Safety Nets
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                "Choosing Professional Safety Net Services" - For Safety, Bird, or Sports Nets: Enjoy Numerous Benefits
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise & Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our seasoned professionals bring years of experience to every project, ensuring precision and reliability.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize professionalism, adhering to industry standards to ensure the effectiveness and durability of our safety nets.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tailored to your unique needs, whether for construction sites, sports facilities, or residential properties.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellent Customer Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  From initial consultation to post-installation support, we prioritize your safety and satisfaction.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Contact us today for a free consultation and quote. Our expert team is ready to provide 
              you with the best safety net solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a
                href="tel:+918074616049"
                className="group w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Call Now: +91 8074616049</span>
              </a>
              <Link
                to="/contact"
                className="group w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Shield className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Get Free Quote</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;