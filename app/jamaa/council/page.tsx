import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { councilMembers } from "@/lib/data";

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

export default function CouncilPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="مجلس الجماعة" subtitle="أعضاء مجلس جماعة اربعاء الساحل المنتخبون" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "مجلس الجماعة" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/council" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">تقديم المجلس الجماعي</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                يتألف المجلس الجماعي لجماعة اربعاء الساحل من 23 عضواً منتخباً، يمثلون مختلف
                مكونات الساكنة المحلية، وذلك لمدة ولاية انتداب مدتها ست (6) سنوات ابتداء من سنة 2021.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                يتداول المجلس في شؤون الجماعة ويتخذ القرارات الكبرى المتعلقة بالتنمية المحلية،
                وفق أحكام القانون التنظيمي رقم 113.14 المتعلق بالجماعات.
              </p>
            </div>



            {/* Members table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">قائمة أعضاء المجلس</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الاسم</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الصفة</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الحزب</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">اللجنة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {councilMembers.map((m) => (
                      <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-800">{m.name}</td>
                        <td className="px-4 py-3">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: m.role === "رئيس الجماعة" ? "#e8f5e9" : "#f3f4f6",
                              color: m.role === "رئيس الجماعة" ? "#006233" : "#6b7280",
                            }}
                          >
                            {m.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{m.party}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{m.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
