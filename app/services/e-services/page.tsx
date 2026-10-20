import { FileText, Gavel, MessageSquareWarning, ExternalLink } from "lucide-react";
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
    label: "بوابة وثيقة",
    Icon: FileText,
  },
  {
    name: "البوابة الوطنية للصفقات العمومية",
    desc: "الاطلاع على طلبات العروض والمشاركة فيها إلكترونياً.",
    link: "https://www.marchespublics.gov.ma",
    label: "بوابة الصفقات العمومية",
    Icon: Gavel,
  },
  {
    name: "بوابة الشكايات والاقتراحات",
    desc: "تقديم شكايات أو اقتراحات تخص خدمات الإدارات العمومية، ومنها الجماعة.",
    link: "https://www.chikaya.ma/",
    label: "بوابة الشكايات",
    Icon: MessageSquareWarning,
  },
];

export default function EServicesPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="الخدمات الإلكترونية"
        subtitle="الخدمات الرقمية المتاحة لمرتفقي الجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb
        items={[{ label: "خدمات المواطن", href: "/services" }, { label: "الخدمات الإلكترونية" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar
            title="خدمات المواطن"
            items={sidebarItems}
            currentPath="/services/e-services"
          />

          <div className="flex-1 min-w-0">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">النافذة الرقمية</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
                في إطار توجه المملكة المغربية نحو التحول الرقمي، توجّه الجماعة الترابية أربعاء
                الساحل مرتفقيها إلى مجموعة من البوابات الإلكترونية الوطنية التي تمكّنهم من قضاء
                أغراضهم الإدارية عن بُعد.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {eServices.map(({ name, desc, link, label, Icon }) => (
                <article
                  key={name}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm leading-snug">{name}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{desc}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#0038A8] hover:bg-[#00226B] px-4 py-2 rounded-lg transition-colors"
                  >
                    الانتقال إلى {label}
                    <ExternalLink className="w-4 h-4" strokeWidth={2} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}