import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const aboutImage =
  'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80';
const aboutImageSecondary =
  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80';

const highlights = [
  'Customized itineraries',
  'Personalized travel planning',
  'Comfortable stays',
  'Local experiences',
  'Family trips',
  'Couple trips',
  'Group tours',
  'Spiritual temple tours',
  'Hassle-free planning',
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section-pad bg-sand" aria-labelledby="about-heading">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div ref={ref} className={`reveal relative ${isVisible ? 'is-visible' : ''}`}>
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(11,31,74,0.14)]">
            <img
              src={aboutImage}
              alt="Travellers exploring a historic palace courtyard in India"
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              loading="lazy"
              width="900"
              height="1080"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 w-[48%] overflow-hidden rounded-3xl border-4 border-sand shadow-xl md:-right-4 md:-bottom-8">
            <img
              src={aboutImageSecondary}
              alt="Serene Kerala backwaters with palm trees"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width="480"
              height="360"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow="About Aarohan"
            title="Your Journey, Your Way"
            description="Aarohan Travels specializes in creating customized travel experiences across India. From the royal heritage of Rajasthan and the breathtaking valleys of Kashmir to the cultural richness of East India and the natural beauty of South India, we design journeys around your preferences. We are an inbound outbound tour operator for spiritual temple tours."
          />
          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-navy shadow-[0_8px_24px_rgba(11,31,74,0.05)]"
              >
                <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
