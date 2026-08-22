"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BookOpen, Star, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/data/courses";

const levelColors: Record<string, string> = {
  A1: "bg-emerald-100 text-emerald-700 border-emerald-200",
  A2: "bg-blue-100 text-blue-700 border-blue-200",
  B1: "bg-purple-100 text-purple-700 border-purple-200",
  B2: "bg-amber-100 text-amber-700 border-amber-200",
};

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const levelColor = levelColors[course.level] || "bg-navy-100 text-navy-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group",
        course.popular
          ? "border-gold-300 ring-2 ring-gold-200"
          : "border-navy-100 hover:border-navy-200"
      )}
    >
      {/* Popular badge */}
      {course.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={cn(
            "text-xs font-semibold px-3 py-1 rounded-full",
            course.popular
              ? "bg-gold-500 text-white"
              : "bg-navy-100 text-navy-700"
          )}>
            {course.badge}
          </span>
        </div>
      )}

      {/* Level indicator */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className={cn(
                "inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3",
                levelColor
              )}
            >
              سطح {course.level}
            </span>
            <h3 className="text-xl font-bold text-navy-900">{course.title}</h3>
            <p className="text-sm text-navy-500 font-medium">{course.subtitle}</p>
          </div>
          <div className="text-4xl font-black text-navy-100 select-none transition-colors duration-300 group-hover:text-navy-200">
            {course.level}
          </div>
        </div>

        <p className="text-navy-600 text-sm leading-relaxed mb-5">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-navy-500 mb-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-navy-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-navy-400" />
            <span>{course.sessions}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 4).map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-navy-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Card footer */}
      <div className="px-6 pb-6 flex items-center justify-between border-t border-navy-50 pt-5">
        <div>
          <p className="text-xs text-navy-400 mb-0.5">شهریه</p>
          <p className="text-sm font-semibold text-navy-800">{course.price}</p>
        </div>
        <Link
          href="/booking"
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300",
            course.popular
              ? "bg-gold-500 hover:bg-gold-600 text-white shadow-md hover:shadow-lg"
              : "bg-navy-800 hover:bg-navy-900 text-white"
          )}
        >
          <span>ثبت‌نام</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
