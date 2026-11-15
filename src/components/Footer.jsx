import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { servicesData, servicePath } from '../data/services';
import { guidesData, guidePath } from '../data/guides';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Top Grid: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand Info (2 cols on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo light={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted property partner in Gaur City 1, Gaur City 2 and Greater Noida West. Specializing in verified residential sales & rentals, commercial investments, turnkey interior design, and property maintenance.
            </p>

            {/* Social & Connect Icons */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/+918743910094"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/tiger_realtor007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Tigerrealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                </svg>
              </a>

              {/* Direct Call */}
              <a
                href="tel:+918743910094"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Phone"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href="mailto:kmail.tolexo1@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
                aria-label="Email"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="/guides/" className="hover:text-amber-400 transition-colors">Property Guides</a></li>
                {guidesData.map((guide) => (
                  <li key={guide.slug}><a href={guidePath(guide)} className="hover:text-amber-400 transition-colors">{guide.title.split(':')[0]}</a></li>
                ))}
                <li><a href="/#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Core Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-xs">
                {servicesData.map((service) => (
                  <li key={service.id}><a href={servicePath(service)} className="hover:text-amber-400 transition-colors">{service.title}</a></li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Real Estate Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800/80">
          <p className="text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
            <span className="font-semibold text-slate-400">Disclaimer:</span> Tiger Realtors is an independent real estate consultancy operating from Galaxy Plaza, Gaur City 1. All society names, project names, and logos are properties of their respective developers and are referenced solely for location identification.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Agency Footmark */}
        <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs">
          <p className="text-slate-400">
            © 2025 Tiger Realtors Gaur City. All rights reserved.
            <span className="mx-2">&middot;</span>
            <a href="/privacy/" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
          </p>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed & Developed by</span>
            <a
              href="https://startcloudops.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold tracking-wide hover:underline transition-colors inline-flex items-center gap-1"
            >
              startcloudops.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
