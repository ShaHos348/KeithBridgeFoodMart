import {
  FaDirections,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📍 FIND US
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Visit <span className="text-red-600">Keith Bridge Food Mart</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conveniently located on Keith Bridge Road in Cumming, GA. Stop by
            for gas, grab some delicious Mexican food!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map + CTA */}
          <div>
            <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl p-8">
              <div className="bg-gray-300 rounded-2xl h-80 flex items-center justify-center mb-6 overflow-hidden">
                <iframe
                  title="Keith Bridge Food Mart Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.09996630170818!2d-84.07450228757709!3d34.25876281469335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f58ff03fe40c2b%3A0x25086bb8352601d9!2sKeith%20Bridge%20Food%20Mart%20(deli)!5e0!3m2!1sen!2sus!4v1767855723326!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/5B7Gm7UoH9zpX4uh8"
                target="_blank"
                rel="noreferrer"
                className="cta-button w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                <FaDirections />
                Get Directions
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-red-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">EXXON - Keith Bridge Food Mart</p>
                <p className="text-gray-600">3375 Keith Bridge Road</p>
                <p className="text-gray-600">Cumming, GA 30041</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <FaClock className="text-green-600 text-2xl" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-600">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">5:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Saturday</span>
                    <span className="font-semibold">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sunday</span>
                    <span className="font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <FaPhone className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">
                  Give us a call to place an order!
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-2xl font-bold text-red-600 hover:text-red-700"
                >
                  (770) 555-0123
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-linear-to-r from-orange-100 to-red-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <FaInfoCircle className="text-orange-600 text-xl" />
                <h4 className="font-bold text-gray-900">Quick Info</h4>
              </div>

              <ul className="space-y-2 text-gray-700">
                {[
                  "ATM Available",
                  "Air Pump Available",
                  "Clean Restrooms",
                  "Lottery Tickets",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
