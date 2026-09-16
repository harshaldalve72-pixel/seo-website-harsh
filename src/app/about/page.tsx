import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Schema } from '@/components/seo/Schema';

export const metadata: Metadata = {
  title: 'About DMFirst | Our Mission & Story',
  description: 'Learn more about DMFirst, our platform, mission and the gaming experience we aim to provide.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/about',
  },
  openGraph: {
    title: 'About DMFirst - Our Story | DMFirst',
    description: 'Learn about the team behind DMFirst, our mission to provide the best online gaming experience, and our commitment to fairness and security.',
    url: 'https://dmfirst-ten.vercel.app/about',
  },
  twitter: {
    title: 'About DMFirst - Our Story | DMFirst',
    description: 'Learn about the team behind DMFirst, our mission to provide the best online gaming experience, and our commitment to fairness and security.',
  },
};

export default function Page() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About DMFirst',
    description: 'Learn about the team behind DMFirst and our mission to provide the best online gaming experience.',
    url: 'https://dmfirst-ten.vercel.app/about'
  };

  return (
    <>
      <Schema data={schemaData} />
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About DMFirst', url: '/about' }]} />
          <h1 className="text-4xl font-bold mb-4">About DMFirst: Our Mission & Story</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Our Mission</h2><p>We started DMFirst with a simple goal: to create a fair, fast, and exciting gaming platform built around the player.</p></div>
          <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-[var(--muted-foreground)]">Have questions? Reach out to our <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact Support</Link> team or browse our <Link href="/faq" className="text-[var(--primary)] hover:underline">FAQ</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
