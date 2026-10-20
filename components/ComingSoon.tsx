import Link from "next/link";
import { Hammer, ArrowRight, Home, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";

interface ComingSoonProps {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
  backHref?: string;
  backLabel?: string;
}

export default function ComingSoon({
  title,
  subtitle = "هذه الصفحة قيد الإعداد",
  breadcrumb,
  backHref,
  backLabel = "الرجوع إلى القسم",
}: ComingSoonProps) {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title={title} subtitle={subtitle} />
      <Breadcrumb items={breadcrumb} />

      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <section className="relative bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-center px-6 py-14 sm:px-12">
          {/* شريط علوي بألوان الهوية */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-[#FFDE00] via-[#FFDE00] to-[#0038A8]" />

          {/* زخرفة خلفية */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#EBF2FF] opacity-70" />
          <div className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-[#FFDE00]/15" />

          <div className="relative">
            {/* الأيقونة */}
            <div className="relative w-28 h-28 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0038A8]/30 animate-[spin_18s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#00226B] to-[#0038A8] border-4 border-[#FFDE00] flex items-center justify-center shadow-lg">
                <Hammer className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#EBF2FF] text-[#0038A8] text-xs font-bold px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFDE00] animate-pulse" />
              قيد الإنجاز
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#00226B] mb-4">
              هذه الصفحة قيد الإعداد
            </h2>
            <p className="text-slate-600 text-[15px] leading-loose max-w-xl mx-auto mb-2">
              نعمل حالياً على تجهيز محتوى هذه صفحة.
              سيتم نشرها في أقرب وقت ممكن.
            </p>
            <p className="text-slate-500 text-sm mb-9">
              نشكركم على تفهمكم وصبركم.
            </p>

            {/* الأزرار */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {backHref && (
                <Link
                  href={backHref}
                  className="inline-flex items-center gap-2 bg-[#0038A8] hover:bg-[#00226B] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.25} />
                  {backLabel}
                </Link>
              )}
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-[#0038A8] hover:text-[#0038A8] text-slate-700 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Home className="w-4 h-4" strokeWidth={2} />
                الصفحة الرئيسية
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0038A8] hover:underline text-sm font-semibold px-3 py-3"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                تواصل معنا
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}