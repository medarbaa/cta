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

export default function EnvironmentPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="النظافة والبيئة" subtitle="خدمات النظافة والمحافظة على البيئة" />
      <Breadcrumb items={[{ label: "خدمات المواطن", href: "/services" }, { label: "النظافة والبيئة" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/environment" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">خدمة النظافة والبيئة</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                تولي جماعة اربعاء الساحل اهتماماً بالغاً بقطاع النظافة والبيئة، إيماناً منها بأن
                البيئة النظيفة أساس صحة المواطن وجودة حياته، وذلك في إطار التنمية المستدامة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  title: "جمع النفايات المنزلية",
                  icon: "🗑️",
                  details: [
                    "جمع يومي بالمركز الحضري",
                    "جمع أسبوعي بالدواوير",
                    "حاويات في الأماكن العامة",
                    "حملات نظافة موسمية",
                  ],
                },
                {
                  title: "تدبير النفايات الخضراء",
                  icon: "🌿",
                  details: [
                    "تقليم الأشجار والنباتات",
                    "التخلص من المخلفات الخضراء",
                    "التسميد العضوي",
                    "الحدائق العامة",
                  ],
                },
                {
                  title: "البيئة والتشجير",
                  icon: "🌳",
                  details: [
                    "برنامج التشجير السنوي",
                    "المحافظة على المساحات الخضراء",
                    "التوعية البيئية بالمدارس",
                    "مكافحة التصحر",
                  ],
                },
                {
                  title: "معالجة المياه",
                  icon: "💧",
                  details: [
                    "شبكة تصريف المياه العادمة",
                    "صيانة محطات الضخ",
                    "مراقبة جودة المياه",
                    "التوعية بترشيد الاستهلاك",
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{section.icon}</span>
                    <h3 className="font-bold text-gray-800">{section.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {section.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500 text-xs">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Reporting */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">🚨 الإبلاغ عن مشكل بيئي</h3>
              <p className="text-sm text-gray-600 mb-3">
                هل لاحظتم مشكلاً بيئياً أو مكباً عشوائياً في منطقتكم؟ أبلغوا عنه عبر:
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0537XXXXXX" className="bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-800 transition">
                  📞 0537-XX-XX-XX
                </a>
                <a href="mailto:environnement@arbaasahel.ma" className="bg-white border border-green-700 text-green-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-50 transition">
                  ✉️ البريد الإلكتروني
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
