export default function ServiceCard({
  icon: Icon,
  title,
  description,
  cardGradient,
  iconGradient,
}) {
  return (
    <div
      className={`text-center p-8 rounded-2xl bg-linear-to-br ${cardGradient}
                  hover:shadow-xl transition-all duration-300`}
    >
      <div
        className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center
                    bg-linear-to-br ${iconGradient}`}
      >
        <Icon className="text-white text-3xl" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
