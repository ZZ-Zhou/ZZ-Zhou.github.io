import Link from "next/link";

const posts = [
  {
    slug: "reading-list-2024",
    title: "My 2024 Reading List",
    date: "October 15, 2024",
    excerpt: "A collection of books that have shaped my thinking this year, from philosophy to sci-fi.",
    category: "Books"
  },
  {
    slug: "travel-kyoto",
    title: "Autumn in Kyoto",
    date: "September 2, 2024",
    excerpt: "Wandering through the temples and streets of Japan's ancient capital.",
    category: "Travel"
  },
  {
    slug: "thoughts-on-ai",
    title: "The Human Side of AI",
    date: "August 10, 2024",
    excerpt: "Reflecting on how artificial intelligence intersects with our daily lives and creativity.",
    category: "Philosophy"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-12 text-center tracking-tighter">Musings</h1>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 dark:border-gray-800 pb-12 last:border-0">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              {post.category} &bull; {post.date}
            </div>
            <h2 className="text-2xl font-bold mb-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <Link href={`/blog`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <Link href={`/blog`} className="text-sm font-semibold border-b border-black dark:border-white pb-0.5 hover:opacity-70">
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
