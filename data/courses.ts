export interface Course {
  id: string;
  level: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  sessions: string;
  price: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    id: "a1",
    level: "A1",
    title: "مقدماتی",
    subtitle: "شروع یادگیری آلمانی",
    description:
      "اولین قدم در یادگیری زبان آلمانی. یاد می‌گیرید چطور خودتان را معرفی کنید، سوال بپرسید و درباره موضوعات ساده روزمره صحبت کنید.",
    duration: "۳ ماه",
    sessions: "۲۴ جلسه",
    price: "[قیمت تعیین نشده]",
    features: [
      "الفبا و تلفظ",
      "معرفی شخصی",
      "اعداد و تاریخ",
      "خانواده و روابط",
      "خرید و غذا",
      "مسیریابی ساده",
    ],
  },
  {
    id: "a2",
    level: "A2",
    title: "پایه",
    subtitle: "ارتباط در موقعیت‌های روزمره",
    description:
      "یاد می‌گیرید در موقعیت‌های روزمره ارتباط برقرار کنید، درباره تجربیات گذشته صحبت کنید و متون ساده را درک کنید.",
    duration: "۳ ماه",
    sessions: "۲۴ جلسه",
    price: "[قیمت تعیین نشده]",
    features: [
      "گرامر پایه",
      "زمان گذشته",
      "توصیف محیط",
      "سفر و حمل‌ونقل",
      "سلامت و بدن",
      "کار و حرفه",
    ],
    popular: true,
    badge: "محبوب‌ترین",
  },
  {
    id: "b1",
    level: "B1",
    title: "متوسط",
    subtitle: "بیان نظرات و احساسات",
    description:
      "می‌توانید نظرات و احساسات خود را بیان کنید، متون متوسط را درک کنید و در مکالمات جاری شرکت کنید.",
    duration: "۴ ماه",
    sessions: "۳۲ جلسه",
    price: "[قیمت تعیین نشده]",
    features: [
      "گرامر متوسط",
      "نوشتن نامه و ایمیل",
      "درک رادیو و تلویزیون",
      "موضوعات اجتماعی",
      "فرهنگ آلمانی‌زبان",
      "آمادگی آزمون B1",
    ],
    badge: "آمادگی مهاجرت",
  },
  {
    id: "b2",
    level: "B2",
    title: "بالاتر از متوسط",
    subtitle: "ارتباط روان و طبیعی",
    description:
      "می‌توانید با روانی و طبیعی با گویشوران بومی ارتباط برقرار کنید، متون پیچیده را درک کنید و نظرات خود را با استدلال بیان کنید.",
    duration: "۴ ماه",
    sessions: "۳۲ جلسه",
    price: "[قیمت تعیین نشده]",
    features: [
      "گرامر پیشرفته",
      "نوشتن متون رسمی",
      "تحلیل رسانه",
      "مباحث فنی و تخصصی",
      "آمادگی تحصیل در آلمان",
      "آمادگی آزمون B2",
    ],
  },
];

export const levels = [
  { level: "A1", name: "مقدماتی", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { level: "A2", name: "پایه", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { level: "B1", name: "متوسط", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { level: "B2", name: "بالاتر از متوسط", color: "bg-amber-100 text-amber-700 border-amber-200" },
];
