import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DMFirst Payment Methods & Deposits',
  description: 'Explore the payment methods and deposit options available on DMFirst.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/payment-methods',
  },
  openGraph: {
    title: 'Payment Methods & Deposit Options | DMFirst',
    description: 'Explore the secure and fast payment methods available on DMFirst. We support major credit cards, e-wallets, and popular cryptocurrencies.',
    url: 'https://dmfirst-ten.vercel.app/payment-methods',
  },
  twitter: {
    title: 'Payment Methods & Deposit Options | DMFirst',
    description: 'Explore the secure and fast payment methods available on DMFirst. We support major credit cards, e-wallets, and popular cryptocurrencies.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Payment Methods', url: '/payment-methods' }]} />
          <h1 className="text-4xl font-bold mb-4">DMFirst Payment Methods & Deposit Options</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>Secure Deposits</h2><p>We offer a variety of secure, encrypted payment methods to fund your account instantly.</p><ul><li>Credit/Debit Cards (Visa, Mastercard)</li><li>E-wallets (Skrill, Neteller)</li><li>Cryptocurrency (Bitcoin, Ethereum, USDT)</li></ul></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">For information on cashing out, please review our <Link href="/withdrawals" className="text-[var(--primary)] hover:underline">Withdrawal process</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
