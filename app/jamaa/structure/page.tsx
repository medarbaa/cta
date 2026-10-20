import { ChevronLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "الرئيس", href: "/jamaa/president" },
  { label: "المكتب", href: "/jamaa/bureau" },
  { label: "مجلس الجماعة", href: "/jamaa/council" },
  { label: "اللجان", href: "/jamaa/commissions" },
  { label: "برنامج عمل الجماعة", href: "/jamaa/action-plan" },
  { label: "الميزانية", href: "/jamaa/budget" },
  { label: "الهيكل الإداري", href: "/jamaa/structure" },
  { label: "الصفقات العمومية", href: "/jamaa/marches" },
  { label: "التعاون والاتفاقيات", href: "/jamaa/cooperation" },
];

// عدّل هذه البيانات حسب الهيكل الفعلي للجماعة
const departments = [
  {
    name: "رئاسة الجماعة",
    head:"السيد إبراهيم بوخالد",
    role: "رئيس الجماعة",
    units: ["مكتب الرئيس", "مصلحة الاتصال"],
  },
  {
    name: "الأمانة العامة",
    head: "السيد أحمد",
    role: "الكاتب العام",
    units: ["مصلحة الموارد البشرية", "مصلحة الشؤون القانونية"],
  },
  {
    name: "قسم الشؤون المالية",
    head: "السيد عمر",
    role: "رئيس القسم",
    units: ["مصلحة الميزانية", "مصلحة المحاسبة", "مصلحة الصفقات"],
  },
  {
    name: "مصلحة الحالة المدنية",
    head: "السيد محمد",
    role: "رئيس المصلحة",
    units: ["مكتب الولادات", "مكتب الوفيات", "مكتب الزواج"],
  },
];

export default function StructurePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="الهيكل الإداري"
        subtitle="الهيكل التنظيمي لإدارة الجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb
        items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الهيكل الإداري" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/structure" />

          <main className="flex-1">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">التنظيم الإداري</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
                يتكون الجهاز الإداري للجماعة الترابية أربعاء الساحل من مجموعة من الأقسام والمصالح
                الإدارية العاملة تحت إشراف الكاتب العام للجماعة، وذلك وفق الهيكل التنظيمي المعتمد.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {departments.map((dept) => (
                <article
                  key={dept.name}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <div className="p-4 bg-blue-gradient border-b-2 border-[#FFDE00]">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-white font-bold text-sm leading-relaxed">{dept.name}</h3>
                      <span className="flex-shrink-0 bg-white/15 text-[#FFDE00] text-[11px] font-bold px-2 py-0.5 rounded-full">
                        {dept.units.length} وحدات
                      </span>
                    </div>
                    <div className="text-blue-100 text-xs mt-1">
                      {dept.head} — {dept.role}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-slate-500 mb-2.5 font-semibold">الوحدات التابعة</div>
                    <ul className="space-y-1.5">
                      {dept.units.map((unit) => (
                        <li key={unit} className="flex items-center gap-2 text-sm text-slate-700">
                          <ChevronLeft
                            className="w-4 h-4 text-[#0038A8] flex-shrink-0"
                            strokeWidth={2.25}
                          />
                          {unit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}