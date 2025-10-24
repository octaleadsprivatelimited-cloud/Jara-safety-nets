import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amit Kumar',
      role: 'Construction Manager',
      company: 'ABC Construction Ltd',
      rating: 5,
      text: "Excellent service and quality products. JARA Safety Nets provided us with reliable safety solutions for our construction project. Their team was professional and the installation was completed on time."
    },
    {
      name: 'Priya Sharma',
      role: 'Sports Complex Owner',
      company: 'Sports Zone Mumbai',
      rating: 5,
      text: "Professional installation and great customer support. Highly recommended for any safety net requirements. The quality is outstanding and the service is exceptional."
    },
    {
      name: 'Rajesh Patel',
      role: 'Industrial Facility Manager',
      company: 'Industrial Solutions Inc',
      rating: 5,
      text: "Outstanding quality and timely delivery. JARA Safety Nets exceeded our expectations in every aspect. They provided custom solutions that perfectly fit our requirements."
    },
    {
      name: 'Sunita Reddy',
      role: 'Project Coordinator',
      company: 'BuildRight Constructions',
      rating: 5,
      text: "Reliable partner for all our safety needs. The team is knowledgeable and provides excellent customer service. We have been using their services for multiple projects."
    },
    {
      name: 'Vikram Singh',
      role: 'Safety Officer',
      company: 'SecureBuild Pvt Ltd',
      rating: 5,
      text: "Top-notch safety solutions with competitive pricing. The installation team is well-trained and follows all safety protocols. Highly satisfied with their services."
    },
    {
      name: 'Meera Joshi',
      role: 'Facility Manager',
      company: 'Sports Complex Delhi',
      rating: 5,
      text: "Excellent workmanship and attention to detail. The safety nets are durable and provide the protection we needed. Great value for money and excellent service."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Full-width Hero Banner */}
      <div className="relative w-full">
        <div
          className="h-48 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Hero Home.webp)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-700/90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Client Testimonials</h1>
        </div>
      </div>
      <div className="py-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-gray-600 mb-6">
              Experience the same level of quality and service that our clients rave about.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
