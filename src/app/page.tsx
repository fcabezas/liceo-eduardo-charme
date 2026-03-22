import Hero from "@/components/home/Hero";
import QuickAccess from "@/components/home/QuickAccess";
import SpecialtiesPreview from "@/components/home/SpecialtiesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MissionVision from "@/components/home/MissionVision";
import NewsHighlights from "@/components/home/NewsHighlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <SpecialtiesPreview />
      <WhyChooseUs />
      <MissionVision />
      <NewsHighlights />
    </>
  );
}
