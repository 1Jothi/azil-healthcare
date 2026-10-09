import { brandNames, productCategories, services } from "@/data/site-content.js";

export { brandNames, productCategories, services };

export const brand = {
  name: "AZIL HEALTHCARE",
  phone: "9786994312",
  alternatePhone: "9840616437",
  email: "azilhealthcare@gmail.com",
  address: "No.14, Old Thirukolakudi, Thirupathur, Sivaganga, Tamil Nadu - 630405",
  hours: "Monday - Saturday, 9:00 AM - 6:00 PM (Sunday Holiday)",
  emblem: "/images/azil-logo.png",
};

export const productCategories = [
  {
    title: "Operation Theatre Equipment",
    image: "/images/products/operation-theatre.jpg",
    items: ["OT Lights", "OT Tables", "Anesthesia Workstations", "Electrosurgical Units (ESU)", "Suction Units", "Tourniquet Systems", "OT Accessories"],
    icon: "✚",
  },
  {
    title: "ICU & Critical Care Equipment",
    image: "/images/products/icu-critical-care.jpg",
    items: ["Ventilators", "Patient Monitors", "Infusion Pumps", "Syringe Pumps", "Defibrillators", "BIPAP / CPAP", "High Flow Oxygen Therapy", "ICU Accessories"],
    icon: "♡",
  },
  {
    title: "Endoscopy Equipment",
    image: "/images/products/endoscopy.jpg",
    items: ["Rigid Bronchoscopy Sets", "Rigid Thoracoscopy Sets", "Laparoscopy Sets", "Endoscopy Camera Systems", "Video Processors", "Light Sources", "Endoscopy Accessories"],
    icon: "◎",
  },
  {
    title: "Patient Monitoring Equipment",
    image: "/images/products/patient-monitoring.jpg",
    items: ["Multipara Monitors", "ECG Machines", "Pulse Oximeters", "NIBP Monitors", "Fetal Monitors", "Capnography (EtCO₂)", "Central Monitoring Systems", "Monitoring Accessories"],
    icon: "▣",
  },
  {
    title: "Hospital Furniture",
    image: "/images/products/hospital-furniture.jpg",
    items: ["Hospital Beds (Manual / Electric)", "ICU Beds", "Bedside Trolleys", "Crash Carts", "Stainless Steel Furniture", "Over Bed Tables", "Ward Furniture & Accessories"],
    icon: "⌑",
  },
  {
    title: "Medical Consumables",
    image: "/images/products/medical-consumables.jpg",
    items: ["BP Bladders & Cuffs", "Suction Catheters", "IV Sets", "Surgical Gloves", "Surgical Masks", "Wound Care Products", "Biomedical Waste Bins", "Other Hospital Consumables"],
    icon: "✣",
  },
  {
    title: "Medical Gas & ICU Infrastructure",
    image: "/images/products/medical-gas.jpg",
    items: ["Medical Gas Manifold Systems", "Bed Head Panels", "Oxygen Points", "Vacuum & Air Systems", "Pipeline Accessories", "Installation Support"],
    icon: "♧",
  },
  {
    title: "Other Medical Equipment",
    image: "/images/products/other-equipment.jpg",
    items: ["Autoclaves", "Suction Units", "Nebulizers", "UV Sterilizers", "Examination Lights", "Weighing Scales", "Biomedical Waste Management", "Other Hospital Equipment"],
    icon: "▤",
  },
];

export const images = {
  home: "/images/home/hero-ot.jpg",
  about: "/images/about-hero.jpg",
  contact: "/images/contact-agent.jpg",
  services: "/images/services/repair.jpg",
  commitment: "/images/doctor-shield.jpg",
  map: "/images/map.png",
  office: "/images/office-front.jpg",
};