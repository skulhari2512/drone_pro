// pages/contact.js
import { NextSeo } from 'next-seo';
// import Layout from '../components/Layout/Layout'; --- IGNORE ---
import ContactComponent from '../components/pages/Contact'; // Move your Contact component to components/pages/

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact Us | Drone Career Pro"
        description="Get in touch with our expert team. Start your drone pilot journey today with personalized guidance and support."
        canonical="https://dronecareerpro.au/contact"
        openGraph={{
          url: 'https://dronecareerpro.au/contact',
          title: 'Contact Us | Drone Career Pro',
          description: 'Ready to start your drone career? Contact our expert team for personalized guidance on training and certification.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <ContactComponent />
    </>
  );
}


// Use Static Generation for contact page (it doesn't change often)
export async function getStaticProps() {
  return {
    props: {},
    // Revalidate every week (604800 seconds)
    revalidate: 604800,
  };
}