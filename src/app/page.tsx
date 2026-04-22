import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import UrgencyBanner from "@/components/home/UrgencyBanner";
import BenefitsSection from "@/components/home/BenefitsSection";
import CoverageSection from "@/components/home/CoverageSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import { HOME_FAQS } from "@/lib/constants";
import { WebsiteSchema } from "@/components/seo/WebsiteSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export default function HomePage() {
  return (
    <main>
      <WebsiteSchema />
      <FAQSchema faqs={HOME_FAQS} />
      <HeroSection />
      <ServicesGrid />
      <UrgencyBanner />
      <BenefitsSection />
      <CoverageSection />
      <TestimonialsSection />
      <FAQSection faqs={HOME_FAQS} />
      <CTASection />
    </main>
  );
}
