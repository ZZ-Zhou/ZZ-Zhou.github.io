import Link from 'next/link';

interface SectionPreviewProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  bgColor?: string;
  chineseTitle?: string;
}

const SectionPreview = ({ title, description, link, linkText, bgColor = "bg-rice-white", chineseTitle }: SectionPreviewProps) => {
  return (
    <section className={`py-24 px-8 ${bgColor} dark:bg-transparent relative overflow-hidden`}>
      {chineseTitle && (
        <div className="absolute -right-10 top-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
          <span className="font-calligraphy text-9xl text-ink-black dark:text-rice-white">{chineseTitle}</span>
        </div>
      )}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 tracking-tight text-ink-black dark:text-rice-white flex items-center justify-center gap-4">
          {title}
          {chineseTitle && <span className="font-calligraphy text-cinnabar-red text-5xl font-normal">{chineseTitle}</span>}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 text-xl font-light max-w-2xl mx-auto leading-relaxed">{description}</p>
        <Link href={link} className="inline-block border-b-2 border-ink-black dark:border-rice-white pb-1 hover:border-cinnabar-red dark:hover:border-cinnabar-red hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors uppercase tracking-widest text-sm font-semibold">
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default SectionPreview;
