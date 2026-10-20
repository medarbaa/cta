import ComingSoon from "@/components/ComingSoon";

export default function CouncilPage() {
  return (
    <ComingSoon
      title="مجلس الجماعة"
      breadcrumb={[{ label: "الجماعة", href: "/jamaa" }]}
      backHref="/jamaa"
      backLabel="الرجوع إلى قسم الجماعة"
    />
  );
}