import { ArticleCard } from '@/components/ui/ArticleCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Schema } from '@/components/seo/Schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMFirst Blog – Gaming Guides & News',
  description: 'Read the latest guides, news, and tips on online gaming, strategy, and platform updates from DMFirst.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/blog',
  },
  openGraph: {
    title: 'DMFirst Blog – Gaming Guides & News',
    description: 'Read the latest guides, news, and tips on online gaming, strategy, and platform updates from DMFirst.',
    url: 'https://dmfirst-ten.vercel.app/blog',
  },
  twitter: {
    title: 'DMFirst Blog – Gaming Guides & News',
    description: 'Read the latest guides, news, and tips on online gaming, strategy, and platform updates from DMFirst.',
  },
};

export const blogPosts = [
  {
    title: 'Beginner\'s Guide to Online Gaming',
    slug: 'beginners-guide',
    excerpt: 'Learn the basics of online casino games, how to manage your bankroll, and tips for a safe and enjoyable experience.',
    date: '2026-09-01',
    category: 'Guides',
    content: 'Welcome to the exciting world of online gaming. If you are new here, the variety of games and terms can seem overwhelming. This guide is designed to help you navigate the basics. First, understand that all casino games have a house edge. This means the casino always has a slight statistical advantage. Your goal should be entertainment, not guaranteed profits. Second, learn bankroll management. Never wager more than you can afford to lose, and set strict limits before you start playing.'
  },
  {
    title: 'Understanding Common Gaming Terminology',
    slug: 'gaming-terminology',
    excerpt: 'Confused by terms like RTP, House Edge, or Volatility? Our comprehensive glossary breaks down the jargon.',
    date: '2026-09-05',
    category: 'Education',
    content: 'To be a smart player, you need to speak the language. RTP (Return to Player) is the percentage of all wagered money a game will pay back to players over time. For example, a 97% RTP game will return $97 for every $100 wagered, theoretically and over a long period. Volatility refers to the risk level. High volatility games pay out less frequently but in larger amounts, while low volatility games offer smaller, more regular wins. House Edge is the mathematical advantage the casino holds.'
  },
  {
    title: 'How to Choose the Right Payment Method',
    slug: 'payment-methods-guide',
    excerpt: 'Compare the pros and cons of using credit cards, e-wallets, and cryptocurrencies for your DMFirst account.',
    date: '2026-09-10',
    category: 'Guides',
    content: 'Choosing how to fund your account is an important decision. Cryptocurrencies like Bitcoin and Ethereum offer the highest level of privacy and often the fastest withdrawal times. E-wallets like Skrill provide a great middle ground, keeping your bank details separate from the casino while offering near-instant transactions. Traditional methods like credit cards are familiar and easy, but may have longer withdrawal processing times depending on your bank.'
  }
];

export default function BlogPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'DMFirst Blog',
    description: 'News and guides about online gaming',
    url: 'https://dmfirst-ten.vercel.app/blog'
  };

  return (
    <>
      <Schema data={schemaData} />
      
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />
          <h1 className="text-4xl font-bold mb-4">Latest Articles & Guides</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl text-lg">
            Stay up to date with the latest strategies, platform news, and educational guides to enhance your gaming experience.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
