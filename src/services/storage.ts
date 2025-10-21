// Local storage service for managing user data and preferences
export class StorageService {
  private static readonly STORAGE_KEYS = {
    USER_PREFERENCES: 'jara_user_preferences',
    CONTACT_HISTORY: 'jara_contact_history',
    QUOTE_REQUESTS: 'jara_quote_requests',
    THEME_PREFERENCE: 'jara_theme_preference'
  };

  // Save user preferences
  static saveUserPreferences(preferences: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  }): void {
    try {
      localStorage.setItem(
        this.STORAGE_KEYS.USER_PREFERENCES,
        JSON.stringify(preferences)
      );
    } catch (error) {
      console.error('Error saving user preferences:', error);
    }
  }

  // Get user preferences
  static getUserPreferences(): {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  } | null {
    try {
      const preferences = localStorage.getItem(this.STORAGE_KEYS.USER_PREFERENCES);
      return preferences ? JSON.parse(preferences) : null;
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return null;
    }
  }

  // Save contact form submission
  static saveContactSubmission(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    timestamp: string;
  }): void {
    try {
      const existingHistory = this.getContactHistory();
      const newHistory = [data, ...existingHistory].slice(0, 10); // Keep only last 10 submissions
      
      localStorage.setItem(
        this.STORAGE_KEYS.CONTACT_HISTORY,
        JSON.stringify(newHistory)
      );
    } catch (error) {
      console.error('Error saving contact submission:', error);
    }
  }

  // Get contact history
  static getContactHistory(): Array<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    timestamp: string;
  }> {
    try {
      const history = localStorage.getItem(this.STORAGE_KEYS.CONTACT_HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error getting contact history:', error);
      return [];
    }
  }

  // Save quote request
  static saveQuoteRequest(data: {
    serviceType: string;
    requirements: string;
    contactInfo: {
      name: string;
      email: string;
      phone: string;
    };
    timestamp: string;
  }): void {
    try {
      const existingRequests = this.getQuoteRequests();
      const newRequests = [data, ...existingRequests].slice(0, 5); // Keep only last 5 requests
      
      localStorage.setItem(
        this.STORAGE_KEYS.QUOTE_REQUESTS,
        JSON.stringify(newRequests)
      );
    } catch (error) {
      console.error('Error saving quote request:', error);
    }
  }

  // Get quote requests
  static getQuoteRequests(): Array<{
    serviceType: string;
    requirements: string;
    contactInfo: {
      name: string;
      email: string;
      phone: string;
    };
    timestamp: string;
  }> {
    try {
      const requests = localStorage.getItem(this.STORAGE_KEYS.QUOTE_REQUESTS);
      return requests ? JSON.parse(requests) : [];
    } catch (error) {
      console.error('Error getting quote requests:', error);
      return [];
    }
  }

  // Clear all stored data
  static clearAllData(): void {
    try {
      Object.values(this.STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing stored data:', error);
    }
  }
}
