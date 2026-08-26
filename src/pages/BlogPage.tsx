import { Link, useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import BlogPostView from '../components/BlogPostView';
import { blogPosts } from '../data/services';
import { optimizeImageUrl } from '../utils/imageOptimization';

export default function BlogPage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  if (slug) {
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
      return (
        <div className="pt-32 pb-24 text-center px-4">
          <SEO title="Post Not Found" description="This blog post could not be found." noindex />
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-black underline font-semibold">
            Back to Blog
          </Link>
        </div>
      );
    }

    return (
      <>
        <SEO title={post.title} description={post.excerpt} canonical={`https://albuquerquedetailing.com/blog/${post.slug}`} />
        <BlogPostView post={post} onBack={() => navigate('/blog')} />
      </>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <SEO
        title="Blog"
        description="Tips and insights on mobile auto detailing, ceramic coating, and vehicle care built for Albuquerque's high desert climate."
        keywords="car detailing blog, ceramic coating tips, Albuquerque car care"
      />

      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">The Detailing Blog</h1>
          <p className="text-gray-300">
            Practical car care advice built specifically for Albuquerque's climate.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={optimizeImageUrl(`https://picsum.photos/seed/${post.slug}/600/400`, { width: 600, quality: 70 })}
                alt={post.title}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-lg mb-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <span className="text-sm font-semibold">Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
