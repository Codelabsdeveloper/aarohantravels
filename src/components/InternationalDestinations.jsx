import DestinationCard from './DestinationCard';
import SectionHeading from './SectionHeading';
import { internationalDestinations } from '../data/internationalDestinations';
import { useReveal } from '../hooks/useReveal';

export default function InternationalDestinations() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="international-destinations"
      className="section-pad bg-sand"
      aria-labelledby="international-destinations-heading"
    >
      <div className="container-site">
        <SectionHeading
          id="international-destinations-heading"
          eyebrow="Worldwide"
          title="International Destinations"
          description="As your international business partner, we craft journeys across Europe, South Africa, Japan, Thailand, Sri Lanka and Korea."
        />
        <div
          ref={ref}
          className={`reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? 'is-visible' : ''}`}
        >
          {internationalDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
