import React from 'react';
import { CheckCircle2, MessageCircle, ShieldCheck, Award, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: "10+ Years Experience",
    description: "Deep, trusted knowledge of Gaur City 1, Gaur City 2, and nearby areas across Greater Noida West."
  },
  {
    title: "1000+ Happy Customers",
    description: "Trusted by families and investors for seamless purchases, sales, and rentals."
  },
  {
    title: "24/7 WhatsApp Support",
    description: "Direct assistance and quick answers to your property and maintenance queries."
  },
  {
    title: "Expert Local Market Insights",
    description: "Accurate guidance on market rates, circle rates, and high-growth locations."
  },
  {
    title: "End-to-End Assistance",
    description: "From initial consultation and site visits to documentation and key handover."
  },
  {
    title: "Transparent Pricing",
    description: "Honest, straightforward dealings with clear terms and zero hidden surprises."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Features */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Trust & Reputation</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Home Buyers & Investors Choose <span className="text-blue-600">Tiger Realtors</span>
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              Real estate in Gaur City is fast-paced. Having an experienced, honest, and physically present partner on your side ensures you get verified properties, fair pricing, and seamless documentation without stress.
            </p>

            {/* Features Checklist Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/+918743910094?text=Hi%20Tiger%20Realtors!%20I%20want%20to%20know%20more%20about%20your%20services%20and%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to a Gaur City Specialist</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-blue-600 text-xs sm:text-sm font-bold px-4 py-2 transition-colors"
              >
                <span>Visit Our Office</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Images & Trust Badge */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Gaur City Interior"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] object-cover"
                />
              </div>

              {/* Floating Testimonial Card (Positioned safely so it never bleeds offscreen) */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:-bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 max-w-xs sm:animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-bold shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Verified Brokerage</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500">Gaur City, Sector 4</span>
                  </div>
                </div>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-snug">
                  "Transparent deals and fastest loan processing in Noida Extension."
                </p>
              </div>

              {/* Decorative Pill */}
              <div className="hidden sm:flex absolute -top-3 -right-3 bg-blue-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-extrabold shadow-md items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Certified</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
