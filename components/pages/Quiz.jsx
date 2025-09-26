// components/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { ArrowRight, ArrowLeft, CheckCircle, X, Download, RotateCcw } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '../../hooks/use-toast';
import { apiService } from '../../services/api';
import { supabase } from '../../lib/supabase';
import {
  mockQuizQuestions,
  saveQuizProgress,
  getQuizProgress,
  clearQuizProgress,
  generatePersonalizedPlan,
  droneCourseCatalog
} from '../../data/mock';

const Quiz = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [showCongratulationsPopup, setShowCongratulationsPopup] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [agreeToShare, setAgreeToShare] = useState(true);

  useEffect(() => {
    const saved = getQuizProgress();
    if (Object.keys(saved).length > 0) {
      setAnswers(saved);
    }
  }, []);

  const progress = ((currentQuestion + 1) / mockQuizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === mockQuizQuestions.length - 1;

  const handleAnswerSelect = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = {
      ...answers,
      [mockQuizQuestions[currentQuestion].id]: selectedOption
    };
    setAnswers(newAnswers);
    saveQuizProgress(newAnswers);
    console.log('newAnswers :>> ', newAnswers);

    if (isLastQuestion) {
      setShowCongratulationsPopup(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[mockQuizQuestions[currentQuestion - 1].id] || '');
    }
  };

  const handleStartOver = () => {
    clearQuizProgress();
    setAnswers({});
    setCurrentQuestion(0);
    setSelectedOption('');
    setShowCongratulationsPopup(false);
    setFormData({ name: '', email: '', phone: '' });
    setAgreeToShare(true);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^(\+61|0)[2-478](\s?\d{4}){2}$/.test(phone.replace(/\s/g, ''));


  const handleDownloadPDF = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to download your plan.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Australian phone number.",
        variant: "destructive"
      });
      return;
    }

    if (!agreeToShare) {
      toast({
        title: "Agreement Required",
        description: "Please agree to share your contact information to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsDownloading(true);
    
    try {
      const uniqueId = uuidv4();
      
      // Generate personalized plan data
      const generatedPlan = generatePersonalizedPlan(answers);
      const recommendedCourseDetails = generatedPlan.recommendedCourses.map(
        (key) => droneCourseCatalog[key]
      );
      
      // Map quiz answers to readable text
      const selectedTexts = Object.entries(answers).reduce((acc, [questionId, answerValue]) => {
        const question = mockQuizQuestions.find(q => q.id === Number(questionId));
        if (!question) return acc;
        
        const option = question.options.find(opt => opt.value === answerValue);
        if (option) {
          acc[questionId] = option.text;
        }
        return acc;
      }, {});
      
      // Save to database
      const { error } = await supabase
        .from('status_checks')
        .insert([{
          id: uniqueId,
          client_name: formData.name,
          timestamp: new Date().toISOString(),
        }]);

      if (error) throw error;

      // Send email with plan data
      const response = await apiService.downloadPDF({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        planTitle: generatedPlan.title,
        quizData: selectedTexts,
        planData: {
          title: generatedPlan.title,
          industry: generatedPlan.industry,
          description: generatedPlan.description,
          recommendedCourses: recommendedCourseDetails,
          marketOpportunities: generatedPlan.marketOpportunities,
          whyNow: generatedPlan.whyNow
        }
      });

      toast({
        title: "Success!",
        description: response.data.message || "Your personalized career plan will be sent to your email shortly.",
      });

      // Clear quiz progress after successful submission
      clearQuizProgress();

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: error.response?.data?.detail || "Unable to process your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleClosePopup = () => {
    setShowCongratulationsPopup(false);
    handleStartOver();
  };

  if (!mockQuizQuestions || mockQuizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-slate-600">Loading quiz questions...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = mockQuizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header with Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-slate-900">Career Assessment Quiz</h1>
            <span className="text-sm font-medium text-slate-600">
              {currentQuestion + 1} of {mockQuizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-200" />
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white shadow-xl rounded-2xl border-0">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                {question.question}
              </h2>

              {question.subtitle && (
                <p className="text-slate-600 mb-6">{question.subtitle}</p>
              )}

              <div className="space-y-3">
                {question.options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleAnswerSelect(option.value)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${selectedOption === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 flex items-center justify-center ${selectedOption === option.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-slate-300'
                        }`}>
                        {selectedOption === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{option.text}</p>
                        {option.description && (
                          <p className="text-sm text-slate-600 mt-1">{option.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-between mt-8"
        >
          <Button
            onClick={handlePrevious}
            variant="outline"
            className="px-6 py-3 rounded-full"
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Previous
          </Button>

          {currentQuestion > 0 && currentQuestion < mockQuizQuestions.length - 1 && (
            <Button
              onClick={handleStartOver}
              variant="ghost"
              className="px-6 py-3 rounded-full text-slate-600"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Start Over
            </Button>
          )}

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLastQuestion ? 'Complete' : 'Next'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Progress Indicator Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex space-x-2">
            {mockQuizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${index < currentQuestion
                    ? 'bg-green-500'
                    : index === currentQuestion
                      ? 'bg-slate-900'
                      : 'bg-slate-300'
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Congratulations Popup */}
      <AnimatePresence>
        {showCongratulationsPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowCongratulationsPopup(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl">
                <CardContent className="p-8 relative">
                  {/* Close Button */}
                  <button
                    onClick={handleClosePopup}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>

                  {/* Success Icon */}
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 rounded-full bg-green-50 mb-4 border border-green-200">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      Congratulations!
                    </h2>
                    <p className="text-slate-600">
                      You've completed the career assessment. Get your personalized drone career plan now!
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        className="w-full"
                        required
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreeToShare"
                        checked={agreeToShare}
                        onChange={(e) => setAgreeToShare(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="agreeToShare" className="ml-2 block text-sm text-slate-700">
                        I agree to receive my personalized career plan and training information
                      </label>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <Button
                        onClick={handleClosePopup}
                        variant="outline"
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleDownloadPDF}
                        disabled={isDownloading}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        {isDownloading ? (
                          <>Processing...</>
                        ) : (
                          <>
                            Get My Plan
                            <Download className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;