// pages/industry-uses.js
import { NextSeo } from 'next-seo';
import Layout from '../components/layout/Layout';
import IndustryUses from '../components/pages/IndustryUses';

export default function IndustryUsesPage() {
  return (
    <>
      <NextSeo
        title="Industry Applications | Drone Career Pro"
        description="Explore lucrative drone career opportunities across industries. Construction, agriculture, mining, inspections - earning $75-$400/hour."
        canonical="https://dronecareerpro.com/industry-uses"
        openGraph={{
          url: 'https://dronecareerpro.com/industry-uses',
          title: 'Drone Industry Applications & Careers | Drone Career Pro',
          description: 'Discover high-paying drone pilot opportunities in construction, agriculture, mining, and more.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <IndustryUses />
    </>
  );
}

IndustryUsesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 604800, // Revalidate every week
  };
}
