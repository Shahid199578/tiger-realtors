import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { guidesData, guidePath } from '../data/guides';

export default function GuideCards({ guides = guidesData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
      {guides.map((guide) => (
        <a
          key={guide.slug}
          href={guidePath(guide)}
          className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
            {guide.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{guide.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-600">
            Read the guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      ))}
    </div>
  );
}
