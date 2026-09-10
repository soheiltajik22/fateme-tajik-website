import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "نظرات",
  description: "تجربه زبان‌آموزان کلاس‌های زبان آلمانی فاطمه تاجیک",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            نظرات
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            تجربه زبان‌آموزان ما
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            بیش از {siteConfig.studentsCount} زبان‌آموز تا به امروز همراه ما بوده‌اند.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-white font-black text-2xl">۵.۰</span>
            <span className="text-navy-300 text-sm">
              از {siteConfig.studentsCount} نظر
            </span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            شما هم می‌خواهید شروع کنید؟
          </h2>
          <p className="text-navy-300 mb-8">
            اولین جلسه ارزیابی رایگان است — بدون تعهد.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            رزرو جلسه رایگان
          </Link>
        </div>
      </section>
    </div>
  );
}
