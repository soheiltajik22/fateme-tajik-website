import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-navy-200 mb-4">۴۰۴</p>
        <h1 className="text-2xl font-bold text-navy-900 mb-3">صفحه پیدا نشد</h1>
        <p className="text-navy-500 mb-8">
          صفحه‌ای که به دنبالش بودید وجود ندارد یا منتقل شده.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
