import React from 'react';
import { Shield, Users, Award, Clock, Phone, MapPin, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';
import AnimatedCard from '../components/AnimatedCard';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
          <div className="absolute inset-0 bg-mesh opacity-20"></div>
          <FloatingElements count={6} colors={['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="medium" />
          <ParallaxElement speed={0.3} direction="up">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse-glow"></div>
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="down">
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-wave"></div>
          </ParallaxElement>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-text-reveal">
                  About JARA Safety Nets
                </h1>
                <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
                  Owned by Philip Raju (Prop.) - Your trusted partner in safety solutions
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <ScrollAnimation animation="scaleIn" delay={400}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <h3 className="text-2xl font-bold mb-2 animate-text-reveal">12+</h3>
                      <p className="text-blue-100 animate-fade-in-up">Years Experience</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scaleIn" delay={500}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <h3 className="text-2xl font-bold mb-2 animate-text-reveal">500+</h3>
                      <p className="text-blue-100 animate-fade-in-up">Projects Completed</p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInRight" delay={400}>
              <div className="relative">
                <img 
                  src="/images/Hero Home.webp" 
                  alt="JARA Safety Nets - Professional Installation Team"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 px-3 py-2 rounded-lg">
                  <p className="text-sm font-semibold">Expert Installation Team</p>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Quality Assured
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          <ScrollAnimation animation="fadeInLeft" delay={200}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient animate-text-reveal">About JARA Safety Nets</h2>
              <p className="text-gray-600 mb-4 animate-fade-in-up">
                JARA Safety Nets is owned and operated by Philip Raju (Prop.), a leading manufacturer and supplier of quality netting with installation & warranty. We specialize in complete safety & bird proofing solutions by installation of nets, cost effective and customizable.
              </p>
              <p className="text-gray-600 mb-4 animate-fade-in-up">
                Our team with 12+ years of experience is expert in installation of quality pigeon netting and safety nets. We are the best choice for your safety nets services, offering free installation and free inspection for all our services.
              </p>
              <p className="text-gray-600 mb-4 animate-fade-in-up">
                We offer best quality nets & competitive price. Our team was trained in fixing and installation of nets in apartments, industries and all sports nets. We install nets by following all safety norms by wearing safety rope along with all required safety equipments.
              </p>
              <p className="text-gray-600 animate-fade-in-up">
                Based in Hyderabad, Telangana, we serve customers across the region with dedication and professionalism. Our mission is to protect every space with safety and strength, ensuring peace of mind for families and communities.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInRight" delay={400}>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-10"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <ScrollAnimation animation="fadeInUp" delay={600}>
                  <div className="text-center hover:scale-105 transition-transform duration-300">
                    <Shield className="w-12 h-12 mx-auto mb-4 animate-pulse-glow" />
                    <h3 className="font-bold text-2xl mb-2 animate-text-reveal">12+</h3>
                    <p className="text-blue-100 animate-fade-in-up">Years Experience</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={700}>
                  <div className="text-center hover:scale-105 transition-transform duration-300">
                    <Users className="w-12 h-12 mx-auto mb-4 animate-rotate3d" />
                    <h3 className="font-bold text-2xl mb-2 animate-text-reveal">500+</h3>
                    <p className="text-blue-100 animate-fade-in-up">Projects Completed</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={800}>
                  <div className="text-center hover:scale-105 transition-transform duration-300">
                    <Award className="w-12 h-12 mx-auto mb-4 animate-morphing" />
                    <h3 className="font-bold text-2xl mb-2 animate-text-reveal">100%</h3>
                    <p className="text-blue-100 animate-fade-in-up">Quality Assured</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={900}>
                  <div className="text-center hover:scale-105 transition-transform duration-300">
                    <Clock className="w-12 h-12 mx-auto mb-4 animate-wave" />
                    <h3 className="font-bold text-2xl mb-2 animate-text-reveal">24/7</h3>
                    <p className="text-blue-100 animate-fade-in-up">Customer Support</p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Work Process Section */}
        <div className="mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
          <FloatingElements count={5} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center text-gradient animate-text-reveal">How Our Service Works</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 animate-text-reveal">Identifying Problems</h3>
                <p className="text-gray-600 animate-fade-in-up">
                  We assess your property and identify specific safety requirements and potential risks.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-rotate3d">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 animate-text-reveal">Research Your Problem</h3>
                <p className="text-gray-600 animate-fade-in-up">
                  Our experts research and analyze the best solutions for your specific requirements.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-morphing">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 animate-text-reveal">Solutions Your Problem</h3>
                <p className="text-gray-600 animate-fade-in-up">
                  We provide customized safety net solutions tailored to your specific needs.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-wave">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 animate-text-reveal">Consultation with Experts</h3>
                <p className="text-gray-600 animate-fade-in-up">
                  Our expert team provides professional consultation and installation services.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
          <div className="absolute inset-0 bg-mesh opacity-10"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center text-gradient animate-text-reveal">Contact Information</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-text-reveal">Phone</h3>
                <p className="text-gray-600 animate-fade-in-up">+91 8074616049</p>
                <p className="text-gray-600 animate-fade-in-up">+91 8466055207</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-rotate3d">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-text-reveal">Email</h3>
                <p className="text-gray-600 animate-fade-in-up">philipraju1999@gmail.com</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={500}>
              <div className="text-center hover:scale-105 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 animate-morphing">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-text-reveal">Address</h3>
                <p className="text-gray-600 animate-fade-in-up">
                  Green Park Colony, Road No.9<br />
                  Karmanghat, Hyderabad<br />
                  Telangana, India
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20"></div>
          <FloatingElements count={3} colors={['#3b82f6', '#10b981', '#f59e0b']} size="small" />
          <ParallaxElement speed={0.3} direction="up">
            <div className="absolute top-10 left-10 w-16 h-16 bg-blue-600/10 rounded-full animate-pulse-glow"></div>
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="down">
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-600/10 rounded-full animate-wave"></div>
          </ParallaxElement>
          <div className="relative">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-gradient animate-text-reveal">Our Mission</h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in-up">
                To provide the highest quality safety net solutions that protect lives, property, and investments while maintaining the highest standards of service and reliability.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
