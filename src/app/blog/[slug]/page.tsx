import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl relative">
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">{post.chineseTitle}</span>
      </div>

      <div className="mb-12">
        <Link
          href="/blog"
          className="text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-cinnabar-red transition-colors"
        >
          ← Back to Musings
        </Link>
      </div>

      <div className="text-sm font-bold uppercase tracking-widest text-cinnabar-red mb-4">
        {post.category} &bull; {post.date}
      </div>

      <h1 className="text-5xl font-bold mb-12 tracking-tighter text-ink-black dark:text-rice-white">
        {post.title}
      </h1>

      <div
        className="prose dark:prose-invert prose-lg max-w-none font-light text-gray-700 dark:text-gray-300 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cinnabar-red prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
