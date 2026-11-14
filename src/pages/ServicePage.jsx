import React from 'react';
import { CheckCircle2, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import GuideCards from '../components/GuideCards';
import ContactSection from '../components/ContactSection';
import { servicesData, servicePath } from '../data/services';
import { guidesData } from '../data/guides';
import { SITE, whatsappLink } from '../data/site';

export default function ServicePage({ service, crumbs }) {
  const relatedGuides = guidesData.filter((g) => service.guideSlugs?.includes(g.slug));
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow={`${service.badge} · Gaur City & Greater Noida West`}
        title={`${service.title} in Gaur City`}
        lead={service.shortDesc}
      >
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink(service.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{service.actionText}</span>
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/30 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {SITE.phoneDisplay}</span>
          </a>
        </div>
      </PageHeader>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="lg:col-span-2 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 sm:p-6 h-fit">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">At a glance</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            What we handle
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.details.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            How it works
          </h2>
          <ol className="space-y-4">
            {service.steps.map((step, index) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 text-sm font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm sm:text-base text-slate-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      {relatedGuides.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Helpful guides</h2>
            <GuideCards guides={relatedGuides} />
          </div>
        </section>
      )}

      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Other services</h2>
          <div className="flex flex-wrap gap-2.5">
            {otherServices.map((s) => (
              <a
                key={s.id}
                href={servicePath(s)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {s.title} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
