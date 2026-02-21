import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl relative">
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">思</span>
      </div>

      <h1 className="text-5xl font-bold mb-16 text-center tracking-tighter flex items-center justify-center gap-4">
        Musings
        <span className="font-calligraphy text-cinnabar-red text-6xl font-normal">随笔</span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 font-light text-lg">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-16 last:border-0 relative group">
              <div className="absolute -left-10 top-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none select-none hidden md:block">
                <span className="font-calligraphy text-9xl text-ink-black dark:text-rice-white">{post.chineseTitle}</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-cinnabar-red mb-3">
                {post.category} &bull; {post.date}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-ink-black dark:text-rice-white hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg font-light">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold border-b-2 border-ink-black dark:border-rice-white pb-1 hover:border-cinnabar-red dark:hover:border-cinnabar-red hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors uppercase tracking-widest"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
