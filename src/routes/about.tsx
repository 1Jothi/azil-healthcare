import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, ShieldCheck, Target, Users } from "lucide-react";
import { Hero, MissionVision, PageFrame, SectionTitle, WhyChoose } from "@/components/site";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-data";

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
  return <PageFrame>
    <Hero className="about-hero" title={<>ABOUT <span>US</span></>} description={<>Azil Healthcare is a growing medical equipment company focused on providing quality medical equipment, hospital solutions, and healthcare accessories to hospitals, clinics and healthcare institutions.<br /><br />We specialize in Operation Theatre, ICU, critical care, patient monitoring, endoscopy, hospital furniture and medical consumables. Our approach is to understand each customer’s requirements and provide reliable, cost-effective solutions from trusted brands.</>} features={[
      { icon: <Target />, label: "Reliable Solutions" }, { icon: <HeartPulse />, label: "Patient Care" }, { icon: <Users />, label: "Customer Focus" }, { icon: <ShieldCheck />, label: "Quality Products" },
    ]} />
    <MissionVision />
    <WhyChoose />
    <section className="commitment-band content-width"><div className="commitment-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.aboutCommitment})` }} /><div><SectionTitle first="OUR" second="COMMITMENT" /><p>At Azil Healthcare, we believe that medical equipment is more than a product — it is an important part of patient care. We are committed to providing reliable products, transparent communication, and responsive customer support.</p><div className="commitment-quote">Azil Healthcare — <i>Supporting Towards Medicare.</i></div><Button asChild><Link to="/contact">Get in Touch</Link></Button></div></section>
  </PageFrame>;
}