import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Register | DMFirst',
  description: 'Create your DMFirst account today to access premium games, exclusive rewards, and fast withdrawals. Registration is quick, easy, and secure.',
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Create Your Account', url: '/registration' }]} />
          <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className='text-lg text-[var(--muted-foreground)] mb-6'>Join DMFirst today and step into the next generation of online gaming.</p><div className='p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl'><p className='text-center'>[Registration Form Placeholder]</p></div>
        </div>
      </div>
    </>
  );
}
