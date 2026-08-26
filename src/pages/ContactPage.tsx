import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';
import {
  NAP,
  BUSINESS_HOURS,
  SERVICES,
  SERVICE_AREAS,
  getPhoneLink,
  formatPhoneDisplay,
  getFullAddress,
} from '../config/business';
import { trackLeadSubmit } from '../utils/analytics';

type Status = 'idle' | 'submitting' | 'error';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: SERVICES[0].title,
  vehicle: '',
  location: SERVICE_AREAS[0].name,
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('booking_requests').insert({
      name: form.name,
      phone: form.phone,
      email: form.email,
      make_model: form.vehicle,
      service: form.service,
      location: form.location,
      message: form.message,
      status: 'new',
      source_page: '/contact',
    });

    if (error) {
      setStatus('error');
      return;
    }

    trackLeadSubmit('contact_page_form', { service: form.service, location: form.location });
    navigate('/thank-you');
  };

  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Contact Us"
        description="Contact Albuquerque Detailing Pros to book a mobile auto detailing appointment anywhere in the Albuquerque metro. Call or fill out our form for a free quote."
        keywords="contact Albuquerque Detailing Pros, book car detailing Albuquerque"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300">Get a free quote or book your mobile detailing appointment today.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <select
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
              >
                {SERVICE_AREAS.map((a) => (
                  <option key={a.slug} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Vehicle (Year, Make, Model)"
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Tell us more about what you need"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-red-600">Something went wrong. Please call us directly.</p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href={getPhoneLink()} className="text-sm text-gray-600 hover:text-black">
                  {formatPhoneDisplay()}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Email</p>
                <a href={`mailto:${NAP.email}`} className="text-sm text-gray-600 hover:text-black">
                  {NAP.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-gray-600">{getFullAddress()}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Hours</p>
                {BUSINESS_HOURS.map((h) => (
                  <p key={h.days} className="text-sm text-gray-600">
                    {h.days}: {h.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-gray-200 h-64">
            <iframe
              title="Albuquerque Detailing Pros Location"
              className="w-full h-full"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`}
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            We typically respond within 24 hours.
          </div>
        </div>
      </section>
    </div>
  );
}
