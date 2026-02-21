export default function Gallery() {
  const items = Array.from({ length: 9 }).map((_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-tighter">Gallery</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        A visual journal of my life, travels, and the things that inspire me.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item} className="group relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-sm">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                Photo / Video {item}
             </div>
             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
