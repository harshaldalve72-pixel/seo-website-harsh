import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DMFirst Withdrawals & Payouts',
  description: 'Learn about the withdrawal and payout options available on DMFirst.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/withdrawals',
  },
  openGraph: {
    title: 'Fast Withdrawals & Cashouts | DMFirst',
    description: 'Learn about our fast and secure withdrawal processes. Get your winnings quickly with our streamlined verification and cashout system.',
    url: 'https://dmfirst-ten.vercel.app/withdrawals',
  },
  twitter: {
    title: 'Fast Withdrawals & Cashouts | DMFirst',
    description: 'Learn about our fast and secure withdrawal processes. Get your winnings quickly with our streamlined verification and cashout system.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Withdraw Your Winnings', url: '/withdrawals' }]} />
          <h1 className="text-4xl font-bold mb-4">DMFirst Withdrawals & Payouts</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Lightning Fast Cashouts</h2><p>We pride ourselves on offering some of the fastest withdrawal times in the industry.</p><h3>Processing Times</h3><p>Crypto and E-wallets: Typically processed within 24 hours.</p><p>Bank Transfers: 3-5 business days depending on your bank.</p></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">To fund your account, view our accepted <Link href="/payment-methods" className="text-[var(--primary)] hover:underline">Payment methods</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
