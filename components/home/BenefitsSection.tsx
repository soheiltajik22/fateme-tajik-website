"use client";

import { motion } from "framer-motion";
import {
  Target, HeartHandshake, Globe, Rocket, MessageCircle, BookMarked,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "برنامه‌ریزی هدفمند",
    desc: "بر اساس هدف نهایی شما — مهاجرت، آزمون یا علاقه شخصی — مسیر آموزشی طراحی می‌شود.",
  },
  {
    icon: HeartHandshake,
    title: "محیط صمیمی",
    desc: "فضای کلاس بدون استرس، با احترام متقابل و تمرکز کامل مدرس روی پیشرفت شما.",
  },
  {
    icon: Globe,
    title: "کلاس آنلاین در همه جا",
    desc: "از هر نقطه‌ای — داخل افغانستان یا خارج — می‌توانید آموزش دریافت کنید.",
  },
  {
    icon: Rocket,
    title: "پیشرفت سریع",
    desc: "با متدهای به‌روز و تمرین‌های هدفمند، سریع‌تر از روش‌های سنتی پیشرفت می‌کنید.",
  },
  {
    icon: MessageCircle,
    title: "پشتیبانی مداوم",
    desc: "بین جلسات می‌توانید سوالات خود را از طریق واتساپ مطرح کنید.",
  },
  {
    icon: BookMarked,
    title: "مواد آموزشی کامل",
    desc: "کتاب، فلش کارت، تمرین‌های شنیداری و نوشتاری — همه چیز برای یادگیری عمیق.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-700/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            مزایای کلاس‌های ما
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            چرا با فاطمه تاجیک یاد بگیرید؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-300 max-w-xl mx-auto"
          >
            یادگیری زبان یک سفر است — ما آن را هرچه لذت‌بخش‌تر و موثرتر می‌کنیم.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
              <p className="text-navy-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
