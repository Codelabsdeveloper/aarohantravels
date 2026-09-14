import { useState } from 'react';
import { IconArrowRight, IconMinus, IconPlus } from './Icons';
import { buildPackageEnquiryUrl } from '../data/whatsapp';

function Counter({ label, value, onChange, min = 0, id, light = false }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <label
        htmlFor={id}
        className={`text-[0.7rem] leading-tight font-medium ${
          light ? 'text-white/75' : 'text-navy/70'
        }`}
      >
        {label}
      </label>
      <div
        className={`inline-flex items-center gap-1 rounded-full border ${
          light ? 'border-white/20 bg-white/5' : 'border-navy/12 bg-white'
        }`}
      >
        <button
          type="button"
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-35 ${
            light ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-sand'
          }`}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
        >
          <IconMinus />
        </button>
        <span
          id={id}
          className={`min-w-5 text-center text-xs font-semibold ${
            light ? 'text-white' : 'text-navy'
          }`}
          aria-live="polite"
        >
          {value}
        </span>
        <button
          type="button"
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition ${
            light ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-sand'
          }`}
          onClick={() => onChange(value + 1)}
          aria-label={`Increase ${label}`}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}

export default function PackageEnquiry({
  itinerary,
  duration,
  region,
  light = false,
  divider = true,
  className = '',
}) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const enquiryId = `${itinerary}-${duration}`.replace(/\s+/g, '-').toLowerCase();
  const whatsappUrl = buildPackageEnquiryUrl({
    itinerary,
    duration,
    adults,
    children,
    region,
  });

  return (
    <div
      className={`space-y-2.5 ${
        divider
          ? `mt-3 border-t pt-3 ${light ? 'border-white/15' : 'border-navy/8'}`
          : ''
      } ${className}`}
    >
      {duration ? (
        <p className={`text-sm font-semibold ${light ? 'text-gold' : 'text-blue'}`}>
          {duration}
        </p>
      ) : null}

      <div className="space-y-2">
        <Counter
          id={`${enquiryId}-adults`}
          label="Adults"
          value={adults}
          onChange={setAdults}
          min={1}
          light={light}
        />
        <Counter
          id={`${enquiryId}-children`}
          label="Children below 12 years"
          value={children}
          onChange={setChildren}
          min={0}
          light={light}
        />
      </div>

      <div className="flex justify-end pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full transition ${
            light
              ? 'bg-gold text-navy hover:bg-orange-soft'
              : 'bg-orange text-white hover:bg-orange-soft'
          }`}
          aria-label="Send enquiry"
        >
          <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full top-1/2 z-20 mr-2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy-deep px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            Send enquiry
          </span>
        </a>
      </div>
    </div>
  );
}
