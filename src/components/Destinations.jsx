import DestinationCard from './DestinationCard';
import SectionHeading from './SectionHeading';
import { destinations } from '../data/destinations';
import { useReveal } from '../hooks/useReveal';

export default function Destinations() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="destinations" className="section-pad bg-white" aria-labelledby="destinations-heading">
      <div className="container-site">
        <SectionHeading
          id="destinations-heading"
          eyebrow="Destinations"
          title="Explore India Your Way"
          description="From royal deserts to misty mountains and serene coastlines — choose a region and we’ll craft the journey around you."
        />
        <div
          ref={ref}
          className={`reveal grid gap-6 sm:grid-cols-2 xl:grid-cols-4 ${isVisible ? 'is-visible' : ''}`}
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
