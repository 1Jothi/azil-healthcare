import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutTeaser, BrandStrip, CategoryTiles, HomeHero, PageFrame, SectionTitle } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AZIL Healthcare | Medical Equipment Sales & Service" },
      { name: "description", content: "Quality medical equipment for hospitals, operating theatres, ICUs and healthcare facilities. Supporting Towards Medicare." },
      { property: "og:title", content: "AZIL Healthcare | Medical Equipment Sales & Service" },
      { property: "og:description", content: "Quality medical equipment for hospitals, operating theatres, ICUs and healthcare facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const commitments = [
    { icon: <ShieldCheck />, title: "Quality-Focused Products" },
    { icon: <HeartPulse />, title: "Multi-Brand Solutions" },
    { icon: <Building2 />, title: "Competitive Pricing" },
    { icon: <Users />, title: "Professional Support" },
  ];
  return <PageFrame>
    <HomeHero />
    <section className="home-categories content-width"><SectionTitle first="OUR PRODUCT" second="CATEGORIES" /><CategoryTiles limit={6} /></section>
    <section className="home-brands content-width"><SectionTitle first="OUR BRANDS" second="/ PARTNERS" /><BrandStrip /></section>
    <AboutTeaser />
    <section className="home-proof content-width"><SectionTitle first="WHY CHOOSE" second="AZIL HEALTHCARE?" /><div className="proof-grid">{commitments.map((item) => <article key={item.title}><span>{item.icon}</span><h3>{item.title}</h3></article>)}</div><p className="home-script">Reliable Solutions for a Healthier Tomorrow</p></section>
    <section className="home-contact-band content-width"><div><span>NEED MEDICAL EQUIPMENT?</span><h2>Supporting hospitals towards better patient care.</h2></div><Button asChild><a href="/contact">Contact Us <ArrowRight /></a></Button></section>
  </PageFrame>;
}
