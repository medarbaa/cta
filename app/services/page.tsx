import Link from "next/link";
import {
  Leaf,
  Building2,
  FileText,
  Monitor,
  BookOpen,
  ClipboardList,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data";

const serviceItems: {
  label: string;
  href: string;
  Icon: LucideIcon;
  fallbackDesc: string;
}[] = [
  {
    label: "النظافة والبيئة",
    href: "/services/environment",
    Icon: Leaf,
    fallbackDesc: "تدبير النفايات وحفظ الصحة والحفاظ على المجال البيئي",
  },
  {
    label: "التعمير والبناء",
    href: "/services/urbanisme",
    Icon: Building2,
    fallbackDesc: "رخص البناء والتعمير القروي والمساطر المرتبطة بها",
  },
  {
    label: "المساطر الإدارية",
    href: "/services/procedures",
    Icon: FileText,
    fallbackDesc: "الحالة المدنية وتصحيح الإمضاء والوثائق الإدارية",
  },
  {
    label: "الخدمات الإلكترونية",
    href: "/services/e-services",
    Icon: Monitor,
    fallbackDesc: "البوابات والخدمات الرقمية المتاحة للمرتفقين",
  },
  {
    label: "دليل الخدمات",
    href: "/services/guide",
    Icon: BookOpen,
    fallbackDesc: "دليل شامل للخدمات والوثائق المطلوبة لكل مسطرة",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="خدمات المواطن"
        subtitle="الخدمات العمومية التي تقدمها الجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb items={[{ label: "خدمات المواطن" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-8">
          <h2 className="text-xl font-bold text-[#0038A8] mb-3">تقديم خدمات المواطن</h2>
          <p className="text-slate-600 text-[15px] leading-loose">
            تحرص الجماعة الترابية أربعاء الساحل على تقديم خدمات عمومية متنوعة وذات جودة لفائدة
            مواطنيها في مختلف المجالات، بهدف تحسين مستوى العيش وظروف الحياة اليومية للساكنة.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map(({ label, href, Icon, fallbackDesc }) => {
            const fromData = services.find((s) => s.href === href);
            const description = fromData?.description ?? fallbackDesc;
            return (
              <Link
                key={href}
                href={href}
                className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-6 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" strokeWidth={1.6} />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-[#0038A8] transition-colors">
                  {label}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[#0038A8] text-sm font-semibold">
                  اكتشف المزيد
                  <ArrowLeft
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    strokeWidth={2.25}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}