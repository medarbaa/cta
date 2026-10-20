import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, MapPin, Landmark, Mail, Globe } from "lucide-react";
import { communeInfo } from "@/lib/data";

const ACTION_PLAN_PERIOD = "2022-2027";

const structureLinks = [
  { href: "/jamaa/president", label: `كلمة السيد رئيس المجلس (${communeInfo.president})` },
  { href: "/jamaa/bureau", label: "المكتب المسير للجماعة" },
  { href: "/jamaa/council", label: "أعضاء المجلس الجماعي" },
  { href: "/jamaa/commissions", label: "اللجان الدائمة وهيئة المساواة" },
  { href: "/jamaa/action-plan", label: `برنامج عمل الجماعة ${ACTION_PLAN_PERIOD}` },
  { href: "/jamaa/marches", label: "الصفقات وطلبات العروض" },
];

const serviceLinks = [
  { href: "/services/procedures", label: "الحالة المدنية وتصحيح الإمضاء" },
  { href: "/services/urbanisme", label: "رخص البناء والتعمير القروي" },
  { href: "/services/environment", label: "تدبير النفايات وحفظ الصحة" },
  { href: "/services/e-services", label: "البوابات والخدمات الرقمية" },
  { href: "/madina/panorama", label: "جغرافيا الدواوير والشواطئ" },
  { href: "/contact", label: "شكايات واقتراحات المواطنين" },
];

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2 text-xs">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-[#FFDE00] flex-shrink-0" strokeWidth={2.5} />
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-[#0038A8] flex items-center justify-between">
      <span>{children}</span>
      <span className="w-8 h-1 bg-[#FFDE00] rounded"></span>
    </h3>
  );
}

export default function Footer() {
  return (
    <footer style={{ direction: "rtl" }} className="mt-12">
      {/* Main Footer */}
      <div className="bg-[#00184A] text-slate-300 pt-12 pb-6 px-4 border-t-4 border-[#FFDE00]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white rounded-lg p-1 flex-shrink-0 shadow">
                <Image
                  src={communeInfo.logo}
                  alt="شعار الجماعة"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-black text-base leading-tight">{communeInfo.name}</div>
                <div className="text-xs text-[#FFDE00] font-mono">{communeInfo.nameTifinagh}</div>
                <div className="text-[11px] text-blue-200">{communeInfo.nameFr}</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              جماعة ترابية قروية بإقليم تيزنيت (جهة سوس ماسة)، تقع على الواجهة الأطلسية للمملكة،
              وتضم أزيد من {communeInfo.douwars} دواراً يتميز بتاريخ عريق وثروات طبيعية وسياحية
              وفلاحية وبحرية واعدة.
            </p>
            <a
              href={communeInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#0038A8] hover:bg-[#00226B] text-white text-xs px-3 py-2 rounded-lg items-center gap-2 transition"
            >
              <svg className="w-4 h-4 fill-current text-[#FFDE00]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>صفحتنا على فايسبوك</span>
            </a>
          </div>

          {/* Structures */}
          <div>
            <ColumnTitle>هياكل الجماعة</ColumnTitle>
            <LinkList links={structureLinks} />
          </div>

          {/* Services */}
          <div>
            <ColumnTitle>خدمات المواطن</ColumnTitle>
            <LinkList links={serviceLinks} />
          </div>

          {/* Contact */}
          <div>
            <ColumnTitle>مقر الجماعة والاتصال</ColumnTitle>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFDE00] mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                <span>{communeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Landmark className="w-4 h-4 text-[#FFDE00] flex-shrink-0" strokeWidth={1.75} />
                <span>عمالة إقليم تيزنيت — جهة سوس ماسة</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFDE00] flex-shrink-0" strokeWidth={1.75} />
                <a
                  href={`mailto:${communeInfo.email}`}
                  className="text-blue-200 hover:underline break-all"
                  dir="ltr"
                >
                  {communeInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#FFDE00] flex-shrink-0" strokeWidth={1.75} />
                <a
                  href={communeInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-200"
                >
                  صفحة الفايسبوك الرسمية
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#00226B] rounded-lg text-[11px] text-blue-100 border border-blue-900 space-y-0.5">
              <div className="font-bold text-[#FFDE00] mb-1">أوقات العمل الرسمية:</div>
              <div>من الإثنين إلى الخميس: 08:30 إلى 16:30</div>
              <div>الجمعة: 08:30 إلى 12:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#000E2E] text-slate-400 text-xs py-3.5 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-right">
          <div>
            © {new Date().getFullYear()} {communeInfo.name} — إقليم تيزنيت. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/jamaa" className="hover:text-white transition-colors">عن الجماعة</Link>
            <span>|</span>
            <Link href="/services" className="hover:text-white transition-colors">الخدمات</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}