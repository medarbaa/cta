"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { communeInfo } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ direction: "rtl" }}>
      <PageHeader title="اتصل بنا" subtitle="تواصل مع جماعة اربعاء الساحل" />
      <Breadcrumb items={[{ label: "اتصل بنا" }]} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-green-800 text-lg mb-4">معلومات الاتصال</h2>
              <ul className="space-y-4">
                {[
                  { icon: "📍", label: "العنوان", value: `${communeInfo.address}، ${communeInfo.postalCode}` },
                  { icon: "📞", label: "الهاتف", value: communeInfo.phone },
                  { icon: "📠", label: "الفاكس", value: communeInfo.fax },
                  { icon: "✉️", label: "البريد الإلكتروني", value: communeInfo.email },
                ].map((c) => (
                  <li key={c.label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: "#e8f5e9" }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{c.label}</div>
                      <div className="text-sm font-medium text-gray-800">{c.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-3">⏰ ساعات العمل</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-50">
                  {[
                    { day: "الإثنين — الجمعة", hours: "8:30 — 16:30" },
                    { day: "الجمعة", hours: "8:30 — 12:00" },
                    { day: "السبت — الأحد", hours: "مغلق" },
                  ].map((row) => (
                    <tr key={row.day}>
                      <td className="py-2 text-gray-600">{row.day}</td>
                      <td className="py-2 text-left font-medium text-green-800" dir="ltr">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Emergency */}
            <div className="rounded-xl p-4 text-white" style={{ backgroundColor: "#C1272D" }}>
              <h3 className="font-bold mb-1">🚨 الطوارئ</h3>
              <p className="text-red-100 text-xs mb-2">للحالات الطارئة على مدار الساعة</p>
              <div className="text-xl font-bold" dir="ltr">15 / 19</div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-bold text-green-800 text-xl mb-6">أرسل رسالتك</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-bold text-green-800 text-xl mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    شكراً لتواصلك معنا. سيتم الرد على استفسارك في أقرب وقت ممكن.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-white font-medium px-6 py-2 rounded-lg"
                    style={{ backgroundColor: "#006233" }}
                  >
                    إرسال رسالة جديدة
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500"
                        placeholder="0600000000"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        الموضوع <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500"
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="service">طلب خدمة إدارية</option>
                        <option value="complaint">شكوى أو تظلم</option>
                        <option value="suggestion">اقتراح</option>
                        <option value="info">طلب معلومات</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="agree" required className="w-4 h-4 accent-green-700" />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      أوافق على معالجة بياناتي الشخصية وفق سياسة الخصوصية
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
                    style={{ backgroundColor: "#006233" }}
                  >
                    إرسال الرسالة ←
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div
                className="h-56 flex items-center justify-center relative"
                style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)" }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-3">🗺️</div>
                  <div className="font-bold text-green-800">موقع جماعة اربعاء الساحل</div>
                  <div className="text-sm text-gray-600 mt-1">إقليم القنيطرة، المغرب</div>
                  <a
                    href={`https://www.google.com/maps/search/Arbaa+Sahel+Kenitra+Morocco`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-white text-xs font-medium px-4 py-1.5 rounded-full"
                    style={{ backgroundColor: "#006233" }}
                  >
                    فتح في خرائط Google ←
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
