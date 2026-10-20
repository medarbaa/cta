import Link from "next/link";
import {
  MapPin,
  Landmark,
  UserRound,
  Users,
  Ruler,
  Home,
  ArrowLeft,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { communeInfo } from "@/lib/data";

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

const quickInfo = [
  { label: "الإقليم", value: communeInfo.province, Icon: MapPin },
  { label: "الجهة", value: communeInfo.region, Icon: Landmark },
  { label: "الرئيس", value: communeInfo.president, Icon: UserRound },
  { label: "عدد السكان", value: `${communeInfo.population} نسمة`, Icon: Users },
  { label: "المساحة", value: `${communeInfo.area} كم²`, Icon: Ruler },
  { label: "عدد الدواوير", value: `${communeInfo.douwars} دوار`, Icon: Home },
];

export default function JamaaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الجماعة" subtitle="التعريف بجماعة أربعاء الساحل وهياكلها" />
      <Breadcrumb items={[{ label: "الجماعة" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa" />

          <main className="flex-1">
            {/* Intro card */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-4 pb-3 border-b border-slate-100">
                تعريف بجماعة أربعاء الساحل
              </h2>
              <div className="max-w-none text-slate-700 leading-loose space-y-3 text-[15px]">
                <p>
                  جماعة أربعاء الساحل جماعة ترابية تابعة لإقليم تيزنيت، بجهة سوس ماسة
                  بالمملكة المغربية. تقع على الساحل الأطلسي وتتميز بتنوع طبيعي وثروة بشرية
                  متميزة.
                </p>
                <p>
                  تسهر الجماعة على تقديم الخدمات العمومية لفائدة ساكنتها وفق مبادئ الحكامة الجيدة
                  والقرب والمشاركة، وذلك في إطار القانون التنظيمي رقم 113.14 المتعلق بالجماعات.
                </p>
                <p>
                  يضطلع المجلس الجماعي، المنتخب لمدة ست سنوات، بتدبير شؤون الجماعة وفق ما تقتضيه
                  التنمية المستدامة والمتوازنة لمختلف دواوير الجماعة.
                </p>
              </div>
            </section>

            {/* Quick info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {quickInfo.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="service-card bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 flex-shrink-0 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 font-medium">{label}</div>
                      <div className="font-bold text-slate-800 text-sm truncate">{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="service-card bg-white rounded-xl border border-slate-200 p-5 shadow-sm group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 group-hover:text-[#0038A8] transition-colors">
                      {item.label}
                    </span>
                    <ArrowLeft
                      className="w-5 h-5 text-[#0038A8] group-hover:-translate-x-1 transition-transform"
                      strokeWidth={2}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}