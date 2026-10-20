import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { commissions } from "@/lib/data";

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

export default function CommissionsPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="اللجان" subtitle="لجان مجلس جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "اللجان" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/commissions" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">اللجان الدائمة للمجلس الجماعي</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                طبقاً لأحكام القانون التنظيمي رقم 113.14، أحدث مجلس جماعة اربعاء الساحل أربع
                لجان دائمة تتولى دراسة القضايا المعروضة عليها وإعداد التقارير اللازمة قبل البت فيها
                من طرف المجلس في دوراته.
              </p>
            </div>

            <div className="space-y-5">
              {commissions.map((commission, index) => (
                <div key={commission.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                      style={{ backgroundColor: "#006233" }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-base mb-1">{commission.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{commission.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-gray-400 text-xs">الرئيس: </span>
                          <span className="font-medium text-green-800">{commission.president}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-xs">عدد الأعضاء: </span>
                          <span className="font-medium text-gray-700">{commission.members} أعضاء</span>
                        </div>
                      </div>
                    </div>
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
