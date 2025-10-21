import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Phone, ArrowRight, Eye, Target, Building, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';
import AnimatedCard from '../components/AnimatedCard';

const Home = () => {
  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative gradient-primary text-white section-padding overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-800/30"></div>
          <div className="absolute inset-0 bg-mesh opacity-30"></div>
          <FloatingElements count={8} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316']} size="medium" />
          <div className="absolute top-0 left-0 w-full h-full">
            <ParallaxElement speed={0.3} direction="up">
              <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-glow"></div>
            </ParallaxElement>
            <ParallaxElement speed={0.5} direction="down">
              <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-wave"></div>
            </ParallaxElement>
            <ParallaxElement speed={0.4} direction="up">
              <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-morphing"></div>
            </ParallaxElement>
            <ParallaxElement speed={0.6} direction="left">
              <div className="absolute top-1/2 right-10 w-8 h-8 bg-yellow-400/20 rounded-full animate-particle-float"></div>
            </ParallaxElement>
            <ParallaxElement speed={0.2} direction="right">
              <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-green-400/20 rounded-full animate-rotate3d"></div>
            </ParallaxElement>
          </div>
          <div className="relative max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Trusted by 500+ Families</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gradient animate-text-reveal">
                  Free Installation & Inspection
                </h1>
                <div className="text-3xl md:text-4xl font-bold mb-8 text-blue-200 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-block animate-pulse-glow hover-glow-intense">
                  +91 8074616049
                </div>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  JARA Safety Nets - Complete Safety & Bird Proofing Solutions by Installation of Nets. 
                  Cost Effective, Customizable. We are Leading Manufacturer and Supplier of Quality Netting with Installation & Warranty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CreativeButton
                    variant="gradient"
                    size="lg"
                    className="inline-flex items-center justify-center"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </CreativeButton>
                  <CreativeButton
                    variant="glow"
                    size="lg"
                    className="inline-flex items-center justify-center"
                    onClick={() => window.location.href = '/services'}
                  >
                    Our Services
                  </CreativeButton>
                </div>
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    <span className="text-sm">12+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm">500+ Projects</span>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInRight" delay={400}>
                <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
                <img 
                  src="/images/Hero Home.webp" 
                  alt="JARA Safety Nets - Professional Safety Net Installation"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <p className="text-sm font-semibold">Expert Installation Team</p>
                </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    Free Installation
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>


      {/* Title Cards Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional safety solutions tailored to your specific needs</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <AnimatedCard variant="magnetic" intensity="high" className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-40 relative overflow-hidden">
                <img 
                  src="/images/Children Safety Nets.avif" 
                  alt="Children Safety Nets - JARA Safety Nets"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Child Safe
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Children Safety Nets</h3>
                <p className="text-blue-600 font-semibold text-sm">+91 8074616049</p>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-4/5"></div>
                </div>
              </div>
              </AnimatedCard>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <AnimatedCard variant="tilt" intensity="medium" className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-40 relative overflow-hidden">
                <img 
                  src="/images/Duct Area Safety Nets.avif" 
                  alt="Duct Area Safety Nets - Bird Protection Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Bird Free
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Target className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Duct Area Safety Nets</h3>
                <p className="text-blue-600 font-semibold text-sm">+91 8074616049</p>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-green-600 h-1 rounded-full w-3/4"></div>
                </div>
              </div>
              </AnimatedCard>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <AnimatedCard variant="glow" intensity="high" className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-40 relative overflow-hidden">
                <img 
                  src="/images/All Invisible Grills.webp" 
                  alt="All Invisible Grills - Modern Security Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Invisible
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Eye className="w-4 h-4 text-purple-600" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">All Invisible Grills</h3>
                <p className="text-blue-600 font-semibold text-sm">+91 8074616049</p>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-purple-600 h-1 rounded-full w-5/6"></div>
                </div>
              </div>
              </AnimatedCard>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <AnimatedCard variant="flip" intensity="medium" className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-40 relative overflow-hidden">
                <img 
                  src="/images/Sports Nets Installation.avif" 
                  alt="Sports Nets Installation - Cricket, Football, Tennis"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Sports Ready
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Zap className="w-4 h-4 text-orange-600" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Sports Nets Installation</h3>
                <p className="text-blue-600 font-semibold text-sm">+91 8074616049</p>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-orange-600 h-1 rounded-full w-4/5"></div>
                </div>
              </div>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <FloatingElements count={5} colors={['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
        <ParallaxElement speed={0.3} direction="up">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-glow"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.4} direction="down">
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-wave"></div>
        </ParallaxElement>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animate-text-reveal">Enquiry Us</h2>
            <p className="text-xl mb-8 text-blue-100 animate-fade-in-up">Best Quality Netting - Submit Here</p>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleIn" delay={400}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto hover-glow-intense">
              <h3 className="text-2xl font-bold mb-4 animate-text-reveal">JARA Safety Services & Invisible Grills</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CreativeButton
                  variant="gradient"
                  size="lg"
                  className="inline-flex items-center justify-center"
                  onClick={() => window.location.href = '/contact'}
                >
                  Submit Enquiry
                </CreativeButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Free Installation Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">
                Free Installation & Free Inspection
              </h2>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Balcony Nets</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Grills for Windows</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Casement Invisible Grills</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Cricket Nets</h3>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <ScrollAnimation animation="fadeInUp" delay={700}>
              <div className="text-center p-6 bg-indigo-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Balcony Invisible Grills</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={800}>
              <div className="text-center p-6 bg-red-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Industrial Safety Nets</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={900}>
              <div className="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Bird Spikes</h3>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={1000}>
              <div className="text-center p-6 bg-teal-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Building Nets</h3>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute inset-0 bg-mesh opacity-10"></div>
        <FloatingElements count={6} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']} size="medium" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-gradient animate-text-reveal">
                  We Are The Best Choice For You Safety Nets Services
                </h2>
                <h3 className="text-2xl font-bold text-blue-600 mb-4 animate-text-reveal">
                  JARA Safety Services & Invisible Grills
                </h3>
                <p className="text-gray-600 mb-6 animate-fade-in-up">
                  Complete Bird Proofing Solutions by Installation of Nets, Cost Effective, Customizable. 
                  We are Leading Manufacturer and Supplier of Bird Netting with Installation & Warranty.
                  Our Team with 12+ Years of Experience & Expert in Installation of Quality Pigeon Netting
                </p>
                <div className="flex items-center space-x-4 animate-fade-in-up">
                  <Phone className="w-6 h-6 text-blue-600 animate-pulse-glow" />
                  <span className="text-xl font-semibold text-gray-900 animate-text-reveal">+91 8074616049</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 animate-fade-in-up">Call Us</p>
                <p className="text-gray-600 mt-4 animate-fade-in-up">Quality & Warranty Assured for Nets</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={400}>
              <div className="relative">
                <img 
                  src="/images/We Are The Best Choice For You Safety Nets Services.avif" 
                  alt="Safety Nets Installation"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="text-sm font-semibold text-gray-800">Expert Installation</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Quality Assured
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Safety Nets Service */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
        <FloatingElements count={5} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="small" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">
                Our Safety Nets Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Quality & Warranty Assured for Nets - 12+ Years of Experience
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Children Safety Nets</h3>
                <p className="text-gray-600 mb-4">+91 8074616049</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Duct Area Safety Nets</h3>
                <p className="text-gray-600 mb-4">+91 8074616049</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">All Invisible Grills</h3>
                <p className="text-gray-600 mb-4">+91 8074616049</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Sports Nets Installation</h3>
                <p className="text-gray-600 mb-4">+91 8074616049</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Installation from Experts */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        <div className="absolute inset-0 bg-mesh opacity-15"></div>
        <FloatingElements count={6} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']} size="medium" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">
                Why Installation from Experts?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                We are the best choice for your safety nets services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">12+ Years Experience</h3>
                <p className="text-gray-600 text-sm">
                  We are having 12+ Years of Experience in Installing All types of Safety Nets
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Trained Team</h3>
                <p className="text-gray-600 text-sm">
                  Our Team was trained in fixing and installation of nets in Apartments, Industries and all sports nets
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Safety Norms</h3>
                <p className="text-gray-600 text-sm">
                  We Install Nets by Following all Safety Norms by wearing Safety Rope along with All Required Safety Equipments
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Expert Service</h3>
                <p className="text-gray-600 text-sm">
                  Expert fixing safety nets, we have served almost all major residential & commercial requirements
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
        <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-gradient animate-text-reveal">
                Our Blog
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Stay informed about safety solutions and best practices
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="h-48 relative">
                  <img 
                    src="/images/Blog 1.webp" 
                    alt="Balcony Safety Nets"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="h-48 relative">
                  <img 
                    src="/images/Blog 2.avif" 
                    alt="Pigeon Prevention Nets"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 24/7 Support Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <FloatingElements count={5} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="medium" />
        <ParallaxElement speed={0.3} direction="up">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/10 rounded-full animate-pulse-glow"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.4} direction="down">
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-600/10 rounded-full animate-wave"></div>
        </ParallaxElement>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-gradient animate-text-reveal">
              24/7 Support Services Help?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Need immediate assistance? Our expert team is available round the clock to help you with all your safety net requirements.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CreativeButton
                variant="gradient"
                size="lg"
                className="inline-flex items-center justify-center"
                onClick={() => window.location.href = '/contact'}
              >
                Enquiry Now
              </CreativeButton>
              <CreativeButton
                variant="glow"
                size="lg"
                className="inline-flex items-center justify-center"
                onClick={() => window.location.href = 'tel:+918074616049'}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 8074616049
              </CreativeButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <FloatingElements count={6} colors={['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="medium" />
        <ParallaxElement speed={0.3} direction="up">
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse-glow"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.4} direction="down">
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/5 rounded-full animate-wave"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.5} direction="left">
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-particle-float"></div>
        </ParallaxElement>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-text-reveal">
              Ready to Secure Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in-up">
              Get a free quote for your safety net requirements. Our experts are ready to help you choose the best solution.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CreativeButton
                variant="gradient"
                size="lg"
                className="inline-flex items-center justify-center"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="mr-2 w-5 h-5" />
                Get Free Quote
              </CreativeButton>
              <CreativeButton
                variant="glow"
                size="lg"
                className="inline-flex items-center justify-center"
                onClick={() => window.location.href = '/gallery'}
              >
                View Our Work
              </CreativeButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
