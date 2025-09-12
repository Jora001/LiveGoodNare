import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TaglineSection />
        <VideoSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
