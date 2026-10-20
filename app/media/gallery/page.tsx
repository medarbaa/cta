"use client";

import { useState } from "react";
import {
  HardHat,
  Route,
  Waves,
  Landmark,
  Trophy,
  HeartHandshake,
  PartyPopper,
  Camera,
  ArrowLeft,
  ImageOff,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "صور وفيديو", href: "/media/gallery" },
  { label: "الإعلانات والإشعارات", href: "/media/announcements" },
];

const categoryIcons: Record<string, LucideIcon> = {
  "مشاريع": HardHat,
  "بنية تحتية": Route,
  "بيئة": Waves,
  "مجلس": Landmark,
  "رياضة": Trophy,
  "اجتماعي": HeartHandshake,
  "شراكات": HeartHandshake,
};

// عدّل هذه البيانات بالأنشطة الحقيقية (ويفضّل إضافة حقل image لكل عنصر)
const galleryItems = [
  { title: "افتتاح مركز الصحة بدوار سيدي علي", date: "2025-09-20", category: "مشاريع" },
  { title: "أشغال تهيئة الطريق الجماعية رقم 4", date: "2025-10-05", category: "بنية تحتية" },
  { title: "حملة نظافة الشاطئ الأطلسي", date: "2025-10-01", category: "بيئة" },
  { title: "دورة المجلس الجماعي — أكتوبر 2025", date: "2025-10-10", category: "مجلس" },
  { title: "إنجاز ملعب القرب بدوار سيدي محمد", date: "2025-09-10", category: "رياضة" },
  { title: "توزيع مساعدات على الأسر المعوزة", date: "2025-08-15", category: "اجتماعي" },
  { title: "اجتماع مع المديرية الإقليمية للفلاحة", date: "2025-09-05", category: "شراكات" },
];

const ARABIC_MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو",
  "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر",
];

function formatDate(value: string) {
  const [y, m, d] = value.split("-").map(Number);
  return `${d} ${ARABIC_MONTHS[m - 1]} ${y}`;
}

const categories = ["الكل", ...Array.from(new Set(galleryItems.map((i) => i.category)))];

export default function GalleryPage() {
  const [active, setActive] = useState("الكل");

  const filtered =
    active === "الكل" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="صور وفيديو" subtitle="مكتبة الصور والمقاطع المصورة" />
      <Breadcrumb items={[{ label: "الإعلام", href: "/media" }, { label: "صور وفيديو" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الإعلام" items={sidebarItems} currentPath="/media/gallery" />

          <div className="flex-1 min-w-0">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#0038A8] text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-[#0038A8] hover:text-[#0038A8]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <ImageOff className="w-10 h-10 mx-auto mb-3 text-slate-300" strokeWidth={1.5} />
                لا توجد عناصر في هذه الفئة.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item) => {
                  const Icon = categoryIcons[item.category] ?? Camera;
                  return (
                    <article
                      key={item.title}
                      className="service-card bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                    >
                      {/* Image placeholder */}
                      <div className="h-44 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#00226B] to-[#0038A8]">
                        <div className="relative z-10 text-center">
                          <Icon className="w-12 h-12 mx-auto mb-3 text-white/90" strokeWidth={1.25} />
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFDE00] text-[#00226B]">
                            {item.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity inline-flex items-center gap-1.5">
                            عرض
                            <ArrowLeft className="w-4 h-4" strokeWidth={2.25} />
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-slate-800 text-sm mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <div className="text-xs text-slate-400">{formatDate(item.date)}</div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}