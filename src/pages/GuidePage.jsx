import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import { servicesData, servicePath } from '../data/services';
import { whatsappLink } from '../data/site';

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function GuidePage({ guide, crumbs }) {
  const service = servicesData.find((s) => s.slug === guide.serviceSlug);

  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow="Guide" title={guide.title} lead={guide.excerpt}>
        <p className="mt-5 text-xs text-slate-400">
          By Tiger Realtors · Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
        </p>
      </PageHeader>

      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <p className="text-xs text-slate-500 border-t border-slate-100 pt-6">
            This guide is general information, not legal or financial advice. Rules, rates and society policies change,
            so confirm details with the relevant authority, your bank or a lawyer before you act.
          </p>

          {service && (
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8">
              <h2 className="font-serif text-xl sm:text-2xl font-bold">Need help with this in Gaur City?</h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Tiger Realtors handles {service.title.toLowerCase()} from our office in Galaxy Plaza, Gaur City 1.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(service.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <a
                  href={servicePath(service)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/10 transition-colors"
                >
                  About our {service.title.toLowerCase()} service
                </a>
              </div>
            </div>
          )}
        </div>
      </article>

      <FAQSection faqs={guide.faqs} />
    </>
  );
}
