import SectionHeading from './SectionHeading';
import { FeatureIcon } from './Icons';
import { whyChooseUs } from '../data/gallery';
import { useReveal } from '../hooks/useReveal';

export default function WhyChooseUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="why-us" className="section-pad bg-mist" aria-labelledby="why-us-heading">
      <div className="container-site">
        <SectionHeading
          id="why-us-heading"
          eyebrow="Why Choose Us"
          title="Why Travel With Aarohan?"
          description="Thoughtful planning, clear communication and journeys shaped around the people who travel."
        />
        <div
          ref={ref}
          className={`reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? 'is-visible' : ''}`}
        >
          {whyChooseUs.map((item) => (
            <article
              key={item.id}
              className="rounded-[1.5rem] bg-white p-6 shadow-[0_14px_36px_rgba(11,31,74,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(11,31,74,0.1)]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                <FeatureIcon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
