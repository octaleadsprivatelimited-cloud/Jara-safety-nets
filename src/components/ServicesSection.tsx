import React from 'react';
import { Home, Bird, Baby, Target, Users, Eye, Building, Shirt, CheckCircle, Bug, Sun, TreePine, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ServicesSection = () => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      teal: 'bg-teal-100 text-teal-600',
      pink: 'bg-pink-100 text-pink-600',
      lime: 'bg-lime-100 text-lime-600',
      cyan: 'bg-cyan-100 text-cyan-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      violet: 'bg-violet-100 text-violet-600',
      amber: 'bg-amber-100 text-amber-600',
      rose: 'bg-rose-100 text-rose-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  const services: Service[] = [
    {
      icon: Home,
      title: 'Balcony Safety Nets',
      description: 'Secure your balcony with high-quality safety nets to prevent falls and protect your family.',
      color: 'blue'
    },
    {
      icon: Bird,
      title: 'Bird Protection Nets',
      description: 'Keep birds away from your property while maintaining aesthetics with our bird protection solutions.',
      color: 'green'
    },
    {
      icon: Baby,
      title: 'Children Safety Nets',
      description: 'Create a safe environment for children with specially designed safety nets for windows and balconies.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Cricket Practice Nets',
      description: 'Professional cricket practice nets for sports facilities, schools, and residential areas.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'All Sports Nets',
      description: 'Comprehensive sports net solutions for football, badminton, tennis, and other sports.',
      color: 'red'
    },
    {
      icon: Eye,
      title: 'Invisible Grills',
      description: 'Modern invisible grills that provide security without obstructing your view.',
      color: 'indigo'
    },
    {
      icon: TreePine,
      title: 'Coconut Safety Nets',
      description: 'Protect against falling coconuts with our specialized safety net systems.',
      color: 'yellow'
    },
    {
      icon: Building,
      title: 'Building Safety Nets',
      description: 'Comprehensive building safety net solutions for construction and renovation projects.',
      color: 'teal'
    },
    {
      icon: Shirt,
      title: 'Cloth Hangers',
      description: 'Durable and weather-resistant cloth hanging solutions for outdoor spaces.',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'Bird Spikes',
      description: 'Effective bird deterrent spikes to prevent birds from landing on ledges and surfaces.',
      color: 'lime'
    },
    {
      icon: Bug,
      title: 'Mosquito Nets',
      description: 'High-quality mosquito nets for windows and doors to protect against insects.',
      color: 'cyan'
    },
    {
      icon: Sun,
      title: 'Shade Nets',
      description: 'Professional shade netting solutions for agricultural and commercial applications.',
      color: 'emerald'
    },
    {
      icon: Building,
      title: 'Deck Area Safety Nets',
      description: 'Safety net solutions for deck areas, terraces, and elevated platforms.',
      color: 'violet'
    },
    {
      icon: Building,
      title: 'Building Covering',
      description: 'Complete building covering solutions for construction sites and temporary structures.',
      color: 'amber'
    },
    {
      icon: TreePine,
      title: 'Green Grass Installation',
      description: 'Artificial and natural grass installation services for lawns, terraces, and gardens.',
      color: 'rose'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive safety net solutions for all your protection needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceImages = [
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
              'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop'
            ];
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 relative">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${getColorClasses(service.color)}`}>
                      {React.createElement(service.icon, { className: "w-6 h-6" })}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Request Quote →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
