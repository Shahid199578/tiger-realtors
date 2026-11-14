// Single source of truth for business details (NAP), used by pages, schema and the sitemap.
export const SITE = {
  url: 'https://tigerrealtors.in',
  name: 'Tiger Realtors',
  phone: '+91-8743910094',
  phoneHref: 'tel:+918743910094',
  phoneDisplay: '+91 87439 10094',
  email: 'kmail.tolexo1@gmail.com',
  ogImage: 'https://tigerrealtors.in/logo.png',
  address: {
    streetAddress: 'Shop No FFK3, Galaxy Plaza, Gaur City 1, Sector 4',
    addressLocality: 'Greater Noida West',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  areasServed: ['Gaur City 1', 'Gaur City 2', 'Greater Noida West', 'Noida Extension'],
};

export const whatsappLink = (message) =>
  `https://wa.me/918743910094?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path) => `${SITE.url}${path}`;

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: 'Tiger Realtors Gaur City',
  description:
    'Property advisors in Gaur City 1, Gaur City 2 and Greater Noida West for residential sales and resale, rentals, commercial property, turnkey interiors and property maintenance.',
  image: SITE.ogImage,
  logo: SITE.ogImage,
  url: `${SITE.url}/`,
  telephone: SITE.phone,
  email: SITE.email,
  address: { '@type': 'PostalAddress', ...SITE.address },
  geo: { '@type': 'GeoCoordinates', latitude: 28.611982, longitude: 77.420358 },
  areaServed: SITE.areasServed.map((name) => ({ '@type': 'Place', name })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:30',
    closes: '20:30',
  },
  sameAs: ['https://www.youtube.com/@Tigerrealtors', 'https://www.instagram.com/tiger_realtor007'],
  priceRange: '₹₹₹',
};
