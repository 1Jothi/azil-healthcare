import { createFileRoute } from "@tanstack/react-router";
import { Clock3, FileText, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm, PageFrame } from "@/components/site";
import { brand, images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact AZIL Healthcare | Send Us an Enquiry" },
    { name: "description", content: "Contact AZIL Healthcare for product enquiries, quotations, technical support, installation and service." },
    { property: "og:title", content: "Contact AZIL Healthcare" },
    { property: "og:description", content: "Our team is ready to help with medical equipment enquiries, quotations and technical support." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <PageFrame>
    <section className="contact-hero page-hero"><div className="hero-photo-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.contactHero})` }} /><div className="hero-shade" /><div className="hero-inner"><div className="hero-copy"><h1>Contact Us</h1><h2>We are here to help you</h2><p>For product enquiries, quotations, technical support, installation or any other information, please feel free to contact us. Our team will be happy to assist you.</p><div className="hero-feature-row"><div className="hero-feature"><MessageCircle /><span>Quick Response</span></div><div className="hero-feature"><Users /><span>Professional Support</span></div><div className="hero-feature"><span className="handshake-mark">↔</span><span>Customer Satisfaction</span></div><div className="hero-feature"><FileText /><span>Reliable Solutions</span></div></div></div></div></section>
    <section className="contact-main content-width">
      <article className="contact-info"><h2>Contact Information</h2><div className="contact-item"><span><Phone /></span><p><b>Phone</b><a href={`tel:${brand.phone}`}>{brand.phone}<br />{brand.alternatePhone}</a></p></div><div className="contact-item"><span><Mail /></span><p><b>Email</b><a href={`mailto:${brand.email}`}>{brand.email}</a></p></div><div className="contact-item"><span><MapPin /></span><p><b>Address</b>{brand.address}</p></div><div className="contact-item"><span><Clock3 /></span><p><b>Working Hours</b>Monday - Saturday<br />9:00 AM - 6:00 PM<br />(Sunday Holiday)</p></div><div className="contact-inline-actions"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a><a href={`tel:${brand.phone}`}><Phone />Call Now</a></div></article>
      <ContactForm />
      <div className="contact-actions"><article className="action-card whatsapp-action"><span className="action-icon"><MessageCircle /></span><div><h2>Chat on WhatsApp</h2><p>Get instant response for your queries. Click the button below to chat with us directly on WhatsApp.</p></div><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button></article><article className="action-card quotation-action"><span className="action-icon"><FileText /></span><div><h2>Request a Quotation</h2><p>Tell us your requirements and we will provide the best quotation for your hospital.</p></div><Button asChild variant="outline"><a href="#contact-form"><FileText />Get a Quotation</a></Button></article><article className="action-card call-action"><span className="action-icon"><Phone /></span><div><h2>Call Us Now</h2><p>Speak directly with our team for product enquiries, technical support or orders.</p></div><Button asChild variant="outline"><a href={`tel:${brand.phone}`}><Phone />Call Now</a></Button></article></div>
    </section>
    <section className="contact-lower content-width"><article><h2>Our Location</h2><div className="map-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.contactMap})` }} /></article><article><h2>Our Office</h2><div className="office-image-placeholder" aria-hidden="true" style={{ backgroundImage: `url(${images.contactOffice})` }} /></article><article className="touch-panel"><h2>Get In Touch Easily</h2><a href={`tel:${brand.phone}`}><Phone /><span><b>Phone Call</b>9786994312<br />9840616437</span></a><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle /><span><b>WhatsApp</b>Chat for quick response</span></a><a href={`mailto:${brand.email}`}><Mail /><span><b>Email</b>{brand.email}</span></a><div><MapPin /><span><b>Visit Us</b>{brand.address}</span></div></article></section>
  </PageFrame>;
}