import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock3, FileText, Headphones, Mail, MapPin, MessageCircle, Phone, Search, Settings, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutTeaser, BrandStrip, CategoryTiles, ContactForm, HomeHero, MissionVision, PageFrame, ProductList, SectionTitle, WhyChoose } from "@/components/site";
import { brand, images, services } from "@/lib/site-data";

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
  const serviceSteps = [
    [<Phone />, "1. Receive", "Service Request"],
    [<Search />, "2. Check &", "Diagnose"],
    [<Settings />, "3. Repair / Service", "& Testing"],
    [<CheckCircle2 />, "4. Quality Check", "& Handover"],
    [<Headphones />, "5. Ongoing", "Support"],
  ] as const;
  return <PageFrame>
    <HomeHero />
    <div id="about"><AboutTeaser /><MissionVision /></div>
    <WhyChoose />
    <section id="products" className="home-categories content-width"><SectionTitle first="OUR PRODUCT" second="CATEGORIES" /><CategoryTiles limit={8} /></section>
    <section id="brands" className="home-brands content-width"><SectionTitle first="OUR BRANDS" second="/ PARTNERS" /><BrandStrip /></section>
    <section id="services" className="home-services content-width">
      <div className="home-services-heading"><SectionTitle first="OUR" second="SERVICES" /><p>Reliable support to help your equipment perform at its best.</p></div>
      <div className="service-grid">{services.map((service, index) => <article key={service.title} className="service-card"><div className="service-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.serviceCards[index]})` }} /><div><h2>{service.title}</h2><p>{service.text}</p><a href="/contact" aria-label={`Enquire about ${service.title}`}><ArrowRight /></a></div></article>)}</div>
      <div className="service-details home-service-details">
        <div className="process-panel"><SectionTitle first="OUR SERVICE" second="PROCESS" /><div className="process-steps">{serviceSteps.map(([icon, title, subtitle], index) => <div className="process-step" key={index}><span className="process-icon">{icon}</span><b>{title}</b><b>{subtitle}</b></div>)}</div></div>
        <aside className="why-service"><h2>WHY CHOOSE OUR SERVICE?</h2><ul>{["Experienced and trained biomedical engineers", "Multi-brand service support", "Quality replacement parts", "Quick response and ongoing support", "Cost-effective maintenance solutions"].map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></aside>
      </div>
      <div className="service-support home-service-support">
        <div className="support-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.serviceSupport})` }} />
        <div><SectionTitle first="WE SUPPORT" second="MULTI-BRAND EQUIPMENT" /><p>Our team supports patient monitors, ventilators, anesthesia workstations, OT lights and tables, defibrillators, infusion pumps and more.</p><div className="service-brand-list">mindray　Dräger　PHILIPS　STERIS　GE　ST SURGICALS　OLYMPUS</div></div>
        <aside className="service-quote"><h2>Need Service or AMC?</h2><p>Talk to our team about installation, maintenance or repair.</p><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button><a href={`tel:${brand.phone}`}><Phone />{brand.phone}</a></aside>
      </div>
      <Button asChild variant="outline"><a href="/services">Explore All Services <ArrowRight /></a></Button>
    </section>
    <section id="catalogue" className="home-catalogue-section content-width">
      <div className="home-services-heading"><SectionTitle first="MEDICAL EQUIPMENT" second="CATALOGUE" /><p>Explore our equipment range for hospitals, operating theatres, ICUs and healthcare institutions.</p></div>
      <ProductList />
      <div className="product-cta"><div className="product-cta-icon"><ShieldCheck /></div><div><h2>Need a Customized Solution?</h2><p>Tell us what your hospital needs and our team will help with product selection and a quotation.</p></div><Button asChild><a href="/contact">Request a Quotation <ArrowRight /></a></Button><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button></div>
      <Button asChild variant="outline"><a href="/products">View Full Catalogue <ArrowRight /></a></Button>
    </section>
    <section id="contact" className="home-contact-section content-width">
      <div className="home-services-heading"><SectionTitle first="CONTACT" second="AZIL HEALTHCARE" /><p>For product enquiries, quotations, technical support or service, our team is here to help.</p></div>
      <div className="contact-main home-contact-main">
        <article className="contact-info"><h2>Contact Information</h2>
          <div className="contact-item"><span><Phone /></span><p><b>Phone</b><a href={`tel:${brand.phone}`}>{brand.phone}<br />{brand.alternatePhone}</a></p></div>
          <div className="contact-item"><span><Mail /></span><p><b>Email</b><a href={`mailto:${brand.email}`}>{brand.email}</a></p></div>
          <div className="contact-item"><span><MapPin /></span><p><b>Address</b>{brand.address}</p></div>
          <div className="contact-item"><span><Clock3 /></span><p><b>Working Hours</b>Monday - Saturday<br />9:00 AM - 6:00 PM<br />(Sunday Holiday)</p></div>
          <div className="contact-inline-actions"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a><a href={`tel:${brand.phone}`}><Phone />Call Now</a></div>
        </article>
        <ContactForm />
        <div className="contact-actions">
          <article className="action-card whatsapp-action"><span className="action-icon"><MessageCircle /></span><div><h2>Chat on WhatsApp</h2><p>Get a quick response from our team.</p></div><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button></article>
          <article className="action-card quotation-action"><span className="action-icon"><FileText /></span><div><h2>Request a Quotation</h2><p>Share your requirements for a tailored offer.</p></div><Button asChild variant="outline"><a href="#contact-form"><FileText />Get a Quotation</a></Button></article>
          <article className="action-card call-action"><span className="action-icon"><Phone /></span><div><h2>Call Us Now</h2><p>Speak to us directly about your needs.</p></div><Button asChild variant="outline"><a href={`tel:${brand.phone}`}><Phone />Call Now</a></Button></article>
        </div>
      </div>
      <div className="contact-lower home-contact-lower">
        <article><h2>Our Location</h2><div className="map-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.contactMap})` }} /></article>
        <article><h2>Our Office</h2><div className="office-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.contactOffice})` }} /></article>
        <article className="touch-panel"><h2>Get In Touch Easily</h2><a href={`tel:${brand.phone}`}><Phone /><span><b>Phone Call</b>{brand.phone}<br />{brand.alternatePhone}</span></a><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle /><span><b>WhatsApp</b>Chat for quick response</span></a><a href={`mailto:${brand.email}`}><Mail /><span><b>Email</b>{brand.email}</span></a><div><MapPin /><span><b>Visit Us</b>{brand.address}</span></div></article>
      </div>
      <Button asChild variant="outline"><a href="/contact">Visit Contact Page <ArrowRight /></a></Button>
    </section>
  </PageFrame>;
}
