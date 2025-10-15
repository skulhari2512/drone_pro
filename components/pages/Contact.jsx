// components/pages/Contact.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useToast } from '../../hooks/use-toast';
import { Mail, Phone, Send, MapPin, Clock, Users, Award, Shield, Star } from 'lucide-react';

const Contact = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };
  
const handleSubmit = async (e) => {
  e.preventDefault();

  // Client-side validation
  if (!formData.name || !formData.email || !formData.phone || !formData.message) {
    toast({
      title: "Validation Error",
      description: "Please fill in all required fields (Name, Email, Phone, Message).",
      variant: "destructive",
    });
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast({
      title: "Invalid Email",
      description: "Please enter a valid email address.",
      variant: "destructive",
    });
    return;
  }

  // Phone validation (basic)
  const phoneRegex = /^[0-9\s\-\+\(\)]{8,}$/;
  if (!phoneRegex.test(formData.phone)) {
    toast({
      title: "Invalid Phone",
      description: "Please enter a valid phone number.",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    console.log('Submitting form data:', formData);

    // Call Next.js API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        inquiryType: formData.inquiryType || null
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
      throw new Error('Invalid server response');
    }

    console.log('API response:', data);

    if (!response.ok) {
      // Handle error from API - safely access data.message
      const errorMessage = data?.message || data?.error || 'Failed to submit form';
      const errorDetails = data?.details || '';
      console.error('API Error:', { status: response.status, message: errorMessage, details: errorDetails, fullData: data });
      throw new Error(errorDetails ? `${errorMessage} - ${errorDetails}` : errorMessage);
    }

    // Success
    toast({
      title: "Success!",
      description: data.message || "Thank you for contacting us! We'll get back to you within 24 hours.",
      className: "bg-green-50 border-green-200",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      inquiryType: ''
    });

    // Optional: Scroll to top after successful submission
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } catch (error) {
    console.error('Error submitting form:', error);
    toast({
      title: "Error",
      description: error.message || "Failed to submit form. Please try again or contact us directly at cooper@dronecareerpro.com",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <style jsx>{`
        .modern-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
          border: none;
          border-radius: 1rem;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2);
        }
        
        .modern-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 35px -5px rgba(59, 130, 246, 0.4), 0 10px 15px -6px rgba(59, 130, 246, 0.3);
        }
        
        .modern-button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .modern-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%);
        }
        
        .modern-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .modern-button:hover:not(:disabled)::before {
          left: 100%;
        }
        
        .modern-button .button-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .spinner {
          width: 18px;
          height: 18px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .input-focused {
          transition: all 0.2s ease;
        }

        .input-focused:focus {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Ready to start your drone career journey? Our expert team is here to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-xl border-0 rounded-3xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-slate-900">Send Us a Message</CardTitle>
                <p className="text-slate-600 text-sm mt-2">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="h-12 rounded-xl border-2 focus:border-blue-500 transition-colors input-focused"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12 rounded-xl border-2 focus:border-blue-500 transition-colors input-focused"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0412 345 678"
                      className="h-12 rounded-xl border-2 focus:border-blue-500 transition-colors input-focused"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-700 mb-2">
                      Inquiry Type
                    </label>
                    <Select 
                      value={formData.inquiryType} 
                      onValueChange={handleSelectChange}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="inquiryType" className="h-12 rounded-xl border-2">
                        <SelectValue placeholder="Select inquiry type (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training">Training Information</SelectItem>
                        <SelectItem value="certification">Certification Query</SelectItem>
                        <SelectItem value="business">Business Opportunities</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your drone career goals..."
                      rows={5}
                      className="rounded-xl border-2 focus:border-blue-500 transition-colors resize-none input-focused"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    className="modern-button"
                    disabled={isSubmitting}
                  >
                    <span className="button-content">
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <Card className="shadow-xl border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-blue-50 border-2 border-blue-100 transition-all hover:border-blue-300 hover:shadow-md">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email</p>
                    <a 
                      href="mailto:cooper@dronecareerpro.com" 
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      cooper@dronecareerpro.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-100 transition-all hover:border-emerald-300 hover:shadow-md">
                  <div className="p-3 rounded-xl bg-emerald-100">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Phone</p>
                    <p className="text-slate-600">Available upon request</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-purple-50 border-2 border-purple-100 transition-all hover:border-purple-300 hover:shadow-md">
                  <div className="p-3 rounded-xl bg-purple-100">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Coverage</p>
                    <p className="text-slate-600">Nationwide Training Network across Australia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-amber-50 border-2 border-amber-100 transition-all hover:border-amber-300 hover:shadow-md">
                  <div className="p-3 rounded-xl bg-amber-100">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Response Time</p>
                    <p className="text-slate-600">We typically respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-xl border-0 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 transition-all hover:bg-white/80">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">CASA Certified Training</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 transition-all hover:bg-white/80">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">500+ Successful Students</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 transition-all hover:bg-white/80">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">100% Pass Rate Guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 transition-all hover:bg-white/80">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">4.9/5 Student Rating</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional CTA */}
            <Card className="shadow-xl border-0 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Need Immediate Assistance?</h3>
                <p className="text-slate-300 text-sm mb-4">
                  If you have an urgent inquiry, please mention it in your message and we'll prioritize your request.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>Monday - Friday: 9:00 AM - 5:00 PM AEST</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;