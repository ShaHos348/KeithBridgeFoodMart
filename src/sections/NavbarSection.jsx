import { useState } from "react";
import { FaBars, FaGasPump } from "react-icons/fa";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80; // navbar height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function NavbarSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Gas", id: "gas" },
    { label: "Grocery", id: "grocery" },
    { label: "Lotto", id: "lotto" },
    { label: "Mexican Food", id: "food" },
    { label: "Reviews", id: "reviews" },
    { label: "Location", id: "location" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    setMobileOpen(false);
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-linear-to-br from-red-600 to-blue-900 rounded-full flex items-center justify-center">
              <FaGasPump className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Keith Bridge Food Mart
              </h1>
              <p className="text-xs text-gray-500">Food Mart & Exxon Gas</p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                {l.label}
              </a>
            ))}

            {/* Visit Us → FOOTER */}
            <a
              href="#footer"
              onClick={(e) => handleNavClick(e, "footer")}
              className="px-6 py-2 rounded-full text-white font-semibold
                         bg-linear-to-r from-red-600 to-blue-900
                         hover:shadow-lg transition"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleNavClick(e, l.id)}
              className="block py-2 font-medium text-gray-700 hover:text-red-600"
            >
              {l.label}
            </a>
          ))}

          {/* Visit Us → FOOTER (mobile) */}
          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, "footer")}
            className="block text-center px-6 py-2 rounded-full text-white font-semibold
                       bg-linear-to-r from-red-600 to-blue-900"
          >
            Visit Us
          </a>
        </div>
      </div>
    </nav>
  );
}
