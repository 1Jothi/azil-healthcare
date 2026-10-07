import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, Building2, CheckCircle2, Clock3, FileText, Handshake,
  Headphones, HeartPulse, Mail, MapPin, Menu, MessageCircle, Phone,
  Search, Send, Settings, ShieldCheck, Tag, Target, Users, Wrench, X, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { brand, brandNames, productCategories } from "@/lib/site-data";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Products", to: "/products" as const },
  { label: "Brands", to: "/" as const, hash: "brands" },
  { label: "Services", to: "/services" as const },
  { label: "Catalogue", to: "/products" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SiteHeader() {
  const currentPath = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="brand-row">
        <div className="brand-wrap">
          <Link to="/" className="identity" aria-label="AZIL Healthcare home">
            <img className="identity-logo" src={images.logo} alt="" />
            <span className="identity-copy">
              <span className="identity-title"><strong>AZIL</strong> <b>HEALTHCARE</b></span>
              <span className="identity-subtitle">Medical Equipment Sales &amp; Service</span>
              <span className="identity-motto">SUPPORTING TOWARDS MEDICARE</span>
            </span>
          </Link>
          <div className="header-contact">
            <a href={`tel:${brand.phone}`}><Phone /><span>{brand.phone} <i>|</i> {brand.alternatePhone}</span></a>
            <a href={`mailto:${brand.email}`}><Mail /><span>{brand.email}</span></a>
            <div><MapPin /><span>{brand.address}</span></div>
          </div>
          <Button asChild className="header-quote"><Link to="/contact"><FileText />Get a Quotation</Link></Button>
          <Button className="mobile-menu" size="icon" variant="outline" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      <nav className={`main-nav${open ? " nav-open" : ""}`} aria-label="Main navigation">
        <div className="nav-inner">
          {navLinks.map(({ label, to, hash }) => {
            const active = (label === "Home" && currentPath === "/") || (label === "About Us" && currentPath === "/about") || (label === "Products" && currentPath === "/products") || (label === "Services" && currentPath === "/services") || (label === "Contact Us" && currentPath === "/contact");
            const className = `nav-link${active ? " active" : ""}`;
            const content = <>{label}{label === "Products" && <span className="nav-chevron">⌄</span>}</>;
            return hash ? <Link key={label} to="/" hash={hash} className={className} onClick={() => setOpen(false)}>{content}</Link> : <Link key={label} to={to} className={className} onClick={() => setOpen(false)}>{content}</Link>;
          })}
          <Link className="nav-search" to="/products" aria-label="Browse products"><Search /></Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand"><img src={images.logo} alt="" /><span>AZIL HEALTHCARE<small>Medical Equipment Sales &amp; Service</small></span></Link>
      <p>Supporting Towards Medicare</p>
      <div className="footer-links"><Link to="/about">About Us</Link><Link to="/products">Products</Link><Link to="/services">Services</Link><Link to="/contact">Contact Us</Link></div>
      <small>© 2026 AZIL Healthcare. All rights reserved.</small>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function Hero({ title, subtitle, description, features, className = "", image }: {
  title: ReactNode; subtitle?: string; description: string;
  features: { icon: ReactNode; label: string }[]; className?: string; image: string;
}) {
  return (
    <section className={`page-hero ${className}`}>
      <img className="hero-photo-placeholder" src={image} alt="" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-copy">
          {subtitle && className.includes("products-hero") && <h2>{subtitle}</h2>}
          <h1>{title}</h1>
          {subtitle && !className.includes("products-hero") && <h2>{subtitle}</h2>}
          <p>{description}</p>
          <div className="hero-feature-row">{features.map((feature) => <div className="hero-feature" key={feature.label}>{feature.icon}<span>{feature.label}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}

export function HomeHero() {
  const features = [
    { icon: <ShieldCheck />, label: <>Quality<br />Products</> },
    { icon: <Settings />, label: <>Multi-Brand<br />Solutions</> },
    { icon: <Tag />, label: <>Competitive<br />Pricing</> },
    { icon: <Users />, label: <>Professional<br />Support</> },
  ];
  return (
    <section className="home-hero page-hero">
      <img className="hero-photo-placeholder" src={images.home.hero} alt="" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1>Complete<br />Medical Equipment<br />Solutions</h1>
          <p>Quality medical equipment for hospitals, operating theatres,<br className="desktop-break" /> ICUs and healthcare facilities.</p>
          <div className="hero-actions"><Button asChild size="lg"><Link to="/products">Explore Products <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="hero-secondary"><Link to="/contact"><FileText />Request a Quotation</Link></Button></div>
          <div className="home-feature-row">{features.map((feature, index) => <div key={index}>{feature.icon}<span>{feature.label}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ first, second, className = "" }: { first: string; second: string; className?: string }) {
  return <h2 className={`section-title ${className}`}><span>{first}</span> <b>{second}</b></h2>;
}

export function BrandStrip() {
  return <div className="brand-strip" id="brands">{brandNames.map((name, i) => <div key={name} className={`brand-wordmark brand-wordmark-${i}`}><img src={images.brands[name]} alt={name} /></div>)}</div>;
}

export function CategoryTiles({ limit }: { limit?: number }) {
  const categories = limit ? productCategories.slice(0, limit) : productCategories;
  return <div className={`category-grid${limit ? " category-grid-home" : " category-grid-products"}`}>
    {categories.map((category) => <Link to="/products" key={category.title} className="category-tile">
      <img className="category-image-placeholder" src={images.home.categories[category.imageKey]} alt="" aria-hidden="true" />
      <span className="category-label">{category.title}<i><ArrowRight /></i></span>
    </Link>)}
  </div>;
}

export function ProductList() {
  return <div className="product-list">{productCategories.map((category) => <article className="product-card" key={category.title}>
    <img className="product-image-placeholder" src={images.products.categories[category.imageKey]} alt="" aria-hidden="true" />
    <div className="product-info"><div className="product-title-row"><span className="product-icon">{category.icon}</span><h2>{category.title}</h2><span className="circle-arrow"><ArrowRight /></span></div>
      <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
      <Button asChild size="sm"><Link to="/contact">View Products <ArrowRight /></Link></Button>
    </div>
  </article>)}</div>;
}

export function QuoteCard({ title = "REQUEST A QUOTATION", children }: { title?: string; children?: ReactNode }) {
  return <aside className="quote-card"><div className="quote-icon"><FileText /></div><div className="quote-copy"><h3>{title}</h3><p>{children ?? "Tell us what equipment you need, and our team will get back to you with the best offer."}</p><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button><p className="quote-phone"><Phone />{brand.phone}<span>|</span>{brand.alternatePhone}</p><p className="quote-email"><Mail />{brand.email}</p></div></aside>;
}

export function AboutTeaser() {
  return <section className="about-teaser content-width"><img className="office-image-placeholder" src={images.home.hospital} alt="Hospital building" /><div className="about-teaser-copy"><SectionTitle first="ABOUT" second="AZIL HEALTHCARE" /><p>Azil Healthcare is a growing medical equipment company specialized in the sales and supply of high-quality hospital equipment, accessories and consumables. We provide reliable and cost-effective solutions for hospitals, clinics and healthcare institutions with a focus on customer satisfaction.</p><Button asChild size="sm"><Link to="/about">Know More About Us <ArrowRight /></Link></Button></div><QuoteCard /></section>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Medical equipment enquiry from ${String(data.get("name") ?? "Website visitor")}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name") ?? ""}`,
      `Hospital / Organization: ${data.get("organization") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Product: ${data.get("product") ?? ""}`,
      `Requirements: ${data.get("message") ?? ""}`,
    ].join("\n"));
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return <form id="contact-form" className="enquiry-form" onSubmit={submit}>
    <h2>Send Us an Enquiry</h2><p>Fill in the form below and our team will get back to you shortly.</p>
    <div className="form-grid">
      <label>Your Name *<input name="name" placeholder="Enter your name" required /></label>
      <label>Hospital / Organization<input name="organization" placeholder="Enter hospital or company name" /></label>
      <label>Phone Number *<input name="phone" type="tel" placeholder="Enter your phone number" required /></label>
      <label>Email Address<input name="email" type="email" placeholder="Enter your email address" /></label>
      <label className="form-wide">Product / Equipment Required *<select name="product" required defaultValue=""><option value="" disabled>Select Product Category</option>{productCategories.map((item) => <option key={item.title}>{item.title}</option>)}</select></label>
      <label className="form-wide">Message / Requirements<textarea name="message" placeholder="Please provide details of your requirement..." rows={3} /></label>
    </div>
    <Button type="submit" className="send-button"><Send />{submitted ? "Enquiry Details Ready" : "Send Enquiry"}</Button>
    {submitted && <p className="form-confirmation" role="status">Your email app is opening with your enquiry details.</p>}
  </form>;
}

export const featureIcons = { ShieldCheck, Settings, Tag, Users, FileText, Phone, Mail, MapPin, Clock3, MessageCircle, Target, Eye, Handshake, HeartPulse, Building2, Wrench, Search, Send, CheckCircle2, Headphones, ArrowRight };