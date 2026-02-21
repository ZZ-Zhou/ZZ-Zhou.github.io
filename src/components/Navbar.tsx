import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-rice-white dark:bg-ink-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 opacity-95 backdrop-blur">
      <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
        <Link href="/">ZZ ZHOU</Link>
        <span className="font-calligraphy text-cinnabar-red text-3xl font-normal mt-1">周</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
        <Link href="/gallery" className="hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">Gallery</Link>
        <Link href="/blog" className="hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">Musings</Link>
        <Link href="/leisure" className="hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">Leisure</Link>
        <Link href="/about" className="hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">About</Link>
      </div>
      {/* Mobile menu placeholder */}
      <div className="md:hidden">
        <button className="text-gray-600 dark:text-gray-300">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
