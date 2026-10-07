import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, ShieldCheck, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero, PageFrame, ProductList, SectionTitle } from "@/components/site";
import { images } from "@/lib/images";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Medical Equipment Products | AZIL Healthcare" },
    { name: "description", content: "Explore operation theatre, ICU, endoscopy, monitoring, furniture, consumables and hospital medical equipment." },
    { property: "og:title", content: "Medical Equipment Products | AZIL Healthcare" },
    { property: "og:description", content: "Medical equipment for hospitals, operating theatres, ICUs and healthcare institutions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProductsPage,
});

function ProductsPage() {
  return <PageFrame>
    <Hero className="products-hero" image={images.products.hero} title={<>Complete Medical<br />Equipment Range</>} subtitle="OUR PRODUCTS" description="Quality equipment for Hospitals, Operating Theatres, ICUs and Healthcare Institutions" features={[
      { icon: <ShieldCheck />, label: "Premium Quality" }, { icon: <HeartPulse />, label: "Multi-Brand Solutions" }, { icon: <Truck />, label: "Reliable Supply" }, { icon: <Users />, label: "Professional Support" },
    ]} />
    <section className="products-section content-width"><ProductList /></section>
    <section className="product-cta content-width"><div className="product-cta-icon"><ShieldCheck /></div><div><h2>Need a Customized Solution?</h2><p>Tell us your requirements and our team will provide the best products and quotation for your hospital.</p></div><Button asChild><a href="/contact">Request a Quotation <ArrowRight /></a></Button><Button asChild className="whatsapp-button"><a href="https://wa.me/919786994312" target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button></section>
    <section className="catalogue-note content-width"><SectionTitle first="MEDICAL EQUIPMENT" second="FOR EVERY NEED" /><p>Our product range supports hospitals, clinics and healthcare institutions with dependable equipment and multi-brand solutions.</p></section>
  </PageFrame>;
}