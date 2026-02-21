const hobbies = [
  { title: "Hiking", description: "Exploring the great outdoors.", icon: "🏔️" },
  { title: "Photography", description: "Capturing moments in time.", icon: "📷" },
  { title: "Cooking", description: "Experimenting with flavors.", icon: "🍳" },
  { title: "Gaming", description: "Immersive storytelling.", icon: "🎮" },
];

export default function Leisure() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center tracking-tighter">Leisure & Hobbies</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="flex flex-col items-center p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-6xl mb-4">{hobby.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
