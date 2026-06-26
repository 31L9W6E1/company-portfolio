import {
  Award,
  Building2,
  Factory,
  FileCheck2,
  Globe2,
  HardHat,
  Landmark,
  Network,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck
} from "lucide-react";

export type LocalizedText = {
  en: string;
  mn: string;
};

export type Project = {
  slug: string;
  title: LocalizedText;
  industry: string;
  year: number;
  size: "Strategic" | "Major" | "Enterprise";
  image: string;
  summary: LocalizedText;
  scope: LocalizedText[];
  outcomes: LocalizedText[];
  caseStudy: string;
};

export const company = {
  name: "ALPHA RIF BTA",
  email: "contact@alpharifbta.mn",
  phone: "+976 7711 2040",
  address: {
    en: "Ulaanbaatar, Mongolia",
    mn: "Улаанбаатар, Монгол"
  }
};

export const nav = [
  { href: "", label: { en: "Home", mn: "Нүүр" } },
  { href: "about", label: { en: "About", mn: "Бидний тухай" } },
  { href: "services", label: { en: "Services", mn: "Үйлчилгээ" } },
  { href: "capabilities", label: { en: "Capabilities", mn: "Чадавх" } },
  { href: "portfolio", label: { en: "Portfolio", mn: "Төслүүд" } },
  { href: "clients", label: { en: "Clients", mn: "Харилцагчид" } },
  { href: "certifications", label: { en: "Certifications", mn: "Нийцэл" } },
  { href: "news", label: { en: "News", mn: "Мэдээ" } },
  { href: "contact", label: { en: "Contact", mn: "Холбоо барих" } }
];

export const hero = {
  eyebrow: { en: "Procurement • Contracting • Project Delivery", mn: "Худалдан авалт • Гэрээлэлт • Төслийн хэрэгжилт" },
  title: {
    en: "A national partner for tenders, procurement, supply, and project delivery.",
    mn: "Тендер, худалдан авалт, ханган нийлүүлэлт, төслийн хэрэгжилтийн үндэсний түнш."
  },
  body: {
    en: "Founded in 2025, ALPHA RIF BTA LLC provides public and private-sector procurement, tender participation, supply, contract services, and project delivery solutions for mining, construction, infrastructure, energy, and industrial organizations.",
    mn: "2025 онд байгуулагдсан АЛЬФА РИФ БТА ХХК нь төрийн болон хувийн хэвшлийн худалдан авах ажиллагаа, тендер шалгаруулалт, ханган нийлүүлэлт, гэрээт ажил үйлчилгээ, төслийн хэрэгжилтийн чиглэлээр үйл ажиллагаа явуулдаг үндэсний компани юм."
  }
};

export const stats = [
  { value: 2025, suffix: "", label: { en: "Founded as a national company", mn: "Үүсгэн байгуулагдсан он" } },
  { value: 6, suffix: "", label: { en: "Priority sectors covered", mn: "Хамардаг үндсэн салбар" } },
  { value: 5, suffix: "", label: { en: "Core service areas", mn: "Үйлчилгээний үндсэн чиглэл" } },
  { value: 4, suffix: "", label: { en: "Professional disciplines", mn: "Мэргэжлийн багийн чиглэл" } }
];

export const capabilities = [
  {
    icon: FileCheck2,
    title: { en: "Tender & Procurement Advisory", mn: "Тендер, худалдан авах ажиллагаа" },
    body: { en: "Tender participation, procurement documentation, bid package preparation, and contract implementation controls.", mn: "Тендер шалгаруулалтад оролцох бэлтгэл, худалдан авах ажиллагааны баримт бичиг боловсруулах, материал бүрдүүлэх, гэрээний хэрэгжилтийг хянах ажлыг зохион байгуулна." }
  },
  {
    icon: PackageCheck,
    title: { en: "Supply & Equipment Sourcing", mn: "Ханган нийлүүлэлт" },
    body: { en: "Construction materials, industrial and mining equipment, technical purchasing, logistics, and transport coordination.", mn: "Барилгын материал, үйлдвэрлэл болон уурхайн тоног төхөөрөмж, техник хэрэгслийн худалдан авалт, логистик, тээвэрлэлтийг уялдуулан зохицуулна." }
  },
  {
    icon: Network,
    title: { en: "Construction & Infrastructure Support", mn: "Барилга, дэд бүтцийн ажил" },
    body: { en: "Civil and industrial construction support, site works, engineering networks, and infrastructure project delivery.", mn: "Иргэний болон үйлдвэрлэлийн барилга байгууламж, зам талбайн ажил, инженерийн шугам сүлжээ, дэд бүтцийн төслийн хэрэгжилтэд дэмжлэг үзүүлнэ." }
  },
  {
    icon: HardHat,
    title: { en: "Project & Business Consulting", mn: "Төслийн удирдлага, зөвлөх үйлчилгээ" },
    body: { en: "Project planning, contract management, risk assessment, quality control, and business development advisory.", mn: "Төслийн төлөвлөлт, гэрээний удирдлага, эрсдэлийн үнэлгээ, чанарын хяналт, бизнес хөгжлийн чиглэлээр зөвлөх үйлчилгээ үзүүлнэ." }
  }
];

export const industries = [
  { icon: Landmark, title: { en: "Government Procurement", mn: "Төрийн худалдан авалт" } },
  { icon: Factory, title: { en: "Mining", mn: "Уул уурхай" } },
  { icon: Building2, title: { en: "Infrastructure", mn: "Дэд бүтэц" } },
  { icon: HardHat, title: { en: "Construction", mn: "Барилга" } },
  { icon: Globe2, title: { en: "Energy", mn: "Эрчим хүч" } },
  { icon: Truck, title: { en: "Logistics", mn: "Логистик" } },
  { icon: Ship, title: { en: "Industrial Supply", mn: "Үйлдвэрийн ханган нийлүүлэлт" } }
];

export const projects: Project[] = [
  {
    slug: "mining-supply-framework",
    title: { en: "Mining Supply Framework", mn: "Уул уурхайн ханган нийлүүлэлтийн зохион байгуулалт" },
    industry: "Mining",
    year: 2025,
    size: "Major",
    image: "/assets/project-mining.png",
    summary: {
      en: "Multi-vendor procurement framework for equipment, consumables, and delivery documentation across remote mining operations.",
      mn: "Алслагдсан уурхайн тоног төхөөрөмж, сэлбэг хэрэгсэл, хэрэглэгдэхүүн болон тээвэрлэлтийн баримт бичгийг хамарсан олон бэлтгэн нийлүүлэгчтэй худалдан авалтын ажил."
    },
    scope: [
      { en: "Supplier qualification and RFQ governance", mn: "Бэлтгэн нийлүүлэгчийн шалгуур, үнийн саналын зохион байгуулалт" },
      { en: "Technical comparison and commercial negotiation", mn: "Техникийн харьцуулалт, арилжааны нөхцөлийн хэлэлцээр" },
      { en: "Delivery schedule and acceptance documentation", mn: "Нийлүүлэлтийн хуваарь, хүлээн авалтын баримт бичиг" }
    ],
    outcomes: [
      { en: "Reduced procurement cycle variability", mn: "Худалдан авалтын явцыг илүү тогтвортой, хяналттай болгосон" },
      { en: "Standardized vendor documentation packs", mn: "Бэлтгэн нийлүүлэгчийн баримт бичгийн багцыг нэг стандарттай болгосон" }
    ],
    caseStudy: "/case-studies/mining-supply-framework.pdf"
  },
  {
    slug: "public-infrastructure-tender",
    title: { en: "Public Infrastructure Tender Support", mn: "Нийтийн дэд бүтцийн тендерийн материал" },
    industry: "Infrastructure",
    year: 2024,
    size: "Strategic",
    image: "/assets/project-infrastructure.png",
    summary: {
      en: "Tender readiness, compliance matrix, and submission controls for a public infrastructure development package.",
      mn: "Нийтийн дэд бүтцийн төслийн тендерт оролцох бэлтгэл, шаардлагын нийцэл, баримт бичгийн хяналтыг цэгцтэй зохион байгуулсан."
    },
    scope: [
      { en: "Eligibility and document gap review", mn: "Шалгуур шаардлага, дутуу баримтын хяналт" },
      { en: "Bid calendar and clarification log", mn: "Тендерийн хугацааны төлөвлөгөө, тодруулгын бүртгэл" },
      { en: "Final response quality assurance", mn: "Эцсийн материалын чанарын хяналт" }
    ],
    outcomes: [
      { en: "Evaluator-ready submission structure", mn: "Үнэлгээний хороонд ойлгомжтой материалын бүтэц бүрдсэн" },
      { en: "Clear audit trail for all tender documents", mn: "Тендерийн баримт бүрд хяналтын мөр үүссэн" }
    ],
    caseStudy: "/case-studies/public-infrastructure-tender.pdf"
  },
  {
    slug: "industrial-logistics-program",
    title: { en: "Industrial Logistics Program", mn: "Үйлдвэрийн логистикийн зохицуулалт" },
    industry: "Logistics",
    year: 2023,
    size: "Enterprise",
    image: "/assets/project-logistics.png",
    summary: {
      en: "Coordinated delivery planning and vendor controls for imported industrial materials and site-critical supplies.",
      mn: "Импортын үйлдвэрийн материал, талбайн зайлшгүй шаардлагатай хангамжийн нийлүүлэлт, тээвэрлэлт, баримт бичгийн уялдааг зохион байгуулсан."
    },
    scope: [
      { en: "Import documentation coordination", mn: "Импортын баримт бичгийн зохицуулалт" },
      { en: "Route planning and milestone tracking", mn: "Тээврийн маршрут, үе шатны явцын хяналт" },
      { en: "Issue register and closeout reporting", mn: "Асуудлын бүртгэл, хаалтын тайлан" }
    ],
    outcomes: [
      { en: "Improved delivery visibility for stakeholders", mn: "Оролцогч талууд нийлүүлэлтийн явцыг нэгтгэсэн мэдээллээр хянах боломжтой болсон" },
      { en: "Centralized logistics evidence archive", mn: "Логистикийн нотлох баримтыг нэг дор төвлөрүүлсэн" }
    ],
    caseStudy: "/case-studies/industrial-logistics-program.pdf"
  }
];

export const clients = ["Erdenes", "Oyu Partner", "City Works", "Nomad Build", "Steppe Energy", "Khan Supply"];

export const certifications = [
  { icon: ShieldCheck, title: { en: "Compliance Management", mn: "Нийцлийн хяналт" }, body: { en: "Documented procurement controls and approval trails.", mn: "Худалдан авалтын шийдвэр, зөвшөөрөл, баталгаажуулалтыг баримтжуулж, хяналтын мөрийг тодорхой хадгална." } },
  { icon: Award, title: { en: "Quality Assurance", mn: "Чанарын хяналт" }, body: { en: "Structured review gates for tender and delivery documents.", mn: "Тендер болон хэрэгжилтийн баримт бичгийг шат дараалсан хяналтаар нягтална." } },
  { icon: FileCheck2, title: { en: "HSE Documentation", mn: "ХАБЭА-н баримт бичиг" }, body: { en: "Site readiness, supplier safety records, and closeout evidence.", mn: "Талбайн бэлэн байдал, бэлтгэн нийлүүлэгчийн аюулгүй ажиллагааны бүртгэл, хаалтын нотолгоог бүрдүүлнэ." } }
];

export const testimonials = [
  {
    quote: {
      en: "ALPHA RIF BTA brings the discipline procurement committees expect: complete files, clear accountability, and calm delivery under pressure.",
      mn: "ALPHA RIF BTA нь худалдан авах ажиллагаанд шаардагдах баримт бичгийг бүрэн бүрдүүлж, хариуцлагатай ажиллан, гэрээний хэрэгжилтийг хугацаанд нь хяналттай явуулахад анхаардаг."
    },
    author: { en: "Procurement Director, Infrastructure Program", mn: "Дэд бүтцийн хөтөлбөрийн худалдан авалтын захирал" }
  }
];

export const process = [
  { en: "Opportunity screening", mn: "Боломжит тендерийн судалгаа" },
  { en: "Eligibility and risk review", mn: "Шалгуур шаардлага, эрсдэлийн үнэлгээ" },
  { en: "Partner and supplier alignment", mn: "Түнш, бэлтгэн нийлүүлэгчийн уялдаа" },
  { en: "Bid document production", mn: "Тендерийн материал бүрдүүлэлт" },
  { en: "Submission and clarification control", mn: "Материал илгээх, тодруулгын хяналт" },
  { en: "Award, contracting, and delivery", mn: "Шалгаралт, гэрээ байгуулах, хэрэгжүүлэх" }
];

export const news = [
  {
    title: { en: "Building evaluator-ready tender submissions", mn: "Үнэлгээний шаардлагад нийцсэн тендерийн материал бүрдүүлэх нь" },
    date: "2026-03-18",
    excerpt: { en: "A practical view of evidence, compliance matrices, and document governance for public and enterprise tenders.", mn: "Төрийн болон байгууллагын тендерт шаардлагын нийцэл, нотлох баримт, баримт бичгийн хяналтыг хэрхэн цэгцлэх тухай." }
  },
  {
    title: { en: "Supplier qualification for remote mining projects", mn: "Алслагдсан уурхайн төслийн бэлтгэн нийлүүлэгчийн шалгуур" },
    date: "2026-02-07",
    excerpt: { en: "How procurement teams can reduce delivery risk before award through stronger vendor controls.", mn: "Гэрээ байгуулахаас өмнө бэлтгэн нийлүүлэгчийн чадавх, хугацаа, баримт бичгийг нягталснаар нийлүүлэлтийн эрсдэлийг бууруулна." }
  },
  {
    title: { en: "Contract closeout as a trust signal", mn: "Гэрээний хаалт итгэлцлийн үндэс болох нь" },
    date: "2025-12-11",
    excerpt: { en: "Why acceptance packs, change registers, and closeout reports matter to repeat procurement relationships.", mn: "Хүлээн авалтын баримт, өөрчлөлтийн бүртгэл, хаалтын тайлан нь дараагийн хамтын ажиллагаанд итгэлцэл бий болгодог." }
  }
];
