import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";

const sidebarItems = [
  { label: "بانوراما", href: "/madina/panorama" },
  { label: "نبذة تاريخية", href: "/madina/history" },
  { label: "التراث", href: "/madina/heritage" },
];

const heritageItems = [
  {
    title: "السوق الأسبوعي (يوم الأربعاء)",
    icon: "🛒",
    desc: "يُعدّ السوق الأسبوعي رمز الجماعة الأبرز، إذ يجمع عشرات التجار والفلاحين من المنطقة وما جاورها كل أربعاء. وهو من أقدم الأسواق الأسبوعية في إقليم القنيطرة ويُشكّل ركيزة اقتصادية واجتماعية مهمة.",
    type: "تراث تجاري",
  },
  {
    title: "الشاطئ الأطلسي",
    icon: "🌊",
    desc: "تتمتع الجماعة بواجهة ساحلية أطلسية طبيعية ذات جمال خلاب، بشواطئها الرملية الممتدة وتضاريسها الساحلية المتنوعة التي تُشكّل ثروة طبيعية وسياحية استثنائية.",
    type: "تراث طبيعي",
  },
  {
    title: "الغابة والمحميات الطبيعية",
    icon: "🌲",
    desc: "تُحيط بمنطقة اربعاء الساحل غابات طبيعية غنية بأصناف نباتية وحيوانية متنوعة، وتُشكّل رئة خضراء للمنطقة وموئلاً للطيور المهاجرة والحيوانات البرية.",
    type: "تراث بيئي",
  },
  {
    title: "الزوايا والمقامات الدينية",
    icon: "🕌",
    desc: "تزخر المنطقة بمجموعة من الزوايا والأضرحة التي تعكس العمق الروحي والإسلامي للساكنة، وتُحيي فيها الأعياد الدينية والمواسم التقليدية المتوارثة.",
    type: "تراث ديني",
  },
  {
    title: "التراث اللامادي والفنون الشعبية",
    icon: "🎵",
    desc: "تحتضن الجماعة موروثاً غنياً من الفنون الشعبية والأغاني التقليدية والألعاب الشعبية التي تُوارثها الأجداد جيلاً بعد جيل.",
    type: "تراث لامادي",
  },
  {
    title: "الصناعات التقليدية",
    icon: "🏺",
    desc: "تبرز في المنطقة حرف تقليدية عريقة كالنسيج والسلة والفخار والنجارة، تُعكس مهارة الحرفيين المحليين وإبداعهم الموروث.",
    type: "صناعة تقليدية",
  },
];

export default function HeritagePage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="التراث" subtitle="الموروث الثقافي والطبيعي لجماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "مدينتي", href: "/madina" }, { label: "التراث" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="مدينتي" items={sidebarItems} currentPath="/madina/heritage" />
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-green-800 mb-3">الموروث الثقافي والطبيعي</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                تزخر جماعة اربعاء الساحل بإرث حضاري وطبيعي متنوع يجمع بين التراث المادي واللامادي،
                ويُشكّل هوية المنطقة وثروتها التي تستوجب الصون والتثمين والتوارث بين الأجيال.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {heritageItems.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                      </div>
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full mb-2"
                        style={{ backgroundColor: "#e8f5e9", color: "#006233" }}
                      >
                        {item.type}
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
