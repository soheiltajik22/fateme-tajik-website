import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import LevelsSection from "@/components/home/LevelsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CoursesSection from "@/components/home/CoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import QuickBooking from "@/components/home/QuickBooking";
import ContactInfo from "@/components/home/ContactInfo";

export const metadata: Metadata = {
  title: "آموزش زبان آلمانی با فاطمه تاجیک | هرات",
  description:
    "مدرس زبان آلمانی در هرات — کلاس‌های خصوصی، آنلاین و گروهی از A1 تا B2. ثبت‌نام و مشاوره رایگان.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <LevelsSection />
      <BenefitsSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <QuickBooking />
      <ContactInfo />
    </>
  );
}
