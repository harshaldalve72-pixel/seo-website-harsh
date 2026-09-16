import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Protection | DMFirst',
  description: 'Understand how DMFirst collects, uses, and protects your personal data in accordance with our Privacy Policy.',
  alternates: {
    canonical: 'https://dmfirst-ten.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Protection | DMFirst',
    description: 'Understand how DMFirst collects, uses, and protects your personal data in accordance with our Privacy Policy.',
    url: 'https://dmfirst-ten.vercel.app/privacy-policy',
  },
  twitter: {
    title: 'Privacy Policy & Data Protection | DMFirst',
    description: 'Understand how DMFirst collects, uses, and protects your personal data in accordance with our Privacy Policy.',
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><p>Last Updated: September 2026</p><h2>Data Protection</h2><p>Your privacy is our priority. We use industry-standard encryption to protect your personal and financial information.</p></div>
        </div>
      </div>
    </>
  );
}
