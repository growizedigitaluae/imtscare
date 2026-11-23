import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Globe2,
  HandHeart,
  Hotel,
  Languages,
  MapPinned,
  Plane,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Tourism & Treatment Coordination | IMTS CARE",
  description:
    "Explore international treatment options with IMTS CARE. We help coordinate hospital enquiries, specialist appointments and practical travel arrangements.",
  alternates: { canonical: "/medical-tourism" },
  openGraph: {
    title: "Medical Tourism | IMTS CARE",
    description:
      "Patient-focused support for exploring treatment options and coordinating healthcare journeys across borders.",
    url: "/medical-tourism",
    type: "website",
  },
};

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Hospital coordination",
    description:
      "Connect your enquiry with hospitals within our network and receive help with the information needed to explore available options.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Specialist coordination",
    description:
      "We can help coordinate enquiries and appointment requests with relevant departments and specialists.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Treatment arrangements",
    description:
      "We help organise the non-clinical details around treatment enquiries, appointment schedules and provider communication.",
  },
  {
    icon: Plane,
    number: "04",
    title: "Travel assistance",
    description:
      "Coordinate practical travel requirements and arrival arrangements in line with the patient's circumstances.",
  },
  {
    icon: Hotel,
    number: "05",
    title: "Accommodation & transport",
    description:
      "Where available, we can assist with local transportation and accommodation arrangements for patients and accompanying family members.",
  },
  {
    icon: Languages,
    number: "06",
    title: "Language support",
    description:
      "Multilingual coordination and translation assistance can help patients and families communicate during the process.",
  },
];

const steps = [
  {
    icon: HandHeart,
    title: "Tell us what you need",
    text: "Share your enquiry, preferred destination and any initial information relevant to your treatment journey.",
  },
  {
    icon: ClipboardList,
    title: "Share available information",
    text: "We explain what details or medical documents may be required by the healthcare provider to review the enquiry.",
  },
  {
    icon: Building2,
    title: "Coordinate with providers",
    text: "Where appropriate, we help direct the enquiry to a relevant hospital or department and coordinate communication.",
  },
  {
    icon: CalendarCheck,
    title: "Arrange the practical details",
    text: "Subject to provider response and availability, we can help coordinate appointments and related travel arrangements.",
  },
  {
    icon: Plane,
    title: "Prepare for your journey",
    text: "We help bring together the agreed travel, accommodation and local support details before departure.",
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

const destinations = [
  "United Arab Emirates",
  "India",
  "Pakistan",
  "Bangladesh",
  "Thailand",
  "Singapore",
  "Philippines",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mt-eyebrow"><span />{children}</div>;
}

function SiteHeader() {
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>International patient coordination</span>
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
            <Image src="/images/imtscare-logo.png" alt="IMTS CARE" width={240} height={160} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/air-ambulance">Our services</Link>
            <Link href="/medical-tourism" className="active">Medical tourism</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="nav-cta" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">
            Request assistance <ArrowUpRight size={16} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span className="mobile-menu-label">Menu</span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/air-ambulance">Our services</Link>
              <Link href="/medical-tourism">Medical tourism</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/contact">Contact</Link>
              <a href="https://wa.me/971554705602" target="_blank" rel="noreferrer">Request assistance</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Image src="/images/imtscare-logo.png" alt="IMTS CARE" width={180} height={120} />
          <p>Connecting patients to medical transportation and international treatment coordination.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/">Home</Link>
          <Link href="/about">About IMTS CARE</Link>
          <Link href="/air-ambulance">Air ambulance</Link>
          <Link href="/medical-tourism">Medical tourism</Link>
        </div>
        <div className="footer-links">
          <strong>Medical tourism</strong>
          <a href="#coordination">Our support</a>
          <a href="#journey">Patient journey</a>
          <a href="#specialties">Treatment areas</a>
          <Link href="/air-ambulance">Patient transfer services</Link>
        </div>
        <div className="footer-contact">
          <strong>Contact</strong>
          <a href="tel:+971554705602">+971 55 470 5602</a>
          <a href="mailto:info@imtscare.com">info@imtscare.com</a>
          <span>RKM Building, Office 116, Dubai, UAE</span>
          <a className="footer-whatsapp" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 IMTS CARE. All rights reserved.</span>
        <span>International Medical Treatment Services</span>
        <Link href="/">Back to home ↑</Link>
      </div>
    </footer>
  );
}

export default function MedicalTourismPage() {
  return (
    <main className="medical-tourism-page">
      <SiteHeader />

      <section className="mt-hero">
        <div className="mt-hero-image" />
        <div className="mt-hero-shade" />
        <div className="mt-hero-orbit mt-hero-orbit-one" />
        <div className="mt-hero-orbit mt-hero-orbit-two" />
        <div className="container mt-hero-grid">
          <div className="mt-hero-copy">
            <Eyebrow>INTERNATIONAL MEDICAL TOURISM</Eyebrow>
            <h1
              style={{
                fontSize: "clamp(2.35rem, 3.7vw, 3.65rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.045em",
                maxWidth: "760px",
              }}
            >
              Explore treatment options.
              <br />
              <span>We coordinate your care journey.</span>
            </h1>
            <p>
              Exploring healthcare in another country can involve many moving parts.
              IMTS CARE helps patients and families coordinate hospital enquiries,
              specialist appointments and practical travel arrangements across borders.
            </p>
            <div className="mt-hero-actions">
              <a className="button button-teal" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20assistance%20with%20medical%20tourism." target="_blank" rel="noreferrer">
                Discuss your enquiry <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#coordination">Explore our support <ArrowRight size={17} /></a>
            </div>
            <div className="mt-hero-note"><ShieldCheck size={17} /> Clear communication. Thoughtful coordination. Patient-focused support.</div>
          </div>
          <div className="mt-hero-card">
            <div className="mt-hero-card-icon"><Globe2 size={23} /></div>
            <span>YOUR INTERNATIONAL CARE JOURNEY</span>
            <strong>One coordinated point of contact.</strong>
            <p>We help bring patients, families, healthcare providers and travel arrangements together.</p>
            <a href="#journey">See how it works <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="container mt-hero-bottom"><span>DUBAI, UNITED ARAB EMIRATES</span><i /><span>SUPPORTING INTERNATIONAL PATIENT ENQUIRIES</span></div>
      </section>

      <section className="mt-intro section-pad">
        <div className="container mt-intro-grid">
          <div className="mt-intro-visual">
            <div className="mt-intro-photo" role="img" aria-label="Modern international hospital interior" />
            <div className="mt-intro-stamp"><Globe2 size={20} /><span>CARE<br />WITHOUT<br />BORDERS</span></div>
            <div className="mt-intro-caption"><strong>Supporting the details<br />around your care journey.</strong></div>
          </div>
          <div className="mt-intro-copy">
            <Eyebrow>A MORE CONNECTED EXPERIENCE</Eyebrow>
            <h2>Healthcare journeys<br /><span>can cross borders.</span></h2>
            <p className="mt-lead">When considering treatment abroad, finding information and coordinating the practical details can feel overwhelming.</p>
            <p>IMTS CARE supports the non-clinical coordination process by helping patients communicate with healthcare providers and organise related arrangements. We aim to make the steps clearer for patients and the people supporting them.</p>
            <div className="mt-intro-points">
              <div><CheckCircle2 size={17} /> A coordinated point of contact</div>
              <div><CheckCircle2 size={17} /> Support for patients and families</div>
              <div><CheckCircle2 size={17} /> Practical arrangements across the journey</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-services section-pad" id="coordination">
        <div className="container">
          <div className="mt-section-heading">
            <Eyebrow>HOW WE CAN SUPPORT YOU</Eyebrow>
            <h2>Coordination beyond<br /><span>the hospital appointment.</span></h2>
            <p>Our role is to help organise the practical steps around an international treatment enquiry. The exact support available depends on the destination, provider and individual requirements.</p>
          </div>
          <div className="mt-service-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <article className="mt-service-card" key={item.number}>
                  <div className="mt-service-top"><div className="mt-service-icon"><Icon size={22} /></div><span>{item.number}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-journey section-pad" id="journey">
        <div className="container">
          <div className="mt-section-heading mt-heading-light">
            <Eyebrow>A CLEARER WAY FORWARD</Eyebrow>
            <h2>Your journey, <span>step by step.</span></h2>
            <p>Every enquiry is different. Our coordination approach is designed to help patients understand the next practical step.</p>
          </div>
          <div className="mt-journey-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="mt-journey-step" key={step.title}>
                  <div className="mt-journey-icon"><Icon size={23} /></div>
                  <span className="mt-step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-specialties section-pad" id="specialties">
        <div className="container mt-specialties-grid">
          <div className="mt-specialties-copy">
            <Eyebrow>TREATMENT AREAS</Eyebrow>
            <h2>Explore care across<br /><span>multiple specialties.</span></h2>
            <p>IMTS CARE can help direct enquiries to relevant departments within its healthcare network. Treatment availability, clinical suitability and decisions are determined by the treating healthcare providers.</p>
            <a className="mt-inline-link" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20treatment%20options." target="_blank" rel="noreferrer">Ask about a treatment area <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-specialty-list">
            {specialties.map((item) => <div className="mt-specialty-item" key={item}><CheckCircle2 size={17} /><span>{item}</span><ArrowUpRight size={14} /></div>)}
          </div>
        </div>
      </section>

      <section className="mt-destinations section-pad" id="destinations">
        <div className="container mt-destinations-grid">
          <div className="mt-destinations-copy">
            <Eyebrow>INTERNATIONAL CONNECTIONS</Eyebrow>
            <h2>Explore possibilities<br /><span>across borders.</span></h2>
            <p>IMTS CARE's international coordination profile includes the following countries and regions. The availability of specific hospitals, specialists and services is confirmed individually for each enquiry.</p>
            <div className="mt-destination-tags">
              {destinations.map((country) => <span key={country}><i />{country}</span>)}
            </div>
          </div>
          <div className="mt-destination-visual">
            <div className="mt-destination-photo" role="img" aria-label="Airplane flying above clouds" />
            <div className="mt-destination-overlay"><Globe2 size={26} /><span>INTERNATIONAL<br />PATIENT COORDINATION</span></div>
            <div className="mt-destination-caption">Connecting patients, providers and practical arrangements.</div>
          </div>
        </div>
      </section>

      <section className="mt-promise">
        <div className="container mt-promise-inner">
          <div><Eyebrow>OUR COMMITMENT</Eyebrow><h2>Patient-focused support.<br /><span>Clear and considered coordination.</span></h2><p>We understand that seeking treatment abroad is a significant decision. Our team aims to communicate clearly, respect each patient's circumstances and help coordinate the practical details.</p></div>
          <div className="mt-promise-points">
            <div><BadgeCheck size={21} /><span>Transparent communication</span></div>
            <div><UsersRound size={21} /><span>Support for families and caregivers</span></div>
            <div><MapPinned size={21} /><span>Practical journey coordination</span></div>
            <div><ShieldCheck size={21} /><span>Respect for provider-led medical decisions</span></div>
          </div>
        </div>
      </section>

      <section className="mt-final-cta section-pad">
        <div className="container mt-final-cta-inner">
          <div><Eyebrow>LET'S START WITH A CONVERSATION</Eyebrow><h2>Considering treatment<br /><span>in another country?</span></h2><p>Tell us a little about what you are looking for. Our team can explain the information needed to begin coordinating your enquiry.</p></div>
          <div className="mt-final-actions">
            <a className="button button-teal" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20discuss%20medical%20tourism%20support." target="_blank" rel="noreferrer">Talk to our team <ArrowRight size={17} /></a>
            <a href="mailto:info@imtscare.com?subject=Medical%20Tourism%20Enquiry">Email your enquiry <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <div className="mt-disclaimer"><div className="container"><ShieldCheck size={17} /><p><strong>Important:</strong> IMTS CARE provides coordination and travel-related assistance. We do not provide medical advice, diagnosis or treatment. All clinical assessments, recommendations, treatment decisions and outcomes are the responsibility of the relevant licensed healthcare professionals and facilities. Service availability is subject to confirmation.</p></div></div>

      <SiteFooter />
    </main>
  );
}
