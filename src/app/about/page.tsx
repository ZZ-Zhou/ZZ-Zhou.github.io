export default function About() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl relative">
      <div className="absolute top-10 right-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">知</span>
      </div>

      <h1 className="text-5xl font-bold mb-12 text-center tracking-tighter flex items-center justify-center gap-4">
        About
        <span className="font-calligraphy text-cinnabar-red text-6xl font-normal">关于</span>
      </h1>

      <div className="prose dark:prose-invert mx-auto text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
        <p className="text-2xl mb-8 text-ink-black dark:text-rice-white font-bold text-center">
          Researcher, engineer, and systems thinker—Bridging the gap between algorithms and the open road.
        </p>

        <p className="mb-6">
          I'm a researcher and engineer dedicated to figuring out one of the world's most complex puzzles: how people move. By translating mathematical rigor and AI into human-centered mobility solutions, I help planners and operators build cities that actually work for the people living in them.
        </p>

        <p className="mb-6">
          With a deep background in <strong>Transportation System Engineering and computational mathematics</strong>, I don't just look at traffic—I look at the systems behind it. From building simulation software to refining travel demand models, my work is grounded in operations research and a "systems-first" mindset.
        </p>

        <p className="mb-6">
          <strong>Beyond the data...</strong><br></br> 
          When I'm not modeling traffic flows, you'll likely find me engaged in a different kind of strategy over a game of Go, running or swimming to clear my head, or lost in a film. This site is a collection of my professional curiosities and the everyday moments in between—a blend of technical heritage and modern practice.
        </p>
      </div>
    </div>
  );
}
