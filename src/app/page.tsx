import { Metadata } from 'next';
import { Schema } from '@/components/seo/Schema';
import { FAQ } from '@/components/ui/FAQ';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DMFirst Game',
  description: 'DMFirst is an online gaming platform offering game information, account access, login, registration and useful details about the DMFirst Game experience.',
  alternates: {
    canonical: '/',
  }
};

const faqs = [
  { question: "What is DMFirst?", answer: "DMFirst is an online entertainment platform where users can access available game categories and account features through the supported website or application." },
  { question: "How do I register?", answer: "To create an account, visit the official DMFirst website, select the Register option and provide the information requested on the registration form." },
  { question: "How do I log in?", answer: "Open the DM First website and select Login. Enter the account credentials requested by the platform." },
  { question: "What types of games are available?", answer: "The selection may include casino-style games such as roulette, blackjack and baccarat, along with mini-games, fishing formats and sports-related entertainment." },
  { question: "What payment methods are supported?", answer: "Methods may include UPI, Paytm, Google Pay, PhonePe, bank transfer and other supported digital options." },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DMFirst Game",
  "url": "https://dmfirst-ten.vercel.app/"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function Home() {
  const games = [
    { title: 'Aviator', slug: 'aviator', type: 'Crash Game', bg: 'bg-emerald-900' },
    { title: 'Roulette', slug: 'roulette', type: 'Table Game', bg: 'bg-red-900' },
    { title: 'Blackjack', slug: 'blackjack', type: 'Table Game', bg: 'bg-blue-900' },
    { title: 'Baccarat', slug: 'baccarat', type: 'Table Game', bg: 'bg-amber-900' },
    { title: 'Crash', slug: 'crash', type: 'Mini Game', bg: 'bg-purple-900' },
    { title: 'Plinko', slug: 'plinko', type: 'Mini Game', bg: 'bg-pink-900' },
  ];

  return (
    <>
      <Schema data={websiteSchema} />
      <Schema data={faqSchema} />

      {/* Hero Banner Area */}
      <section className="relative overflow-hidden bg-[var(--secondary)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 m-4 rounded-3xl border border-[var(--border)]">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[var(--primary)] opacity-20 blur-[100px]" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-3 py-1 text-sm font-medium text-[var(--primary)]">
              🎉 New Rewards Available
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--foreground)] tracking-tight">
              Play, Win,<br /> <span className="text-[var(--primary)]">Level Up.</span>
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-lg">
              Explore DMFirst for a premium gaming experience, fast cashouts, and a wide selection of entertainment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://www.dmfirst0.com/#/register?invitationCode=12651331794" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3.5 text-lg font-bold hover:bg-[var(--accent)] transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                Register Now
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center relative">
            <div className="relative h-64 w-full max-w-md animate-pulse duration-[3000ms]">
               <Image
                src="/DM-First.webp"
                alt="DMFirst Logo Large"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Games Grids */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--primary)] rounded-full"></span>
              Popular Games
            </h2>
            <Link href="/games" className="text-sm font-medium text-[var(--primary)] hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {games.map((game) => (
              <Link key={game.slug} href={`/games/${game.slug}`} className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--secondary)] border border-[var(--border)] block">
                {/* Placeholder gradient for game image since we don't have actual thumbnails */}
                <div className={`absolute inset-0 ${game.bg} opacity-50 transition-opacity group-hover:opacity-30`} />
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <span className="text-xs font-semibold text-[var(--primary)] mb-1 uppercase tracking-wider">{game.type}</span>
                  <h3 className="text-lg font-bold text-white leading-tight">{game.title}</h3>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* SEO Text Block at Bottom */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 mt-12 bg-black/20 border-t border-[var(--border)]">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          <div className="prose prose-invert prose-sm max-w-none text-[var(--muted-foreground)]">
            <p>
              DMFirst is designed as an easy-to-use online entertainment platform for users who want straightforward navigation, account tools and different game categories in one place.
            </p>

            <h2 className="text-[var(--foreground)] font-bold mt-8 mb-4">🟨 Features of DMFirst</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-8">
              <div className="p-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)]">
                <h3 className="text-[var(--foreground)] font-semibold mb-2">Wide Game Selection</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Explore different game categories from quick mini-games to table-style and sports-focused entertainment.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)]">
                <h3 className="text-[var(--foreground)] font-semibold mb-2">Play Anytime</h3>
                <p className="text-sm text-[var(--muted-foreground)]">Access your account from supported devices and move between sections with a simple interface.</p>
              </div>
            </div>

            <h2 className="text-[var(--foreground)] font-bold mt-8 mb-4">🟨 All About DMFirst Platform</h2>
            <p>DMFirst brings multiple entertainment categories into one online platform. Users can browse the available sections, sign in to an account and explore games from a mobile or desktop browser.</p>

            <h2 className="text-[var(--foreground)] font-bold mt-8 mb-4">🟨 Frequently Asked Questions About DMFirst</h2>
            <div className="not-prose">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
