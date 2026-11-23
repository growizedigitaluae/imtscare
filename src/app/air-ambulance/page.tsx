import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Globe2,
  HeartHandshake,
  Hospital,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Stethoscope,
  Truck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Worldwide Air Ambulance & Patient Transfers | IMTS CARE",
  description:
    "IMTS CARE coordinates international air ambulance services, commercial stretcher transfers and medical escort arrangements from Dubai, UAE.",
  alternates: { canonical: "/air-ambulance" },
  openGraph: {
    title: "Air Ambulance & Patient Transfers | IMTS CARE",
    description:
      "Coordinated medical transportation and international patient transfer support.",
    url: "/air-ambulance",
    type: "website",
  },
};

const coordinationServices = [
  {
    icon: PlaneTakeoff,
    number: "01",
    title: "Chartered air ambulance",
    text: "Coordination of dedicated medical flights for eligible patients requiring medical support during international air transportation.",
  },
  {
    icon: Hospital,
    number: "02",
    title: "Hospital-to-hospital transfers",
    text: "Communication and logistical coordination between referring and receiving healthcare facilities.",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Medical team arrangements",
    text: "Coordination of suitable medical personnel and equipment requirements in line with the clinical team's assessment.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Ground ambulance coordination",
    text: "Assistance coordinating ground transportation and handovers at departure and arrival locations.",
  },
];

const journeySteps = [
  {
    icon: ClipboardCheck,
    title: "Share the enquiry",
    text: "Provide the patient's current location, intended destination and initial transfer requirements.",
  },
  {
    icon: Stethoscope,
    title: "Medical information review",
    text: "The relevant clinical information is reviewed by qualified medical professionals to assess suitability and care requirements.",
  },
  {
    icon: Plane,
    title: "Plan the transfer",
    text: "Subject to assessment and availability, we coordinate the flight, medical team, equipment and required approvals.",
  },
  {
    icon: HeartHandshake,
    title: "Coordinate the handover",
    text: "We help bring together ground transport, receiving-facility communication and the practical transfer arrangements.",
  },
];

function ServiceEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="service-eyebrow">
      <span />
      {children}
    </div>
  );
}

function SiteHeader() {
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>
            <Clock3 size={14} /> International patient coordination
          </span>
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
            <Image
              src="/images/imtscare-logo.png"
              alt="IMTS CARE – International Medical Treatment Services"
              width={240}
              height={160}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/air-ambulance" className="active">Our services</Link>
            <Link href="/medical-tourism">Medical tourism</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <a
            className="nav-cta"
            href="https://wa.me/971554705602"
            target="_blank"
            rel="noreferrer"
          >
            Request assistance <ArrowUpRight size={16} />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <span className="mobile-menu-label">Menu</span>
            </summary>
            <nav aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/air-ambulance">Our services</Link>
              <Link href="/medical-tourism">Medical tourism</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/contact">Contact</Link>
              <a href="https://wa.me/971554705602" target="_blank" rel="noreferrer">
                Request assistance
              </a>
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
          <p>
            Connecting patients to medical transportation and international
            treatment coordination.
          </p>
        </div>

        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/">Home</Link>
          <Link href="/about">About IMTS CARE</Link>
          <Link href="/air-ambulance">Air ambulance</Link>
          <Link href="/medical-tourism">Medical tourism</Link>
        </div>

        <div className="footer-links">
          <strong>Air ambulance</strong>
          <a href="#coordination">Our coordination</a>
          <a href="#journey">Transfer process</a>
          <a href="#faq">Frequently asked questions</a>
          <Link href="/medical-tourism">Medical tourism</Link>
        </div>

        <div className="footer-contact">
          <strong>Contact</strong>
          <a href="tel:+971554705602">+971 55 470 5602</a>
          <a href="mailto:info@imtscare.com">info@imtscare.com</a>
          <span>RKM Building, Office 116, Dubai, UAE</span>
          <a className="footer-whatsapp" href="https://wa.me/971554705602" target="_blank" rel="noreferrer">
            WhatsApp us <ArrowUpRight size={15} />
          </a>
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

export default function AirAmbulancePage() {
  return (
    <main className="service-page">
      <SiteHeader />

      <section className="air-page-hero">
        <div className="air-page-hero-image" />
        <div className="air-page-hero-shade" />
        <div className="container air-page-hero-inner">
          <div className="air-page-hero-copy">
            <ServiceEyebrow>WORLDWIDE AIR AMBULANCE</ServiceEyebrow>
            <h1>
              Medical transport,
              <br />
              <span>coordinated with care.</span>
            </h1>
            <p>
              When a patient needs medical support to travel between locations,
              IMTS CARE helps coordinate air ambulance and suitable commercial
              flight transfer arrangements with the relevant medical teams and
              healthcare facilities.
            </p>
            <div className="air-page-actions">
              <a
                className="button button-teal"
                href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20an%20air%20ambulance%20transfer."
                target="_blank"
                rel="noreferrer"
              >
                Discuss a patient transfer <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#coordination">
                Explore our coordination <ArrowRight size={17} />
              </a>
            </div>
            <div className="air-page-trust">
              <ShieldCheck size={17} />
              Patient-focused coordination from departure to receiving facility
            </div>
          </div>

          <div className="air-page-floating">
            <div className="air-page-floating-icon">
              <PlaneTakeoff size={23} />
            </div>
            <span>INTERNATIONAL PATIENT TRANSFERS</span>
            <strong>Connecting every stage of the journey.</strong>
            <p>
              We help coordinate medical transport, ground arrangements and
              communication with the receiving facility.
            </p>
            <a href="#journey">
              See how it works <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="container air-page-hero-bottom">
          <span>DUBAI, UNITED ARAB EMIRATES</span>
          <i className="air-page-bottom-line" />
          <span>SUPPORTING INTERNATIONAL PATIENT TRANSFERS</span>
        </div>
      </section>

      <section className="air-page-intro section-pad">
        <div className="container air-page-intro-grid">
          <div>
            <ServiceEyebrow>MEDICAL TRANSPORT COORDINATION</ServiceEyebrow>
            <h2>
              A considered approach
              <br />
              <span>to every transfer.</span>
            </h2>
          </div>
          <div className="air-page-intro-copy">
            <p className="air-page-lead">
              Moving a patient by air requires careful planning, clinical
              assessment and coordination across multiple teams.
            </p>
            <p>
              IMTS CARE coordinates the practical arrangements involved in
              international patient transportation. We work with the relevant
              medical professionals, transport providers and receiving
              facilities to help organise the journey according to the
              patient's assessed needs.
            </p>
            <p>
              Each enquiry is considered individually. Transfer options depend
              on medical suitability, route feasibility, operational approvals
              and service availability.
            </p>
          </div>
        </div>
      </section>

      <section className="air-coordination section-pad" id="coordination">
        <div className="container">
          <div className="about-section-heading">
            <ServiceEyebrow>HOW WE CAN SUPPORT</ServiceEyebrow>
            <h2>
              Coordinating the details
              <br />
              <span>that bring a transfer together.</span>
            </h2>
            <p>
              From the initial enquiry to arrival, we help coordinate the
              operational details with the relevant providers and care teams.
            </p>
          </div>

          <div className="air-coordination-grid">
            {coordinationServices.map((item) => {
              const Icon = item.icon;
              return (
                <article className="air-coordination-card" key={item.number}>
                  <div className="air-coordination-card-top">
                    <span>{item.number}</span>
                    <div><Icon size={23} /></div>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="air-capability">
        <div className="air-capability-image" />
        <div className="air-capability-content">
          <ServiceEyebrow>TRANSFER OPTIONS</ServiceEyebrow>
          <h2>
            Different needs.
            <br />
            <span>Appropriate arrangements.</span>
          </h2>
          <p>
            The appropriate mode of travel depends on the patient's condition,
            clinical advice, airline requirements and destination. IMTS CARE
            helps coordinate enquiries for suitable options.
          </p>
          <ul className="air-capability-list">
            <li><CheckCircle2 size={18} /> Dedicated chartered air ambulance arrangements</li>
            <li><CheckCircle2 size={18} /> Commercial airline stretcher coordination, where approved</li>
            <li><CheckCircle2 size={18} /> Medical escort and travel assistance for suitable cases</li>
            <li><CheckCircle2 size={18} /> Ground ambulance and receiving-facility coordination</li>
          </ul>
          <small>
            All transfers are subject to medical assessment, aircraft or airline
            availability, operational approvals and route feasibility.
          </small>
        </div>
      </section>

      <section className="air-journey section-pad" id="journey">
        <div className="container">
          <div className="about-section-heading">
            <ServiceEyebrow>A CLEARER TRANSFER PROCESS</ServiceEyebrow>
            <h2>
              From first enquiry
              <br />
              <span>to coordinated arrival.</span>
            </h2>
            <p>
              Our team helps organise the practical steps while clinical
              decisions remain with qualified healthcare professionals.
            </p>
          </div>

          <div className="air-journey-grid">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="air-journey-step" key={step.title}>
                  <div className="air-journey-step-head">
                    <span>0{index + 1}</span>
                    <div><Icon size={24} /></div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="air-bedside">
        <div className="container air-bedside-inner">
          <div className="air-bedside-icon">
            <HeartHandshake size={29} />
          </div>
          <div>
            <ServiceEyebrow>COORDINATION THROUGHOUT</ServiceEyebrow>
            <h2>
              One connected journey.
              <br />
              <span>Thoughtful support at each stage.</span>
            </h2>
            <p>
              We help connect the people and arrangements involved in a
              transfer, including medical teams, transport providers, ground
              ambulance services and the receiving facility.
            </p>
          </div>
          <div className="air-bedside-points">
            <div><CheckCircle2 size={17} /> Clear communication</div>
            <div><CheckCircle2 size={17} /> Patient and family coordination</div>
            <div><CheckCircle2 size={17} /> Departure and arrival arrangements</div>
            <div><CheckCircle2 size={17} /> Provider-led clinical decisions</div>
          </div>
        </div>
      </section>

      <section className="air-faq section-pad" id="faq">
        <div className="container air-faq-grid">
          <div className="air-faq-heading">
            <ServiceEyebrow>COMMON QUESTIONS</ServiceEyebrow>
            <h2>
              Helpful information
              <br />
              <span>before you enquire.</span>
            </h2>
            <p>
              Every patient transfer is different. Our team can explain the
              information needed to assess and coordinate an enquiry.
            </p>
          </div>
          <div className="air-faq-list">
            <details>
              <summary>What information is needed for an air ambulance enquiry?<span>+</span></summary>
              <p>
                Initial details usually include the patient's current location,
                intended destination, treating facility contact details and
                relevant medical information. Further documents may be
                requested for clinical review.
              </p>
            </details>
            <details>
              <summary>Can IMTS CARE arrange transfers between hospitals?<span>+</span></summary>
              <p>
                We can help coordinate enquiries for international patient
                transfers between healthcare facilities, subject to medical
                assessment, receiving-facility acceptance and operational
                feasibility.
              </p>
            </details>
            <details>
              <summary>Are commercial airline stretcher transfers available?<span>+</span></summary>
              <p>
                Some patients may be able to travel on a commercial flight with
                an approved stretcher arrangement. This depends on clinical
                suitability and the airline's policies and approval process.
              </p>
            </details>
            <details>
              <summary>How long does it take to arrange a transfer?<span>+</span></summary>
              <p>
                Timing varies according to the patient's condition, medical
                review, route, aircraft or airline availability, permits and
                coordination requirements. A timeframe can only be discussed
                after the enquiry is reviewed.
              </p>
            </details>
            <details>
              <summary>Does IMTS CARE provide medical treatment or diagnosis?<span>+</span></summary>
              <p>
                No. IMTS CARE coordinates transportation and related
                arrangements. Medical assessment, treatment decisions and
                clinical care are the responsibility of licensed healthcare
                professionals and facilities.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="air-final-cta">
        <div className="container air-final-cta-inner">
          <div>
            <ServiceEyebrow>LET'S DISCUSS YOUR REQUIREMENTS</ServiceEyebrow>
            <h2>
              Need to coordinate
              <br />
              <span>a patient transfer?</span>
            </h2>
            <p>
              Contact our Dubai-based coordination team to discuss the
              patient's route, requirements and the next steps for an enquiry.
            </p>
          </div>
          <div className="air-final-actions">
            <a
              className="button button-teal"
              href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20discuss%20a%20patient%20transfer."
              target="_blank"
              rel="noreferrer"
            >
              Discuss a transfer <ArrowRight size={17} />
            </a>
            <a href="mailto:info@imtscare.com?subject=Air%20Ambulance%20Enquiry">
              Email your enquiry <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <div className="air-page-disclaimer">
        <div className="container">
          <ShieldCheck size={17} />
          <p>
            <strong>Important:</strong> IMTS CARE provides coordination and
            travel-related assistance. We do not provide medical advice,
            diagnosis or treatment. All clinical assessments, recommendations,
            transfer suitability and care decisions are the responsibility of
            the relevant licensed healthcare professionals and facilities.
            Transfers are subject to confirmation and availability.
          </p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
