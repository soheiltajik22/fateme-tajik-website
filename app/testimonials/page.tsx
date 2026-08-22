"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialForm from "@/components/TestimonialForm";
import { siteConfig } from "@/data/site";
import { testimonials as staticTestimonials } from "@/data/testimonials";

interface Testimonial {
  id: string;
  name: string;
  level: string;
  duration: string;
  goal: string;
  text: string;
  rating: number;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((data) => {
        // If DB is empty, show static data
        if (!data || data.length === 0) {
          setTestimonials(staticTestimonials as Testimonial[]);
        } else {
          setTestimonials(data);
        }
      })
      .catch(() => {
        setTestimonials(staticTestimonials as Testimonial[]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleNewTestimonial = (t: Testimonial) => {
    setTestimonials((prev) => [t, ...prev]);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            نظرات
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            تجربه زبان‌آموزان ما
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            بیش از {siteConfig.studentsCount} زبان‌آموز تا به امروز همراه ما بوده‌اند.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-6 h-6 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-white font-black text-2xl">۵.۰</span>
            <span className="text-navy-300 text-sm">از {siteConfig.studentsCount} نظر</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-navy-100 p-6 h-48 animate-pulse">
                  <div className="h-4 bg-navy-100 rounded mb-3 w-3/4" />
                  <div className="h-3 bg-navy-100 rounded mb-2" />
                  <div className="h-3 bg-navy-100 rounded mb-2 w-5/6" />
                  <div className="h-3 bg-navy-100 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} index={i} />
              ))}
            </div>
          )}

          <TestimonialForm onNewTestimonial={handleNewTestimonial} />
        </div>
      </section>
    </div>
  );
}
