import type { Metadata } from "next";
import { Download, GraduationCap, Briefcase, Award, Languages } from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "رزومه",
  description: "رزومه حرفه‌ای فاطمه تاجیک، مدرس زبان آلمانی",
};

export default function ResumePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                رزومه حرفه‌ای
              </span>
              <h1 className="text-4xl font-black text-white mb-2">فاطمه تاجیک</h1>
              <p className="text-navy-300 text-lg">مدرس زبان آلمانی | هرات، افغانستان</p>
            </div>
            <button className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg">
              <Download className="w-5 h-5" />
              دانلود PDF
            </button>
          </div>
        </div>
      </section>

      <div className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="grid gap-8">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900 mb-6">
                <span className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                  <Languages className="w-4 h-4 text-navy-700" />
                </span>
                اطلاعات تماس
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { label: "نام", value: "فاطمه تاجیک" },
                  { label: "موقعیت", value: "هرات، افغانستان" },
                  { label: "تلفن", value: siteConfig.phone },
                  { label: "ایمیل", value: siteConfig.email },
                  { label: "واتساپ", value: siteConfig.whatsapp },
                  { label: "تجربه", value: siteConfig.experience },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-navy-400 font-medium min-w-[80px]">{label}:</span>
                    <span className="text-navy-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900 mb-4">
                <span className="w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-gold-600" />
                </span>
                خلاصه حرفه‌ای
              </h2>
              <p className="text-navy-600 leading-loose text-sm">
                مدرس زبان آلمانی با {siteConfig.experience} سال تجربه در تدریس به زبان‌آموزان با اهداف متنوع — از مهاجرت و تحصیل تا آزمون‌های رسمی. دارای تجربه در تدریس خصوصی، آنلاین و گروهی. آشنا با متدهای روز آموزش زبان و کتاب‌های معتبر بین‌المللی.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900 mb-6">
                <span className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-navy-700" />
                </span>
                تحصیلات و مدارک
              </h2>
              <div className="space-y-5">
                {siteConfig.qualifications.map((q, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800 text-sm">{q}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900 mb-6">
                <span className="w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-gold-600" />
                </span>
                تجربه کاری
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "مدرس زبان آلمانی",
                    place: "[مؤسسه / آموزشگاه / تدریس مستقل]",
                    period: "[سال شروع] – تاکنون",
                    items: [
                      "تدریس دوره‌های A1 تا B2 به بیش از " + siteConfig.studentsCount + " زبان‌آموز",
                      "برنامه‌ریزی و طراحی محتوای آموزشی",
                      "آماده‌سازی زبان‌آموزان برای آزمون‌های Goethe و TestDaF",
                      "برگزاری کلاس‌های آنلاین و حضوری",
                    ],
                  },
                  {
                    title: "[سمت قبلی]",
                    place: "[مؤسسه / آموزشگاه]",
                    period: "[دوره]",
                    items: [
                      "[توضیح مسئولیت‌ها]",
                      "[توضیح دستاوردها]",
                    ],
                  },
                ].map((exp, i) => (
                  <div key={i} className="border-r-2 border-gold-300 pr-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-navy-900">{exp.title}</h3>
                        <p className="text-navy-500 text-sm">{exp.place}</p>
                      </div>
                      <span className="text-xs bg-navy-50 text-navy-600 px-3 py-1 rounded-full flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-navy-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl border border-navy-100 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6">مهارت‌ها</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-sm">مهارت‌های زبانی</h3>
                  {[
                    { lang: "زبان آلمانی", level: "[سطح شما]", pct: 90 },
                    { lang: "زبان فارسی / دری", level: "بومی", pct: 100 },
                    { lang: "زبان انگلیسی", level: "[سطح]", pct: 70 },
                  ].map(({ lang, level, pct }) => (
                    <div key={lang} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-navy-700">{lang}</span>
                        <span className="text-navy-400">{level}</span>
                      </div>
                      <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-navy-800 rounded-full transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-3 text-sm">تخصص تدریس</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "مکالمه روزمره", "گرامر", "نگارش", "تلفظ",
                      "آمادگی آزمون Goethe", "TestDaF", "تدریس آنلاین",
                      "طراحی محتوا", "کلاس گروهی", "کلاس خصوصی"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-navy-50 text-navy-700 border border-navy-100 px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              تماس برای همکاری
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
