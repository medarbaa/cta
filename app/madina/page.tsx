import Link from "next/link";
import { Sunrise, ScrollText, Landmark, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

const sections = [
  {
    label: "بانوراما",
    href: "/madina/panorama",
    Icon: Sunrise,
    desc: "لمحة عامة عن الجماعة وموقعها الجغرافي والمناخي",
  },
  {
    label: "نبذة تاريخية",
    href: "/madina/history",
    Icon: ScrollText,
    desc: "تاريخ المنطقة عبر الحقب الزمنية المختلفة",
  },
  {
    label: "التراث",
    href: "/madina/heritage",
    Icon: Landmark,
    desc: "الموروث الثقافي والطبيعي للمنطقة",
  },
];

export default function MadinaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="مدينتي"
        subtitle="تعرف على الجماعة الترابية أربعاء الساحل: التاريخ والطبيعة والتراث"
      />
      <Breadcrumb items={[{ label: "مدينتي" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-8">
          <h2 className="text-xl font-bold text-[#0038A8] mb-3">اكتشف أربعاء الساحل</h2>
          <p className="text-slate-600 text-[15px] leading-loose">
            الجماعة الترابية أربعاء الساحل مجال جغرافي متميز يجمع بين الطبيعة الساحلية والتراث
            الأمازيغي، وتطل بموقعها على ساحل المحيط الأطلسي.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map(({ label, href, Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-6 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-[#0038A8] transition-colors">
                {label}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              <div className="mt-4 text-[#0038A8] text-sm font-semibold inline-flex items-center gap-1.5">
                اقرأ المزيد
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