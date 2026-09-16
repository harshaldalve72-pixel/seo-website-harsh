import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us - 24/7 Support | DMFirst',
  description: 'Need help? Contact the DMFirst support team via live chat or email. We are available 24/7 to assist you with any inquiries.',
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact Support', url: '/contact' }]} />
          <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className='prose prose-invert max-w-none text-[var(--muted-foreground)]'><h2>We are here to help</h2><p>Our dedicated support team is available 24/7 to resolve any issues you may encounter.</p><ul><li>Email: support@dmfirst.example.com</li><li>Live Chat: Available in the bottom right corner of your screen.</li></ul></div>
        </div>
      </div>
    </>
  );
}
