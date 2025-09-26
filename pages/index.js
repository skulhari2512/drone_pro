// pages/index.js
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout/Layout';
import Home from '../components/pages/Home'; // Move your Home component to components/pages/

export default function HomePage({ data }) {
  return (
    <>
      <NextSeo
        title="Professional Drone Training & Licensing | Drone Career Pro"
        description="Get your commercial drone pilot licence with Australia's leading CASA-approved training provider. Expert instructors, hands-on training, nationwide network."
        canonical="https://dronecareerpro.au/"
        openGraph={{
          url: 'https://dronecareerpro.au/',
          title: 'Professional Drone Training & Licensing | Drone Career Pro',
          description: 'Transform your career with professional drone certification. Get licensed, get trained, get flying with Australia\'s premier drone training platform.',
          images: [
            {
              url: 'https://dronecareerpro.au/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Drone Career Pro - Professional Drone Training',
              type: 'image/jpeg',
            }
          ],
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
        twitter={{
          handle: '@dronecareerpro',
          site: '@dronecareerpro',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <Home data={data} />
    </>
  );
}

// Apply layout to this page
HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// Static Site Generation with Incremental Static Regeneration
export async function getStaticProps() {
  try {
    // You can fetch data here if needed
    // For example, fetch course data, testimonials, etc.

    // Example: Fetch data from Supabase (server-side)
    // const { data, error } = await supabase
    //   .from('courses')
    //   .select('*')
    //   .limit(6);

    return {
      props: {
        data: null, // Replace with actual data if needed
      },
      // ISR: Regenerate page every 24 hours (86400 seconds)
      revalidate: 86400,
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return {
      props: {
        data: null,
      },
      revalidate: 3600, // Try again in 1 hour if error
    };
  }
}