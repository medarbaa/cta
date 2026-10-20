import Link from "next/link";
import { Images, Megaphone, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

const sections = [
  {
    label: "صور وفيديو",
    href: "/media/gallery",
    Icon: Images,
    desc: "مكتبة الصور والمقاطع المصورة لأنشطة وإنجازات الجماعة",
  },
  {
    label: "الإعلانات والإشعارات",
    href: "/media/announcements",
    Icon: Megaphone,
    desc: "آخر الإعلانات والإشعارات وطلبات العروض الرسمية",
  },
];

export default function MediaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="الإعلام والتواصل"
        subtitle="فضاء الإعلام والتواصل الخاص بالجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb items={[{ label: "الإعلام" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map(({ label, href, Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-8 group text-center"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-[#0038A8] transition-colors">
                {label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              <div className="mt-4 text-[#0038A8] font-semibold inline-flex items-center gap-1.5">
                اكتشف المزيد
                <ArrowLeft
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  strokeWidth={2.25}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}