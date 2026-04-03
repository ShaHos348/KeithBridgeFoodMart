import ServiceCard from "./components/ServiceCard";
import GasCard from "./components/GasCard";
import Services from "./data/Services";

import { FaGasPump, FaInfoCircle } from "react-icons/fa";

export default function GasSection() {
  return (
    <section id="gas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gas / Octane */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-2">
            <FaGasPump className="text-red-600" />
            Fuel Up with Exxon Quality
          </h2>

          <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
            <GasCard label="Regular" value="87" price="3.75" />
            <GasCard label="Plus" value="89" price="4.29" />
            <GasCard label="Premium" value="93" price="4.79" />
            <GasCard label="NonEthanol" value="90" price="5.29" />
            <div
              className={`rounded-2xl p-6 text-center content-end bg-linear-to-br from-white to-gray-100 shadow border-2 border-red-500`}
            >
              <p className={`text-red-600 text-3xl font-medium`}>Diesel</p>
              <p className="font-semibold text-xl text-gray-900 mt-10">$5.09</p>
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
