import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "بانوراما", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث", href: "/madina/heritage" },
];

export default function MadinaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="مدينتي" subtitle="تعرف على جماعة اربعاء الساحل — التاريخ والطبيعة والتراث" />
      <Breadcrumb items={[{ label: "مدينتي" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-3">اكتشف اربعاء الساحل</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            جماعة اربعاء الساحل مجال جغرافي متميز يجمع بين غنى الطبيعة الساحلية وعمق التراث
            الأمازيغي العريق، وموقعها الاستراتيجي على ساحل المحيط الأطلسي يجعل منها وجهة سياحية
            وطبيعية بامتياز.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "بانوراما", href: "/madina/panorama", icon: "🌅", desc: "لمحة عامة عن الجماعة وموقعها الجغرافي والمناخي" },
            { label: "نبذة تاريخية", href: "/madina/history", icon: "📜", desc: "تاريخ المنطقة عبر الحقب الزمنية المختلفة" },
            { label: "التراث", href: "/madina/heritage", icon: "🏺", desc: "الموروث الثقافي والحضاري والمعماري للمنطقة" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-green-300 transition-all group text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-green-700 transition-colors">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <div className="mt-4 text-green-700 text-sm font-medium">اقرأ المزيد ←</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
