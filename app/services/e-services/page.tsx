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

const eServices = [
  {
    name: "بوابة الحالة المدنية الرقمية",
    desc: "طلب وثائق الحالة المدنية عبر الإنترنت دون الحاجة للتنقل.",
    link: "https://watiqa.ma",
    label: "وثيقة",
    status: "متاح",
  },
  {
    name: "البوابة الوطنية للصفقات العمومية",
    desc: "الاطلاع على طلبات العروض والمشاركة فيها إلكترونياً.",
    link: "https://www.marchespublics.gov.ma",
    label: "ماشيبلك",
    status: "متاح",
  },
  {
    name: "نظام تتبع طلبات التعمير",
    desc: "تتبع حالة ملف طلب رخصة البناء أو التعمير.",
    link: "#",
    label: "قريباً",
    status: "قريباً",
  },
  {
    name: "بوابة الشكايات والاقتراحات",
    desc: "تقديم شكايات أو اقتراحات تخص خدمات الجماعة.",
    link: "/contact",
    label: "تواصل",
    status: "متاح",
  },
];

export default function EServicesPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الخدمات الإلكترونية" subtitle="الخدمات الرقمية لجماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "خدمات المواطن", href: "/services" }, { label: "الخدمات الإلكترونية" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/e-services" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">النافذة الرقمية</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                في إطار توجه المملكة المغربية نحو التحول الرقمي، تتيح جماعة اربعاء الساحل مجموعة
                من الخدمات الإلكترونية التي تمكّن المواطنين من استيفاء احتياجاتهم الإدارية عن بُعد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {eServices.map((s) => (
                <div key={s.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl">
                        💻
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">{s.name}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: s.status === "متاح" ? "#e8f5e9" : "#fef3c7",
                            color: s.status === "متاح" ? "#006233" : "#92400e",
                          }}
                        >
                          {s.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                  {s.status === "متاح" ? (
                    <a
                      href={s.link}
                      target={s.link.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg transition"
                      style={{ backgroundColor: "#006233" }}
                    >
                      الانتقال إلى {s.label} ←
                    </a>
                  ) : (
                    <span className="inline-block text-sm text-gray-400 border border-gray-200 px-4 py-2 rounded-lg">
                      قريباً...
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* QR Code placeholder */}
            <div className="bg-green-800 text-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-green-800 text-xs text-center font-bold">
                  <div className="text-4xl mb-1">📱</div>
                  QR
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">حمّل تطبيق الجماعة</h3>
                <p className="text-green-200 text-sm mb-3">
                  تابع آخر أخبار الجماعة واستفسر عن طلباتك الإدارية عبر التطبيق الذكي (قريباً).
                </p>
                <div className="flex gap-3">
                  <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">Android</span>
                  <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full">iOS</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
