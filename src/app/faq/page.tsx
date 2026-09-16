import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DMFirst Help Center & FAQ',
  description: 'Find answers to frequently asked questions about DMFirst, games, accounts, payments and other platform features.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | DMFirst',
    description: 'Find answers to the most common questions about DMFirst accounts, games, payments, and security in our comprehensive FAQ.',
    url: 'https://dmfirst-ten.vercel.app/faq',
  },
  twitter: {
    title: 'Frequently Asked Questions (FAQ) | DMFirst',
    description: 'Find answers to the most common questions about DMFirst accounts, games, payments, and security in our comprehensive FAQ.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Help Center & FAQ', url: '/faq' }]} />
          <h1 className="text-4xl font-bold mb-4">DMFirst Help Center & FAQ</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><p>Browse our extensive knowledge base or contact our 24/7 support team if you cannot find the answer you are looking for.</p></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">Still need help? Please <Link href="/contact" className="text-[var(--primary)] hover:underline">Contact Us</Link> directly.</p>
          </div>
        </div>
      </div>
    </>
  );
}
