// components/layout/Footer.jsx - BRAND NEW OPTIMIZED FOOTER
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Industry Uses', href: '/industry-uses' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
    training: [
      { name: 'Training Programs', href: '/training' },
      { name: 'Career Quiz', href: '/quiz' },
      { name: 'Pricing Plans', href: '/plan' },
      { name: 'Certification', href: '/training#certification' },
      { name: 'Success Stories', href: '/training#testimonials' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'CASA Guidelines', href: 'https://www.casa.gov.au/drones' },
      { name: 'Career Guide', href: '/career-guide' },
      { name: 'Safety Tips', href: '/safety' },
      { name: 'Support', href: '/support' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61581470906278',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://x.com/dronecareepro',
      color: 'hover:text-sky-400'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/dronecareerpro',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/dronecareerpro',
      color: 'hover:text-pink-500'
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold text-xl">DC</span>
                </div>
                <span className="text-2xl font-bold text-white">Drone Career Pro</span>
              </div>
            </Link>
            
            <p className="text-slate-300 text-base leading-relaxed max-w-md">
              Australia's leading drone pilot training provider. Get CASA-certified, master commercial flying, and launch your drone career with expert guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:cooper@dronecareerpro.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span className="text-sm">cooper@dronecareerpro.com</span>
              </a>
              
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Perth, Western Australia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm flex items-center group"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 text-sm text-slate-400">
              <p>© {currentYear} Drone Career Pro. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges (Optional) */}
      <div className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>CASA Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">★</span>
              </div>
              <span>1000+ Certified Pilots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">⚡</span>
              </div>
              <span>Industry Leading</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;