import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getBlogPostBySlug } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/data/blog'

export function BlogDetailsPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)

  useEffect(() => {
    if (!slug) return
    void getBlogPostBySlug(slug).then((p) => setPost(p ?? null))
  }, [slug])

  if (post === undefined) {
    return <div className="container-premium py-40 text-muted">Loading article…</div>
  }

  if (!post) {
    return (
      <div className="container-premium py-40 text-center">
        <h1 className="font-display text-4xl">Article not found</h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.coverImage}
        type="article"
      />
      <article>
        <header className="bg-navy pb-12 pt-28 text-stone">
          <div className="container-premium max-w-3xl">
            <Badge variant="accent">{post.category}</Badge>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-mist/80">
              {post.author} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{' '}
              · {post.readTime}
            </p>
          </div>
        </header>
        <img
          src={post.coverImage}
          alt=""
          className="mx-auto aspect-[21/9] w-full max-w-5xl object-cover"
        />
        <div className="container-premium max-w-3xl py-12 md:py-16">
          {post.content.map((para) => (
            <p key={para.slice(0, 32)} className="mt-5 text-base leading-relaxed text-muted first:mt-0">
              {para}
            </p>
          ))}
          <Button asChild variant="outline" className="mt-10">
            <Link to="/blog">All articles</Link>
          </Button>
        </div>
      </article>
    </>
  )
}
