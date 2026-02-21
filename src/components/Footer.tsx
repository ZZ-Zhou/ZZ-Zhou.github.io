const Footer = () => {
  return (
    <footer className="w-full py-8 px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-100 dark:border-gray-800 mt-auto bg-white dark:bg-black">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ZZ Zhou. All rights reserved.
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0">
        {/* Social placeholders */}
        <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
        <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
