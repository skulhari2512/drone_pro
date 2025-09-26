import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { X, Download, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { generatePersonalizedPlan, getSelectedIndustryContents } from '../../data/mock';

const PDFDownloadModal = ({ isOpen, onClose, planTitle = "Drone Career Plan" }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error", 
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Get quiz answers from sessionStorage
      const quizAnswers = JSON.parse(sessionStorage.getItem('droneQuizAnswers')) || {};
      
      // Generate personalized plan
      const personalizedPlan = generatePersonalizedPlan(quizAnswers);
      
      // Get industry content for PDF
      let selectedIndustries = [];
      if (personalizedPlan.industry && personalizedPlan.industry !== 'Multi-Industry') {
        const industryKeyMap = {
          'Media & Filmmaking': 'media',
          'Agriculture & Farming': 'agriculture',
          'Construction & Infrastructure': 'construction',
          'Mining & Resources': 'mining',
          'Surveying & Mapping': 'surveying',
          'Public Safety & Emergency Services': 'safety',
          'Delivery & Logistics': 'delivery'
        };
        
        const industryKey = industryKeyMap[personalizedPlan.industry];
        if (industryKey) {
          selectedIndustries = [industryKey];
        }
      } else {
        selectedIndustries = ['agriculture', 'construction', 'media'];
      }
      
      const industryContents = getSelectedIndustryContents(selectedIndustries);
      
      // For React apps, you need to determine your backend endpoint
      // Option 1: Direct Supabase Edge Function call
      const requestData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        planTitle: personalizedPlan.title,
        quizData: quizAnswers,
        planData: {
          personalizedPlan: personalizedPlan,
          industryContents: industryContents,
          title: personalizedPlan.title,
          description: personalizedPlan.description,
          marketOpportunities: personalizedPlan.marketOpportunities,
          whyNow: personalizedPlan.whyNow
        }
      };

      // Use environment variable for the API URL
      const apiUrl = process.env.REACT_APP_SUPABASE_URL 
        ? `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/download-pdf`
        : 'https://ymrtlcyafzuotngltgcb.supabase.co/functions/v1/download-pdf';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.REACT_APP_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error (${response.status})`);
      }

      const result = await response.json();
      console.log('Success:', result);

      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your career plan has been sent to your email.",
        variant: "default",
      });

    } catch (error) {
      console.error('Request failed:', error);
      
      toast({
        title: "Error",
        description: error.message || "Failed to send your career plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: '', email: '', phone: '' });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md rounded-2xl shadow-2xl border"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
          
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%'
            }}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 relative z-10">
            {!isSuccess ? (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 rounded-full mb-4"
                    style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Download Your Career Plan
                  </h2>
                  <p className="text-slate-600">
                    Enter your details to receive your personalized {planTitle} via email
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1 rounded-lg bg-white/10 border-white/20 text-slate-900 placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-1 rounded-lg bg-white/10 border-white/20 text-slate-900 placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0400 000 000"
                      className="mt-1 rounded-lg bg-white/10 border-white/20 text-slate-900 placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                          Sending Report...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send My Report
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Your information is secure and will only be used to send your career plan.
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full mb-6"
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Report Sent Successfully!
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Your {planTitle} has been sent to <strong>{formData.email}</strong>. 
                  Please check your inbox and spam folder.
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  You should receive it within a few minutes.
                </p>
                <Button
                  onClick={handleClose}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PDFDownloadModal;