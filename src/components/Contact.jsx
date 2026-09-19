import { useState } from 'react';
import Button from './Button';
import SectionHeading from './SectionHeading';
import { IconMinus, IconPlus, IconWhatsApp } from './Icons';
import {
  CONTACT_EMAIL,
  CONTACT_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '../data/whatsapp';
import { destinations } from '../data/destinations';
import { useReveal } from '../hooks/useReveal';

const initialForm = {
  name: '',
  phone: '',
  destination: '',
  travelDate: '',
  adults: 2,
  kids: 0,
  days: 5,
  mealPlan: false,
  message: '',
};

function PersonCounter({ id, label, value, onChange, min = 0, max = 50 }) {
  const count = Number.isFinite(Number(value)) ? Number(value) : min;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="inline-flex w-full items-center justify-between rounded-xl border border-navy/12 bg-white px-2 py-1.5">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition hover:bg-sand disabled:cursor-not-allowed disabled:opacity-35"
          onClick={() => onChange(Math.max(min, count - 1))}
          disabled={count <= min}
          aria-label={`Decrease ${label}`}
        >
          <IconMinus className="h-4 w-4" />
        </button>
        <span
          id={id}
          className="w-14 text-center text-sm font-semibold text-navy"
          aria-live="polite"
        >
          {count}
        </span>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition hover:bg-sand disabled:cursor-not-allowed disabled:opacity-35"
          onClick={() => onChange(Math.min(max, count + 1))}
          disabled={count >= max}
          aria-label={`Increase ${label}`}
        >
          <IconPlus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const setCount = (name, value) => {
    const nextValue = Number(value);
    setForm((prev) => ({
      ...prev,
      [name]: Number.isFinite(nextValue) ? nextValue : prev[name],
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!form.destination.trim()) next.destination = 'Select a preferred destination.';
    if (Number(form.adults) < 1) {
      next.adults = 'Select at least 1 adult.';
    }
    if (Number(form.kids) < 0) {
      next.kids = 'Select 0 or more kids.';
    }
    if (Number(form.days) < 1) {
      next.days = 'Select at least 1 day.';
    }
    if (!form.message.trim()) next.message = 'Tell us a little about your trip.';
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const subject = `Tour Enquiry from ${form.name}`;
    const body = [
      'New tour enquiry from the Aarohan Travels website:',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Preferred Destination: ${form.destination}`,
      `Approximate Travel Date: ${form.travelDate || 'Not specified'}`,
      `Number of Adults: ${form.adults}`,
      `Number of Kids (0 - 10 years): ${form.kids}`,
      `Number of Days: ${form.days}`,
      `Meal Plan: ${form.mealPlan ? 'Yes' : 'No'}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setErrors({});
    setSubmitted(true);
  };

  const fieldClass =
    'w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-orange focus:ring-2 focus:ring-orange/20';

  return (
    <section id="contact" className="section-pad bg-mist" aria-labelledby="contact-heading">
      <div className="container-site">
        <SectionHeading
          id="contact-heading"
          eyebrow="Enquire Now"
          title="Let's Plan Your Next Journey"
          description="Tell us where you want to go. We'll help you create a journey worth remembering."
        />

        <div
          ref={ref}
          className={`reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ${isVisible ? 'is-visible' : ''}`}
        >
          <aside className="rounded-[1.75rem] bg-navy p-7 text-white shadow-[0_24px_50px_rgba(11,31,74,0.18)] md:p-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
              Talk to us
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold">Start with a conversation</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Share your dates, destination ideas and travel companions — we’ll help shape a
              customized itinerary around you.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-xs tracking-wide text-white/50 uppercase">Contact</p>
                <p className="mt-1 text-lg font-semibold">{CONTACT_NAME}</p>
                <a
                  href={PHONE_TEL}
                  className="mt-1 inline-flex text-xl font-semibold text-gold transition hover:text-orange-soft"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 block text-sm text-white/80 transition hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              >
                <IconWhatsApp className="h-5 w-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_44px_rgba(11,31,74,0.08)] md:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className={fieldClass}
                  autoComplete="name"
                  required
                />
                {errors.name ? <p className="mt-1 text-xs text-orange">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className={fieldClass}
                  autoComplete="tel"
                  required
                />
                {errors.phone ? <p className="mt-1 text-xs text-orange">{errors.phone}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-navy">
                  Preferred Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={form.destination}
                  onChange={onChange}
                  className={fieldClass}
                  required
                >
                  <option value="">Select a destination</option>
                  {destinations.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Other / Multiple">Other / Multiple</option>
                </select>
                {errors.destination ? (
                  <p className="mt-1 text-xs text-orange">{errors.destination}</p>
                ) : null}
              </div>
              <div>
                <PersonCounter
                  id="adults"
                  label="Adults"
                  value={form.adults}
                  onChange={(value) => setCount('adults', value)}
                  min={1}
                />
                {errors.adults ? <p className="mt-1 text-xs text-orange">{errors.adults}</p> : null}
              </div>
              <div>
                <PersonCounter
                  id="kids"
                  label="Kids (0 - 10 years)"
                  value={form.kids}
                  onChange={(value) => setCount('kids', value)}
                  min={0}
                />
                {errors.kids ? <p className="mt-1 text-xs text-orange">{errors.kids}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <PersonCounter
                  id="days"
                  label="Number of Days"
                  value={form.days}
                  onChange={(value) => setCount('days', value)}
                  min={1}
                  max={60}
                />
                {errors.days ? <p className="mt-1 text-xs text-orange">{errors.days}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="mealPlan"
                  className="inline-flex cursor-pointer items-center gap-3 rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm font-medium text-navy transition hover:border-navy/25"
                >
                  <input
                    id="mealPlan"
                    name="mealPlan"
                    type="checkbox"
                    checked={form.mealPlan}
                    onChange={onChange}
                    className="h-4 w-4 rounded border-navy/30 text-orange accent-orange focus:ring-orange/30"
                  />
                  Meal Plan - Select if you want to include a meal plan in your trip.
                </label>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="travelDate" className="mb-1.5 block text-sm font-medium text-navy">
                  Approximate Travel Date
                </label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="month"
                  value={form.travelDate}
                  onChange={onChange}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                className={`${fieldClass} resize-y`}
                placeholder="Share destinations, dates, interests or anything important for your trip."
                required
              />
              {errors.message ? <p className="mt-1 text-xs text-orange">{errors.message}</p> : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="button" type="submit" className="min-h-12 px-8">
                Send Enquiry
              </Button>
              <p className="text-xs leading-relaxed text-navy/55">
                Submitting opens your email app with this enquiry addressed to {CONTACT_EMAIL}.
              </p>
            </div>

            {submitted ? (
              <div
                className="mt-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm text-navy"
                role="status"
              >
                Your email draft is ready. Send it from your mail app to complete the enquiry, or
                reach us on WhatsApp /{' '}
                <a href={PHONE_TEL} className="font-semibold text-orange">
                  {PHONE_DISPLAY}
                </a>
                .
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
