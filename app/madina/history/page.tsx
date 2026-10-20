import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "بانوراما", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث", href: "/madina/heritage" },
];

const timeline = [
  {
    period: "ما قبل التاريخ",
    title: "التوطن الإنساني الأول",
    desc: "شواهد أثرية تدل على استيطان إنساني قديم في المنطقة الساحلية، تمتد جذوره إلى العصر الحجري.",
  },
  {
    period: "العصر الوسيط",
    title: "التوطن القبلي والزراعي",
    desc: "استقرت قبائل أمازيغية وعربية في المنطقة وأسست مجتمعات زراعية قائمة على الفلاحة والرعي.",
  },
  {
    period: "القرن 17-18م",
    title: "تطور السوق الأسبوعي",
    desc: "اشتهرت المنطقة بسوقها الأسبوعي المنعقد يوم الأربعاء، مما أكسبها تسميتها الحالية.",
  },
  {
    period: "العهد الاستعماري",
    title: "الحماية الفرنسية (1912-1956)",
    desc: "أدرجت المنطقة ضمن التقطيع الإداري الفرنسي، وشهدت بعض التحولات في البنية التحتية.",
  },
  {
    period: "1956 — الاستقلال",
    title: "إعادة البناء والتنظيم الإداري",
    desc: "بعد الاستقلال، أُعيد تنظيم الجماعة ضمن الإطار الإداري المغربي وبدأت مرحلة التنمية المحلية.",
  },
  {
    period: "2002 — اليوم",
    title: "التطوير والتحديث",
    desc: "شرعت الجماعة في تنفيذ برامج تنموية متعاقبة لتحسين ظروف عيش الساكنة في مختلف المجالات.",
  },
];

export default function HistoryPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="نبذة تاريخية" subtitle="تاريخ منطقة اربعاء الساحل عبر العصور" />
      <Breadcrumb items={[{ label: "مدينتي", href: "/madina" }, { label: "نبذة تاريخية" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي" items={sidebarItems} currentPath="/madina/history" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">تاريخ اربعاء الساحل</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                تحمل منطقة اربعاء الساحل إرثاً تاريخياً عميقاً يتجلى في تنوع ساكنتها وتعدد روافدها
                الحضارية التي صاغت هويتها الأصيلة عبر القرون.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-green-100"></div>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-bold text-center leading-tight flex-shrink-0 z-10"
                      style={{ backgroundColor: "#006233" }}
                    >
                      {item.period.split(" ").slice(-1)[0]}
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5 mt-2">
                      <div className="text-xs text-gray-400 mb-1">{item.period}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
