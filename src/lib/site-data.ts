import homeHero from "../assets/azil-images/images/home/hero-ot.jpg";
import aboutPhoto from "../assets/azil-images/images/home/hospital-building.jpg";
import logo from "../assets/azil-images/images/logo/azil-logo.png";
import aboutHero from "../assets/azil-images/images/about/about-hero.jpg";
import aboutCommitment from "../assets/azil-images/images/about/doctor-shield.jpg";
import contactHero from "../assets/azil-images/images/contact/contact-agent.jpg";
import contactMap from "../assets/azil-images/images/contact/map.png";
import contactOffice from "../assets/azil-images/images/contact/office-front.jpg";
import homeOt from "../assets/azil-images/images/home/cat-ot-theatre.jpg";
import homeIcu from "../assets/azil-images/images/home/cat-icu.jpg";
import homeEndoscopy from "../assets/azil-images/images/home/cat-endoscopy.jpg";
import homeMonitoring from "../assets/azil-images/images/home/cat-patient-monitor.jpg";
import homeFurniture from "../assets/azil-images/images/home/cat-hospital-furniture.jpg";
import homeConsumables from "../assets/azil-images/images/home/cat-consumables.jpg";
import productOt from "../assets/azil-images/images/products/ot-equipment.jpg";
import productIcu from "../assets/azil-images/images/products/icu.jpg";
import productEndoscopy from "../assets/azil-images/images/products/endoscopy.jpg";
import productMonitoring from "../assets/azil-images/images/products/patient-monitoring.jpg";
import productFurniture from "../assets/azil-images/images/products/hospital-furniture.jpg";
import productConsumables from "../assets/azil-images/images/products/consumables.jpg";
import productMedicalGas from "../assets/azil-images/images/products/medical-gas.jpg";
import productOther from "../assets/azil-images/images/products/other-equipment.jpg";
import serviceHero from "../assets/azil-images/images/services/services-hero.jpg";
import serviceInstall from "../assets/azil-images/images/services/installation.jpg";
import serviceMaintenance from "../assets/azil-images/images/services/amc-maintenance.jpg";
import serviceRepair from "../assets/azil-images/images/services/repair.jpg";
import serviceCalibration from "../assets/azil-images/images/services/calibration.jpg";
import serviceParts from "../assets/azil-images/images/services/spare-parts.jpg";
import serviceTraining from "../assets/azil-images/images/services/user-training.jpg";
import serviceSupport from "../assets/azil-images/images/services/multibrand-ot.jpg";
import brandStSurgicals from "../assets/azil-images/images/brands/st-surgicals.png";
import brandMindray from "../assets/azil-images/images/brands/mindray.png";
import brandDrager from "../assets/azil-images/images/brands/drager.png";
import brandBpl from "../assets/azil-images/images/brands/bpl.png";
import brandPhilips from "../assets/azil-images/images/brands/philips.png";
import brandSteris from "../assets/azil-images/images/brands/steris.png";
import brandGetinge from "../assets/azil-images/images/brands/getinge.png";
import brandRichardWolf from "../assets/azil-images/images/brands/richard-wolf.png";
import brandOlympus from "../assets/azil-images/images/brands/olympus.png";

export const images = {
  logo,
  homeHero,
  aboutPhoto,
  aboutHero,
  aboutCommitment,
  contactHero,
  contactMap,
  contactOffice,
  serviceHero,
  serviceCards: [
    serviceInstall,
    serviceMaintenance,
    serviceRepair,
    serviceCalibration,
    serviceParts,
    serviceTraining,
  ],
  serviceSupport,
  brands: [
    brandStSurgicals,
    brandMindray,
    brandDrager,
    brandBpl,
    brandPhilips,
    brandSteris,
    brandGetinge,
    brandRichardWolf,
    brandOlympus,
  ],
  homeCategories: [
    homeOt,
    homeIcu,
    homeEndoscopy,
    homeMonitoring,
    homeFurniture,
    homeConsumables,
    productMedicalGas,
    productOther,
  ],
  productCategories: [
    productOt,
    productIcu,
    productEndoscopy,
    productMonitoring,
    productFurniture,
    productConsumables,
    productMedicalGas,
    productOther,
  ],
};

export const brand = {
  name: "AZIL HEALTHCARE",
  phone: "9786994312",
  alternatePhone: "9840616437",
  email: "azilhealthcare@gmail.com",
  address: "No.14, Old Thirukolakudi, Thirupathur, Sivaganga, Tamil Nadu - 630405",
  hours: "Monday - Saturday, 9:00 AM - 6:00 PM (Sunday Holiday)",
};

export const productCategories = [
  {
    title: "Operation Theatre Equipment",
    items: [
      "OT Lights",
      "OT Tables",
      "Anesthesia Workstations",
      "Electrosurgical Units (ESU)",
      "Suction Units",
      "Tourniquet Systems",
      "OT Accessories",
    ],
    icon: "✚",
  },
  {
    title: "ICU & Critical Care Equipment",
    items: [
      "Ventilators",
      "Patient Monitors",
      "Infusion Pumps",
      "Syringe Pumps",
      "Defibrillators",
      "BIPAP / CPAP",
      "High Flow Oxygen Therapy",
      "ICU Accessories",
    ],
    icon: "♡",
  },
  {
    title: "Endoscopy Equipment",
    items: [
      "Rigid Bronchoscopy Sets",
      "Rigid Thoracoscopy Sets",
      "Laparoscopy Sets",
      "Endoscopy Camera Systems",
      "Video Processors",
      "Light Sources",
      "Endoscopy Accessories",
    ],
    icon: "◎",
  },
  {
    title: "Patient Monitoring Equipment",
    items: [
      "Multipara Monitors",
      "ECG Machines",
      "Pulse Oximeters",
      "NIBP Monitors",
      "Fetal Monitors",
      "Capnography (EtCO₂)",
      "Central Monitoring Systems",
      "Monitoring Accessories",
    ],
    icon: "▣",
  },
  {
    title: "Hospital Furniture",
    items: [
      "Hospital Beds (Manual / Electric)",
      "ICU Beds",
      "Bedside Trolleys",
      "Crash Carts",
      "Stainless Steel Furniture",
      "Over Bed Tables",
      "Ward Furniture & Accessories",
    ],
    icon: "⌑",
  },
  {
    title: "Medical Consumables",
    items: [
      "BP Bladders & Cuffs",
      "Suction Catheters",
      "IV Sets",
      "Surgical Gloves",
      "Surgical Masks",
      "Wound Care Products",
      "Biomedical Waste Bins",
      "Other Hospital Consumables",
    ],
    icon: "✣",
  },
  {
    title: "Medical Gas & ICU Infrastructure",
    items: [
      "Medical Gas Manifold Systems",
      "Bed Head Panels",
      "Oxygen Points",
      "Vacuum & Air Systems",
      "Pipeline Accessories",
      "Installation Support",
    ],
    icon: "♧",
  },
  {
    title: "Other Medical Equipment",
    items: [
      "Autoclaves",
      "Suction Units",
      "Nebulizers",
      "UV Sterilizers",
      "Examination Lights",
      "Weighing Scales",
      "Biomedical Waste Management",
      "Other Hospital Equipment",
    ],
    icon: "▤",
  },
];

export const brandNames = [
  "ST SURGICALS",
  "mindray",
  "Dräger",
  "BPL",
  "PHILIPS",
  "STERIS",
  "GETINGE",
  "RICHARD WOLF",
  "OLYMPUS",
];

export const services = [
  {
    title: "Installation & Commissioning",
    text: "Professional installation and commissioning of medical equipment by trained engineers.",
  },
  {
    title: "Preventive Maintenance (AMC)",
    text: "Regular maintenance to ensure reliable and uninterrupted performance of your equipment.",
  },
  {
    title: "Repair & Servicing",
    text: "Quick and efficient repair services with genuine spares and professional support.",
  },
  {
    title: "Calibration & Testing",
    text: "Accurate calibration and performance testing as per manufacturer standards.",
  },
  {
    title: "Spare Parts Support",
    text: "Supply of genuine and compatible spare parts for multiple brands.",
  },
  {
    title: "User Training",
    text: "On-site training for hospital staff to ensure safe and effective use of equipment.",
  },
];
