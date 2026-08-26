import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { trackLeadSubmit } from '../utils/analytics';

interface CostGuideFormProps {
  city?: string;
  sourcePage?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function CostGuideForm({ city = 'Albuquerque', sourcePage }: CostGuideFormProps) {
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    const contactType = contact.includes('@') ? 'email' : 'phone';

    const { error } = await supabase.from('cost_guide_leads').insert({
      contact,
      contact_type: contactType,
      source_page: sourcePage || window.location.pathname,
    });

    if (error) {
      setStatus('error');
      return;
    }

    trackLeadSubmit('cost_guide_form');
    setStatus('success');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm lg:sticky lg:top-28">
      <h3 className="text-lg font-bold mb-2">Get the Free {city} Detailing Cost Guide</h3>
      <p className="text-sm text-gray-600 mb-4">
        See average prices for every package so you know exactly what to expect before you book.
      </p>

      {status === 'success' ? (
        <div className="flex items-start gap-2 text-green-700 bg-green-50 rounded-md p-4">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">Thanks! Your cost guide is on its way — check your inbox or phone shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            required
            type="text"
            placeholder="Email or Phone Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Me the Cost Guide'}
          </button>
          {status === 'error' && (
            <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
          )}
          <p className="text-xs text-gray-500">
            We respect your privacy. No spam, and you can unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
