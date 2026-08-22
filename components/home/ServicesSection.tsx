"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
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
            خدمات آموزشی
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            هر سبک یادگیری، یک راه‌حل
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy-500 max-w-xl mx-auto"
          >
            بسته به هدف، برنامه و شرایط شما، یکی از روش‌های آموزشی زیر را انتخاب کنید.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 btn-outline"
          >
            مشاهده جزئیات خدمات
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
