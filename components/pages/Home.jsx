// components/pages/Home.jsx - OPTIMIZED FOR PERFORMANCE & SEO
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const heroVideo = '/videos/hero-video.mp4';

  const features = [
    {
      title: "Professional Assessment",
      description: "Get matched with your ideal drone career path through our comprehensive assessment",
      image: "/images/professional-drone-career-assessment-australia.jpg"
    },
    {
      title: "Industry Specialisation", 
      description: "Specialise in high-demand sectors like construction, agriculture, and asset inspection",
      image: "/images/drone-industry-specialization-training-australia.jpg"
    },
    {
      title: "Certification Pathways",
      description: "Clear progression pathway from RPA accreditation to RePL and ReOC business certification", 
      image: "/images/drone-certification-pathways-australia.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - OPTIMIZED */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-label="Drone flying hero video"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-[1]" />

        <div className="relative z-[2] w-full max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // FASTER: 0.8s → 0.5s
            className="space-y-6"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} // FASTER & REDUCED DELAY
            >
              Stop dreaming, Start earning
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-normal text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // FASTER & REDUCED DELAY
            >
              While others wait, you fly. Get your licence now and lead in Australia's next wave of drone innovation
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }} // FASTER & REDUCED DELAY
            >
              <Button
                href="/quiz"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Take Career Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                href="/how-it-works"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - OPTIMIZED */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }} // REDUCED: y:20 → y:15
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // FASTER: 0.6s → 0.4s
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
                initial={{ opacity: 0, y: 15 }} // REDUCED: y:20 → y:15
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, // FASTER: 0.6s → 0.4s
                  delay: index * 0.1 // REDUCED: 0.2s → 0.1s
                }}
                viewport={{ once: true, margin: "-50px" }} // TRIGGER EARLIER
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-500 border-0 rounded-3xl group-hover:-translate-y-1 shadow-md bg-white">
                  <div className="aspect-video relative overflow-hidden bg-slate-50">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} - Drone Career Pro training feature`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      loading={index === 0 ? "eager" : "lazy"} // FIRST IMAGE EAGER
                      quality={80}
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

      {/* CTA Section - OPTIMIZED */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }} // REDUCED: y:20 → y:15
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // FASTER: 0.6s → 0.4s
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to begin?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Join thousands of successful graduates who've transformed their careers with drone technology
            </p>
            <Button
              href="/quiz"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl font-semibold"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;