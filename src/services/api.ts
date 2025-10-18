// API service for handling backend communications
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ServiceQuote {
  id: string;
  serviceType: string;
  description: string;
  estimatedCost: number;
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export class ApiService {
  private static baseUrl = process.env.REACT_APP_API_URL || 'https://api.jarasafetynets.com';

  // Submit contact form
  static async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', data);
      
      // In a real implementation, you would make an actual API call here
      // const response = await fetch(`${this.baseUrl}/contact`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        message: 'Sorry, there was an error submitting your message. Please try again.'
      };
    }
  }

  // Request service quote
  static async requestQuote(serviceType: string, requirements: string): Promise<ServiceQuote> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock quote generation
      const quote: ServiceQuote = {
        id: `quote_${Date.now()}`,
        serviceType,
        description: requirements,
        estimatedCost: Math.floor(Math.random() * 50000) + 5000, // Random cost between 5000-55000
        timeline: '3-5 business days',
        contactInfo: {
          name: 'JARA Safety Nets',
          email: 'philipraju1999@gmail.com',
          phone: '+91 8074616049'
        }
      };
      
      return quote;
    } catch (error) {
      console.error('Error requesting quote:', error);
      throw new Error('Failed to generate quote. Please try again.');
    }
  }

  // Get service information
  static async getServiceInfo(serviceId: string): Promise<any> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const services = {
        'balcony-safety': {
          name: 'Balcony Safety Nets',
          description: 'High-quality safety nets for balcony protection',
          features: ['UV Resistant', 'Weatherproof', 'Child Safe', '5 Year Warranty'],
          priceRange: '₹50-200 per sq ft'
        },
        'bird-protection': {
          name: 'Bird Protection Nets',
          description: 'Professional bird netting solutions',
          features: ['Durable Material', 'Aesthetic Design', 'Easy Maintenance', '3 Year Warranty'],
          priceRange: '₹30-150 per sq ft'
        },
        'invisible-grills': {
          name: 'Invisible Grills',
          description: 'Modern invisible security grills',
          features: ['Stainless Steel', 'Invisible Design', 'High Security', '10 Year Warranty'],
          priceRange: '₹200-500 per sq ft'
        }
      };
      
      return services[serviceId as keyof typeof services] || null;
    } catch (error) {
      console.error('Error fetching service info:', error);
      return null;
    }
  }
}
