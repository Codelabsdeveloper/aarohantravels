import Button from './Button';
import SectionHeading from './SectionHeading';
import { destinations } from '../data/destinations';
import { useReveal } from '../hooks/useReveal';

const northeast = destinations.find((destination) => destination.id === 'northeast');

export default function NortheastSpotlight() {
  const { ref: statesRef, isVisible: statesVisible } = useReveal();

  if (!northeast?.states?.length) {
    return null;
  }

  return (
    <section
      id="northeast-india"
      className="section-pad bg-mist"
      aria-labelledby="northeast-spotlight-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="northeast-spotlight-heading"
          eyebrow="Northeast India"
          title="States & Places"
          description="Explore key places across Mizoram, Tripura and Sikkim."
        />

        <div
          ref={statesRef}
          className={`reveal grid gap-5 md:grid-cols-3 ${statesVisible ? 'is-visible' : ''}`}
        >
          {northeast.states.map((state) => (
            <article
              key={state.name}
              className="rounded-[1.5rem] bg-white p-6 shadow-[0_16px_40px_rgba(11,31,74,0.08)]"
            >
              <h3 className="font-display text-2xl font-semibold text-navy">{state.name}</h3>
              <ul className="mt-4 space-y-2">
                {state.places.map((place) => (
                  <li
                    key={place}
                    className="flex items-start gap-2 text-sm leading-relaxed text-navy/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    <span>{place}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" variant="primary" className="min-h-12 px-8">
            Plan a Northeast Trip
          </Button>
        </div>
      </div>
    </section>
  );
}
