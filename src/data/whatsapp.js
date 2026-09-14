export const WHATSAPP_NUMBER = '917090038519';

export const WHATSAPP_MESSAGE =
  'Hi, i need more information on the tour details';

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
    `Children below 12 years: ${children}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const PHONE_DISPLAY = '70900 38519';
export const PHONE_TEL = 'tel:+917090038519';
export const CONTACT_NAME = 'Tejus';
export const CONTACT_EMAIL = 'tejasbc33@gmail.com';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
