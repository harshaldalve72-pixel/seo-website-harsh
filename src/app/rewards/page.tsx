import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Player Rewards & Promotions | DMFirst',
  description: 'Discover the latest rewards, bonuses, and promotions available at DMFirst. Maximize your gameplay with deposit bonuses and free spins.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/rewards',
  },
  openGraph: {
    title: 'Player Rewards & Promotions | DMFirst',
    description: 'Discover the latest rewards, bonuses, and promotions available at DMFirst. Maximize your gameplay with deposit bonuses and free spins.',
    url: 'https://dmfirst-ten.vercel.app/rewards',
  },
  twitter: {
    title: 'Player Rewards & Promotions | DMFirst',
    description: 'Discover the latest rewards, bonuses, and promotions available at DMFirst. Maximize your gameplay with deposit bonuses and free spins.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Promotions & Rewards', url: '/rewards' }]} />
          <h1 className="text-4xl font-bold mb-4">Promotions & Rewards</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Current Offers</h2><p>Check back regularly for updated promotions, cashback offers, and tournament details.</p></div>
        </div>
      </div>
    </>
  );
}
