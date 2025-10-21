import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our safety net services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
