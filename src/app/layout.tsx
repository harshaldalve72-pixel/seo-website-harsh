import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';


const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dmfirst-ten.vercel.app'),
  title: {
    default: 'DMFirst Game - Premium Online Gaming',
    template: '%s | DMFirst'
  },
  description: 'DMFirst is a premium online gaming platform offering fast payouts, fair games, and an exceptional user experience.',
  applicationName: 'DMFirst',
  keywords: [
    'DMFirst',
    'online gaming',
    'casino games',
    'Aviator game',
    'roulette',
    'blackjack',
    'baccarat',
  ],
  authors: [{ name: 'DMFirst' }],
  creator: 'DMFirst',
  publisher: 'DMFirst',
  category: 'entertainment',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'DMFirst',
    title: 'DMFirst Game - Premium Online Gaming',
    description: 'Explore games, rewards, account tools, and platform information from DMFirst.',
  },
  twitter: {
    card: 'summary',
    title: 'DMFirst Game - Premium Online Gaming',
    description: 'Explore games, rewards, account tools, and platform information from DMFirst.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'SXjZIfkl532S1vJSBcdQxYohWUwOa9VOlXe6arQPWQc',
  },
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
