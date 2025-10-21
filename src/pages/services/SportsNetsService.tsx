import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle, Shield, Home, Award, Star, MapPin, Target } from 'lucide-react';

const SportsNetsService = () => {
  const features = [
    "High Tensile Strength",
    "Weather Resistant", 
    "Custom Sizing",
    "Professional Installation",
    "5 Year Warranty",
    "Quick Setup"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Enhanced Safety",
      description: "Protect players and spectators with high-quality sports nets that meet international safety standards."
    },
    {
      icon: Shield,
      title: "Durable Construction",
      description: "Built to withstand intense sports activities and harsh weather conditions for long-lasting performance."
    },
    {
      icon: Home,
      title: "Custom Solutions",
      description: "Tailored netting solutions for various sports including cricket, football, tennis, and more."
    },
    {
      icon: Award,
      title: "Professional Grade",
      description: "Used by professional sports facilities and clubs for reliable performance during matches and practice."
    }
  ];

  const sportsTypes = [
    {
      name: "Cricket Nets",
      description: "Practice nets for cricket training with proper dimensions and safety features",
      price: "₹200-500/sq ft"
    },
    {
      name: "Football Nets", 
      description: "Goal nets and practice nets for football training and matches",
      price: "₹150-400/sq ft"
    },
    {
      name: "Tennis Nets",
      description: "Court nets and practice nets for tennis training and recreational play",
      price: "₹300-600/sq ft"
    },
    {
      name: "Multi-Sport Nets",
      description: "Versatile nets suitable for multiple sports activities",
      price: "₹250-450/sq ft"
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
                Sports Nets
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional-grade sports nets for cricket, football, tennis, and other sports. 
                Built for durability, safety, and performance in all weather conditions.
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
<<<<<<< HEAD
                src="/images/Sports Nets.webp" 
=======
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop" 
>>>>>>> 193e07086d05fa80a406818c5ad9d94e72c5760a
                alt="Sports Nets"
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
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Sports Nets?</h2>
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

        {/* Sports Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Sports Nets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsTypes.map((sport, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{sport.name}</h3>
                <p className="text-gray-600 mb-4">{sport.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{sport.price}</div>
                <a 
                  href="tel:+918074616049"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Materials & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nylon Sports Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• High-grade nylon construction</li>
                <li>• UV resistant up to 8 years</li>
                <li>• High tensile strength</li>
                <li>• Weatherproof design</li>
                <li>• Professional grade quality</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HDPE Nets</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• High-density polyethylene</li>
                <li>• Excellent durability</li>
                <li>• UV resistant up to 5 years</li>
                <li>• Lightweight construction</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation Hardware</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Galvanized steel posts</li>
                <li>• Weather-resistant hardware</li>
                <li>• Professional mounting system</li>
                <li>• Tension adjustment mechanism</li>
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
                question: "What sports can your nets be used for?",
                answer: "Our sports nets are suitable for cricket, football, tennis, badminton, volleyball, and other sports. We provide custom solutions for specific sports requirements."
              },
              {
                question: "How long do sports nets last?",
                answer: "Our sports nets typically last 5-8 years with proper maintenance. The lifespan depends on usage intensity and weather conditions."
              },
              {
                question: "Can sports nets be installed outdoors?",
                answer: "Yes, our sports nets are designed for outdoor installation and can withstand various weather conditions including rain, sun, and wind."
              },
              {
                question: "Do you provide installation services?",
                answer: "Yes, we provide professional installation services for all our sports nets. Our expert technicians ensure proper setup and tension adjustment."
              },
              {
                question: "What maintenance is required for sports nets?",
                answer: "Minimal maintenance is required. Regular inspection, cleaning, and tension adjustment ensure optimal performance and longevity."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                description: "We assess your sports facility to determine the best netting solution and installation approach."
              },
              {
                step: "2", 
                title: "Custom Design",
                description: "Sports nets are designed to meet your specific sports requirements and facility dimensions."
              },
              {
                step: "3",
                title: "Professional Installation",
                description: "Expert technicians install the sports nets using proper mounting techniques and tension adjustment."
              },
              {
                step: "4",
                title: "Testing & Training",
                description: "Final testing ensures proper installation and we provide training on maintenance and care."
              }
            ].map((step, index) => (
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

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Coach Ravi Kumar",
                location: "Hyderabad Sports Club",
                rating: 5,
                text: "Excellent cricket nets! The quality is outstanding and installation was professional. Our players love practicing with these nets."
              },
              {
                name: "Priya Sharma",
                location: "Tennis Academy", 
                rating: 5,
                text: "Great tennis nets for our academy. Durable, well-installed, and perfect for training. Highly recommended for sports facilities!"
              },
              {
                name: "Vikram Singh",
                location: "Football Ground",
                rating: 5,
                text: "The football nets are top quality. Weather resistant and perfect for our ground. Installation team was very professional."
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
          <h2 className="text-3xl font-bold mb-4">Need Sports Nets for Your Facility?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get professional sports nets for your facility. We provide custom solutions 
            for all sports with professional installation and maintenance services.
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

export default SportsNetsService;
