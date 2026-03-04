export default function ImageCard({ title, image }) {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {image && (
        <img src={image} alt={title} className="w-full h-full object-contain" />
      )}
    </div>
  );
}
