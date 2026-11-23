import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Plane, Headphones } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact IMTS CARE | Dubai Patient Transfer & Medical Coordination",
  description: "Contact IMTS CARE in Dubai for air ambulance enquiries, patient transfers and international medical treatment coordination.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact IMTS CARE", description: "Speak with our Dubai-based coordination team about patient transfers and international treatment arrangements.", url: "/contact", type: "website" },
};

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="imts-contact-eyebrow"><span />{children}</div>;
}

function SiteHeader() {
  return <>
    <div className="topline"><div className="container topline-inner">
      <span><Clock3 size={14} /> International patient coordination</span>
      <div className="topline-right"><a href="mailto:info@imtscare.com">info@imtscare.com</a><span className="topline-divider" /><a href="tel:+971554705602">+971 55 470 5602</a></div>
    </div></div>
    <header className="site-header"><div className="container nav-inner">
      <Link href="/" className="brand" aria-label="IMTS CARE home"><Image src="/images/imtscare-logo.png" alt="IMTS CARE" width={240} height={160} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/air-ambulance">Our services</Link><Link href="/medical-tourism">Medical tourism</Link><Link href="/destinations">Destinations</Link><Link href="/contact" className="active">Contact</Link>
      </nav>
      <a className="nav-cta" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">Request assistance <ArrowUpRight size={16} /></a>
      <details className="mobile-menu"><summary aria-label="Open navigation"><span className="mobile-menu-label">Menu</span></summary><nav aria-label="Mobile navigation">
        <Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/air-ambulance">Our services</Link><Link href="/medical-tourism">Medical tourism</Link><Link href="/destinations">Destinations</Link><Link href="/contact">Contact</Link><a href="https://wa.me/971554705602" target="_blank" rel="noreferrer">Request assistance</a>
      </nav></details>
    </div></header>
  </>;
}

function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Image src="/images/imtscare-logo.png" alt="IMTS CARE" width={190} height={127} /><p>Connecting patients to medical transportation and international treatment coordination.</p></div>
      <div className="footer-links"><strong>Explore</strong><Link href="/about">About IMTS CARE</Link><Link href="/air-ambulance">Air ambulance</Link><Link href="/medical-tourism">Medical tourism</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-links"><strong>Our services</strong><Link href="/air-ambulance">Patient transfers</Link><Link href="/medical-tourism">Treatment coordination</Link><Link href="/destinations">Destinations</Link></div>
      <div className="footer-contact"><strong>Contact</strong><a href="tel:+971554705602">+971 55 470 5602</a><a href="mailto:info@imtscare.com">info@imtscare.com</a><span>RKM Building, Office 116, Dubai, UAE</span><a className="footer-whatsapp" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={15} /></a></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 IMTS CARE. All rights reserved.</span><span>International Medical Treatment Services</span><Link href="/">Back to home ↑</Link></div>
  </footer>;
}

export default function ContactPage() {
  return <main className="imts-contact-page">
    <SiteHeader />
    <section className="imts-contact-hero"><div className="imts-contact-hero-bg" /><div className="imts-contact-hero-shade" />
      <div className="container imts-contact-hero-inner">
        <div className="imts-contact-hero-copy"><Eyebrow>CONTACT IMTS CARE · DUBAI, UAE</Eyebrow>
          <h1>Let’s talk about<br /><span>the next step.</span></h1>
          <p>From air ambulance enquiries to international treatment coordination, our team is here to listen, understand your requirements and explain the coordination process.</p>
          <div className="imts-contact-hero-links"><a href="tel:+971554705602"><Phone size={17} /> +971 55 470 5602</a><a href="mailto:info@imtscare.com"><Mail size={17} /> info@imtscare.com</a></div>
        </div>
        <div className="imts-contact-hero-note"><div className="imts-contact-note-icon"><Headphones size={25} /></div><span>YOUR ENQUIRY, OUR ATTENTION</span><strong>One conversation<br />at a time.</strong><p>Share a few initial details and our coordination team can help identify an appropriate next step.</p><a href="#contact-form">Send an enquiry <ArrowRight size={16} /></a></div>
      </div>
      <div className="container imts-contact-hero-bottom"><span>INTERNATIONAL MEDICAL TREATMENT SERVICES</span><i /><span>DUBAI · UNITED ARAB EMIRATES</span></div>
    </section>

    <section className="imts-contact-content"><div className="container imts-contact-layout">
      <div className="imts-contact-form-column" id="contact-form">
        <div className="imts-contact-section-heading"><Eyebrow>GET IN TOUCH</Eyebrow><h2>How can we <span>assist you?</span></h2><p>Complete the enquiry form and choose how you would like us to contact you. Please do not include medical records or highly sensitive health information.</p></div>
        <ContactForm />
      </div>
      <aside className="imts-contact-sidebar">
        <div className="imts-contact-direct-card"><span className="imts-contact-card-kicker">PREFER TO SPEAK DIRECTLY?</span><h3>We’re just a call away.</h3><p>Contact our Dubai coordination team by phone or WhatsApp.</p>
          <a className="imts-contact-direct-row" href="tel:+971554705602"><span><Phone size={18} /></span><span><small>CALL OUR TEAM</small><strong>+971 55 470 5602</strong></span><ArrowUpRight size={16} /></a>
          <a className="imts-contact-direct-row" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer"><span><MessageCircle size={18} /></span><span><small>WHATSAPP</small><strong>Start a conversation</strong></span><ArrowUpRight size={16} /></a>
          <a className="imts-contact-direct-row" href="mailto:info@imtscare.com"><span><Mail size={18} /></span><span><small>EMAIL</small><strong>info@imtscare.com</strong></span><ArrowUpRight size={16} /></a>
        </div>
        <div className="imts-contact-office-card"><div className="imts-contact-office-top"><MapPin size={19} /><span>OUR DUBAI OFFICE</span></div><h3>IMTS CARE</h3><p>RKM Building, Office 116,<br />Dubai, United Arab Emirates</p><a href="https://www.google.com/maps/search/?api=1&query=RKM+Building+Dubai+UAE" target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={15} /></a></div>
        <div className="imts-contact-response-note"><ShieldCheck size={19} /><p><strong>Important to know</strong><br />Our role is coordination and travel-related assistance. We do not provide medical advice, diagnosis or treatment.</p></div>
      </aside>
    </div></section>
    <section className="imts-contact-bottom"><div className="container imts-contact-bottom-inner"><div><Plane size={23} /><span>INTERNATIONAL PATIENT COORDINATION</span></div><p>For immediate medical emergencies, contact local emergency services or the nearest healthcare facility first. All transfer arrangements are subject to medical assessment, operational approvals and availability.</p></div></section>
    <SiteFooter />
  </main>;
}
