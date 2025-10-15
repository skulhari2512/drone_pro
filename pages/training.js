import { NextSeo } from 'next-seo';
import Layout from '../components/layout/Layout';
import Training from '../components/pages/Training';

export default function TrainingPage() {
  return (
    <>
      <NextSeo
        title="Training & Certification | Drone Career Pro"
        description="CASA-approved drone pilot training courses. RePL, ReOC, and RPA certification options. Online and in-person training available."
        canonical="https://dronecareerpro.com/training"
        openGraph={{
          url: 'https://dronecareerpro.com/training',
          title: 'Drone Pilot Training & Certification | Drone Career Pro',
          description: 'Get certified with CASA-approved drone training. Multiple pathways from beginner to business operations.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <Training />
    </>
  );
}

TrainingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 604800, // Revalidate every week
  };
}
