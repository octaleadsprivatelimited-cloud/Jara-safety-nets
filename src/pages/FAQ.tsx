import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of safety nets do you provide?',
      answer: 'We provide comprehensive safety nets including balcony safety nets, bird protection nets, children safety nets, cricket practice nets, invisible grills, coconut safety nets, building safety nets, and all sports nets. We also offer cloth hangers, bird spikes, mosquito nets, shade nets, and green grass installation.'
    },
    {
      question: 'Do you provide free installation and inspection?',
      answer: 'Yes, we offer free installation and free inspection for all our safety net services. Our expert team will visit your location, assess your requirements, and provide a detailed quote without any charges.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Installation time varies depending on the project size and complexity. Small projects like balcony safety nets typically take 2-4 hours, while larger projects may take 1-2 days. We provide detailed timelines during the quote process.'
    },
    {
      question: 'What materials do you use for safety nets?',
      answer: 'We use high-quality materials including HDPE nets, nylon nets, and other durable synthetic materials that meet international safety standards. All materials are UV resistant, weatherproof, and designed to last for years.'
    },
    {
      question: 'Do you provide warranty on your services?',
      answer: 'Yes, we provide warranty on all our safety net installations. Our quality and warranty are assured for all nets. We also offer maintenance services and follow-up inspections to ensure optimal performance.'
    },
    {
      question: 'What is your service area in Hyderabad?',
      answer: 'We serve all areas of Hyderabad and Telangana. Our main office is located in Green Park Colony, Road No.9, Karmanghat, Hyderabad. We provide services to residential apartments, commercial buildings, and industrial facilities across the city.'
    },
    {
      question: 'Do you install invisible grills?',
      answer: 'Yes, we specialize in invisible grills installation including invisible safety grill for balcony, balcony invisible grill, invisible grills for windows, and casement invisible grille. Our invisible grills are made from high-tensile stainless steel wires.'
    },
    {
      question: 'What makes your service different from others?',
      answer: 'We have 12+ years of experience in installing all types of safety nets. Our team is trained in fixing and installation of nets in apartments, industries, and all sports nets. We follow all safety norms and use proper safety equipment during installation.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Frequently Asked Questions
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <p className="text-xl text-gray-600 animate-fade-in-up">
                Find answers to common questions about our safety net services
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10"></div>
          <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative group">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{faq.question}</span>
                  <div className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12 relative overflow-hidden">
          <div className="bg-blue-50 rounded-lg p-8 relative">
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
                  Still Have Questions?
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <p className="text-gray-600 mb-6 animate-fade-in-up">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="scaleIn" delay={600}>
                <CreativeButton
                  variant="gradient"
                  size="lg"
                  className="inline-flex items-center"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </CreativeButton>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
