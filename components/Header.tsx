"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems, communeInfo } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full z-50 shadow-md sticky top-0" style={{ direction: "rtl" }}>
      {/* Top bar with Royal Blue */}
      <div className="bg-[#00226B] text-white text-xs py-2 px-4 border-b border-[#0038A8]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-blue-100">
            <span className="font-medium text-[#FFDE00]">المملكة المغربية</span>
            <span className="hidden sm:inline text-blue-300">|</span>
            <span className="hidden sm:inline">وزارة الداخلية — عمالة إقليم تيزنيت — جهة سوس ماسة</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={communeInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-100 hover:text-[#FFDE00] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>صفحة الفيسبوك الرسمية</span>
            </a>
            <span className="text-blue-400">|</span>
            <Link href="/contact" className="hover:text-[#FFDE00] transition-colors">مكتب الضبط والاتصال</Link>
          </div>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            {/* Real Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-0.5">
              <Image
                src= {process.env.NODE_ENV === "production" ? "/cta/logo2.png" : "/logo2.png"}
                alt="شعار الجماعة الترابية أربعاء الساحل"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-[#0038A8] tracking-tight group-hover:text-[#00226B] transition-colors">
                {communeInfo.name}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 font-mono tracking-wider">
                {communeInfo.nameTifinagh}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {communeInfo.nameFr} — {communeInfo.province}
              </div>
            </div>
          </Link>

          {/* Motto & Kingdom Badge */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right border-r-2 border-[#FFDE00] pr-4">
              <div className="text-xs text-[#0038A8] font-bold">شعار الشارة الجماعية:</div>
              <div className="text-sm font-bold text-slate-700 italic">" {communeInfo.motto} "</div>
              <div className="text-[11px] text-slate-400">سوس ماسة — تيزنيت</div>
            </div>
            <a
              href={communeInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0038A8] hover:bg-[#00226B] text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <span>تابعنا على فايسبوك</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#0038A8] hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="القائمة الرئيسية"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation bar with Royal Blue */}
      <nav className="hidden md:block bg-[#0038A8] border-b-2 border-[#FFDE00]">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center">
            <li>
              <Link
                href="/"
                className="block px-4 py-3.5 text-white font-bold text-sm hover:bg-[#00226B] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-[#FFDE00]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                الرئيسية
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href} className="relative group nav-item">
                <Link
                  href={item.href}
                  className="block px-4 py-3.5 text-white font-bold text-sm hover:bg-[#00226B] transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className="w-3.5 h-3.5 text-[#FFDE00]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {item.children.length > 0 && (
                  <ul className="nav-dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#EBF2FF] hover:text-[#0038A8] border-b border-slate-100 last:border-0 transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <ul className="divide-y divide-slate-100">
            <li>
              <Link href="/" className="block px-4 py-3 text-[#0038A8] font-bold" onClick={() => setMobileOpen(false)}>
                الرئيسية
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className="w-full text-right px-4 py-3 text-slate-800 font-bold flex justify-between items-center"
                  onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className={`w-4 h-4 text-[#0038A8] transition-transform ${openDropdown === item.href ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                {openDropdown === item.href && item.children.length > 0 && (
                  <ul className="bg-slate-50 divide-y divide-slate-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-8 py-2.5 text-sm text-slate-600 hover:text-[#0038A8]"
                          onClick={() => setMobileOpen(false)}
                        >
                          — {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
