// next-seo.config.js - COMPLETE SEO CONFIGURATION
export default {
    // Basic Meta Tags
    defaultTitle: 'Drone Career Pro - Professional Drone Pilot Training & Certification Australia',
    titleTemplate: '%s | Drone Career Pro',
    description: "Get your commercial drone pilot licence with Australia's leading training provider. CASA-approved courses, expert instructors, and guaranteed job placement support. Start your drone career today!",
    
    // Canonical URL
    canonical: 'https://www.dronecareerpro.com',
    
    // Additional Meta Tags
    additionalMetaTags: [
        {
            name: 'keywords',
            content: 'drone pilot training, drone licence Australia, CASA drone certification, commercial drone pilot, UAV training, drone career, RePL licence, ReOC certification, drone pilot course'
        },
        {
            name: 'author',
            content: 'Drone Career Pro'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
            name: 'googlebot',
            content: 'index, follow'
        },
        // Geo Tags for Australia
        {
            name: 'geo.region',
            content: 'AU'
        },
        {
            name: 'geo.placename',
            content: 'Australia'
        },
        // Mobile Optimization
        {
            name: 'mobile-web-app-capable',
            content: 'yes'
        },
        {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        },
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'default'
        },
        // Theme Color
        {
            name: 'theme-color',
            content: '#0066FF'
        },
        // Google Site Verification - ADD YOUR CODE AFTER SETTING UP SEARCH CONSOLE
        {
            name: 'google-site-verification',
            content: 'RhaLz1yrCP4U-1kG9c32AjF1DCZdsbNQX3Elt3DUqHM'
        },
        // Bing Verification - ADD YOUR CODE AFTER SETTING UP BING WEBMASTER
        {
            name: 'msvalidate.01',
            content: 'PASTE_YOUR_BING_VERIFICATION_CODE_HERE'
        }
    ],

    // Open Graph Tags (Facebook, LinkedIn)
    openGraph: {
        type: 'website',
        locale: 'en_AU',
        url: 'https://www.dronecareerpro.com',
        siteName: 'Drone Career Pro',
        title: 'Drone Career Pro - Professional Drone Pilot Training Australia',
        description: "Get your commercial drone pilot licence with Australia's leading training provider. CASA-approved courses with job placement support.",
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
                width: 1200,
                height: 1200,
                alt: 'Drone Career Pro Logo',
                type: 'image/jpeg',
            }
        ],
    },

    // Twitter Card Tags
    twitter: {
        handle: '@dronecareerpro',
        site: '@dronecareerpro',
        cardType: 'summary_large_image',
        title: 'Drone Career Pro - Professional Drone Pilot Training',
        description: 'CASA-approved drone pilot training with job placement support',
        image: 'https://www.dronecareerpro.com/twitter-image.jpg',
    },

    // Language Alternates
    languageAlternates: [
        {
            hrefLang: 'en-AU',
            href: 'https://www.dronecareerpro.com',
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
            sizes: '180x180'
        },
        {
            rel: 'manifest',
            href: '/manifest.json'
        }
    ],
}