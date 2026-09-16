import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DMFirst VIP Club',
  description: 'Learn more about the DMFirst VIP Club and explore the features available to VIP members.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/vip',
  },
  openGraph: {
    title: 'VIP Club - Exclusive Benefits | DMFirst',
    description: 'Become a DMFirst VIP and unlock exclusive benefits including dedicated account managers, higher withdrawal limits, and personalized bonuses.',
    url: 'https://dmfirst-ten.vercel.app/vip',
  },
  twitter: {
    title: 'VIP Club - Exclusive Benefits | DMFirst',
    description: 'Become a DMFirst VIP and unlock exclusive benefits including dedicated account managers, higher withdrawal limits, and personalized bonuses.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'VIP Club', url: '/vip' }]} />
          <h1 className="text-4xl font-bold mb-4">Join the DMFirst VIP Club</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Elite Gaming Experience</h2><p>Our VIP program rewards our most loyal players with unparalleled service and perks.</p><ul><li>Dedicated VIP Manager</li><li>Exclusive Bonuses</li><li>Higher betting and withdrawal limits</li><li>Invitations to special events</li></ul></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">Not a VIP yet? Check out our standard <Link href="/rewards" className="text-[var(--primary)] hover:underline">Promotions & Rewards</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
