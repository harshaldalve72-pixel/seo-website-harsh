import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-[var(--primary)] tracking-tight mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">Page Not Found</h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-10 text-balance">
          Oops! It looks like the page you are looking for has been moved or doesn't exist. Let's get you back into the game.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">
            Return to Homepage
          </Button>
          <Button href="/games" variant="outline" size="lg">
            Explore Games
          </Button>
        </div>
      </div>
    </div>
  );
}
