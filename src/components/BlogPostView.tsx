import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const linkText = match[1];
      const href = match[2];
      if (href.startsWith('/')) {
        nodes.push(
          <Link key={`${keyPrefix}-${index}`} to={href} className="text-black underline font-medium hover:no-underline">
            {linkText}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`${keyPrefix}-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-medium hover:no-underline"
          >
            {linkText}
          </a>
        );
      }
    } else if (match[3]) {
      nodes.push(<strong key={`${keyPrefix}-${index}`}>{match[3]}</strong>);
    }

    lastIndex = pattern.lastIndex;
    index += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderContent(content: string): ReactNode {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={key} className="list-disc pl-6 space-y-2 mb-4">
        {listBuffer.map((item, i) => (
          <li key={i} className="text-gray-700">
            {renderInline(item, `${key}-li-${i}`)}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((rawLine, i) => {
    const line = rawLine.trim();

    if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
      return;
    }

    flushList(`list-${i}`);

    if (!line) return;

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-bold mt-6 mb-2">
          {renderInline(line.slice(4), `h3-${i}`)}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-8 mb-3">
          {renderInline(line.slice(3), `h2-${i}`)}
        </h2>
      );
    } else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {renderInline(line, `p-${i}`)}
        </p>
      );
    }
  });

  flushList('list-final');

  return <Fragment>{elements}</Fragment>;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  return (
    <article className="pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            loading="eager"
            className="w-full h-auto rounded-lg mb-8 object-cover"
          />
        )}

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-200 pb-6">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> {post.author || 'Albuquerque Detailing Pros Team'}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>

        <div>{renderContent(post.content)}</div>

        <div className="mt-12 bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Give Your Vehicle the Care It Deserves?</h2>
          <p className="text-gray-300 mb-6">Book a mobile detailing appointment anywhere in the Albuquerque metro.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
