import SectionHeading from './SectionHeading';
import { IconStar } from './Icons';
import { testimonials } from '../data/testimonials';
import { useReveal } from '../hooks/useReveal';

function Stars({ rating }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <IconStar key={index} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="testimonials" className="section-pad bg-sand" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Traveller Stories"
          title="What Our Travellers Say"
          description="Families, couples and groups who planned customized journeys with Aarohan Travels."
        />
        <div
          ref={ref}
          className={`reveal -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="w-[85%] shrink-0 snap-center rounded-[1.5rem] bg-white p-6 shadow-[0_14px_36px_rgba(11,31,74,0.06)] sm:w-auto"
            >
              <Stars rating={item.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-navy/75 md:text-[0.95rem]">
                “{item.review}”
              </blockquote>
              <footer className="mt-5 border-t border-navy/8 pt-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-navy/55">{item.location}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
