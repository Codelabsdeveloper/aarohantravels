import { useReveal } from '../hooks/useReveal';

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const { ref, isVisible } = useReveal();
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div
      ref={ref}
      className={`reveal mb-10 max-w-2xl md:mb-14 ${alignClass} ${isVisible ? 'is-visible' : ''}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.18em] uppercase ${
            light ? 'text-gold' : 'text-orange'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-display text-3xl leading-tight font-semibold md:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? 'text-white/80' : 'text-navy/70'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
