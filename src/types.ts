export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image?: string;
  author?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
