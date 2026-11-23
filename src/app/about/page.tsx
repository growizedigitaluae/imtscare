import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  HandHeart,
  HeartHandshake,
  Hospital,
  Languages,
  MapPinned,
  Plane,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About IMTS CARE | International Medical Treatment Services",
  description:
    "Learn about IMTS CARE, a Dubai-based medical tourism and air ambulance coordination company supporting international patient transfers and treatment journeys.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About IMTS CARE | Connecting You to World-Class Care",
    description:
      "Discover IMTS CARE's approach to medical transportation, international treatment coordination and patient support.",
    url: "/about",
    type: "website",
  },
};

const values = [
  {
    number: "01",
    icon: HandHeart,
    title: "Compassionate care",
    description:
      "We recognise the personal and emotional demands that can come with seeking treatment or arranging medical travel across borders.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Excellence in service",
    description:
      "We focus on thoughtful coordination, clear communication and careful attention to the practical details of each journey.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Collaboration",
    description:
      "We bring patients, families, medical providers and travel partners together to help coordinate the next steps.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Integrity",
    description:
      "We aim to communicate clearly about the arrangements, options and limitations relevant to every enquiry.",
  },
];

const challenges = [
  {
    icon: Hospital,
    title: "Finding a suitable medical facility",
    description:
      "Identifying a hospital or specialist in an unfamiliar destination can be difficult. IMTS CARE helps connect enquiries with facilities in its hospital network.",
  },
  {
    icon: Languages,
    title: "Language and communication",
    description:
      "Different languages can make coordination harder. The company profile describes multilingual support and translation assistance as part of its approach.",
  },
  {
    icon: Plane,
    title: "Patient transportation",
    description:
      "Patients may need a chartered air ambulance, a commercial flight stretcher or a supported wheelchair journey, depending on individual requirements and assessment.",
  },
  {
    icon: MapPinned,
    title: "Local travel and accommodation",
    description:
      "The team can help coordinate practical arrangements such as local transportation and nearby lodging, subject to destination and availability.",
  },
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

const team = [
  {
    name: "Dr Jai Prakash Tak",
    role: "Medical Director · Anesthesiologist",
    image: "/images/team/dr-jai-prakash-tak.webp",
    alt: "Dr Jai Prakash Tak, Medical Director and Anesthesiologist",
  },
  {
    name: "Rameez Raza",
    role: "General Manager",
    image: "/images/team/rameez-raza.webp",
    alt: "Rameez Raza, General Manager",
  },
  {
    name: "Ramakant Parashar",
    role: "International Case Manager",
    image: "/images/team/ramakant-parashar.webp",
    alt: "Ramakant Parashar, International Case Manager",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="about-eyebrow"><span />{children}</div>;
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
            <Link href="/about" className="active">About us</Link>
            <Link href="/air-ambulance">Our services</Link>
            <Link href="/medical-tourism">Medical tourism</Link>
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
          <strong>About IMTS CARE</strong>
          <a href="#our-approach">Our approach</a>
          <a href="#our-promise">Our promise</a>
          <a href="#our-team">Our team</a>
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

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <Eyebrow>ABOUT IMTS CARE</Eyebrow>
            <h1 className="about-hero-title">
  Connecting you to world-class care.
  <span> Supporting every step of your journey.</span>
</h1>
            <p>
              IMTS CARE is a Dubai-based medical tourism and air ambulance
              coordination company. We help patients and families navigate
              international treatment journeys and medical transportation
              arrangements with practical, compassionate support.
            </p>
            <div className="about-hero-actions">
              <a className="button button-teal" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noreferrer">
                Speak with our team <ArrowRight size={17} />
              </a>
              <a className="about-text-link" href="#our-approach">Discover our approach <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-hero-meta"><span /> DUBAI, UNITED ARAB EMIRATES <b>·</b> INTERNATIONAL COORDINATION</div>
          </div>
          <div className="about-hero-visual">
            <div className="about-hero-photo" role="img" aria-label="Medical professionals in a modern healthcare environment" />
            <div className="about-hero-float">
              <div className="about-float-icon"><Globe2 size={22} /></div>
              <span>OUR ROLE</span>
              <strong>Bringing the journey together.</strong>
              <p>Connecting patients, healthcare providers and travel arrangements across borders.</p>
            </div>
            <div className="about-photo-caption">INTERNATIONAL MEDICAL TREATMENT SERVICES</div>
          </div>
        </div>
      </section>

      <section className="about-proof-strip" aria-label="Company information">
        <div className="container about-proof-grid">
          <div><strong>10+ years</strong><span>Experience highlighted in the company profile</span></div>
          <div><strong>110+ hospitals</strong><span>Hospital partnerships stated in the profile</span></div>
          <div><strong>Dubai, UAE</strong><span>Company base</span></div>
          <div><strong>Across borders</strong><span>Patient travel coordination</span></div>
        </div>
      </section>

      <section className="about-story section-pad" id="our-approach">
        <div className="container about-story-grid">
          <div className="about-story-visual">
            <div className="about-story-photo" role="img" aria-label="Healthcare professional discussing care with a patient" />
            <div className="about-story-stamp"><span>IMTS</span><strong>CARE</strong><small>CONNECTING YOU TO WORLD-CLASS CARE</small></div>
            <div className="about-story-note"><span>“</span><strong>We take care<br />of the journey.</strong></div>
          </div>
          <div className="about-story-copy">
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2>More than a journey.<br /><span>A connection to care.</span></h2>
            <p className="about-lead">
              The IMTS CARE company profile describes a specialist focus on
              medical tourism and air ambulance services, supported by a
              network of multispecialty hospitals and medical facilities.
            </p>
            <p>
              The team helps patients explore treatment options that may be
              suitable for their needs and budget, and coordinates the practical
              arrangements involved in travelling between destinations. These
              arrangements can include chartered air ambulance transfers,
              commercial flights with stretcher support and coordination with
              healthcare facilities.
            </p>
            <p>
              From the first enquiry through travel planning and local support,
              IMTS CARE aims to make complex arrangements easier for patients
              and the people supporting them.
            </p>
            <div className="about-story-signature"><span /> PATIENT-FOCUSED COORDINATION FROM DUBAI
            </div>
          </div>
        </div>
      </section>

      <section className="about-challenges section-pad">
        <div className="container">
          <div className="about-section-heading">
            <Eyebrow>HOW WE HELP</Eyebrow>
            <h2>International treatment can be complex.<br /><span>Coordination makes a difference.</span></h2>
            <p>
              The company profile identifies several practical challenges
              patients may face when seeking treatment in another country.
              IMTS CARE's role is to help coordinate the arrangements around them.
            </p>
          </div>
          <div className="about-challenge-grid">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="about-challenge-card" key={item.title}>
                  <div className="about-challenge-top"><span>0{index + 1}</span><div><Icon size={23} /></div></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="about-solution-band">
            <div className="about-solution-icon"><ShieldCheck size={25} /></div>
            <div>
              <strong>One coordinated patient journey</strong>
              <p>Hospital connections, transfer planning, local transport and language support brought together around the enquiry.</p>
            </div>
            <Link href="/air-ambulance">Explore transfer services <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="about-promise section-pad" id="our-promise">
        <div className="container">
          <div className="about-section-heading about-light-heading">
            <Eyebrow>THE IMTS CARE PROMISE</Eyebrow>
            <h2>Principles that guide<br /><span>the way we work.</span></h2>
            <p>The company profile sets out four values that shape the IMTS CARE promise.</p>
          </div>
          <div className="about-values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article className="about-value-card" key={item.number}>
                  <div className="about-value-top"><span>{item.number}</span><Icon size={27} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-global section-pad">
        <div className="container about-global-grid">
          <div className="about-global-copy">
            <Eyebrow>OUR GLOBAL REACH</Eyebrow>
            <h2>Connecting care<br /><span>across borders.</span></h2>
            <p>
              The global reach map in the company profile identifies the United
              Arab Emirates, India, Pakistan, Bangladesh, Thailand, Singapore
              and the Philippines as IMTS CARE coordination regions.
            </p>
            <div className="about-country-list">
              {destinations.map((country) => <span key={country}><i />{country}</span>)}
            </div>
            <p className="about-global-note">
              The profile also describes coordination with partner government
              hospitals and embassies for certain long-term expatriate
              rehabilitation cases in India, Bangladesh, Sri Lanka, the
              Philippines and Pakistan. Specific arrangements depend on
              eligibility, partner availability and case review.
            </p>
          </div>
          <div className="about-global-visual">
            <div className="about-global-image" role="img" aria-label="Global air travel routes above the clouds" />
            <div className="about-global-overlay">
              <div><Globe2 size={34} /><span>INTERNATIONAL PATIENT COORDINATION</span></div>
              <strong>Care connections<br />without borders.</strong>
            </div>
            <div className="about-global-caption"><Plane size={15} /> DUBAI · CONNECTED WORLDWIDE</div>
          </div>
        </div>
      </section>

      <section className="about-team section-pad" id="our-team">
        <div className="container">
          <div className="about-section-heading">
            <Eyebrow>THE PEOPLE BEHIND IMTS CARE</Eyebrow>
            <h2>Experience, coordination<br /><span>and a shared commitment.</span></h2>
            <p>
              The company profile introduces the following members of the
              management and coordination team.
            </p>
          </div>
          <div className="about-team-grid">
            {team.map((member) => (
              <article className="about-team-card" key={member.name}>
                <div className="about-team-image">
                  <Image src={member.image} alt={member.alt} width={615} height={618} sizes="(max-width: 700px) 90vw, 340px" />
                </div>
                <div className="about-team-info">
                  <span>IMTS CARE TEAM</span>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="about-team-note">
            The company profile also refers to doctors, paramedics and support
            staff working together to coordinate patient attention and
            transportation. Team roles and availability should be reconfirmed
            with IMTS CARE before publication.
          </p>
        </div>
      </section>

      <section className="about-rehab">
        <div className="container about-rehab-grid">
          <div className="about-rehab-mark"><UsersRound size={36} /></div>
          <div className="about-rehab-copy">
            <Eyebrow>SUPPORT BEYOND THE JOURNEY</Eyebrow>
            <h2>Rehabilitation coordination<br /><span>for expatriate patients.</span></h2>
            <p>
              The company profile describes a support pathway for expatriate
              patients who need long-term treatment and may need relocation to
              India when family support is unavailable. It outlines coordination
              with embassies, rehabilitation centres and partner government
              hospitals to help trace relatives, coordinate admissions and
              support transitions of care.
            </p>
            <p className="about-rehab-disclaimer">
              This is a case-dependent coordination service, not a guarantee of
              admission, free treatment or a particular clinical outcome.
              Eligibility, availability and costs must be confirmed for each case.
            </p>
          </div>
          <div className="about-rehab-side">
            <div><CheckCircle2 size={18} /><span>Embassy communication coordination</span></div>
            <div><CheckCircle2 size={18} /><span>Rehabilitation centre coordination</span></div>
            <div><CheckCircle2 size={18} /><span>Family tracing and admission support</span></div>
            <div><CheckCircle2 size={18} /><span>Transition and local assistance</span></div>
          </div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="container about-final-cta-inner">
          <div>
            <Eyebrow>LET'S TALK</Eyebrow>
            <h2>Every journey starts<br /><span>with a conversation.</span></h2>
            <p>Contact the IMTS CARE team to discuss a medical transportation or international treatment coordination enquiry.</p>
          </div>
          <div className="about-final-actions">
            <a className="button button-teal" href="https://wa.me/971554705602?text=Hello%20IMTS%20CARE%2C%20I%20would%20like%20to%20discuss%20a%20patient%20care%20enquiry." target="_blank" rel="noreferrer">
              Contact our team <ArrowRight size={18} />
            </a>
            <a href="mailto:info@imtscare.com">info@imtscare.com <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
