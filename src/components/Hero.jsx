import { useEffect, useState } from 'react';
import Button from './Button';
import { BRAND_NAME, BRAND_TAGLINE } from '../data/brand';
import { WHATSAPP_URL } from '../data/whatsapp';

const HERO_SLIDES = [
  {
    id: 'kailash',
    src: 'https://images.unsplash.com/photo-1679573288317-a58f88ce8d0e?auto=format&fit=crop&w=2000&q=80',
    alt: 'Mount Kailash Parvat under a clear sky',
    label: 'Kailash Parvat',
    background: 'bg-[#556B2F]',
  },
  {
    id: 'varanasi',
    src: 'https://images.unsplash.com/photo-1762513839526-c596f5e99a9a?auto=format&fit=crop&w=2000&q=80',
    alt: 'Ghats of Varanasi along the Ganges with boats and riverside temples',
    label: 'Varanasi Ghats',
  },
  {
    id: 'vaishno-devi',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mata_Vaishno_Devi_Bhawan%2C_Jammu._India.jpg/1920px-Mata_Vaishno_Devi_Bhawan%2C_Jammu._India.jpg',
    alt: 'Mata Vaishno Devi Bhawan temple in the Trikuta Hills near Katra',
    label: 'Vaishno Devi Temple',
  },
  {
    id: 'thiruvananthapuram',
    src: 'https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?auto=format&fit=crop&w=2000&q=80',
    alt: 'Sree Padmanabhaswamy Temple in Thiruvananthapuram, Kerala',
    label: 'Thiruvananthapuram',
  },
];

const AUTO_MS = 5500;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [active]);

  const goTo = (index) => setActive(index);
  const goPrev = () =>
    setActive((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const goNext = () => setActive((current) => (current + 1) % HERO_SLIDES.length);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0" aria-live="polite">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                slide.background || 'bg-navy-deep'
              } ${isActive ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={!isActive}
            >
              <img
                key={isActive ? `${slide.id}-active` : `${slide.id}-idle`}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover ${
                  isActive ? 'hero-zoom-image' : 'scale-105'
                }`}
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                width="2000"
                height="1333"
              />
              {slide.background ? (
                <div
                  className="absolute inset-0 bg-[#556B2F]/40 mix-blend-multiply"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 via-navy/35 to-navy/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-navy-deep/20" />

      <div className="container-site relative z-10 max-w-3xl">
        <p className="hero-animate mb-4 text-sm font-semibold tracking-[0.22em] text-gold uppercase">
          {BRAND_NAME}
        </p>
        <h1 className="hero-animate-delay font-display text-4xl leading-[1.08] font-semibold text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
          Travel More. Create Better Memories.
        </h1>
        <p className="hero-animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          {BRAND_TAGLINE}
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

      <div className="absolute inset-x-0 bottom-6 z-10 md:bottom-8">
        <div className="container-site flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
            {HERO_SLIDES[active].label}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Previous image"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Hero images">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show ${slide.label}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === active ? 'w-7 bg-gold' : 'w-2.5 bg-white/45 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Next image"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
