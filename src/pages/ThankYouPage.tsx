import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { formatPhoneDisplay, getPhoneLink } from '../config/business';

export default function ThankYouPage() {
  return (
    <div className="pt-32 pb-24 text-center px-4 max-w-2xl mx-auto">
      <SEO
        title="Thank You"
        description="Thank you for contacting Albuquerque Detailing Pros. We will be in touch shortly."
        noindex
      />
      <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-gray-600 mb-8">
        We received your request and will reach out within 24 hours to confirm your appointment. If you need
        immediate assistance, feel free to call us directly.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={getPhoneLink()}
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
        >
          Call {formatPhoneDisplay()}
        </a>
        <Link to="/" className="border border-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
