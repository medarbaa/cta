import ComingSoon from "@/components/ComingSoon";

export default function CouncilPage() {
  return (
    <ComingSoon
      title="مجلس الجماعة"
      breadcrumb={[{ label: "الإعلام والتواصل", href: "/media" }]}
      backHref="/media"
      backLabel="الرجوع إلى قسم الإعلام والتواصل"
    />
  );
}