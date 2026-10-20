import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "النظافة والبيئة", href: "/services/environment" },
  { label: "التعمير والبناء", href: "/services/urbanisme" },
  { label: "المساطر الإدارية", href: "/services/procedures" },
  { label: "الخدمات الإلكترونية", href: "/services/e-services" },
  { label: "دليل الخدمات", href: "/services/guide" },
];

const guideItems = [
  {
    category: "خدمات الحالة المدنية",
    icon: "📄",
    services: [
      { name: "شهادة الإقامة", delay: "فوري", fee: "مجاني" },
      { name: "عقد الازدياد", delay: "فوري", fee: "مجاني" },
      { name: "عقد الزواج", delay: "3 أيام", fee: "مجاني" },
      { name: "شهادة الوضعية العائلية", delay: "فوري", fee: "مجاني" },
    ],
  },
  {
    category: "خدمات التعمير",
    icon: "🏗️",
    services: [
      { name: "شهادة التعمير", delay: "8 أيام", fee: "100 درهم" },
      { name: "رخصة البناء", delay: "30 يوماً", fee: "حسب المشروع" },
      { name: "رخصة الهدم", delay: "15 يوماً", fee: "50 درهم" },
      { name: "رخصة السكن", delay: "15 يوماً", fee: "مجاني" },
    ],
  },
  {
    category: "خدمات بيئية",
    icon: "🌿",
    services: [
      { name: "طلب حاوية قمامة", delay: "5 أيام", fee: "مجاني" },
      { name: "الإبلاغ عن تلوث", delay: "48 ساعة", fee: "مجاني" },
      { name: "طلب تقليم أشجار", delay: "7 أيام", fee: "مجاني" },
    ],
  },
];

export default function GuidePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="دليل الخدمات" subtitle="الدليل الشامل لخدمات جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "خدمات المواطن", href: "/services" }, { label: "دليل الخدمات" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/guide" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">دليل الخدمات الجماعية</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                يجمع هذا الدليل جميع الخدمات التي تقدمها جماعة اربعاء الساحل لمواطنيها، مع تحديد
                آجال المعالجة والرسوم المطبقة والوثائق المطلوبة لكل خدمة.
              </p>
            </div>

            <div className="space-y-6">
              {guideItems.map((group) => (
                <div key={group.category} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ backgroundColor: "#f0f7f0" }}>
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className="font-bold text-green-800">{group.category}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-xs">
                          <th className="px-4 py-2.5 text-right text-gray-500 font-medium">الخدمة</th>
                          <th className="px-4 py-2.5 text-right text-gray-500 font-medium">أجل المعالجة</th>
                          <th className="px-4 py-2.5 text-right text-gray-500 font-medium">الرسوم</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {group.services.map((svc) => (
                          <tr key={svc.name} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-800">{svc.name}</td>
                            <td className="px-4 py-3 text-gray-500">{svc.delay}</td>
                            <td className="px-4 py-3">
                              <span
                                className="text-xs px-2 py-0.5 rounded font-medium"
                                style={{
                                  backgroundColor: svc.fee === "مجاني" ? "#e8f5e9" : "#fef3c7",
                                  color: svc.fee === "مجاني" ? "#006233" : "#92400e",
                                }}
                              >
                                {svc.fee}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
