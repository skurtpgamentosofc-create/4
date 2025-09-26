import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MembersArea } from "@/components/MembersArea";
import { CourseContent } from "@/components/CourseContent";
import { TecnicasExclusivas } from "@/components/TecnicasExclusivas";
import { Testimonials } from "@/components/Testimonials";
import { WhyBuyCourse } from "@/components/WhyBuyCourse";
import { BonusSection } from "@/components/BonusSection";
import { PricingSection } from "@/components/PricingSection";
import { PurchaseNotification } from "@/components/PurchaseNotification";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PurchaseNotification />
      <Header />
      <Hero />
      <MembersArea />
      <CourseContent />
      <TecnicasExclusivas />
      <Testimonials />
      <WhyBuyCourse />
      <BonusSection />
      <PricingSection />
      <FAQ />
    </main>
  );
};

export default Index;