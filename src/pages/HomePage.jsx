import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import GuideCards from '../components/GuideCards';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { homeFaqs } from '../data/faqs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WhyChooseUs />

      <section id="guides" className="py-12 sm:py-16 lg:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Property Guides for Gaur City
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
              Practical advice on buying, renting and furnishing flats in Gaur City and Greater Noida West.
            </p>
          </div>
          <GuideCards />
        </div>
      </section>

      <FAQSection faqs={homeFaqs} className="bg-white" />
      <ContactSection />
    </>
  );
}
