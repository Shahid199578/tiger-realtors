import React from 'react';
import { Award, Users, Building, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: "10+ Years",
    label: "Gaur City Experience",
    subtext: "Deep insights into local market and circle rates"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Customers",
    subtext: "Assisted with home purchases, rentals & interiors"
  },
  {
    icon: Building,
    value: "24/7",
    label: "WhatsApp Support",
    subtext: "Quick assistance and updates anytime you need"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Transparent Dealings",
    subtext: "End-to-end guidance with zero hidden surprises"
  }
];

export default function Stats() {
  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-5 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`flex items-start gap-3.5 sm:gap-4 ${index > 0 ? 'pt-4 sm:pt-0 lg:pl-6' : ''}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {item.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
