import { GameCard } from '@/components/ui/GameCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Schema } from '@/components/seo/Schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMFirst Games – Explore Available Games',
  description: 'Explore the games available on DMFirst and learn about their features, rules, and platform information. Play Crash, Roulette, Blackjack and more.',
};

const allGames = [
  {
    title: 'Aviator',
    slug: 'aviator',
    description: 'The ultimate social multiplayer crash game. Cash out before the multiplier crashes.',
    category: 'Crash'
  },
  {
    title: 'Roulette',
    slug: 'roulette',
    description: 'Classic European and American roulette variants with stunning graphics and realistic physics.',
    category: 'Table Game'
  },
  {
    title: 'Blackjack',
    slug: 'blackjack',
    description: 'Aim for 21 in this strategic card game. Multiple tables available with varying stakes.',
    category: 'Card Game'
  },
  {
    title: 'Baccarat',
    slug: 'baccarat',
    description: 'The sophisticated card game of choice for high rollers. Bet on Player, Banker, or Tie.',
    category: 'Card Game'
  },
  {
    title: 'Crash',
    slug: 'crash',
    description: 'A thrilling game of timing. The multiplier rises, but will you cash out before it crashes?',
    category: 'Crash'
  },
  {
    title: 'Plinko',
    slug: 'plinko',
    description: 'Drop the ball down the pegged board. A relaxing game with exciting payout potential.',
    category: 'Arcade'
  },
  {
    title: 'Hilo',
    slug: 'hilo',
    description: 'Guess whether the next card will be higher or lower. Simple, fast-paced, and fun.',
    category: 'Card Game'
  }
];

export default function GamesPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'DMFirst Games Collection',
    description: 'Browse the complete collection of online casino games available on DMFirst.',
    url: 'https://dmfirst-ten.vercel.app/games'
  };

  return (
    <>
      <Schema data={schemaData} />
      
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Games', url: '/games' }]} />
          <h1 className="text-4xl font-bold mb-4">All Games</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl text-lg">
            Dive into our premium collection of games. From classic table games to innovative crash mechanics, we offer a fair and thrilling experience for everyone.
          </p>
        </div>
      </div>

      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allGames.map((game) => (
              <GameCard key={game.slug} {...game} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
