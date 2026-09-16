import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dmfirst.example.com'),
  title: {
    default: 'DMFirst Game - Premium Online Gaming',
    template: '%s | DMFirst'
  },
  description: 'DMFirst is a premium online gaming platform offering fast payouts, fair games, and an exceptional user experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased text-[var(--foreground)] flex flex-col">
        <Header />
        
        <div className="flex flex-1 pt-16">
          <Sidebar />
          
          {/* Main Content Area */}
          <main className="flex-1 md:pl-60">
            {children}
          </main>
        </div>

        {/* Adjust Footer to account for sidebar offset on desktop */}
        <div className="md:pl-60">
          <Footer />
        </div>

        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  );
}
