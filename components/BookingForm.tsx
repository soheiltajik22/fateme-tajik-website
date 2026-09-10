"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Calendar, User, Phone, BookOpen, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface FormData {
  name: string;
  phone: string;
  level: string;
  classType: string;
  preferredTime: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  level: "",
  classType: "",
  preferredTime: "",
  message: "",
};

interface BookingFormProps {
  compact?: boolean;
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "نام الزامی است";
    if (!form.phone.trim()) newErrors.phone = "شماره تماس الزامی است";
    if (!form.level) newErrors.level = "سطح را انتخاب کنید";
    if (!form.classType) newErrors.classType = "نوع کلاس را انتخاب کنید";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsappUrl = () => {
    const lines = [
      "*درخواست رزرو کلاس*",
      "",
      `نام: ${form.name}`,
      `شماره تماس: ${form.phone}`,
      `سطح: ${form.level}`,
      `نوع کلاس: ${form.classType}`,
    ];
    if (form.preferredTime) lines.push(`زمان ترجیحی: ${form.preferredTime}`);
    if (form.message.trim()) lines.push("", `توضیحات: ${form.message.trim()}`);
    lines.push("", "— ارسال شده از وبسایت");

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // WhatsApp in neuem Tab öffnen (vor dem await, damit Popup-Blocker nicht greift)
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">
          درخواست شما آماده ارسال است!
        </h3>
        <p className="text-navy-600 mb-6 leading-relaxed">
          واتساپ در یک تب جدید باز شد. فقط دکمه ارسال را بزنید تا درخواست شما برسد.
          <br />
          اگر واتساپ باز نشد، روی دکمه زیر کلیک کنید.
        </p>
        <a
          href={buildWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors mb-5"
        >
          <MessageSquare className="w-4 h-4" />
          ارسال در واتساپ
        </a>
        <br />
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="text-sm text-navy-600 hover:text-navy-800 underline underline-offset-4 transition-colors"
        >
          ارسال درخواست جدید
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full px-4 py-3 rounded-xl border text-sm text-navy-900 placeholder-navy-400 bg-white transition-all duration-200 outline-none",
      "focus:ring-2 focus:ring-navy-300 focus:border-navy-400",
      errors[field]
        ? "border-red-300 ring-1 ring-red-200"
        : "border-navy-200 hover:border-navy-300"
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className={cn("grid gap-5", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            نام و نام خانوادگی <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="نام کامل خود را وارد کنید"
              className={inputClass("name")}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            شماره تماس <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="مثال: ۰۷۰۰۰۰۰۰۰۰۰"
            className={cn(inputClass("phone"), "ltr-text")}
            dir="ltr"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            سطح فعلی <span className="text-red-400">*</span>
          </label>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className={inputClass("level")}
          >
            <option value="">انتخاب سطح...</option>
            <option value="beginner">مبتدی (بدون سابقه)</option>
            <option value="a1">A1 - مقدماتی</option>
            <option value="a2">A2 - پایه</option>
            <option value="b1">B1 - متوسط</option>
            <option value="b2">B2 - بالاتر از متوسط</option>
            <option value="unknown">نمی‌دانم (ارزیابی رایگان)</option>
          </select>
          {errors.level && (
            <p className="mt-1.5 text-xs text-red-500">{errors.level}</p>
          )}
        </div>

        {/* Class type */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            نوع کلاس <span className="text-red-400">*</span>
          </label>
          <select
            name="classType"
            value={form.classType}
            onChange={handleChange}
            className={inputClass("classType")}
          >
            <option value="">انتخاب نوع کلاس...</option>
            <option value="private">کلاس خصوصی</option>
            <option value="online">کلاس آنلاین</option>
            <option value="group">کلاس گروهی</option>
            <option value="intensive">دوره فشرده</option>
            <option value="exam-prep">آمادگی آزمون</option>
          </select>
          {errors.classType && (
            <p className="mt-1.5 text-xs text-red-500">{errors.classType}</p>
          )}
        </div>
      </div>

      {/* Preferred time */}
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            زمان ترجیحی
          </label>
          <select
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className={inputClass("preferredTime")}
          >
            <option value="">انتخاب بازه زمانی...</option>
            <option value="morning">صبح (۸–۱۲)</option>
            <option value="afternoon">بعدازظهر (۱۲–۱۷)</option>
            <option value="evening">عصر و شب (۱۷–۲۱)</option>
            <option value="flexible">انعطاف‌پذیر</option>
          </select>
        </div>
      )}

      {/* Message */}
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            توضیحات اضافی (اختیاری)
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="هدف، سوال یا توضیحاتی که می‌خواهید مدرس بداند..."
            className={cn(inputClass("message"), "resize-none")}
          />
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-900 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            در حال ارسال...
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            ثبت درخواست رزرو
          </>
        )}
      </button>

      <p className="text-xs text-center text-navy-400">
        پس از ثبت درخواست، در کمتر از ۲۴ ساعت با شما تماس می‌گیریم.
      </p>
    </form>
  );
}
