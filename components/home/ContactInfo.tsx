"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    icon: Phone,
    label: "تلفن",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneLink}`,
    ltr: true,
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    ltr: true,
  },
  {
    icon: MapPin,
    label: "آدرس",
    value: siteConfig.address,
    href: "#",
    ltr: false,
  },
];

export default function ContactInfo() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            اطلاعات تماس
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            در تماس باشید
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-navy-300"
          >
            برای مشاوره رایگان یا هر سوالی از طریق راه‌های زیر با ما در تماس باشید.
          </motion.p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href, ltr }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <p className="text-navy-400 text-xs mb-1">{label}</p>
              <p
                className={`text-white font-medium text-sm ${ltr ? "ltr-text" : ""}`}
                dir={ltr ? "ltr" : "rtl"}
              >
                {value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Hours */}
        <div className="grid grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gold-400" />
              <p className="text-navy-300 text-sm">ساعت کاری</p>
            </div>
            <div className="space-y-1.5 text-sm text-white">
              <p>{siteConfig.workingHours.weekdays}</p>
              <p>{siteConfig.workingHours.friday}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

