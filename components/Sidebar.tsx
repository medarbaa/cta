import Link from "next/link";
import { communeInfo } from "@/lib/data";

interface SidebarItem {
  label: string;
  href: string;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  currentPath: string;
}

export default function Sidebar({ title, items, currentPath }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 flex-shrink-0" style={{ direction: "rtl" }}>
      {/* Section title in Royal Blue */}
      <div className="bg-[#0038A8] text-white font-bold text-sm py-3 px-4 rounded-t-xl flex items-center justify-between border-b-2 border-[#FFDE00]">
        <span>{title}</span>
        <span className="text-[#FFDE00] text-xs">◈</span>
      </div>
      <nav className="bg-white border border-slate-200 rounded-b-xl overflow-hidden shadow-sm">
        <ul className="divide-y divide-slate-100">
          {items.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm transition-all ${
                    isActive
                      ? "bg-[#EBF2FF] text-[#0038A8] font-bold border-r-4 border-[#0038A8]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0038A8]"
                  }`}
                >
                  <span className={`text-xs ${isActive ? "text-[#0038A8]" : "text-slate-400"}`}>◄</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Facebook & Contact box */}
      <div className="mt-5 bg-gradient-to-br from-[#00226B] to-[#0038A8] text-white rounded-xl p-4 shadow-sm border border-blue-900">
        <div className="flex items-center gap-2 font-bold mb-2 text-sm text-[#FFDE00]">
          <span>📢</span>
          <span>التواصل والمستجدات</span>
        </div>
        <p className="text-xs text-blue-100 mb-3 leading-relaxed">
          تابعوا البلاغات الرسمية وأنشطة المجلس عبر الصفحة المعتمدة على فيسبوك.
        </p>
        <div className="space-y-2">
          <a
            href={communeInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#FFDE00] hover:bg-yellow-400 text-[#00226B] font-bold text-xs py-2 px-3 rounded-lg transition-all"
          >
            صفحة الفيسبوك الرسمية
          </a>
          <Link
            href="/contact"
            className="block text-center bg-white/10 hover:bg-white/20 text-white font-medium text-xs py-1.5 px-3 rounded-lg transition-all border border-white/20"
          >
            إرسال شكاية أو استفسار
          </Link>
        </div>
      </div>
    </aside>
  );
}
