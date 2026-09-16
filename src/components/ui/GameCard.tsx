import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  slug: string;
  description: string;
  imageUrl?: string;
  category: string;
}

export function GameCard({ title, slug, description, imageUrl, category }: GameCardProps) {
  return (
    <Link 
      href={`/games/${slug}`}
      className="group flex flex-col rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] transition-all hover:border-[var(--primary)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1"
    >
      <div className="relative aspect-video w-full bg-[var(--muted)] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} game preview`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--secondary)] to-[var(--background)]">
            <span className="text-4xl font-bold text-[var(--muted-foreground)] opacity-20">{title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-[var(--primary)] text-white">
          {category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-4 flex-1">
          {description}
        </p>
        <div className="text-sm font-medium text-[var(--primary)] group-hover:underline">
          Play Now →
        </div>
      </div>
    </Link>
  );
}
