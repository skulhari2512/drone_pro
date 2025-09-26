// components/pages/Home.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, TrendingUp, Users, Award, DollarSign } from 'lucide-react';
import AnimatedCounter from '../Enhanced/AnimatedCounter';

const Home = () => {
  // Video path - video should be in public/videos/ folder
  const heroVideo = '/videos/hero-video.mp4';

  const stats = [
    { icon: Users, value: "40,000", label: "Successful Graduates", color: "text-blue-600" },
    { icon: DollarSign, value: "$75-400", label: "Hourly Earning Range", color: "text-green-600" },
    { icon: TrendingUp, value: "77%", label: "Industry Growth", color: "text-purple-600" },
    { icon: Award, value: "1,200+", label: "Training Hours Delivered", color: "text-orange-600" }
  ];

const features = [
  {
    title: "Professional Assessment",
    description: "Get matched with your ideal drone career path through our comprehensive assessment",
    image: "/images/professional-drone-career-assessment-australia.jpg"  // Changed from dimg21.jpg
  },
  {
    title: "Industry Specialisation", 
    description: "Specialise in high-demand sectors like construction, agriculture, and asset inspection",
    image: "/images/drone-industry-specialization-training-australia.jpg"  // Changed from dimg14.jpg
  },
  {
    title: "Certification Pathways",
    description: "Clear progression pathway from RPA accreditation to RePL and ReOC business certification", 
    image: "/images/drone-certification-pathways-australia.jpg"  // Changed from dimg32.jpg
  }
];
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section with Video Background */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">

        {/* Video Background Layer */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => console.log('Video loaded successfully!')}
            onError={(e) => {
              console.error('Video failed to load from:', heroVideo);
              console.error('Make sure hero-video.mp4 is in public/videos/ folder');
            }}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-[1]" />

        {/* Hero Content */}
        <div className="relative z-[2] w-full max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stop dreaming, Start earning
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-normal text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              While others wait, you fly. Get your licence now and lead in Australia's next wave of drone innovation
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/quiz" legacyBehavior>
                <a>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    Take Career Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </Link>

              <Link href="/how-it-works" legacyBehavior>
                <a>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Learn More
                  </Button>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex p-3 rounded-full bg-slate-100 ${stat.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value.includes(',') ? (
                      <AnimatedCounter
                        end={parseInt(stat.value.replace(/,/g, '').replace(/\D/g, ''))}
                        duration={2}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <p className="text-slate-600 mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Your path to success
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              From assessment to certification, we guide you every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-500 border-0 rounded-3xl group-hover:-translate-y-1 shadow-md bg-white">
                  <div className="aspect-video relative overflow-hidden bg-slate-50">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8 bg-white">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to begin?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Join thousands of successful graduates who've transformed their careers with drone technology
            </p>
            <Link href="/quiz" legacyBehavior>
              <a>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl font-semibold"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;