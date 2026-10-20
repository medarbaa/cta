import { Wallet, Receipt, TrendingUp, Info } from "lucide-react";
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

// عدّل السنة والأرقام حسب الميزانية الفعلية المصادق عليها
const BUDGET_YEAR = 2025;

const budgetLines = [
  { category: "التجهيز والاستثمار", allocated: 8_500_000, spent: 6_200_000 },
  { category: "المسالك والطرق", allocated: 3_200_000, spent: 2_800_000 },
  { category: "الماء والصرف الصحي", allocated: 4_200_000, spent: 3_100_000 },
  { category: "الشؤون الاجتماعية", allocated: 1_500_000, spent: 1_200_000 },
  { category: "التسيير والإدارة", allocated: 2_800_000, spent: 2_600_000 },
  { category: "البيئة والنظافة", allocated: 1_200_000, spent: 900_000 },
];

// أرقام لاتينية بفواصل ثابتة، نفس النتيجة على الخادم والمتصفح
function fmt(n: number) {
  return new Intl.NumberFormat("en-US").format(n).replace(/,/g, " ");
}

export default function BudgetPage() {
  const totalAllocated = budgetLines.reduce((s, l) => s + l.allocated, 0);
  const totalSpent = budgetLines.reduce((s, l) => s + l.spent, 0);
  const totalPct = Math.round((totalSpent / totalAllocated) * 100);

  const summary = [
    { label: "مجموع الاعتمادات", value: `${fmt(totalAllocated)} درهم`, Icon: Wallet },
    { label: "المبالغ المصروفة", value: `${fmt(totalSpent)} درهم`, Icon: Receipt },
    { label: "نسبة التنفيذ", value: `${totalPct}%`, Icon: TrendingUp },
  ];

  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="الميزانية"
        subtitle={`ميزانية الجماعة الترابية أربعاء الساحل للسنة المالية ${BUDGET_YEAR}`}
      />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الميزانية" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/budget" />

          <main className="flex-1 min-w-0">
            {/* Summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {summary.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="text-2xl font-extrabold mb-1 text-[#00226B] stat-number">
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* Budget table */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
              <div className="p-4 border-b border-slate-100 border-t-4 border-t-[#FFDE00]">
                <h3 className="font-bold text-[#0038A8]">تفصيل الميزانية حسب القطاعات</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm stat-number">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600">
                      <th scope="col" className="px-4 py-3 text-right font-semibold">القطاع</th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold">الاعتمادات (درهم)</th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold">المصروفات (درهم)</th>
                      <th scope="col" className="px-4 py-3 text-right font-semibold min-w-[160px]">نسبة التنفيذ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {budgetLines.map((line) => {
                      const pct = Math.round((line.spent / line.allocated) * 100);
                      return (
                        <tr key={line.category} className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3 text-right font-medium text-slate-800">
                            {line.category}
                          </th>
                          <td className="px-4 py-3 text-slate-700">{fmt(line.allocated)}</td>
                          <td className="px-4 py-3 text-slate-700">{fmt(line.spent)}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-[#0038A8]"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className="text-xs font-semibold text-[#00226B] w-9">{pct}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#EBF2FF] text-[#00226B]">
                      <th scope="row" className="px-4 py-3 text-right font-bold">المجموع</th>
                      <td className="px-4 py-3 font-bold">{fmt(totalAllocated)}</td>
                      <td className="px-4 py-3 font-bold">{fmt(totalSpent)}</td>
                      <td className="px-4 py-3 font-bold">{totalPct}%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            <div className="flex items-start gap-3 bg-[#EBF2FF] border border-[#BFD5FF] rounded-xl p-4 text-sm text-[#00226B]">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0038A8]" strokeWidth={1.75} />
              <p className="leading-relaxed">
                <span className="font-bold">ملاحظة:</span> الأرقام الواردة تخص ميزانية السنة المالية{" "}
                {BUDGET_YEAR}، وهي أرقام تقديرية خاضعة للمراجعة في نهاية السنة المالية.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}