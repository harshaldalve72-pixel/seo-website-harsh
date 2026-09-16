'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Gamepad2, 
  Trophy, 
  Crown, 
  Gift, 
  LifeBuoy, 
  Wallet,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Games', href: '/games', icon: Gamepad2 },
    { name: 'VIP Club', href: '/vip', icon: Crown },
    { name: 'Promotions', href: '/rewards', icon: Gift },
    { name: 'Tournaments', href: '/tournaments', icon: Trophy },
  ];

  const supportLinks = [
    { name: 'Wallet', href: '/payment-methods', icon: Wallet },
    { name: 'Support', href: '/contact', icon: LifeBuoy },
  ];

  return (
    <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-60 flex-col overflow-y-auto border-r border-[var(--border)] bg-[var(--background)] py-6 md:flex">
      <nav className="flex-1 space-y-8 px-4">
        
        {/* Main Links */}
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Casino
          </h3>
          <ul className="space-y-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-[var(--secondary)] text-[var(--primary)]" 
                        : "text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Support
          </h3>
          <ul className="space-y-1">
            {supportLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-[var(--secondary)] text-[var(--primary)]" 
                        : "text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
