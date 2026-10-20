import Link from "next/link";
import Image from "next/image";
import {
  UserRound,
  MapPin,
  ArrowLeft,
  Waves,
  Building2,
  FileText,
  Monitor,
  Fish,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { news, projects, services, stats, communeInfo, announcements } from "@/lib/data";

// عدّل الفترة هنا لتتوحد في كل الصفحات
const ACTION_PLAN_PERIOD = "2022-2027";

const iconMap: Record<string, LucideIcon> = {
  leaf: Waves,
  building: Building2,
  document: FileText,
  computer: Monitor,
  water: Fish,
  book: BookOpen,
};

const ARABIC_MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو",
  "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر",
];

// تنسيق ثابت يعطي نفس النتيجة على الخادم والمتصفح
function parseDate(value: string) {
  const [y, m, d] = value.slice(0, 10).split("-").map(Number);
  return { y, m: m - 1, d };
}
function formatDate(value: string) {
  const { y, m, d } = parseDate(value);
  return `${d} ${ARABIC_MONTHS[m]} ${y}`;
}

export default function HomePage() {
  return (
    <div style={{ direction: "rtl" }}>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-[540px] flex items-center overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #00184A 0%, #002B82 50%, #0038A8 100%)",
        }}
      >
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="souss-hero-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="30" cy="30" r="10" fill="none" stroke="#FFDE00" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#souss-hero-pat)" />
          </svg>
        </div>

        {/* Top Yellow Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFDE00]"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#FFDE00] animate-pulse"></span>
                <span>البوابة الإلكترونية الرسمية — إقليم تيزنيت — جهة سوس ماسة</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-2">
                {communeInfo.name}
              </h1>
              <div className="text-sm sm:text-base font-bold text-[#FFDE00] font-mono mb-3">
                {communeInfo.nameTifinagh}
              </div>
              <p className="text-blue-100 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl font-light">
                مرحباً بكم في البوابة الرسمية لجماعة أربعاء الساحل، المنصة الموحدة للاطلاع على
                مستجدات التدبير الجماعي، خدمات القرب، والمشاريع التنموية الكبرى الرامية إلى خدمة
                ساكنة أزيد من {communeInfo.douwars} دواراً.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="bg-[#FFDE00] hover:bg-yellow-400 text-[#00184A] font-extrabold px-6 py-3 rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 text-sm"
                >
                  دليل خدمات المواطن
                </Link>
                <Link
                  href="/jamaa"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/30 backdrop-blur-sm transition-all text-sm"
                >
                  المجلس الجماعي والمكتب
                </Link>
                <a
                  href={communeInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00226B] hover:bg-[#00184A] text-white font-semibold px-4 py-3 rounded-xl border border-blue-400/40 transition-all text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-[#FFDE00]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>صفحة الفيسبوك</span>
                </a>
              </div>
            </div>

            {/* Logo card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl text-center border-4 border-[#FFDE00] max-w-sm w-full">
                <div className="relative w-44 h-44 mx-auto mb-3">
                  <Image
                    src={communeInfo.logo}
                    alt="شارة الجماعة الترابية أربعاء الساحل"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-[#0038A8] font-bold text-base mb-0.5">
                  شارة الشرف لجماعة أربعاء الساحل
                </div>
                <div className="text-xs text-slate-500 font-bold mb-2">
                  &ldquo; {communeInfo.motto} &rdquo;
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100">
                  دائرة تيزنيت — عمالة إقليم تيزنيت
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-slate-100">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-6 px-3">
                <div className="text-2xl sm:text-3xl font-black text-[#0038A8] stat-number">{stat.value}</div>
                <div className="text-xs text-[#00226B] font-bold mt-0.5">{stat.unit}</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS & ANNOUNCEMENTS ===== */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-6 rounded bg-[#0038A8] inline-block"></span>
                  <span>مستجدات وأنشطة الجماعة</span>
                </h2>
                <a
                  href={communeInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0038A8] hover:text-[#00226B] font-bold flex items-center gap-1"
                >
                  <span>متابعة على فايسبوك</span>
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
                </a>
              </div>

              <div className="space-y-4">
                {news.slice(0, 4).map((item) => {
                  const d = parseDate(item.date);
                  return (
                    <article
                      key={item.id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden flex flex-col sm:flex-row"
                    >
                      <div className="bg-[#0038A8] text-white flex sm:flex-col items-center justify-center p-3 sm:w-24 flex-shrink-0 text-center gap-1 sm:gap-0">
                        <span className="text-lg sm:text-2xl font-black leading-none text-[#FFDE00]">
                          {d.d}
                        </span>
                        <span className="text-xs text-blue-100">{ARABIC_MONTHS[d.m]}</span>
                        <span className="text-[11px] text-blue-200">{d.y}</span>
                      </div>

                      <div className="p-4 sm:p-5 flex-1">
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 bg-[#EBF2FF] text-[#0038A8]">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Announcements & Official Notices */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-6 rounded bg-[#FFDE00] inline-block"></span>
                  <span>الإعلانات والصفقات</span>
                </h2>
                <Link
                  href="/media/announcements"
                  className="text-xs text-[#0038A8] font-bold hover:underline flex items-center gap-1"
                >
                  عرض الكل
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
                </Link>
              </div>

              <div className="space-y-3">
                {announcements.map((ann) => {
                  const isTender = ann.type === "صفقات عمومية";
                  return (
                    <div
                      key={ann.id}
                      className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:border-[#0038A8] transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            isTender ? "bg-amber-100 text-amber-800" : "bg-[#EBF2FF] text-[#0038A8]"
                          }`}
                        >
                          {ann.type}
                        </span>
                        {ann.reference && (
                          <span className="text-[10px] text-slate-400 font-mono">{ann.reference}</span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug mb-2">
                        {ann.title}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                        <span>{formatDate(ann.date)}</span>
                        {ann.deadline && (
                          <span className="text-amber-700 font-bold">
                            آخر أجل: {formatDate(ann.deadline)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* President Spotlight Box */}
              <div className="mt-6 bg-[#00226B] rounded-2xl p-5 text-white shadow-md border border-blue-900">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFDE00] text-[#00226B] flex items-center justify-center flex-shrink-0">
                    <UserRound className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">رئيس المجلس الجماعي</div>
                    <div className="text-base font-black text-white">{communeInfo.president}</div>
                  </div>
                </div>
                <p className="text-xs text-blue-100 leading-relaxed mb-3">
                  مرحباً بجميع المواطنات والمواطنين. نعمل سوياً لخدمة الجماعة والنهوض بمختلف الدواوير
                  والمجالات التابعة لأربعاء الساحل.
                </p>
                <Link
                  href="/jamaa/president"
                  className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 rounded-lg transition"
                >
                  كلمة الرئيس ومهام المجلس
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CITIZEN SERVICES ===== */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#EBF2FF] text-[#0038A8] text-xs font-bold px-3 py-1 rounded-full mb-2">
              خدمات القرب الإدارية
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              خدمات المواطن والمرتفقين
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              تيسير المساطر الإدارية وتقديم الخدمات الأساسية لساكنة أربعاء الساحل ومغاربة العالم
              المنحدرين من المنطقة.
            </p>
            <div className="flex justify-center mt-3 gap-1.5">
              <div className="h-1 w-10 rounded bg-[#0038A8]"></div>
              <div className="h-1 w-6 rounded bg-[#FFDE00]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? FileText;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="service-card bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center hover:bg-white cursor-pointer shadow-sm group"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" strokeWidth={1.6} />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-slate-800 mb-1 group-hover:text-[#0038A8] transition-colors">
                    {service.title}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-snug">
                    {service.description}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS & DEVELOPMENT ===== */}
      <section className="py-12 px-4 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
            <div>
              <div className="text-xs text-[#0038A8] font-bold">
                برنامج عمل الجماعة {ACTION_PLAN_PERIOD}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                المشاريع التنموية والأوراش
              </h2>
            </div>
            <Link
              href="/jamaa/action-plan"
              className="inline-flex items-center gap-2 bg-[#0038A8] text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-[#00226B] transition shadow-sm w-fit"
            >
              <span>تفاصيل برنامج العمل</span>
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project) => {
              const done = project.status === "منجز";
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        done ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[11px] text-slate-400">{project.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>نسبة الإنجاز</span>
                      <span className="font-bold text-[#0038A8]">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          project.progress === 100 ? "bg-emerald-500" : "bg-[#0038A8]"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-slate-700 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span>الميزانية التقديرية:</span>
                    <span className="text-[#0038A8]">{project.budget}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MAP & DISCOVERY ===== */}
      <section className="py-12 px-4 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs text-[#0038A8] font-bold mb-1">الموقع الجغرافي والمؤهلات</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                أربعاء الساحل: امتداد بحري وتراث سوسي أصيل
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                تحد جماعة أربعاء الساحل المحيط الأطلسي غرباً، وجماعة أكلو شمالاً، وجماعة مير اللفت
                جنوباً، وجماعتي بونعمان وسيدي بوعبداللي شرقاً. يشكل سوقها الأسبوعي (يوم الأربعاء)
                قطباً تجارياً محورياً بإقليم تيزنيت يستقطب زواراً وفلاحين من شتى المناطق.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400">الحدود البحرية:</div>
                  <div className="font-bold text-slate-800 text-sm">واجهة المحيط الأطلسي</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-400">السوق الأسبوعي:</div>
                  <div className="font-bold text-slate-800 text-sm">كل يوم أربعاء</div>
                </div>
              </div>
              <Link
                href="/madina/panorama"
                className="inline-flex items-center gap-2 bg-[#0038A8] hover:bg-[#00226B] text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow-sm"
              >
                استكشف جغرافيا وتاريخ الجماعة
                <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.25} />
              </Link>
            </div>

            {/* Map visual card */}
            <div className="bg-gradient-to-br from-[#00226B] to-[#0038A8] rounded-2xl p-8 text-white text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#FFDE00]" strokeWidth={1.5} />
              </div>
              <h3 className="font-black text-lg mb-1">موقع جماعة أربعاء الساحل على الخريطة</h3>
              <p className="text-xs text-blue-200 mb-5 max-w-sm mx-auto">
                دائرة تيزنيت، إقليم تيزنيت، جهة سوس ماسة، المملكة المغربية.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Arbaa+Sahel+Tiznit+Morocco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFDE00] text-[#00226B] hover:bg-yellow-400 font-extrabold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  فتح عبر Google Maps
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg border border-white/20 transition"
                >
                  العنوان والتواصل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}