import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BrandsSection from "../components/BrandsSection";
export default function HomePage({ addToQuote }) {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <HowItWorksSection />
      <FeaturedSection addToQuote={addToQuote} />
    </>
  );
}