import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-200/80'
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo */}
          <a href="#home" className="shrink-0 max-w-[210px] xs:max-w-none transition-transform hover:opacity-95">
            <Logo light={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap relative py-1 group ${
                  isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-100 hover:text-amber-400'
                }`}
              >
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-amber-400'
                }`} />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">
            {/* Phone Button */}
            <a
              href="tel:+918743910094"
              className={`flex items-center gap-1.5 lg:gap-2 px-3.5 lg:px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 whitespace-nowrap group hover:scale-[1.02] ${
                isScrolled
                  ? 'border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400'
                  : 'border-white/40 text-white hover:bg-white/15 hover:border-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-blue-500 group-hover:rotate-12 transition-transform duration-200" />
              <span className="hidden lg:inline">+91 87439 10094</span>
              <span className="lg:hidden">Call Now</span>
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/+918743910094?text=Hi%20Tiger%20Realtors!%20I%20am%20interested%20in%20your%20property%20services%20in%20Gaur%20City."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-md shadow-emerald-950/20 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right: Compact Call Shortcut + Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href="tel:+918743910094"
              aria-label="Call Tiger Realtors"
              className={`p-2 rounded-xl border transition-colors ${
                isScrolled
                  ? 'border-slate-200 text-blue-600 bg-slate-50 hover:bg-slate-100'
                  : 'border-white/30 text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 top-[56px] sm:top-[68px] bg-slate-950/80 backdrop-blur-md z-40 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-b border-slate-200 px-5 sm:px-6 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-68px)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-blue-600 py-3 border-b border-slate-100 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-2 space-y-2.5">
              <a
                href="tel:+918743910094"
                className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-800 py-3 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call +91 87439 10094</span>
              </a>

              <a
                href="https://wa.me/+918743910094?text=Hi%20Tiger%20Realtors!%20I%20am%20interested%20in%20your%20property%20services%20in%20Gaur%20City."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
