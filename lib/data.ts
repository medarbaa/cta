// ===== بيانات الجماعة الترابية أربعاء الساحل (إقليم تيزنيت - جهة سوس ماسة) =====

export const communeInfo = {
  name: "الجماعة الترابية أربعاء الساحل",
  nameTifinagh: "ⵜⴰⴳⵔⴰⵡⵜ ⵜⴰⴷⵖⵔⴰⵏⵜ ⵏ ⴰⵔⴱⵄⴰ ⵏ ⵓⵙⴰⵃⵍ",
  nameFr: "Commune territoriale ARBAA SAHEL",
  motto: "ولتكن منكم أمة يدعون إلى الخير",
  president: "السيد إبراهيم بوخالد",
  province: "إقليم تيزنيت",
  region: "جهة سوس ماسة",
  population: "+8000",
  households: "2,650",
  area: "345",
  douwars: +80,
  councilMembers: 18,
  phone: "0528-86-XX-XX",
  fax: "0528-86-XX-XX",
  email: "ctarbaasahel@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=100081016219910",
  address: "مقر الجماعة الترابية أربعاء الساحل، دائرة تيزنيت، إقليم تيزنيت",
  postalCode: "85000",
  latitude: 29.6103315,
  longitude: -9.8873661,
  logo: process.env.NODE_ENV === "production" ? "/cta/logo.jpg" : "/logo.jpg",
};

export const news = [
  {
    id: 1,
    title: "خبر تجريبي رقم 1: عنوان نموذجي لنشاط المجلس الجماعي",
    date: "2026-10-14",
    category: "جلسات المجلس",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
  {
    id: 2,
    title: "خبر تجريبي رقم 2: عنوان نموذجي لمشروع في البنية التحتية",
    date: "2026-10-06",
    category: "مشاريع البنية التحتية",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
  {
    id: 3,
    title: "خبر تجريبي رقم 3: عنوان نموذجي لمشروع في الماء والتطهير",
    date: "2026-09-28",
    category: "الماء والتطهير",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
  {
    id: 4,
    title: "خبر تجريبي رقم 4: عنوان نموذجي لنشاط بيئي",
    date: "2026-09-18",
    category: "البيئة والشواطئ",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
  {
    id: 5,
    title: "خبر تجريبي رقم 5: عنوان نموذجي لنشاط تجاري",
    date: "2026-09-03",
    category: "التجارة والتنمية",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
  {
    id: 6,
    title: "خبر تجريبي رقم 6: عنوان نموذجي لاتفاقية شراكة",
    date: "2026-08-22",
    category: "الصيد البحري",
    excerpt:
      "هذا نص تجريبي يُستعمل لعرض شكل الخبر في الموقع، وسيتم استبداله بمحتوى حقيقي عند نشر الأخبار الرسمية للجماعة.",
    image: null,
  },
];

export const projects = [
  {
    id: 1,
    title: "مشروع تجريبي رقم 1",
    description: "وصف تجريبي للمشروع يُستبدل لاحقاً بالمعطيات الحقيقية.",
    budget: "مبلغ تجريبي",
    status: "جاري الإنجاز",
    progress: 75,
    category: "ماء وصرف صحي",
  },
  {
    id: 2,
    title: "مشروع تجريبي رقم 2",
    description: "وصف تجريبي للمشروع يُستبدل لاحقاً بالمعطيات الحقيقية.",
    budget: "مبلغ تجريبي",
    status: "جاري الإنجاز",
    progress: 55,
    category: "طرق وبنية تحتية",
  },
  {
    id: 3,
    title: "مشروع تجريبي رقم 3",
    description: "وصف تجريبي للمشروع يُستبدل لاحقاً بالمعطيات الحقيقية.",
    budget: "مبلغ تجريبي",
    status: "منجز",
    progress: 100,
    category: "تجارة واقتصاد محلي",
  },
  {
    id: 4,
    title: "مشروع تجريبي رقم 4",
    description: "وصف تجريبي للمشروع يُستبدل لاحقاً بالمعطيات الحقيقية.",
    budget: "مبلغ تجريبي",
    status: "جاري الإنجاز",
    progress: 85,
    category: "طاقة وبيئة",
  },
];

export const services = [
  {
    id: 1,
    title: "النظافة والبيئة والشواطئ",
    description: "تدبير النفايات، حماية المحيط الأطلسي والمحافظة على النظافة العامة",
    icon: "leaf",
    href: "/services/environment",
  },
  {
    id: 2,
    title: "التعمير والبناء القروي",
    description: "رخص البناء الفردي، تسوية الوضعيات العقارية والشواهد الإدارية",
    icon: "building",
    href: "/services/urbanisme",
  },
  {
    id: 3,
    title: "المساطر الإدارية والحالة المدنية",
    description: "شواهد السكنى، عقود الازدياد، تصحيح الإمضاء ومطابقة النسخ",
    icon: "document",
    href: "/services/procedures",
  },
  {
    id: 4,
    title: "الخدمات الرقمية والإلكترونية",
    description: "بوابة وثيقة للحالة المدنية، البوابة الوطنية للشكايات ومكاتب الضبط الرقمية",
    icon: "computer",
    href: "/services/e-services",
  },
  {
    id: 5,
    title: "الفلاحة والصيد التقليدي",
    description: "دعم التعاونيات الفلاحية ونقط الصيد التقليدي بالواجهة البحرية",
    icon: "water",
    href: "/services",
  },
  {
    id: 6,
    title: "دليل الخدمات والمساطر",
    description: "الدليل الشامل للوثائق والآجال والرسوم المعتمدة بالجماعة",
    icon: "book",
    href: "/services/guide",
  },
];

export const councilMembers = [
  {
    id: 1,
    name: "السيد إبراهيم بوخالد",
    role: "رئيس المجلس الجماعي",
    party: "أغلبية المجلس",
    commission: "رئاسة المجلس",
    phone: "",
  },
  {
    id: 2,
    name: "السيد النائب الأول للرئيس",
    role: "النائب الأول",
    party: "المكتب المسير",
    commission: "التنمية القروية والتجهيز",
    phone: "",
  },
  {
    id: 3,
    name: "السيدة النائبة الثانية للرئيس",
    role: "النائبة الثانية",
    party: "المكتب المسير",
    commission: "الشؤون الاجتماعية والثقافية ومقاربة النوع",
    phone: "",
  },
  {
    id: 4,
    name: "السيد النائب الثالث للرئيس",
    role: "النائب الثالث",
    party: "المكتب المسير",
    commission: "الميزانية والمالية والبرمجة",
    phone: "",
  },
  {
    id: 5,
    name: "السيد كاتب المجلس",
    role: "كاتب المجلس الجماعي",
    party: "أعضاء المجلس",
    commission: "كتابة الجلسات وتدوين المحاضر",
    phone: "",
  },
  {
    id: 6,
    name: "السيدة نائبة كاتب المجلس",
    role: "نائبة كاتب المجلس",
    party: "أعضاء المجلس",
    commission: "مساعدة كتابة المجلس",
    phone: "",
  },
  {
    id: 7,
    name: "رئيس لجنة الميزانية والشؤون المالية",
    role: "رئيس لجنة دائمة",
    party: "لجنة الميزانية والبرمجة",
    commission: "التدبير المالي والمحاسباتي",
    phone: "",
  },
  {
    id: 8,
    name: "رئيس لجنة المرافق العمومية والخدمات",
    role: "رئيس لجنة دائمة",
    party: "لجنة المرافق العمومية",
    commission: "المسالك والماء والكهرباء والمرافق",
    phone: "",
  },
];

export const commissions = [
  {
    id: 1,
    name: "لجنة الميزانية والشؤون المالية والبرمجة",
    president: "رئيس لجنة الميزانية",
    members: 5,
    description: "دراسة مشروع الميزانية السنوية، تدبير الموارد والمداخيل، وبرمجة الفوائض المالية وتتبع الحسابات الإدارية.",
  },
  {
    id: 2,
    name: "لجنة المرافق العمومية والخدمات والتجهيز وإعداد التراب",
    president: "رئيس لجنة المرافق والتجهيز",
    members: 5,
    description: "تتبع مشاريع المسالك القروية، تزويد الدواوير بالماء الصالح للشرب، صيانة الإنارة العمومية، وتدبير السوق الأسبوعي.",
  },
  {
    id: 3,
    name: "لجنة التنمية البشرية والشؤون الاجتماعية والثقافية والرياضية",
    president: "رئيسة لجنة التنمية الاجتماعية",
    members: 4,
    description: "العناية بقضايا التعليم، النقل المدرسي، الصحة، الجمعيات المحلية والتعاونيات، ودعم الأنشطة الرياضية والشبابية.",
  },
  {
    id: 4,
    name: "هيئة المساواة وتكافؤ الفرص ومقاربة النوع",
    president: "منسق الهيئة الاستشارية",
    members: 12,
    description: "هيئة استشارية تضم ممثلي المجتمع المدني والفاعلين المحليين لإبداء الرأي في المخططات التنموية للجماعة.",
  },
];

export const announcements = [
  {
    id: 1,
    title: "إعلان تجريبي رقم 1: نموذج لطلب عروض",
    date: "2026-10-18",
    type: "صفقات عمومية",
    deadline: "2026-11-12",
    reference: "مرجع-تجريبي-1",
  },
  {
    id: 2,
    title: "إعلان تجريبي رقم 2: نموذج لبلاغ إخباري للعموم",
    date: "2026-10-04",
    type: "إشعارات",
    deadline: null,
    reference: null,
  },
  {
    id: 3,
    title: "إعلان تجريبي رقم 3: نموذج لإعلان موجه للجمعيات",
    date: "2026-09-20",
    type: "إعلانات",
    deadline: "2026-10-30",
    reference: "مرجع-تجريبي-3",
  },
  {
    id: 4,
    title: "إعلان تجريبي رقم 4: نموذج لطلب عروض أثمان",
    date: "2026-09-12",
    type: "صفقات عمومية",
    deadline: "2026-10-08",
    reference: "مرجع-تجريبي-4",
  },
];

export const stats = [
  { label: "عدد السكان (إحصاء 2026)", value: "+8000", unit: "نسمة", icon: "users" },
  { label: "المساحة الإجمالية", value: "+300", unit: "كم²", icon: "map" },
  { label: "عدد الدواوير القروية", value: "+90", unit: "دواراً", icon: "home" },
  { label: "عدد الأسر", value: "+2000", unit: "أسرة", icon: "family" },
];

export const navItems = [
  {
    label: "الجماعة",
    href: "/jamaa",
    children: [
      { label: "الرئيس", href: "/jamaa/president" },
      { label: "المكتب", href: "/jamaa/bureau" },
      { label: "مجلس الجماعة", href: "/jamaa/council" },
      { label: "اللجان", href: "/jamaa/commissions" },
      { label: "برنامج عمل الجماعة", href: "/jamaa/action-plan" },
      { label: "الميزانية", href: "/jamaa/budget" },
      { label: "الهيكل الإداري", href: "/jamaa/structure" },
      { label: "الصفقات العمومية", href: "/jamaa/marches" },
      { label: "التعاون والاتفاقيات", href: "/jamaa/cooperation" },
    ],
  },
  {
    label: "خدمات المواطن",
    href: "/services",
    children: [
      { label: "النظافة والبيئة", href: "/services/environment" },
      { label: "التعمير والبناء", href: "/services/urbanisme" },
      { label: "المساطر الإدارية", href: "/services/procedures" },
      { label: "الخدمات الإلكترونية", href: "/services/e-services" },
      { label: "دليل الخدمات", href: "/services/guide" },
    ],
  },
  {
    label: "مدينتي ومجالي",
    href: "/madina",
    children: [
      { label: "بانوراما وجغرافيا", href: "/madina/panorama" },
      { label: "نبذة تاريخية", href: "/madina/history" },
      { label: "التراث والمؤهلات", href: "/madina/heritage" },
    ],
  },
  {
    label: "الإعلام والتواصل",
    href: "/media",
    children: [
      { label: "صور وفيديو", href: "/media/gallery" },
      { label: "الإعلانات والإشعارات", href: "/media/announcements" },
    ],
  },
  {
    label: "اتصل بنا",
    href: "/contact",
    children: [],
  },
];
