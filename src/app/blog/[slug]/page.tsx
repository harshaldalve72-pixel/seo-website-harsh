import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Schema } from '@/components/seo/Schema';
import type { Metadata } from 'next';
import { blogPosts } from '../page';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | DMFirst Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    }
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'DMFirst Team'
    }
  };

  const breadcrumbs = [
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <>
      <Schema data={schemaData} />
      
      <div className="bg-[var(--secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mt-8">
            <div className="flex items-center gap-4 text-sm font-medium text-[var(--accent)] mb-4 uppercase tracking-wider">
              <span>{post.category}</span>
              <span className="text-[var(--muted-foreground)]">&bull;</span>
              <time className="text-[var(--muted-foreground)]" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
            <p className="text-xl text-[var(--muted-foreground)] leading-relaxed text-balance">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      <article className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none text-[var(--muted-foreground)]">
            <p>{post.content}</p>
            {/* Extended dummy content for structure */}
            <h2>Conclusion</h2>
            <p>
              Always remember that playing on DMFirst should be about entertainment. Apply the knowledge from this guide, use our responsible gaming tools, and most importantly, have fun!
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
