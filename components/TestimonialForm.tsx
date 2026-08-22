"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Star, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  level: string;
  duration: string;
  goal: string;
  text: string;
  rating: number;
}

const initialForm: FormData = {
  name: "",
  level: "",
  duration: "",
  goal: "",
  text: "",
  rating: 5,
};

interface NewTestimonial {
  id: string;
  name: string;
  level: string;
  duration: string;
  goal: string;
  text: string;
  rating: number;
}

interface TestimonialFormProps {
  onNewTestimonial?: (t: NewTestimonial) => void;
}

export default function TestimonialForm({ onNewTestimonial }: TestimonialFormProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "نام الزامی است";
    if (!form.text.trim()) e.text = "متن نظر الزامی است";
    if (!form.level) e.level = "سطح را انتخاب کنید";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("خطا در ارسال");

      const newItem = await res.json();
      onNewTestimonial?.(newItem);
      setSubmitted(true);
    } catch {
      setServerError("مشکلی پیش آمد. لطفاً دوباره امتحان کنید.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((p) => ({ ...p, [name]: "" }));
  };

  const inputClass = (field: keyof FormData) =>
    cn(
      "w-full px-4 py-3 rounded-xl border text-sm text-navy-900 placeholder-navy-400 bg-white transition-all outline-none focus:ring-2 focus:ring-navy-300 focus:border-navy-400",
      errors[field] ? "border-red-300" : "border-navy-200 hover:border-navy-300"
    );

  return (
    <div className="mt-12 bg-white rounded-2xl border border-navy-100 shadow-sm p-8">
      <div className="text-center mb-6">
        <h2 className="font-bold text-navy-900 text-xl mb-2">شما هم زبان‌آموز هستید؟</h2>
        <p className="text-navy-500 text-sm">تجربه‌تان را با ما در میان بگذارید.</p>
      </div>

      {/* Toggle button */}
      {!open && !submitted && (
        <div className="text-center">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Star className="w-4 h-4" />
            ارسال نظر
          </button>
        </div>
      )}

      {/* Success */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="font-bold text-navy-900 text-lg mb-2">نظر شما ثبت شد!</h3>
            <p className="text-navy-500 text-sm mb-4">نظر شما همین الان روی صفحه نمایش داده می‌شود.</p>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); setOpen(false); }}
              className="text-sm text-navy-500 hover:text-navy-800 underline underline-offset-4"
            >
              ارسال نظر جدید
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <AnimatePresence>
        {open && !submitted && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4 mt-6 overflow-hidden"
            noValidate
          >
            {/* Stars */}
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-2">امتیاز</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, rating: star }))}
                    className="transition-transform hover:scale-110"
                  >
                    <Star className={cn("w-7 h-7", star <= form.rating ? "text-gold-400 fill-gold-400" : "text-navy-200")} />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">نام <span className="text-red-400">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="نام شما" className={inputClass("name")} />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">سطح <span className="text-red-400">*</span></label>
                <select name="level" value={form.level} onChange={handleChange} className={inputClass("level")}>
                  <option value="">انتخاب سطح...</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </select>
                {errors.level && <p className="mt-1 text-xs text-red-500">{errors.level}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">مدت آموزش</label>
                <input type="text" name="duration" value={form.duration} onChange={handleChange} placeholder="مثال: ۶ ماه" className={inputClass("duration")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">هدف</label>
                <input type="text" name="goal" value={form.goal} onChange={handleChange} placeholder="مثال: مهاجرت، آزمون گوته..." className={inputClass("goal")} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5">نظر شما <span className="text-red-400">*</span></label>
              <textarea name="text" value={form.text} onChange={handleChange} rows={4} placeholder="تجربه خود را بنویسید..." className={cn(inputClass("text"), "resize-none")} />
              {errors.text && <p className="mt-1 text-xs text-red-500">{errors.text}</p>}
            </div>

            {serverError && <p className="text-sm text-red-500 text-center">{serverError}</p>}

            <div className="flex gap-3">
              <button type="submit" disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-900 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> در حال ارسال...</> : <><Send className="w-4 h-4" /> ارسال نظر</>}
              </button>
              <button type="button" onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-xl border border-navy-200 text-navy-600 hover:bg-navy-50 text-sm font-medium transition-colors">
                انصراف
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
