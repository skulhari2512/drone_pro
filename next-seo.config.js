// next-seo.config.js - COMPLETE SEO CONFIGURATION
export default {
  // Basic SEO
  titleTemplate: '%s | Drone Career Pro',
  defaultTitle: 'Drone Career Pro - Professional Drone Pilot Training & CASA Certification Australia',
  description: 'Start your drone pilot career with Drone Career Pro. Get CASA-certified RePL training, expert guidance, and industry connections. Australia\'s premier drone training platform.',
  
  // Canonical URL
  canonical: 'https://www.dronecareerpro.com',
  
  // Mobile optimization
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://www.dronecareerpro.com',
  },
  
  // Language
  languageAlternates: [
    {
      hrefLang: 'en-AU',
      href: 'https://www.dronecareerpro.com',
    },
  ],
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.dronecareerpro.com',
    siteName: 'Drone Career Pro',
    title: 'Drone Career Pro - Professional Drone Pilot Training Australia',
    description: 'Master commercial drone piloting with CASA-certified training. Expert instruction, comprehensive courses, and career support. Start your drone career today.',
    images: [
      {
        url: 'https://www.dronecareerpro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drone Career Pro - Professional Drone Training',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.dronecareerpro.com/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Drone Career Pro Logo',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    handle: '@dronecareepro',
    site: '@dronecareepro',
    cardType: 'summary_large_image',
  },
  
  // Facebook
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID', // Get this from Facebook Developer
  },
  
  // Additional Meta Tags
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'keywords',
      content: 'drone training, drone pilot, CASA certification, RePL licence, commercial drone, drone career, drone course, UAV training, Australia, Perth',
    },
    {
      name: 'author',
      content: 'Drone Career Pro',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'bingbot',
      content: 'index, follow',
    },
    {
      name: 'geo.region',
      content: 'AU-WA',
    },
    {
      name: 'geo.placename',
      content: 'Perth',
    },
    {
      name: 'geo.position',
      content: '-31.9505;115.8605',
    },
    {
      name: 'ICBM',
      content: '-31.9505, 115.8605',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
  
  // Additional Link Tags
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
}