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

const procedures = [
  {
    title: "شهادة الإقامة",
    delay: "فوري",
    docs: ["بطاقة التعريف الوطنية", "إثبات السكن (فاتورة)"],
    location: "مكتب الحالة المدنية",
  },
  {
    title: "نسخة من عقد الازدياد",
    delay: "فوري",
    docs: ["بطاقة التعريف الوطنية", "تصريح بتاريخ ومكان الازدياد"],
    location: "مكتب الحالة المدنية",
  },
  {
    title: "عقد الزواج",
    delay: "3 أيام",
    docs: ["بطاقات التعريف الوطنية للزوجين", "شهادة الوضعية العائلية", "شهادة طبية"],
    location: "مكتب الحالة المدنية",
  },
  {
    title: "شهادة الوضعية العائلية",
    delay: "فوري",
    docs: ["بطاقة التعريف الوطنية"],
    location: "مكتب الحالة المدنية",
  },
  {
    title: "بطاقة السكنى والوضعية العائلية",
    delay: "يوم واحد",
    docs: ["بطاقة التعريف الوطنية", "وثيقة السكنى"],
    location: "مكتب الحالة المدنية",
  },
  {
    title: "شهادة الحياة",
    delay: "فوري",
    docs: ["بطاقة التعريف الوطنية", "الحضور الشخصي"],
    location: "مكتب الحالة المدنية",
  },
];

export default function ProceduresPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="المساطر الإدارية" subtitle="الوثائق الإدارية والحالة المدنية" />
      <Breadcrumb items={[{ label: "خدمات المواطن", href: "/services" }, { label: "المساطر الإدارية" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/procedures" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">الوثائق الإدارية والحالة المدنية</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                يختص مكتب الحالة المدنية بجماعة اربعاء الساحل بتسليم مختلف وثائق الحالة المدنية
                وشهادات الإقامة والوضعية العائلية.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                ⏰ ساعات الاستقبال: الإثنين – الجمعة | 8:30 ص — 4:00 م (استراحة: 12:00 – 14:00)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {procedures.map((proc) => (
                <div key={proc.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                      <span className="text-xl">📄</span>
                      {proc.title}
                    </h3>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full flex-shrink-0">
                      {proc.delay}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2 font-medium">الوثائق المطلوبة:</div>
                  <ul className="space-y-1 mb-3">
                    {proc.docs.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-green-500">✓</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-gray-400">📍 {proc.location}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">💡 نصائح مفيدة</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-green-600">◆</span> احضر نسخاً من وثائقك الأصلية</li>
                <li className="flex items-center gap-2"><span className="text-green-600">◆</span> تحقق من صلاحية بطاقة التعريف الوطنية قبل المجيء</li>
                <li className="flex items-center gap-2"><span className="text-green-600">◆</span> بعض الوثائق متاحة عبر البوابة الوطنية الرقمية</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
