"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, FileText, MessageSquare, Star, Users, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

const stats = [
  { icon: Users, value: siteConfig.studentsCount, label: "زبان‌آموز" },
  { icon: Star, value: siteConfig.successRate, label: "رضایت" },
  { icon: Award, value: siteConfig.experience, label: "تجربه" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-navy-600/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              مدرس زبان آلمانی در هرات
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              آموزش زبان آلمانی
              <span className="block text-gold-400 mt-1">با فاطمه تاجیک</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-navy-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              کلاس‌های خصوصی، آنلاین و حضوری از سطح A1 تا B2 — با متدهای به‌روز و محیطی صمیمی و حرفه‌ای.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/booking"
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-gold-500/25 hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                رزرو کلاس
              </Link>
              <Link
                href="/resume"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                مشاهده رزومه
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-navy-300 hover:text-white border border-navy-600 hover:border-navy-400 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                ارسال پیام
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-gold-400" />
                    <span className="text-2xl font-black text-white">{value}</span>
                  </div>
                  <p className="text-xs text-navy-400">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/20 to-navy-600/20 blur-2xl scale-110" />
              {/* Main image box */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-navy-800">
                <Image
                  src="/images/classroom.jpg"
                  alt="فاطمه تاجیک در حال تدریس زبان آلمانی"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-gold-500 fill-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-navy-500 font-medium">امتیاز زبان‌آموزان</p>
                  <p className="text-navy-900 font-bold text-sm">۵.۰ از ۵.۰</p>
                </div>
              </div>
              {/* Floating level badge */}
              <div className="absolute -top-4 -left-4 bg-gold-500 rounded-2xl shadow-xl px-4 py-3">
                <p className="text-white text-xs font-medium">سطوح</p>
                <p className="text-white font-black text-sm">A1 → B2</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </section>
  );
}
