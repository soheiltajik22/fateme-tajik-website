import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "مقاله یافت نشد" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-16">
        <div className="container-custom max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به وبلاگ
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-navy-300 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span className="text-navy-400 text-xs">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-navy-300 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {/* Content placeholder */}
          <div className="prose prose-lg max-w-none text-navy-700 leading-loose">
            <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6 mb-8">
              <p className="text-navy-800 font-semibold mb-1">محتوای مقاله</p>
              <p className="text-navy-600 text-sm">
                محتوای کامل این مقاله اینجا قرار می‌گیرد. می‌توانید محتوا را در فایل{" "}
                <code className="bg-gold-100 px-1.5 py-0.5 rounded text-xs">/data/blog.ts</code>{" "}
                اضافه کنید.
              </p>
            </div>
            <p className="text-navy-600 text-sm leading-loose">
              {post.excerpt} [ادامه مقاله اینجا نوشته می‌شود...]
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-navy-100">
            <span className="flex items-center gap-1.5 text-navy-400 text-sm">
              <Tag className="w-4 h-4" />
              برچسب‌ها:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-navy-50 text-navy-600 border border-navy-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-bold text-navy-900 text-xl mb-6">مقالات مرتبط</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    className="p-5 bg-gray-50 rounded-xl border border-navy-100 hover:border-navy-200 hover:shadow-md transition-all duration-200 block"
                  >
                    <span className="text-xs text-gold-600 font-medium">{r.category}</span>
                    <p className="font-semibold text-navy-900 text-sm mt-1 leading-snug">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-navy-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3">آماده شروع یادگیری آلمانی هستید؟</h3>
            <p className="text-navy-300 mb-6 text-sm">اولین جلسه ارزیابی رایگان است.</p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              رزرو کلاس رایگان
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
