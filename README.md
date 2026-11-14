# Tiger Realtors - Gaur City (React + Vite)

A modern, high-performance web application for **Tiger Realtors**, the trusted real estate advisors based in Galaxy Plaza, Gaur City 1, Sector 4, Greater Noida West.

- **Live URL**: [https://tigerrealtors.in](https://tigerrealtors.in)
- **Built with**: React 18, Vite 5, Tailwind CSS 3, Lucide Icons
- **Agency Footmark**: Designed & Developed by [startcloudops.in](https://startcloudops.in)

---

## 🌟 Sections & Features

1. **Header & Navigation**:
   - Sticky glassmorphic navbar with smooth scroll detection.
   - Direct call button (`+91 87439 10094`) and WhatsApp CTA.
   - Mobile responsive menu drawer with auto-close and scroll-lock.

2. **Hero Carousel**:
   - High-contrast visual carousel with multi-step dark gradient overlays for crystal-clear readability.
   - Headline and direct WhatsApp consultation actions.

3. **Key Stats & Trust Bar**:
   - 10+ Years Gaur City Experience
   - 1000+ Happy Customers
   - 24/7 WhatsApp Support
   - 100% Transparent Dealings

4. **Our Premium Services**:
   - **Property Sales & Resale**: Verified registry documentation, Gaur City 1 & 2 options, loan guidance, and fair pricing.
   - **Rental & Tenant Management**: Tenant background check assistance, rent agreement drafting, inventory check, and key handover.
   - **Turnkey Interior & Support**: Modular kitchen, custom wardrobes, false ceiling, modern lighting, and wall painting.
   - **Property Maintenance & Care**: Deep cleaning, plumbing, electrical, dampness repairs, and move-in readiness.

5. **Why Choose Tiger Realtors**:
   - Authentic business strengths: 10+ years experience, 1000+ happy customers, physical Galaxy Plaza presence, and transparent pricing.

6. **Contact & Office Location**:
   - Full address: Shop No FFK3, Galaxy Plaza, Gaur City 1, Sector 4, Greater Noida West, UP 201301.
   - High-contrast dark inquiry form with instant WhatsApp routing.
   - Embedded Google Map showing the exact office location.

7. **Floating WhatsApp CTA**:
   - Quick floating chat button for instant assistance.

---

## 🌐 Netlify Deployment Guide

This project is configured for one-click deployment on **Netlify** with custom domain support for `tigerrealtors.in`.

### Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Functions Directory**: (None)

Configuration is pre-set in [netlify.toml](file:///c:/Users/Mohd%20Shahid/Desktop/tiger-realtors/netlify.toml) and [public/_redirects](file:///c:/Users/Mohd%20Shahid/Desktop/tiger-realtors/public/_redirects).

### Custom Domain (`tigerrealtors.in`) DNS Setup
In your domain registrar (GoDaddy, Namecheap, Hostinger, Cloudflare, etc.):
1. **Apex Domain (`tigerrealtors.in`)**:
   - Type: `A`
   - Host / Name: `@`
   - Value / IP: `75.2.60.5` (Netlify Load Balancer IP)
2. **Subdomain (`www.tigerrealtors.in`)**:
   - Type: `CNAME`
   - Host / Name: `www`
   - Value: `<your-site-name>.netlify.app`
3. Netlify will automatically provision a free Let's Encrypt SSL/TLS certificate for both `tigerrealtors.in` and `www.tigerrealtors.in`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
