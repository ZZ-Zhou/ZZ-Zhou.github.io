import Link from 'next/link';
import { getAllAlbums, getAlbumImages, getAlbumMeta } from '@/lib/gallery';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllAlbums().map((a) => ({ slug: a.slug }));
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getAlbumMeta(slug);
  const images = getAlbumImages(slug);

  if (!meta && images.length === 0) notFound();

  const title = meta?.title ?? slug;
  const chineseTitle = meta?.chineseTitle ?? '图';

  return (
    <div className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">{chineseTitle}</span>
      </div>

      <div className="mb-12">
        <Link
          href="/gallery"
          className="text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-cinnabar-red transition-colors"
        >
          ← Back to Gallery
        </Link>
      </div>

      {meta?.date && (
        <div className="text-sm font-bold uppercase tracking-widest text-cinnabar-red mb-4 text-center">
          {meta.date}
        </div>
      )}

      <h1 className="text-5xl font-bold mb-4 text-center tracking-tighter flex items-center justify-center gap-4">
        {title}
        <span className="font-calligraphy text-cinnabar-red text-6xl font-normal">{chineseTitle}</span>
      </h1>

      {meta?.excerpt && (
        <p className="text-center text-gray-500 dark:text-gray-400 font-light mb-16 max-w-xl mx-auto">
          {meta.excerpt}
        </p>
      )}

      {images.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 font-light text-lg mt-16">
          No photos yet — add images to <code>public/gallery/{slug}/</code>.
        </p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="w-full rounded-sm break-inside-avoid hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      )}
    </div>
  );
}
