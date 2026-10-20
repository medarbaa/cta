import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="مسار التنقل"
      className="bg-[#F1F5F9] border-b border-slate-200 py-2.5 px-4"
      style={{ direction: "rtl" }}
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-slate-600">
          <li>
            <Link
              href="/"
              className="hover:text-[#0038A8] transition-colors flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5" strokeWidth={2} />
              الرئيسية
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronLeft className="w-3.5 h-3.5 text-slate-400 mx-0.5" strokeWidth={2.25} />
              {item.href ? (
                <Link href={item.href} className="hover:text-[#0038A8] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-[#0038A8] font-semibold">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}