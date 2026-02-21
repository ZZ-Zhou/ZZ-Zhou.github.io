export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-tighter">About Me</h1>
      
      <div className="prose dark:prose-invert mx-auto text-center">
        <p className="text-xl leading-relaxed mb-6 font-light">
          I am a Research Scientist and Software Engineer with a passion for solving complex problems and building elegant solutions.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          My professional work revolves around artificial intelligence and distributed systems, where I strive to bridge the gap between theoretical research and practical application.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Beyond the screen and the lab, I am an avid explorer of the world, a lover of arts, and a lifelong learner. This website serves as a canvas for my personal journey—a place to share the moments, thoughts, and hobbies that define who I am outside of my career.
        </p>
      </div>
    </div>
  );
}
