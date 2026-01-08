import {
  FaGasPump,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80; // navbar height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function FooterSection() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <FaGasPump className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Keith Bridge Food Mart</h3>
                <p className="text-gray-400 text-sm">EXXON Station</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Your neighborhood gas station and Mexican food destination in
              Cumming, GA. Quality fuel, fresh food, and friendly service — all
              in one stop!
            </p>

            {/*<div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Google"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaGoogle />
              </a>
            </div>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ["Home", "home"],
                ["Mexican Food", "food"],
                ["Services", "services"],
                ["Location", "location"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(id);
                    }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500" />
                <a
                  href="https://maps.app.goo.gl/5B7Gm7UoH9zpX4uh8"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  3375 Keith Bridge Road
                  <br />
                  Cumming, GA 30041
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-500" />
                <span>
                  {" "}
                  <span>Restaurant:</span>{" "}
                  <a
                    href="tel:+14705575448"
                    className="hover:text-white transition"
                  >
                    (470) 557-5448
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-500" />
                <span>
                  {" "}
                  <span>Gas Station:</span>{" "}
                  <a
                    href="tel:+14702393499"
                    className="hover:text-white transition"
                  >
                    (470) 239-3499
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Keith Bridge Food Mart — EXXON.
            All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            3375 Keith Bridge Road, Cumming, GA 30041
          </p>
        </div>
      </div>
    </footer>
  );
}
