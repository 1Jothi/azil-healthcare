import aboutCommitment from "@/assets/about-commitment.jpg.asset.json";
import categoryConsumables from "@/assets/category-consumables.jpg.asset.json";
import categoryEndoscopy from "@/assets/category-endoscopy.jpg.asset.json";
import categoryFurniture from "@/assets/category-furniture.jpg.asset.json";
import categoryGas from "@/assets/category-gas.jpg.asset.json";
import categoryIcu from "@/assets/category-icu.jpg.asset.json";
import categoryMonitor from "@/assets/category-monitor.jpg.asset.json";
import categoryOt from "@/assets/category-ot.jpg.asset.json";
import categoryOther from "@/assets/category-other.jpg.asset.json";
import contactMap from "@/assets/contact-map.jpg.asset.json";
import contactOffice from "@/assets/contact-office.jpg.asset.json";
import heroAbout from "@/assets/hero-about.jpg.asset.json";
import heroContact from "@/assets/hero-contact.jpg.asset.json";
import heroHome from "@/assets/hero-home.jpg.asset.json";
import heroServices from "@/assets/hero-services.jpg.asset.json";
import serviceAmc from "@/assets/service-amc.jpg.asset.json";
import serviceCalibration from "@/assets/service-calibration.jpg.asset.json";
import serviceInstall from "@/assets/service-install.jpg.asset.json";
import serviceRepair from "@/assets/service-repair.jpg.asset.json";
import serviceSpares from "@/assets/service-spares.jpg.asset.json";
import serviceTraining from "@/assets/service-training.jpg.asset.json";

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
    image: categoryOt.url,
    items: ["OT Lights", "OT Tables", "Anesthesia Workstations", "Electrosurgical Units (ESU)", "Suction Units", "Tourniquet Systems", "OT Accessories"],
    icon: "✚",
  },
  {
    title: "ICU & Critical Care Equipment",
    image: categoryIcu.url,
    items: ["Ventilators", "Patient Monitors", "Infusion Pumps", "Syringe Pumps", "Defibrillators", "BIPAP / CPAP", "High Flow Oxygen Therapy", "ICU Accessories"],
    icon: "♡",
  },
  {
    title: "Endoscopy Equipment",
    image: categoryEndoscopy.url,
    items: ["Rigid Bronchoscopy Sets", "Rigid Thoracoscopy Sets", "Laparoscopy Sets", "Endoscopy Camera Systems", "Video Processors", "Light Sources", "Endoscopy Accessories"],
    icon: "◎",
  },
  {
    title: "Patient Monitoring Equipment",
    image: categoryMonitor.url,
    items: ["Multipara Monitors", "ECG Machines", "Pulse Oximeters", "NIBP Monitors", "Fetal Monitors", "Capnography (EtCO₂)", "Central Monitoring Systems", "Monitoring Accessories"],
    icon: "▣",
  },
  {
    title: "Hospital Furniture",
    image: categoryFurniture.url,
    items: ["Hospital Beds (Manual / Electric)", "ICU Beds", "Bedside Trolleys", "Crash Carts", "Stainless Steel Furniture", "Over Bed Tables", "Ward Furniture & Accessories"],
    icon: "⌑",
  },
  {
    title: "Medical Consumables",
    image: categoryConsumables.url,
    items: ["BP Bladders & Cuffs", "Suction Catheters", "IV Sets", "Surgical Gloves", "Surgical Masks", "Wound Care Products", "Biomedical Waste Bins", "Other Hospital Consumables"],
    icon: "✣",
  },
  {
    title: "Medical Gas & ICU Infrastructure",
    image: categoryGas.url,
    items: ["Medical Gas Manifold Systems", "Bed Head Panels", "Oxygen Points", "Vacuum & Air Systems", "Pipeline Accessories", "Installation Support"],
    icon: "♧",
  },
  {
    title: "Other Medical Equipment",
    image: categoryOther.url,
    items: ["Autoclaves", "Suction Units", "Nebulizers", "UV Sterilizers", "Examination Lights", "Weighing Scales", "Biomedical Waste Management", "Other Hospital Equipment"],
    icon: "▤",
  },
];

export const brandNames = ["ST SURGICALS", "mindray", "Dräger", "BPL", "PHILIPS", "STERIS", "GETINGE", "RICHARD WOLF", "OLYMPUS"];

export const services = [
  { title: "Installation & Commissioning", text: "Professional installation and commissioning of medical equipment by trained engineers.", image: serviceInstall.url },
  { title: "Preventive Maintenance (AMC)", text: "Regular maintenance to ensure reliable and uninterrupted performance of your equipment.", image: serviceAmc.url },
  { title: "Repair & Servicing", text: "Quick and efficient repair services with genuine spares and professional support.", image: serviceRepair.url },
  { title: "Calibration & Testing", text: "Accurate calibration and performance testing as per manufacturer standards.", image: serviceCalibration.url },
  { title: "Spare Parts Support", text: "Supply of genuine and compatible spare parts for multiple brands.", image: serviceSpares.url },
  { title: "User Training", text: "On-site training for hospital staff to ensure safe and effective use of equipment.", image: serviceTraining.url },
];

export const images = {
  home: heroHome.url,
  about: "/images/about-hero.jpg",
  contact: "/images/contact-agent.jpg",
  services: heroServices.url,
  commitment: "/images/doctor-shield.jpg",
  map: "/images/map.png",
  office: "/images/office-front.jpg",
};