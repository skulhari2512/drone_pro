// next-sitemap.config.js - AUTOMATIC SITEMAP GENERATION
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.dronecareerpro.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/404',
    '/500',
    '/_document',
    '/_app',
    '/_error',
  ],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    // Removed additionalSitemaps - not needed
  },
  
  changefreq: 'weekly',
  priority: 0.7,
  
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Important pages get high priority
    if (['/training', '/plan', '/faq', '/contact'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Default for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}