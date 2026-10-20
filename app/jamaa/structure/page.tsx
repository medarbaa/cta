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

const departments = [
  {
    name: "رئاسة الجماعة",
    head: "السيد عبد الكريم البوهالي",
    role: "رئيس الجماعة",
    units: ["مكتب الرئيس", "مصلحة الاتصال"],
  },
  {
    name: "الأمانة العامة",
    head: "السيد أحمد الشرقاوي",
    role: "الكاتب العام",
    units: ["مصلحة الموارد البشرية", "مصلحة الشؤون القانونية"],
  },
  {
    name: "قسم الشؤون المالية",
    head: "السيدة نجاة العمراني",
    role: "رئيسة القسم",
    units: ["مصلحة الميزانية", "مصلحة المحاسبة", "مصلحة الصفقات"],
  },
  {
    name: "قسم التقنية والبنية التحتية",
    head: "المهندس كريم البشاري",
    role: "رئيس القسم",
    units: ["مصلحة الأشغال", "مصلحة التعمير", "مصلحة الإنارة"],
  },
  {
    name: "قسم الخدمات الاجتماعية",
    head: "السيدة سعاد الطالبي",
    role: "رئيسة القسم",
    units: ["مصلحة الشباب", "مصلحة الثقافة والرياضة", "مصلحة المرأة"],
  },
  {
    name: "مصلحة الحالة المدنية",
    head: "السيد يحيى بوزيد",
    role: "رئيس المصلحة",
    units: ["مكتب الولادات", "مكتب الوفيات", "مكتب الزواج"],
  },
];

export default function StructurePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الهيكل الإداري" subtitle="الهيكل التنظيمي لإدارة جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الهيكل الإداري" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/structure" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">التنظيم الإداري</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                يتكون الجهاز الإداري لجماعة اربعاء الساحل من مجموعة من الأقسام والمصالح الإدارية
                العاملة تحت إشراف الكاتب العام للجماعة، وذلك وفق الهيكل التنظيمي المعتمد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {departments.map((dept, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-4" style={{ backgroundColor: "#006233" }}>
                    <h3 className="text-white font-bold text-sm">{dept.name}</h3>
                    <div className="text-green-200 text-xs mt-0.5">{dept.head} — {dept.role}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-2 font-medium">الوحدات التابعة:</div>
                    <ul className="space-y-1">
                      {dept.units.map((unit) => (
                        <li key={unit} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-green-500">▸</span>
                          {unit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
