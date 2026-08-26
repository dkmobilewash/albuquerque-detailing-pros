import { useState, type FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackLeadSubmit } from '../utils/analytics';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Mobile Auto Detailing',
  'Interior Detailing',
  'Exterior Detailing',
  'Paint Correction',
  'Ceramic Coating',
  'Headlight Restoration',
  'Engine Bay Detailing',
  'Fleet & Commercial Detailing',
  'Full Refresh Package',
  'Gold Standard Package',
  'Masterpiece Detail Package',
  'Deep Shampoo Package',
  'Not Sure Yet',
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', serviceInterest: SERVICE_OPTIONS[0] });

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('contact_form_submissions').insert({
      name: form.name,
      phone: form.phone,
      service_interest: form.serviceInterest,
    });

    if (error) {
      setStatus('error');
      return;
    }

    trackLeadSubmit('contact_form_modal', { service_interest: form.serviceInterest });
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
            <h2 className="text-xl font-bold mb-2">Thanks for Reaching Out</h2>
            <p className="text-gray-600">We'll contact you shortly about {form.serviceInterest}.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">Ask About This Service</h2>
            <p className="text-gray-600 text-sm mb-6">Leave your info and we'll reach out with details.</p>
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
              <select
                required
                value={form.serviceInterest}
                onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
          </>
        )}
      </div>
    </div>
  );
}
