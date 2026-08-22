import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "خدمات آموزشی",
  description: "انواع کلاس‌های زبان آلمانی: خصوصی، آنلاین، گروهی و دوره‌های فشرده",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            خدمات آموزشی
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            روشی که با شما تناسب دارد
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto text-lg">
            بسته به برنامه، هدف و شرایط شما، یکی از سبک‌های آموزشی زیر را انتخاب کنید.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-10">مقایسه روش‌های آموزشی</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-navy-100 shadow-sm overflow-hidden text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-right px-6 py-4 font-semibold">ویژگی</th>
                  <th className="text-center px-6 py-4 font-semibold">خصوصی</th>
                  <th className="text-center px-6 py-4 font-semibold">آنلاین</th>
                  <th className="text-center px-6 py-4 font-semibold">گروهی</th>
                  <th className="text-center px-6 py-4 font-semibold">فشرده</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "انعطاف در زمان‌بندی", values: ["✓✓", "✓✓", "محدود", "محدود"] },
                  { feature: "توجه شخصی", values: ["کامل", "کامل", "جزئی", "کامل"] },
                  { feature: "تعامل اجتماعی", values: ["−", "−", "✓✓", "−"] },
                  { feature: "سرعت پیشرفت", values: ["بالا", "بالا", "متوسط", "خیلی بالا"] },
                  { feature: "هزینه", values: ["متوسط", "متوسط", "اقتصادی", "متوسط"] },
                  { feature: "مناسب برای آزمون", values: ["✓", "✓", "جزئی", "✓✓"] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-navy-800">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-6 py-4 text-center text-navy-600">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            مطمئن نیستید کدام روش برای شما مناسب‌تر است؟
          </h2>
          <p className="text-navy-300 mb-8">
            در یک جلسه مشاوره رایگان با هم بررسی می‌کنیم.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            رزرو مشاوره رایگان
          </Link>
        </div>
      </section>
    </div>
  );
}
