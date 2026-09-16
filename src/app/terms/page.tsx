import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions | DMFirst',
  description: 'Read the DMFirst Terms and Conditions governing use of the platform and its services.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/terms',
  },
  openGraph: {
    title: 'Terms of Service | DMFirst',
    description: 'Read the DMFirst Terms of Service. Important information regarding your use of our platform, account rules, and legal agreements.',
    url: 'https://dmfirst-ten.vercel.app/terms',
  },
  twitter: {
    title: 'Terms of Service | DMFirst',
    description: 'Read the DMFirst Terms of Service. Important information regarding your use of our platform, account rules, and legal agreements.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><p>Last Updated: September 2026</p><h2>1. Acceptance of Terms</h2><p>By registering an account with DMFirst, you agree to be bound by these Terms of Service.</p></div>
                  <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[var(--muted-foreground)]">Please also review our <Link href="/privacy-policy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link> to understand how we protect your data.</p>
          </div>
        </div>
      </div>
    </>
  );
}
