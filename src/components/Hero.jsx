import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Building, CheckCircle2 } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    title: "Premium Property Services in Gaur City",
    subtitle: "Authorised real estate advisors for Gaur City 1, Gaur City 2 & nearby areas in Greater Noida West. Sales, verified rentals & end-to-end registry support."
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    title: "Turnkey Luxury Interior Design",
    subtitle: "Transform your apartment with bespoke modular kitchens, designer false ceilings, architectural lighting, and quality craftsmanship."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    title: "Commercial Retail & Office Investments",
    subtitle: "High rental yields and capital appreciation in prime commercial centers including Galaxy Plaza, Sector 4."
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
    title: "Reliable Property Maintenance & Care",
    subtitle: "From professional deep cleaning and waterproofing to regular plumbing and electrical upkeep for NRI and resident landlords."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background Carousel */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}

      {/* Modern Gradient Overlays for High Contrast Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/80" />
      <div className="absolute inset-0 bg-blue-950/20 backdrop-brightness-75" />

      {/* Manual Slide Controls for Desktop / Tablet */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-4 sm:mt-6">
        
        {/* Gaur City Value Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-400/40 rounded-full px-3 sm:px-4 py-1 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-amber-300 backdrop-blur-md mb-4 sm:mb-6 animate-pulse">
          <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
          <span>#1 Trusted Property Advisor • Gaur City & Greater Noida West</span>
        </div>

        {/* Dynamic Heading */}
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-snug drop-shadow-2xl max-w-4xl mx-auto">
          {heroSlides[currentSlide].title}
        </h1>

        <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow font-normal px-2">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Action CTAs */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="https://wa.me/+918743910094?text=Hi%20Tiger%20Realtors!%20I%20want%20to%20consult%20regarding%20property%20services%20in%20Gaur%20City."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base shadow-xl shadow-emerald-950/50 hover:scale-105 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all hover:scale-105"
          >
            <span>Explore Services</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 md:gap-8 text-[11px] sm:text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 10+ Years Presence
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% Legal Clearance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Turnkey Interior & Support
            </span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-6 sm:mt-8 flex justify-center items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
