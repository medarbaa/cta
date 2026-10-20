"use client";

import { useEffect, useState } from "react";
import { Clock, Download, FileX } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { announcements } from "@/lib/data";

const sidebarItems = [
  { label: "صور وفيديو", href: "/media/gallery" },
  { label: "الإعلانات والإشعارات", href: "/media/announcements" },
];

type Announcement = {
  id: number;
  title: string;
  date: string;
  type: string;
  deadline?: string | null;
  reference?: string | null;
  file?: string; // رابط ملف PDF اختياري
};

const allAnnouncements: Announcement[] = [
  ...(announcements as Announcement[]),
  {
    id: 5,
    title: "إعلان عن الدورة العادية للمجلس الجماعي — دجنبر 2025",
    date: "2025-11-20",
    type: "إشعارات",
    deadline: null,
    reference: null,
  },
  {
    id: 6,
    title: "طلب عروض رقم 03/2025/AS — إنجاز مركز ترفيهي",
    date: "2025-11-01",
    type: "صفقات عمومية",
    deadline: "2025-11-30",
    reference: "03/2025/AS",
  },
].sort((a, b) => b.date.localeCompare(a.date));

const typeStyles: Record<string, string> = {
  "صفقات عمومية": "bg-amber-100 text-amber-800",
  "إشعارات": "bg-[#EBF2FF] text-[#0038A8]",
  "إعلانات": "bg-slate-100 text-slate-700",
};

const ARABIC_MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو",
  "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر",
];

function parse(value: string) {
  const [y, m, d] = value.slice(0, 10).split("-").map(Number);
  return { y, m: m - 1, d };
}
function formatDate(value: string) {
  const { y, m, d } = parse(value);
  return `${d} ${ARABIC_MONTHS[m]} ${y}`;
}

const categories = ["الكل", "صفقات عمومية", "إشعارات", "إعلانات"];

export default function AnnouncementsPage() {
  const [active, setActive] = useState("الكل");
  const [today, setToday] = useState<string | null>(null);

  // يُحسب على المتصفح فقط لتفادي اختلاف الخادم والمتصفح
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const filtered =
    active === "الكل" ? allAnnouncements : allAnnouncements.filter((a) => a.type === active);

  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="الإعلانات والإشعارات"
        subtitle="الإعلانات والإشعارات الرسمية للجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb
        items={[{ label: "الإعلام", href: "/media" }, { label: "الإعلانات والإشعارات" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الإعلام" items={sidebarItems} currentPath="/media/announcements" />

          <div className="flex-1 min-w-0">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      isActive
                        ? "bg-[#0038A8] text-white border-transparent"
                        : "bg-white border-slate-200 text-slate-600 hover:border-[#0038A8] hover:text-[#0038A8]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <FileX className="w-10 h-10 mx-auto mb-3 text-slate-300" strokeWidth={1.5} />
                لا توجد إعلانات في هذه الفئة.
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((ann) => {
                  const d = parse(ann.date);
                  const expired = !!(ann.deadline && today && ann.deadline < today);
                  return (
                    <article
                      key={ann.id}
                      className={`service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5 ${
                        expired ? "opacity-75" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-white bg-[#0038A8]">
                          <span className="text-lg font-bold leading-none text-[#FFDE00]">{d.d}</span>
                          <span className="text-[11px] text-blue-100">{ARABIC_MONTHS[d.m]}</span>
                          <span className="text-[10px] text-blue-200">{d.y}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span
                              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                typeStyles[ann.type] ?? "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {ann.type}
                            </span>
                            {expired && (
                              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-600">
                                منتهي
                              </span>
                            )}
                            {ann.reference && (
                              <span className="text-xs text-slate-400 font-mono">
                                المرجع: {ann.reference}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
                            {ann.title}
                          </h3>
                          {ann.deadline && (
                            <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                              <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                              <span>آخر أجل للإيداع: {formatDate(ann.deadline)}</span>
                            </div>
                          )}
                        </div>

                        {ann.file && (
                          <div className="flex-shrink-0">
                            <a
                              href={ann.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0038A8] hover:bg-[#00226B] px-3 py-1.5 rounded-lg transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" strokeWidth={2} />
                              تحميل
                            </a>
                          </div>
                        )}
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