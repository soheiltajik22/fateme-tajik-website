"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export default function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-badge mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            نظرات زبان‌آموزان
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            تجربه زبان‌آموزان ما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-500 max-w-xl mx-auto"
          >
            بیش از {siteConfig.studentsCount} زبان‌آموز تا به امروز در این مسیر همراه ما بوده‌اند.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/testimonials" className="inline-flex items-center gap-2 btn-outline">
            مشاهده همه نظرات
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
