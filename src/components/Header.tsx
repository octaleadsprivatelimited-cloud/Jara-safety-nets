import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Header - Contact Info */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              {/* Mobile: Only phone, location and WhatsApp */}
              <div className="flex items-center space-x-3 sm:hidden">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>+91 8074616049</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  <span>Hyderabad</span>
                </div>
                <a 
                  href="https://wa.me/918074616049" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              
              {/* Desktop: All contact info */}
              <div className="hidden sm:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>+91 8074616049</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-300" />
                  <span>philipraju1999@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <a 
                  href="https://wa.me/918074616049" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            
            {/* Company Tagline - Hidden on mobile */}
            <div className="hidden sm:block text-yellow-300 font-medium">
              Professional Safety Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-orange-500 shadow-professional sticky top-0 z-50 backdrop-blur-sm bg-orange-500/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 lg:py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg lg:text-xl font-bold text-white">JARA Safety Nets</h1>
                  <p className="text-xs text-yellow-100">Professional Safety Solutions</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-orange-600 bg-yellow-100 shadow-md'
                      : 'text-white hover:text-yellow-300 hover:bg-orange-600 hover:shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-200 focus:outline-none p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

      </div>
    </header>

    {/* Mobile Navigation - Outside Header Container */}
    {isMenuOpen && (
      <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
        <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-orange-500 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-orange-400">
              <h3 className="text-lg font-semibold text-white">Menu</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-yellow-200 p-2 rounded-lg hover:bg-orange-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-1 px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-orange-600 bg-yellow-100 shadow-md'
                        : 'text-white hover:text-yellow-300 hover:bg-orange-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;
