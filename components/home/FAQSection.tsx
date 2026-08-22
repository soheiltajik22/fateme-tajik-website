"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              سوالات متداول
            </span>
            <h2 className="heading-section mb-4">
              سوالی دارید؟
            </h2>
            <p className="text-body mb-8">
              پاسخ پرتکرارترین سوالات زبان‌آموزان را اینجا پیدا کنید. اگر سوال شما اینجا نیست، مستقیم با ما تماس بگیرید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary text-center"
              >
                تماس با ما
              </Link>
              <Link
                href="/booking"
                className="btn-outline text-center"
              >
                رزرو مشاوره رایگان
              </Link>
            </div>
          </motion.div>

          {/* Right - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FAQ limit={6} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
