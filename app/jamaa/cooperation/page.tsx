import { Handshake, CalendarDays, Layers, Banknote } from "lucide-react";
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

// عدّل هذه البيانات حسب الاتفاقيات الفعلية الموقعة
const partnerships = [
  {
    partner: "عمالة إقليم تيزنيت",
    type: "اتفاقية شراكة",
    domain: "التجهيز وإعداد التراب",
    year: 2023,
    amount: "5.2 مليون درهم",
  },
  {
    partner: "شركة الجهوية متعددة الخدمات سوس ماسة",
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
    amount: "0.8 مليون درهم",
  },
  {
    partner: "وزارة الفلاحة",
    type: "اتفاقية شراكة",
    domain: "التنمية القروية والغابوية",
    year: 2023,
    amount: "1.5 مليون درهم",
  },
];

export default function CooperationPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="التعاون والاتفاقيات"
        subtitle="شراكات وتعاون الجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb
        items={[{ label: "الجماعة", href: "/jamaa" }, { label: "التعاون والاتفاقيات" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/cooperation" />

          <main className="flex-1 min-w-0">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">إطار التعاون والشراكة</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
                تحرص الجماعة الترابية أربعاء الساحل على بناء شراكات فاعلة مع مختلف المؤسسات والهيئات
                الحكومية وغير الحكومية، سعياً إلى تعبئة الموارد وإنجاز المشاريع التنموية لفائدة
                ساكنتها.
              </p>
            </section>

            <div className="space-y-4">
              {partnerships.map((p) => (
                <article
                  key={`${p.partner}-${p.year}`}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-br from-[#00226B] to-[#0038A8] border-2 border-[#FFDE00] text-white flex items-center justify-center">
                      <Handshake className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="font-bold text-slate-800">{p.partner}</h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#EBF2FF] text-[#0038A8] px-2.5 py-0.5 rounded-full">
                          {p.type}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                          <CalendarDays className="w-3 h-3" strokeWidth={2} />
                          {p.year}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#0038A8] flex-shrink-0" strokeWidth={1.75} />
                          <span>
                            <span className="text-slate-400 text-xs">المجال: </span>
                            <span className="text-slate-700">{p.domain}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Banknote className="w-4 h-4 text-[#0038A8] flex-shrink-0" strokeWidth={1.75} />
                          <span>
                            <span className="text-slate-400 text-xs">قيمة الشراكة: </span>
                            <span className="font-semibold text-[#00226B]">{p.amount}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}