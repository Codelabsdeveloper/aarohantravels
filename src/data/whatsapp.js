export const WHATSAPP_NUMBER = '917090038519';

export const WHATSAPP_MESSAGE = [
  'Hello,',
  'Thank you for your enquiry with Aarohan Travels.',
  '',
  "I'd be happy to help you find the right holiday package.",
  '',
  'To recommend the best option, could you please confirm:',
  '',
  '* Travel dates',
  '* Number of adults and children',
  '* Approximate budget',
  '* Preferred hotel category.',
  '',
  "I'll share a suitable itinerary with clear inclusions, exclusions and pricing.",
  '',
  'Would you prefer the most economical option or a more premium experience?',
  '',
  'Regards,',
  '',
  'TEJAS BC',
  'Aarohan Travels',
].join('\n');

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function buildPackageEnquiryUrl({
  itinerary,
  duration,
  adults,
  children,
  region,
}) {
  const lines = [
    'Hi, I would like to enquire about the following itinerary:',
    '',
    region ? `Region: ${region}` : null,
    `Itinerary: ${itinerary}`,
    duration ? `Duration: ${duration}` : null,
    `Adults: ${adults}`,
    `Children below 10 years: ${children}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const PHONE_DISPLAY = '70900 38519';
export const PHONE_TEL = 'tel:+917090038519';
export const CONTACT_NAME = 'Tejas BC';
export const CONTACT_EMAIL = 'aarohantravels.rc@gmail.com';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
