import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Eye, Tag } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxElement from '../components/ParallaxElement';
import FloatingElements from '../components/FloatingElements';
import CreativeButton from '../components/CreativeButton';

const Blog = () => {
  const blogPosts = [
    {
      id: 'balcony-safety-nets',
      title: 'Ensuring Peace of Mind: The Importance of Balcony Safety Nets',
      excerpt: 'A Crucial Element for Peaceful Living. In today\'s fast-paced world, ensuring the protection of our loved ones is of utmost importance. One area that often goes overlooked is balcony safety.',

      image: '/images/Blog 1.webp',

      category: 'Safety Nets',
      date: 'December 15, 2024',
      author: 'JARA Safety Nets Team',
      tags: ['Safety', 'Balcony', 'Protection'],
      readTime: '5 min read'
    },
    {
      id: 'pigeon-prevention-nets',
      title: 'Protecting Your Property: The Importance of Pigeon Prevention Nets',
      excerpt: 'Safeguard Your Assets: The Significance of Pigeon Prevention Nets. Protecting your property is of utmost importance. Pigeon nets play a crucial role in ensuring the security and well-being of your property.',

      image: '/images/Blog 2.avif',

      category: 'Bird Protection',
      date: 'December 10, 2024',
      author: 'JARA Safety Nets Team',
      tags: ['Bird Control', 'Pigeon Nets', 'Protection'],
      readTime: '6 min read'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 2, active: true },
    { name: 'Safety Nets', count: 1, active: false },
    { name: 'Bird Protection', count: 1, active: false },
    { name: 'Installation Tips', count: 0, active: false }
  ];

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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Our Blog</h1>
        </div>
      </div>
      <div className="py-8"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="fadeInLeft" delay={300}>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-full -translate-y-10 translate-x-10 animate-pulse-glow"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 animate-text-reveal">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <ScrollAnimation animation="fadeInLeft" delay={400 + index * 100}>
                        <button className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                          category.active 
                            ? 'bg-blue-100 text-blue-700 font-medium hover:bg-blue-200' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                        }`}>
                          {category.name} ({category.count})
                        </button>
                      </ScrollAnimation>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={500}>
              <div className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-600/10 rounded-full -translate-y-8 translate-x-8 animate-wave"></div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4 animate-text-reveal">Need Help?</h3>
                <p className="text-blue-800 text-sm mb-4 animate-fade-in-up">
                  Our expert team is here to help you with all your safety net requirements.
                </p>
                <CreativeButton
                  variant="gradient"
                  size="md"
                  className="inline-block"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </CreativeButton>
              </div>
            </ScrollAnimation>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10"></div>
            <FloatingElements count={4} colors={['#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollAnimation key={index} animation="fadeInUp" delay={300 + index * 200}>
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative group">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm font-semibold text-gray-800">Read Article</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4 animate-fade-in-up">
                        <div className="flex items-center hover:scale-105 transition-transform duration-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center hover:scale-105 transition-transform duration-300">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <span className="text-blue-600 font-medium hover:scale-105 transition-transform duration-300">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 animate-text-reveal">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 animate-fade-in-up">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-105">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 hover:scale-105"
                        style={{ pointerEvents: 'auto', zIndex: 10 }}
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-lg pointer-events-none"></div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>

            {/* Newsletter Signup */}
            <div className="mt-12 relative overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
                <div className="absolute inset-0 bg-mesh opacity-20"></div>
                <FloatingElements count={5} colors={['#ffffff', '#3b82f6', '#10b981', '#f59e0b', '#ef4444']} size="small" />
                <ParallaxElement speed={0.3} direction="up">
                  <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse-glow"></div>
                </ParallaxElement>
                <ParallaxElement speed={0.4} direction="down">
                  <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/5 rounded-full animate-wave"></div>
                </ParallaxElement>
                <div className="relative">
                  <ScrollAnimation animation="fadeInUp" delay={200}>
                    <h3 className="text-2xl font-bold mb-4 text-gradient animate-text-reveal">Stay Updated</h3>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInUp" delay={400}>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto animate-fade-in-up">
                      Subscribe to our newsletter for the latest safety tips, installation guides, and industry insights.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scaleIn" delay={600}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white hover:scale-105 transition-transform duration-300"
                      />
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Subscribe
                      </button>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
