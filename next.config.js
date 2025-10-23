/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // IMPORTANT: Enable SWC Minification for better performance
  swcMinify: true,
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'], // Modern formats for better compression
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // Your Supabase images
      },
      {
        protocol: 'https',
        hostname: 'dronecareerpro.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dronecareerpro.com',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  // Environment Variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SITE_URL: 'https://www.dronecareerpro.com',
  },

  // Headers for Security & SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },

  // Redirects (Force www and HTTPS)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'dronecareerpro.com',
          },
        ],
        destination: 'https://www.dronecareerpro.com/:path*',
        permanent: true,
      },
    ]
  },

  // Trailing Slash
  trailingSlash: false,

  // PoweredBy Header (Remove for security)
  poweredByHeader: false,

  // Production Browser Source Maps (disable for security)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig