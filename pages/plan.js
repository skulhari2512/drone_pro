// pages/plan.js
import { NextSeo } from 'next-seo';
import Layout from '../components/layout/Layout';
import Plan from '../components/pages/Plan';

export default function PlanPage() {
    return (
        <>
            <NextSeo
                title="Your Personalized Drone Career Plan | Drone Career Pro"
                description="View your customized drone training pathway and recommended courses based on your career assessment results."
                canonical="https://dronecareerpro.com/plan"
                noindex={true} // Don't index personalized plan pages
                openGraph={{
                    url: 'https://dronecareerpro.com/plan',
                    title: 'Your Personalized Drone Career Plan',
                    description: 'Your customized training pathway to launch your drone career.',
                    site_name: 'Drone Career Pro',
                    locale: 'en_AU',
                    type: 'website',
                }}
            />
            <Plan />
        </>
    );
}

// Apply layout to this page
PlanPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

// Use Server-Side Rendering for personalized content
export async function getServerSideProps(context) {
    const { query } = context;

    // You can fetch user-specific data here if needed
    // For now, we'll just pass the quiz ID from the query

    return {
        props: {
            quizId: query.quizId || null
        }
    };
}