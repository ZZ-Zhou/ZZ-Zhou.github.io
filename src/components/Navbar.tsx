import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 opacity-95 backdrop-blur">
      <div className="text-xl font-bold tracking-tighter">
        <Link href="/">ZZ ZHOU</Link>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
        <Link href="/gallery" className="hover:text-black dark:hover:text-white transition-colors">Gallery</Link>
        <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Musings</Link>
        <Link href="/leisure" className="hover:text-black dark:hover:text-white transition-colors">Leisure</Link>
        <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
      </div>
      {/* Mobile menu placeholder */}
      <div className="md:hidden">
        <button className="text-gray-600 dark:text-gray-300">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
