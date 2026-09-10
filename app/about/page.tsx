import type { Metadata } from "next";
import Image from "next/image";
import {
  CheckCircle2,
  GraduationCap,
  Heart,
  Target,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره من",
  description:
    "آشنایی با فاطمه تاجیک، مدرس زبان آلمانی در هرات — تجربه، مدارک و رزومه حرفه‌ای",
};

const values = [
  {
    icon: Heart,
    title: "اشتیاق به آموزش",
    desc: "تدریس برای من فقط یک شغل نیست — یک رسالت است. وقتی زبان‌آموز پیشرفت می‌کند، انگیزه‌ام چند برابر می‌شود.",
  },
  {
    icon: Target,
    title: "هدف‌محوری",
    desc: "هر زبان‌آموز هدف متفاوتی دارد. برنامه‌ریزی من بر اساس هدف نهایی شما — نه یک برنامه از پیش تعیین‌شده — طراحی می‌شود.",
  },
  {
    icon: GraduationCap,
    title: "یادگیری مستمر",
    desc: "خودم نیز مدام در حال یادگیری و به‌روز کردن متدهای تدریسم هستم تا بهترین تجربه را ارائه دهم.",
  },
];

const experience = [
  {
    title: "مدرس زبان آلمانی",
    place: "[مؤسسه / آموزشگاه / تدریس مستقل]",
    period: "[سال شروع] – تاکنون",
    items: [
      `تدریس دوره‌های A1 تا B2 به بیش از ${siteConfig.studentsCount} زبان‌آموز`,
      "برنامه‌ریزی و طراحی محتوای آموزشی",
      "آماده‌سازی زبان‌آموزان برای آزمون‌های Goethe و TestDaF",
      "برگزاری کلاس‌های آنلاین و حضوری",
    ],
  },
  {
    title: "[سمت قبلی]",
    place: "[مؤسسه / آموزشگاه]",
    period: "[دوره]",
    items: ["[توضیح مسئولیت‌ها]", "[توضیح دستاوردها]"],
  },
];

const languages = [
  { lang: "زبان آلمانی", level: "[سطح شما]", pct: 90 },
  { lang: "زبان فارسی / دری", level: "بومی", pct: 100 },
  { lang: "زبان انگلیسی", level: "[سطح]", pct: 70 },
];

const teachingSkills = [
  "مکالمه روزمره",
  "گرامر",
  "نگارش",
  "تلفظ",
  "آمادگی آزمون Goethe",
  "TestDaF",
  "تدریس آنلاین",
  "طراحی محتوا",
  "کلاس گروهی",
  "کلاس خصوصی",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            درباره من
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            با فاطمه تاجیک آشنا شوید
          </h1>
          <p className="text-navy-300 max-w-2xl mx-auto text-lg">
            مدرس زبان آلمانی در هرات با {siteConfig.experience} سال تجربه و اشتیاق به آموزش.
          </p>

          {/* Quick facts */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-sm">
            <span className="flex items-center gap-2 text-navy-300">
              <MapPin className="w-4 h-4 text-gold-400" />
              {siteConfig.address}
            </span>
            <a
              href={`tel:${siteConfig.phoneLink}`}
              className="flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span dir="ltr">{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/classroom.jpg"
                  alt="فاطمه تاجیک در حال تدریس زبان آلمانی"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-section mb-6">داستان من</h2>
              <div className="space-y-4 text-body leading-loose">
                <p>
                  از همان ابتدای آشنایی با زبان آلمانی، عاشقش شدم — نه فقط به‌خاطر نظم و ساختارش، بلکه به‌خاطر دریچه‌ای که به دنیای جدیدی از فرهنگ و فکر باز می‌کرد.
                </p>
                <p>
                  [داستان شخصی — چطور با زبان آلمانی آشنا شدید، چه مسیری طی کردید، چه چیزی شما را به تدریس علاقه‌مند کرد...]
                </p>
                <p>
                  امروز، بیش از {siteConfig.studentsCount} زبان‌آموز در این مسیر همراهم بوده‌اند — از کسانی که می‌خواهند به آلمان مهاجرت کنند تا دانش‌آموزانی که صرفاً از یادگیری زبان لذت می‌برند.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-8">
                <h3 className="font-bold text-navy-900 mb-4">مدارک و صلاحیت‌ها</h3>
                <ul className="space-y-3">
                  {siteConfig.qualifications.map((q, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy-700 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">ارزش‌های من</h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              این اصول راهنمای هر جلسه‌ای است که برگزار می‌کنم.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-3">{title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">رزومه حرفه‌ای</h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              خلاصه‌ای از تجربه، تخصص و مهارت‌های تدریس من.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Summary */}
            <div className="bg-gray-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900 mb-4">
                <span className="w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                  <Award className="w-4 h-4 text-gold-600" />
                </span>
                خلاصه حرفه‌ای
              </h3>
              <p className="text-navy-600 leading-loose text-sm">
                مدرس زبان آلمانی با {siteConfig.experience} سال تجربه در تدریس به زبان‌آموزان با اهداف متنوع — از مهاجرت و تحصیل تا آزمون‌های رسمی. دارای تجربه در تدریس خصوصی، آنلاین و گروهی. آشنا با متدهای روز آموزش زبان و کتاب‌های معتبر بین‌المللی.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-gray-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900 mb-6">
                <span className="w-8 h-8 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-navy-700" />
                </span>
                تجربه کاری
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="border-r-2 border-gold-300 pr-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-navy-900">{exp.title}</h4>
                        <p className="text-navy-500 text-sm">{exp.place}</p>
                      </div>
                      <span className="text-xs bg-white text-navy-600 border border-navy-100 px-3 py-1 rounded-full flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-navy-600"
                        >
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
            <div className="bg-gray-50 rounded-2xl border border-navy-100 p-8">
              <h3 className="text-lg font-bold text-navy-900 mb-6">مهارت‌ها</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-navy-800 mb-3 text-sm">
                    مهارت‌های زبانی
                  </h4>
                  {languages.map(({ lang, level, pct }) => (
                    <div key={lang} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-navy-700">{lang}</span>
                        <span className="text-navy-400">{level}</span>
                      </div>
                      <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-navy-800 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 mb-3 text-sm">
                    تخصص تدریس
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teachingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-white text-navy-700 border border-navy-100 px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            آماده‌اید شروع کنید؟
          </h2>
          <p className="text-navy-300 mb-8">
            اولین جلسه ارزیابی رایگان است — بدون تعهد.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            رزرو جلسه رایگان
          </Link>
        </div>
      </section>
    </div>
  );
}
