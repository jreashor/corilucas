import Image from "next/image";
import ClinicCard from "./components/ClinicCard";
import ContactForm from "./components/ContactForm";

const services = [
  {
    name: "Acupuncture",
    description:
      "Fine needles placed at specific points along the body's meridian pathways to restore balance, relieve pain, and promote the body's natural healing response.",
  },
  {
    name: "Gua Sha",
    description:
      "Gentle scraping of the skin to stimulate circulation, break up stagnation, and support the movement of qi — particularly effective for muscle tension and chronic pain.",
  },
  {
    name: "Fire Cupping",
    description:
      "Suction cups applied using heat to increase blood flow, ease deep muscle tightness, and draw out tension held in the tissues.",
  },
  {
    name: "Acupressure",
    description:
      "Firm manual pressure applied to acupuncture points to relieve tension and support energy flow — a needle-free complement to acupuncture treatments.",
  },
  {
    name: "Tuina Massage",
    description:
      "Traditional Chinese therapeutic bodywork using rhythmic pressure, kneading, and manipulation to address musculoskeletal issues and improve overall circulation.",
  },
];

const focusAreas = [
  "Emotional wellness & stress relief",
  "Sleep disturbances",
  "Chronic & musculoskeletal pain",
  "Hormonal imbalances",
  "Nervous system regulation",
  "Endocrine system support",
];

const clinics = [
  {
    name: "Coral Cove Wellness Center",
    street: "26 Ramsgate Lane",
    city: "Halifax",
    province: "NS",
    phone: "902-420-0033",
    details:
      "Located at Coral Cove Wellness Center, minutes from the main Coral Clinic in Spryfield.",
    href: "https://coral.janeapp.com/#/staff_member/9",
  },
  {
    name: "The Lifehouse",
    street: "1387 Hammonds Plains Road",
    city: "Hammonds Plains",
    province: "NS",
    phone: "902-446-4030",
    details:
      "Located in Hammonds Plains, minutes from Bedford, Tantallon, and Lower Sackville.",
    href: "https://thelifehousehammondsplains.janeapp.com/#/staff_member/11",
  },
];

const siteUrl = "https://corilucas.ca";
const ids = {
  website: `${siteUrl}/#website`,
  webpage: `${siteUrl}/#webpage`,
  person: `${siteUrl}/#cori-lucas`,
  practice: `${siteUrl}/#practice`,
  coralCove: `${siteUrl}/#coral-cove`,
  lifehouse: `${siteUrl}/#the-lifehouse`,
};

const areasServed = ["Halifax", "Hammonds Plains", "Bedford", "Tantallon", "Lower Sackville"];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ids.website,
      "url": siteUrl,
      "name": "Cori Lucas R.Ac",
      "inLanguage": "en-CA",
      "publisher": { "@id": ids.practice },
    },
    {
      "@type": "WebPage",
      "@id": ids.webpage,
      "url": siteUrl,
      "name": "Cori Lucas R.Ac — Registered Acupuncturist | Halifax & Hammonds Plains, NS",
      "inLanguage": "en-CA",
      "isPartOf": { "@id": ids.website },
      "about": { "@id": ids.practice },
      "primaryImageOfPage": `${siteUrl}/images/cori.png`,
    },
    {
      "@type": "Person",
      "@id": ids.person,
      "name": "Cori Lucas",
      "jobTitle": "Registered Acupuncturist",
      "url": siteUrl,
      "image": `${siteUrl}/images/cori.png`,
      "description":
        "Registered Acupuncturist holding a 2200-hour certification from the College of Acupuncture and Traditional Chinese Medicine in Bedford, Nova Scotia, and a member of ATCMANS.",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Association of Traditional Chinese Medicine and Acupuncturists of Nova Scotia",
          "alternateName": "ATCMANS",
        },
      },
      "knowsAbout": [
        "Acupuncture",
        "Traditional Chinese Medicine",
        "Gua Sha",
        "Fire Cupping",
        "Acupressure",
        "Tuina Massage",
      ],
      "worksFor": [{ "@id": ids.practice }, { "@id": ids.coralCove }, { "@id": ids.lifehouse }],
    },
    {
      "@type": "MedicalBusiness",
      "@id": ids.practice,
      "name": "Cori Lucas R.Ac",
      "description":
        "Acupuncture and Traditional Chinese Medicine practice of Cori Lucas, Registered Acupuncturist, serving Halifax and Hammonds Plains, Nova Scotia.",
      "url": siteUrl,
      "image": `${siteUrl}/images/logo.png`,
      "founder": { "@id": ids.person },
      "employee": { "@id": ids.person },
      "location": [{ "@id": ids.coralCove }, { "@id": ids.lifehouse }],
      "areaServed": areasServed.map((name) => ({ "@type": "City", name })),
      "availableService": services.map((service) => ({
        "@type": "MedicalTherapy",
        "name": service.name,
        "description": service.description,
      })),
    },
    ...[
      { id: ids.coralCove, clinic: clinics[0], telephone: "+1-902-420-0033" },
      { id: ids.lifehouse, clinic: clinics[1], telephone: "+1-902-446-4030" },
    ].map(({ id, clinic, telephone }) => ({
      "@type": "MedicalBusiness",
      "@id": id,
      "name": clinic.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": clinic.street,
        "addressLocality": clinic.city,
        "addressRegion": clinic.province,
        "addressCountry": "CA",
      },
      "telephone": telephone,
      "url": clinic.href,
      "employee": { "@id": ids.person },
    })),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Nav */}
        <nav
          aria-label="Main navigation"
          className="sticky top-0 z-50 bg-sage-light/80 backdrop-blur-sm border-b border-border"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between gap-4">
            <a href="#" aria-label="Cori Lucas — return to top">
              <Image
                src="/images/logo_transparent.png"
                alt="Cori Lucas logo"
                width={68}
                height={68}
                className="h-12 sm:h-16 w-auto my-2 sm:m-2"
              />
            </a>
            <ul className="flex gap-4 sm:gap-8 text-sm sm:text-xl text-foreground list-none" role="list">
              <li><a href="#about" className="hover:text-sage transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-sage transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-sage transition-colors">Book</a></li>
              <li><a href="#contact" className="hover:text-sage transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main id="main-content">
          {/* Hero */}
          <header className="relative overflow-hidden bg-[#7d9e83] text-white py-20 px-6">
            <Image
              src="/images/leaf-drop.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[#3f5a45]/90" />
            <div className="relative max-w-5xl mx-auto">
              <p className="text-sage-light text-sm uppercase tracking-widest mb-2">
                Registered Acupuncturist · ATCMANS
              </p>
              <h1 className="text-5xl font-normal mb-8">Cori Lucas R.Ac</h1>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
                <div className="shrink-0">
                  <Image
                    src="/images/cori.png"
                    alt="Portrait of Cori Lucas, Registered Acupuncturist"
                    width={260}
                    height={260}
                    className="object-cover object-top w-48 md:w-64 rounded-xl"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xl text-white/90 max-w-xl leading-relaxed mb-10">
                    Holistic acupuncture and Traditional Chinese Medicine — supporting your body&apos;s
                    natural ability to heal, restore balance, and maintain long-term wellness.
                  </p>
                  <a
                    href="#booking"
                    className="inline-block bg-white text-sage font-medium px-8 py-3 rounded-full hover:bg-sage-light transition-colors"
                    aria-label="Book an appointment with Cori Lucas"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* About */}
          <section
            id="about"
            aria-labelledby="about-heading"
            className="py-24 px-6 bg-background"
          >
            <div className="max-w-5xl mx-auto">
              <h2 id="about-heading" className="text-3xl font-bold mb-10 text-sage-dark">
                About
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/80">
                  <p>
                    Cori Lucas is a Registered Acupuncturist holding a 2200-hour certification from
                    the College of Acupuncture and Traditional Chinese Medicine in Bedford, Nova
                    Scotia, and is a member of the Association of Traditional Chinese Medicine and
                    Acupuncturists of Nova Scotia (ATCMANS).
                  </p>
                  <p>
                    Her journey into Traditional Chinese Medicine began through her own transformative
                    healing experiences with acupuncture — experiences that continue to shape her
                    deeply patient-centred approach. Cori&apos;s practice is grounded in the belief that
                    each person is a complete energetic and physical being.
                  </p>
                  <p>
                    Rather than addressing symptoms in isolation, she works to identify and treat the
                    root causes of imbalance, supporting the body&apos;s innate capacity to heal and
                    restore equilibrium. She also guides clients through home care practices to extend
                    the benefits of treatment between sessions.
                  </p>
                </div>
                <aside aria-label="Areas of focus" className="bg-sage-light rounded-2xl p-8">
                  <h3
                    id="focus-areas-heading"
                    className="text-sm font-medium uppercase tracking-widest text-sage-dark mb-5"
                  >
                    Areas of Focus
                  </h3>
                  <ul aria-labelledby="focus-areas-heading" className="space-y-3">
                    {focusAreas.map((area) => (
                      <li key={area} className="flex items-start gap-3 text-foreground/75">
                        <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            </div>
          </section>

          {/* Services */}
          <section
            id="services"
            aria-labelledby="services-heading"
            className="py-24 px-6 bg-sage-light"
          >
            <div className="max-w-5xl mx-auto">
              <h2 id="services-heading" className="text-3xl font-bold mb-10 text-sage-dark">
                Services
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none" role="list">
                {services.map((service) => (
                  <li key={service.name}>
                    <article className="bg-background rounded-2xl p-7 shadow-sm h-full">
                      <h3 className="font-medium text-lg mb-3">{service.name}</h3>
                      <p className="text-foreground/65 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Booking */}
          <section
            id="booking"
            aria-labelledby="booking-heading"
            className="py-24 px-6 bg-background"
          >
            <div className="max-w-5xl mx-auto">
              <h2 id="booking-heading" className="text-3xl font-bold mb-3 text-sage-dark">
                Book an Appointment
              </h2>
              <p className="text-foreground/60 mb-2">
                Cori practices at two locations. Select a clinic to book online through Jane.
              </p>
              <p className="text-sm text-foreground/60 mb-10">
                Receipts provided for insurance claims.
              </p>
              <ul className="grid sm:grid-cols-2 gap-6 list-none" role="list">
                {clinics.map((clinic) => (
                  <li key={clinic.name}>
                    <ClinicCard clinic={clinic} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Contact */}
          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="py-24 px-6 bg-sage-light"
          >
            <div className="max-w-5xl mx-auto">
              <h2 id="contact-heading" className="text-3xl font-bold mb-3 text-sage-dark">
                Get in Touch
              </h2>
              <p className="text-foreground/60 mb-10 max-w-2xl">
                Have a question before booking, or want to share how acupuncture has helped you?
                Send Cori a message below. Testimonials are always welcome and may be featured on
                this site with your permission.
              </p>
              <div className="max-w-2xl">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer
          role="contentinfo"
          className="bg-[#cad2c5] text-foreground/60 py-8 px-6 text-sm text-center"
        >
          <p>© {new Date().getFullYear()} Cori Lucas · Registered Acupuncturist · ATCMANS</p>
        </footer>
      </div>
    </>
  );
}
