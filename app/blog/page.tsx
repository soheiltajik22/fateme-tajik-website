import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowLeft } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "وبلاگ",
  description: "مقالات آموزشی درباره یادگیری زبان آلمانی، گرامر، آزمون‌ها و فرهنگ",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            وبلاگ
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            مقالات آموزشی
          </h1>
          <p className="text-navy-300 max-w-xl mx-auto">
            راهنماها و مقالات مفید برای بهتر یادگرفتن زبان آلمانی.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-xl text-sm font-medium border border-navy-200 text-navy-700 hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-all duration-200"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="bg-gradient-to-br from-navy-800 to-navy-950 rounded-3xl p-8 md:p-10 mb-10 text-white">
            <div className="max-w-2xl">
              <span className="inline-block bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                مقاله پیشنهادی
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-navy-300 mb-6 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-navy-400 mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featured.readTime}
                </div>
                <span>{featured.date}</span>
                <span className="bg-navy-700 px-2.5 py-1 rounded-full">{featured.category}</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors text-sm"
              >
                مطالعه مقاله
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Rest */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-navy-100 hover:border-navy-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Article image */}
                <div className="h-40 bg-gradient-to-br from-navy-100 to-navy-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-navy-400 text-sm">[تصویر مقاله]</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy-400">{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-navy-900 mb-2 leading-snug group-hover:text-navy-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-navy-400">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-navy-700 hover:text-navy-900 font-medium flex items-center gap-1 transition-colors"
                    >
                      ادامه
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
