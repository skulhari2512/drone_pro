// components/SEO.jsx
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  article = null,
  breadcrumbs = null,
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          description: description,
          type: ogType,
          images: [
            {
              url: `https://www.dronecareerpro.com${ogImage}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: 'Drone Career Pro',
        }}
        twitter={{
          handle: '@dronecareepro',
          site: '@dronecareepro',
          cardType: 'summary_large_image',
        }}
      />

      {article && (
        <ArticleJsonLd
          url={canonical}
          title={title}
          images={[`https://www.dronecareerpro.com${ogImage}`]}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime}
          authorName={article.author}
          description={description}
        />
      )}

      {breadcrumbs && (
        <BreadcrumbJsonLd itemListElements={breadcrumbs} />
      )}
    </>
  );
}