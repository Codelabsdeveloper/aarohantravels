import Button from './Button';
import SectionHeading from './SectionHeading';
import { destinations } from '../data/destinations';
import { useReveal } from '../hooks/useReveal';

const eastIndia = destinations.find((destination) => destination.id === 'east-india');

export default function EastIndiaSpotlight() {
  const { ref, isVisible } = useReveal();

  if (!eastIndia?.coreStates?.length) {
    return null;
  }

  return (
    <section
      id="east-india"
      className="section-pad bg-white"
      aria-labelledby="east-india-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="east-india-heading"
          eyebrow="East India"
          title="Core States of East India"
          description="Bihar, Jharkhand, Odisha and West Bengal form the core of East India. Northeast India is a separate region with its own destinations."
        />

        <div
          ref={ref}
          className={`reveal grid gap-5 sm:grid-cols-2 ${isVisible ? 'is-visible' : ''}`}
        >
          {eastIndia.coreStates.map((state) => (
            <article
              key={state.name}
              className="rounded-[1.5rem] border border-navy/8 bg-sand/50 p-6 shadow-[0_12px_32px_rgba(11,31,74,0.06)]"
            >
              <h3 className="font-display text-2xl font-semibold text-navy">{state.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/75 md:text-[0.95rem]">
                {state.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="#contact" variant="primary" className="min-h-12 px-8">
            Plan an East India Trip
          </Button>
          <Button href="#northeast-india" variant="outline" className="min-h-12 px-8">
            Explore Northeast India
          </Button>
        </div>
      </div>
    </section>
  );
}
