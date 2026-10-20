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

const budgetLines = [
  { category: "التجهيز والاستثمار", allocated: 8_500_000, spent: 6_200_000 },
  { category: "المسالك والطرق", allocated: 3_200_000, spent: 2_800_000 },
  { category: "الماء والصرف الصحي", allocated: 4_200_000, spent: 3_100_000 },
  { category: "الشؤون الاجتماعية", allocated: 1_500_000, spent: 1_200_000 },
  { category: "التسيير والإدارة", allocated: 2_800_000, spent: 2_600_000 },
  { category: "البيئة والنظافة", allocated: 1_200_000, spent: 900_000 },
];

function fmt(n: number) {
  return n.toLocaleString("ar-MA");
}

export default function BudgetPage() {
  const totalAllocated = budgetLines.reduce((s, l) => s + l.allocated, 0);
  const totalSpent = budgetLines.reduce((s, l) => s + l.spent, 0);
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الميزانية" subtitle="ميزانية جماعة اربعاء الساحل لسنة 2025" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الميزانية" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/budget" />
          <main className="flex-1">
            {/* Summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "مجموع الاعتمادات", value: `${fmt(totalAllocated)} درهم`, color: "#006233", icon: "💰" },
                { label: "المبالغ المصروفة", value: `${fmt(totalSpent)} درهم`, color: "#0077b6", icon: "💳" },
                {
                  label: "نسبة التنفيذ",
                  value: `${Math.round((totalSpent / totalAllocated) * 100)}%`,
                  color: "#C1272D",
                  icon: "📊",
                },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <div className="text-2xl font-extrabold mb-1" style={{ color: card.color }}>
                    {card.value}
                  </div>
                  <div className="text-xs text-gray-500">{card.label}</div>
                </div>
              ))}
            </div>

            {/* Budget table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <h3 className="font-bold text-gray-800">تفصيل الميزانية حسب القطاعات</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">القطاع</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الاعتمادات (درهم)</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">المصروفات (درهم)</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">نسبة التنفيذ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {budgetLines.map((line) => {
                      const pct = Math.round((line.spent / line.allocated) * 100);
                      return (
                        <tr key={line.category} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-800">{line.category}</td>
                          <td className="px-4 py-3 text-gray-700">{fmt(line.allocated)}</td>
                          <td className="px-4 py-3 text-gray-700">{fmt(line.spent)}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${pct}%`, backgroundColor: "#006233" }}
                                />
                              </div>
                              <span className="text-xs font-medium text-green-800 w-8">{pct}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 font-bold text-green-800">المجموع</td>
                      <td className="px-4 py-3 font-bold text-green-800">{fmt(totalAllocated)}</td>
                      <td className="px-4 py-3 font-bold text-green-800">{fmt(totalSpent)}</td>
                      <td className="px-4 py-3 font-bold text-green-800">
                        {Math.round((totalSpent / totalAllocated) * 100)}%
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
              <strong>ملاحظة:</strong> الأرقام الواردة تخص ميزانية السنة المالية 2025 وهي أرقام تقديرية خاضعة للمراجعة في نهاية السنة المالية.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
