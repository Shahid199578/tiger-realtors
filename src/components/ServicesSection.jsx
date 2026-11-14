import React from 'react';
import { Home, Key, Palette, Wrench, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { servicesData, servicePath } from '../data/services';

const iconMap = {
  Home: Home,
  Key: Key,
  Palette: Palette,
  Wrench: Wrench
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 border border-blue-100">
            Our Core Expertise
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Premium Services
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600">
            Comprehensive property solutions tailored to meet all your real estate needs in Gaur City & nearby areas.
          </p>
        </div>

        {/* 4 Cards Grid - Responsive from 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.filter((service) => service.homeCard !== false).map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:min-h-[42px]">
                    {service.shortDesc}
                  </p>

                  {/* Checklist Features */}
                  <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTAs: service page + WhatsApp */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={servicePath(service)}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 py-1.5"
                  >
                    <span>Learn more about {service.title.toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://wa.me/+918743910094?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs font-bold shadow-sm transition-all group-hover:shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500 group-hover:text-emerald-400" />
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-slate-600">
          Looking for a shop or office?{' '}
          <a href="/services/commercial-property/" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
            Commercial property in Gaur City &amp; Galaxy Plaza &rarr;
          </a>
        </p>

      </div>
    </section>
  );
}
