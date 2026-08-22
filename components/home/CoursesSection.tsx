"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-badge mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            دوره‌های آموزشی
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            دوره‌های پیشنهادی
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-500 max-w-xl mx-auto"
          >
            بر اساس چارچوب اروپایی مشترک زبان (CEFR) — از مبتدی تا سطح متوسط رو به بالا.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/courses" className="inline-flex items-center gap-2 btn-outline">
            مشاهده همه دوره‌ها
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
