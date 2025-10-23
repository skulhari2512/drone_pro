/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.dronecareerpro.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    
    // Exclude pages from sitemap
    exclude: [
        '/api/*', 
        '/plan', 
        '/quiz',
        '/admin/*',
        '/dashboard/*',
        '/thank-you',
        '/404',
        '/500',
        '/server-sitemap.xml'
    ],
    
    // Transform function to customize URLs
    transform: async (config, path) => {
        // Set priority based on path
        let priority = 0.7
        let changefreq = 'weekly'

        if (path === '/') {
            priority = 1.0
            changefreq = 'daily'
        } else if (path.startsWith('/courses')) {
            priority = 0.9
            changefreq = 'weekly'
        } else if (path.startsWith('/blog')) {
            priority = 0.8
            changefreq = 'weekly'
        } else if (path.startsWith('/about') || path.startsWith('/contact')) {
            priority = 0.6
            changefreq = 'monthly'
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    
    // Additional paths (for dynamic routes from Supabase)
    additionalPaths: async (config) => {
        const result = []

        // Example: Fetch dynamic course pages from Supabase
        // Uncomment and modify when you're ready
        /*
        const { createClient } = require('@supabase/supabase-js')
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )
        
        const { data: courses } = await supabase
            .from('courses')
            .select('slug, updated_at')
        
        if (courses) {
            courses.forEach((course) => {
                result.push({
                    loc: `/courses/${course.slug}`,
                    changefreq: 'weekly',
                    priority: 0.9,
                    lastmod: course.updated_at,
                })
            })
        }
        */

        return result
    },
    
    // Robots.txt configuration
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/plan',
                    '/quiz',
                    '/admin/',
                    '/dashboard/',
                    '/*?*', // Exclude URLs with query parameters
                    '/*.json$',
                    '/*.xml$',
                ]
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/dashboard/']
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/dashboard/']
            }
        ],
        additionalSitemaps: [
            // If you have additional sitemaps (e.g., blog, products)
            // 'https://www.dronecareerpro.com/blog-sitemap.xml',
        ],
    },

    // Auto generate lastmod based on file modification
    autoLastmod: true,

    // Alternative language pages
    alternateRefs: [
        {
            href: 'https://www.dronecareerpro.com',
            hreflang: 'en-AU',
        },
    ],
}