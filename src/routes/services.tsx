import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Headphones, Phone, Search, Settings, ShieldCheck, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, SectionTitle } from "@/components/site";
import { brand, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Medical Equipment Service & AMC | AZIL Healthcare" },
    { name: "description", content: "Installation, preventive maintenance, repair, calibration, spares and user training for medical equipment." },
    { property: "og:title", content: "Medical Equipment Service & AMC | AZIL Healthcare" },
    { property: "og:description", content: "Reliable medical equipment installation, maintenance, repair and technical support." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});

function ServicesPage() {
  const steps = [
    [<Phone />, "1. Receive", "Service Request"], [<Search />, "2. Check &", "Diagnose"], [<Settings />, "3. Repair / Service", "& Testing"], [<CheckCircle2 />, "4. Quality Check", "& Handover"], [<Headphones />, "5. Ongoing", "Support"],
  ] as const;
  const assurances = ["Experienced & trained biomedical engineers", "Multi-brand service support", "Use of genuine and quality spares", "Quick response time", "Cost-effective maintenance solutions", "Customer-focused service"];
  return <PageFrame>
    <section className="service-hero page-hero"><div className="hero-photo-placeholder" aria-hidden="true" /><div className="hero-shade" /><div className="hero-inner"><div className="hero-copy"><h1>Our Services</h1><h2>Reliable Support for Better Patient Care</h2><p>At Azil Healthcare, we provide end-to-end support for medical equipment, from installation to maintenance and repair, ensuring uninterrupted performance in your healthcare facility.</p><div className="hero-feature-row"><div className="hero-feature"><ShieldCheck /><span>Professional Support</span></div><div className="hero-feature"><Settings /><span>Trained Technicians</span></div><div className="hero-feature"><Users /><span>Quick Response</span></div><div className="hero-feature"><CheckCircle2 /><span>Customer Satisfaction</span></div></div></div></div></section>
    <section className="services-section content-width"><SectionTitle first="OUR" second="SERVICES" /><div className="service-grid">{services.map((service) => <article key={service.title} className="service-card"><div className="service-image-placeholder" aria-hidden="true" /><div><h2>{service.title}</h2><p>{service.text}</p><Link to="/contact" aria-label={`Enquire about ${service.title}`}><ArrowRight /></Link></div></article>)}</div></section>
    <section className="service-details content-width"><div className="process-panel"><SectionTitle first="OUR SERVICE" second="PROCESS" /><div className="process-steps">{steps.map(([icon, title, subtitle], i) => <div className="process-step" key={i}><span className="process-icon">{icon}</span><b>{title}</b><b>{subtitle}</b></div>)}</div></div><aside className="why-service"><h2>WHY CHOOSE US?</h2><ul>{assurances.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></aside></section>
    <section className="service-support content-width"><div className="support-image-placeholder" aria-hidden="true" /><div><SectionTitle first="WE SUPPORT" second="MULTI-BRAND EQUIPMENT" /><p>Our team has experience in servicing and supporting a wide range of medical equipment from leading brands including patient monitors, ventilators, anesthesia workstations, OT lights, OT tables, defibrillators and infusion pumps.</p><div className="service-brand-list">mindray　Dräger　PHILIPS　STERIS　GE　ST SURGICALS　OLYMPUS</div></div><aside className="service-quote"><h2>Request a Service / AMC</h2><p>Need installation, maintenance or repair support? Get in touch with our team.</p><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button><a href={`tel:${brand.phone}`}><Phone />{brand.phone}　|　{brand.alternatePhone}</a></aside></section>
  </PageFrame>;
}