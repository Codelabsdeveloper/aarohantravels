import { IconWhatsApp } from './Icons';
import { WHATSAPP_URL } from '../data/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:right-6 md:bottom-6"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
