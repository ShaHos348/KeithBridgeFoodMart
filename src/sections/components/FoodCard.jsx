import { useMemo } from "react";

export default function FoodCard({ title, description, price, image }) {
  const gradients = [
    "from-red-400 to-orange-400",
    "from-yellow-400 to-red-500",
    "from-green-400 to-emerald-500",
    "from-blue-400 to-indigo-500",
    "from-purple-400 to-pink-500",
    "from-rose-400 to-red-500",
    "from-orange-400 to-yellow-500",
  ];

  const gradient = useMemo(() => {
    return gradients[Math.floor(Math.random() * gradients.length)];
  }, []);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {image && (
        <div
          className={`h-48 flex items-center justify-center bg-linear-to-br ${gradient}`}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-auto object-contain"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>

        {description && (
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            <span className="font-bold">Ingredients: </span>
            {description}
          </p>
        )}

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">${price}</span>
        </div>
      </div>
    </div>
  );
}
