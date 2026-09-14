import Button from './Button';
import PackageEnquiry from './PackageEnquiry';
import SectionHeading from './SectionHeading';
import { destinations } from '../data/destinations';
import { useReveal } from '../hooks/useReveal';

const northeast = destinations.find((destination) => destination.id === 'northeast');

export default function NortheastSpotlight() {
  const { ref: statesRef, isVisible: statesVisible } = useReveal();
  const { ref: packagesRef, isVisible: packagesVisible } = useReveal();

  if (!northeast?.states?.length && !northeast?.packages?.length) {
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
          title="States, Places & Featured Tours"
          description="Explore key places across Mizoram, Tripura and Sikkim — plus our top Northeast packages to promote first."
        />

        {northeast.states?.length ? (
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
        ) : null}

        {northeast.packages?.length ? (
          <div className="mt-12 md:mt-16">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">
                Top 10 to promote first
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy md:text-3xl">
                Featured Northeast Packages
              </h3>
            </div>

            <div
              ref={packagesRef}
              className={`reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${
                packagesVisible ? 'is-visible' : ''
              }`}
            >
              {northeast.packages.map((tourPackage, index) => (
                <article
                  key={tourPackage.name}
                  className="flex flex-col rounded-2xl border border-navy/8 bg-white p-4 shadow-[0_10px_28px_rgba(11,31,74,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(11,31,74,0.1)]"
                >
                  <span className="text-xs font-semibold tracking-wide text-orange uppercase">
                    #{index + 1}
                  </span>
                  <h4 className="mt-2 font-display text-lg leading-snug font-semibold text-navy">
                    {tourPackage.name}
                  </h4>
                  <div className="mt-auto">
                    <PackageEnquiry
                      itinerary={tourPackage.name}
                      duration={tourPackage.duration}
                      region="Northeast India"
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button href="#contact" variant="primary" className="min-h-12 px-8">
                Plan a Northeast Trip
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
