import { useEffect, useState } from 'react';
import Button from './Button';
import { IconClose, IconMenu, IconWhatsApp } from './Icons';
import { WHATSAPP_URL } from '../data/whatsapp';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-navy/8 bg-white/95 shadow-[0_8px_30px_rgba(11,31,74,0.08)] backdrop-blur-md'
          : 'bg-gradient-to-b from-navy-deep/55 to-transparent'
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 md:h-[5rem]">
        <a
          href="#home"
          className="relative z-10 flex h-11 w-[4.75rem] shrink-0 items-center justify-start overflow-hidden md:h-12 md:w-[5.5rem]"
          onClick={closeMenu}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Aarohan Travels"
            className="max-h-full max-w-full object-contain object-left"
            width="88"
            height="48"
          />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition hover:text-orange ${
                scrolled ? 'text-navy/80' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              scrolled
                ? 'bg-[#25D366]/12 text-[#128C7E] hover:bg-[#25D366]/20'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
            aria-label="Chat on WhatsApp"
          >
            <IconWhatsApp className="h-4 w-4" />
            Enquire
          </a>
          <Button href="#contact" variant={scrolled ? 'primary' : 'secondary'} className="!px-5 !py-2.5">
            Plan My Trip
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md"
            aria-label="Chat on WhatsApp"
          >
            <IconWhatsApp className="h-5 w-5" />
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
              scrolled || open ? 'bg-navy/5 text-navy' : 'bg-white/15 text-white'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'} absolute inset-x-0 top-full border-b border-navy/8 bg-white shadow-xl transition`}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-sand"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3 px-2 pb-2">
            <Button href="#contact" onClick={closeMenu} className="w-full">
              Plan My Trip
            </Button>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              showWhatsAppIcon
              className="w-full"
            >
              Enquire Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
