import HeroSection from "@/components/abouts/HeroSection";
import LMS from "@/components/abouts/LMS";
import Services from "@/components/abouts/Services";
import Management from "@/components/abouts/Management";
import Transformation from "@/components/abouts/Transformation";
import Consultant from "@/components/abouts/Consultant";
import CTA from "@/components/abouts/CTA";
import Testimonials from "@/components/abouts/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LMS />
      <Services />
      <Management />
      <Transformation />
      <Consultant />
      <CTA />
      <Testimonials />
    </>
  );
}
