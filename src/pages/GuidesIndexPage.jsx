import React from 'react';
import PageHeader from '../components/PageHeader';
import GuideCards from '../components/GuideCards';
import ContactSection from '../components/ContactSection';

export default function GuidesIndexPage({ crumbs }) {
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Guides"
        title="Property Guides for Gaur City & Greater Noida West"
        lead="Practical, no-nonsense advice on buying, renting and furnishing flats, from the team at Tiger Realtors, Galaxy Plaza."
      />
      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideCards />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
