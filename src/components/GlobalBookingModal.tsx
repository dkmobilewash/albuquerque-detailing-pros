import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { supabase } from '../lib/supabase';
import { formatPhoneDisplay, getPhoneLink } from '../config/business';
import { trackLeadSubmit } from '../utils/analytics';

const EXTERNAL_BOOKING_URL = 'https://calendly.com/albuquerquedetailingpros/booking';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function GlobalBookingModal() {
  const { isOpen, closeBookingModal } = useBookingModal();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', year: '', makeModel: '' });

  if (!isOpen) return null;

  const handleClose = () => {
    closeBookingModal();
    setStatus('idle');
    setForm({ name: '', phone: '', year: '', makeModel: '' });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('booking_requests').insert({
      name: form.name,
      phone: form.phone,
      year: form.year,
      make_model: form.makeModel,
      status: 'new',
    });

    if (error) {
      setStatus('error');
      return;
    }

    trackLeadSubmit('global_booking_modal');
    setStatus('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Thanks, {form.name}!</h2>
            <p className="text-gray-600 mb-6">
              We received your request for your {form.year} {form.makeModel}. We'll call you at{' '}
              {form.phone} within 24 hours to confirm your appointment.
            </p>
            <a
              href={EXTERNAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Pick Your Exact Time Slot
            </a>
          </div>
        ) : status === 'error' ? (
          <div className="text-center py-6">
            <AlertCircle className="w-14 h-14 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              Please call us directly and we'll get you booked right away.
            </p>
            <a
              href={getPhoneLink()}
              className="block w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
            >
              Call {formatPhoneDisplay()}
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">Book Your Detail</h2>
            <p className="text-gray-600 text-sm mb-6">We'll call you within 24 hours to confirm.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Vehicle Year</label>
                  <input
                    required
                    type="text"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Make / Model</label>
                  <input
                    required
                    type="text"
                    value={form.makeModel}
                    onChange={(e) => setForm({ ...form, makeModel: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-60"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Booking'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
