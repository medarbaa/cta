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

export default function ActionPlanPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="برنامج عمل الجماعة" subtitle="برنامج عمل جماعة اربعاء الساحل 2022-2028" />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "برنامج عمل الجماعة" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/action-plan" />
          <main className="flex-1">
            {/* Intro */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">برنامج عمل الجماعة 2022-2028</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                يُعدّ برنامج عمل الجماعة الإطارَ المرجعي الذي يُحدد التوجهات الاستراتيجية والمشاريع
                والأعمال المُزمع إنجازها خلال الفترة الممتدة من 2022 إلى 2028، وذلك وفق ما تقتضيه
                حاجيات الساكنة وأولويات التنمية المحلية.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                اعتُمد البرنامج في دورة المجلس العادية بتاريخ يونيو 2022، وخضع للمراجعة الدورية
                وفق المستجدات التنموية للجماعة.
              </p>
            </div>

            {/* Axes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  title: "محور البنية التحتية والتهيئة",
                  icon: "🏗️",
                  color: "#006233",
                  items: ["تهيئة المسالك الجماعية", "الإنارة العمومية بالطاقة الشمسية", "تصريف المياه العادمة"],
                },
                {
                  title: "محور الماء والصرف الصحي",
                  icon: "💧",
                  color: "#0077b6",
                  items: ["تمديد شبكة الماء الشروب", "محطات تصفية المياه", "الحفاظ على الموارد المائية"],
                },
                {
                  title: "محور التنمية الاجتماعية",
                  icon: "👨‍👩‍👧‍👦",
                  color: "#C1272D",
                  items: ["دور الشباب والقرب", "دعم التعليم والتكوين", "المراكز الصحية القروية"],
                },
                {
                  title: "محور البيئة والتنمية المستدامة",
                  icon: "🌿",
                  color: "#2d6a4f",
                  items: ["التشجير ومكافحة التصحر", "إدارة النفايات الصلبة", "التوعية البيئية"],
                },
              ].map((axis) => (
                <div key={axis.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                      style={{ backgroundColor: axis.color + "20" }}
                    >
                      {axis.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">{axis.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {axis.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: axis.color }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects list */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-4">المشاريع المبرمجة</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{project.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                      </div>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 mr-3"
                        style={{
                          backgroundColor: project.status === "منجز" ? "#e8f5e9" : "#fff3cd",
                          color: project.status === "منجز" ? "#006233" : "#856404",
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                      <span>💰 {project.budget}</span>
                      <span>📂 {project.category}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>نسبة الإنجاز</span>
                        <span className="font-medium" style={{ color: "#006233" }}>{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${project.progress}%`,
                            backgroundColor: project.progress === 100 ? "#006233" : "#f59e0b",
                          }}
                        />
                      </div>
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
