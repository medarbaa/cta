import ComingSoon from "@/components/ComingSoon";

export default function CouncilPage() {
  return (
    <ComingSoon
      title="مجلس الجماعة"
      breadcrumb={[{ label: "خدمات المواطن", href: "/services" }]}
      backHref="/services"
      backLabel="الرجوع إلى قسم خدمات المواطن"
    />
  );
}