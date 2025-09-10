import HeroSection from "@/components/hero";
import CastleSection from "@/components/castle";
import OffsiteSection from "@/components/offsite";
import VacationSection from "@/components/vacation";
import HouseSection from "@/components/house";
import PlaceSection from "@/components/place";
import PowerSection from "@/components/power";
import FAQSection from "@/components/faq";
import FooterSection from "@/components/footer";

const Home = () => {
  return (
    <div>
      <div className="bg-dark-green">
        {/* Hero Section */}
        <HeroSection />
      </div>

      <div className="bg-gray-green">
        {/* CastleSection */}
        <CastleSection />
      </div>

      <div className="bg-offsite-main">
        {/* OffsiteSection */}
        <OffsiteSection />
      </div>

      <div className="bg-gray-green">
        {/* VacationSection */}
        <VacationSection />
      </div>

      <div className="bg-house-main">
        {/* HouseSection */}
        <HouseSection />
      </div>

      <div className="bg-gray-green">
        {/* PlaceSection */}
        <PlaceSection />
      </div>

      <div className="bg-power-main">
        {/* PowerSection */}
        <PowerSection />
      </div>

      <div className="bg-gray-green">
        {/* FAQSection */}
        <FAQSection />
      </div>

      <div className="bg-dark-green">
        {/* FooterSection */}
        <FooterSection />
      </div>
    </div>
  )
}

export default Home;