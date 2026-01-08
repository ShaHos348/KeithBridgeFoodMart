import NavbarSection from "./NavbarSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import FoodGallerySection from "./FoodGallerySection";
import ReviewSection from "./ReviewSection";
import LocationSection from "./LocationSection";
import FooterSection from "./FooterSection";

function Home() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <ServicesSection />
      <FoodGallerySection />
      <ReviewSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
}

export default Home;
