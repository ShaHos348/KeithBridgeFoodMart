export default function GasCard({ label, value}) {
  return (
    <div
      className={`rounded-2xl p-6 text-center bg-linear-to-br from-white to-gray-100 shadow border-2 border-red-500`}
    >
      <p className={`text-red-600 font-medium mb-2`}>{label}</p>

      <p className="text-4xl font-extrabold text-gray-900">{value}</p>

      <p className="text-sm text-gray-500">Octane</p>
    </div>
  );
}
