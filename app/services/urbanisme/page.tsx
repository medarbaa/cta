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

const permits = [
  {
    name: "رخصة البناء",
    delay: "30 يوماً",
    docs: ["طلب مكتوب", "نسخ من وثائق الهوية", "عقد الملكية", "التصاميم المعمارية (4 نسخ)", "شهادة التعمير"],
  },
  {
    name: "شهادة التعمير",
    delay: "8 أيام",
    docs: ["طلب مكتوب", "نسخ من وثائق الهوية", "رقم البقعة ورقم الرسم العقاري"],
  },
  {
    name: "رخصة السكن",
    delay: "15 يوماً",
    docs: ["طلب مكتوب", "رخصة البناء الأصلية", "شهادة المطابقة", "تقرير المهندس المعماري"],
  },
  {
    name: "رخصة الهدم",
    delay: "15 يوماً",
    docs: ["طلب مكتوب", "مخطط الموقع", "تقرير السلامة", "وثائق الملكية"],
  },
];

export default function UrbanismePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="التعمير والبناء" subtitle="رخص البناء والتعمير والمساطر المرتبطة بها" />
      <Breadcrumb items={[{ label: "خدمات المواطن", href: "/services" }, { label: "التعمير والبناء" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/urbanisme" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">خدمات التعمير والبناء</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                تختص مصلحة التعمير بجماعة اربعاء الساحل بمعالجة ملفات رخص البناء والهدم وشهادات
                التعمير، وذلك وفق أحكام القانون رقم 12.90 المتعلق بالتعمير وظهير رخص البناء.
              </p>
            </div>

            <div className="space-y-5">
              {permits.map((permit) => (
                <div key={permit.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-xl">🏗️</span>
                      {permit.name}
                    </h3>
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                      ⏱️ {permit.delay}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 mb-2">الوثائق المطلوبة:</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {permit.docs.map((doc) => (
                        <li key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-green-500 flex-shrink-0">◆</span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
              <strong>ملاحظة:</strong> يمكن تقديم الطلبات شخصياً بمكتب التعمير بالجماعة أو إرسالها بالبريد المضمون.
              ساعات الاستقبال: الإثنين — الجمعة، من 8:30 إلى 16:00.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
