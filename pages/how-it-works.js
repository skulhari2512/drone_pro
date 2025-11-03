// pages/how-it-works.js
import { NextSeo } from 'next-seo';
import HowItWorks from '../components/pages/HowItWorks';

export default function HowItWorksPage() {
  return (
    <>
      <NextSeo
        title="How It Works | Drone Career Pro"
        description="Learn about our simple 6-step process to become a certified commercial drone pilot in Australia. From assessment to certification."
        canonical="https://dronecareerpro.com/how-it-works"
        openGraph={{
          url: 'https://dronecareerpro.com/how-it-works',
          title: 'How to Become a Drone Pilot | Drone Career Pro',
          description: 'Discover our proven 6-step pathway to drone pilot certification and career success.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <HowItWorks />
    </>
  );
}

// REMOVED THE PROBLEMATIC getLayout FUNCTION

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 604800, // Revalidate every week
  };
}