// Mock data for quiz questions and answers
export const mockQuizQuestions = [
  {
    id: 1,
    question: "What attracted you to the drone industry?",
    options: [
      { id: 'a', text: "I'm excited about the future of technology and innovation", value: 'technology' },
      { id: 'b', text: 'I see strong career and business opportunities in this space', value: 'career' },
      { id: 'c', text: 'I want to use drones in photography, film, or creative storytelling', value: 'creative' },
      { id: 'd', text: 'I care about the environment and want to support sustainability (e.g. precision ag, land care)', value: 'environmental' },
      { id: 'e', text: "Other - my path is unique, and I'll explain it later", value: 'other' }
    ]
  },
  {
    id: 2,
    question: "What is your main goal for drone training?",
    options: [
      { id: 'a', text: 'Career change into the drone industry', value: 'career_change' },
      { id: 'b', text: 'Add drones to an existing business/service', value: 'business_expansion' },
      { id: 'c', text: 'Personal interest/hobby', value: 'personal' },
      { id: 'd', text: 'Not sure yet', value: 'unsure' }
    ]
  },
  {
    id: 3,
    question: "Which industries are you most interested in applying drones to?",
    options: [
      { id: 'a', text: 'Agriculture & farming', value: 'agriculture' },
      { id: 'b', text: 'Construction & infrastructure', value: 'construction' },
      { id: 'c', text: 'Mining & resources', value: 'mining' },
      { id: 'd', text: 'Surveying & mapping', value: 'surveying' },
      { id: 'e', text: 'Public safety & emergency services', value: 'safety' },
      { id: 'f', text: 'Media & filmmaking', value: 'media' },
      { id: 'g', text: 'Delivery & logistics', value: 'delivery' },
      { id: 'h', text: "I'm not sure yet", value: 'unsure' }
    ]
  },
  {
    id: 4,
    question: "What is your current level of drone experience?",
    options: [
      { id: 'a', text: 'Beginner (never flown)', value: 'beginner' },
      { id: 'b', text: 'Hobbyist (recreational flights)', value: 'hobbyist' },
      { id: 'c', text: 'Experienced (self-taught, no licence)', value: 'experienced' },
      { id: 'd', text: 'Licensed pilot', value: 'licensed' }
    ]
  },
  {
    id: 5,
    question: "How confident are you with digital/technical tools?",
    options: [
      { id: 'a', text: 'Not confident (need support)', value: 'low_confidence' },
      { id: 'b', text: 'Somewhat confident (comfortable with basics)', value: 'medium_confidence' },
      { id: 'c', text: 'Very confident (pick up tech easily)', value: 'high_confidence' }
    ]
  }
];

// Course data
export const droneCourseCatalog = {

  repl_online: {
    name: "Remote Pilot Licence",
    price: 3000,
    category: "Professional Certification",
    weight: "Under 25kg",
    description: "Comprehensive training for commercial drone operations with flexible scheduling.",
    benefits: [
      "Study at your own pace with expert instructors",
      "Complete theory modules online with practical assessments",
      "Access to industry-standard flight planning software",
      "Lifetime certification with no renewal required"
    ],
    image: "https://images.unsplash.com/photo-1617427326325-69301e746cc2?w=800&q=80"
  },
  repl_classroom: {
    name: "Remote Pilot Licence (Classroom)",
    price: 3000,
    category: "Professional Certification",
    weight: "Under 25kg",
    description: "Intensive classroom-based training with hands-on practical experience and expert mentorship.",
    benefits: [
      "Face-to-face instruction with industry professionals",
      "Extensive hands-on flying experience",
      "Immediate feedback and personalized guidance",
      "Networking opportunities with other drone professionals"
    ],
    image: "https://images.unsplash.com/photo-1666315915304-6561a573f61f?w=800&q=80"
  },
  multi_rotor_7_25: {
    name: "Multi-Rotor 7-25kg Operations",
    price: 600,
    category: "Advanced Operations",
    weight: "7-25kg",
    description: "Specialized training for heavier drone operations requiring enhanced safety protocols.",
    benefits: [
      "Master operations of professional-grade equipment",
      "Advanced flight planning for complex missions",
      "Safety protocols for heavier aircraft operations",
      "Access to higher-paying commercial opportunities"
    ],
    image: "https://images.unsplash.com/photo-1666315915304-6561a573f61f?w=800&q=80"
  },
  aroc: {
    name: "AROC (Aircraft Radio Operator Certificate)",
    price: 400,
    category: "Supporting Certification",
    weight: "All Categories",
    description: "Essential radio communication certification for professional drone operations.",
    benefits: [
      "Legal requirement for certain commercial operations",
      "Enhanced communication capabilities with air traffic control",
      "Professional credibility and compliance",
      "Opens doors to restricted airspace operations"
    ],
    image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=800&q=80"
  }
};

// Industry content database for detailed PDF generation
export const industryContentDatabase = {
  agriculture: {
    title: 'AGRICULTURE & FARMING',
    emoji: '🌾',
    description: "In the fields of tomorrow, farmers wield drones like digital farmhands. High-tech sensors reveal plant stress before it's visible to the naked eye, precision sprayers deliver nutrients exactly where they're needed, and autonomous seeders blanket fields with cover crops in minutes. Livestock herding and pest control become smarter, safer and more humane. By tapping into these tools, you'll help farmers grow healthier crops using fewer resources—and you'll be in high demand as agriculture continues its digital transformation.",
    opportunities: [
      { task: "Monitor plant health with multispectral imaging", benefit: "Spot disease and nutrient deficiencies early to boost yields" },
      { task: "Fly precision spraying missions", benefit: "Reduce chemical use while ensuring crops get exactly what they need" },
      { task: "Map soil and moisture", benefit: "Make irrigation smarter and more sustainable" },
      { task: "Control pests and weeds", benefit: "Target interventions for maximum impact and minimal environmental footprint" },
      { task: "Assist with livestock management", benefit: "Keep animals safe and farmers stress-free" }
    ],
    callToAction: "Ready to cultivate your place in smart farming? Let's get your training airborne."
  },
  construction: {
    title: 'CONSTRUCTION & INFRASTRUCTURE',
    emoji: '🏗️',
    description: "From skyscraper foundations to massive infrastructure projects, drones turn construction sites into dynamic digital twins. What used to require days of surveying and an army of engineers can now be done in hours with a single drone. Project managers track progress in real time, calculate earthwork volumes instantly, inspect bridges and rooftops without scaffolding, and capture eye-catching visuals for investors. If you thrive on building things and solving problems, this is where technology meets the hard hat.",
    opportunities: [
      { task: "Create detailed site maps and 3D models", benefit: "Get up-to-the-minute data that keeps projects on schedule" },
      { task: "Monitor progress and safety", benefit: "Spot issues before they become expensive headaches" },
      { task: "Perform volumetric analysis", benefit: "Accurately measure stockpiles and cut/fill operations" },
      { task: "Inspect hard-to-reach structures", benefit: "Ensure integrity without risking workers" },
      { task: "Deliver stunning visuals", benefit: "Showcase projects and win new business" }
    ],
    callToAction: "Want to transform construction from the sky? Join us and build your future."
  },
  mining: {
    title: 'MINING & RESOURCES',
    emoji: '⛏️',
    description: "Mining is tough, remote and risky—but drones make it smarter and safer. Picture scanning an entire open-pit mine with high-resolution cameras and LiDAR to create 3D models for engineers. Imagine using hyperspectral imaging to reveal hidden mineral deposits and sending agile RPAS (remotely piloted aircraft systems) down tunnels to map underground passages. With drones, stockpile volumes are tallied in minutes and emergency response becomes faster and safer. For those drawn to adventure with a scientific twist, the mining sector offers a rewarding path.",
    opportunities: [
      { task: "Build 3D models of pits and quarries", benefit: "Provide data that guides safe and efficient extraction" },
      { task: "Conduct spectral surveys", benefit: "Discover new resources and monitor environmental impact" },
      { task: "Measure stockpiles", benefit: "Manage inventory accurately without climbing mountains of material" },
      { task: "Map underground tunnels", benefit: "Explore and survey without exposing people to danger" },
      { task: "Inspect pipelines and conveyors", benefit: "Prevent leaks and downtime with proactive maintenance" }
    ],
    callToAction: "Ready to make mining safer and more precise? Our courses will prepare you to unearth success."
  },
  surveying: {
    title: 'SURVEYING & MAPPING',
    emoji: '🗺️',
    description: "Every successful project, from protecting rainforests to designing smart cities, starts with accurate maps. Drones excel at capturing geospatial data quickly and affordably. Environmental scientists map wildlife habitats and monitor forests, hydrologists examine watersheds and erosion, urban planners design infrastructure with centimetre-level accuracy, and disaster teams create real-time maps that save lives. If your heart is in exploring and documenting the world, drone mapping is a gateway to countless sectors.",
    opportunities: [
      { task: "Create land cover and environmental maps", benefit: "Help manage natural resources and protect ecosystems" },
      { task: "Survey hydrology and geology", benefit: "Support sustainable water use and study earth processes" },
      { task: "Assess agricultural and forest health", benefit: "Drive data-driven decisions in food production and conservation" },
      { task: "Map cities and infrastructure", benefit: "Influence the design of tomorrow's smart communities" },
      { task: "Provide disaster response mapping", benefit: "Equip emergency teams with the information they need to act quickly" }
    ],
    callToAction: "Want to turn data into decisions? Enrol now to chart a new course in mapping."
  },
  safety: {
    title: 'PUBLIC SAFETY & EMERGENCY SERVICES',
    emoji: '🚨',
    description: "When seconds count, drones bring eyes and aid where humans can't go. First responders use them to locate missing people with thermal cameras, deliver flotation devices to swimmers in distress, map burning buildings, and transport medical supplies to inaccessible sites. They inspect hazardous material spills from a safe distance and document accident scenes for reconstruction. By training as a public safety pilot, you'll be on the front lines—protecting communities and saving lives.",
    opportunities: [
      { task: "Conduct search & rescue operations", benefit: "Find lost or injured individuals faster and safer" },
      { task: "Provide disaster assessment", benefit: "Deliver up-to-date maps for wildfire, flood and storm response" },
      { task: "Fly medical & supply missions", benefit: "Get critical supplies to those in need quickly" },
      { task: "Inspect hazardous sites", benefit: "Keep responders safe while maintaining situational awareness" },
      { task: "Support crowd safety and lifesaving", benefit: "Monitor events and deploy life-saving gear over water" }
    ],
    callToAction: "If helping others drives you, our training will equip you to be a hero from above."
  },
  media: {
    title: 'MEDIA & FILMMAKING',
    emoji: '🎬',
    description: "Drones have democratised aerial cinematography. Gone are the days when only blockbusters could afford helicopter shots. Now, real estate agents, tourism boards and indie filmmakers capture sweeping vistas and dynamic event footage with drones. Whether you're shooting a wedding, a nature documentary or a music video, drones offer creative freedom, safety and cost savings. Learn to fly like a cinematographer and watch your storytelling reach new heights.",
    opportunities: [
      { task: "Capture cinematic aerial footage", benefit: "Bring breathtaking perspectives to film and TV productions" },
      { task: "Showcase real estate and architecture", benefit: "Highlight properties with dynamic fly-throughs and panoramas" },
      { task: "Cover events and sports", benefit: "Deliver dramatic live feeds and action replays from above" },
      { task: "Tell environmental and wildlife stories", benefit: "Film nature with minimal disturbance to animals" },
      { task: "Produce marketing and tourism content", benefit: "Create engaging visuals that drive engagement and bookings" }
    ],
    callToAction: "Ready to elevate your creative vision? Let us teach you to turn the sky into your studio."
  },
  delivery: {
    title: 'DELIVERY & LOGISTICS',
    emoji: '📦',
    description: "The future of shopping and healthcare is airborne. Drones are already zipping parcels, groceries, medicines and urgent care items to customers in under 30 minutes. Logistics giants and retailers are investing heavily in drone delivery fleets to reach remote areas and cut down on emissions. By mastering drone delivery operations, you'll be on the cutting edge of e-commerce and supply chain innovation.",
    opportunities: [
      { task: "Operate last-mile delivery drones", benefit: "Delight customers with fast, contactless delivery" },
      { task: "Transport medical and emergency supplies", benefit: "Ensure life-saving medicines arrive on time, every time" },
      { task: "Support e-commerce giants", benefit: "Work with leading retailers as they expand drone fleets" },
      { task: "Reduce carbon and costs", benefit: "Help companies shrink their environmental footprint" },
      { task: "Reach remote communities", benefit: "Connect underserved areas with essential goods" }
    ],
    callToAction: "Excited about pioneering new logistics models? Join our course and become a delivery innovator."
  }
};

// Session storage functions
export const saveQuizProgress = (answers) => {
  sessionStorage.setItem('droneQuizAnswers', JSON.stringify(answers));
};

export const getQuizProgress = () => {
  const saved = sessionStorage.getItem('droneQuizAnswers');
  console.log('saved :>> ', saved);
  return saved ? JSON.parse(saved) : {};
};

export const clearQuizProgress = () => {
  sessionStorage.removeItem('droneQuizAnswers');
};

// Enhanced plan generation function with industry-specific content
export const generatePersonalizedPlan = (answers) => {
  const attraction = answers[1] || '';
  const goal = answers[2] || '';
  const industry = answers[3] || '';
  const experience = answers[4] || '';

  let careerTitle = "Professional Drone Specialist";
  let focusIndustry = "Multi-Industry";
  let recommendedCourses = [];
  let industryApplications = [];
  let whatToDo = [];
  let marketData = {};

  if (attraction === 'creative' || industry === 'media') {
    careerTitle = "Media & Filmmaking Specialist";
    focusIndustry = "Media & Filmmaking";
    recommendedCourses = ['repl_online', 'aroc'];
    
    industryApplications = [
      "Film and TV commercial production",
      "Corporate video and promotional content",
      "Event coverage (festivals, corporate events, weddings)",
      "Real estate marketing (residential & commercial)",
      "Small business promotional content for websites and social media",
      "Aerial cinematography for blockbuster films",
      "Documentary filmmaking with unique aerial perspectives"
    ];
    
    whatToDo = [
      "Build a strong portfolio showcasing diverse aerial shots and creative angles",
      "Develop proficiency with professional cameras and gimbals (DJI Inspire 2, etc.)",
      "Learn video editing and post-production skills",
      "Network with local production companies, real estate agents, and event planners",
      "Obtain AROC certification for enhanced communication capabilities",
      "Practice advanced flight techniques for smooth cinematic movements",
      "Consider specializing in specific niches like weddings or real estate"
    ];
    
    marketData = {
      hourlyRate: "$150-$400",
      demandLevel: "High",
      keyClients: "Production companies, real estate agents, event planners"
    };

  } else if (industry === 'agriculture' || attraction === 'environmental') {
    careerTitle = "Precision Agriculture Specialist";
    focusIndustry = "Agriculture & Farming";
    recommendedCourses = ['repl_classroom', 'multi_rotor_7_25'];
    
    industryApplications = [
      "Crop health monitoring and NDVI mapping",
      "Precision spraying of chemicals, granules, and beneficial insects",
      "Field mapping and surveying for precision farming",
      "Plant health monitoring and disease detection",
      "Variable rate application planning",
      "Irrigation management and optimization",
      "Livestock monitoring and head counting",
      "Weed identification and targeted treatment"
    ];
    
    whatToDo = [
      "Master DJI Terra app for comprehensive agricultural analysis",
      "Learn to interpret NDVI maps and multispectral data",
      "Obtain spray drone certification (DJI Agras T40/T50 training)",
      "Build relationships with local farmers, agronomists, and agricultural consultants",
      "Understand different crop types and their specific monitoring needs",
      "Learn about chemical application rates and agricultural regulations",
      "Consider partnering with established agricultural service providers",
      "Develop expertise in soil analysis and crop health assessment"
    ];
    
    marketData = {
      hourlyRate: "$175-$250",
      demandLevel: "Very High",
      keyClients: "Farmers, agricultural consultants, crop advisors"
    };

  } else if (industry === 'construction') {
    careerTitle = "Construction & Infrastructure Specialist";
    focusIndustry = "Construction & Infrastructure";
    recommendedCourses = ['repl_classroom', 'multi_rotor_7_25', 'aroc'];
    
    industryApplications = [
      "Construction site progress monitoring and reporting",
      "3D modeling and photogrammetry for project tracking",
      "Safety inspections and site surveillance",
      "Volume calculations and material tracking",
      "Quality control and deviation detection",
      "Infrastructure inspection (bridges, towers, buildings)",
      "Project documentation and client reporting",
      "Site planning and logistics optimization"
    ];
    
    whatToDo = [
      "Learn 3D modeling software and photogrammetry techniques",
      "Develop expertise in construction project management workflows",
      "Build relationships with construction companies and project managers",
      "Understand building codes and safety regulations",
      "Master flight planning for consistent progress reporting",
      "Learn to create detailed site maps and elevation models",
      "Develop skills in data analysis and reporting",
      "Consider specializing in specific construction types (residential, commercial, infrastructure)"
    ];
    
    marketData = {
      hourlyRate: "$175-$285",
      demandLevel: "High",
      keyClients: "Construction companies, architects, project managers"
    };

  } else if (industry === 'mining') {
    careerTitle = "Mining & Resources Specialist";
    focusIndustry = "Mining & Resources";
    recommendedCourses = ['repl_classroom', 'multi_rotor_7_25', 'aroc'];
    
    industryApplications = [
      "Stockpile volume calculations and inventory management",
      "Pit surveying and progress monitoring",
      "Blast planning and optimization",
      "Site safety inspections and hazard identification",
      "Environmental compliance monitoring",
      "Quarry volume calculations and planning",
      "Landfill site surveying and airspace calculations",
      "Equipment tracking and site logistics"
    ];
    
    whatToDo = [
      "Develop expertise in surveying and volume calculation software",
      "Learn mining safety protocols and regulations",
      "Build relationships with mining companies and contractors",
      "Master GPS and RTK positioning for accurate measurements",
      "Understand blast planning and mining operations",
      "Learn environmental monitoring and compliance requirements",
      "Develop skills in data analysis and reporting for mining operations",
      "Consider specializing in specific mining sectors (coal, gold, iron ore)"
    ];
    
    marketData = {
      hourlyRate: "$200-$300",
      demandLevel: "High",
      keyClients: "Mining companies, quarry operators, environmental consultants"
    };

  } else if (industry === 'surveying') {
    careerTitle = "Surveying & Mapping Specialist";
    focusIndustry = "Surveying & Mapping";
    recommendedCourses = ['repl_online', 'multi_rotor_7_25', 'aroc'];
    
    industryApplications = [
      "Precision mapping and photogrammetry",
      "Topographic surveying and elevation modeling",
      "Land boundary and property surveying",
      "Environmental area mapping",
      "Infrastructure and utility mapping",
      "Digital terrain model creation",
      "GIS data collection and analysis",
      "Cadastral surveying support"
    ];
    
    whatToDo = [
      "Master professional surveying software and GIS applications",
      "Obtain RTK positioning equipment for centimeter-level accuracy",
      "Build relationships with surveying firms and engineering companies",
      "Learn traditional surveying principles and regulations",
      "Develop expertise in data processing and CAD software",
      "Understand legal requirements for surveying and mapping",
      "Consider partnering with licensed surveyors",
      "Specialize in specific surveying applications (boundary, topographic, utility)"
    ];
    
    marketData = {
      hourlyRate: "$175-$285",
      demandLevel: "High",
      keyClients: "Surveying firms, engineering companies, government agencies"
    };

  } else if (industry === 'safety') {
    careerTitle = "Public Safety & Emergency Services Specialist";
    focusIndustry = "Public Safety & Emergency Services";
    recommendedCourses = ['repl_online', 'aroc'];
    
    industryApplications = [
      "Search and rescue operations",
      "Emergency response and disaster assessment",
      "Fire monitoring and suppression support",
      "Crowd monitoring and event security",
      "Traffic accident investigation",
      "Border patrol and surveillance",
      "Emergency evacuation planning",
      "First responder training and support"
    ];
    
    whatToDo = [
      "Develop expertise in thermal imaging and night vision operations",
      "Build relationships with emergency services and government agencies",
      "Learn emergency response protocols and procedures",
      "Obtain security clearances where necessary",
      "Master live streaming and real-time data transmission",
      "Develop skills in crisis communication and coordination",
      "Consider specialized training in hazardous environment operations",
      "Build expertise in multiple drone platforms for different mission types"
    ];
    
    marketData = {
      hourlyRate: "$200-$350",
      demandLevel: "Growing",
      keyClients: "Police departments, fire services, emergency management agencies"
    };

  } else if (industry === 'delivery') {
    careerTitle = "Delivery & Logistics Specialist";
    focusIndustry = "Delivery & Logistics";
    recommendedCourses = ['repl_online', 'aroc'];
    
    industryApplications = [
      "Last-mile delivery operations",
      "Medical supply and pharmaceutical delivery",
      "Remote area supply logistics",
      "Emergency supply delivery",
      "Warehouse inventory management",
      "Supply chain optimization",
      "Agricultural input delivery",
      "Research and development for delivery systems"
    ];
    
    whatToDo = [
      "Stay updated on evolving delivery drone regulations",
      "Develop expertise in autonomous flight systems",
      "Build relationships with logistics companies and retailers",
      "Learn supply chain management principles",
      "Master route planning and optimization software",
      "Understand payload management and weight distribution",
      "Consider specializing in specific delivery applications (medical, retail)",
      "Develop expertise in battery management and flight range optimization"
    ];
    
    marketData = {
      hourlyRate: "$150-$250",
      demandLevel: "Emerging",
      keyClients: "Logistics companies, retailers, medical facilities"
    };

  } else if (industry === 'unsure' || goal === 'unsure') {
    careerTitle = "Multi-Industry Drone Specialist";
    focusIndustry = "Diverse Applications";
    recommendedCourses = [ 'repl_online', 'aroc'];
    
    industryApplications = [
      "Explore multiple industry applications to find your niche",
      "Aerial photography and videography across various sectors",
      "Basic inspection and survey services",
      "Event documentation and promotional content",
      "Real estate and property marketing",
      "Small business promotional services",
      "Training and education support",
      "Consultation services for drone adoption"
    ];
    
    whatToDo = [
      "Complete foundational training to explore different applications",
      "Build a diverse portfolio showcasing various industry uses",
      "Network across multiple industries to identify opportunities",
      "Attend industry events and drone demonstrations",
      "Consider internships or partnerships with established operators",
      "Research local market demands and opportunities",
      "Start with simpler applications before specializing",
      "Keep learning about emerging applications and technologies"
    ];
    
    marketData = {
      hourlyRate: "$100-$200",
      demandLevel: "Moderate",
      keyClients: "Diverse - explore to find your fit"
    };

  } else if (goal === 'business_expansion') {
    careerTitle = "Drone Business Operator";
    focusIndustry = "Commercial Services";
    recommendedCourses = ['repl_online', 'aroc'];
    
    industryApplications = [
      "Multi-industry service provision",
      "Aerial photography and videography services",
      "Inspection and survey services",
      "Agricultural support services",
      "Real estate marketing services",
      "Event documentation services",
      "Training and consultation services",
      "Equipment rental and leasing"
    ];
    
    whatToDo = [
      "Develop a comprehensive business plan targeting multiple industries",
      "Build a diverse portfolio showcasing various applications",
      "Invest in multiple drone platforms for different service offerings",
      "Develop strong marketing and client acquisition strategies",
      "Build partnerships with complementary service providers",
      "Understand business regulations and insurance requirements",
      "Consider franchise or partnership opportunities",
      "Develop expertise in multiple specialized areas"
    ];
    
    marketData = {
      hourlyRate: "$150-$300",
      demandLevel: "High",
      keyClients: "Diverse across multiple industries"
    };
  }



  return {
    title: careerTitle,
    industry: focusIndustry,
    description: `Specialized pathway designed for your interests in ${focusIndustry.toLowerCase()} applications`,
    recommendedCourses: recommendedCourses,
    industryApplications: industryApplications,
    whatToDo: whatToDo,
    marketData: marketData,
    answers: answers,
    marketOpportunities: [
      "Australia's drone industry expects to increase GDP by $14.5 billion and create 5,500 full-time jobs every year for the next 20 years",
      "Global drone market expects to double to $40 billion by 2025",
      "High demand across construction, agriculture, mining, and media industries",
      "Experienced operators earn $175-$285 per hour with established client bases"
    ],
    whyNow: [
      "Industry is in rapid growth phase with increasing opportunities across all sectors",
      "Early movers gain competitive advantage in emerging markets",
      "Government regulations are stabilizing, creating clearer business pathways",
      "Technology is becoming more accessible with comprehensive training programs available"
    ]
  };
};

// Helper function to get industry content for PDF generation
export const getIndustryContent = (industryKey) => {
  return industryContentDatabase[industryKey] || null;
};

// Helper function to get multiple industry contents
export const getSelectedIndustryContents = (industryKeys) => {
  return industryKeys.map(key => industryContentDatabase[key]).filter(Boolean);
};

// Export industry keys for easy reference
export const INDUSTRY_KEYS = {
  AGRICULTURE: 'agriculture',
  CONSTRUCTION: 'construction', 
  MINING: 'mining',
  SURVEYING: 'surveying',
  SAFETY: 'safety',
  MEDIA: 'media',
  DELIVERY: 'delivery'
};

// Question label mapping for better PDF formatting
export const QUIZ_QUESTION_LABELS = {
  1: "Industry Attraction",
  2: "Training Goal",
  3: "Industry Interest", 
  4: "Experience Level",
  5: "Technical Confidence"
};