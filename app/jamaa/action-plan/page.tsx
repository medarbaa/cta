import {
  Construction,
  Droplets,
  Users,
  Leaf,
  Wallet,
  FolderOpen,
  ChevronLeft,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/data";

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

const axes = [
  {
    title: "محور البنية التحتية والتهيئة",
    Icon: Construction,
    items: ["تهيئة المسالك الجماعية", "الإنارة العمومية بالطاقة الشمسية", "تصريف المياه العادمة"],
  },
  {
    title: "محور الماء والصرف الصحي",
    Icon: Droplets,
    items: ["تمديد شبكة الماء الشروب", "محطات تصفية المياه", "الحفاظ على الموارد المائية"],
  },
  {
    title: "محور التنمية الاجتماعية",
    Icon: Users,
    items: ["دور الشباب والقرب", "دعم التعليم والتكوين", "المراكز الصحية القروية"],
  },
  {
    title: "محور البيئة والتنمية المستدامة",
    Icon: Leaf,
    items: ["التشجير ومكافحة التصحر", "إدارة النفايات الصلبة", "التوعية البيئية"],
  },
];

export default function ActionPlanPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="برنامج عمل الجماعة"
        subtitle="برنامج عمل الجماعة الترابية أربعاء الساحل 2022-2028"
      />
      <Breadcrumb
        items={[{ label: "الجماعة", href: "/jamaa" }, { label: "برنامج عمل الجماعة" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/action-plan" />

          <main className="flex-1">
            {/* Intro */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-4">
                برنامج عمل الجماعة 2022-2028
              </h2>
              <p className="text-slate-600 text-[15px] leading-loose mb-3">
                يُعدّ برنامج عمل الجماعة الإطارَ المرجعي الذي يُحدد التوجهات الاستراتيجية والمشاريع
                والأعمال المُزمع إنجازها خلال الفترة الممتدة من 2022 إلى 2028، وذلك وفق ما تقتضيه
                حاجيات الساكنة وأولويات التنمية المحلية.
              </p>
              <p className="text-slate-600 text-[15px] leading-loose">
                اعتُمد البرنامج في دورة المجلس العادية بتاريخ يونيو 2022، وخضع للمراجعة الدورية وفق
                المستجدات التنموية للجماعة.
              </p>
            </section>

            {/* Axes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {axes.map(({ title, Icon, items }) => (
                <article
                  key={title}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <ChevronLeft
                          className="w-4 h-4 text-[#0038A8] flex-shrink-0"
                          strokeWidth={2.25}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Projects list */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-[#0038A8] text-lg mb-5 pb-3 border-b border-slate-100">
                المشاريع المبرمجة
              </h3>
              <div className="space-y-4">
                {projects.map((project) => {
                  const done = project.status === "منجز";
                  return (
                    <article
                      key={project.id}
                      className="border border-slate-200 rounded-lg p-4 hover:border-[#93C5FD] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">{project.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                            done
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-500 mt-3">
                        <span className="flex items-center gap-1.5">
                          <Wallet className="w-3.5 h-3.5 text-[#0038A8]" strokeWidth={1.75} />
                          {project.budget}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FolderOpen className="w-3.5 h-3.5 text-[#0038A8]" strokeWidth={1.75} />
                          {project.category}
                        </span>
                      </div>

                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                          <span>نسبة الإنجاز</span>
                          <span className="font-semibold text-[#0038A8]">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              project.progress === 100 ? "bg-emerald-500" : "bg-[#0038A8]"
                            }`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}