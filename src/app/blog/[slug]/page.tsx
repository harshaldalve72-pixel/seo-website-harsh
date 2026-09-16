import { notFound } from 'next/navigation';
import Link from 'next/link';
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

  const title = `${post.title} | DMFirst Blog`;
  const description = post.excerpt;
  const url = `https://dmfirst-ten.vercel.app/blog/${params.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      title,
      description,
    },
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
              Always remember that playing on DMFirst should be about entertainment. Apply the knowledge from this guide, use our <Link href="/responsible-gaming" className="text-[var(--primary)] hover:underline">responsible gaming tools</Link>, and most importantly, have fun!
            </p>
            <p className="mt-4 pt-4 border-t border-[var(--border)] text-sm">
              Read more in our <Link href="/blog" className="text-[var(--primary)] hover:underline">Gaming Blog</Link> or start playing <Link href="/games" className="text-[var(--primary)] hover:underline">available games</Link> now.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
