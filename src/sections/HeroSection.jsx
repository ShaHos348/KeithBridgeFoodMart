import {
  FaUtensils,
  FaMapMarkerAlt,
  FaPepperHot,
  FaChevronDown,
} from "react-icons/fa";
import FoodItems from "./data/FoodItems";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80; // navbar height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

function checkTime(which) {
  const now = new Date();

  const estTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const hour = estTime.getHours(); // 0–23
  const day = estTime.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

  if (which === "hour") {
    return hour >= 7 && hour < 14;
  }

  if (which === "special") {
    // Wednesday (3) or Saturday (6)
    return day === 3 || day === 6;
  }

  return false;
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white">
            {checkTime("hour") && (
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-sm">
                  Open Now • Serving Fresh Food Daily
                </span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-red-500">Fuel Up</span> &<br />
              <span className="text-orange-400">Eat Fresh</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your one-stop destination for premium Exxon gas and authentic,
              delicious Mexican food in Cumming, GA. Quality fuel meets quality
              food!
            </p>

            <hr className="my-6 border-white/30" />

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Su destino ideal para gasolina Exxon de primera calidad y
              auténtica y deliciosa comida mexicana en Cumming, Georgia.
              ¡Combustible de calidad y comida de calidad!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#food"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("food");
                }}
                className="cta-button px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2"
              >
                <FaUtensils /> View Menu
              </a>

              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("location");
                }}
                className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full
                           text-white font-bold text-lg inline-flex items-center gap-2
                           hover:bg-white/20 transition"
              >
                <FaMapMarkerAlt /> Get Directions
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center space-x-8">
              <StatBlock value="3+" label="Years Serving" />
              <Divider />
              <StatBlock value="5000+" label="Happy Customers" />
              <Divider />
              <StatBlock value="4.7★" label="Google Rating" />
            </div>
          </div>

          {/* Right */}
          <div className="relative float-animation">
            <div>
              <div className="relative bg-linear-to-br from-orange-400 to-red-600 rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-white">
                  <FaPepperHot className="text-6xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold mb-2">
                    Wednesday & Saturday Specials
                  </h3>
                  {FoodItems.filter((item) => item.type === "special").map(
                    (item) => (
                      <p className="text-lg opacity-90 mb-4">{item.title} for ${item.price}</p>
                    )
                  )}
                  <div className="bg-white/20 rounded-xl p-4">
                    <p className="text-3xl font-extrabold">Fresh Daily!</p>
                    <p className="text-sm opacity-80">
                      Made with love & tradition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            {checkTime("special") && (
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center font-bold pulse-animation shadow-lg">
                <div className="text-center">
                  <p className="text-xs font">SERVING TODAY!!!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={() => scrollToId("food")}
      >
        <FaChevronDown className="text-2xl" />
      </div>
    </section>
  );
}

/* --- helpers --- */

function StatBlock({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-orange-400">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-12 w-px bg-gray-600" />;
}
