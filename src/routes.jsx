import React from 'react';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import GuidesIndexPage from './pages/GuidesIndexPage';
import GuidePage from './pages/GuidePage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import { servicesData, servicePath } from './data/services';
import { guidesData, guidePath } from './data/guides';
import { homeFaqs } from './data/faqs';
import { SITE, absoluteUrl } from './data/site';
import { breadcrumbSchema, faqSchema } from './seo';

const home = { name: 'Home', path: '/' };
const guidesCrumb = { name: 'Guides', path: '/guides/' };

// Every route here is prerendered to static HTML and listed in sitemap.xml (except noindex routes).
export const routes = [
  {
    path: '/',
    title: 'Tiger Realtors Gaur City | Sales, Rentals, Commercial & Turnkey Interior',
    description:
      'Tiger Realtors - Trusted property advisors in Gaur City 1, Gaur City 2 and Greater Noida West. Verified residential sales, rentals, commercial investments and turnkey interior support. Galaxy Plaza, Sector 4.',
    priority: '1.0',
    schema: [faqSchema(homeFaqs)],
    render: () => <HomePage />,
  },
  ...servicesData.map((service) => {
    const crumbs = [home, { name: service.title, path: servicePath(service) }];
    return {
      path: servicePath(service),
      title: service.metaTitle,
      description: service.metaDescription,
      priority: '0.9',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.metaDescription,
          url: absoluteUrl(servicePath(service)),
          provider: { '@id': `${SITE.url}/#business` },
          areaServed: SITE.areasServed.map((name) => ({ '@type': 'Place', name })),
        },
        breadcrumbSchema(crumbs),
        faqSchema(service.faqs),
      ],
      render: () => <ServicePage service={service} crumbs={crumbs} />,
    };
  }),
  {
    path: '/guides/',
    title: 'Property Guides for Gaur City & Greater Noida West | Tiger Realtors',
    description:
      'Practical guides for buying, renting and doing interiors for flats in Gaur City and Greater Noida West, written by the Tiger Realtors team at Galaxy Plaza.',
    priority: '0.7',
    schema: [breadcrumbSchema([home, guidesCrumb])],
    render: () => <GuidesIndexPage crumbs={[home, guidesCrumb]} />,
  },
  ...guidesData.map((guide) => {
    const crumbs = [home, guidesCrumb, { name: guide.title, path: guidePath(guide) }];
    return {
      path: guidePath(guide),
      title: guide.metaTitle,
      description: guide.metaDescription,
      ogType: 'article',
      priority: '0.7',
      lastmod: guide.updated,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.metaDescription,
          datePublished: guide.published,
          dateModified: guide.updated,
          mainEntityOfPage: absoluteUrl(guidePath(guide)),
          image: SITE.ogImage,
          author: { '@id': `${SITE.url}/#business` },
          publisher: { '@id': `${SITE.url}/#business` },
        },
        breadcrumbSchema(crumbs),
        ...(guide.faqs?.length ? [faqSchema(guide.faqs)] : []),
      ],
      render: () => <GuidePage guide={guide} crumbs={crumbs} />,
    };
  }),
  {
    path: '/privacy/',
    title: 'Privacy Policy | Tiger Realtors',
    description:
      'How Tiger Realtors collects, uses and protects your information, including the WhatsApp enquiry form, cookies, Google Analytics and Google AdSense advertising.',
    priority: '0.3',
    schema: [breadcrumbSchema([home, { name: 'Privacy Policy', path: '/privacy/' }])],
    render: () => <PrivacyPage crumbs={[home, { name: 'Privacy Policy', path: '/privacy/' }]} />,
  },
];

export const notFoundRoute = {
  path: '/404',
  title: 'Page Not Found | Tiger Realtors',
  description: 'The page you are looking for does not exist. Explore Tiger Realtors services in Gaur City and Greater Noida West.',
  noindex: true,
  render: () => <NotFoundPage />,
};

const normalize = (path) => (path.endsWith('/') ? path : `${path}/`);

export const findRoute = (path) =>
  routes.find((route) => normalize(route.path) === normalize(path)) || notFoundRoute;
