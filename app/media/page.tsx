import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "صور وفيديو", href: "/media/gallery" },
  { label: "الإعلانات والإشعارات", href: "/media/announcements" },
];

export default function MediaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الإعلام والتواصل" subtitle="فضاء الإعلام والتواصل الخاص بجماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الإعلام" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "صور وفيديو", href: "/media/gallery", icon: "🖼️", desc: "مكتبة الصور والمقاطع المصورة لأنشطة وإنجازات الجماعة" },
            { label: "الإعلانات والإشعارات", href: "/media/announcements", icon: "📢", desc: "آخر الإعلانات والإشعارات وطلبات العروض الرسمية" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 hover:shadow-md hover:border-green-300 transition-all group text-center"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-xl mb-2 group-hover:text-green-700 transition-colors">{item.label}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <div className="mt-4 text-green-700 font-medium">اكتشف المزيد ←</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
