import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle, Users, Shield, Star } from 'lucide-react';
import { ApiService } from '../services/api';
import { ValidationService } from '../services/validation';
import { StorageService } from '../services/storage';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const validation = ValidationService.validateContactForm(formData);
    
    if (!validation.isValid) {
      const errorMap: Record<string, string> = {};
      validation.errors.forEach((error, index) => {
        errorMap[`error_${index}`] = error;
      });
      setErrors(errorMap);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Sanitize form data
      const sanitizedData = {
        name: ValidationService.sanitizeInput(formData.name),
        email: ValidationService.sanitizeInput(formData.email),
        phone: ValidationService.sanitizeInput(formData.phone),
        subject: ValidationService.sanitizeInput(formData.subject),
        message: ValidationService.sanitizeInput(formData.message)
      };

      // Save to local storage
      StorageService.saveContactSubmission({
        ...sanitizedData,
        timestamp: new Date().toISOString()
      });

      // Submit to API
      const result = await ApiService.submitContactForm(sanitizedData);
      
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message
      });

      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (errors[`error_${name}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`error_${name}`];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Full-width Hero Banner */}
      <div className="relative w-full">
        <div
          className="h-48 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Hero Home.webp)' }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      <div className="py-8"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimation animation="fadeInLeft" delay={200}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              <FloatingElements count={3} colors={['#3b82f6', '#10b981', '#f59e0b']} size="small" />
              <div className="relative">
                <ScrollAnimation animation="fadeInUp" delay={400}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 animate-text-reveal">Send us a Message</h2>
                  </div>
                </ScrollAnimation>
            
            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3" />
                )}
                {submitStatus.message}
              </div>
            )}

            {/* Error Messages */}
            {Object.keys(errors).length > 0 && (
              <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 mr-3 inline" />
                <ul className="list-disc list-inside">
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

                <ScrollAnimation animation="fadeInUp" delay={600}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md hover:scale-105 ${
                            errors.error_name ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-300'
                          }`}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md hover:scale-105 ${
                            errors.error_email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-300'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md hover:scale-105 ${
                            errors.error_phone ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-300'
                          }`}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md hover:scale-105 ${
                            errors.error_subject ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-300'
                          }`}
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request Quote</option>
                          <option value="service">Service Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md hover:scale-105 resize-vertical ${
                          errors.error_message ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-300'
                        }`}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <ScrollAnimation animation="scaleIn" delay={800}>
                      <CreativeButton
                        type="submit"
                        variant="gradient"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </CreativeButton>
                    </ScrollAnimation>
                  </form>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation animation="fadeInRight" delay={200}>
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50"></div>
                <FloatingElements count={4} colors={['#10b981', '#3b82f6', '#f59e0b', '#ef4444']} size="small" />
                <div className="relative">
                  <ScrollAnimation animation="fadeInUp" delay={400}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 animate-text-reveal">Get in Touch</h2>
                    </div>
                  </ScrollAnimation>
                  <div className="space-y-6">
                    <ScrollAnimation animation="fadeInUp" delay={600}>
                      <div className="flex items-start space-x-4 group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-pulse-glow">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">Phone</h3>
                          <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">+91 8074616049</p>
                          <p className="text-gray-600 hover:text-blue-600 transition-colors duration-300">+91 8466055207</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={700}>
                      <div className="flex items-start space-x-4 group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-wave">
                          <Mail className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">Email</h3>
                          <p className="text-gray-600 hover:text-green-600 transition-colors duration-300">philipraju1999@gmail.com</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={800}>
                      <div className="flex items-start space-x-4 group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center animate-rotate3d">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">Address</h3>
                          <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                            Green Park Colony, Road No.9<br />
                            Karmanghat, Hyderabad<br />
                            Telangana, India
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={900}>
                      <div className="flex items-start space-x-4 group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center animate-morphing">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">Business Hours</h3>
                          <p className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Saturday: 9:00 AM - 4:00 PM</p>
                          <p className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Sunday: Closed</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>

              <ScrollAnimation animation="fadeInUp" delay={1000}>
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
                  <FloatingElements count={3} colors={['#ffffff', '#3b82f6', '#10b981']} size="small" />
                  <ParallaxElement speed={0.3} direction="up">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse-glow"></div>
                  </ParallaxElement>
                  <div className="relative">
                    <ScrollAnimation animation="fadeInUp" delay={200}>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeInUp" delay={400}>
                      <h3 className="text-xl font-bold mb-4 text-gradient animate-text-reveal">Emergency Support</h3>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeInUp" delay={600}>
                      <p className="text-blue-100 mb-6 animate-fade-in-up">
                        Need immediate assistance? Our emergency support team is available 24/7.
                      </p>
                    </ScrollAnimation>
                    <ScrollAnimation animation="scaleIn" delay={800}>
                      <CreativeButton
                        href="tel:+918074616049"
                        variant="glow"
                        size="lg"
                        className="inline-flex items-center"
                      >
                        <Phone className="mr-2 w-5 h-5" />
                        Call Emergency Line
                      </CreativeButton>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Google Maps Embed */}
              <ScrollAnimation animation="fadeInUp" delay={1200}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50"></div>
                  <FloatingElements count={2} colors={['#3b82f6', '#10b981']} size="small" />
                  <div className="relative">
                    <ScrollAnimation animation="fadeInUp" delay={200}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 animate-wave">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 animate-text-reveal">Find Us</h3>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeInUp" delay={400}>
                      <div className="h-64 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.286773901721!2d78.52334507368829!3d17.349928403886118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9888b6bb1ad1%3A0xc5c8b2ee3e9294a8!2s9%2C%20B-9%2C%20Green%20Park%20Colony%20Main%20Rd%2C%20Saroornagar%2C%20Green%20Park%20Colony%2C%20Saroor%20Nagar%20East%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1761034465612!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="JARA Safety Nets Location - Green Park Colony, Road No.9, Karmanghat, Hyderabad"
                          className="rounded-xl"
                        ></iframe>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Contact;
