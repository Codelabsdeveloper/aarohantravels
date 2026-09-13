import Button from './Button';
import SectionHeading from './SectionHeading';
import { tourTypes } from '../data/gallery';
import { useReveal } from '../hooks/useReveal';

export default function CustomizedTours() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="customized-tours"
      className="section-pad relative overflow-hidden bg-navy"
      aria-labelledby="custom-tours-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-bright/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          id="custom-tours-heading"
          light
          eyebrow="Customized Tours"
          title="Your Trip. Your Way."
          description="Tell us where you want to go, how many days you have, who you're travelling with and what you want to experience. We'll help create an itinerary around you."
        />

        <div
          ref={ref}
          className={`reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? 'is-visible' : ''}`}
        >
          {tourTypes.map((type) => (
            <div
              key={type}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10"
            >
              {type}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" variant="primary" className="min-h-12 px-8">
            Customize My Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
