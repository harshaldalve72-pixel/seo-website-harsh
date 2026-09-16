import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author?: string;
  category?: string;
}

export function ArticleCard({ title, slug, excerpt, date, author, category }: ArticleCardProps) {
  return (
    <article className="group flex flex-col rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] transition-all hover:border-[var(--accent)] hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="flex-1 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4 text-xs font-medium text-[var(--muted-foreground)]">
          <time dateTime={new Date(date).toISOString()}>{date}</time>
          {category && (
            <>
              <span aria-hidden="true">&bull;</span>
              <span className="text-[var(--accent)] uppercase tracking-wider">{category}</span>
            </>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-[var(--muted-foreground)] mb-5 flex-1 text-balance">
          {excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="text-xs text-[var(--muted-foreground)]">
            {author ? `By ${author}` : 'DMFirst Team'}
          </span>
          <span className="text-sm font-medium text-[var(--primary)] group-hover:underline">
            Read Article
          </span>
        </div>
      </Link>
    </article>
  );
}
