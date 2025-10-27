// pages/index.js - OPTIMIZED WITH ADVANCED SEO & PERFORMANCE
import { NextSeo, BreadcrumbJsonLd, OrganizationJsonLd, FAQPageJsonLd } from 'next-seo';
import dynamic from 'next/dynamic';

// PERFORMANCE: Lazy load components below the fold
const Home = dynamic(() => import('../components/pages/Home'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-blue-600">Loading...</div>
    </div>
  ),
});

export default function HomePage({ data }) {
  return (
    <>
      {/* PAGE-SPECIFIC SEO - Overrides default SEO from _app.js */}
      <NextSeo
        title="Professional Drone Pilot Training & CASA Certification Australia 2025"
        description="★★★★★ Start your drone career with Australia's #1 CASA-approved training. Get certified fast with RePL licensing, expert instructors & guaranteed job placement. 1000+ pilots trained!"
        canonical="https://www.dronecareerpro.com/"
        
        openGraph={{
          url: 'https://www.dronecareerpro.com/',
          title: 'Drone Career Pro - Get Your Commercial Drone Licence in 2025',
          description: "Transform your career with professional CASA-approved drone certification. Expert training, nationwide network, job placement support. Australia's most trusted drone academy.",
          images: [
            {
              url: 'https://www.dronecareerpro.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Drone Career Pro - Professional Drone Training and Certification',
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
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
        
        twitter={{
          handle: '@dronecareepro',
          site: '@dronecareepro',
          cardType: 'summary_large_image',
        }}
        
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'drone training australia, CASA drone licence, commercial drone pilot, RePL certification, drone career, UAV training perth, drone course online, professional pilot training',
          },
          {
            property: 'article:published_time',
            content: '2024-01-01T00:00:00Z',
          },
          {
            property: 'article:modified_time',
            content: new Date().toISOString(),
          },
        ]}
      />

      {/* BREADCRUMB SCHEMA - Helps Google show breadcrumbs in search */}
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://www.dronecareerpro.com',
          },
        ]}
      />

      {/* ORGANIZATION SCHEMA - Shows business info in Google */}
      <OrganizationJsonLd
        type="EducationalOrganization"
        id="https://www.dronecareerpro.com"
        name="Drone Career Pro"
        url="https://www.dronecareerpro.com"
        logo="https://www.dronecareerpro.com/logo.png"
        sameAs={[
          'https://www.facebook.com/profile.php?id=61581470906278',
          'https://x.com/dronecareepro',
          'https://linkedin.com/company/dronecareerpro',
          'https://instagram.com/dronecareerpro',
        ]}
        contactPoint={[
          {
            telephone: '+61-433-926-394',
            contactType: 'Customer Service',
            email: 'cooper@dronecareerpro.com',
            areaServed: 'AU',
            availableLanguage: ['English'],
          },
        ]}
        address={{
          addressCountry: 'AU',
          addressRegion: 'WA',
          addressLocality: 'Perth',
        }}
      />

      {/* FAQ SCHEMA - Shows FAQ rich snippets in Google (add this if you have FAQs on homepage) */}
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'How long does it take to get a drone licence in Australia?',
            acceptedAnswerText: 'With Drone Career Pro, you can complete your CASA RePL certification in as little as 2-4 weeks with our accelerated program. Standard courses take 6-8 weeks.',
          },
          {
            questionName: 'How much does drone pilot training cost?',
            acceptedAnswerText: 'Our comprehensive CASA-approved training packages start from $2,995, including all course materials, practical training, and certification support.',
          },
          {
            questionName: 'Do I need experience to start drone training?',
            acceptedAnswerText: 'No prior experience is required! Our courses are designed for complete beginners through to advanced pilots seeking commercial certification.',
          },
          {
            questionName: 'Is drone pilot a good career in Australia?',
            acceptedAnswerText: 'Yes! Commercial drone pilots in Australia earn $60,000-$120,000+ annually. The industry is growing rapidly with opportunities in construction, mining, agriculture, and media.',
          },
        ]}
      />

      {/* MAIN CONTENT */}
      <Home data={data} />
    </>
  );
}

// STATIC SITE GENERATION with ISR (Incremental Static Regeneration)
export async function getStaticProps() {
  try {
    // PERFORMANCE: Pre-fetch any data needed for the homepage
    // Example: Fetch testimonials, course info, latest blog posts, etc.
    
    // Uncomment if you're fetching from Supabase:
    // const { createClient } = require('@supabase/supabase-js');
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL,
    //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    // );
    
    // const { data: courses } = await supabase
    //   .from('courses')
    //   .select('*')
    //   .limit(3);
    
    // const { data: testimonials } = await supabase
    //   .from('testimonials')
    //   .select('*')
    //   .order('created_at', { ascending: false })
    //   .limit(6);

    return {
      props: {
        data: {
          // courses: courses || [],
          // testimonials: testimonials || [],
          lastUpdated: new Date().toISOString(),
        },
      },
      // ISR: Regenerate page every 1 hour (3600 seconds)
      // This keeps content fresh without rebuilding entire site
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return {
      props: {
        data: {
          lastUpdated: new Date().toISOString(),
        },
      },
      // Retry sooner if there was an error
      revalidate: 300, // 5 minutes
    };
  }
}