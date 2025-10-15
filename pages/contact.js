// pages/contact.js
import { NextSeo } from 'next-seo';
import Layout from '../components/layout/Layout';
import ContactComponent from '../components/pages/Contact';

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact Us | Drone Career Pro"
        description="Get in touch with our expert team. Start your drone pilot journey today with personalized guidance and support."
        canonical="https://dronecareerpro.com/contact"
        openGraph={{
          url: 'https://dronecareerpro.com/contact',
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

// Apply layout to this page
ContactPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// Use Static Generation for contact page (it doesn't change often)
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 604800, // Revalidate every week
  };
}