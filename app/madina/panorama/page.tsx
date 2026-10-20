import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { communeInfo, stats } from "@/lib/data";

const sidebarItems = [
  { label: "بانوراما وجغرافيا", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث والمؤهلات", href: "/madina/heritage" },
];

export default function PanoramaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="بانوراما وجغرافيا أربعاء الساحل"
        subtitle="الموقع الجغرافي، التضاريس، والمؤهلات الطبيعية بإقليم تيزنيت"
      />
      <Breadcrumb items={[{ label: "مدينتي ومجالي", href: "/madina" }, { label: "بانوراما وجغرافيا" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي ومجالي" items={sidebarItems} currentPath="/madina/panorama" />

          <main className="flex-1 space-y-6">
            {/* General Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-[#0038A8] mb-4">
                الموقع الاستراتيجي والحدود الترابية
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                تعتبر <strong>الجماعة الترابية أربعاء الساحل</strong> إحدى أقدم وأهم الجماعات القروية بإقليم تيزنيت (جهة سوس ماسة)، بمساحة شاسعة تبلغ حوالي <strong>345 كيلومتراً مربعاً</strong>. تتميز الجماعة بموقعها الجغرافي الفريد الذي يجمع بين الواجهة البحرية الممتدة على المحيط الأطلسي والمجالات التلية والجبلية للأطلس الصغير الغربي.
              </p>

              {/* Geographic Limits Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
                <div className="bg-[#EBF2FF] border border-blue-200 p-3.5 rounded-xl text-center">
                  <div className="text-xs text-[#0038A8] font-bold mb-1">شمالاً:</div>
                  <div className="font-extrabold text-slate-800 text-sm">جماعة أكلو (شاطئ أكلو)</div>
                </div>
                <div className="bg-[#EBF2FF] border border-blue-200 p-3.5 rounded-xl text-center">
                  <div className="text-xs text-[#0038A8] font-bold mb-1">جنوباً:</div>
                  <div className="font-extrabold text-slate-800 text-sm">جماعة مير اللفت (إقليم سيدي إفني)</div>
                </div>
                <div className="bg-[#EBF2FF] border border-blue-200 p-3.5 rounded-xl text-center">
                  <div className="text-xs text-[#0038A8] font-bold mb-1">شرقاً:</div>
                  <div className="font-extrabold text-slate-800 text-sm">جماعتا بونعمان وسيدي بوعبداللي</div>
                </div>
                <div className="bg-[#FEF3C7] border border-amber-200 p-3.5 rounded-xl text-center">
                  <div className="text-xs text-amber-900 font-bold mb-1">غرباً:</div>
                  <div className="font-extrabold text-[#00226B] text-sm">شريط المحيط الأطلسي</div>
                </div>
              </div>
            </div>

            {/* Official Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center">
                  <div className="text-2xl font-black text-[#0038A8] mb-1">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.unit}</div>
                  <div className="text-[11px] font-bold text-slate-700 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Climate & Terrain */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-black text-slate-900 text-base mb-4 flex items-center gap-2">
                <span>⛰️</span>
                <span>المناخ والتضاريس والموارد المائية</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#0038A8] text-sm">المناخ والغطاء النباتي</h4>
                  <p>
                    يسود المنطقة مناخ شبه جاف بتأثيرات بحرية أطلسية تلطف درجات الحرارة صيفاً وتمنح رطوبة متكررة وشتاء معتدلاً. ينتشر في مجال الجماعة شجر الأركان المميز لجهة سوس ماسة، إلى جانب نباتات الصبار والأعشاب الطبية والعطرية.
                  </p>
                </div>
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#0038A8] text-sm">الشبكة المائية والدواوير</h4>
                  <p>
                    تضم الجماعة أكثر من 91 دواراً متفرقاً عبر مشيخات المنطقة (أبرزها مشيخة الساحل)، وتعتمد الساكنة على الآبار والأثقاب المائية والمنظومات الجماعية لتزويد الدواوير بالمياه الصالحة للشرب والسقي الفلاحي الموسمي.
                  </p>
                </div>
              </div>
            </div>

            {/* Economic Hubs */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-black text-slate-900 text-base mb-4 flex items-center gap-2">
                <span>🛒</span>
                <span>الروافد الاقتصادية الكبرى بالجماعة</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50">
                  <div className="text-3xl mb-2">🏪</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">السوق الأسبوعي (الأربعاء)</div>
                  <div className="text-xs text-slate-500">
                    رئة التجارة المحلية لبيع المواشي، الخضر، والفواكه، ومواد المعيشة اليومية.
                  </div>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50">
                  <div className="text-3xl mb-2">🐟</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">الصيد البحري التقليدي</div>
                  <div className="text-xs text-slate-500">
                    واجهة أطلسية غنية بأنواع الأسماك ومورد عيش للعديد من الأسر والبحارة.
                  </div>
                </div>
                <div className="border border-slate-200 p-4 rounded-xl text-center bg-slate-50">
                  <div className="text-3xl mb-2">🐐</div>
                  <div className="font-bold text-slate-900 text-sm mb-1">الفلاحة وتربية الماشية</div>
                  <div className="text-xs text-slate-500">
                    تربية الأغنام والماعز والأبقار، مع إنتاج زيت الأركان الطبيعي عبر التعاونيات النسوية.
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
