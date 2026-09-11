import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { blogCategories, type BlogPost } from '@/data/blog'
import { getBlogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function BlogPage() {
  const [category, setCategory] = useState('all')
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    void getBlogPosts(category).then(setPosts)
  }, [category])

  return (
    <>
      <Seo
        title="Blog"
        description="Sample guides on plotted developments, locations, and site visits."
        path="/blog"
      />
      <section className="bg-navy pb-16 pt-28 text-stone">
        <div className="container-premium">
          <SectionHeading
            light
            eyebrow="Journal"
            title="Insights & guides"
            subtitle="Placeholder articles for structure — replace with your editorial calendar."
          />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container-premium">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={cn(
                'rounded-sm px-3 py-1.5 text-sm',
                category === 'all' ? 'bg-navy text-stone' : 'bg-mist text-ink hover:bg-sand/40',
              )}
            >
              All
            </button>
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-sm px-3 py-1.5 text-sm',
                  category === c ? 'bg-navy text-stone' : 'bg-mist text-ink hover:bg-sand/40',
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="overflow-hidden border border-border bg-surface">
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Badge variant="secondary">{post.category}</Badge>
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>
                  <h2 className="mt-3 font-display text-2xl text-ink">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex text-sm font-medium text-navy underline-offset-4 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
