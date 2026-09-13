import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { galleryImages } from '../data/gallery';
import { useReveal } from '../hooks/useReveal';

export default function Gallery() {
  const { ref, isVisible } = useReveal();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') {
        setActive((current) => (current + 1) % galleryImages.length);
      }
      if (event.key === 'ArrowLeft') {
        setActive((current) => (current - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="section-pad bg-white" aria-labelledby="gallery-heading">
      <div className="container-site">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Travel Experiences"
          title="Moments Across India"
          description="A glimpse of the landscapes, heritage and coastlines that inspire our customized journeys."
        />

        <div
          ref={ref}
          className={`reveal columns-1 gap-4 sm:columns-2 lg:columns-3 ${isVisible ? 'is-visible' : ''}`}
        >
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActive(index)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              <span className="relative block overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <span className="absolute inset-0 bg-navy-deep/0 transition group-hover:bg-navy-deep/25" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy opacity-0 transition group-hover:opacity-100">
                  {image.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold text-white hover:bg-white/25"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <img
            src={galleryImages[active].src
              .replace('w=1000', 'w=1600')
              .replace('tinysrgb&w=1000', 'tinysrgb&w=1600')}
            alt={galleryImages[active].alt}
            className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
