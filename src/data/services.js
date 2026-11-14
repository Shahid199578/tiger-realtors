// Service data drives the home page cards, each /services/<slug>/ page, its FAQ schema and the sitemap.
// Keep claims factual: only describe what Tiger Realtors actually does.
export const servicesData = [
  {
    id: "sales",
    slug: "property-sales",
    title: "Property Sales & Resale",
    metaTitle: "Buy or Sell Flats in Gaur City | Resale Property Dealer – Tiger Realtors",
    metaDescription: "Buy or sell resale flats in Gaur City 1, Gaur City 2 & Greater Noida West with Tiger Realtors. Verified documents, fair pricing, home loan guidance. Office at Galaxy Plaza.",
    shortDesc: "Buy or sell verified residential flats, penthouses & commercial spaces in Gaur City & nearby areas with complete transparency.",
    icon: "Home",
    badge: "Verified Deals",
    color: "from-blue-600 to-blue-700",
    features: [
      "Verified registry & clearance documentation",
      "Wide options across Gaur City 1, 2 & nearby areas",
      "End-to-end home loan guidance",
      "Fair market pricing & negotiation support"
    ],
    intro: [
      "Buying or selling a flat in Gaur City is a big decision, and most of the risk sits in the paperwork, not the price. Tiger Realtors works from Galaxy Plaza in Gaur City 1, so we know the societies, the avenues and the questions buyers and sellers in Greater Noida West actually run into.",
      "Whether you are a first-time buyer, upgrading to a bigger flat, or selling a property you have owned for years, we handle the search, the site visits, the negotiation and the documentation so that the deal closes cleanly."
    ],
    details: [
      { title: "For buyers", text: "Shortlists that match your budget, size and preferred society, site visits at times that suit you, and a document check before any token amount is paid." },
      { title: "For sellers", text: "A realistic asking price based on what comparable flats nearby are actually selling for, genuine buyer leads, and coordination until the registry is complete." },
      { title: "Documentation", text: "We help you collect and check the title documents, society and maintenance no-dues, and the paperwork your bank needs, then coordinate the registry appointment." },
      { title: "Home loans", text: "Guidance on the home loan process, from eligibility and the bank's legal and technical verification to disbursement on the day of registry." }
    ],
    steps: [
      "Tell us your requirement or share your property details on WhatsApp or by phone.",
      "We shortlist matching flats (or list yours) and arrange site visits.",
      "We check the documents and help you negotiate a fair price.",
      "Token, agreement to sell and home loan processing.",
      "Final registry at the sub-registrar office and key handover."
    ],
    faqs: [
      { q: "Which areas do you cover for flat sales and resale?", a: "We focus on Gaur City 1 and Gaur City 2 and also handle properties across nearby Greater Noida West (Noida Extension). Our office is at Galaxy Plaza, Gaur City 1, Sector 4." },
      { q: "Do you check the documents before I pay a token amount?", a: "Yes. We review the seller's title and registry papers and the society and maintenance no-dues before you commit, so you know what you are buying." },
      { q: "Can you help me get a home loan for a resale flat?", a: "Yes. We guide you through the home loan process and coordinate the documents the bank needs for its legal and technical verification." },
      { q: "How do I find out what my flat is worth?", a: "Share the society, tower, size, floor and condition of your flat with us on WhatsApp. We will give you a realistic price range based on recent deals for comparable flats nearby." }
    ],
    guideSlugs: ["resale-flat-buying-checklist-gaur-city"],
    actionText: "Inquire for Purchase",
    whatsappMsg: "Hi Tiger Realtors, I'm interested in buying or selling a property in Gaur City or nearby areas. Please guide me."
  },
  {
    id: "rentals",
    slug: "rentals",
    title: "Rental & Tenant Management",
    metaTitle: "Flats for Rent in Gaur City | Rental & Tenant Services – Tiger Realtors",
    metaDescription: "Find furnished and semi-furnished flats for rent in Gaur City 1, Gaur City 2 & Greater Noida West, or find verified tenants for your flat. Rent agreements and key handover handled.",
    shortDesc: "Find furnished & semi-furnished flats for rent, or let us find verified high-quality tenants across Gaur City & nearby areas.",
    icon: "Key",
    badge: "Quick Move-In",
    color: "from-amber-500 to-amber-600",
    features: [
      "Tenant ID & background check assistance",
      "Standard rent agreement drafting",
      "Move-in inventory check & key handover",
      "Complete coordination between owner & tenant"
    ],
    intro: [
      "Gaur City has a steady demand for rental flats from working professionals and families who want society living close to Noida and Delhi. Tiger Realtors helps tenants find the right flat quickly and helps owners find tenants they can trust.",
      "We cover furnished, semi-furnished and unfurnished flats across Gaur City 1, Gaur City 2 and nearby Greater Noida West."
    ],
    details: [
      { title: "For tenants", text: "Options that match your budget, preferred society, furnishing and move-in date, with site visits arranged around your schedule." },
      { title: "For owners", text: "We market your flat, screen interested tenants and help with ID and background checks before you hand over the keys." },
      { title: "Rent agreement", text: "A standard rent agreement drafted with clear terms on rent, deposit, notice period, maintenance charges and lock-in." },
      { title: "Move-in", text: "An inventory check of fittings and furnishings, society move-in formalities, and key handover so both sides start on clear terms." }
    ],
    steps: [
      "Share your requirement (tenant) or your flat details (owner) with us.",
      "We shortlist flats or tenants and arrange visits.",
      "Terms are agreed and tenant verification is completed.",
      "The rent agreement is drafted and signed.",
      "Inventory check, society formalities and key handover."
    ],
    faqs: [
      { q: "Do you have furnished flats for rent in Gaur City?", a: "Yes. We regularly have furnished, semi-furnished and unfurnished flats in Gaur City 1, Gaur City 2 and nearby societies. Message us your budget and move-in date for current options." },
      { q: "Do you help owners verify tenants?", a: "Yes. We assist with tenant ID and background checks and guide owners on completing police verification of the tenant." },
      { q: "Can you draft the rent agreement?", a: "Yes. We draft a standard rent agreement covering rent, security deposit, notice period, maintenance and lock-in, and coordinate signing." },
      { q: "I live outside Noida. Can you manage my flat's rental?", a: "Yes. We coordinate between owner and tenant, including visits, agreement, key handover and move-in checks, so you do not need to be present for every step." }
    ],
    guideSlugs: ["renting-a-flat-in-greater-noida-west"],
    actionText: "Browse Rental Options",
    whatsappMsg: "Hi Tiger Realtors, I'm looking for a rental flat in Gaur City or nearby areas. Please share available options."
  },
  {
    id: "interior",
    slug: "turnkey-interiors",
    title: "Turnkey Interior Design",
    metaTitle: "Turnkey Interior Design in Gaur City | Modular Kitchen & Wardrobes – Tiger Realtors",
    metaDescription: "Turnkey home interiors in Gaur City & Greater Noida West: modular kitchens, custom wardrobes, false ceilings, lighting and painting. One team from design to handover.",
    shortDesc: "Complete home interior transformations: modular kitchens, false ceilings, custom wardrobes, and painting.",
    icon: "Palette",
    badge: "Quality Work",
    color: "from-emerald-500 to-teal-600",
    features: [
      "Modular kitchen & custom wardrobe woodwork",
      "Designer false ceiling & modern lighting",
      "Premium wall painting & decorative finishes",
      "Budget-friendly, on-time project completion"
    ],
    intro: [
      "Turnkey means one team takes your flat from bare walls to move-in ready. Instead of managing a carpenter, an electrician, a painter and a false-ceiling contractor separately, you work with Tiger Realtors from design to handover.",
      "We work on flats across Gaur City 1, Gaur City 2 and Greater Noida West, whether it is a newly bought flat, a resale flat that needs a refresh, or a rental you want to upgrade."
    ],
    details: [
      { title: "Modular kitchens", text: "Layouts planned around your cooking habits, with cabinets, shutters, countertops and hardware chosen to fit your budget." },
      { title: "Wardrobes & woodwork", text: "Custom wardrobes, TV units, study tables and storage built to the exact size of your rooms." },
      { title: "False ceiling & lighting", text: "Designer false ceilings with modern lighting plans for living rooms and bedrooms." },
      { title: "Painting & finishes", text: "Wall painting, texture and decorative finishes to complete the look." }
    ],
    steps: [
      "Free consultation and site measurement of your flat.",
      "Design discussion and an itemised estimate with material details.",
      "Work schedule agreed, including society permissions.",
      "Execution by our team with regular progress updates.",
      "Final finishing, cleaning and handover."
    ],
    faqs: [
      { q: "What does turnkey interior include?", a: "Everything needed to make the flat move-in ready: modular kitchen, wardrobes and woodwork, false ceiling, lighting and painting, managed by one team from design to handover." },
      { q: "Do you give an estimate before starting?", a: "Yes. After measuring your flat and discussing the design, we share an itemised estimate with material details so you know what you are paying for." },
      { q: "Can you do only a kitchen or only wardrobes?", a: "Yes. You can take the full turnkey package or just the parts you need, such as a modular kitchen, wardrobes or painting." },
      { q: "Do you work in societies outside Gaur City?", a: "Our main focus is Gaur City 1 and Gaur City 2, and we also take up projects in nearby Greater Noida West societies." }
    ],
    guideSlugs: ["turnkey-interior-planning-guide"],
    actionText: "Get Interior Estimate",
    whatsappMsg: "Hi Tiger Realtors, I want an interior design consultation and quote for my flat in Gaur City."
  },
  {
    id: "maintenance",
    slug: "property-maintenance",
    title: "Property Maintenance & Care",
    metaTitle: "Property Maintenance in Gaur City | Repairs, Cleaning & Waterproofing – Tiger Realtors",
    metaDescription: "Deep cleaning, plumbing, electrical and carpentry repairs, waterproofing and painting for flats in Gaur City & Greater Noida West. Move-in and move-out readiness for owners and NRIs.",
    shortDesc: "Keep your property in top condition with our reliable repair, painting, deep cleaning, and electrical upkeep.",
    icon: "Wrench",
    badge: "Fast Response",
    color: "from-violet-500 to-purple-600",
    features: [
      "Professional deep cleaning & sanitization",
      "Plumbing, carpentry & electrical repairs",
      "Waterproofing, dampness repair & painting",
      "Move-in & move-out property readiness"
    ],
    intro: [
      "A flat that is well maintained rents faster, sells for a better price and saves you expensive repairs later. Tiger Realtors provides repair and upkeep services for flats across Gaur City and Greater Noida West.",
      "This is especially useful for landlords and NRI owners who cannot be on site, and for anyone getting a flat ready before moving in or handing it to a new tenant."
    ],
    details: [
      { title: "Deep cleaning", text: "Full-flat deep cleaning and sanitisation, including kitchen, bathrooms, windows and balconies." },
      { title: "Repairs", text: "Plumbing, carpentry and electrical repairs handled by skilled workers we coordinate for you." },
      { title: "Waterproofing & painting", text: "Treatment of dampness and seepage, followed by repainting so the problem does not keep coming back." },
      { title: "Move-in / move-out", text: "Getting the flat ready before a new tenant or owner moves in, and restoring it after a tenant moves out." }
    ],
    steps: [
      "Tell us what needs fixing, with photos on WhatsApp if possible.",
      "We inspect the flat if needed and share a quote.",
      "Work is scheduled with the society and completed by our team.",
      "We share photos and updates, especially for owners who are away."
    ],
    faqs: [
      { q: "Do you handle maintenance for NRI and out-of-town owners?", a: "Yes. We coordinate the work, visit the flat and keep you updated, so you do not need to be present." },
      { q: "Can you fix dampness and seepage?", a: "Yes. We handle waterproofing and dampness repair and then repaint the affected areas." },
      { q: "Do you prepare flats before a new tenant moves in?", a: "Yes. Move-in readiness, including deep cleaning, repairs and touch-up painting, is one of our most requested services." }
    ],
    guideSlugs: ["renting-a-flat-in-greater-noida-west"],
    actionText: "Schedule Maintenance",
    whatsappMsg: "Hi Tiger Realtors, I need maintenance/repair service for my property in Gaur City."
  },
  {
    id: "commercial",
    slug: "commercial-property",
    homeCard: false,
    title: "Commercial Shops & Offices",
    metaTitle: "Commercial Shops & Offices in Gaur City | Galaxy Plaza – Tiger Realtors",
    metaDescription: "Buy, sell or lease commercial shops and office spaces in Gaur City and Greater Noida West, including Galaxy Plaza, Sector 4. Local advice from an office inside Galaxy Plaza.",
    shortDesc: "Buy, sell or lease retail shops and office spaces in Gaur City's commercial centres, including Galaxy Plaza, Sector 4.",
    icon: "Building",
    badge: "Investment",
    color: "from-slate-700 to-slate-900",
    features: [
      "Retail shops and office spaces for sale or lease",
      "Options in Galaxy Plaza and nearby commercial centres",
      "Tenant search for commercial owners",
      "Documentation and lease agreement support"
    ],
    intro: [
      "Gaur City's large residential population supports a busy commercial market of shops, showrooms and offices. Our own office is inside Galaxy Plaza, Gaur City 1, so we see the commercial market here every day.",
      "We help investors buy shops and offices, help business owners find the right space to lease, and help commercial owners find tenants."
    ],
    details: [
      { title: "For investors", text: "Shops and office spaces for sale, with an honest view of footfall, visibility and the kind of tenants each location attracts." },
      { title: "For businesses", text: "Retail and office space to lease that matches your size, budget and the footfall your business needs." },
      { title: "For owners", text: "Tenant search and lease agreement support to keep your commercial property earning." }
    ],
    steps: [
      "Share whether you want to buy, sell, lease or rent out a commercial space.",
      "We shortlist matching spaces or tenants and arrange visits.",
      "Document check, negotiation and agreement.",
      "Registry or lease signing and handover."
    ],
    faqs: [
      { q: "Do you have shops for sale or lease in Galaxy Plaza?", a: "We regularly handle shops and office spaces in Galaxy Plaza and other Gaur City commercial centres. Message us your requirement for current availability." },
      { q: "Can you find a tenant for my commercial shop?", a: "Yes. We market your shop or office to businesses looking for space in Gaur City and help with the lease agreement." }
    ],
    guideSlugs: ["resale-flat-buying-checklist-gaur-city"],
    actionText: "Inquire About Commercial Space",
    whatsappMsg: "Hi Tiger Realtors, I'm interested in a commercial shop or office space in Gaur City / Galaxy Plaza. Please guide me."
  }
];

export const servicePath = (service) => `/services/${service.slug}/`;
