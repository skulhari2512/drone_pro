// pages/plan.js
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '../../hooks/use-toast';
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
  MapPin,
  Camera,
  Shield,
  Mountain,
  Building,
  Sprout,
  Map
} from 'lucide-react';

import { getQuizProgress, generatePersonalizedPlan, droneCourseCatalog, mockQuizQuestions } from '../../data/mock';

const COURSE_IMAGES = {
  'remote-pilot-licence': '/images/drone-certification-exam-preparation.jpg',
  'multi-rotor-operations': '/images/aircraft-radio-operator-certificate-training.jpg',
  'multi-rotor-7-25kg-operations': '/images/aircraft-radio-operator-certificate-training.jpg',
  'aroc-aircraft-radio-operator-certificate': '/images/aircraft-radio-operator-certificate-training.jpg',
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


const getCourseImage = (courseName, category) => {
  const courseKey = courseName?.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/,/g, '');
  
  return COURSE_IMAGES[courseKey] || 
         COURSE_IMAGES[category?.toLowerCase().replace(/\s+/g, '-')] || 
         COURSE_IMAGES['default'];
};

const industryCareerData = [
  {
    title: 'Agriculture & Farming',
    icon: Sprout,
    color: 'from-emerald-50 to-teal-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    accentColor: 'bg-emerald-100',
    description: 'Transform farming with precision drone technology. High-tech sensors reveal plant stress before it\'s visible, precision sprayers deliver nutrients exactly where needed, and autonomous operations make agriculture smarter, safer and more sustainable.',
    opportunities: [
      'Monitor plant health with multispectral imaging',
      'Execute precision spraying missions',
      'Map soil conditions and moisture levels',
      'Control pests with targeted interventions',
      'Assist with livestock management'
    ]
  },
  {
    title: 'Construction & Infrastructure',
    icon: Building,
    color: 'from-orange-50 to-amber-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    accentColor: 'bg-orange-100',
    description: 'Turn construction sites into dynamic digital twins. Complete in hours what used to take days of surveying. Track progress in real time, calculate volumes instantly, and inspect structures without scaffolding.',
    opportunities: [
      'Create detailed site maps and 3D models',
      'Monitor progress and safety compliance',
      'Perform accurate volumetric analysis',
      'Inspect hard-to-reach structures safely',
      'Capture stunning project visuals'
    ]
  },
  {
    title: 'Mining & Resources',
    icon: Mountain,
    color: 'from-amber-50 to-yellow-50',
    iconColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    accentColor: 'bg-amber-100',
    description: 'Make mining smarter and safer. Scan entire open-pit mines with high-resolution cameras and LiDAR, use hyperspectral imaging to reveal mineral deposits, and map underground passages without human risk.',
    opportunities: [
      'Build comprehensive 3D pit models',
      'Conduct detailed spectral surveys',
      'Measure stockpiles accurately',
      'Map underground tunnel systems',
      'Inspect pipelines and conveyors'
    ]
  },
  {
    title: 'Surveying & Mapping',
    icon: Map,
    color: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    accentColor: 'bg-blue-100',
    description: 'Capture geospatial data quickly and affordably. From protecting ecosystems to designing smart cities, create accurate maps that support environmental science, urban planning, and disaster response.',
    opportunities: [
      'Create environmental and land cover maps',
      'Survey hydrology and geological features',
      'Assess agricultural and forest health',
      'Map urban infrastructure precisely',
      'Provide rapid disaster response mapping'
    ]
  },
  {
    title: 'Public Safety & Emergency',
    icon: Shield,
    color: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    accentColor: 'bg-rose-100',
    description: 'Bring critical support where humans can\'t safely go. Use thermal cameras for search and rescue, deliver emergency supplies, map disaster zones, and inspect hazardous sites from a safe distance.',
    opportunities: [
      'Conduct search and rescue operations',
      'Provide disaster assessment and mapping',
      'Execute medical supply delivery missions',
      'Inspect hazardous sites safely',
      'Support crowd safety and water rescue'
    ]
  },
  {
    title: 'Media & Filmmaking',
    icon: Camera,
    color: 'from-purple-50 to-violet-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    accentColor: 'bg-purple-100',
    description: 'Democratize aerial cinematography. Capture sweeping vistas and dynamic footage for weddings, documentaries, music videos, and commercial productions with creative freedom and cost savings.',
    opportunities: [
      'Capture cinematic aerial footage',
      'Showcase real estate with dynamic tours',
      'Cover live events and sports',
      'Create environmental documentaries',
      'Produce engaging marketing content'
    ]
  },
  {
    title: 'Delivery & Logistics',
    icon: Target,
    color: 'from-indigo-50 to-blue-50',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    accentColor: 'bg-indigo-100',
    description: 'Pioneer the future of delivery. Transport parcels, groceries, medicines and emergency supplies in under 30 minutes. Help build sustainable delivery networks that connect remote communities.',
    opportunities: [
      'Operate last-mile delivery systems',
      'Transport medical and emergency supplies',
      'Support major e-commerce operations',
      'Develop sustainable logistics solutions',
      'Connect underserved remote areas'
    ]
  }
];

const determineDeliveryMethod = (quizAnswers) => {
  if (!quizAnswers) return 'both';
  
  const values = Object.values(quizAnswers);
  const hasHandsOn = values.some(v => 
    typeof v === 'string' && v.includes('hands-on')
  );
  
  const hasOnline = values.some(v =>
    typeof v === 'string' && v.includes('online')
  );

  if (hasHandsOn && !hasOnline) return 'classroom';
  if (hasOnline && !hasHandsOn) return 'online';
  return 'both';
};

const enhanceCourseWithDelivery = (course, deliveryMethod) => {
  if (!course) return null;

  const deliveryOptions = {
    classroom: {
      type: 'In-Person Classroom',
      icon: Users,
      description: 'Hands-on training with instructor guidance',
      features: ['Face-to-face instruction', 'Hands-on practice with equipment'],
      duration: course.duration || '3-5 days',
      price: course.price || 1500,
      locations: ['Sydney', 'Melbourne', 'Brisbane']
    },
    online: {
      type: 'Online Learning',
      icon: Monitor,
      description: 'Flexible online training at your own pace',
      features: ['Self-paced learning modules', 'Interactive online simulations'],
      duration: `${course.duration || '3-5 days'} (Self-paced)`,
      price: Math.floor((course.price || 1500) * 0.7),
      locations: ['Australia-wide']
    }
  };

  if (course.name && course.name.includes('AROC')) {
    return { ...course, deliveryOptions: [deliveryOptions.classroom] };
  }
  if (course.name && course.name.includes('multi_rotor_7_25kg_operations')) {
    return { ...course, deliveryOptions: [deliveryOptions.classroom] };
  }

  return {
    ...course,
    deliveryOptions: deliveryMethod === 'both' 
      ? [deliveryOptions.classroom, deliveryOptions.online]
      : [deliveryOptions[deliveryMethod] || deliveryOptions.classroom]
  };
};

const CyberButton = ({ onClick, children, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative px-12 py-5 text-white font-bold border-none rounded-full transition-all duration-300 hover:shadow-2xl ${className}`}
      style={{ 
        backgroundColor: '#ff6b35', 
        minWidth: '320px', 
        height: '64px',
        cursor: 'pointer'
      }}
    >
      <div className="flex items-center justify-center relative z-10">
        {children}
      </div>
    </button>
  );
};

const FormModal = ({ isOpen, onClose, title, description, onSubmit, fields, submitText, isLoading }) => {
  if (!isOpen) return null;

  return (
    <Card className="max-w-md mx-auto relative overflow-hidden rounded-3xl">
      <CardHeader className="relative z-10">
        <button onClick={onClose} className="absolute right-4 top-4 p-2 h-10 w-10 rounded-full hover:bg-slate-100 transition-colors">
          <X className="w-5 h-5" />
        </button>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {description && <p className="text-sm mt-2 text-slate-600">{description}</p>}
      </CardHeader>
      <CardContent className="relative z-10">
        <form onSubmit={onSubmit} className="space-y-4">
          {fields.map((field, index) => (
            <Input key={index} {...field} className="w-full" />
          ))}
          <div className="flex gap-2 pt-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg hover:bg-slate-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : submitText}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} viewport={{ once: true }}>
    <Card className={`border-0 shadow-lg rounded-2xl bg-gradient-to-br ${color} text-white`}>
      <CardContent className="p-6">
        <Icon className="w-10 h-10 mb-4" />
        <p className="text-sm mb-2">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const DeliveryOptionCard = ({ option }) => {
  if (!option) return null;
  const IconComponent = option.icon;
  
  return (
    <Card className="border-2 rounded-xl hover:border-blue-400 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-50">
            <IconComponent className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-900">{option.type}</h4>
              <span className="text-lg font-bold text-blue-600">${option.price}</span>
            </div>
            <p className="text-sm text-slate-600 mb-3">{option.description}</p>
            {option.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span className="text-xs text-slate-700">{feature}</span>
              </div>
            ))}
            <div className="mt-3 pt-3 border-t">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-3 h-3" />
                <span>{option.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-xs mt-1 text-slate-600">
                <MapPin className="w-3 h-3" />
                <span>{option.locations.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EnhancedCourseCard = ({ course }) => {
  if (!course) return null;

  return (
    <Card className="border-0 shadow-lg rounded-2xl group hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden rounded-t-2xl relative bg-slate-200">
        <Image 
          src={getCourseImage(course.name, course.category)} 
          alt={course.name || 'Course'}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
          {course.category || 'Training'}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 my-3">{course.name}</h3>
        <p className="text-slate-600 mb-4 text-sm">{course.description}</p>
        
        <div className="space-y-2 mb-6">
          {(course.benefits || []).slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>

        {course.deliveryOptions && course.deliveryOptions.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-slate-900">Choose Your Learning Style:</h4>
            {course.deliveryOptions.map((option, index) => (
              <DeliveryOptionCard key={index} option={option} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Plan = () => {
  const router = useRouter();
  const { toast } = useToast();
  
  const [planData, setPlanData] = useState(null);
  const [enhancedCourses, setEnhancedCourses] = useState([]);
  const [showCasaForm, setShowCasaForm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [casaFormData, setCasaFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    console.log('Starting plan load...');
    
    if (typeof window === 'undefined') return;
    
    try {
      let quizAnswers = getQuizProgress();
      console.log('Quiz answers from sessionStorage:', quizAnswers);
      
      if (!quizAnswers || Object.keys(quizAnswers).length === 0) {
        const stored = localStorage.getItem('quizAnswers');
        console.log('Quiz answers from localStorage:', stored);
        if (stored) quizAnswers = JSON.parse(stored);
      }
      
      console.log('Final quiz answers:', quizAnswers);
      const generatedPlan = generatePersonalizedPlan(quizAnswers || {});
      console.log('Generated plan:', generatedPlan);
      
      setPlanData(generatedPlan);
      
      // Enhance courses with delivery options
      if (generatedPlan?.recommendedCourses && droneCourseCatalog) {
        const deliveryMethod = determineDeliveryMethod(quizAnswers);
        console.log('Delivery method:', deliveryMethod);
        
        const courses = generatedPlan.recommendedCourses
          .map(key => {
            const course = droneCourseCatalog[key];
            return course ? enhanceCourseWithDelivery(course, deliveryMethod) : null;
          })
          .filter(Boolean);
        
        console.log('Enhanced courses:', courses);
        setEnhancedCourses(courses);
      }
      
    } catch (err) {
      console.error('ERROR loading plan:', err);
      setPlanData({
        title: "Drone Professional Career Path",
        industry: "Commercial Operations",
        description: "Your pathway to becoming a certified drone professional",
        recommendedCourses: [],
        marketOpportunities: []
      });
    }
  }, []);

  const handleCasaDownload = async (e) => {
    e.preventDefault();
    
    if (!casaFormData.name || !casaFormData.email) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/pdfs/CASA-Drone-Safety-Rules.pdf';
    link.download = 'CASA-Drone-Safety-Rules.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({ title: "Success!", description: "Download started" });
    setCasaFormData({ name: '', email: '' });
    setShowCasaForm(false);
    setIsDownloading(false);
  };

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading your plan...</h2>
        </div>
      </div>
    );
  }

  const casaFields = [
    { type: "text", name: "name", placeholder: "Full Name *", value: casaFormData.name, onChange: (e) => setCasaFormData({ ...casaFormData, name: e.target.value }), required: true },
    { type: "email", name: "email", placeholder: "Email *", value: casaFormData.email, onChange: (e) => setCasaFormData({ ...casaFormData, email: e.target.value }), required: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex p-3 rounded-full bg-blue-600/20 mb-6">
              <Award className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Your Personalized Career Plan</h1>
            <p className="text-2xl text-blue-200 font-semibold mb-4">{planData.title}</p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">{planData.description}</p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8">
              {!showCasaForm ? (
                <CyberButton onClick={() => setShowCasaForm(true)}>
                  <Download className="mr-3 w-5 h-5" />
                  <span>Free Marketing Information</span>
                </CyberButton>
              ) : (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <FormModal
                    isOpen={showCasaForm}
                    onClose={() => setShowCasaForm(false)}
                    title="Download Marketing Information"
                    description="Please provide your details"
                    onSubmit={handleCasaDownload}
                    fields={casaFields}
                    submitText="Download PDF"
                    isLoading={isDownloading}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard icon={Target} label="Focus Industry" value={planData.industry} color="from-blue-400 to-blue-500" delay={0} />
            <StatCard icon={DollarSign} label="Earning Potential" value="$75-$400/hour" color="from-green-400 to-green-500" delay={0.1} />
            <StatCard icon={Clock} label="Time to Certification" value="3 - 5 Days" color="from-purple-400 to-purple-500" delay={0.2} />
            <StatCard icon={TrendingUp} label="Total Investment" value="$1,300 - $3,000+" color="from-orange-400 to-orange-500" delay={0.3} />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Your Recommended Training Path</h2>
            
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {enhancedCourses.map((course, index) => (
                <EnhancedCourseCard key={index} course={course} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <Card className="border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Market Opportunities in {planData.industry}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {planData.marketOpportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700">{opportunity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Discover the Future of Drone Careers</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">Imagine piloting cutting-edge technology that changes how entire industries operate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryCareerData.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div key={industry.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                    <Card className={`border-2 ${industry.borderColor} shadow-lg hover:shadow-2xl rounded-3xl h-full bg-gradient-to-br ${industry.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1`}>
                      <CardContent className="p-8">
                        <div className={`inline-flex p-4 rounded-2xl ${industry.accentColor} mb-5`}>
                          <IconComponent className={`w-8 h-8 ${industry.iconColor}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">{industry.title}</h3>
                        <p className="text-sm mb-6 text-slate-600 leading-relaxed">{industry.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">What You'll Do</h4>
                          {industry.opportunities.map((opp, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className={`w-1.5 h-1.5 rounded-full ${industry.iconColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                              <span className="text-sm text-slate-700 leading-relaxed">{opp}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Plan;