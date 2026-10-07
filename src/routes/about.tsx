import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, Eye, Handshake, HeartPulse, ShieldCheck, Target, Users, Wrench } from "lucide-react";
import { AboutTeaser, Hero, PageFrame, SectionTitle } from "@/components/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AZIL Healthcare | Supporting Towards Medicare" },
    { name: "description", content: "Learn about AZIL Healthcare, our mission, vision and commitment to dependable medical equipment solutions." },
    { property: "og:title", content: "About AZIL Healthcare" },
    { property: "og:description", content: "Our mission, vision and commitment to dependable medical equipment solutions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  const reasons = [
    [<ShieldCheck />, "Quality-Focused Products"], [<Handshake />, "Multi-Brand Solutions"], [<span>▤</span>, "Competitive Pricing"],
    [<Building2 />, "Hospital-Focused Approach"], [<Wrench />, "Professional Technical Support"], [<Users />, "Customer-Oriented Service"],
  ] as const;
  return <PageFrame>
    <Hero className="about-hero" title={<>ABOUT <span>US</span></>} description="Azil Healthcare is a growing medical equipment company focused on providing quality medical equipment, hospital solutions, and healthcare accessories to hospitals, clinics and healthcare institutions. We specialize in Operation Theatre, ICU, critical care, patient monitoring, endoscopy, hospital furniture and medical consumables. Our approach is to understand each customer’s requirements and provide reliable, cost-effective solutions from trusted brands." features={[
      { icon: <Target />, label: "Reliable Solutions" }, { icon: <HeartPulse />, label: "Patient Care" }, { icon: <Users />, label: "Customer Focus" }, { icon: <ShieldCheck />, label: "Quality Products" },
    ]} />
    <section className="mission-vision content-width">
      <article className="mission-panel"><Target /><div><SectionTitle first="OUR" second="MISSION" /><p>To provide dependable medical equipment and healthcare solutions that support hospitals in delivering better patient care.</p></div></article>
      <article className="vision-panel"><Eye /><div><SectionTitle first="OUR" second="VISION" /><p>To become a trusted and preferred multi-brand medical equipment partner for hospitals and healthcare institutions across Tamil Nadu and beyond.</p></div></article>
    </section>
    <section className="about-reasons content-width"><SectionTitle first="WHY CHOOSE" second="AZIL HEALTHCARE?" /><div className="reason-grid">{reasons.map(([icon, label]) => <article key={label}><span>{icon}</span><h3>{label}</h3></article>)}</div></section>
    <section className="commitment-band content-width"><div className="commitment-image-placeholder" aria-hidden="true" /><div><SectionTitle first="OUR" second="COMMITMENT" /><p>At Azil Healthcare, we believe that medical equipment is more than a product — it is an important part of patient care. We are committed to providing reliable products, transparent communication, and responsive customer support.</p><div className="commitment-quote">Azil Healthcare — <i>Supporting Towards Medicare.</i></div><Button asChild><Link to="/contact">Get in Touch</Link></Button></div></section>
    <AboutTeaser />
  </PageFrame>;
}