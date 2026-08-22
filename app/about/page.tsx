import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, GraduationCap, Heart, Target } from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره من",
  description: "آشنایی با فاطمه تاجیک، مدرس زبان آلمانی در هرات",
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

const timeline = [
  {
    year: "[سال]",
    title: "[مدرک/دستاورد]",
    desc: "[توضیح کوتاه این مرحله از مسیر تحصیلی یا حرفه‌ای]",
  },
  {
    year: "[سال]",
    title: "[مدرک/دستاورد]",
    desc: "[توضیح کوتاه]",
  },
  {
    year: "[سال]",
    title: "شروع تدریس رسمی",
    desc: "شروع فعالیت رسمی به‌عنوان مدرس زبان آلمانی در هرات",
  },
  {
    year: "تاکنون",
    title: "مدرس زبان آلمانی",
    desc: `آموزش به بیش از ${siteConfig.studentsCount} زبان‌آموز در کلاس‌های خصوصی، آنلاین و گروهی`,
  },
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

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">مسیر حرفه‌ای</h2>
          </div>
          <div className="relative">
            <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-navy-100" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-white text-xs font-bold z-10 relative">
                      {item.year.length <= 4 ? item.year : "✓"}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 flex-1 border border-navy-100">
                    <p className="text-xs text-navy-400 mb-1">{item.year}</p>
                    <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
