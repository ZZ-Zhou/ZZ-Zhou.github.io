const hobbies = [
  { title: "Reading", chineseTitle: "读", description: "Immersing in literature, philosophy, and history.", icon: "📚" },
  { title: "Travel", chineseTitle: "游", description: "Exploring new cultures and landscapes.", icon: "✈️" },
  { title: "Go (Weiqi)", chineseTitle: "棋", description: "The ancient game of strategy and balance.", icon: "⚫⚪" },
  { title: "Music", chineseTitle: "乐", description: "Finding rhythm and harmony in daily life.", icon: "🎵" },
  { title: "Running", chineseTitle: "跑", description: "Endurance, focus, and moving forward.", icon: "🏃" },
  { title: "Swimming", chineseTitle: "泳", description: "Fluidity and strength in the water.", icon: "🏊" },
  { title: "Movies", chineseTitle: "影", description: "Visual storytelling and cinematic art.", icon: "🎬" },
];

export default function Leisure() {
  return (
    <div className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-10 left-10 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <span className="font-calligraphy text-[15rem] text-ink-black dark:text-rice-white">闲</span>
      </div>
      
      <h1 className="text-5xl font-bold mb-16 text-center tracking-tighter flex items-center justify-center gap-4">
        Leisure & Hobbies
        <span className="font-calligraphy text-cinnabar-red text-6xl font-normal">雅趣</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="flex flex-col items-center p-10 bg-white dark:bg-zinc-900 rounded-sm text-center hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none">
              <span className="font-calligraphy text-9xl text-ink-black dark:text-rice-white">{hobby.chineseTitle}</span>
            </div>
            <div className="text-6xl mb-6 relative z-10">{hobby.icon}</div>
            <h3 className="text-2xl font-bold mb-3 relative z-10 text-ink-black dark:text-rice-white">{hobby.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light relative z-10">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
