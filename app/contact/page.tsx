"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Siren,
  CircleCheck,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { communeInfo } from "@/lib/data";

const workingHours = [
  { day: "الإثنين — الخميس", hours: "8:30 — 16:30" },
  { day: "الجمعة", hours: "8:30 — 12:00" },
  { day: "السبت — الأحد", hours: "مغلق" },
];

const emergencyNumbers = [
  { label: "الوقاية المدنية والإسعاف", number: "15" },
  { label: "الشرطة", number: "19" },
  { label: "الدرك الملكي", number: "177" },
];

const inputClass =
  "w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-[#0038A8] focus:ring-1 focus:ring-[#0038A8] transition-colors";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const contactItems = [
    { Icon: MapPin, label: "العنوان", value: `${communeInfo.address}، ${communeInfo.postalCode}` },
    { Icon: Phone, label: "الهاتف", value: communeInfo.phone, ltr: true },
    { Icon: Printer, label: "الفاكس", value: communeInfo.fax, ltr: true },
    { Icon: Mail, label: "البريد الإلكتروني", value: communeInfo.email, ltr: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="اتصل بنا" subtitle="تواصل مع الجماعة الترابية أربعاء الساحل" />
      <Breadcrumb items={[{ label: "اتصل بنا" }]} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-[#FFDE00] p-6">
              <h2 className="font-bold text-[#0038A8] text-lg mb-5">معلومات الاتصال</h2>
              <ul className="space-y-4">
                {contactItems.map(({ Icon, label, value, ltr }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                      <div
                        className="text-sm font-semibold text-slate-800 break-words"
                        dir={ltr ? "ltr" : undefined}
                        style={ltr ? { textAlign: "right" } : undefined}
                      >
                        {value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0038A8]" strokeWidth={1.75} />
                ساعات العمل
              </h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {workingHours.map((row) => (
                    <tr key={row.day}>
                      <td className="py-2.5 text-slate-600">{row.day}</td>
                      <td className="py-2.5 text-left font-semibold text-[#00226B]" dir="ltr">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Emergency */}
            <section className="rounded-xl p-5 text-white bg-[#B91C1C]">
              <h3 className="font-bold mb-1 flex items-center gap-2">
                <Siren className="w-5 h-5" strokeWidth={1.75} />
                أرقام الطوارئ
              </h3>
              <p className="text-red-100 text-xs mb-3">للحالات الطارئة على مدار الساعة</p>
              <ul className="space-y-2">
                {emergencyNumbers.map((e) => (
                  <li
                    key={e.number}
                    className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2"
                  >
                    <span className="text-sm">{e.label}</span>
                    <span className="text-lg font-bold" dir="ltr">
                      {e.number}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="font-bold text-[#0038A8] text-xl mb-6 pb-3 border-b border-slate-100">
                أرسل رسالتك
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-[#EBF2FF] text-[#0038A8] flex items-center justify-center">
                    <CircleCheck className="w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#00226B] text-xl mb-2">تم إرسال رسالتك بنجاح</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    شكراً لتواصلك معنا. سيتم الرد على استفسارك في أقرب وقت ممكن.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="bg-[#0038A8] hover:bg-[#00226B] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    إرسال رسالة جديدة
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        placeholder="0600000000"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        الموضوع <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass}
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="service">طلب خدمة إدارية</option>
                        <option value="complaint">شكاية أو تظلم</option>
                        <option value="suggestion">اقتراح</option>
                        <option value="info">طلب معلومات</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      className="w-4 h-4 accent-[#0038A8]"
                    />
                    <label htmlFor="agree" className="text-sm text-slate-600">
                      أوافق على معالجة بياناتي الشخصية وفق سياسة الخصوصية
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0038A8] hover:bg-[#00226B] text-white font-bold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    إرسال الرسالة
                    <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                  </button>
                </form>
              )}
            </section>

            {/* Map card */}
            <section className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-56 flex items-center justify-center bg-gradient-to-br from-[#EBF2FF] to-[#DBEAFE]">
                <div className="text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white text-[#0038A8] shadow-sm flex items-center justify-center">
                    <MapPin className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="font-bold text-[#00226B]">
                    موقع الجماعة الترابية أربعاء الساحل
                  </div>
                  <div className="text-sm text-slate-600 mt-1">إقليم تيزنيت، جهة سوس ماسة</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Commune+Arbaa+Sahel+Tiznit+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 bg-[#0038A8] hover:bg-[#00226B] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    فتح في خرائط Google
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}