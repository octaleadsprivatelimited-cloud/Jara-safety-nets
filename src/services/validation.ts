// Validation utilities for form inputs and data
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class ValidationService {
  // Validate email format
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number (Indian format)
  static validatePhone(phone: string): boolean {
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // Validate contact form data
  static validateContactForm(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }): ValidationResult {
    const errors: string[] = [];

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }

    // Email validation
    if (!data.email || !this.validateEmail(data.email)) {
      errors.push('Please enter a valid email address');
    }

    // Phone validation
    if (data.phone && !this.validatePhone(data.phone)) {
      errors.push('Please enter a valid Indian phone number');
    }

    // Subject validation
    if (!data.subject) {
      errors.push('Please select a subject');
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Sanitize input to prevent XSS
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .trim();
  }

  // Validate service requirements
  static validateServiceRequirements(requirements: string): ValidationResult {
    const errors: string[] = [];

    if (!requirements || requirements.trim().length < 20) {
      errors.push('Please provide detailed requirements (at least 20 characters)');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
