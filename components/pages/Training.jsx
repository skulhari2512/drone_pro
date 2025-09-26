// components/pages/Training.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  Award,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Target,
  Shield
} from 'lucide-react';
import trainingData from '../../data/training.json';

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${className}`}>
    {children}
  </span>
);

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const licenseDetails = {
    'RPA Operator Accreditation': {
      level: 'Entry Level',
      duration: '2-4 hours',
      price: '$180-$250',
      color: 'bg-green-100 text-green-800'
    },
    'Remote Pilot Licence (RePL)': {
      level: 'Professional',
      duration: '5 days',
      price: '$1,300-$3,500',
      color: 'bg-blue-100 text-blue-800'
    },
    "Remotely Piloted Aircraft Operator's Certificate(ReOC)": {
      level: 'Business',
    duration: '2-3 weeks',
    price: '$6,000-$15,000',
    color: 'bg-purple-100 text-purple-800'
  }
};

// Course images
const courseImages = {
  'in-class': '/images/professional-drone-pilot-certification-australia.jpg',
  'online': '/images/certified-drone-pilot-career-success.jpg',
  'default': '/images/basic-drone-pilot-training-australia.jpg'
};
return (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {trainingData.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {trainingData.summary}
          </p>
        </motion.div>
      </div>
    </section>

    {/* RePL Courses Section */}
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Remote Pilot Licence (RePL) Options
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the training format that best fits your schedule and learning style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {trainingData.replCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                  <Image
                    src={courseImages[course.title.includes('Online') ? 'online' : 'in-class']}
                    alt={course.title}
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-12 h-12 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold">{course.title}</h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto text-blue-600 mb-2" />
                      <p className="text-sm text-slate-600">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-5 h-5 mx-auto text-green-600 mb-2" />
                      <p className="text-sm text-slate-600">Investment</p>
                      <p className="font-semibold">{course.price}</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-5 h-5 mx-auto text-purple-600 mb-2" />
                      <p className="text-sm text-slate-600">Validity</p>
                      <p className="font-semibold">Lifetime</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{course.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {course.features.slice(0, 4).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href="/quiz" legacyBehavior>
                    <a>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* License Types Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            All Certification Pathways
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From entry-level to business operations, find the right certification for your goals
          </p>
        </motion.div>

        <div className="space-y-8">
          {trainingData.sections.slice(0, 3).map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {section.heading}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={licenseDetails[section.heading]?.color}>
                        {licenseDetails[section.heading]?.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-600">
                        {licenseDetails[section.heading]?.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-slate-600">
                        {licenseDetails[section.heading]?.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-slate-600">
                        CASA Approved
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2">
                    {section.bullets.map((bullet, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Training Questions Answered
          </h2>
        </motion.div>

        <div className="space-y-6">
          {trainingData.faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.q}
                  </h3>
                  <p className="text-slate-600">
                    {item.a}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Training?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your personalized training plan and start your drone career journey today
          </p>
          <Link href="/quiz" legacyBehavior>
            <a>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Training Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);
};

export default Training;