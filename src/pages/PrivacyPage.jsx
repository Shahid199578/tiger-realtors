import React from 'react';
import PageHeader from '../components/PageHeader';
import { SITE } from '../data/site';

// Update this date whenever the policy text changes.
const LAST_UPDATED = '15 November 2026';

const link = 'text-blue-700 underline underline-offset-2 hover:text-blue-900';

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>{children}</a>
  );
}

export default function PrivacyPage({ crumbs }) {
  const { address } = SITE;
  const mail = <a href={`mailto:${SITE.email}`} className={link}>{SITE.email}</a>;

  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow="Legal" title="Privacy Policy" lead={`Last updated: ${LAST_UPDATED}`} />

      <section className="py-12 sm:py-16 bg-slate-50/60">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-9 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Tiger Realtors (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) runs the website tigerrealtors.in.
            This policy explains what information we collect when you visit the site or contact us, how we use it, who
            we share it with, and the choices you have.
          </p>

          <Section title="1. Information you give us">
            <p>
              Our enquiry form asks for your name, phone number, the service you need and an optional message. When you
              press send, the form <strong className="text-slate-900">opens WhatsApp</strong> with your details written
              into a message to us. Nothing is sent until you send that message yourself in WhatsApp, and the website does
              not store the form details.
            </p>
            <p>
              If you call us, email us or chat with us on WhatsApp, we receive your phone number or email address and
              whatever you tell us about the property you are looking for. WhatsApp is run by Meta, and its own privacy
              policy applies to messages sent through it.
            </p>
          </Section>

          <Section title="2. Information collected automatically">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-slate-900">Server and security logs.</strong> Our hosting and network providers
                record technical details such as your IP address, browser, device, the pages you request and the time of
                the request, to keep the site running and protect it from abuse.
              </li>
              <li>
                <strong className="text-slate-900">Analytics.</strong> We use Google Analytics (through Google Tag
                Manager) to see which pages are visited, roughly where visitors come from, and how many people tap our
                WhatsApp or call buttons or use the enquiry form. For form use we record only the type of service chosen,
                never your name or phone number.
              </li>
              <li>
                <strong className="text-slate-900">Advertising.</strong> We use Google AdSense to show ads. See section 3.
              </li>
            </ul>
          </Section>

          <Section title="3. Cookies and Google advertising">
            <p>
              Cookies are small text files stored by your browser. This site and our partners use cookies and similar
              technologies for analytics, security and advertising.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website
                or other websites.
              </li>
              <li>
                Google&rsquo;s use of advertising cookies enables it and its partners to serve ads to you based on your
                visits to this site and/or other sites on the internet.
              </li>
              <li>
                You can opt out of personalised advertising by visiting{' '}
                <Ext href="https://adssettings.google.com">Google Ads Settings</Ext>. You can also opt out of some
                third-party vendors&rsquo; use of cookies for personalised advertising at{' '}
                <Ext href="https://www.aboutads.info/choices/">www.aboutads.info</Ext>.
              </li>
              <li>
                To learn how Google uses information from sites that use its services, see{' '}
                <Ext href="https://policies.google.com/technologies/partner-sites">
                  How Google uses information from sites or apps that use our services
                </Ext>.
              </li>
            </ul>
            <p>
              You can block or delete cookies in your browser settings. The site will still work, but analytics and ad
              personalisation will be limited. To stop Google Analytics from measuring your visits, you can install the{' '}
              <Ext href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out add-on</Ext>.
            </p>
          </Section>

          <Section title="4. How we use your information">
            <ul className="list-disc pl-5 space-y-2">
              <li>To reply to your enquiry and share suitable properties, rentals or interior options.</li>
              <li>To arrange site visits and keep you updated on a deal you are working on with us.</li>
              <li>To understand how the site is used and improve it.</li>
              <li>To show ads that help support the site.</li>
              <li>To keep the site secure and meet legal and tax obligations.</li>
            </ul>
            <p>
              We share your contact details with a property owner, buyer, tenant or builder only when it is needed for a
              deal you have asked us to help with. We never sell your personal information.
            </p>
          </Section>

          <Section title="5. Service providers">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-900">Netlify</strong>: website hosting.</li>
              <li><strong className="text-slate-900">Cloudflare</strong>: DNS, content delivery and security.</li>
              <li><strong className="text-slate-900">Google</strong>: Analytics, Tag Manager, AdSense advertising and web fonts.</li>
              <li><strong className="text-slate-900">Meta (WhatsApp)</strong>: messages you send us on WhatsApp.</li>
            </ul>
            <p>
              These providers may process data on servers outside India. We may also disclose information if the law
              requires it, or to protect our rights, our clients or the public.
            </p>
          </Section>

          <Section title="6. How long we keep it">
            <p>
              We keep enquiry messages and contact details for as long as needed to help you and to follow up on any
              property deal, and for as long as the law requires for business records. Analytics data is kept for up to
              14 months. You can ask us to delete your details at any time.
            </p>
          </Section>

          <Section title="7. Your rights">
            <p>
              Under India&rsquo;s Digital Personal Data Protection Act, 2023 and other applicable laws, you can ask us to
              see the personal data we hold about you, correct it or delete it, and you can withdraw consent you have
              given. Email {mail} or call {SITE.phoneDisplay}, and we will reply within 30 days. If you are not satisfied
              with our reply, you may complain to the Data Protection Board of India.
            </p>
          </Section>

          <Section title="8. Children">
            <p>
              This site is not directed at children, and we do not knowingly collect personal data from anyone under 18.
              If you believe a child has sent us their details, contact us and we will delete them.
            </p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it
              last changed.
            </p>
          </Section>

          <Section title="10. Contact us">
            <p>
              Tiger Realtors<br />
              {address.streetAddress}, {address.addressLocality}, {address.addressRegion} {address.postalCode}, India<br />
              Phone: <a href={SITE.phoneHref} className={link}>{SITE.phoneDisplay}</a><br />
              Email: {mail}
            </p>
          </Section>
        </article>
      </section>
    </>
  );
}
