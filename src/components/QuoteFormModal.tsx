import { useState, type FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackLeadSubmit } from '../utils/analytics';

const EXTERNAL_BOOKING_URL = 'https://calendly.com/albuquerquedetailingpros/booking';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', year: '', make: '', model: '' });

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    const vehicle = `${form.year} ${form.make} ${form.model}`.trim();

    const { error } = await supabase.from('quote_submissions').insert({
      name: form.name,
      phone: form.phone,
      vehicle,
    });

    if (error) {
      setStatus('error');
      return;
    }

    trackLeadSubmit('quote_form_modal');
    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Quote Request Received</h2>
            <p className="text-gray-600 mb-6">We'll follow up shortly with pricing for your vehicle.</p>
            <a
              href={EXTERNAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Book Your Appointment Now
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">Get a Free Quote</h2>
            <p className="text-gray-600 text-sm mb-6">Tell us about your vehicle and we'll follow up fast.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  required
                  type="text"
                  placeholder="Year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  required
                  type="text"
                  placeholder="Make"
                  value={form.make}
                  onChange={(e) => setForm({ ...form, make: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  required
                  type="text"
                  placeholder="Model"
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get My Quote'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please call us directly.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
