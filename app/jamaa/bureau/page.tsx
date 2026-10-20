import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { councilMembers } from "@/lib/data";

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

export default function BureauPage() {
  const bureau = councilMembers.slice(0, 4);
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="المكتب" subtitle="أعضاء مكتب مجلس جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "المكتب" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/bureau" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">تكوين المكتب</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                يتشكل مكتب مجلس جماعة اربعاء الساحل من الرئيس ونوابه المنتخبين من قبل أعضاء المجلس
                الجماعي في دورته التأسيسية المنعقدة عقب انتخابات 2021.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {bureau.map((member) => (
                  <div
                    key={member.id}
                    className="border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl flex-shrink-0"
                        style={{ backgroundColor: "#006233" }}
                      >
                        👤
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{member.name}</div>
                        <div
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "#C1272D" }}
                        >
                          {member.role}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{member.party}</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="text-xs text-gray-500">اللجنة: <span className="font-medium text-gray-700">{member.commission}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
