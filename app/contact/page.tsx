import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "تماس با من",
  description: "راه‌های تماس با فاطمه تاجیک، مدرس زبان آلمانی در هرات",
};

const contactMethods = [
  {
    icon: Phone,
    label: "تلفن",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    desc: "برای تماس مستقیم",
    ltr: true,
  },
  {
    icon: MessageCircle,
    label: "واتساپ",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    desc: "پیام سریع‌تر",
    ltr: true,
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    desc: "برای سوالات رسمی‌تر",
    ltr: true,
  },
  {
    icon: MapPin,
    label: "موقعیت",
    value: siteConfig.address,
    href: "#",
    desc: "تدریس حضوری",
    ltr: false,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            تماس
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            در تماس باشید
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            هر سوالی دارید — درباره دوره‌ها، قیمت‌ها یا مشاوره — خوشحال می‌شویم پاسخ دهیم.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {contactMethods.map(({ icon: Icon, label, value, href, desc, ltr }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-2xl border border-navy-100 hover:border-navy-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-100 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-navy-700" />
                </div>
                <p className="font-bold text-navy-900 mb-1">{label}</p>
                <p className="text-xs text-navy-400 mb-2">{desc}</p>
                <p
                  className={`text-sm text-navy-700 font-medium ${ltr ? "ltr-text" : ""}`}
                  dir={ltr ? "ltr" : "rtl"}
                >
                  {value}
                </p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-navy-100 shadow-xl p-8">
                <h2 className="font-bold text-navy-900 text-xl mb-2">ارسال پیام</h2>
                <p className="text-navy-500 text-sm mb-6">
                  معمولاً در کمتر از ۲۴ ساعت پاسخ می‌دهیم.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Hours */}
              <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-navy-500" />
                  <h3 className="font-bold text-navy-900">ساعت کاری</h3>
                </div>
                <div className="space-y-2 text-sm text-navy-600">
                  <p>{siteConfig.workingHours.weekdays}</p>
                  <p>{siteConfig.workingHours.friday}</p>
                </div>
              </div>

              {/* Social */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">شبکه‌های اجتماعی</h3>
                <div className="space-y-3">
                  <a
                    href={`https://instagram.com/${siteConfig.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-3 rounded-xl transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4 text-gold-400" />
                    <span dir="ltr">{siteConfig.instagram}</span>
                  </a>
                  <a
                    href={`https://t.me/${siteConfig.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 px-4 py-3 rounded-xl transition-colors text-sm"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span dir="ltr">{siteConfig.telegram}</span>
                  </a>
                </div>
              </div>

              {/* Quick booking */}
              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">رزرو سریع کلاس</h3>
                <p className="text-navy-600 text-sm mb-4">
                  برای رزرو مستقیم، از فرم رزرو استفاده کنید.
                </p>
                <a
                  href="/booking"
                  className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  فرم رزرو کلاس
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
