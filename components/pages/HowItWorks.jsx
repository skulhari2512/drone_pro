// components/pages/HowItWorks.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle, ArrowRight, Download, Users, PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';
import howItWorksData from '../../data/how-it-works.json';

const HowItWorks = () => {
const stepImages = [
  '/images/professional-dji-drone-training-australia.jpg',
  '/images/drone-pilot-assessment-process-australia.jpg',
  '/images/commercial-drone-license-training-course.jpg',
  '/images/hands-on-drone-flight-training-australia.jpg',
  '/images/drone-certification-exam-preparation.jpg',
  '/images/certified-drone-pilot-career-success.jpg',
];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Premium Hero Section with DJI Drone Background */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={stepImages[0]}
            alt="Professional DJI drone training course in Australia - How it works"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {howItWorksData.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {howItWorksData.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '50px' }}>
          <div className="space-y-24">
            {howItWorksData.sections.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="relative w-full h-80 lg:h-96 rounded-2xl shadow-lg overflow-hidden">
                      <Image
                        src={stepImages[index + 1] || stepImages[index]}
                        alt={step.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {/* Step number overlay */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      {step.heading}
                    </h2>

                    <div className="space-y-6">
                      {step.body.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg text-slate-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}

                      <div className="space-y-3 pt-4">
                        {step.bullets.map((bullet, bIndex) => (
                          <div key={bIndex} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Next Steps CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Take our free career assessment to get your personalized training pathway
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz" legacyBehavior>
                <a>
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Take Career Quiz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/training" legacyBehavior>
                <a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg rounded-full font-semibold hover:scale-105 transition-all duration-300"
                  >
                    View Training Options
                    <PlayCircle className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions about our training process
            </p>
          </motion.div>

          <div className="space-y-6">
            {howItWorksData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {item.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;