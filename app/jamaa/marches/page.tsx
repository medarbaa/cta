import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { announcements } from "@/lib/data";

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

const marches = [
  {
    ref: "01/2025/AS",
    title: "أشغال تهيئة المسالك الجماعية — الدفعة الثانية",
    type: "طلب عروض مفتوح",
    amount: "3,200,000 درهم",
    deadline: "2025-11-10",
    status: "مفتوح",
  },
  {
    ref: "02/2025/AS",
    title: "توريد معدات وآليات النظافة والصرف الصحي",
    type: "طلب عروض مفتوح",
    amount: "870,000 درهم",
    deadline: "2025-10-25",
    status: "مغلق",
  },
  {
    ref: "03/2025/AS",
    title: "إنجاز شبكة الإنارة العمومية بالطاقة الشمسية",
    type: "طلب عروض مفتوح",
    amount: "2,100,000 درهم",
    deadline: "2025-12-05",
    status: "مفتوح",
  },
  {
    ref: "04/2025/AS",
    title: "بناء وتجهيز المركز الصحي بدوار أولاد علي",
    type: "طلب عروض مفتوح",
    amount: "1,500,000 درهم",
    deadline: "2025-09-30",
    status: "منجز",
  },
];

export default function MarchesPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الصفقات العمومية" subtitle="طلبات العروض والصفقات العمومية لجماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الصفقات العمومية" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/marches" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">الصفقات العمومية</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                في إطار تطبيق مبادئ الشفافية والمساواة وتكافؤ الفرص، تُعلن جماعة اربعاء الساحل
                عن طلبات العروض الخاصة بمشاريعها التنموية. يمكن للمتنافسين الاطلاع على ملفات طلبات
                العروض بمقر الجماعة أو تحميلها من الموقع الإلكتروني.
              </p>
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                📌 للتسجيل في البوابة الوطنية للصفقات العمومية:{" "}
                <a href="https://www.marchespublics.gov.ma" target="_blank" className="underline font-medium">
                  marchespublics.gov.ma
                </a>
              </div>
            </div>

            {/* Marches table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">قائمة طلبات العروض لسنة 2025</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">المرجع</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الموضوع</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">المبلغ</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">آخر أجل</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-600">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {marches.map((m) => (
                      <tr key={m.ref} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-mono text-xs text-gray-500">{m.ref}</td>
                        <td className="px-4 py-3 font-medium text-gray-800 max-w-xs">{m.title}</td>
                        <td className="px-4 py-3 text-gray-700 font-semibold whitespace-nowrap">{m.amount}</td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                          {new Date(m.deadline).toLocaleDateString("ar-MA")}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor:
                                m.status === "مفتوح" ? "#e8f5e9" : m.status === "منجز" ? "#e0e7ff" : "#f3f4f6",
                              color:
                                m.status === "مفتوح" ? "#006233" : m.status === "منجز" ? "#3730a3" : "#6b7280",
                            }}
                          >
                            {m.status}
                          </span>
                        </td>
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
