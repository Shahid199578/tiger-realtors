import React from 'react';
import { ChevronRight } from 'lucide-react';

// Dark header band for inner pages. Dark so the transparent navbar stays readable at the top.
export default function PageHeader({ crumbs = [], eyebrow, title, lead, children }) {
  return (
    <section className="relative bg-slate-950 text-white pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute -top-24 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-1 min-w-0">
                    {isLast ? (
                      <span aria-current="page" className="text-slate-300 truncate">{crumb.name}</span>
                    ) : (
                      <>
                        <a href={crumb.path} className="hover:text-amber-400 transition-colors">{crumb.name}</a>
                        <ChevronRight className="w-3 h-3 shrink-0" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-amber-400/30">
            {eyebrow}
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>

        {lead && (
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">{lead}</p>
        )}

        {children}
      </div>
    </section>
  );
}
