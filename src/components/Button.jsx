import { IconWhatsApp } from './Icons';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-orange text-white shadow-[0_10px_24px_rgba(232,119,34,0.28)] hover:-translate-y-0.5 hover:bg-orange-soft focus-visible:outline-orange',
  secondary:
    'bg-white text-navy shadow-[0_8px_20px_rgba(11,31,74,0.12)] hover:-translate-y-0.5 hover:bg-sand focus-visible:outline-navy',
  outline:
    'border border-navy/15 bg-white/80 text-navy backdrop-blur hover:border-navy/30 hover:bg-white focus-visible:outline-navy',
  navy: 'bg-navy text-white hover:-translate-y-0.5 hover:bg-blue focus-visible:outline-navy',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.28)] hover:-translate-y-0.5 hover:bg-[#1ebe57] focus-visible:outline-[#25D366]',
};

export default function Button({
  as = 'a',
  href,
  onClick,
  type,
  variant = 'primary',
  className = '',
  children,
  showWhatsAppIcon = false,
  target,
  rel,
  'aria-label': ariaLabel,
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {showWhatsAppIcon ? <IconWhatsApp className="h-5 w-5" /> : null}
      {children}
    </>
  );

  if (as === 'button') {
    return (
      <button type={type || 'button'} onClick={onClick} className={classes} aria-label={ariaLabel}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  );
}
