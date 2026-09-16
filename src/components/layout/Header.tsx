'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)] h-16">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Mobile Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground)] hover:bg-[var(--secondary)] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <Link href="/" className="flex items-center group" aria-label="DMFirst Homepage">
            <div className="relative h-10 w-32 transition-transform group-hover:scale-105">
              <Image
                src="/DM-First.webp"
                alt="DMFirst Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Search (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--muted-foreground)]" />
            <input 
              type="text" 
              placeholder="Search games..." 
              className="w-full bg-[var(--secondary)] text-[var(--foreground)] border border-[var(--border)] rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--primary)] transition-colors"
            />
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button href="https://www.dmfirst0.com" variant="ghost" className="hidden sm:inline-flex">
            Log In
          </Button>
          <Button href="https://www.dmfirst0.com/#/register?invitationCode=12651331794">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[var(--background)] border-t border-[var(--border)] overflow-y-auto">
          <div className="p-4">
             <div className="relative w-full mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--muted-foreground)]" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="w-full bg-[var(--secondary)] text-[var(--foreground)] border border-[var(--border)] rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--primary)] transition-colors"
              />
            </div>
            
            <nav className="flex flex-col gap-2">
              <Link href="/games" className="px-4 py-3 rounded-md hover:bg-[var(--secondary)] font-medium" onClick={toggleMobileMenu}>Games</Link>
              <Link href="/rewards" className="px-4 py-3 rounded-md hover:bg-[var(--secondary)] font-medium" onClick={toggleMobileMenu}>Promotions</Link>
              <Link href="/vip" className="px-4 py-3 rounded-md hover:bg-[var(--secondary)] font-medium" onClick={toggleMobileMenu}>VIP Club</Link>
              <Link href="/payment-methods" className="px-4 py-3 rounded-md hover:bg-[var(--secondary)] font-medium" onClick={toggleMobileMenu}>Wallet</Link>
              <Link href="/contact" className="px-4 py-3 rounded-md hover:bg-[var(--secondary)] font-medium" onClick={toggleMobileMenu}>Support</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
