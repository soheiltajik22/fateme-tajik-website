"use client";

import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

export default function QuickBooking() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-navy-800/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-badge mx-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              رزرو کلاس
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section mb-3"
            >
              همین حالا شروع کنید
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-navy-500"
            >
              فرم زیر را پر کنید تا در کمتر از ۲۴ ساعت با شما تماس بگیریم.
            </motion.p>
          </div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-navy-100 p-8"
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
