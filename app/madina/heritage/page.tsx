import { Store, Waves, Trees, Landmark, Music, Hammer } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "بانوراما", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث", href: "/madina/heritage" },
];

// راجع هذه النصوص وعدّلها حسب الواقع المحلي
const heritageItems = [
  {
    title: "السوق الأسبوعي (يوم الأربعاء)",
    Icon: Store,
    desc: "يُعدّ السوق الأسبوعي رمز الجماعة الأبرز، إذ يجمع عشرات التجار والفلاحين من المنطقة وما جاورها كل أربعاء. وهو من الأسواق الأسبوعية العريقة بإقليم تيزنيت، ويشكل ركيزة اقتصادية واجتماعية مهمة.",
    type: "تراث تجاري",
  },
  {
    title: "الشاطئ الأطلسي",
    Icon: Waves,
    desc: "تتمتع الجماعة بواجهة ساحلية أطلسية ذات جمال طبيعي، بشواطئها الممتدة وتضاريسها الساحلية المتنوعة التي تشكل ثروة طبيعية وسياحية واعدة.",
    type: "تراث طبيعي",
  },
  {
    title: "المجال الطبيعي",
    Icon: Trees,
    desc: "تحيط بالجماعة مجالات طبيعية متنوعة تضم أصنافاً نباتية وحيوانية تميز المنطقة، وتستوجب الحفاظ عليها وتثمينها لفائدة الأجيال القادمة.",
    type: "تراث بيئي",
  },
  {
    title: "الصناعات التقليدية",
    Icon: Hammer,
    desc: "تبرز في المنطقة حرف تقليدية عريقة تعكس مهارة الحرفيين المحليين وإبداعهم الموروث.",
    type: "صناعة تقليدية",
  },
];

export default function HeritagePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader
        title="التراث"
        subtitle="الموروث الثقافي والطبيعي للجماعة الترابية أربعاء الساحل"
      />
      <Breadcrumb items={[{ label: "مدينتي", href: "/madina" }, { label: "التراث" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي" items={sidebarItems} currentPath="/madina/heritage" />

          <div className="flex-1 min-w-0">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">الموروث الثقافي والطبيعي</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
   تزخر الجماعة الترابية أربعاء الساحل بإرث حضاري وطبيعي متنوع يشكل هوية المنطقة
وثروتها التي تستوجب الصون والتثمين والتوارث بين الأجيال.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {heritageItems.map(({ title, Icon, desc, type }) => (
                <article
                  key={title}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-800 text-sm mb-1.5">{title}</h3>
                      <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 bg-[#EBF2FF] text-[#0038A8]">
                        {type}
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}