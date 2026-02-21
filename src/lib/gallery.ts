import fs from 'fs';
import path from 'path';

export interface AlbumMeta {
  slug: string;
  title: string;
  chineseTitle: string;
  date: string;
  excerpt: string;
  cover?: string; // filename inside the album folder, e.g. "IMG_001.jpg"
}

const publicGallery = path.join(process.cwd(), 'public', 'gallery');
const contentGallery = path.join(process.cwd(), 'src', 'content', 'gallery');

export function getAllAlbums(): AlbumMeta[] {
  if (!fs.existsSync(publicGallery)) return [];

  const dirs = fs
    .readdirSync(publicGallery)
    .filter((d) => fs.statSync(path.join(publicGallery, d)).isDirectory());

  const albums = dirs.map((slug) => {
    const metaPath = path.join(contentGallery, `${slug}.json`);
    let meta: Partial<AlbumMeta> = {};
    if (fs.existsSync(metaPath)) {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    }

    // Auto-pick first image as cover if not set
    const images = getAlbumImages(slug);
    const cover = meta.cover ?? (images.length > 0 ? path.basename(images[0]) : undefined);

    return {
      slug,
      title: meta.title ?? slug,
      chineseTitle: meta.chineseTitle ?? '图',
      date: meta.date ?? '',
      excerpt: meta.excerpt ?? '',
      cover,
    } as AlbumMeta;
  });

  // Sort newest first
  return albums.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAlbumImages(slug: string): string[] {
  const dir = path.join(publicGallery, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
    .sort()
    .map((f) => `/gallery/${slug}/${f}`);
}

export function getAlbumMeta(slug: string): AlbumMeta | null {
  const metaPath = path.join(contentGallery, `${slug}.json`);
  if (!fs.existsSync(metaPath)) return null;
  const meta: Partial<AlbumMeta> = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const images = getAlbumImages(slug);
  const cover = meta.cover ?? (images.length > 0 ? path.basename(images[0]) : undefined);
  return {
    slug,
    title: meta.title ?? slug,
    chineseTitle: meta.chineseTitle ?? '图',
    date: meta.date ?? '',
    excerpt: meta.excerpt ?? '',
    cover,
  };
}
