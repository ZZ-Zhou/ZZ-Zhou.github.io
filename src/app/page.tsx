import Hero from "@/components/Hero";
import SectionPreview from "@/components/SectionPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <SectionPreview 
        title="Amusement & Gallery" 
        chineseTitle="影"
        description="A curated collection of moments, travels, and personal projects. Capturing the beauty of the world through a lens."
        link="/gallery"
        linkText="View Gallery"
        bgColor="bg-gray-50 dark:bg-zinc-900"
      />

      <SectionPreview 
        title="Musings" 
        chineseTitle="思"
        description="Thoughts on books, music, philosophy, and the intersection of technology and humanity."
        link="/blog"
        linkText="Read Blog"
      />

      <SectionPreview 
        title="Leisure & Hobbies" 
        chineseTitle="闲"
        description="Exploring passions beyond the code and research. From the strategy of Go to the rhythm of running."
        link="/leisure"
        linkText="Explore Hobbies"
        bgColor="bg-gray-50 dark:bg-zinc-900"
      />
    </div>
  );
}
