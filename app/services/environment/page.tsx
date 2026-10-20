import { Trash2, Leaf, TreePine, Droplets, CircleCheck, Siren, Phone, Mail } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { communeInfo } from "@/lib/data";

const sidebarItems = [
  { label: "النظافة والبيئة", href: "/services/environment" },
  { label: "التعمير والبناء", href: "/services/urbanisme" },
  { label: "المساطر الإدارية", href: "/services/procedures" },
  { label: "الخدمات الإلكترونية", href: "/services/e-services" },
  { label: "دليل الخدمات", href: "/services/guide" },
];

// راجع هذه الخدمات وأبقِ فقط ما توفره الجماعة فعلاً
const sections = [
  {
    title: "جمع النفايات المنزلية",
    Icon: Trash2,
    details: [
      "جمع منتظم بمركز الجماعة",
      "جمع دوري بالدواوير",
      "حاويات في الأماكن العامة",
      "حملات نظافة موسمية",
    ],
  },
  {
    title: "تدبير النفايات الخضراء",
    Icon: Leaf,
    details: [
      "تقليم الأشجار والنباتات",
      "التخلص من المخلفات الخضراء",
      "التسميد العضوي",
      "الحدائق العامة",
    ],
  },
  {
    title: "البيئة والتشجير",
    Icon: TreePine,
    details: [
      "برنامج التشجير السنوي",
      "المحافظة على المساحات الخضراء",
      "التوعية البيئية بالمدارس",
      "مكافحة التصحر",
    ],
  },
  {
    title: "الماء والتطهير",
    Icon: Droplets,
    details: [
      "شبكة تصريف المياه العادمة",
      "صيانة محطات الضخ",
      "التنسيق مع الجهات المختصة لمراقبة الجودة",
      "التوعية بترشيد الاستهلاك",
    ],
  },
];

export default function EnvironmentPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="النظافة والبيئة" subtitle="خدمات النظافة والمحافظة على البيئة" />
      <Breadcrumb
        items={[{ label: "خدمات المواطن", href: "/services" }, { label: "النظافة والبيئة" }]}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="خدمات المواطن" items={sidebarItems} currentPath="/services/environment" />

          <div className="flex-1 min-w-0">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6 mb-6">
              <h2 className="text-xl font-bold text-[#0038A8] mb-3">خدمة النظافة والبيئة</h2>
              <p className="text-slate-600 text-[15px] leading-loose">
                تولي الجماعة الترابية أربعاء الساحل اهتماماً بقطاع النظافة والبيئة، إيماناً منها
                بأن البيئة النظيفة أساس صحة المواطن وجودة حياته، وذلك في إطار التنمية المستدامة.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {sections.map(({ title, Icon, details }) => (
                <article
                  key={title}
                  className="service-card bg-white rounded-xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-bold text-slate-800">{title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-600">
                        <CircleCheck
                          className="w-4 h-4 text-[#0038A8] flex-shrink-0"
                          strokeWidth={2}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Reporting */}
            <section className="bg-[#EBF2FF] border border-[#BFD5FF] rounded-xl p-5">
              <h3 className="font-bold text-[#00226B] mb-2 flex items-center gap-2">
                <Siren className="w-5 h-5 text-[#0038A8]" strokeWidth={1.75} />
                الإبلاغ عن مشكل بيئي
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                هل لاحظتم مشكلاً بيئياً أو مكباً عشوائياً في منطقتكم؟ أبلغوا عنه عبر:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${communeInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#0038A8] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#00226B] transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  <span dir="ltr">{communeInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${communeInfo.email}`}
                  className="inline-flex items-center gap-2 bg-white border border-[#0038A8] text-[#0038A8] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#EBF2FF] transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={2} />
                  البريد الإلكتروني
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}