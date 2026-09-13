import SectionHeading from './SectionHeading';
import { howItWorks } from '../data/gallery';
import { useReveal } from '../hooks/useReveal';

export default function HowItWorks() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="how-it-works" className="section-pad bg-white" aria-labelledby="how-heading">
      <div className="container-site">
        <SectionHeading
          id="how-heading"
          eyebrow="Simple Process"
          title="Planning Your Trip Is Easy"
          description="Four clear steps from your first idea to a journey worth remembering."
        />
        <div
          ref={ref}
          className={`reveal relative grid gap-6 md:grid-cols-2 xl:grid-cols-4 ${isVisible ? 'is-visible' : ''}`}
        >
          <div
            className="pointer-events-none absolute top-10 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent xl:block"
            aria-hidden="true"
          />
          {howItWorks.map((item) => (
            <article
              key={item.step}
              className="relative rounded-[1.5rem] border border-navy/8 bg-sand/70 p-6"
            >
              <span className="font-display text-4xl font-semibold text-orange/80">{item.step}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
