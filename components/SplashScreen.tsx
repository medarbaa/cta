"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "splash_seen";
const DURATION = 3000;
const BASE = process.env.NODE_ENV === "production" ? "/cta" : "";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {}

    if (seen) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setLeaving(true), DURATION);
    const endTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {}
    }, DURATION + 700);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(endTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash ${leaving ? "splash--leave" : ""}`} aria-hidden="true">
      <div className="splash__glow" />
      <div className="splash__content">
        <div className="splash__logo-wrap">
          <div className="splash__ring" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/logo2.png`}
            alt="شعار الجماعة الترابية أربعاء الساحل"
            width={170}
            height={170}
            className="splash__logo"
          />
        </div>

        <div className="splash__titles">
          <h1 className="splash__title">الجماعة الترابية أربعاء الساحل</h1>
          <p className="splash__subtitle">إقليم تيزنيت • المملكة المغربية</p>
        </div>

        <div className="splash__bar">
          <span style={{ animationDuration: `${DURATION}ms` }} />
        </div>
      </div>
    </div>
  );
}