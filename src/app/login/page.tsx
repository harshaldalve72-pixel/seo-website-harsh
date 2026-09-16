import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Login | DMFirst',
  description: 'Log in to your DMFirst account to access your favorite games, manage your funds, and claim your VIP rewards securely.',
};

export default function Page() {
  return (
    <>
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Welcome Back', url: '/login' }]} />
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        </div>
      </div>
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className='text-lg text-[var(--muted-foreground)] mb-6'>Enter your credentials to access your account.</p><div className='p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl'><p className='text-center'>[Login Form Placeholder]</p></div>
        </div>
      </div>
    </>
  );
}
