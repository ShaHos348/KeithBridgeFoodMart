const images = import.meta.glob(
  "../../assets/foodImages/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export function getFoodImage(filename) {
  return images[`../../assets/foodImages/${filename}`]?.default;
}