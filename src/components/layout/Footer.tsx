import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--secondary)] border-t border-[var(--border)] mt-auto">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block relative h-12 w-40 mb-4">
              <Image
                src="/DM-First.webp"
                alt="DMFirst Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] text-balance">
              Your premium destination for online gaming and entertainment. Play responsibly and enjoy top-tier games.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">Games</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/games/aviator" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Aviator</Link></li>
              <li><Link href="/games/roulette" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Roulette</Link></li>
              <li><Link href="/games/blackjack" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Blackjack</Link></li>
              <li><Link href="/games/crash" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Crash</Link></li>
              <li><Link href="/games" className="text-[var(--primary)] hover:underline">View All Games →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">Account & Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/payment-methods" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Payment Methods</Link></li>
              <li><Link href="/withdrawals" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Withdrawals</Link></li>
              <li><Link href="/referral" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Referral Program</Link></li>
              <li><Link href="/vip" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">VIP Club</Link></li>
              <li><Link href="/blog" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">FAQ</Link></li>
              <li><Link href="/responsible-gaming" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Responsible Gaming</Link></li>
              <li><Link href="/terms" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center md:flex md:items-center md:justify-between">
          <p className="text-xs text-[var(--muted-foreground)] text-balance mb-4 md:mb-0 md:text-left md:max-w-xl">
            DMFirst promotes responsible gaming. Gambling can be addictive. Please play responsibly.
            Services may not be available in all jurisdictions. Check your local laws before registering.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {currentYear} DMFirst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
