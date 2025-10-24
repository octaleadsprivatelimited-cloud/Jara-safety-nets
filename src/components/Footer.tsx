import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">JARA Safety Nets</h3>
                <p className="text-sm text-yellow-100">Professional Safety Solutions</p>
              </div>
            </div>
            <p className="text-yellow-100 text-sm">
              Protecting Every Space with Safety and Strength. Providing high-quality safety net solutions for homes, buildings, and sports facilities in Hyderabad.
            </p>
            <div className="flex space-x-4">
              <button className="text-yellow-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-yellow-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-yellow-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-yellow-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-yellow-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-yellow-100 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-yellow-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-yellow-100 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-yellow-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/balcony-safety-nets" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Balcony Safety Nets
                </Link>
              </li>
              <li>
                <Link to="/services/bird-protection-nets" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Bird Protection Nets
                </Link>
              </li>
              <li>
                <Link to="/services/children-safety-nets" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Children Safety Nets
                </Link>
              </li>
              <li>
                <Link to="/services/cricket-practice-nets" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Cricket Practice Nets
                </Link>
              </li>
              <li>
                <Link to="/services/invisible-grills" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Invisible Grills
                </Link>
              </li>
              <li>
                <Link to="/services/mosquito-nets" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  Mosquito Nets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-200 mt-0.5" />
                <div>
                  <p className="text-yellow-100 text-sm">
                    Green Park Colony, Road No.9<br />
                    Karmanghat, Hyderabad<br />
                    Telangana, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-200" />
                <a href="tel:+918074616049" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  +91 8074616049
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-200" />
                <a href="mailto:philipraju1999@gmail.com" className="text-yellow-100 hover:text-white transition-colors text-sm">
                  philipraju1999@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-yellow-100 text-sm">
              © 2024 JARA Safety Nets. All rights reserved. | Designed and developed by <a href="https://www.octaleads.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:text-white">Octaleads Pvt Ltd</a>
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-yellow-100 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-yellow-100 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
