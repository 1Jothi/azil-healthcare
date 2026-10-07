import aboutHero from "@/assets/azil-images/images/about/about-hero.jpg";
import doctorShield from "@/assets/azil-images/images/about/doctor-shield.jpg";
import bpl from "@/assets/azil-images/images/brands/bpl.png";
import drager from "@/assets/azil-images/images/brands/drager.png";
import getinge from "@/assets/azil-images/images/brands/getinge.png";
import mindray from "@/assets/azil-images/images/brands/mindray.png";
import olympus from "@/assets/azil-images/images/brands/olympus.png";
import philips from "@/assets/azil-images/images/brands/philips.png";
import richardWolf from "@/assets/azil-images/images/brands/richard-wolf.png";
import stSurgicals from "@/assets/azil-images/images/brands/st-surgicals.png";
import steris from "@/assets/azil-images/images/brands/steris.png";
import contactAgent from "@/assets/azil-images/images/contact/contact-agent.jpg";
import contactMap from "@/assets/azil-images/images/contact/map.png";
import officeFront from "@/assets/azil-images/images/contact/office-front.jpg";
import catConsumables from "@/assets/azil-images/images/home/cat-consumables.jpg";
import catEndoscopy from "@/assets/azil-images/images/home/cat-endoscopy.jpg";
import catFurniture from "@/assets/azil-images/images/home/cat-hospital-furniture.jpg";
import catIcu from "@/assets/azil-images/images/home/cat-icu.jpg";
import catOtTheatre from "@/assets/azil-images/images/home/cat-ot-theatre.jpg";
import catPatientMonitor from "@/assets/azil-images/images/home/cat-patient-monitor.jpg";
import homeHero from "@/assets/azil-images/images/home/hero-ot.jpg";
import hospitalBuilding from "@/assets/azil-images/images/home/hospital-building.jpg";
import catMedicalGas from "@/assets/azil-images/images/products/medical-gas.jpg";
import catOtherEquipment from "@/assets/azil-images/images/products/other-equipment.jpg";
import azilLogo from "@/assets/azil-images/images/logo/azil-logo.png";
import productConsumables from "@/assets/azil-images/images/products/consumables.jpg";
import productEndoscopy from "@/assets/azil-images/images/products/endoscopy.jpg";
import productFurniture from "@/assets/azil-images/images/products/hospital-furniture.jpg";
import productIcu from "@/assets/azil-images/images/products/icu.jpg";
import productMedicalGas from "@/assets/azil-images/images/products/medical-gas.jpg";
import productOtEquipment from "@/assets/azil-images/images/products/ot-equipment.jpg";
import productOtherEquipment from "@/assets/azil-images/images/products/other-equipment.jpg";
import productPatientMonitoring from "@/assets/azil-images/images/products/patient-monitoring.jpg";
import productsHero from "@/assets/azil-images/images/products/products-hero.jpg";
import serviceMaintenance from "@/assets/azil-images/images/services/amc-maintenance.jpg";
import serviceCalibration from "@/assets/azil-images/images/services/calibration.jpg";
import serviceInstallation from "@/assets/azil-images/images/services/installation.jpg";
import serviceMultibrand from "@/assets/azil-images/images/services/multibrand-ot.jpg";
import serviceRepair from "@/assets/azil-images/images/services/repair.jpg";
import servicesHero from "@/assets/azil-images/images/services/services-hero.jpg";
import serviceSpareParts from "@/assets/azil-images/images/services/spare-parts.jpg";
import serviceTraining from "@/assets/azil-images/images/services/user-training.jpg";

export const images = {
  logo: azilLogo,
  about: { hero: aboutHero, doctor: doctorShield },
  brands: {
    "ST SURGICALS": stSurgicals,
    mindray,
    Dräger: drager,
    BPL: bpl,
    PHILIPS: philips,
    STERIS: steris,
    GETINGE: getinge,
    "RICHARD WOLF": richardWolf,
    OLYMPUS: olympus,
  },
  contact: { agent: contactAgent, map: contactMap, office: officeFront },
  home: {
    hero: homeHero,
    hospital: hospitalBuilding,
    categories: {
      ot: catOtTheatre,
      icu: catIcu,
      endoscopy: catEndoscopy,
      monitoring: catPatientMonitor,
      furniture: catFurniture,
      consumables: catConsumables,
      gas: catMedicalGas,
      other: catOtherEquipment,
    },
  },
  products: {
    hero: productsHero,
    categories: {
      ot: productOtEquipment,
      icu: productIcu,
      endoscopy: productEndoscopy,
      monitoring: productPatientMonitoring,
      furniture: productFurniture,
      consumables: productConsumables,
      gas: productMedicalGas,
      other: productOtherEquipment,
    },
  },
  services: {
    hero: servicesHero,
    support: serviceMultibrand,
    cards: {
      installation: serviceInstallation,
      maintenance: serviceMaintenance,
      repair: serviceRepair,
      calibration: serviceCalibration,
      spareParts: serviceSpareParts,
      training: serviceTraining,
    },
  },
};
