import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { announcements } from "@/lib/data";

const sidebarItems = [
  { label: "صور وفيديو", href: "/media/gallery" },
  { label: "الإعلانات والإشعارات", href: "/media/announcements" },
];

const allAnnouncements = [
  ...announcements,
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
];

const typeColors: Record<string, { bg: string; text: string }> = {
  "صفقات عمومية": { bg: "#fff3cd", text: "#856404" },
  "إشعارات": { bg: "#d1ecf1", text: "#0c5460" },
  "إعلانات": { bg: "#d4edda", text: "#155724" },
};

export default function AnnouncementsPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الإعلانات والإشعارات" subtitle="الإعلانات والإشعارات الرسمية لجماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الإعلام", href: "/media" }, { label: "الإعلانات والإشعارات" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الإعلام" items={sidebarItems} currentPath="/media/announcements" />
          <main className="flex-1">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["الكل", "صفقات عمومية", "إشعارات", "إعلانات"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    cat === "الكل"
                      ? "text-white border-transparent"
                      : "bg-white border-gray-200 text-gray-600 hover:border-green-300"
                  }`}
                  style={cat === "الكل" ? { backgroundColor: "#006233" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {allAnnouncements.map((ann) => {
                const colors = typeColors[ann.type] || { bg: "#f3f4f6", text: "#6b7280" };
                return (
                  <div
                    key={ann.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-white"
                        style={{ backgroundColor: "#006233" }}
                      >
                        <span className="text-lg font-bold leading-none">
                          {new Date(ann.date).getDate()}
                        </span>
                        <span className="text-xs text-green-200">
                          {new Date(ann.date).toLocaleDateString("ar-MA", { month: "short" })}
                        </span>
                        <span className="text-xs text-green-300">
                          {new Date(ann.date).getFullYear()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                            style={{ backgroundColor: colors.bg, color: colors.text }}
                          >
                            {ann.type}
                          </span>
                          {ann.reference && (
                            <span className="text-xs text-gray-400 font-mono">
                              المرجع: {ann.reference}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">
                          {ann.title}
                        </h3>
                        {ann.deadline && (
                          <div className="flex items-center gap-1 text-xs text-red-600 font-medium">
                            <span>⏰</span>
                            <span>آخر أجل للإيداع: {new Date(ann.deadline).toLocaleDateString("ar-MA", { year: "numeric", month: "long", day: "numeric" })}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          className="text-xs font-medium text-white px-3 py-1.5 rounded-lg transition"
                          style={{ backgroundColor: "#006233" }}
                        >
                          تحميل
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
