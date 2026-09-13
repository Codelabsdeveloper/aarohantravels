import Button from './Button';
import { WHATSAPP_URL } from '../data/whatsapp';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1679573288317-a58f88ce8d0e?auto=format&fit=crop&w=2000&q=80';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
      aria-label="Hero"
    >
      <img
        src={HERO_IMAGE}
        alt="Mount Kailash Parvat under a clear sky"
        className="hero-zoom-image absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        width="2000"
        height="1333"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/88 via-navy/72 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/30" />

      <div className="container-site relative z-10 max-w-3xl">
        <p className="hero-animate mb-4 text-sm font-semibold tracking-[0.22em] text-gold uppercase">
          Aarohan Travels
        </p>
        <h1 className="hero-animate-delay font-display text-4xl leading-[1.08] font-semibold text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
          Travel More. Create Better Memories.
        </h1>
        <p className="hero-animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          Customized tours designed around your journey, your interests and your budget.
        </p>
        <div className="hero-animate-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#contact" variant="primary" className="min-h-12 px-7">
            Plan Your Trip
          </Button>
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            showWhatsAppIcon
            className="min-h-12 px-7"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
