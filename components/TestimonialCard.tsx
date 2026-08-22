"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";

const levelColors: Record<string, string> = {
  A1: "bg-emerald-50 text-emerald-700",
  A2: "bg-blue-50 text-blue-700",
  B1: "bg-purple-50 text-purple-700",
  B2: "bg-amber-50 text-amber-700",
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: TestimonialCardProps) {
  const levelColor = levelColors[testimonial.level] || "bg-navy-50 text-navy-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Quote icon */}
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-8 h-8 text-gold-300 fill-gold-100" />
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < testimonial.rating
                  ? "text-gold-400 fill-gold-400"
                  : "text-navy-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="text-navy-700 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-navy-50">
        {/* Avatar & name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
            <p className="text-xs text-navy-500">{testimonial.duration} آموزش</p>
          </div>
        </div>

        {/* Level & goal */}
        <div className="text-left">
          <span
            className={cn(
              "inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1",
              levelColor
            )}
          >
            {testimonial.level}
          </span>
          <p className="text-xs text-navy-400">{testimonial.goal}</p>
        </div>
      </div>
    </motion.div>
  );
}
