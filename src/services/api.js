import axios from 'axios';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ymrtlcyafzuotngltgcb.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc';

const api = axios.create({
  baseURL: `${SUPABASE_URL}/functions/v1`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
  },
});

export const industryRequirements = {
  "Construction": {
    title: "Construction & Infrastructure Drone Services",
    earningPotential: "$160-$250/hour",
    marketSize: "$1.8 billion by 2025",
    description: "High-demand opportunities for site surveying, progress monitoring, and safety inspections in the construction industry.",
    
    licenses: [
      "CAA A2 CofC (Certificate of Competency) - Essential for commercial operations",
      "GVC (General VLOS Certificate) for beyond visual line of sight operations", 
      "Construction Industry Scheme (CIS) registration may be required",
      "Public Liability Insurance minimum £2 million coverage",
      "Professional Indemnity Insurance recommended"
    ],
    
    training: [
      "CAA A2 CofC Ground School (In-class preferred) - 5 days intensive",
      "Practical Flight Training (In-class only) - 3 days hands-on",
      "Construction Site Safety Course (In-class/Online) - 2 days",
      "Surveying & Mapping Fundamentals (In-class preferred) - 3 days",
      "Health & Safety in Construction (Online available) - 1 day",
      "Thermal Imaging Certification (In-class preferred) - 2 days"
    ],
    
    services: [
      { name: "Site Surveying & Mapping", rate: "$200-$300/hour", description: "Topographical surveys and volumetric calculations" },
      { name: "Progress Monitoring", rate: "$150-$250/hour", description: "Regular aerial documentation of construction progress" },
      { name: "Safety Inspections", rate: "$180-$280/hour", description: "High-altitude inspections of cranes and scaffolding" },
      { name: "Thermal Building Inspections", rate: "$200-$350/hour", description: "Energy efficiency and building defect identification" }
    ],
    
    compliance: [
      "CAA regulations for commercial drone operations",
      "Construction Design and Management (CDM) regulations 2015",
      "Health and Safety at Work Act 1974 compliance",
      "Data protection regulations for site imagery"
    ],

    marketInsights: [
      "£150 billion annual construction market in UK",
      "Growing adoption of digital construction technologies",
      "Government infrastructure investment programs",
      "Increasing focus on safety and efficiency"
    ]
  },

  "Asset Inspection": {
    title: "Infrastructure & Asset Inspection Services",
    earningPotential: "$200-$400/hour",
    marketSize: "$2.3 billion by 2025",
    description: "High-value inspections of critical infrastructure including bridges, power lines, wind turbines, and industrial facilities.",
    
    licenses: [
      "CAA A2 CofC with additional endorsements for specific operations",
      "Restricted airspace permissions for infrastructure sites",
      "Industry-specific certifications (e.g., wind turbine inspection)",
      "Professional Indemnity Insurance minimum £5 million"
    ],
    
    training: [
      "Advanced CAA Certification (In-class preferred) - 7 days",
      "Thermal Imaging Specialist Course (In-class only) - 4 days",
      "Infrastructure Inspection Techniques (In-class preferred) - 5 days",
      "Structural Engineering Basics (In-class/Online) - 3 days",
      "Risk Assessment & Safety Management (Online available) - 2 days",
      "Power Line Safety Training (In-class only) - 2 days"
    ],
    
    services: [
      { name: "Bridge & Structure Inspection", rate: "$300-$450/hour", description: "Detailed structural assessments and defect identification" },
      { name: "Power Line & Utility Inspection", rate: "$250-$400/hour", description: "Electrical infrastructure monitoring and maintenance" },
      { name: "Wind Turbine Inspection", rate: "$350-$500/hour", description: "Blade damage assessment and maintenance scheduling" },
      { name: "Industrial Facility Inspection", rate: "$280-$420/hour", description: "Storage tanks, pipelines, and processing equipment" }
    ],
    
    compliance: [
      "CAA commercial operations regulations",
      "Industry-specific safety standards",
      "Environmental protection requirements",
      "Utility company access and safety protocols"
    ],

    marketInsights: [
      "£50 billion annual infrastructure maintenance market",
      "Aging infrastructure requiring increased monitoring",
      "Predictive maintenance adoption growing rapidly",
      "Safety regulations driving demand for remote inspections"
    ]
  },

  "Agriculture": {
    title: "Precision Agriculture & Crop Management",
    earningPotential: "$120-$200/hour",
    marketSize: "$8.4 billion by 2025",
    description: "Agricultural drone services supporting modern farming with crop monitoring, precision spraying, and yield optimization.",
    
    licenses: [
      "CAA A2 CofC for agricultural operations",
      "Pesticide Application License (if offering spraying services)",
      "BASIS qualification for crop advisory services",
      "Rural land access permissions and agreements"
    ],
    
    training: [
      "Agricultural Drone Operations (In-class preferred) - 4 days",
      "Crop Science & Agronomy (In-class/Online) - 5 days",
      "Precision Agriculture Technology (In-class preferred) - 3 days",
      "Pesticide Application Training (In-class only) - 3 days",
      "Soil Science Fundamentals (Online available) - 2 days",
      "Farm Business Management (In-class/Online) - 2 days"
    ],
    
    services: [
      { name: "Crop Health Monitoring", rate: "$8-$15/acre", description: "NDVI analysis, disease detection, and growth assessment" },
      { name: "Precision Spraying Services", rate: "$15-$25/acre", description: "Targeted application of pesticides and nutrients" },
      { name: "Yield Estimation & Mapping", rate: "$120-$200/hour", description: "Pre-harvest yield predictions and planning" },
      { name: "Livestock Monitoring", rate: "$150-$250/hour", description: "Pasture management and animal welfare" }
    ],
    
    compliance: [
      "CAA regulations for agricultural drone operations",
      "Pesticide application regulations and record-keeping",
      "Environmental protection requirements",
      "Data privacy for farm operations"
    ],

    marketInsights: [
      "£25 billion annual UK agriculture market",
      "Growing demand for sustainable farming practices",
      "Labor shortage driving automation adoption",
      "Government subsidies for precision agriculture"
    ]
  },

  "Environmental Mapping": {
    title: "Environmental Monitoring & Conservation",
    earningPotential: "$150-$250/hour", 
    marketSize: "$1.2 billion by 2025",
    description: "Environmental drone services supporting conservation, research, and regulatory compliance across diverse ecosystems.",
    
    licenses: [
      "CAA A2 CofC with environmental operation endorsements",
      "Research permits for protected areas",
      "Environmental consultant certification (desirable)",
      "Scientific research collaboration agreements"
    ],
    
    training: [
      "Environmental Science & Ecology (In-class preferred) - 6 days",
      "GIS & Remote Sensing (In-class/Online) - 5 days",
      "Wildlife Survey Techniques (In-class only) - 4 days",
      "Environmental Law & Regulations (Online available) - 2 days",
      "Conservation Biology (In-class/Online) - 3 days",
      "Scientific Data Analysis (In-class preferred) - 3 days"
    ],
    
    services: [
      { name: "Wildlife Population Surveys", rate: "$180-$280/hour", description: "Species counting, migration tracking, habitat assessment" },
      { name: "Habitat Mapping & Analysis", rate: "$150-$230/hour", description: "Ecosystem health evaluation and conservation planning" },
      { name: "Environmental Impact Assessment", rate: "$200-$300/hour", description: "Development impact studies and mitigation planning" },
      { name: "Water Quality Monitoring", rate: "$160-$250/hour", description: "Aquatic ecosystem health and pollution detection" }
    ],
    
    compliance: [
      "CAA environmental operation regulations",
      "Wildlife protection laws and permits",
      "Research ethics and data sharing protocols",
      "Environmental impact assessment requirements"
    ],

    marketInsights: [
      "Growing environmental compliance requirements",
      "Increased funding for conservation projects",
      "Climate change research driving demand",
      "Corporate sustainability initiatives expanding"
    ]
  },

  "Mining and Quarry": {
    title: "Mining & Quarry Operations Support",
    earningPotential: "$180-$300/hour",
    marketSize: "$900 million by 2025", 
    description: "Specialized drone services for mining operations including surveying, safety monitoring, and resource management.",
    
    licenses: [
      "CAA A2 CofC with mining operation endorsements",
      "Mining site access certifications and safety training",
      "Explosives area operation permissions",
      "Specialized insurance for hazardous environments"
    ],
    
    training: [
      "Mining Operations & Safety (In-class only) - 6 days",
      "Industrial Surveying Techniques (In-class preferred) - 4 days",
      "Hazardous Environment Operations (In-class only) - 3 days",
      "Geology & Resource Assessment (In-class/Online) - 4 days",
      "Occupational Health & Safety (Online available) - 2 days",
      "Heavy Industry Regulations (In-class/Online) - 2 days"
    ],
    
    services: [
      { name: "Stockpile Volume Measurement", rate: "$200-$350/hour", description: "Accurate inventory management and resource tracking" },
      { name: "Mine Site Surveying", rate: "$250-$400/hour", description: "Topographical mapping and progress monitoring" },
      { name: "Equipment & Safety Inspection", rate: "$180-$280/hour", description: "Machinery monitoring and hazard identification" },
      { name: "Environmental Compliance Monitoring", rate: "$220-$320/hour", description: "Dust, water quality, and restoration monitoring" }
    ],
    
    compliance: [
      "CAA mining operation regulations",
      "Mining safety regulations and protocols",
      "Environmental monitoring requirements",
      "Explosives area operation restrictions"
    ],

    marketInsights: [
      "£3 billion annual UK mining and quarrying market",
      "Increasing automation and digitization",
      "Strict safety regulations driving remote monitoring",
      "Environmental restoration requirements growing"
    ]
  },

  "Film and TV": {
    title: "Aerial Cinematography & Media Production",
    earningPotential: "$100-$300/hour",
    marketSize: "$2.8 billion by 2025",
    description: "Creative drone services for film, television, advertising, and media production with emphasis on artistic and technical excellence.",
    
    licenses: [
      "CAA A2 CofC with specific permissions for populated areas",
      "Permission for Commercial Operation (PfCO) for complex shoots",
      "Film location permits and insurance requirements",
      "Equipment operator certifications for advanced systems"
    ],
    
    training: [
      "Cinematography & Visual Storytelling (In-class preferred) - 5 days",
      "Camera Operation & Settings (In-class only) - 3 days",
      "Film Production Workflows (In-class/Online) - 4 days",
      "Post-Production & Editing (In-class preferred) - 4 days",
      "Creative Direction & Composition (In-class only) - 3 days",
      "Client Relations & Project Management (Online available) - 2 days"
    ],
    
    services: [
      { name: "Commercial & Advertising Shoots", rate: "$150-$400/hour", description: "High-end commercial productions and marketing content" },
      { name: "Film & Television Production", rate: "$200-$500/day", description: "Narrative film support and documentary production" },
      { name: "Event & Wedding Coverage", rate: "$100-$250/hour", description: "Special event aerial cinematography and photography" },
      { name: "Real Estate & Property Marketing", rate: "$80-$180/hour", description: "Property showcase and marketing material production" }
    ],
    
    compliance: [
      "CAA regulations for urban and populated area operations",
      "Film location permits and local authority approvals",
      "Privacy and data protection requirements",
      "Insurance requirements for high-value productions"
    ],

    marketInsights: [
      "£7.9 billion annual UK film and TV production market",
      "Streaming platforms driving content demand",
      "Growing corporate video production market",
      "Virtual events creating new opportunities"
    ]
  }
};

export const apiService = {
  createStatusCheck: (clientName) => 
    api.post('/status', { client_name: clientName }),
  
  getStatusChecks: () => 
    api.get('/status'),
  
  downloadPDF: (data) => 
    api.post('/download-pdf', {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      planTitle: data.planTitle || 'Drone Career Plan',
      quizData: data.quizData || {},
      planData: data.planData || {}
    }),
  
  downloadCasaPDF: (data) => 
    api.post('/casa-pdf', {
      name: data.name,
      email: data.email
    }),

  downloadIndustryPDF: (data) => 
    api.post('/download-pdf', {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      planTitle: `${data.industry} Industry Career Guide`,
      
      industry: data.industry,
      experience: data.experience,
      interests: data.interests,
      background: data.background,
      preferredTraining: data.preferredTraining,
      businessGoals: data.businessGoals,
      timeline: data.timeline,
      industryData: data.industryData,
      
      planData: {
        title: `${data.industry} Drone Career Pathway`,
        description: data.industryData?.description || `Comprehensive guide for starting your drone career in ${data.industry.toLowerCase()}.`,
        marketOpportunities: data.industryData?.marketInsights || [
          `${data.industryData?.earningPotential || 'High'} earning potential`,
          `${data.industryData?.marketSize || 'Growing'} market size`,
          "Multiple service opportunities available"
        ],
        whyNow: [
          "Industry is in rapid growth phase with increasing opportunities",
          "Early movers gain competitive advantage in the market", 
          "Government regulations are stabilizing, creating clearer pathways"
        ],
        licenses: data.industryData?.licenses || [],
        training: data.industryData?.training || [],
        services: data.industryData?.services || [],
        compliance: data.industryData?.compliance || []
      },
      
      quizData: {}
    })
};

export const getIndustryData = (industryName) => {
  return industryRequirements[industryName] || null;
};

export const getAllIndustries = () => {
  return Object.keys(industryRequirements);
};

export default api;