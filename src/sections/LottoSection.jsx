import ImageCard from "./components/ImageCard";
import LottoItems from "./data/LottoItems";

export default function LottoSection() {
  return (
    <section id="lotto" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            LOTTO
          </h2>
          <hr className="my-6 border-gray-300 max-w-md mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {LottoItems.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">And much more! Come and Play.</p>
        </div>
      </div>
    </section>
  );
}
