import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "صور وفيديو", href: "/media/gallery" },
  { label: "الإعلانات والإشعارات", href: "/media/announcements" },
];

const galleryItems = [
  { title: "افتتاح مركز الصحة بدوار سيدي علي", date: "2025-09-20", category: "مشاريع", color: "#006233" },
  { title: "أشغال تهيئة الطريق الجماعية رقم 4", date: "2025-10-05", category: "بنية تحتية", color: "#0077b6" },
  { title: "حملة نظافة الشاطئ الأطلسي", date: "2025-10-01", category: "بيئة", color: "#2d6a4f" },
  { title: "دورة المجلس الجماعي — أكتوبر 2025", date: "2025-10-10", category: "مجلس", color: "#C1272D" },
  { title: "إنجاز ملعب القرب بحي سيدي محمد", date: "2025-09-10", category: "رياضة", color: "#f59e0b" },
  { title: "توزيع مساعدات على الأسر المعوزة", date: "2025-08-15", category: "اجتماعي", color: "#7c3aed" },
  { title: "الاحتفال بعيد الاستقلال بمقر الجماعة", date: "2025-08-18", category: "احتفالات", color: "#C1272D" },
  { title: "اجتماع مع مندوبية الفلاحة", date: "2025-09-05", category: "شراكات", color: "#006233" },
];

export default function GalleryPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="صور وفيديو" subtitle="مكتبة الصور والمقاطع المصورة" />
      <Breadcrumb items={[{ label: "الإعلام", href: "/media" }, { label: "صور وفيديو" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الإعلام" items={sidebarItems} currentPath="/media/gallery" />
          <main className="flex-1">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["الكل", "مشاريع", "بيئة", "مجلس", "رياضة", "اجتماعي"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    cat === "الكل"
                      ? "text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-green-300"
                  }`}
                  style={cat === "الكل" ? { backgroundColor: "#006233" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  {/* Image placeholder */}
                  <div
                    className="h-44 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: item.color + "22" }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl mb-2">
                        {item.category === "مشاريع" ? "🏗️" :
                         item.category === "بنية تحتية" ? "🛣️" :
                         item.category === "بيئة" ? "🌊" :
                         item.category === "مجلس" ? "🏛️" :
                         item.category === "رياضة" ? "⚽" :
                         item.category === "اجتماعي" ? "🤝" :
                         item.category === "احتفالات" ? "🎉" : "📸"}
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity">
                        عرض ←
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-400">
                      {new Date(item.date).toLocaleDateString("ar-MA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-8">
              <button
                className="px-8 py-2.5 border-2 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors"
                style={{ borderColor: "#006233" }}
              >
                تحميل المزيد
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
