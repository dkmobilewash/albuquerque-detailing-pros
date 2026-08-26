import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 text-center px-4">
      <SEO title="Page Not Found" description="The page you are looking for could not be found." noindex />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800">
        Back to Home
      </Link>
    </div>
  );
}
