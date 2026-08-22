import type { Metadata } from "next";
import { CheckCircle2, Phone, Clock } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "رزرو کلاس",
  description: "رزرو کلاس زبان آلمانی با فاطمه تاجیک — اولین جلسه ارزیابی رایگان",
};

const whyBook = [
  "اولین جلسه ارزیابی کاملاً رایگان است",
  "پس از ثبت درخواست، ظرف ۲۴ ساعت تماس می‌گیریم",
  "برنامه کلاس بر اساس نیاز شما طراحی می‌شود",
  "بدون تعهد اجباری — امتحان کنید و تصمیم بگیرید",
];

export default function BookingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            رزرو کلاس
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            همین حالا شروع کنید
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            اولین جلسه ارزیابی رایگان است. فرم زیر را پر کنید و ما با شما تماس می‌گیریم.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Why book */}
              <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
                <h2 className="font-bold text-navy-900 mb-5">چرا همین حالا ثبت‌نام کنید؟</h2>
                <ul className="space-y-3">
                  {whyBook.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-700">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact alt */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <p className="font-semibold mb-1">ترجیح می‌دهید مستقیم تماس بگیرید؟</p>
                <p className="text-navy-300 text-sm mb-4">
                  از طریق تلفن یا واتساپ هم می‌توانید رزرو کنید.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-navy-500" />
                  <p className="font-semibold text-navy-900 text-sm">ساعت پاسخگویی</p>
                </div>
                <div className="text-sm text-navy-600 space-y-1.5">
                  <p>{siteConfig.workingHours.weekdays}</p>
                  <p>{siteConfig.workingHours.friday}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-navy-100 shadow-xl p-8">
                <h2 className="font-bold text-navy-900 text-xl mb-6">فرم رزرو کلاس</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
