import { FaStar } from "react-icons/fa";
import { useMemo } from "react";

const gradients = [
  "from-red-500 to-orange-500",
  "from-blue-500 to-purple-500",
  "from-green-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-sky-500",
];

export default function ReviewCard({ rating = 5, text, name }) {
  // First letter of first name
  const initial = name?.split(" ")[0]?.charAt(0) ?? "?";

  // Pick a random gradient ONCE per card
  const avatarGradient = useMemo(() => {
    return gradients[Math.floor(Math.random() * gradients.length)];
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
      {/* Stars */}
      <div className="flex items-center gap-1 text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <FaStar
            key={idx}
            className={idx < rating ? "opacity-100" : "opacity-25"}
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 mb-6 italic grow">“{text}”</p>

      {/* Avatar */}
      <div className="flex items-center mt-auto">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center
                      text-white font-bold text-lg
                      bg-linear-to-br ${avatarGradient}`}
        >
          {initial}
        </div>

        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
        </div>
      </div>
    </div>
  );
}