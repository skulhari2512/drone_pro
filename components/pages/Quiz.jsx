// components/pages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { ArrowRight, ArrowLeft, CheckCircle, X, Download, RotateCcw, Sparkles, FileText } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '../../hooks/use-toast';
import { supabase } from '../../lib/supabase';
import { apiService } from '../../services/api';
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

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (/^04\d{8}$/.test(cleanPhone)) return true;
    if (/^0[2378]\d{8}$/.test(cleanPhone)) return true;
    
    if (phone.startsWith('+61')) {
      const intlPhone = cleanPhone.substring(2);
      if (/^4\d{8}$/.test(intlPhone)) return true;
      if (/^[2378]\d{8}$/.test(intlPhone)) return true;
    }
    
    return false;
  };

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
      const generatedPlan = generatePersonalizedPlan(answers);
      const recommendedCourseDetails = generatedPlan.recommendedCourses.map(
        (key) => droneCourseCatalog[key]
      );
      
      const selectedTexts = Object.entries(answers).reduce((acc, [questionId, answerValue]) => {
        const question = mockQuizQuestions.find(q => q.id === Number(questionId));
        if (!question) return acc;
        
        const option = question.options.find(opt => opt.value === answerValue);
        if (option) {
          acc[questionId] = option.text;
        }
        return acc;
      }, {});
      
      const { error } = await supabase
        .from('status_checks')
        .insert([{
          id: uniqueId,
          client_name: formData.name,
          timestamp: new Date().toISOString(),
        }]);

      if (error) throw error;

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
        description: "Redirecting to your personalized plan...",
      });

      localStorage.setItem('quizId', uniqueId);
      setShowCongratulationsPopup(false);

      setTimeout(() => {
        router.push(`/plan?quizId=${uniqueId}`);
      }, 1000);

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
      <style jsx>{`
        .custom-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          font-weight: 700;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          outline: none;
        }
        
        .custom-button:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        .custom-button:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
        
        .btn-outline {
          background-color: white;
          color: #475569;
          border: 2px solid #e2e8f0;
        }
        
        .btn-outline:hover:not(:disabled) {
          background-color: #f8fafc;
          border-color: #94a3b8;
        }
        
        .btn-primary {
          background: linear-gradient(to right, #2563eb, #1d4ed8, #1e40af);
          color: white;
          border: none;
        }
        
        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(to right, #1d4ed8, #1e40af, #1e3a8a);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .btn-primary:disabled {
          background: linear-gradient(to right, #94a3b8, #64748b);
        }
        
        .btn-ghost {
          background: linear-gradient(to right, #fffbeb, #ffedd5);
          color: #b45309;
          border: 2px solid #fcd34d;
        }
        
        .btn-ghost:hover:not(:disabled) {
          background: linear-gradient(to right, #fef3c7, #fed7aa);
          border-color: #f59e0b;
          color: #92400e;
        }
        
        .btn-success {
          background: linear-gradient(to right, #059669, #047857);
          color: white;
          border: none;
        }
        
        .btn-success:hover:not(:disabled) {
          background: linear-gradient(to right, #047857, #065f46);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .btn-success:disabled {
          background: linear-gradient(to right, #94a3b8, #64748b);
        }
      `}</style>
      
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 space-y-4"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Career Assessment Quiz
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-600 bg-white px-5 py-2.5 rounded-full shadow-md border border-slate-200">
                Question {currentQuestion + 1} of {mockQuizQuestions.length}
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
              </motion.div>
            </div>
            <motion.div 
              className="absolute -top-1 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border-2 border-blue-200"
              style={{ left: `calc(${progress}% - 30px)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white shadow-2xl rounded-3xl border border-slate-100">
            <CardContent className="p-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
                <Sparkles className="w-4 h-4" />
                Question {currentQuestion + 1}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {question.question}
              </h2>

              {question.subtitle && (
                <p className="text-slate-600 mb-8 text-lg">{question.subtitle}</p>
              )}

              <div className="space-y-4">
                {question.options.map((option) => (
                  <div
                    key={option.value}
                    className="quiz-option"
                    onClick={() => handleAnswerSelect(option.value)}
                    style={{
                      backgroundColor: selectedOption === option.value ? '#eff6ff' : '#ffffff',
                      border: selectedOption === option.value ? '2px solid #3b82f6' : '2px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: selectedOption === option.value ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedOption !== option.value) {
                        e.currentTarget.style.borderColor = '#93c5fd';
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedOption !== option.value) {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.backgroundColor = '#ffffff';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: selectedOption === option.value ? '2px solid #3b82f6' : '2px solid #cbd5e1',
                        backgroundColor: selectedOption === option.value ? '#3b82f6' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {selectedOption === option.value && (
                          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
                        )}
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <p style={{ 
                          fontWeight: 'bold', 
                          fontSize: '20px', 
                          marginBottom: '4px',
                          color: '#0f172a',
                          lineHeight: '1.4'
                        }}>
                          {option.text}
                        </p>
                        {option.description && (
                          <p style={{ 
                            fontSize: '14px', 
                            marginTop: '8px',
                            color: '#64748b',
                            lineHeight: '1.5'
                          }}>
                            {option.description}
                          </p>
                        )}
                      </div>

                      {selectedOption === option.value && (
                        <CheckCircle style={{ width: '24px', height: '24px', color: '#3b82f6', flexShrink: 0 }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between gap-4 mt-8"
        >
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="custom-button btn-outline px-8 py-4 rounded-2xl text-base shadow-md hover:shadow-xl"
          >
            <ArrowLeft className="mr-2 w-5 h-5" style={{ transition: 'transform 0.3s' }} />
            Previous
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-2xl shadow-md border border-slate-200">
              {mockQuizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 rounded-full ${
                    index < currentQuestion
                      ? 'w-3 h-3 bg-green-500 shadow-md'
                      : index === currentQuestion
                      ? 'w-4 h-4 bg-blue-600 shadow-lg ring-2 ring-blue-200'
                      : 'w-2 h-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            {currentQuestion > 0 && (
              <button
                onClick={handleStartOver}
                className="custom-button btn-ghost px-6 py-4 rounded-2xl text-base shadow-md hover:shadow-xl"
              >
                <RotateCcw className="mr-2 w-5 h-5" style={{ transition: 'transform 0.5s' }} />
                Restart
              </button>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="custom-button btn-primary px-8 py-4 rounded-2xl text-base shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity" style={{ pointerEvents: 'none' }}></div>
            {isLastQuestion ? (
              <>
                <Sparkles className="mr-2 w-6 h-6" />
                View My Plan
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="ml-2 w-6 h-6" />
              </>
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Your progress is automatically saved • Takes approximately 2-3 minutes
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCongratulationsPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50"
              onClick={() => setShowCongratulationsPopup(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <Card className="w-full max-w-lg bg-white rounded-3xl shadow-2xl">
                <CardContent className="p-10 relative">
                  <button
                    onClick={handleClosePopup}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-500" />
                  </button>

                  <div className="text-center mb-8">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="inline-flex p-5 rounded-full bg-gradient-to-br from-green-50 to-green-100 mb-6 border-2 border-green-200"
                    >
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                      Congratulations!
                    </h2>
                    <p className="text-slate-600 text-lg">
                      You've completed the career assessment. Get your personalized drone career plan now!
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        placeholder="John Smith"
                        className="w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className="w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        placeholder="0400 000 000"
                        className="w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="flex items-start pt-2">
                      <input
                        type="checkbox"
                        id="agreeToShare"
                        checked={agreeToShare}
                        onChange={(e) => setAgreeToShare(e.target.checked)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 cursor-pointer"
                      />
                      <label htmlFor="agreeToShare" className="ml-3 block text-sm text-slate-700 leading-relaxed cursor-pointer">
                        I agree to receive my personalized career plan and training information
                      </label>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={handleClosePopup}
                        className="custom-button btn-outline flex-1 h-14 text-base rounded-xl shadow-md hover:shadow-lg"
                      >
                        <X className="mr-2 w-5 h-5" />
                        Go Back
                      </button>
                      <button
                        onClick={handleDownloadPDF}
                        disabled={isDownloading}
                        className="custom-button btn-success flex-1 h-14 text-base rounded-xl shadow-lg hover:shadow-xl"
                      >
                        {isDownloading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                          </span>
                        ) : (
                          <>
                            <Sparkles className="mr-2 w-5 h-5" />
                            Get My Plan
                            <FileText className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </button>
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