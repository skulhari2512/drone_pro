// components/pages/Plan.jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { v4 as uuidv4 } from 'uuid';
import {
  Download,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Award,
  Clock,
  DollarSign,
  X,
  Monitor,
  Users,
  MapPin
} from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import {
  getQuizProgress,
  generatePersonalizedPlan,
  droneCourseCatalog,

  mockQuizQuestions
} from '../../data/mock';

// Course Images Mapping - Update paths to public folder
const COURSE_IMAGES = {
  'remote-pilot-licence': '/images/drone-certification-exam-preparation.jpg',
  'aroc-aircraft-radio-operator-certificate': '/images/aircraft-radio-operator-certificate-training.jpg',
  'commercial-operations': '/images/civil-engineering-drone-surveying-training.jpg',
  'advanced-training': '/images/real-estate-aerial-photography-drone-course.jpg',
  'basic-training': '/images/basic-drone-pilot-training-australia.jpg',
  'professional-certification': '/images/professional-drone-pilot-certification-australia.jpg',
  'supporting-certification': '/images/basic-drone-pilot-training-australia.jpg',
  'specialized-training': '/images/specialized-drone-operations-training-course.jpg',
  'inspection-services': '/images/construction-drone-inspection-course.jpg',
  'mapping-surveying': '/images/specialized-drone-operations-training-course.jpg',
  'photography': '/images/aerial-photography-drone-training-australia.jpg',
  'agriculture': '/images/precision-agriculture-drone-course-australia.jpg'
};
// StatCard Component
const StatCard = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${color} mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className="text-sm text-slate-600 mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  </motion.div>
);

// CourseCard Component
const CourseCard = ({ course, index, isRecommended }) => {
  const courseImage = COURSE_IMAGES[course.id] || '/images/specialized-drone-operations-training-course.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`h-full ${isRecommended ? 'ring-2 ring-blue-500 rounded-2xl' : ''}`}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
        {isRecommended && (
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-center">
            <span className="text-sm font-semibold">RECOMMENDED FOR YOU</span>
          </div>
        )}

        {/* Course Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <Image
            src={courseImage}
            alt={`${course.name} - Drone training course Australia`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {course.badge && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {course.badge}
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{course.name}</CardTitle>
          <p className="text-sm text-slate-600 mt-2">{course.description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Course Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="w-4 h-4 text-slate-500" />
              <span className="font-semibold">{course.price}</span>
            </div>
            {course.delivery && (
              <div className="flex items-center gap-2 text-sm">
                <Monitor className="w-4 h-4 text-slate-500" />
                <span>{course.delivery}</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          {course.benefits && (
            <div className="space-y-2 pt-2 border-t">
              {course.benefits.slice(0, 3).map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Plan = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [planData, setPlanData] = useState(null);
  const [enhancedCourses, setEnhancedCourses] = useState([]);
  const [showCasaForm, setShowCasaForm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const [casaFormData, setCasaFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    console.log('Plan component loading...');

    try {
      // Get quiz ID from URL or localStorage
      const { quizId } = router.query;
      const storedQuizId = localStorage.getItem('quizId');
      const currentQuizId = quizId || storedQuizId;

      if (!currentQuizId) {
        // No quiz ID, redirect to quiz
        toast({
          title: "No quiz results found",
          description: "Please complete the quiz first to see your personalized plan.",
          variant: "destructive"
        });
        router.push('/quiz');
        return;
      }

      // Get quiz answers
      const quizAnswers = getQuizProgress();

      if (!quizAnswers || Object.keys(quizAnswers).length === 0) {
        // No quiz answers, redirect to quiz
        toast({
          title: "Incomplete quiz",
          description: "Please complete the quiz to see your personalized plan.",
          variant: "destructive"
        });
        router.push('/quiz');
        return;
      }

      // Generate personalized plan
      const plan = generatePersonalizedPlan(quizAnswers);
      setPlanData(plan);

      // Get recommended courses
      const allCourses = [...droneCourseCatalog];

      // For demo, select 3-4 courses based on plan
      const recommendedCourses = allCourses.slice(0, 4).map((course, index) => ({
        ...course,
        id: course.id || `course-${index}`,
        isRecommended: index === 0 // Mark first course as recommended
      }));

      setEnhancedCourses(recommendedCourses);

    } catch (err) {
      console.error('Error loading plan:', err);
      setError('Failed to load your personalized plan');
      toast({
        title: "Error",
        description: "Failed to load your plan. Please try again.",
        variant: "destructive"
      });
    }
  }, [router, toast]);

  const handleCasaDownload = async (e) => {
    e.preventDefault();

    if (!casaFormData.name || !casaFormData.email) {
      toast({
        title: "Please fill all fields",
        description: "Name and email are required.",
        variant: "destructive"
      });
      return;
    }

    setIsDownloading(true);

    try {
      // In a real app, you would generate or fetch the PDF here
      // For now, we'll simulate a download

      // Create a download link for the PDF (PDF should be in public folder)
      const link = document.createElement('a');
      link.href = '/pdfs/Future.pdf'; // Make sure to move PDF to public/pdfs/
      link.download = 'CASA-Drone-Future-Report.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download started!",
        description: "Your CASA report is downloading.",
      });

      setShowCasaForm(false);
      setCasaFormData({ name: '', email: '' });

    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Link href="/quiz" legacyBehavior>
              <a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Back to Quiz
                </Button>
              </a>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <p className="text-slate-600">Loading your personalized plan...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Personalized Drone Career Plan
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Based on your assessment, we've created a customized training pathway to launch your drone career
            </p>
          </motion.div>
        </div>
      </section>

      {/* CASA Report Banner */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">
                📊 Free CASA Report: "The Future of Drones in Australia"
              </h3>
              <p className="text-slate-300">
                Get exclusive insights into drone industry growth and opportunities
              </p>
            </div>
            <Button
              onClick={() => setShowCasaForm(true)}
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Free Report
            </Button>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              icon={Target}
              label="Focus Industry"
              value={planData?.industry || "Commercial Operations"}
              color="from-blue-400 to-blue-500"
              delay={0}
            />
            <StatCard
              icon={DollarSign}
              label="Earning Potential"
              value="$75-$400/hour"
              color="from-green-400 to-green-500"
              delay={0.1}
            />
            <StatCard
              icon={Clock}
              label="Time to Certification"
              value="3 - 5 Days"
              color="from-purple-400 to-purple-500"
              delay={0.2}
            />
            <StatCard
              icon={TrendingUp}
              label="Career Growth"
              value="77% Industry Growth"
              color="from-orange-400 to-orange-500"
              delay={0.3}
            />
          </div>

          {/* Recommended Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Your Recommended Training Path
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {enhancedCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                  isRecommended={course.isRecommended}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASA Form Modal */}
      {showCasaForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white">
            <CardHeader className="relative">
              <button
                onClick={() => setShowCasaForm(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
              <CardTitle>Download CASA Report</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCasaDownload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <Input
                    type="text"
                    value={casaFormData.name}
                    onChange={(e) => setCasaFormData({ ...casaFormData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={casaFormData.email}
                    onChange={(e) => setCasaFormData({ ...casaFormData, email: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isDownloading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isDownloading ? 'Processing...' : 'Download PDF'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Plan;