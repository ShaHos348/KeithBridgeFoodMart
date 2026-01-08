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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GasCard label="Regular" value="87" />
            <GasCard label="Plus" value="89" highlight />
            <GasCard label="Premium" value="93" />
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
