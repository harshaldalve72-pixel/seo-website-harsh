import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DMFirst Referral Program',
  description: 'Learn more about the DMFirst referral program and how the referral system works.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/referral',
  },
  openGraph: {
    title: 'Referral Program - Invite & Earn | DMFirst',
    description: 'Join the DMFirst Referral Program. Invite friends and earn commission on their gameplay. Build your network and increase your passive income.',
    url: 'https://dmfirst-ten.vercel.app/referral',
  },
  twitter: {
    title: 'Referral Program - Invite & Earn | DMFirst',
    description: 'Join the DMFirst Referral Program. Invite friends and earn commission on their gameplay. Build your network and increase your passive income.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Referral Program', url: '/referral' }]} />
          <h1 className="text-4xl font-bold mb-4">DMFirst Referral Program</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Invite Friends, Earn Rewards</h2><p>Share your unique referral link with friends. When they sign up and play, you earn a percentage of the house edge.</p><h3>How it works</h3><ol><li>Get your link from your account dashboard.</li><li>Share it on social media or with friends.</li><li>Earn commission automatically credited to your balance.</li></ol></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">You might also be interested in our <Link href="/rewards" className="text-[var(--primary)] hover:underline">Promotions & Rewards</Link> program.</p>
          </div>
        </div>
      </div>
    </>
  );
}
