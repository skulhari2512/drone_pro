// components/pages/IndustryUses.jsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import industryData from '../../data/industry-uses.json';

const IndustryUses = () => {
  const industryImages = {
    "Construction": "/images/construction-drone-inspection-surveying-australia.jpg",
    "Asset Inspection": "/images/civil-engineering-drone-surveying-training.jpg",
    "Agriculture": "/images/precision-agriculture-drone-course-australia.jpg",
    "Environmental Mapping": "/images/environmental-mapping-drone-services-australia.jpg",
    "Mining and Quarry": "/images/mining-drone-operations-training-course.jpg",
    "Film and TV": "/images/aerial-photography-drone-training-australia.jpg"
  };

  const earningPotentials = {
    "Construction": "$160-$250/hour",
    "Asset Inspection": "$200-$400/hour",
    "Agriculture": "$120-$200/hour",
    "Environmental Mapping": "$150-$250/hour",
    "Mining and Quarry": "$180-$300/hour",
    "Film and TV": "$100-$300/hour"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              {industryData.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {industryData.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industryData.sections.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={industryImages[industry.heading] || "/images/dimg18.jpg"}
                      alt={industry.heading}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-slate-900">
                        {earningPotentials[industry.heading] || "$150-$300/hour"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                      {industry.heading}
                    </h2>

                    <div className="space-y-4 mb-6">
                      {industry.body.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-lg text-slate-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-slate-600">Earning Range</span>
                        </div>
                        <p className="font-semibold text-slate-900">
                          {earningPotentials[industry.heading] || "$150-$300/hour"}
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-slate-600">Growth Rate</span>
                        </div>
                        <p className="font-semibold text-slate-900">High Demand</p>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-slate-900">Key Applications:</h3>
                      {industry.bullets.map((bullet, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Industry-Specific Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about drone applications in different industries
            </p>
          </motion.div>

          <div className="space-y-6">
            {industryData.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
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
              Find Your Perfect Drone Career Match
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take our free career assessment to discover which industry suits your skills and interests
            </p>
            <Button
              href="/quiz"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Take Career Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustryUses;