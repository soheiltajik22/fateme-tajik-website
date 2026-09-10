"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "نام الزامی است";
    if (!form.message.trim()) newErrors.message = "پیام الزامی است";
    if (!form.phone.trim() && !form.email.trim())
      newErrors.phone = "حداقل یکی از شماره تماس یا ایمیل الزامی است";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsappUrl = () => {
    const lines = ["*پیام از وبسایت*", "", `نام: ${form.name}`];
    if (form.phone.trim()) lines.push(`شماره تماس: ${form.phone}`);
    if (form.email.trim()) lines.push(`ایمیل: ${form.email}`);
    if (form.subject.trim()) lines.push(`موضوع: ${form.subject}`);
    lines.push("", `پیام: ${form.message.trim()}`);

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
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
          پیام شما آماده ارسال است!
        </h3>
        <p className="text-navy-600 mb-6 leading-relaxed">
          واتساپ در یک تب جدید باز شد. فقط دکمه ارسال را بزنید.
          <br />
          اگر باز نشد، روی دکمه زیر کلیک کنید.
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
          ارسال پیام جدید
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof ContactFormData) =>
    cn(
      "w-full px-4 py-3 rounded-xl border text-sm text-navy-900 placeholder-navy-400 bg-white transition-all duration-200 outline-none",
      "focus:ring-2 focus:ring-navy-300 focus:border-navy-400",
      errors[field]
        ? "border-red-300 ring-1 ring-red-200"
        : "border-navy-200 hover:border-navy-300"
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            نام <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام شما"
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1.5">
            شماره تماس
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="شماره تماس"
            className={cn(inputClass("phone"), "ltr-text")}
            dir="ltr"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          ایمیل
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@example.com"
          className={cn(inputClass("email"), "ltr-text")}
          dir="ltr"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          موضوع
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass("subject")}
        >
          <option value="">انتخاب موضوع...</option>
          <option value="info">اطلاعات بیشتر</option>
          <option value="booking">رزرو کلاس</option>
          <option value="price">استعلام قیمت</option>
          <option value="exam">آمادگی آزمون</option>
          <option value="other">سایر</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          پیام <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="پیام خود را اینجا بنویسید..."
          className={cn(inputClass("message"), "resize-none")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

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
            <Send className="w-5 h-5" />
            ارسال پیام
          </>
        )}
      </button>
    </form>
  );
}
