import { UserRound, Users } from "lucide-react";
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
      <PageHeader title="المكتب" subtitle="أعضاء مكتب مجلس الجماعة الترابية أربعاء الساحل" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "المكتب" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/bureau" />

          <main className="flex-1">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">تكوين المكتب</h2>
              <p className="text-slate-600 text-[15px] leading-loose mb-6">
                يتألف مكتب مجلس الجماعة الترابية أربعاء الساحل من الرئيس ونوابه، وينتخب المجلس
                الجماعي أعضاءه في دورته التأسيسية المنعقدة عقب انتخابات 2021.
              </p>

              {bureau.length === 0 ? (
                <div className="text-center py-10 text-slate-500">
                  <Users className="w-10 h-10 mx-auto mb-3 text-slate-300" strokeWidth={1.5} />
                  لا توجد بيانات متاحة حالياً.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {bureau.map((member) => (
                    <article
                      key={member.id}
                      className="service-card border border-slate-200 rounded-xl p-5 bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00226B] to-[#0038A8] border-2 border-[#FFDE00] flex items-center justify-center text-white flex-shrink-0">
                          <UserRound className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-800">{member.name}</div>
                          <div className="text-sm font-semibold mt-0.5 text-[#0038A8]">
                            {member.role}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{member.party}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="text-xs text-slate-500">
                          اللجنة:{" "}
                          <span className="font-semibold text-slate-700">{member.commission}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}