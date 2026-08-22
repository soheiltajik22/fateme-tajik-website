# راهنمای نصب و راه‌اندازی

## پیش‌نیازها
- Node.js نسخه ۱۸ یا بالاتر
- npm یا yarn یا pnpm

## مراحل نصب

### ۱. نصب پکیج‌ها
پنجره Terminal/PowerShell را در پوشه پروژه باز کنید:

```bash
cd "C:\Users\sohei\OneDrive\Desktop\Fateme website"
npm install
```

### ۲. اجرا در حالت توسعه
```bash
npm run dev
```
سایت روی `http://localhost:3000` در دسترس خواهد بود.

### ۳. Build برای production
```bash
npm run build
npm start
```

---

## ساختار پروژه

```
Fateme website/
├── app/                    # صفحات (App Router)
│   ├── page.tsx            # صفحه اصلی
│   ├── about/page.tsx      # درباره من
│   ├── resume/page.tsx     # رزومه
│   ├── services/page.tsx   # خدمات
│   ├── courses/page.tsx    # دوره‌ها
│   ├── booking/page.tsx    # رزرو کلاس
│   ├── blog/               # وبلاگ
│   ├── testimonials/       # نظرات
│   └── contact/page.tsx    # تماس
├── components/             # کامپوننت‌های قابل استفاده مجدد
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/               # بخش‌های صفحه اصلی
│   ├── ServiceCard.tsx
│   ├── CourseCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FAQ.tsx
│   ├── BookingForm.tsx
│   └── ContactForm.tsx
├── data/                   # داده‌های نمونه (بعداً به دیتابیس وصل می‌شود)
│   ├── site.ts             # اطلاعات اصلی سایت
│   ├── services.ts         # خدمات
│   ├── courses.ts          # دوره‌ها
│   ├── testimonials.ts     # نظرات
│   ├── faq.ts              # سوالات متداول
│   └── blog.ts             # مقالات
└── lib/
    └── utils.ts            # توابع کمکی
```

---

## اطلاعاتی که باید تکمیل شود

### در فایل `data/site.ts`:
- `phone` — شماره تلفن واقعی
- `whatsapp` — شماره واتساپ
- `email` — آدرس ایمیل
- `instagram` — آیدی اینستاگرام
- `telegram` — آیدی تلگرام
- `experience` — سال‌های تجربه
- `studentsCount` — تعداد زبان‌آموزان
- `qualifications` — مدارک تحصیلی واقعی

### در فایل `data/courses.ts`:
- `price` برای هر دوره — شهریه واقعی

### تصاویر:
- عکس پروفایل مدرس را در `public/images/profile.jpg` قرار دهید
- سپس در `HeroSection.tsx` و سایر کامپوننت‌ها از `<Image>` استفاده کنید

---

## توسعه آینده
- اتصال به دیتابیس (Prisma + PostgreSQL یا MongoDB)
- سیستم احراز هویت برای پنل مدیریت
- API Routes برای ذخیره فرم‌ها
- پشتیبانی چند زبانه (next-intl)
- پرداخت آنلاین
