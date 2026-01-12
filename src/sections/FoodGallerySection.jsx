import { useState } from "react";
import FoodCard from "./components/FoodCard";
import FoodItems from "./data/FoodItems";

export default function FoodGallerySection() {
  const [lang, setLang] = useState("en");

  return (
    <section id="food" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Language</span>

            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="relative w-56 h-11 rounded-full bg-gray-200 p-1 overflow-hidden"
              aria-label="Toggle language"
            >
              {/* Slider */}
              <span
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${
                  lang === "es" ? "left-[calc(50%+2px)]" : "left-1"
                }`}
              />

              {/* Labels */}
              <div className="relative z-10 flex h-full items-center justify-between px-4 text-sm font-semibold">
                <span
                  className={lang === "en" ? "text-red-600" : "text-gray-700"}
                >
                  English
                </span>
                <span
                  className={lang === "es" ? "text-red-600" : "text-gray-700"}
                >
                  Spanish
                </span>
              </div>
            </button>
          </div>

          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🌮 AUTHENTIC MEXICAN CUISINE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Delicious <span className="text-red-600">Mexican Food</span>
          </h2>
          {lang === "en" ? (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh ingredients, traditional recipes, and bold flavors. Made
              fresh daily right here at Keith Bridge Food Mart!
            </p>
          ) : (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ingredientes frescos, recetas tradicionales y sabores intensos.
              ¡Elaborados a diario aquí mismo en Keith Bridge Food Mart!
            </p>
          )}
          <hr className="my-6 border-gray-300 max-w-md mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FoodItems.filter((item) => item.type === "regular").map((item) => (
            <FoodCard key={item.title.en} {...item} lang={lang} />
          ))}
        </div>

        <h3 className="text-center text-2xl font-semibold text-gray-900  m-4 underline">
          Wednesday & Saturday Specials
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FoodItems.filter((item) => item.type === "special").map((item) => (
            <FoodCard key={item.title.en} {...item} lang={lang} />
          ))}
        </div>

        <h3 className="text-center text-2xl font-semibold text-gray-900  m-4 underline">
          Other
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FoodItems.filter((item) => item.type === "other").map((item) => (
            <FoodCard key={item.title.en} {...item} lang={lang} />
          ))}
        </div>

        <h3 className="text-center text-2xl font-semibold text-gray-900  m-4 underline">
          Appetizers/Desserts
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FoodItems.filter((item) => item.type === "dessert").map((item) => (
            <FoodCard key={item.title.en} {...item} lang={lang} />
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
