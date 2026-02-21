import Link from 'next/link';

interface SectionPreviewProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  bgColor?: string;
}

const SectionPreview = ({ title, description, link, linkText, bgColor = "bg-white" }: SectionPreviewProps) => {
  return (
    <section className={`py-16 px-8 ${bgColor} dark:bg-transparent`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{description}</p>
        <Link href={link} className="inline-block border-b-2 border-black dark:border-white pb-1 hover:opacity-70 transition-opacity uppercase tracking-widest text-sm font-semibold">
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default SectionPreview;
