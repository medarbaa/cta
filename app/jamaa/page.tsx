import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { communeInfo, councilMembers } from "@/lib/data";

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

export default function JamaaPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="الجماعة" subtitle="التعريف بجماعة اربعاء الساحل وهياكلها" />
      <Breadcrumb items={[{ label: "الجماعة" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa" />

          <main className="flex-1">
            {/* Intro card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 pb-2 border-b border-gray-100">
                تعريف بجماعة اربعاء الساحل
              </h2>
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-3">
                <p>
                  جماعة اربعاء الساحل جماعة قروية تابعة لإقليم القنيطرة، بجهة الرباط-سلا-القنيطرة
                  بالمملكة المغربية. تقع على الساحل الأطلسي المغربي وتتميز بتنوع طبيعي وثروة بشرية
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
            </div>

            {/* Quick info grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "الإقليم", value: communeInfo.province, icon: "🗺️" },
                { label: "الجهة", value: communeInfo.region, icon: "🌍" },
                { label: "الرئيس", value: communeInfo.president, icon: "👤" },
                { label: "عدد السكان", value: `${communeInfo.population} نسمة`, icon: "👥" },
                { label: "المساحة", value: `${communeInfo.area} كم²`, icon: "📐" },
                { label: "عدد الدواوير", value: `${communeInfo.douwars} دوار`, icon: "🏘️" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="font-bold text-gray-800 text-sm">{item.value}</div>
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
                  className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform text-lg">←</span>
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
