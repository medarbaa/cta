import Link from "next/link";
import Image from "next/image";
import { communeInfo } from "@/lib/data";

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
              جماعة ترابية قروية بإقليم تيزنيت (جهة سوس ماسة)، تقع على الواجهة الأطلسية للمملكة، وتضم أزيد من 90 دواراً يتميز بتاريخ عريق وثروات طبيعية وسياحية وفلاحية وبحرية واعدة.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={communeInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0038A8] hover:bg-[#00226B] text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <svg className="w-4 h-4 fill-current text-[#FFDE00]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>صفحتنا على فايسبوك</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-[#0038A8] flex items-center justify-between">
              <span>هياكل الجماعة</span>
              <span className="w-8 h-1 bg-[#FFDE00] rounded"></span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/jamaa/president" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> كلمة السيد رئيس المجلس ({communeInfo.president})</Link></li>
              <li><Link href="/jamaa/bureau" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> المكتب المسير للجماعة</Link></li>
              <li><Link href="/jamaa/council" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> أعضاء المجلس الجماعي</Link></li>
              <li><Link href="/jamaa/commissions" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> اللجان الدائمة وهيئة المساواة</Link></li>
              <li><Link href="/jamaa/action-plan" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> برنامج عمل الجماعة 2022-2027</Link></li>
              <li><Link href="/jamaa/marches" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> الصفقات وطلبات العروض</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-[#0038A8] flex items-center justify-between">
              <span>خدمات المواطن</span>
              <span className="w-8 h-1 bg-[#FFDE00] rounded"></span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/procedures" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> الحالة المدنية وتصحيح الإمضاء</Link></li>
              <li><Link href="/services/urbanisme" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> رخص البناء والتعمير القروي</Link></li>
              <li><Link href="/services/environment" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> تدبير النفايات وحفظ الصحة</Link></li>
              <li><Link href="/services/e-services" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> البوابات والخدمات الرقمية</Link></li>
              <li><Link href="/madina/panorama" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> جغرافيا الدواوير والشواطئ</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFDE00] transition-colors flex items-center gap-2"><span className="text-[#FFDE00]">←</span> شكايات واقتراحات المواطنين</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 pb-2 border-b border-[#0038A8] flex items-center justify-between">
              <span>مقر الجماعة والاتصال</span>
              <span className="w-8 h-1 bg-[#FFDE00] rounded"></span>
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFDE00] mt-0.5">📍</span>
                <span>{communeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#FFDE00]">🏛️</span>
                <span>عمالة إقليم تيزنيت — جهة سوس ماسة</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#FFDE00]">✉️</span>
                <span className="text-blue-200">{communeInfo.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#FFDE00]">🌐</span>
                <a href={communeInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-200">
                  صفحة الفايسبوك الرسمية
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#00226B] rounded-lg text-[11px] text-blue-100 border border-blue-900">
              <div className="font-bold text-[#FFDE00] mb-0.5">أوقات العمل الرسمية:</div>
              <div>من الإثنين إلى الجمعة: 08:30 إلى 16:30</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#000E2E] text-slate-400 text-xs py-3.5 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-right">
          <div>
            © 2025 {communeInfo.name} — إقليم تيزنيت. جميع الحقوق محفوظة للمملكة المغربية.
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
