import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About DMFirst - Our Story | DMFirst',
  description: 'Learn about the team behind DMFirst, our mission to provide the best online gaming experience, and our commitment to fairness and security.',
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About DMFirst', url: '/about' }]} />
          <h1 className="text-4xl font-bold mb-4">About DMFirst</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Our Mission</h2><p>We started DMFirst with a simple goal: to create a fair, fast, and exciting gaming platform built around the player.</p></div>
        </div>
      </div>
    </>
  );
}
