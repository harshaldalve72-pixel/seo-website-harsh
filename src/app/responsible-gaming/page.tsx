import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Responsible Gaming | DMFirst',
  description: 'Learn about responsible gaming practices and information provided by DMFirst.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/responsible-gaming',
  },
  openGraph: {
    title: 'Responsible Gaming & Player Safety | DMFirst',
    description: 'DMFirst is committed to responsible gaming. Learn about our tools to manage your play, set limits, and find support resources.',
    url: 'https://dmfirst-ten.vercel.app/responsible-gaming',
  },
  twitter: {
    title: 'Responsible Gaming & Player Safety | DMFirst',
    description: 'DMFirst is committed to responsible gaming. Learn about our tools to manage your play, set limits, and find support resources.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Responsible Gaming', url: '/responsible-gaming' }]} />
          <h1 className="text-4xl font-bold mb-4">Responsible Gaming</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Play Safely</h2><p>Gaming should be entertaining, not a way to make money. Never chase losses and only play with funds you can afford to lose.</p><h3>Our Tools</h3><ul><li>Deposit Limits</li><li>Session Limits</li><li>Time-Out periods</li><li>Self-Exclusion</li></ul></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">By playing, you agree to our <Link href="/terms" className="text-[var(--primary)] hover:underline">Terms of Service</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
