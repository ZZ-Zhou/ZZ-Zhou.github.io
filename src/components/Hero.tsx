import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-rice-white dark:bg-ink-black">
      {/* Subtle traditional background element */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none flex items-center justify-center">
        <span className="font-calligraphy text-[40rem] text-ink-black dark:text-rice-white select-none">道</span>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-ink-black dark:text-rice-white">
          Life in Motion
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
          Research Scientist & Software Engineer. <br className="hidden md:block" />
          Exploring mobility, AI, and the art of living.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/about" className="px-8 py-3 bg-ink-black text-rice-white dark:bg-rice-white dark:text-ink-black rounded-sm hover:bg-cinnabar-red dark:hover:bg-cinnabar-red hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
