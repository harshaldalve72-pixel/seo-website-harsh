import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dmfirst-ten.vercel.app';
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/faq',
    '/games',
    '/payment-methods',
    '/privacy-policy',
    '/referral',
    '/responsible-gaming',
    '/rewards',
    '/terms',
    '/vip',
    '/withdrawals',
  ];

  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Game routes
  const games = ['aviator', 'roulette', 'blackjack', 'baccarat', 'crash', 'plinko', 'hilo'];
  const gamesSitemap: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/games/${game}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic Blog routes
  const blogs = ['beginners-guide', 'gaming-terminology', 'payment-methods-guide'];
  const blogSitemap: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticSitemap, ...gamesSitemap, ...blogSitemap];
}
