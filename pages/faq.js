import { NextSeo } from 'next-seo';
import FAQ from '../components/pages/FAQ';

export default function FAQPage() {
  return (
    <>
      <NextSeo
        title="Frequently Asked Questions | Drone Career Pro"
        description="Get answers to common questions about drone pilot training, certification, costs, equipment, and career opportunities in Australia."
        canonical="https://dronecareerpro.com/faq"
        openGraph={{
          url: 'https://dronecareerpro.com/faq',
          title: 'FAQ - Drone Training Questions Answered | Drone Career Pro',
          description: 'Find answers to all your questions about becoming a commercial drone pilot in Australia.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <FAQ />
    </>
  );
}

FAQPage.getLayout = function getLayout(page) {
  return page;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 604800, // Revalidate every week
  };
}