import Reviews from "./data/Reviews";
import ReviewCard from "./components/ReviewCard";

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ CUSTOMER REVIEWS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
        </div>

        {/* Horizontal scroll row */}
        <div className="-mx-4 px-4">
          <div
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory
                       [scrollbar-width:thin]"
          >
            {Reviews.map((review) => (
              <div
                key={review.id}
                className="snap-start shrink-0
                           w-[85%] sm:w-[70%] md:w-[45%] lg:w-[calc((100%-(--spacing(16)))/3)]"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Swipe/scroll to see more reviews →
        </p>
      </div>
    </section>
  );
}
