"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

const highlights = [
  "تدریس با متدهای به‌روز اروپایی",
  "تنظیم برنامه بر اساس هدف زبان‌آموز",
  "محیط آموزشی صمیمی و بدون استرس",
  "پشتیبانی بین جلسات از طریق واتساپ",
  "مواد آموزشی کامل و به‌روز",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Background card */}
              <div className="absolute inset-0 rounded-3xl bg-navy-100 translate-x-4 translate-y-4" />
              {/* Main card */}
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/classroom.jpg"
                  alt="فاطمه تاجیک در حال تدریس"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-navy-900">{siteConfig.studentsCount}</p>
                  <p className="text-xs text-navy-500">زبان‌آموز</p>
                </div>
                <div className="w-px h-10 bg-navy-100" />
                <div className="text-center">
                  <p className="text-2xl font-black text-navy-900">{siteConfig.experience}</p>
                  <p className="text-xs text-navy-500">تجربه</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              درباره مدرس
            </span>

            <h2 className="heading-section mb-5">
              با فاطمه تاجیک آشنا شوید
            </h2>

            <p className="text-body mb-4 leading-loose">
              فاطمه تاجیک مدرس زبان آلمانی با بیش از {siteConfig.experience} سال تجربه در هرات است. با اشتیاق فراوان و روش‌های آموزشی به‌روز، مسیر یادگیری را برای زبان‌آموزان لذت‌بخش و کارآمد می‌کند.
            </p>
            <p className="text-body mb-8 leading-loose">
              هدف اصلی، کمک به هر زبان‌آموز برای رسیدن به هدفش است — چه مهاجرت به آلمان، چه قبولی در آزمون گوته، چه تقویت مهارت‌های روزمره.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-navy-700 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 btn-primary"
            >
              بیشتر بدانید
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
