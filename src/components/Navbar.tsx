'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog',    label: 'Musings' },
  { href: '/leisure', label: 'Leisure' },
  { href: '/about',   label: 'About'   },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-rice-white dark:bg-ink-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 opacity-95 backdrop-blur">
      {/* Top bar */}
      <div className="px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <Link href="/" onClick={() => setOpen(false)}>ZZ ZHOU</Link>
          <span className="font-calligraphy text-cinnabar-red text-3xl font-normal mt-1">周</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors ${
                pathname === href ? 'text-cinnabar-red' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-gray-600 dark:text-gray-300"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 border-t border-gray-200 dark:border-gray-800' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-8 py-4 space-y-4 text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors py-1 ${
                pathname === href ? 'text-cinnabar-red' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
