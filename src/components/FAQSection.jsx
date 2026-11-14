import React from 'react';
import { ChevronDown } from 'lucide-react';

// Native <details> keeps answers in the HTML for crawlers and needs no JS to open.
export default function FAQSection({ faqs, title = 'Frequently Asked Questions', className = 'bg-slate-50/60' }) {
  if (!faqs?.length) return null;

  return (
    <section id="faq" className={`py-12 sm:py-16 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-8">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-4 sm:p-5 text-sm sm:text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                <h3>{q}</h3>
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1 text-sm text-slate-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
