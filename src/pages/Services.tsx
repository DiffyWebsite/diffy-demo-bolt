import { Code2, Database, Globe, LayoutDashboard, Shield, Wrench } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive Drupal solutions tailored for enterprise needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Code2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored Drupal solutions built to meet your specific business requirements
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Module Development</li>
                <li>• Theme Development</li>
                <li>• API Integration</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable and robust solutions for large-scale organizations
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-site Management</li>
                <li>• Content Workflow</li>
                <li>• Enterprise Integration</li>
                <li>• High-Performance Architecture</li>
              </ul>
            </div>

            {/* Security Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Security Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions to protect your digital assets
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Security Audits</li>
                <li>• Vulnerability Assessment</li>
                <li>• Security Updates</li>
                <li>• Compliance Implementation</li>
              </ul>
            </div>

            {/* Digital Strategy */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Digital Strategy</h3>
              <p className="text-gray-600 mb-4">
                Strategic planning and consulting for digital transformation
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Digital Roadmap</li>
                <li>• UX/UI Consulting</li>
                <li>• Content Strategy</li>
                <li>• Analytics & Insights</li>
              </ul>
            </div>

            {/* Support & Maintenance */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Wrench className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Support & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                24/7 support and maintenance services for your Drupal platform
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 Technical Support</li>
                <li>• Regular Updates</li>
                <li>• Performance Monitoring</li>
                <li>• Issue Resolution</li>
              </ul>
            </div>

            {/* Training & Workshops */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <LayoutDashboard className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Training & Workshops</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for your team
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Admin Training</li>
                <li>• Developer Workshops</li>
                <li>• Content Editor Training</li>
                <li>• Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}