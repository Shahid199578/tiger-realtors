import React from 'react';
import PageHeader from '../components/PageHeader';
import { servicesData, servicePath } from '../data/services';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that page"
        lead="The page may have moved. Try one of our services below, or head back to the home page."
      >
        <a
          href="/"
          className="mt-7 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-full text-sm transition-colors"
        >
          Go to home page
        </a>
      </PageHeader>
      <section className="py-12 bg-white">
        <ul className="max-w-3xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-3">
          {servicesData.map((s) => (
            <li key={s.id}>
              <a
                href={servicePath(s)}
                className="block p-4 rounded-2xl border border-slate-200 text-sm font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
