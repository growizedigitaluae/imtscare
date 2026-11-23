import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Plane,
  Globe2,
  MapPin,
  ClipboardCheck,
  Languages,
  Hotel,
  Stethoscope,
  HeartHandshake,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  Building2,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Treatment Destinations | IMTS CARE Dubai",
  description:
    "Explore medical treatment coordination destinations with IMTS CARE. We help international patients connect with healthcare providers in the UAE, India, Pakistan, Bangladesh, Thailand, Singapore and the Philippines.",
  alternates: { canonical: "https://imtscare.com/destinations" },
  openGraph: {
    title: "Medical Treatment Destinations | IMTS CARE",
    description:
      "Explore destination options and receive support coordinating your international healthcare journey.",
    url: "https://imtscare.com/destinations",
    type: "website",
  },
};

const destinations = [
  {
    number: "01",
    country: "United Arab Emirates",
    short: "UAE",
    region: "Middle East",
    intro:
      "A convenient regional option for patients seeking care in the UAE, with Dubai serving as the coordination base for IMTS CARE.",
    strengths: [
      "Regional accessibility for patients travelling from the Middle East and nearby regions",
      "Support coordinating hospital and specialist enquiries",
      "Assistance with travel, accommodation and local arrangements",
    ],
    note: "A practical option for patients who prefer to coordinate their journey through Dubai.",
    flag: "🇦🇪",
    tone: "uae",
  },
  {
    number: "02",
    country: "India",
    short: "India",
    region: "South Asia",
    intro:
      "India is one of the destination options supported by IMTS CARE for patients exploring specialist consultations and treatment pathways.",
    strengths: [
      "Coordination support for hospital and specialist enquiries",
      "Help arranging appointment requests and sharing relevant information",
      "Travel and stay coordination for patients and accompanying family",
    ],
    note: "The most suitable hospital and location depend on the patient's needs and provider assessment.",
    flag: "🇮🇳",
    tone: "india",
  },
  {
    number: "03",
    country: "Pakistan",
    short: "Pakistan",
    region: "South Asia",
    intro:
      "Patients considering care in Pakistan can contact IMTS CARE for assistance with initial enquiries and coordination with healthcare providers.",
    strengths: [
      "Support identifying relevant provider options for an enquiry",
      "Appointment and communication coordination",
      "Travel planning assistance for patients and companions",
    ],
    note: "Provider availability and acceptance are confirmed individually.",
    flag: "🇵🇰",
    tone: "pakistan",
  },
  {
    number: "04",
    country: "Bangladesh",
    short: "Bangladesh",
    region: "South Asia",
    intro:
      "IMTS CARE can help patients explore healthcare coordination options in Bangladesh and understand the practical steps involved in making an enquiry.",
    strengths: [
      "Initial coordination with relevant healthcare providers",
      "Assistance with appointment enquiries and communication",
      "Guidance with travel and accommodation arrangements",
    ],
    note: "Any treatment decision remains between the patient and their qualified healthcare provider.",
    flag: "🇧🇩",
    tone: "bangladesh",
  },
  {
    number: "05",
    country: "Thailand",
    short: "Thailand",
    region: "Southeast Asia",
    intro:
      "Thailand is included among the international destinations supported by IMTS CARE for patients comparing possible care pathways abroad.",
    strengths: [
      "Support submitting enquiries to hospitals and specialists",
      "Coordination of appointment requests and patient communication",
      "Assistance with accommodation and local transport planning",
    ],
    note: "A destination should be selected based on clinical advice, provider suitability and practical needs.",
    flag: "🇹🇭",
    tone: "thailand",
  },
  {
    number: "06",
    country: "Singapore",
    short: "Singapore",
    region: "Southeast Asia",
    intro:
      "For patients considering Singapore, IMTS CARE provides non-clinical coordination support to help organise provider enquiries and travel planning.",
    strengths: [
      "Hospital and specialist enquiry coordination",
      "Support with appointment communication",
      "Travel, accommodation and accompanying-person planning",
    ],
    note: "Specific services, costs and appointment availability must be confirmed directly with providers.",
    flag: "🇸🇬",
    tone: "singapore",
  },
  {
    number: "07",
    country: "Philippines",
    short: "Philippines",
    region: "Southeast Asia",
    intro:
      "The Philippines is another destination option that patients can discuss with IMTS CARE when exploring international healthcare arrangements.",
    strengths: [
      "Initial provider and treatment enquiry coordination",
      "Assistance communicating appointment requirements",
      "Practical travel and stay coordination",
    ],
    note: "The appropriate provider and care plan are determined by the treating medical team.",
    flag: "🇵🇭",
    tone: "philippines",
  },
];

const process = [
  {
    icon: ClipboardCheck,
    title: "Share your enquiry",
    text: "Tell us the destination you are considering, the type of support you need and your preferred travel timeframe.",
  },
  {
    icon: Stethoscope,
    title: "Provider coordination",
    text: "With your consent, we help coordinate an enquiry with a relevant healthcare provider for its review and response.",
  },
  {
    icon: Plane,
    title: "Plan the journey",
    text: "Once arrangements are confirmed, we can help coordinate practical travel, accommodation and local support.",
  },
  {
    icon: HeartHandshake,
    title: "Stay connected",
    text: "We remain a coordination contact for agreed non-clinical arrangements during the journey.",
  },
];

const support = [
  {
    icon: Building2,
    title: "Hospital & specialist enquiries",
    text: "Support contacting healthcare providers and forwarding enquiry details for their consideration.",
  },
  {
    icon: Languages,
    title: "Communication assistance",
    text: "Help coordinating communication and language support where available and agreed.",
  },
  {
    icon: Hotel,
    title: "Travel & accommodation",
    text: "Practical assistance with accommodation and local transport planning for patients and companions.",
  },
  {
    icon: Plane,
    title: "International travel coordination",
    text: "Help organising non-clinical travel arrangements around confirmed appointments and provider guidance.",
  },
];

export default function DestinationsPage() {
  return (
    <main className="imts-destinations-page">
      <div className="imts-dest-topline">
        <div className="imts-dest-container imts-dest-topline-inner">
          <span><MapPin size={13} /> Dubai, United Arab Emirates</span>
          <div>
            <a href="mailto:info@imtscare.com">info@imtscare.com</a>
            <a href="tel:+971554705602">+971 55 470 5602</a>
          </div>
        </div>
      </div>

      <header className="imts-dest-header">
        <div className="imts-dest-container imts-dest-nav">
          <Link href="/" className="imts-dest-logo" aria-label="IMTS CARE home">
            <img src="/images/imtscare-logo.png" alt="IMTS CARE" />
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/air-ambulance">Air Ambulance</Link>
            <Link href="/medical-tourism">Medical Tourism</Link>
            <Link href="/destinations" className="active">Destinations</Link>
            <Link href="/contact" className="imts-dest-nav-cta">Contact us <ArrowRight size={15} /></Link>
          </nav>
        </div>
      </header>

      <section className="imts-dest-hero">
        <div className="imts-dest-hero-glow" />
        <div className="imts-dest-container imts-dest-hero-grid">
          <div className="imts-dest-hero-copy">
            <div className="imts-dest-eyebrow"><Globe2 size={15} /> INTERNATIONAL CARE DESTINATIONS</div>
            <h1>Explore your options for <span>care beyond borders.</span></h1>
            <p>
              Choosing where to seek healthcare is an important decision. IMTS CARE helps
              patients explore destination options and coordinate the practical steps involved
              in an international healthcare journey.
            </p>
            <div className="imts-dest-hero-actions">
              <Link href="/contact" className="imts-dest-btn imts-dest-btn-teal">Discuss your enquiry <ArrowRight size={17} /></Link>
              <a href="https://wa.me/971554705602" target="_blank" rel="noreferrer" className="imts-dest-btn imts-dest-btn-glass"><MessageCircle size={17} /> WhatsApp us</a>
            </div>
            <div className="imts-dest-hero-meta">
              <span><CheckCircle2 size={15} /> Non-clinical coordination support</span>
              <span><CheckCircle2 size={15} /> Dubai-based assistance</span>
            </div>
          </div>
          <div className="imts-dest-hero-visual" aria-label="Global healthcare coordination map highlighting the Middle East and Asia">
            <Image
              src="/images/destinations-globe.png"
              alt="Blue and teal globe highlighting India, with international connection routes to the UAE, Thailand and Singapore"
              width={1120}
              height={630}
              priority
              className="imts-dest-globe-artwork"
              sizes="(max-width: 700px) 100vw, 55vw"
            />
          </div>
        </div>
        <div className="imts-dest-container imts-dest-hero-bottom">
          <span>OUR DESTINATION NETWORK</span>
          <strong>Middle East</strong><i />
          <strong>South Asia</strong><i />
          <strong>Southeast Asia</strong>
        </div>
      </section>

      <section className="imts-dest-intro imts-dest-section">
        <div className="imts-dest-container imts-dest-intro-grid">
          <div>
            <div className="imts-dest-kicker">DESTINATIONS WE SUPPORT</div>
            <h2>Different destinations.<br /><span>One coordinated journey.</span></h2>
          </div>
          <div className="imts-dest-intro-text">
            <p>
              IMTS CARE supports international patients exploring healthcare options in selected
              destinations across the Middle East and Asia. We help organise enquiries and
              practical arrangements, while healthcare providers remain responsible for all
              clinical assessments, recommendations and treatment.
            </p>
            <p>
              The destination that is right for you depends on your individual requirements,
              provider assessment, availability, travel considerations and personal preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="imts-dest-country-section imts-dest-section">
        <div className="imts-dest-container">
          <div className="imts-dest-section-heading">
            <div>
              <div className="imts-dest-kicker">EXPLORE THE OPTIONS</div>
              <h2>Our supported <span>destinations</span></h2>
            </div>
            <p>Explore the countries below and contact our team to discuss your enquiry.</p>
          </div>

          <div className="imts-dest-country-grid">
            {destinations.map((destination) => (
              <article className={`imts-dest-country-card ${destination.tone}`} key={destination.short}>
                <div className="imts-dest-country-card-top">
                  <span className="imts-dest-country-number">{destination.number}</span>
                  <span className="imts-dest-flag" aria-hidden="true">{destination.flag}</span>
                </div>
                <div className="imts-dest-region">{destination.region}</div>
                <h3>{destination.country}</h3>
                <p className="imts-dest-country-intro">{destination.intro}</p>
                <div className="imts-dest-card-divider" />
                <h4>How we can assist</h4>
                <ul>
                  {destination.strengths.map((item) => (
                    <li key={item}><CheckCircle2 size={15} /> <span>{item}</span></li>
                  ))}
                </ul>
                <div className="imts-dest-country-note">{destination.note}</div>
                <Link href="/contact" className="imts-dest-text-link">Enquire about this destination <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imts-dest-support imts-dest-section">
        <div className="imts-dest-container">
          <div className="imts-dest-section-heading centered">
            <div className="imts-dest-kicker">MORE THAN A DESTINATION</div>
            <h2>Practical support at <span>every step</span></h2>
            <p>Our role is to make the coordination process clearer and easier to navigate.</p>
          </div>
          <div className="imts-dest-support-grid">
            {support.map((item) => {
              const Icon = item.icon;
              return (
                <article className="imts-dest-support-card" key={item.title}>
                  <div className="imts-dest-support-icon"><Icon size={24} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="imts-dest-process imts-dest-section">
        <div className="imts-dest-container imts-dest-process-grid">
          <div className="imts-dest-process-intro">
            <div className="imts-dest-kicker">HOW IT WORKS</div>
            <h2>A clear process for your <span>next steps.</span></h2>
            <p>
              Every enquiry is different. We take time to understand the coordination support
              you are looking for and explain what can be arranged next.
            </p>
            <Link href="/contact" className="imts-dest-btn imts-dest-btn-teal">Start an enquiry <ArrowRight size={17} /></Link>
          </div>
          <div className="imts-dest-process-list">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="imts-dest-process-item" key={item.title}>
                  <div className="imts-dest-process-icon"><Icon size={21} /></div>
                  <div className="imts-dest-process-content">
                    <span>STEP 0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="imts-dest-consider imts-dest-section">
        <div className="imts-dest-container imts-dest-consider-inner">
          <div className="imts-dest-consider-icon"><ShieldCheck size={31} /></div>
          <div>
            <div className="imts-dest-kicker">MAKING AN INFORMED CHOICE</div>
            <h2>What should you consider before choosing a destination?</h2>
            <p>
              Discuss clinical suitability with a qualified healthcare professional. You may
              also wish to consider the provider's services, estimated costs, appointment
              availability, visa requirements, travel time, accommodation and the support
              required by accompanying family members.
            </p>
          </div>
          <div className="imts-dest-consider-side">
            <span><Clock3 size={16} /> Appointment availability</span>
            <span><Building2 size={16} /> Provider suitability</span>
            <span><Plane size={16} /> Travel requirements</span>
          </div>
        </div>
      </section>

      <section className="imts-dest-faq imts-dest-section">
        <div className="imts-dest-container imts-dest-faq-grid">
          <div>
            <div className="imts-dest-kicker">DESTINATION FAQs</div>
            <h2>Questions patients <span>often ask.</span></h2>
            <p>Need help with a specific destination? Our team can explain the coordination process.</p>
            <Link href="/contact" className="imts-dest-text-link">Talk to our team <ArrowRight size={16} /></Link>
          </div>
          <div className="imts-dest-faq-list">
            <details>
              <summary>Can IMTS CARE recommend which country is best for my condition?</summary>
              <p>IMTS CARE does not provide medical advice or determine clinical suitability. A qualified healthcare professional should advise on appropriate care options. We can help coordinate enquiries to providers for their review.</p>
            </details>
            <details>
              <summary>Can I enquire about more than one destination?</summary>
              <p>Yes. You can tell us which destinations you are considering. We can discuss the coordination support available and help organise provider enquiries, subject to provider response and availability.</p>
            </details>
            <details>
              <summary>Does IMTS CARE arrange appointments and travel?</summary>
              <p>We can assist with appointment enquiries and agreed non-clinical travel arrangements. Appointments, treatment decisions, visas and travel approvals remain subject to the relevant provider and authorities.</p>
            </details>
            <details>
              <summary>Can a family member travel with the patient?</summary>
              <p>Where permitted, accompanying-person arrangements can be discussed. Entry rules, accommodation availability and provider policies should be checked before travel.</p>
            </details>
            <details>
              <summary>Are treatment costs and availability guaranteed?</summary>
              <p>No. Costs, clinical recommendations, appointment dates and service availability are confirmed by the relevant healthcare provider. Any estimates should be verified directly before making travel decisions.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="imts-dest-final-cta">
        <div className="imts-dest-container imts-dest-final-inner">
          <div className="imts-dest-final-icon"><Sparkles size={25} /></div>
          <div>
            <span>YOUR JOURNEY STARTS WITH A CONVERSATION</span>
            <h2>Not sure which destination to explore?</h2>
            <p>Tell us what kind of coordination support you need. We’ll help you understand the next practical steps.</p>
          </div>
          <div className="imts-dest-final-actions">
            <Link href="/contact" className="imts-dest-btn imts-dest-btn-white">Contact IMTS CARE <ArrowRight size={17} /></Link>
            <a href="https://wa.me/971554705602" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="imts-dest-footer">
        <div className="imts-dest-container imts-dest-footer-main">
          <div className="imts-dest-footer-brand">
            <Link href="/"><img src="/images/imtscare-logo.png" alt="IMTS CARE" /></Link>
            <p>International Medical Treatment Services. Dubai-based coordination support for international healthcare journeys.</p>
          </div>
          <div><h4>Explore</h4><Link href="/about">About us</Link><Link href="/air-ambulance">Air Ambulance</Link><Link href="/medical-tourism">Medical Tourism</Link><Link href="/destinations">Destinations</Link></div>
          <div><h4>Contact</h4><a href="mailto:info@imtscare.com">info@imtscare.com</a><a href="tel:+971554705602">+971 55 470 5602</a><a href="https://wa.me/971554705602">WhatsApp</a><span>RKM Building, Office 116,<br />Dubai, UAE</span></div>
        </div>
        <div className="imts-dest-container imts-dest-footer-bottom">
          <span>© 2026 IMTS CARE. All rights reserved.</span>
          <span>IMTS CARE provides coordination support, not medical advice or treatment.</span>
        </div>
      </footer>
    </main>
  );
}
