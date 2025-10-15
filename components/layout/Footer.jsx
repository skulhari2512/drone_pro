import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/dronelogo.png"
                  alt="Drone Career Pro Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  priority
                />
              </div>
              <span className="text-xl font-bold">Drone Career Pro</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Australia's premier drone training platform. Transform your career with professional drone certification and industry expertise.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span>cooper@dronecareerpro.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>Nationwide Training Network</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-slate-300 hover:text-white transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/industry-uses" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Training</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Career Assessment
                </Link>
              </li>
              <li>
                <span className="text-slate-300">RePL Certification</span>
              </li>
              <li>
                <span className="text-slate-300">ReOC Business</span>
              </li>
              <li>
                <span className="text-slate-300">Industry Specialization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Drone Career Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">CASA Compliance</a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500/90 to-purple-900/90 backdrop-blur-md border-t border-white/30 py-3 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <h3 className="text-lg font-bold text-white">Stop dreaming, start earning</h3>
              <p className="text-blue-100/95 text-sm">While others wait, you fly. Get your licence now and lead in Australia's next wave of drone innovation</p>
            </div>
            <Button href="/quiz" className="bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Journey →
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;