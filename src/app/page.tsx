import Hero from "@/components/Hero";
import SectionPreview from "@/components/SectionPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <SectionPreview 
        title="Amusement & Gallery" 
        description="A curated collection of moments, travels, and personal projects."
        link="/gallery"
        linkText="View Gallery"
        bgColor="bg-gray-50 dark:bg-zinc-900"
      />

      <SectionPreview 
        title="Musings" 
        description="Thoughts on books, music, philosophy, and the world around us."
        link="/blog"
        linkText="Read Blog"
      />

      <SectionPreview 
        title="Leisure & Hobbies" 
        description="Exploring passions beyond the code and research."
        link="/leisure"
        linkText="Explore Hobbies"
        bgColor="bg-gray-50 dark:bg-zinc-900"
      />
    </div>
  );
}
