'use client';

import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8" />
              <span className="text-2xl font-bold">ArchiFlow</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Revolutionizing architectural visualization through AI-powered 2D to 3D conversion. 
              Making professional 3D modeling accessible to everyone.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">gauthamramesh93442@gmail.com  |</span>
                <span className="text-gray-300">nktharunnagarajan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 90423 98270  |</span>
                <span className="text-gray-300">+91 94207 26851</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'How it Works', id: 'how-it-works' },
                { label: 'Features', id: 'features' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Documentation
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                API Reference
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Tutorials
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 ArchiFlow. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See Your Plans Come to Life?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of architects and designers who trust ArchiFlow for their 3D visualization needs.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;