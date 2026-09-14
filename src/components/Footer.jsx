import { IconWhatsApp } from './Icons';
import { BRAND_NAME, BRAND_TAGLINE_FULL } from '../data/brand';
import {
  CONTACT_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '../data/whatsapp';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#spiritual-tours', label: 'Spiritual Tours' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy/8 bg-navy-deep text-white" aria-labelledby="footer-heading">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="Aarohan Travels"
              className="h-14 w-auto max-w-[5.5rem] rounded-lg bg-white object-contain p-1"
              width="88"
              height="56"
              loading="lazy"
            />
          </a>
          <h2 id="footer-heading" className="mt-4 font-display text-2xl font-semibold">
            {BRAND_NAME}
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
            {BRAND_TAGLINE_FULL}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Explore</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/75 transition hover:text-orange-soft">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Contact</p>
          <p className="mt-4 text-sm text-white/75">
            {CONTACT_NAME} —{' '}
            <a href={PHONE_TEL} className="font-semibold text-white hover:text-gold">
              {PHONE_DISPLAY}
            </a>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aarohan Travels. All Rights Reserved.</p>
          <p>Walk with Faith, Travel with the Soul, Return with Blessings.</p>
        </div>
      </div>
    </footer>
  );
}
