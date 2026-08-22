import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Send, Clock, GraduationCap } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

const footerLinks = {
  pages: navLinks,
  services: [
    { href: "/services#private", label: "کلاس خصوصی" },
    { href: "/services#online", label: "کلاس آنلاین" },
    { href: "/services#group", label: "کلاس گروهی" },
    { href: "/services#intensive", label: "دوره فشرده" },
    { href: "/services#exam-prep", label: "آمادگی آزمون" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gold-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">فاطمه تاجیک</p>
                <p className="text-navy-300 text-sm">مدرس زبان آلمانی</p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              آموزش حرفه‌ای زبان آلمانی در هرات با بیش از {siteConfig.experience} سال تجربه. کلاس‌های خصوصی، آنلاین و گروهی از سطح A1 تا B2.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="اینستاگرام"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://t.me/${siteConfig.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              صفحات
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              خدمات
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              تماس
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm ltr-text">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-navy-300 hover:text-gold-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold-400" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3 text-navy-300">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <p>{siteConfig.workingHours.weekdays}</p>
                  <p>{siteConfig.workingHours.friday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-navy-400 text-sm">
            <p>
              © {new Date().getFullYear()} فاطمه تاجیک — تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center gap-1">
              <span>طراحی و توسعه توسط</span>
              <span className="text-gold-400 font-medium">[توسعه‌دهنده]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
