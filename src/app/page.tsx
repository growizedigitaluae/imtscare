import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseMedical,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe2,
  HeartPulse,
  Hospital,
  Menu,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Stethoscope,
  Truck,
  UsersRound,
  Wind,
} from "lucide-react";

type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Plane,
    title: "Air Ambulance",
    description:
      "Coordinated chartered medical flights for patients who require dedicated medical support during international transportation.",
    link: "/air-ambulance",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Commercial Stretcher Transfers",
    description:
      "Medically supported patient transfers on suitable commercial flights, planned around individual travel requirements.",
    link: "#patient-transfer",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Medical Escort & Assistance",
    description:
      "Coordination of medical personnel and travel assistance for patients who need support while travelling.",
    link: "#patient-transfer",
  },
  {
    number: "04",
    icon: Hospital,
    title: "Medical Tourism",
    description:
      "Support with exploring treatment options, connecting with hospitals and coordinating the patient journey abroad.",
    link: "/medical-tourism",
  },
];

const specialties = [
  "Oncology & Cancer Care",
  "Cardiology & Cardiac Surgery",
  "Neurology & Neurosurgery",
  "Orthopaedics & Spine",
  "IVF & Fertility Treatment",
  "Organ Transplantation",
  "Paediatrics & Neonatology",
  "Gastroenterology",
  "General & Laparoscopic Surgery",
  "Nephrology & Urology",
  "Endocrinology & Diabetes",
  "Ophthalmology",
];

const destinations = ["United Arab Emirates", "India", "Pakistan", "Bangladesh", "Thailand", "Singapore", "Philippines", "Sri Lanka"];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="section-eyebrow">
      <span />
      {children}
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span><Clock3 size={14} /> International patient coordination</span>
          <div className="topline-right">
            <a href="mailto:info@imtscare.com">info@imtscare.com</a>
            <span className="topline-divider" />
            <a href="tel:+971554705602">+971 55 470 5602</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="IMTS CARE home">
            <Image src="/images/imtscare-logo.png" alt="IMTS CARE – International Medical Treatment Services" width={240} height={160} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/" className="active">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/air-ambulance">Our services</Link>
            <Link href="/medical-tourism">Medical tourism</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="nav-cta" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">
            Request assistance <ArrowUpRight size={16} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><Menu size={24} /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a><a href="/about">About us</a><a href="/air-ambulance">Our services</a><Link href="/medical-tourism">Medical tourism</Link><a href="/destinations">Destinations</a><Link href="/contact">Contact</Link>
              <a href="https://wa.me/971554705602">Request assistance</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  return (
    <main id="home">
      <Header />
      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse-dot" /> INTERNATIONAL MEDICAL TRANSPORT & CARE</div>
            <h1>Global medical care.<br /><em>Without borders.</em></h1>
            <p className="hero-lead">Connecting patients to the care they need — with coordinated air ambulance services, medical transfers and international treatment support.</p>
            <div className="hero-actions">
              <a className="button button-teal" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">Request medical assistance <ArrowRight size={18} /></a>
              <a className="button button-outline" href="#services">Explore our services <ChevronRight size={17} /></a>
            </div>
            <div className="hero-note"><ShieldCheck size={17} /> Compassionate coordination at every step of the journey</div>
          </div>
          <div className="hero-side-card">
            <div className="side-card-icon"><PlaneTakeoff size={21} /></div>
            <div className="side-card-label">YOUR JOURNEY, OUR PRIORITY</div>
            <div className="side-card-title">Care that travels with you.</div>
            <p>From initial coordination to arrival at your destination, we help bring the moving parts together.</p>
            <a href="#patient-transfer">Discover our approach <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>BASED IN DUBAI · CONNECTED WORLDWIDE</span>
          <span className="hero-bottom-line" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div className="container trust-grid">
          <div className="trust-item"><div className="trust-icon"><Clock3 /></div><div><strong>10+ years</strong><span>Experience in the field*</span></div></div>
          <div className="trust-item"><div className="trust-icon"><Hospital /></div><div><strong>110+ hospitals</strong><span>Partner network*</span></div></div>
          <div className="trust-item"><div className="trust-icon"><Globe2 /></div><div><strong>Global reach</strong><span>Cross-border coordination</span></div></div>
          <div className="trust-item"><div className="trust-icon"><HeartPulse /></div><div><strong>Patient first</strong><span>Care with compassion</span></div></div>
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="intro-visual">
            <div className="intro-image" />
            <div className="intro-stamp"><span>IMTS</span><strong>CARE</strong><small>CONNECTING YOU TO WORLD-CLASS CARE</small></div>
            <div className="intro-caption"><span className="caption-mark">“</span><span>We take care<br />of the journey.</span></div>
          </div>
          <div className="intro-copy">
            <SectionEyebrow>WHO WE ARE</SectionEyebrow>
            <h2>More than a journey.<br /><span>A connection to care.</span></h2>
            <p className="large-copy">IMTS CARE is an international medical tourism and air ambulance coordination company based in Dubai, UAE.</p>
            <p>Through a network of multispecialty hospitals and medical facilities, we help patients explore suitable treatment options and coordinate travel between destinations. Our services include chartered air ambulance arrangements, medically supported commercial flights and international treatment coordination.</p>
            <p>We bring together the practical details — from hospital communication and travel planning to local assistance — so patients and families have a clearer path forward.</p>
            <a className="text-link" href="/about">Discover how we help <ArrowRight size={17} /></a>
            <div className="values-row">
              <div><CheckCircle2 size={17} /><span>Compassionate care</span></div>
              <div><CheckCircle2 size={17} /><span>Integrity</span></div>
              <div><CheckCircle2 size={17} /><span>Collaboration</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-heading centered">
            <SectionEyebrow>WHAT WE DO</SectionEyebrow>
            <h2>Coordinated care for<br /><span>every step of the journey.</span></h2>
            <p>Whether a patient needs medical transportation or support accessing treatment abroad, our team helps coordinate the next steps.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a className="service-card" href={service.link} key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><div className="service-icon"><Icon size={25} strokeWidth={1.7} /></div></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-link">Explore service <ArrowUpRight size={17} /></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="air-section" id="air-ambulance">
        <div className="air-image" />
        <div className="air-content-wrap">
          <div className="air-content">
            <SectionEyebrow>WORLDWIDE AIR AMBULANCE</SectionEyebrow>
            <h2>When every detail<br />of the journey matters.</h2>
            <p>For patients who need dedicated medical support during air travel, IMTS CARE coordinates chartered air ambulance arrangements with attention to the patient's requirements, route and receiving facility.</p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} /> Flight and route coordination</li>
              <li><CheckCircle2 size={18} /> Medical team and equipment arrangements</li>
              <li><CheckCircle2 size={18} /> Ground ambulance and hospital handover coordination</li>
            </ul>
            <a className="button button-navy" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">Discuss a patient transfer <ArrowRight size={18} /></a>
            <a className="text-link" href="/air-ambulance">Explore worldwide air ambulance services <ArrowRight size={17} /></a>
            <small>All transfers are subject to medical assessment, aircraft availability, operational approvals and route feasibility.</small>
          </div>
        </div>
      </section>

      <section className="transfer-section section-pad" id="patient-transfer">
        <div className="container transfer-grid">
          <div className="transfer-copy">
            <SectionEyebrow>MEDICAL TRANSPORT OPTIONS</SectionEyebrow>
            <h2>Different needs.<br /><span>Thoughtful arrangements.</span></h2>
            <p>Not every patient requires the same mode of travel. We help coordinate an appropriate transfer option based on the patient's condition, medical advice and travel requirements.</p>
            <div className="transfer-option"><div className="option-icon"><Plane size={21} /></div><div><h3>Chartered air ambulance</h3><p>A dedicated aircraft arrangement with medical support for eligible patient transfers.</p></div></div>
            <div className="transfer-option"><div className="option-icon"><BriefcaseMedical size={21} /></div><div><h3>Commercial airline stretcher</h3><p>Coordination with airlines for approved stretcher cases and required medical arrangements.</p></div></div>
            <div className="transfer-option"><div className="option-icon"><UsersRound size={21} /></div><div><h3>Wheelchair and medical escort</h3><p>Travel assistance and medical escort coordination for suitable commercial journeys.</p></div></div>
          </div>
          <div className="transfer-visual">
            <div className="transfer-photo" />
            <div className="transfer-floating"><div className="floating-icon"><Truck size={22} /></div><div><strong>Bed-to-bed coordination</strong><span>Connecting each stage of the transfer</span></div></div>
            <div className="transfer-vertical-label">PATIENT TRANSFER SERVICES · IMTS CARE</div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <div className="section-heading centered light-heading">
            <SectionEyebrow>HOW WE WORK</SectionEyebrow>
            <h2>A clearer path through<br /><span>complex arrangements.</span></h2>
            <p>Our coordination process is designed to keep patients, families and care providers informed at each stage.</p>
          </div>
          <div className="process-grid">
            <div className="process-step"><span>01</span><div className="process-icon"><HeartPulse /></div><h3>Understand the need</h3><p>We gather the initial travel and coordination requirements and identify the information needed to proceed.</p></div>
            <div className="process-step"><span>02</span><div className="process-icon"><Stethoscope /></div><h3>Coordinate assessment</h3><p>Medical suitability and transfer requirements are reviewed with the relevant treating professionals.</p></div>
            <div className="process-step"><span>03</span><div className="process-icon"><PlaneTakeoff /></div><h3>Plan the journey</h3><p>We coordinate suitable transport, route details, receiving facility communication and ground arrangements.</p></div>
            <div className="process-step"><span>04</span><div className="process-icon"><ShieldCheck /></div><h3>Support the handover</h3><p>We help coordinate arrival and the next stage of the patient's journey with the receiving team.</p></div>
          </div>
        </div>
      </section>

      <section className="tourism-section section-pad" id="medical-tourism">
        <div className="container tourism-grid">
          <div className="tourism-visual"><div className="tourism-photo" /><div className="tourism-note"><Globe2 size={20} /><span>Connecting care<br />across borders.</span></div></div>
          <div className="tourism-copy">
            <SectionEyebrow>INTERNATIONAL MEDICAL TOURISM</SectionEyebrow>
            <h2>Explore treatment options<br /><span>beyond borders.</span></h2>
            <p>Finding the right healthcare provider in another country can feel complicated. IMTS CARE helps patients navigate the coordination process by connecting them with hospitals and supporting the practical arrangements around treatment travel.</p>
            <div className="tourism-features">
              <div><Hospital size={19} /><span>Hospital and specialist coordination</span></div>
              <div><BriefcaseMedical size={19} /><span>Treatment enquiry and appointment support</span></div>
              <div><Plane size={19} /><span>Travel, accommodation and local assistance</span></div>
              <div><Wind size={19} /><span>Multilingual coordination support</span></div>
            </div>
            <Link className="button button-teal" href="/medical-tourism">Explore medical tourism <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="specialties-section section-pad">
        <div className="container specialties-grid">
          <div className="specialties-intro">
            <SectionEyebrow>TREATMENT AREAS</SectionEyebrow>
            <h2>Care across a wide<br /><span>range of specialties.</span></h2>
            <p>Our company profile highlights a broad range of treatment areas through our hospital network. Availability and suitability depend on each patient's needs and the relevant medical provider.</p>
            <Link className="text-link" href="/contact">Enquire about treatment options <ArrowRight size={17} /></Link>
          </div>
          <div className="specialty-list">
            {specialties.map((item) => <div className="specialty-item" key={item}><span className="specialty-check"><CheckCircle2 size={16} /></span>{item}<ArrowUpRight size={15} /></div>)}
          </div>
        </div>
      </section>

      <section className="destinations-section section-pad" id="destinations">
        <div className="container destinations-grid">
          <div className="destinations-copy">
            <SectionEyebrow>OUR GLOBAL REACH</SectionEyebrow>
            <h2>Connecting care<br /><span>across borders.</span></h2>
            <p>IMTS CARE's company profile identifies active coordination regions across the Middle East and Asia. Our team helps bring together destination, provider and travel arrangements based on each enquiry.</p>
            <div className="destination-tags">{destinations.map((destination) => <span key={destination}><span className="tag-dot" />{destination}</span>)}</div>
          </div>
          <div
            className="map-card"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: 0,
            }}
          >
            <Image
              src="/images/destinations-globe.png"
              alt="Colourful globe illustrating IMTS CARE's international patient coordination reach across the Middle East and Asia"
              width={1120}
              height={630}
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                minHeight: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="promise-section">
        <div className="container promise-inner">
          <div><SectionEyebrow>THE IMTS CARE PROMISE</SectionEyebrow><h2>Compassion in every connection.</h2><p>We believe every patient and family deserves clear communication, respectful support and thoughtful coordination throughout the journey.</p></div>
          <div className="promise-values"><div><HeartPulse /><strong>Compassionate care</strong></div><div><BadgeCheck /><strong>Excellence in service</strong></div><div><UsersRound /><strong>Collaboration</strong></div><div><ShieldCheck /><strong>Integrity</strong></div></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <SectionEyebrow>LET'S TALK</SectionEyebrow>
            <h2>How can we help<br /><span>you move forward?</span></h2>
            <p>Contact our coordination team to discuss an air ambulance enquiry, a patient transfer or international treatment arrangements.</p>
            <div className="contact-detail"><div className="contact-detail-icon"><PhoneIcon /></div><div><small>CALL OUR TEAM</small><a href="tel:+971554705602">+971 55 470 5602</a></div></div>
            <div className="contact-detail"><div className="contact-detail-icon"><MailIcon /></div><div><small>EMAIL US</small><a href="mailto:info@imtscare.com">info@imtscare.com</a></div></div>
            <div className="contact-detail"><div className="contact-detail-icon"><Globe2 size={20} /></div><div><small>OUR LOCATION</small><span>RKM Building, Office 116, Dubai, UAE</span></div></div>
          </div>
          <div className="contact-panel">
            <div className="panel-top"><span>IMTS CARE</span><span className="panel-dot" /></div>
            <h3>Start a conversation</h3>
            <p>Our team can guide you through the information needed for your enquiry.</p>
            <a className="contact-action" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer"><span className="whatsapp-mark">W</span><span><strong>Chat with our team on WhatsApp</strong><small>Open a direct conversation</small></span><ArrowUpRight size={19} /></a>
            <a className="contact-action" href="mailto:info@imtscare.com?subject=IMTS%20CARE%20Enquiry"><span className="mail-mark"><MailIcon /></span><span><strong>Send us an email</strong><small>Share your enquiry details</small></span><ArrowUpRight size={19} /></a>
            <div className="panel-disclaimer"><ShieldCheck size={16} /> For urgent medical emergencies, contact your local emergency services first. IMTS CARE enquiries are subject to assessment and service availability.</div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><Image src="/images/imtscare-logo.png" alt="IMTS CARE" width={190} height={127} /><p>Connecting patients to medical transportation and international treatment coordination.</p></div>
          <div className="footer-links"><strong>Explore</strong><a href="/about">About IMTS CARE</a><a href="/air-ambulance">Our services</a><Link href="/medical-tourism">Medical tourism</Link><a href="/destinations">Destinations</a></div>
          <div className="footer-links"><strong>Our services</strong><a href="#air-ambulance">Air ambulance</a><a href="#patient-transfer">Patient transfers</a><Link href="/medical-tourism">Treatment coordination</Link><Link href="/contact">Contact our team</Link></div>
          <div className="footer-contact"><strong>Contact</strong><a href="tel:+971554705602">+971 55 470 5602</a><a href="mailto:info@imtscare.com">info@imtscare.com</a><span>Dubai, United Arab Emirates</span><a className="footer-whatsapp" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 IMTS CARE. All rights reserved.</span><span>International Medical Treatment Services</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

function PhoneIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5 8 3l2.2 4.4-1.8 1.8a14 14 0 0 0 6.4 6.4l1.8-1.8L21 16l-1.5 3c-.4.8-1.3 1.2-2.2 1A18.5 18.5 0 0 1 4 6.7c-.2-.9.2-1.8 1-2.2Z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>; }
