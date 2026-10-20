import ComingSoon from "@/components/ComingSoon";

export default function CouncilPage() {
  return (
    <ComingSoon
      title="مجلس الجماعة"
      breadcrumb={[{ label: "مدينتي", href: "/madina" }]}
      backHref="/madina"
      backLabel="الرجوع إلى قسم مدينتي"
    />
  );
}