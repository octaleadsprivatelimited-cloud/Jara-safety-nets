import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Shield, Home, Users, Award, Star, MapPin } from 'lucide-react';

const BalconySafetyNetsService = () => {
  const features = [
    "UV Resistant Material",
    "Weatherproof Design", 
    "Child Safe Construction",
    "5 Year Warranty",
    "Professional Installation",
    "Custom Sizing Available"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Maximum Safety",
      description: "Prevents accidental falls and provides peace of mind for families with children and pets."
    },
    {
      icon: Home,
      title: "Unobstructed View",
      description: "Maintains the aesthetic appeal of your balcony while providing essential protection."
    },
    {
      icon: Users,
      title: "Family Protection",
      description: "Keeps all family members safe, including children, elderly, and pets."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "High-quality materials and professional installation ensure long-lasting protection."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Site Visit",
      description: "Our expert team visits your property to assess the balcony structure and requirements."
    },
    {
      step: "2", 
      title: "Custom Design",
      description: "We design safety nets specifically for your balcony's dimensions and layout."
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Trained technicians install the nets using proper mounting techniques and safety protocols."
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Each installation is thoroughly tested to ensure it meets our safety standards."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Balcony Safety Nets
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Secure your balcony with high-quality safety nets to prevent falls and protect your family. 
                Professional installation with warranty included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+918074616049"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: +91 8074616049
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
                alt="Balcony Safety Nets"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Balcony Safety Nets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Materials & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HDPE Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• High-Density Polyethylene</li>
                <li>• UV Resistant up to 5 years</li>
                <li>• Weatherproof design</li>
                <li>• Child-safe material</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nylon Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium nylon construction</li>
                <li>• UV Resistant up to 8 years</li>
                <li>• Superior strength</li>
                <li>• Fade-resistant colors</li>
                <li>• Long-lasting durability</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Hardware</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Stainless steel hooks</li>
                <li>• Weather-resistant screws</li>
                <li>• Professional mounting brackets</li>
                <li>• Tension adjustment system</li>
                <li>• Corrosion-resistant materials</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does balcony safety net installation take?",
                answer: "Installation typically takes 2-4 hours for a standard balcony. Complex installations may take longer depending on the size and structure of your balcony."
              },
              {
                question: "What is the warranty period for balcony safety nets?",
                answer: "We provide 2-5 years warranty depending on the package chosen. Premium packages include extended warranty and maintenance services."
              },
              {
                question: "Can the nets be removed if needed?",
                answer: "Yes, our nets can be easily removed for maintenance or if you need to change the design. The installation hardware remains in place for future use."
              },
              {
                question: "Do you provide maintenance services?",
                answer: "Yes, we offer annual maintenance services including inspection, cleaning, and tension adjustment to ensure optimal performance."
              },
              {
                question: "What happens if the net gets damaged?",
                answer: "We provide free repair services within the warranty period. For damage outside warranty, we offer affordable repair and replacement services."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation Guide</h2>
          <div className="bg-white rounded-xl shadow-professional-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Installation Checklist</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Clear balcony area of furniture and obstacles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Ensure balcony structure is sound and stable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Provide access to electrical outlets if needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Inform neighbors about installation schedule</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Installation Care</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Regular inspection of net tension and hardware</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Gentle cleaning with mild soap and water</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Avoid sharp objects that could damage the net</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span>Schedule annual maintenance inspections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-professional-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic Package</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">₹50/sq ft</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Standard HDPE Net</li>
                  <li>• 2 Year Warranty</li>
                  <li>• Professional Installation</li>
                  <li>• Free Site Visit</li>
                </ul>
                <a 
                  href="tel:+918074616049"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
              <div className="text-center p-6 border-2 border-blue-600 rounded-lg bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Package</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">₹75/sq ft</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Premium UV Resistant Net</li>
                  <li>• 5 Year Warranty</li>
                  <li>• Professional Installation</li>
                  <li>• Free Site Visit</li>
                  <li>• Annual Maintenance</li>
                </ul>
                <a 
                  href="tel:+918074616049"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Package</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Custom Design</li>
                  <li>• Premium Materials</li>
                  <li>• Extended Warranty</li>
                  <li>• Priority Support</li>
                  <li>• Maintenance Included</li>
                </ul>
                <a 
                  href="tel:+918074616049"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Hyderabad",
                rating: 5,
                text: "Excellent service! The balcony safety nets are perfect and give us peace of mind with our children."
              },
              {
                name: "Rajesh Kumar",
                location: "Secunderabad", 
                rating: 5,
                text: "Professional installation and great quality. Highly recommended for anyone looking for safety nets."
              },
              {
                name: "Sunita Reddy",
                location: "Gachibowli",
                rating: 5,
                text: "The team was very professional and the nets are working perfectly. Great value for money."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Balcony?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and quote for your balcony safety net installation. 
            Our experts are ready to help you choose the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918074616049"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 8074616049
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalconySafetyNetsService;
