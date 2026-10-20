import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "بانوراما", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث", href: "/madina/heritage" },
];

// راجع هذه المعطيات مع مصادر موثقة قبل النشر
const timeline = [
  {
    badge: "قديماً",
    period: "العصور القديمة",
    title: "التوطن الإنساني الأول",
    desc: "عرفت المنطقة الساحلية استقراراً بشرياً منذ القدم، بحكم موقعها على الواجهة الأطلسية وخصوبة أراضيها.",
  },
  {
    badge: "الوسيط",
    period: "العصر الوسيط",
    title: "التوطن القبلي والزراعي",
    desc: "استقرت قبائل أمازيغية وعربية في المنطقة وأسست مجتمعات قائمة على الفلاحة والرعي.",
  },
  {
    badge: "السوق",
    period: "مرحلة تاريخية",
    title: "تطور السوق الأسبوعي",
    desc: "اشتهرت المنطقة بسوقها الأسبوعي المنعقد يوم الأربعاء، وارتبطت به تسميتها الحالية.",
  },
  {
    badge: "1912",
    period: "الحماية الفرنسية (1912-1956)",
    title: "العهد الاستعماري",
    desc: "أُدرجت المنطقة ضمن التقطيع الإداري للحماية، وشهدت بعض التحولات في البنية التحتية.",
  },
  {
    badge: "1956",
    period: "الاستقلال",
    title: "إعادة البناء والتنظيم الإداري",
    desc: "بعد الاستقلال، أُعيد تنظيم الجماعة ضمن الإطار الإداري المغربي وبدأت مرحلة التنمية المحلية.",
  },
  {
    badge: "اليوم",
    period: "2015 — اليوم",
    title: "التطوير والتحديث",
    desc: "تشتغل الجماعة وفق القانون التنظيمي 113.14 على تنفيذ برامج تنموية لتحسين ظروف عيش الساكنة في مختلف المجالات.",
  },
];

export default function HistoryPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="نبذة تاريخية" subtitle="تاريخ منطقة أربعاء الساحل عبر العصور" />
      <Breadcrumb items={[{ label: "مدينتي", href: "/madina" }, { label: "نبذة تاريخية" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي" items={sidebarItems} currentPath="/madina/history" />

          <div className="flex-1 min-w-0">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">تاريخ أربعاء الساحل</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
                تحمل منطقة أربعاء الساحل إرثاً تاريخياً يتجلى في تنوع ساكنتها وتعدد روافدها
                الحضارية التي صاغت هويتها عبر القرون.
              </p>
            </section>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-[#BFD5FF]"></div>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.period} className="flex gap-6 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00226B] to-[#0038A8] border-2 border-[#FFDE00] text-white text-xs font-bold text-center leading-tight flex items-center justify-center flex-shrink-0 z-10">
                      {item.badge}
                    </div>
                    <article className="service-card flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-5 mt-1">
                      <div className="text-xs font-semibold text-[#0038A8] mb-1">{item.period}</div>
                      <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}