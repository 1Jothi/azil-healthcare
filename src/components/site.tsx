import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, Building2, CheckCircle2, Clock3, FileText, Handshake,
  Headphones, HeartPulse, Mail, MapPin, Menu, MessageCircle, Phone,
  Search, Send, Settings, ShieldCheck, Tag, Target, Users, Wrench, X, Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, images, productCategories } from "@/lib/site-data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products" },
  { label: "Brands", id: "brands" },
  { label: "Services", id: "services" },
  { label: "Catalogue", id: "catalogue" },
  { label: "Contact Us", id: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    if (currentPath !== "/") return;
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.4, 0.7] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentPath]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const jump = (id: string) => {
    setOpen(false);
    if (currentPath !== "/") return;
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };
  return (
    <>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="top-info-strip"><span>Supporting Towards Medicare</span><span>Mon - Sat: 9:00 AM - 6:00 PM</span></div>
      <div className="brand-row">
        <div className="brand-wrap">
          <Link to="/" className="identity" aria-label="AZIL Healthcare home">
            <img className="identity-mark" src={brand.emblem} alt="AZIL Healthcare emblem" />
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
          {navLinks.map(({ label, id }) => {
            const active = currentPath === "/" ? activeSection === id : (id === "about" && currentPath === "/about") || (id === "products" && currentPath === "/products") || (id === "services" && currentPath === "/services") || (id === "contact" && currentPath === "/contact");
            const className = `nav-link${active ? " active" : ""}`;
            const content = <>{label}{label === "Products" && <span className="nav-chevron">⌄</span>}</>;
            return <a key={label} href={currentPath === "/" ? `#${id}` : `/#${id}`} className={className} onClick={() => jump(id)}>{content}</a>;
          })}
          <Button className="drawer-quote" onClick={() => { setQuoteOpen(true); setOpen(false); }}><FileText />Get a Quotation</Button>
        </div>
      </nav>
    </header>
    <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}><DialogContent className="quote-dialog"><DialogHeader><DialogTitle>Request a Quotation</DialogTitle><DialogDescription>Tell us what your hospital needs and our team will be happy to assist you.</DialogDescription></DialogHeader><ContactForm /></DialogContent></Dialog>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand"><img src={brand.emblem} alt="" /> <span>AZIL HEALTHCARE<small>Medical Equipment Sales &amp; Service</small></span></Link>
      <p>Supporting Towards Medicare</p>
      <div className="footer-links"><a href="/#about">About Us</a><a href="/#products">Products</a><a href="/#services">Services</a><a href="/#contact">Contact Us</a><a href="/#catalogue">Catalogue</a><a href="#home">Back to top ↑</a></div>
      <small>© 2026 AZIL Healthcare. All rights reserved.</small>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function Hero({ image, title, subtitle, description, features, className = "" }: {
  image: string; title: ReactNode; subtitle?: string; description: string;
  features: { icon: ReactNode; label: string }[]; className?: string;
}) {
  return (
    <section className={`page-hero ${className}`}>
      <img className="hero-photo" src={image} alt="Medical equipment and care at AZIL Healthcare" fetchPriority="high" />
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
    <section className="home-hero page-hero" id="home">
      <img className="hero-photo" src={images.home} alt="Operating theatre with medical equipment" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <h1>Complete<br />Medical Equipment<br />Solutions</h1>
          <p>Quality medical equipment for hospitals, operating theatres,<br className="desktop-break" /> ICUs and healthcare facilities.</p>
          <div className="hero-actions"><Button asChild size="lg"><Link to="/products">Explore Products <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="hero-secondary"><Link to="/contact"><FileText />Request a Quotation</Link></Button></div>
          <div className="home-feature-row">{features.map((feature, index) => <div key={index}>{feature.icon}<span>{feature.label}</span></div>)}</div>
        </div>
        <div className="hero-partner-badge"><ShieldCheck /><span>Reliable Healthcare Partner</span></div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About Us"><span>Scroll to explore</span><ArrowRight /></a>
    </section>
  );
}

export function SectionTitle({ first, second, className = "" }: { first: string; second: string; className?: string }) {
  return <h2 className={`section-title ${className}`}><span>{first}</span> <b>{second}</b></h2>;
}

export function BrandStrip() {
  const names = ["ST SURGICALS", "mindray", "Dräger", "BPL", "PHILIPS", "STERIS", "GETINGE", "RICHARD WOLF", "OLYMPUS"];
  return <div className="brand-strip" id="brands">{names.map((name, i) => <div key={name} className={`brand-wordmark brand-wordmark-${i}`}>{name}</div>)}</div>;
}

export function CategoryTiles({ limit }: { limit?: number }) {
  const categories = limit ? productCategories.slice(0, limit) : productCategories;
  return <div className={`category-grid${limit ? " category-grid-home" : " category-grid-products"}`}>
    {categories.map((category) => <Link to="/products" key={category.title} className="category-tile">
      <img src={category.image} alt={category.title} loading="lazy" />
      <span className="category-label">{category.title}<i><ArrowRight /></i></span>
    </Link>)}
  </div>;
}

export function ProductList() {
  const [selected, setSelected] = useState<(typeof productCategories)[number] | null>(null);
  return <>
    <div className="product-list">{productCategories.map((category) => <article className="product-card" key={category.title}>
      <img src={category.image} alt={category.title} loading="lazy" />
      <div className="product-info"><div className="product-title-row"><h2>{category.title}</h2><span className="circle-arrow"><ArrowRight /></span></div>
        <ul>{category.items.slice(0, 5).map((item) => <li key={item}>{item}</li>)}</ul>
        <Button size="sm" onClick={() => setSelected(category)}>View Products <ArrowRight /></Button>
      </div>
    </article>)}</div>
    <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}><DialogContent className="product-dialog"><DialogHeader><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>Equipment available from AZIL Healthcare.</DialogDescription></DialogHeader><ul className="dialog-product-list">{selected?.items.map((item) => <li key={item}>{item}</li>)}</ul><Button asChild><a href="#contact" onClick={() => { if (selected) window.dispatchEvent(new CustomEvent("azil:prefill-product", { detail: selected.title })); setSelected(null); }}>Enquire Now <ArrowRight /></a></Button></DialogContent></Dialog>
  </>;
}

export function QuoteCard({ title = "REQUEST A QUOTATION", children }: { title?: string; children?: ReactNode }) {
  return <aside className="quote-card"><div className="quote-icon"><FileText /></div><div className="quote-copy"><h3>{title}</h3><p>{children ?? "Tell us what equipment you need, and our team will get back to you with the best offer."}</p><Button asChild className="whatsapp-button"><a href={`https://wa.me/91${brand.phone}`} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button><p className="quote-phone"><Phone />{brand.phone}<span>|</span>{brand.alternatePhone}</p><p className="quote-email"><Mail />{brand.email}</p></div></aside>;
}

export function AboutTeaser() {
  return <section className="about-teaser content-width"><img src={images.office} alt="AZIL Healthcare office" loading="lazy" /><div className="about-teaser-copy"><SectionTitle first="ABOUT" second="AZIL HEALTHCARE" /><p>Azil Healthcare is a growing medical equipment company specialized in the sales and supply of high-quality hospital equipment, accessories and consumables. We provide reliable and cost-effective solutions for hospitals, clinics and healthcare institutions with a focus on customer satisfaction.</p><Button asChild size="sm"><Link to="/about">Know More About Us <ArrowRight /></Link></Button></div><QuoteCard /></section>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    const prefill = (event: Event) => setSelectedProduct((event as CustomEvent<string>).detail);
    window.addEventListener("azil:prefill-product", prefill);
    return () => window.removeEventListener("azil:prefill-product", prefill);
  }, []);
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
      <label className="form-wide">Product / Equipment Required *<select name="product" required value={selectedProduct} onChange={(event) => setSelectedProduct(event.target.value)}><option value="" disabled>Select Product Category</option>{productCategories.map((item) => <option key={item.title}>{item.title}</option>)}</select></label>
      <label className="form-wide">Message / Requirements<textarea name="message" placeholder="Please provide details of your requirement..." rows={3} /></label>
    </div>
    <Button type="submit" className="send-button"><Send />{submitted ? "Enquiry Details Ready" : "Send Enquiry"}</Button>
    {submitted && <p className="form-confirmation" role="status">Your email app is opening with your enquiry details.</p>}
  </form>;
}

export const featureIcons = { ShieldCheck, Settings, Tag, Users, FileText, Phone, Mail, MapPin, Clock3, MessageCircle, Target, Eye, Handshake, HeartPulse, Building2, Wrench, Search, Send, CheckCircle2, Headphones, ArrowRight };