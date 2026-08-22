import type { Metadata } from "next";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "دوره‌ها",
  description: "دوره‌های زبان آلمانی از A1 تا B2 با فاطمه تاجیک",
};

export default function CoursesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            دوره‌های آموزشی
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            دوره‌های زبان آلمانی
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            بر اساس چارچوب اروپایی مشترک زبان (CEFR) — برنامه‌ریزی شده و هدفمند.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>

          {/* Custom note */}
          <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 text-center">
            <p className="text-navy-800 font-semibold mb-2">
              برنامه دوره شما متفاوت است؟
            </p>
            <p className="text-navy-600 text-sm mb-4">
              دوره‌های سفارشی بر اساس هدف و برنامه زمانی شما طراحی می‌کنیم.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              درخواست دوره سفارشی
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">چطور شروع کنیم؟</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "۱", title: "درخواست رزرو", desc: "فرم رزرو را پر کنید یا تماس بگیرید." },
              { step: "۲", title: "ارزیابی سطح", desc: "یک جلسه رایگان برای تعیین سطح و هدف." },
              { step: "۳", title: "برنامه‌ریزی", desc: "دوره و برنامه زمانی متناسب با شما طراحی می‌شود." },
              { step: "۴", title: "شروع کلاس", desc: "مسیر یادگیری آغاز می‌شود!" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-navy-800 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
