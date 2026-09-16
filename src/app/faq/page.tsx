import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | DMFirst',
  description: 'Find answers to the most common questions about DMFirst accounts, games, payments, and security in our comprehensive FAQ.',
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Help Center & FAQ', url: '/faq' }]} />
          <h1 className="text-4xl font-bold mb-4">Help Center & FAQ</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><p>Browse our extensive knowledge base or contact our 24/7 support team if you cannot find the answer you are looking for.</p></div>
        </div>
      </div>
    </>
  );
}
