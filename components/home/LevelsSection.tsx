"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { levels } from "@/data/courses";

const levelDescriptions: Record<string, { desc: string; who: string }> = {
  A1: {
    desc: "اولین قدم در زبان آلمانی. معرفی، اعداد، رنگ‌ها و جملات ساده.",
    who: "مناسب برای کسانی که هیچ پیش‌زمینه‌ای ندارند.",
  },
  A2: {
    desc: "ارتباط در موقعیت‌های روزمره: خرید، سفر، زندگی روزانه.",
    who: "مناسب پس از گذراندن A1 یا داشتن پایه‌ی اولیه.",
  },
  B1: {
    desc: "بیان نظرات، گزارش‌دهی و درک متون و گفتگوهای معمول.",
    who: "ملاک بسیاری از ویزاهای کاری و مهاجرتی آلمان.",
  },
  B2: {
    desc: "مکالمه روان با گویشوران بومی و درک متون تخصصی.",
    who: "الزامی برای تحصیل در اکثر دانشگاه‌های آلمانی‌زبان.",
  },
};

export default function LevelsSection() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

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
            سطح‌بندی
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            از A1 تا B2 در کنار شما هستیم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-500 max-w-xl mx-auto"
          >
            بر اساس چارچوب اروپایی مشترک زبان (CEFR) تدریس می‌کنیم.
          </motion.p>
        </div>

        {/* Levels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {levels.map((level, i) => {
            const info = levelDescriptions[level.level];
            return (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-navy-100 hover:border-navy-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 group"
              >
                {/* Level badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block text-lg font-black px-4 py-2 rounded-xl border ${level.color}`}
                  >
                    {level.level}
                  </span>
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  {level.name}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-3">
                  {info.desc}
                </p>
                <p className="text-navy-400 text-xs border-t border-navy-50 pt-3">
                  {info.who}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-navy-500 text-sm mb-4">
            مطمئن نیستید در چه سطحی هستید؟
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            جلسه ارزیابی رایگان
          </Link>
        </div>
      </div>
    </section>
  );
}
