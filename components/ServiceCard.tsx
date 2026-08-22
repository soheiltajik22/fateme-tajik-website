"use client";

import { motion } from "framer-motion";
import {
  UserRound, Monitor, Users, Zap, MessageCircle, BookOpen, LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  UserRound,
  Monitor,
  Users,
  Zap,
  MessageCircle,
  BookOpen,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  service,
  index = 0,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] || BookOpen;
  const isNavy = service.color === "navy";

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-navy-100 hover:border-navy-200 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
            isNavy
              ? "bg-navy-50 text-navy-700"
              : "bg-gold-50 text-gold-600"
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold text-navy-900 mb-1">{service.title}</h3>
          <p className="text-navy-600 text-sm leading-relaxed">{service.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-navy-100 hover:border-navy-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Card top accent */}
      <div
        className={cn(
          "h-1.5 w-full",
          isNavy ? "bg-navy-800" : "bg-gold-500"
        )}
      />

      <div className="p-6">
        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
            isNavy
              ? "bg-navy-50 text-navy-700"
              : "bg-gold-50 text-gold-600"
          )}
        >
          <Icon className="w-7 h-7" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
        <p className="text-navy-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-navy-700">
              <span
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold",
                  isNavy
                    ? "bg-navy-100 text-navy-700"
                    : "bg-gold-100 text-gold-700"
                )}
              >
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
