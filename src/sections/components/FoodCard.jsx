export default function FoodCard({
  title,
  badge,
  badgeColor,
  description,
  price,
  unit,
  image,
  gradient,
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div
        className={`h-48 flex items-center justify-center bg-linear-to-br ${gradient}`}
      >
        <img src={image} alt={title} className="h-full w-auto object-contain" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {badge && (
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">{price}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
}
