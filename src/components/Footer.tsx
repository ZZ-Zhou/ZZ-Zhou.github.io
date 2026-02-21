const Footer = () => {
  return (
    <footer className="w-full py-8 px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-800 mt-auto bg-rice-white dark:bg-ink-black">
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        &copy; {new Date().getFullYear()} ZZ Zhou. All rights reserved.
        <span className="font-calligraphy text-cinnabar-red text-xl">周</span>
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0">
        {/* Social placeholders */}
        <a href="#" className="text-gray-400 hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">GitHub</a>
        <a href="#" className="text-gray-400 hover:text-cinnabar-red dark:hover:text-cinnabar-red transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
