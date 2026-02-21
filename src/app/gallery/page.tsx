import Link from 'next/link';
import { getAllAlbums } from '@/lib/gallery';

export default function Gallery() {
  const albums = getAllAlbums();

  return (
    <div className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">影</span>
      </div>

      <h1 className="text-5xl font-bold mb-16 text-center tracking-tighter flex items-center justify-center gap-4">
        Gallery
        <span className="font-calligraphy text-cinnabar-red text-6xl font-normal">相册</span>
      </h1>

      {albums.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 font-light text-lg">
          No albums yet — add one in <code>src/content/gallery/</code> and <code>public/gallery/</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              className="group block bg-white dark:bg-zinc-900 rounded-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Cover image */}
              <div className="relative aspect-video bg-gray-100 dark:bg-zinc-800 overflow-hidden">
                {album.cover ? (
                  <img
                    src={`/gallery/${album.slug}/${album.cover}`}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="font-calligraphy text-7xl text-gray-300 dark:text-zinc-600">
                      {album.chineseTitle}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 relative overflow-hidden">
                <div className="absolute -right-3 -bottom-3 opacity-10 pointer-events-none select-none">
                  <span className="font-calligraphy text-8xl text-ink-black dark:text-rice-white">
                    {album.chineseTitle}
                  </span>
                </div>
                {album.date && (
                  <div className="text-xs font-bold uppercase tracking-widest text-cinnabar-red mb-2">
                    {album.date}
                  </div>
                )}
                <h2 className="text-xl font-bold mb-1 text-ink-black dark:text-rice-white group-hover:text-cinnabar-red transition-colors">
                  {album.title}
                </h2>
                {album.excerpt && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">{album.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
