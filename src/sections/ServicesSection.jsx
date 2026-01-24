import ServiceCard from "./components/ServiceCard";
import GasCard from "./components/GasCard";
import Services from "./data/Services";

import { FaGasPump, FaInfoCircle } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⛽ OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You <span className="text-red-600">Need</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From premium Exxon fuel to fresh food and everyday essentials —
            we’ve got you covered!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {Services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Gas / Octane */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-2">
            <FaGasPump className="text-red-600" />
            Fuel Up with Exxon Quality
          </h3>

          <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
            <GasCard label="Regular" value="87" />
            <GasCard label="Plus" value="89" highlight />
            <GasCard label="Premium" value="93" />
            <GasCard label="NonEthanol" value="90" />
            <div
              className={`rounded-2xl p-6 text-center content-center bg-linear-to-br from-white to-gray-100 shadow border-2 border-red-500`}
            >
              <p className={`text-red-600 text-3xl font-medium`}>Diesel</p>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-4 text-sm flex items-center justify-center gap-1">
            <FaInfoCircle />
            Visit us for current fuel prices
          </p>
        </div>
      </div>
    </section>
  );
}
