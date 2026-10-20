import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/data";

const sidebarItems = [
  { label: "النظافة والبيئة", href: "/services/environment" },
  { label: "التعمير والبناء", href: "/services/urbanisme" },
  { label: "المساطر الإدارية", href: "/services/procedures" },
  { label: "الخدمات الإلكترونية", href: "/services/e-services" },
  { label: "دليل الخدمات", href: "/services/guide" },
];

export default function ServicesPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="خدمات المواطن" subtitle="الخدمات العمومية التي تقدمها جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "خدمات المواطن" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-3">تقديم خدمات المواطن</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            تحرص جماعة اربعاء الساحل على تقديم خدمات عمومية متنوعة وذات جودة لفائدة مواطنيها في
            مختلف المجالات، بهدف تحسين مستوى العيش والرقي بظروف الحياة اليومية للساكنة.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sidebarItems.map((item) => {
            const service = services.find((s) => s.href === item.href) || {
              description: "اطلع على الخدمات المتاحة",
              icon: "📋",
            };
            const icons: Record<string, string> = {
              "/services/environment": "🌿",
              "/services/urbanisme": "🏗️",
              "/services/procedures": "📄",
              "/services/e-services": "💻",
              "/services/guide": "📚",
            };
            return (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-green-300 transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: "#e8f5e9" }}
                >
                  {icons[item.href]}
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-green-700 transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-green-700 text-sm font-medium">
                  اكتشف المزيد
                  <span className="mr-1 group-hover:translate-x-1 transition-transform">←</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
