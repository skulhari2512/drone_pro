// pages/quiz.js
import { NextSeo } from 'next-seo';
//import Layout from '../components/Layout/Layout';
import Quiz from '../components/pages/Quiz';

export default function QuizPage() {
  return (
    <>
      <NextSeo
        title="Career Assessment Quiz | Drone Career Pro"
        description="Take our free career assessment quiz to discover your ideal drone career path and get a personalized training plan."
        canonical="https://dronecareerpro.au/quiz"
        noindex={true} // Don't index individual quiz pages
        openGraph={{
          url: 'https://dronecareerpro.au/quiz',
          title: 'Drone Career Assessment Quiz',
          description: 'Discover your ideal drone career path with our free assessment quiz.',
          site_name: 'Drone Career Pro',
          locale: 'en_AU',
          type: 'website',
        }}
      />
      <Quiz />
    </>
  );
}

// Apply layout to this page
QuizPage.getLayout = function getLayout(page) {
  return {page};
};

// Use Static Generation - quiz logic is client-side
export async function getStaticProps() {
  return {
    props: {},
  };
}