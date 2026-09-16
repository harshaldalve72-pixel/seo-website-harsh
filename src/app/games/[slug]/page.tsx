import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQ } from '@/components/ui/FAQ';
import { Button } from '@/components/ui/Button';
import { Schema } from '@/components/seo/Schema';
import { Gamepad2, Info, ScrollText, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

// Define the games data
const gamesData: Record<string, any> = {
  aviator: {
    title: 'Aviator',
    category: 'Crash',
    description: 'Aviator is a revolutionary social multiplayer game consisting of an increasing curve that can crash anytime. Master your nerves and cash out before the plane flies away.',
    howItWorks: 'In Aviator, you place a bet before the round starts. A virtual plane takes off, and the multiplier increases as it flies. Your goal is to click "Cash Out" before the plane flies away (crashes). If you cash out in time, you win your bet multiplied by the coefficient. If you wait too long, you lose your bet.',
    rules: [
      'The minimum and maximum bet limits apply per round.',
      'You can place up to two simultaneous bets in a single round.',
      'The multiplier starts at 1x and grows exponentially.',
      'The game uses Provably Fair technology.'
    ],
    terms: [
      { term: 'Multiplier', definition: 'The coefficient by which your bet is multiplied if you cash out successfully.' },
      { term: 'Auto Cash Out', definition: 'A feature allowing you to set a specific multiplier at which the system will automatically cash out for you.' },
      { term: 'Provably Fair', definition: 'A cryptographic technology ensuring that game results are 100% fair and not manipulated.' }
    ],
    faq: [
      { question: 'Is Aviator a game of skill or chance?', answer: 'Aviator is primarily a game of chance. The crash point is determined by a random number generator, but players can use strategies like Auto Cash Out to manage risk.' },
      { question: 'Can I play Aviator on mobile?', answer: 'Yes, DMFirst offers a fully responsive mobile experience for Aviator.' }
    ]
  },
  roulette: {
    title: 'Roulette',
    category: 'Table Game',
    description: 'Experience the elegance and excitement of classic Roulette. Place your bets on numbers, colors, or sections and let the wheel decide your fate.',
    howItWorks: 'Players place bets on a table layout corresponding to numbers on a spinning wheel. A ball is dropped onto the spinning wheel, and eventually lands in one of the numbered pockets. Winning bets are paid out according to the paytable.',
    rules: [
      'Bets must be placed before the dealer announces "No more bets".',
      'Inside bets (specific numbers) offer higher payouts but lower odds.',
      'Outside bets (red/black, odd/even) offer lower payouts but higher odds.',
      'The house edge varies depending on whether it is European (single zero) or American (double zero) Roulette.'
    ],
    terms: [
      { term: 'Straight Up', definition: 'A bet on a single number.' },
      { term: 'Split', definition: 'A bet placed on the line between two adjacent numbers.' },
      { term: 'House Edge', definition: 'The mathematical advantage that the casino has over the player in the long run.' }
    ],
    faq: [
      { question: 'What is the difference between European and American Roulette?', answer: 'European Roulette has one zero (0), resulting in a lower house edge (2.7%). American Roulette has a zero (0) and a double zero (00), resulting in a higher house edge (5.26%).' },
      { question: 'What is the highest payout in Roulette?', answer: 'The highest payout is 35:1 for a Straight Up bet on a single number.' }
    ]
  },
  blackjack: {
    title: 'Blackjack',
    category: 'Card Game',
    description: 'Test your strategy in Blackjack, the world\'s most popular casino banking game. Beat the dealer by getting as close to 21 as possible without going over.',
    howItWorks: 'You are dealt two cards and can choose to "hit" (take another card) or "stand" (keep your current hand). Face cards are worth 10, Aces are worth 1 or 11. Your goal is to have a hand value closer to 21 than the dealer, without exceeding 21 (busting).',
    rules: [
      'The dealer must draw to 16 and stand on all 17s.',
      'Blackjack (an Ace and a 10-value card) pays 3:2.',
      'Insurance pays 2:1.',
      'You can split pairs up to 3 times.'
    ],
    terms: [
      { term: 'Hit', definition: 'Requesting an additional card from the dealer.' },
      { term: 'Stand', definition: 'Declining additional cards and ending your turn.' },
      { term: 'Double Down', definition: 'Doubling your original bet in exchange for exactly one more card.' },
      { term: 'Bust', definition: 'Exceeding a hand value of 21, resulting in an automatic loss.' }
    ],
    faq: [
      { question: 'When should I Double Down?', answer: 'Basic strategy suggests doubling down when you have a hard 10 or 11 against a dealer\'s lower upcard.' },
      { question: 'Is card counting allowed?', answer: 'While our platform uses RNGs (making card counting ineffective), our games are Provably Fair to ensure unbiased shuffling.' }
    ]
  },
  baccarat: {
    title: 'Baccarat',
    category: 'Card Game',
    description: 'Step into the sophisticated world of Baccarat. A simple yet elegant game where you bet on the Player, Banker, or Tie.',
    howItWorks: 'Two hands are dealt: the Player and the Banker. You simply bet on which hand will have a total value closest to 9. Face cards and tens count as zero, aces count as one.',
    rules: [
      'If a hand totals more than 9, the first digit is dropped (e.g., 15 becomes 5).',
      'A third card may be drawn according to predetermined rules.',
      'Winning Banker bets are usually subject to a 5% commission.',
      'Tie bets generally pay 8:1.'
    ],
    terms: [
      { term: 'Player', definition: 'One of the two hands dealt in the game. It does not refer to the customer.' },
      { term: 'Banker', definition: 'The other hand dealt. It statistically wins slightly more often than the Player hand.' },
      { term: 'Natural', definition: 'A two-card hand totaling 8 or 9.' }
    ],
    faq: [
      { question: 'Why is there a commission on the Banker bet?', answer: 'The Banker hand acts last, giving it a slight statistical advantage. The commission balances the odds.' },
      { question: 'What is the best bet in Baccarat?', answer: 'Mathematically, the Banker bet is the best option due to having the lowest house edge, even after the commission.' }
    ]
  },
  crash: {
    title: 'Crash',
    category: 'Crash',
    description: 'A high-adrenaline game of timing and nerve. Watch the multiplier climb, but cash out before the inevitable crash.',
    howItWorks: 'Place your wager before the round begins. A graph showing an increasing multiplier will start. The longer you wait, the higher the multiplier. However, the graph can "crash" at any moment. You must cash out before the crash to win your bet multiplied by the current value.',
    rules: [
      'The crash point is generated randomly before the round starts.',
      'If the graph crashes before you cash out, you lose your wager.',
      'You can use the Auto Cash Out feature to automatically secure profits at a set multiplier.'
    ],
    terms: [
      { term: 'Multiplier', definition: 'The current value by which your bet will be multiplied if you cash out.' },
      { term: 'Crash Point', definition: 'The predetermined, randomly generated multiplier at which the round ends.' },
      { term: 'Auto Bet', definition: 'A feature to automatically place bets for consecutive rounds.' }
    ],
    faq: [
      { question: 'Is the Crash point truly random?', answer: 'Yes. We use Provably Fair algorithms that allow you to independently verify the randomness of every round.' },
      { question: 'What happens if my connection drops?', answer: 'We strongly recommend using Auto Cash Out. If you disconnect without Auto Cash Out set, the game continues until you crash or the server registers a timeout.' }
    ]
  },
  plinko: {
    title: 'Plinko',
    category: 'Arcade',
    description: 'Experience the mesmerizing drop of Plinko. A simple game of gravity and chance with exciting payout multipliers.',
    howItWorks: 'Choose your bet amount and risk level. A ball is dropped from the top of a triangular pyramid of pegs. It bounces randomly down to the bottom, landing in one of the multiplier slots. Your bet is multiplied by the value of the slot it lands in.',
    rules: [
      'You can adjust the number of rows (pegs) to change the variance.',
      'Higher risk levels increase the potential multipliers on the edges, but decrease the multipliers in the center.',
      'Payouts are guaranteed; every slot has a multiplier (though some may be less than 1x).'
    ],
    terms: [
      { term: 'Risk Level', definition: 'A setting that adjusts the distribution of multipliers at the bottom.' },
      { term: 'Rows', definition: 'The number of vertical levels of pegs the ball must bounce through.' },
      { term: 'Multiplier Slot', definition: 'The pockets at the bottom of the board that determine the payout.' }
    ],
    faq: [
      { question: 'Can I control where the ball lands?', answer: 'No. The path of the ball is entirely determined by a Provably Fair random number generator.' },
      { question: 'What is the best strategy for Plinko?', answer: 'Plinko is a game of pure chance. Choose a risk level and row count that matches your preferred variance and bankroll management strategy.' }
    ]
  },
  hilo: {
    title: 'Hilo',
    category: 'Card Game',
    description: 'A fast-paced guessing game. Will the next card be higher or lower? Trust your intuition and build your multiplier.',
    howItWorks: 'A base card is dealt face up. You must predict whether the next card drawn will be higher, lower, or the same value. Correct predictions increase your payout multiplier. You can cash out your winnings at any time or keep guessing to increase the multiplier.',
    rules: [
      'Aces are usually low (1) and Kings are high (13), but rules can vary.',
      'Guessing "Higher" on a high card offers a higher multiplier due to the lower probability, and vice versa.',
      'If you guess incorrectly, you lose your accumulated winnings for that round.'
    ],
    terms: [
      { term: 'Base Card', definition: 'The currently visible card against which you make your prediction.' },
      { term: 'Skip', definition: 'An option (if available) to discard the current base card and draw a new one without placing a bet.' },
      { term: 'Cash Out', definition: 'Securing your accumulated winnings and ending the current round.' }
    ],
    faq: [
      { question: 'What happens if the next card is the exact same value?', answer: 'This depends on the specific Hilo variant. Some offer a specific "Tie" or "Same" bet option, while others might result in a loss if you chose strictly Higher or Lower.' },
      { question: 'Is it better to cash out early?', answer: 'It depends on your risk tolerance. Cashing out early guarantees smaller profits, while building a streak offers higher rewards but greater risk of losing it all.' }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(gamesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const game = gamesData[params.slug];

  if (!game) {
    return { title: 'Game Not Found' };
  }

  const oldTitle = `${game.title} - Play Online | DMFirst Games`;
  const oldDescription = `Learn how to play ${game.title} on DMFirst. Read the rules, understand the terminology, and play responsibly.`;
  const url = `https://dmfirst-ten.vercel.app/games/${params.slug}`;

  const seoMap: Record<string, { title: string, description: string }> = {
    aviator: { title: "Aviator Online | How to Play | DMFirst", description: "Learn how to play Aviator online at DMFirst, including the basic gameplay, rules and features of the game." },
    roulette: { title: "Roulette Online | How to Play | DMFirst", description: "Learn how to play Roulette online at DMFirst, including the basic gameplay, rules and features of the game." },
    blackjack: { title: "Blackjack Online | How to Play | DMFirst", description: "Learn how to play Blackjack online at DMFirst, including the basic gameplay, rules and features of the game." },
    baccarat: { title: "Baccarat Online | How to Play | DMFirst", description: "Learn how to play Baccarat online at DMFirst, including the basic gameplay, rules and features of the game." },
    crash: { title: "Crash Games Online | How to Play | DMFirst", description: "Learn how to play Crash games online at DMFirst, including the basic gameplay, rules and features of the game." },
    plinko: { title: "Plinko Online | How to Play | DMFirst", description: "Learn how to play Plinko online at DMFirst, including the basic gameplay, rules and features of the game." },
    hilo: { title: "Hi-Lo Online | How to Play | DMFirst", description: "Learn how to play Hi-Lo online at DMFirst, including the basic gameplay, rules and features of the game." },
  };

  const title = seoMap[params.slug]?.title || oldTitle;
  const description = seoMap[params.slug]?.description || oldDescription;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: oldTitle,
      description: oldDescription,
      url,
    },
    twitter: {
      title: oldTitle,
      description: oldDescription,
    },
  };
}

export default async function GamePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const game = gamesData[params.slug];

  if (!game) {
    notFound();
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${game.title} Game Rules and Information`,
    description: game.description,
    mainEntity: {
      '@type': 'Article',
      headline: `How to play ${game.title}`,
      articleSection: 'Gaming Guides'
    }
  };

  const breadcrumbs = [
    { name: 'Games', url: '/games' },
    { name: game.title, url: `/games/${params.slug}` }
  ];

  const h1Map: Record<string, string> = {
    aviator: 'How to Play Aviator Online',
    roulette: 'How to Play Roulette Online',
    blackjack: 'How to Play Blackjack Online',
    baccarat: 'How to Play Baccarat Online',
    crash: 'How to Play Crash Games Online',
    plinko: 'How to Play Plinko Online',
    hilo: 'How to Play Hi-Lo Online',
  };

  return (
    <>
      <Schema data={schemaData} />
      
      {/* Game Header */}
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between mt-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white bg-[var(--primary)] rounded-full">
                {game.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {h1Map[params.slug] || game.title}
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] text-balance">
                {game.description}
              </p>
              <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                Looking for more? Browse all <Link href="/games" className="text-[var(--primary)] hover:underline">online casino games</Link> or try our popular <Link href="/games/crash" className="text-[var(--primary)] hover:underline">Crash games</Link>.
              </p>
            </div>
            
            <div className="bg-[var(--card)] p-6 rounded-2xl border border-[var(--border)] min-w-[300px] flex-shrink-0 w-full md:w-auto shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-center">Ready to play?</h3>
              <div className="flex flex-col gap-3">
                <Button href="https://www.dmfirst0.com" size="lg" className="w-full">
                  Play {game.title} Now
                </Button>
                <p className="text-xs text-center text-[var(--muted-foreground)] mt-2">
                  18+. Please play responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              <section aria-labelledby="how-it-works">
                <div className="flex items-center gap-3 mb-6">
                  <Gamepad2 className="h-8 w-8 text-[var(--primary)]" />
                  <h2 id="how-it-works" className="text-3xl font-bold">What is {game.title}?</h2>
                </div>
                <div className="prose prose-invert max-w-none text-[var(--muted-foreground)]">
                  <p className="text-lg leading-relaxed">{game.howItWorks}</p>
                </div>
              </section>

              <section aria-labelledby="rules">
                <div className="flex items-center gap-3 mb-6">
                  <ScrollText className="h-8 w-8 text-[var(--primary)]" />
                  <h2 id="rules" className="text-3xl font-bold">Rules & Gameplay</h2>
                </div>
                <ul className="space-y-4">
                  {game.rules.map((rule: string, index: number) => (
                    <li key={index} className="flex gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-bold">
                        {index + 1}
                      </div>
                      <p className="text-[var(--muted-foreground)] pt-1">{rule}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="terminology">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="h-8 w-8 text-[var(--primary)]" />
                  <h2 id="terminology" className="text-3xl font-bold">Important Terminology</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.terms.map((term: any, index: number) => (
                    <div key={index} className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                      <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{term.term}</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-[var(--secondary)] border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="font-bold">Responsible Gaming</h3>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                  Set limits before you start playing {game.title}. Never chase losses and only wager what you can afford to lose.
                </p>
                <Button href="/responsible-gaming" variant="outline" className="w-full text-sm">
                  Read our guide
                </Button>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
                <h3 className="font-bold mb-4">Platform Features</h3>
                <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> Provably Fair technology
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> Instant Crypto Deposits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> 24/7 Live Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" /> VIP Cashback
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[var(--secondary)] border-t border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <FAQ items={game.faq} title={`${game.title} FAQs`} />
        </div>
      </div>
    </>
  );
}
