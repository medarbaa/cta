import Link from "next/link";
import { communeInfo } from "@/lib/data";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 py-2.5 px-4" style={{ direction: "rtl" }}>
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-green-700 transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              الرئيسية
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-400 mx-1">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-green-700 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-green-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
