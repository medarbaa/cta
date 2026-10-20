interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

export default function PageHeader({ title, subtitle, bgColor = "#00226B" }: PageHeaderProps) {
  return (
    <div
      className="py-10 px-4 text-white relative overflow-hidden border-b-4 border-[#FFDE00]"
      style={{ backgroundColor: bgColor, direction: "rtl" }}
    >
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="souss-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="white" strokeWidth="1" />
              <polygon points="20,10 30,20 20,30 10,20" fill="none" stroke="#FFDE00" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#souss-pattern)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-block bg-[#0038A8] text-[#FFDE00] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-blue-400/30">
          الجماعة الترابية أربعاء الساحل — إقليم تيزنيت
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">{title}</h1>
        {subtitle && <p className="text-blue-100 text-sm mt-1">{subtitle}</p>}
        {/* Yellow-Blue accent line */}
        <div className="mt-3 flex gap-2">
          <div className="h-1.5 w-14 rounded bg-[#FFDE00]"></div>
          <div className="h-1.5 w-7 rounded bg-white"></div>
          <div className="h-1.5 w-3 rounded bg-blue-300"></div>
        </div>
      </div>
    </div>
  );
}
