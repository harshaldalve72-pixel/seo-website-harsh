import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Schema } from '@/components/seo/Schema';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Construct schema for breadcrumbs
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dmfirst-ten.vercel.app/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `https://dmfirst-ten.vercel.app${item.url}`,
      })),
    ],
  };

  return (
    <>
      <Schema data={schemaData} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-[var(--muted-foreground)] flex-wrap">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-[var(--primary)] transition-colors"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.url} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-[var(--muted)]" aria-hidden="true" />
                {isLast ? (
                  <span 
                    className="font-medium text-[var(--foreground)]" 
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.url} 
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
