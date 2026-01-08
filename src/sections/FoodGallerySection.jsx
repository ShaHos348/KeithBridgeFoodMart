import FoodCard from "./components/FoodCard";
import FoodItems from "./data/FoodItems";

export default function FoodGallerySection() {
  return (
    <section id="food" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🌮 AUTHENTIC MEXICAN CUISINE
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Delicious <span className="text-red-600">Mexican Food</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and bold flavors. Made fresh
            daily right here at Keith Bridge Food Mart!
          </p>

          <hr className="my-6 border-gray-300 max-w-md mx-auto" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ingredientes frescos, recetas tradicionales y sabores intensos.
            ¡Elaborados a diario aquí mismo en Keith Bridge Food Mart!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FoodItems.map((item) => (
            <FoodCard key={item.title} {...item} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            And much more! Visit us to see our full menu.
          </p>
          <a
            href="tel:+4705575448"
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-bold text-lg
                       bg-linear-to-r from-red-600 to-orange-500
                       hover:shadow-lg transition"
          >
            <i className="fas fa-phone mr-2" /> Call to Order
          </a>
        </div>
      </div>
    </section>
  );
}
