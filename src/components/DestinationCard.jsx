import Button from './Button';

function getCardAction(destination) {
  if (destination.id === 'northeast') {
    return { href: '#northeast-india', label: 'View Packages' };
  }
  if (destination.id === 'east-india') {
    return { href: '#east-india', label: 'View Core States' };
  }
  return { href: '#contact', label: 'Plan This Trip' };
}

export default function DestinationCard({ destination }) {
  const action = getCardAction(destination);

  return (
    <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_16px_40px_rgba(11,31,74,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(11,31,74,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.imageAlt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
          width="800"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 font-display text-2xl font-semibold text-white">
          {destination.name}
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-5 md:p-6">
        <p className="text-sm leading-relaxed text-navy/70 md:text-[0.95rem]">
          {destination.description}
        </p>
        {destination.highlights?.length ? (
          <p className="text-xs font-medium tracking-wide text-blue uppercase">
            {destination.highlights.join(' · ')}
          </p>
        ) : null}
        <Button href={action.href} variant="outline" className="mt-auto w-full !rounded-xl">
          {action.label}
        </Button>
      </div>
    </article>
  );
}
