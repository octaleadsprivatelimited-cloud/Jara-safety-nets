import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Eye, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 'balcony-safety-nets',
      title: 'Ensuring Peace of Mind: The Importance of Balcony Safety Nets',
      excerpt: 'A Crucial Element for Peaceful Living. In today\'s fast-paced world, ensuring the protection of our loved ones is of utmost importance. One area that often goes overlooked is balcony safety.',

      image: '/images/Blog 1.webp',

      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',

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

      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',

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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about safety solutions, installation tips, and industry insights from our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      category.active 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}>
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Need Help?</h3>
              <p className="text-blue-800 text-sm mb-4">
                Our expert team is here to help you with all your safety net requirements.
              </p>
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-blue-600 font-medium">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest safety tips, installation guides, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
