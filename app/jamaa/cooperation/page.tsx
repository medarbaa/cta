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

const partnerships = [
  {
    partner: "إقليم القنيطرة",
    type: "اتفاقية شراكة",
    domain: "التجهيز وإعداد التراب",
    year: 2023,
    amount: "5.2 مليون درهم",
  },
  {
    partner: "المكتب الوطني للكهرباء والماء الصالح للشرب",
    type: "اتفاقية إطار",
    domain: "التزويد بالماء الشروب",
    year: 2022,
    amount: "4.2 مليون درهم",
  },
  {
    partner: "وزارة الداخلية — مديرية الجماعات الترابية",
    type: "برنامج دعم",
    domain: "تحديث الإدارة الترابية",
    year: 2024,
    amount: "800,000 درهم",
  },
  {
    partner: "وزارة الفلاحة والصيد البحري",
    type: "اتفاقية شراكة",
    domain: "التنمية القروية والغابوية",
    year: 2023,
    amount: "1.5 مليون درهم",
  },
];

export default function CooperationPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="التعاون والاتفاقيات" subtitle="شراكات وتعاون جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "التعاون والاتفاقيات" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/cooperation" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">إطار التعاون والشراكة</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                تحرص جماعة اربعاء الساحل على بناء شراكات فاعلة مع مختلف المؤسسات والهيئات الحكومية
                وغير الحكومية، سعياً إلى تعبئة الموارد وإنجاز المشاريع التنموية المنهجية لفائدة ساكنتها.
              </p>
            </div>

            <div className="space-y-4">
              {partnerships.map((p, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: "#006233" }}
                    >
                      🤝
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-800">{p.partner}</h3>
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                          {p.type}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {p.year}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400 text-xs">المجال: </span>
                          <span className="text-gray-700">{p.domain}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-xs">قيمة الشراكة: </span>
                          <span className="font-semibold text-green-800">{p.amount}</span>
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
