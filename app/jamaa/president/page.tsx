import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
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

export default function PresidentPage() {
  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="كلمة ومهام رئيس المجلس الجماعي" subtitle={`رئيس مجلس الجماعة الترابية أربعاء الساحل (${communeInfo.province})`} />
      <Breadcrumb items={[{ label: "الجماعة", href: "/jamaa" }, { label: "الرئيس" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar title="الجماعة" items={sidebarItems} currentPath="/jamaa/president" />

          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar / Emblem */}
                <div className="flex-shrink-0 text-center w-full md:w-auto">
                  <div className="w-44 h-44 mx-auto rounded-2xl bg-gradient-to-br from-[#00226B] to-[#0038A8] flex flex-col items-center justify-center text-white shadow-md p-4 border-2 border-[#FFDE00]">
                    <span className="text-6xl mb-2">👤</span>
                    <span className="text-xs font-bold text-[#FFDE00]">رئيس المجلس</span>
                  </div>
                  <div className="mt-3">
                    <div className="font-black text-[#0038A8] text-lg">{communeInfo.president}</div>
                    <div className="text-xs text-slate-500 font-semibold">رئيس الجماعة الترابية أربعاء الساحل</div>
                    <div className="text-[11px] text-slate-400">إقليم تيزنيت — ولاية 2021-2027</div>
                  </div>
                </div>

                {/* Bio & Word */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-6 rounded bg-[#FFDE00]"></div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      كلمة السيد الرئيس {communeInfo.president}
                    </h2>
                  </div>

                  <div className="text-slate-600 leading-relaxed space-y-3 text-sm">
                    <p>
                      بسم الله الرحمن الرحيم، والصلاة والسلام على أشرف المرسلين وعلى آله وصحبه أجمعين،
                    </p>
                    <p>
                      يسعدني ويشرفني باسمي الخاص ونيابة عن كافة أعضاء وأطر وموظفي الجماعة الترابية أربعاء الساحل، أن أرحب بكم في البوابة الإلكترونية الرسمية لجماعتنا، والتي نروم من خلالها تكريس سياسة القرب، الشفافية، والحق في الوصول إلى المعلومة لفائدة كافة المواطنات والمواطنين وفعاليات المجتمع المدني والفاعلين الاقتصاديين.
                    </p>
                    <p>
                      إن جماعة أربعاء الساحل بإقليم تيزنيت بما تملكه من رصيد تاريخي، وعمق جغرافي يمتد لأزيد من 91 دواراً مع واجهة أطلسية متميزة وسوق أسبوعي عريق، تشهد اليوم دينامية متواصلة لتنفيذ برنامج عمل الجماعة الهادف إلى فك العزلة، تعميم شبكات الماء الصالح للشرب، تهيئة المسالك، ودعم الخدمات الاجتماعية والتنموية بتنسيق وثيق مع السلطات الإقليمية والمحلية والشركاء المؤسساتيين.
                    </p>
                    <blockquote className="border-r-4 border-[#0038A8] pr-4 py-2 bg-[#EBF2FF] rounded-l-lg italic text-[#00226B] font-semibold text-xs sm:text-sm">
                      " شعارنا الدائم المستمد من شارة جماعتنا: 'ولتكن منكم أمة يدعون إلى الخير'.. عهدنا هو التفاني لخدمة الصالح العام وساكنة أربعاء الساحل أينما تواجدوا. "
                    </blockquote>
                  </div>

                  {/* Contact details */}
                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-slate-400 block mb-0.5">مقر العمل:</span>
                      <span className="font-bold text-slate-800">{communeInfo.address}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="text-slate-400 block mb-0.5">الصفحة الرسمية:</span>
                      <a href={communeInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0038A8] hover:underline">
                        facebook.com/100081016219910
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Powers and Competencies */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-black text-slate-900 mb-4 text-base flex items-center gap-2">
                <span className="text-[#0038A8]">⚖️</span>
                <span>اختصاصات ومهام رئيس المجلس الجماعي (القانون التنظيمي 113.14)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {[
                  "تنفيذ مداولات وقرارات المجلس الجماعي وتتبع إنجاز المشاريع",
                  "إعداد برنامج عمل الجماعة والميزانية السنوية وعرضها على المجلس",
                  "تمثيل الجماعة أمام القضاء وفي جميع أعمال الحياة المدنية والإدارية",
                  "الإشراف على التدبير الإداري والمالي لمصالح الجماعة وموظفيها",
                  "ممارسة الشرطة الإدارية في مجالات الوقاية الصحية والنظافة والسكينة العمومية",
                  "إبرام اتفاقيات الشراكة والتعاون لتمويل المشاريع التنموية بالدواوير",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[#0038A8] font-bold">✓</span>
                    <span>{item}</span>
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
