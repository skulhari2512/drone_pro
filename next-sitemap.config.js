module.exports = {
    siteUrl: 'https://www.dronecareerpro.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*', '/plan', '/quiz'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/plan', '/quiz']
            }
        ]
    }
}