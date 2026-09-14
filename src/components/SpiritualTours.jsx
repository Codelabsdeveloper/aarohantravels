import Button from './Button';
import PackageEnquiry from './PackageEnquiry';
import SectionHeading from './SectionHeading';
import { BRAND_TAGLINE_FULL } from '../data/brand';
import { buddhistCircuit, spiritualRegions } from '../data/spiritualTours';
import { useReveal } from '../hooks/useReveal';

export default function SpiritualTours() {
  const { ref: regionsRef, isVisible: regionsVisible } = useReveal();
  const { ref: circuitRef, isVisible: circuitVisible } = useReveal();

  return (
    <section
      id="spiritual-tours"
      className="section-pad bg-white"
      aria-labelledby="spiritual-tours-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="spiritual-tours-heading"
          eyebrow="Spiritual Temple Tours"
          title="Sacred Journeys Across India"
          description={BRAND_TAGLINE_FULL}
        />

        <div
          ref={regionsRef}
          className={`reveal grid gap-5 sm:grid-cols-2 xl:grid-cols-3 ${
            regionsVisible ? 'is-visible' : ''
          }`}
        >
          {spiritualRegions.map((region) => (
            <article
              key={region.id}
              className="rounded-[1.5rem] border border-navy/8 bg-sand/60 p-6 shadow-[0_12px_32px_rgba(11,31,74,0.06)]"
            >
              <h3 className="font-display text-2xl font-semibold text-navy">{region.name}</h3>

              {region.kind === 'packages' ? (
                <ul className="mt-4 space-y-4">
                  {region.packages.map((tourPackage) => (
                    <li
                      key={tourPackage.name}
                      className="rounded-2xl border border-navy/8 bg-white p-4"
                    >
                      <p className="text-sm leading-relaxed font-medium text-navy/85">
                        {tourPackage.name}
                      </p>
                      <PackageEnquiry
                        itinerary={tourPackage.name}
                        duration={tourPackage.duration}
                        region={region.name}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-4 space-y-2">
                  {region.places.map((place) => (
                    <li
                      key={place}
                      className="flex items-start gap-2 text-sm leading-relaxed text-navy/75"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                        aria-hidden="true"
                      />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <article
          ref={circuitRef}
          className={`reveal relative mt-8 overflow-hidden rounded-[1.75rem] bg-navy p-7 text-white md:mt-10 md:p-10 ${
            circuitVisible ? 'is-visible' : ''
          }`}
        >
          <div
            className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-orange/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-bright/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                Specialized Product
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {buddhistCircuit.name}
              </h3>
              <p className="mt-2 text-sm text-white/75 md:text-base">{buddhistCircuit.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
                {buddhistCircuit.route}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <PackageEnquiry
                itinerary={`${buddhistCircuit.name} (${buddhistCircuit.route})`}
                duration={buddhistCircuit.duration}
                region="Buddhist Spiritual Circuit"
                light
                divider={false}
              />
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" variant="primary" className="min-h-12 px-8">
            Plan a Spiritual Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
