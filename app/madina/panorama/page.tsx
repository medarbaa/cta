import { Mountain, Store, Fish, Sprout } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { communeInfo, stats } from "@/lib/data";

const sidebarItems = [
  { label: "بانوراما وجغرافيا", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث والمؤهلات", href: "/madina/heritage" },
];

const limits = [
  { dir: "شمالاً", value: "جماعة أكلو" },
  { dir: "جنوباً", value: "جماعة مير اللفت (إقليم سيدي إفني)" },
  { dir: "شرقاً", value: "جماعتا بونعمان وسيدي بوعبداللي" },
  { dir: "غرباً", value: "المحيط الأطلسي", accent: true },
];

const economy = [
  {
    title: "السوق الأسبوعي (الأربعاء)",
    Icon: Store,
    desc: "رئة التجارة المحلية لبيع المواشي والخضر والفواكه ومواد المعيشة اليومية.",
  },
  {
    title: "الصيد البحري التقليدي",
    Icon: Fish,
    desc: "واجهة أطلسية غنية بأنواع الأسماك ومورد عيش للعديد من الأسر والبحارة.",
  },
  {
    title: "الفلاحة وتربية الماشية",
    Icon: Sprout,
    desc: "تربية الأغنام والماعز والأبقار، مع إنتاج زيت الأركان الطبيعي عبر التعاونيات.",
  },
];

export default function PanoramaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="بانوراما وجغرافيا أربعاء الساحل"
        subtitle="الموقع الجغرافي والتضاريس والمؤهلات الطبيعية بإقليم تيزنيت"
      />
      <Breadcrumb
        items={[{ label: "مدينتي ومجالي", href: "/madina" }, { label: "بانوراما وجغرافيا" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي ومجالي" items={sidebarItems} currentPath="/madina/panorama" />

          <div className="flex-1 min-w-0 space-y-6">
            {/* General Overview */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6">
              <h2 className="text-xl font-black text-[#0038A8] mb-4">
                الموقع الجغرافي والحدود الترابية
              </h2>
              <p className="text-slate-600 text-[15px] leading-loose mb-4">
                الجماعة الترابية أربعاء الساحل جماعة قروية بإقليم تيزنيت (جهة سوس ماسة)، تمتد على
                مساحة تبلغ حوالي {communeInfo.area} كيلومتراً مربعاً. تتميز بموقع جغرافي يجمع بين
                الواجهة البحرية على المحيط الأطلسي والمجالات الداخلية ذات الطابع الفلاحي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {limits.map((l) => (
                  <div
                    key={l.dir}
                    className={`p-3.5 rounded-xl text-center border ${
                      l.accent
                        ? "bg-[#EBF2FF] border-[#FFDE00]"
                        : "bg-[#EBF2FF] border-[#BFD5FF]"
                    }`}
                  >
                    <div className="text-xs text-[#0038A8] font-bold mb-1">{l.dir}</div>
                    <div className="font-extrabold text-slate-800 text-sm">{l.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Official Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center"
                >
                  <div className="text-2xl font-black text-[#0038A8] mb-1 stat-number">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-400">{s.unit}</div>
                  <div className="text-[11px] font-bold text-slate-700 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Climate & Terrain */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-black text-slate-900 text-base mb-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <span>المناخ والتضاريس والموارد المائية</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 leading-relaxed">
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#0038A8]">المناخ والغطاء النباتي</h4>
                  <p>
                    يسود المنطقة مناخ شبه جاف بتأثيرات بحرية أطلسية تلطف درجات الحرارة صيفاً وتمنح
                    رطوبة متكررة وشتاء معتدلاً. وينتشر في مجال الجماعة شجر الأركان المميز لجهة سوس
                    ماسة، إلى جانب نباتات الصبار والأعشاب الطبية والعطرية.
                  </p>
                </div>
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#0038A8]">الشبكة المائية والدواوير</h4>
                  <p>
                    تضم الجماعة أكثر من {communeInfo.douwars} دواراً متفرقاً، وتعتمد الساكنة على
                    الآبار والأثقاب المائية والمنظومات الجماعية لتزويد الدواوير بالماء الصالح للشرب
                    والسقي الفلاحي الموسمي.
                  </p>
                </div>
              </div>
            </section>

            {/* Economic Hubs */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-black text-slate-900 text-base mb-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <span>الروافد الاقتصادية الكبرى بالجماعة</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {economy.map(({ title, Icon, desc }) => (
                  <div
                    key={title}
                    className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center">
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <div className="font-bold text-slate-900 text-sm mb-1">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}