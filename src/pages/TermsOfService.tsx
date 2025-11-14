import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Full-width Hero Banner */}
      <div className="relative w-full">
        <div
          className="h-48 md:h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Hero Home.webp)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Terms of Service</h1>
        </div>
      </div>
      <div className="py-8"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using JARA Safety Nets services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700">
              JARA Safety Nets provides professional safety net installation, maintenance, and related services 
              for construction, sports, and industrial applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Payment is due upon completion of services unless otherwise agreed</li>
              <li>We accept various payment methods including bank transfers and checks</li>
              <li>Late payments may incur additional charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Warranty</h2>
            <p className="text-gray-700">
              We provide warranty coverage for our products and services as specified in individual contracts. 
              Warranty terms may vary based on the type of service and materials used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              JARA Safety Nets shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: legal@jarasafetynets.com</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Address: 123 Industrial Area, Mumbai, Maharashtra 400001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
