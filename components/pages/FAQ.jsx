// components/pages/FAQ.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import howItWorksData from '../../data/how-it-works.json';
import industryData from '../../data/industry-uses.json';
import trainingData from '../../data/training.json';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine all FAQ data
  const allFAQs = [
    ...howItWorksData.faq.map(faq => ({ ...faq, category: 'How It Works' })),
    ...industryData.faq.map(faq => ({ ...faq, category: 'Industries' })),
    ...trainingData.faq.map(faq => ({ ...faq, category: 'Training' })),
    {
      q: "How long does it take to become a certified drone pilot?",
      a: "The timeline depends on your chosen certification path. RPA accreditation can be completed in a few hours online, RePL certification typically takes 5 days of intensive training, and ReOC business certification requires 2-3 weeks including application processing.",
      category: "General"
    },
    {
      q: "What equipment do I need to get started?",
      a: "For training, most programs provide equipment. For professional work, you'll need a suitable drone (starting from $1,200 for DJI Mini 3 Pro), spare batteries, memory cards, and industry-specific accessories. Our personalized plan includes detailed equipment recommendations.",
      category: "Equipment"
    },
    {
      q: "Is there ongoing support after certification?",
      a: "Yes! We provide ongoing career support including industry updates, networking opportunities, business development guidance, and access to our exclusive pilot community with job opportunities and mentorship.",
      category: "Support"
    },
    {
      q: "Can I start earning immediately after certification?",
      a: "Yes, once you're certified and registered with CASA, you can begin commercial operations immediately. Many new pilots start earning within weeks of certification, with entry-level rates of $75-$100 per hour.",
      category: "Earning"
    },
    {
      q: "What insurance do I need as a drone pilot?",
      a: "You'll need public liability insurance (minimum $20 million coverage recommended) and equipment insurance. Many pilots also get professional indemnity insurance. We can connect you with specialized drone insurance providers.",
      category: "Legal"
    },
    {
      q: "Are there ongoing costs after certification?",
      a: "Main ongoing costs include insurance ($800-2000/year), equipment maintenance, software subscriptions (for specialized work), and optional continuing education. CASA certification doesn't expire, so no renewal fees for RePL.",
      category: "Business"
    }
  ];

  const categories = ['All', 'General', 'How It Works', 'Industries', 'Training', 'Equipment', 'Support', 'Earning', 'Legal', 'Business'];

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = allFAQs.filter(faq => {
    const matchesSearch = searchQuery === '' ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <HelpCircle className="w-16 h-16 mx-auto text-white/80 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to know about starting your drone career
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-lg border-slate-200 focus:border-blue-500"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {searchQuery && (
            <p className="mt-4 text-sm text-slate-600">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-slate-600 mb-4">No questions found matching your search.</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => toggleExpanded(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {faq.q}
                              </h3>
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full mb-3">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                          {expandedItems.has(index) ? (
                            <ChevronUp className="w-5 h-5 text-slate-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-600" />
                          )}
                        </button>
                      </div>

                      {expandedItems.has(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pl-5 border-l-2 border-blue-100"
                        >
                          <p className="text-slate-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our expert team is here to help you with personalized guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                href="/quiz"
                variant="outline"
                className="px-6 py-3 rounded-full"
              >
                Take Career Quiz
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;