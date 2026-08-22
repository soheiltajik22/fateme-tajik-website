import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "نظرات زبان‌آموزان",
  description: "نظرات و تجربیات زبان‌آموزان کلاس‌های فاطمه تاجیک",
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

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-white font-black text-2xl">۵.۰</span>
            <span className="text-navy-300 text-sm">از {siteConfig.studentsCount} نظر</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          {/* Add your review CTA */}
          <div className="mt-12 bg-white rounded-2xl border border-navy-100 shadow-sm p-8 text-center">
            <h2 className="font-bold text-navy-900 text-xl mb-3">
              شما هم زبان‌آموز هستید؟
            </h2>
            <p className="text-navy-500 mb-6">
              تجربه‌تان را با ما در میان بگذارید.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              ارسال نظر
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
