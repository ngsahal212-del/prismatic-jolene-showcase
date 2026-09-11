import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { SiteClosing } from "@/components/SiteClosing";
import fluted from "@/assets/fluted-glass.jpg";
import portrait from "@/assets/portrait-jo.jpg";
import proj01 from "@/assets/proj-01.jpg";
import proj02 from "@/assets/proj-02.jpg";
import proj03 from "@/assets/proj-03.jpg";
import proj04 from "@/assets/proj-04.jpg";
import proj05 from "@/assets/proj-05.jpg";
import proj06 from "@/assets/proj-06.jpg";
import svc01 from "@/assets/svc-01.jpg";
import svc02 from "@/assets/svc-02.jpg";
import svc03 from "@/assets/svc-03.jpg";
import client01 from "@/assets/client-01.jpg";
import client02 from "@/assets/client-02.jpg";
import client03 from "@/assets/client-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jolene Koekemoer — Website Designer & Developer" },
      {
        name: "description",
        content:
          "Professional website designer and developer creating modern, user-friendly websites built for visibility, usability, and performance.",
      },
      { property: "og:title", content: "Jolene Koekemoer — Website Designer & Developer" },
      {
        property: "og:description",
        content:
          "Modern, user-friendly websites built for visibility, usability, and performance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", index: "01", href: "/" },
  { label: "Portfolio", index: "02", href: "/portfolio" },
  { label: "Contact", index: "03", href: "/contact" },
];

const credentials = [
  {
    title: "Framer Pro Partner",
    text: "Recognised by Framer as a trusted independent partner",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M4 4h16l-8 8H4V4zm0 8h8l-8 8v-8zm8 0h8l-8 8 8-8z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Wix Legend Partner",
    text: "Wix's highest recognition for partners, 70+ Wix Websites",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M4 4h16v16H4V4zm6 6h4v4h-4v-4z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Upwork Top 10% Talent",
    text: "100% Job Success, 100+ Projects, Top-Rated Since 2016",
    icon: <span className="text-2xl font-bold leading-none">Up</span>,
  },
];

const projects = [
  { img: proj01, name: "Jessica Webster", category: "eCommerce", year: "2026" },
  { img: proj02, name: "Daka Expeditions", category: "Hospitality", year: "2025" },
  { img: proj03, name: "Samsar Battery", category: "Technology", year: "2024" },
  { img: proj04, name: "Vanguard Studio", category: "Architecture", year: "2024" },
  { img: proj05, name: "Nordic Form", category: "Interior Design", year: "2023" },
  { img: proj06, name: "Shootsy.io", category: "SaaS", year: "2022" },
];

const services = [
  {
    n: "01",
    title: "Planning",
    img: svc01,
    imgAlt: "Hand pointing at a product roadmap sketched on a whiteboard",
    heading: "Clear foundations",
    text: "Planning the website before design and development begins. I shape the structure, content flow, and user journey so the website feels clear, organised, and ready to grow.",
  },
  {
    n: "02",
    title: "Design",
    img: svc02,
    imgAlt: "Open brand guidelines booklet showing color palettes and typography",
    heading: "Creative direction",
    text: "Designing clean, modern websites that feel aligned with your brand and easy to use. I focus on layout, typography, spacing, and consistency to create clear, considered, and visually strong designs.",
  },
  {
    n: "03",
    title: "Development",
    img: svc03,
    imgAlt: "Smartphone on a concrete block displaying a responsive website",
    heading: "Build to perform",
    text: "Bringing the website to life in Framer or Wix Studio with care and precision. I build responsive, well-structured websites that are easy to manage, scalable, and ready for a smooth launch.",
  },
];

const plans: { name: string; blurb: string; price: string; features: string[]; dark?: boolean }[] = [
  {
    name: "Landing Page",
    blurb: "A polished custom landing page designed and developed for businesses that need a focused, high-performing online presence.",
    price: "€1,400",
    features: [
      "Development from a completed, build-ready Figma file",
      "Responsive development in Framer or Wix Studio",
      "Clean and consistent page build",
      "Forms, links, interactions, and core functionality",
      "Basic SEO and performance setup",
      "Pre-launch testing, refinement, and launch support",
    ],
  },
  {
    name: "Multi-Page Website",
    blurb: "A multi-page custom website for businesses that need more content space, stronger structure, and optional simple CMS setup.",
    price: "€3,400",
    features: [
      "Development from a completed, build-ready Figma file",
      "Responsive development in Framer or Wix Studio",
      "Clean and consistent multi-page build",
      "Forms, links, interactions, and core site functionality",
      "Simple CMS setup where needed",
      "Basic SEO and performance setup",
      "Pre-launch testing, refinement, and launch support",
    ],
  },
  {
    name: "Advanced Website",
    blurb: "For larger websites and more complex projects with advanced CMS setups, added functionality, and custom code components.",
    price: "€8,500",
    dark: true,
    features: [
      "Discovery session to clarify goals and requirements",
      "Conversion-focused strategy and page planning",
      "Content guidance and messaging review",
      "Custom website design in Figma",
      "Custom visual direction aligned with your brand",
      "Responsive development in Framer or Wix Studio",
      "Structured layout, typography, and visual hierarchy",
      "Forms, links, interactions, and core site functionality",
      "Advanced CMS setup and content organisation",
      "Custom code components where required",
      "Basic SEO and performance setup",
      "Pre-launch testing, refinement, and launch support",
    ],
  },
];

const testimonials = [
  {
    img: client01,
    imgAlt: "Client working at a laptop behind a glass office wall",
    quote:
      "Working with Jolene is a pleasure. She clearly knows her field and consistently advises us with our best interest in mind. It’s reassuring to have someone so reliable and thoughtful on our side.",
    name: "Stephanie Straatman",
    company: "Voxdale BV",
  },
  {
    img: client02,
    imgAlt: "Smiling businesswoman with a laptop in a cafe",
    quote:
      "Jo took our vague ideas and turned them into a website that finally feels like us. The whole process was calm, clear, and faster than we expected.",
    name: "Marié Botha",
    company: "Botha & Co.",
  },
  {
    img: client03,
    imgAlt: "Designer reviewing sketches pinned to a studio wall",
    quote:
      "Every detail was considered, from the first sketch to launch day. Our new site loads fast, looks sharp, and our clients notice the difference.",
    name: "Daniel Kruger",
    company: "Kruger Studio",
  },
];

function Index() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);
  const t = testimonials[active]!;

  const go = (dir: 1 | -1) => {
    setActive((a) => (a + dir + testimonials.length) % testimonials.length);
    setTick((k) => k + 1);
  };
  return (
    <main className="bg-neutral-950">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden [height:100dvh]">
        <img
          src={fluted}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/25" />

        {/* Vertical slat overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0) 6px, rgba(0,0,0,0.18) 40px, rgba(255,255,255,0) 74px, rgba(255,255,255,0.35) 80px)",
          }}
        />

        <div className="relative flex h-full flex-col justify-between p-6 md:p-10">
          <header className="flex items-start justify-between">
            <span className="text-sm font-medium tracking-wide text-white">© J — K</span>
            <nav className="flex items-start gap-6 md:gap-12">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-70 md:text-base"
                >
                  {item.label}
                  <sup className="text-[0.6em] text-white/70">{item.index}</sup>
                </a>
              ))}
            </nav>
          </header>

          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <h1 className="max-w-[12ch] text-[15vw] font-bold leading-[0.88] tracking-[-0.03em] text-white md:text-[8.5vw]">
              Jolene
              <br />
              Koekemoer
            </h1>

            <div className="w-full max-w-sm md:text-right">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                className="mb-5 h-11 w-11 text-white md:ml-auto"
                aria-hidden="true"
              >
                <circle cx="24" cy="24" r="17" />
                <ellipse cx="24" cy="24" rx="7.5" ry="17" />
                <path d="M7 24h34M10 14.5h28M10 33.5h28" />
              </svg>
              <p className="text-sm leading-snug font-medium text-white md:text-base">
                Professional website designer and developer creating modern, user-friendly websites
                built for visibility, usability, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full border-t border-white/10 bg-neutral-950 px-6 py-12 md:px-14 md:py-16">
        <div className="flex items-start justify-between">
          <span className="text-xs font-semibold tracking-wide text-white">(01)</span>
          <span className="text-xs font-semibold tracking-wide text-white">About</span>
        </div>

        <h2 className="mt-14 max-w-6xl text-[9vw] font-bold leading-[1.02] tracking-[-0.03em] text-white md:mt-20 md:text-[4.6vw]">
          I’m Jo, a website designer and no-code developer with over a decade of experience,
          specialising in clean, scalable website design in Framer and Wix Studio.
        </h2>

        <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-[1fr_1.2fr_1fr] md:gap-20">
          <div className="flex flex-col gap-16 md:col-span-2 md:grid md:grid-cols-[auto_1fr] md:gap-x-24 md:gap-y-24">
            <h3 className="text-sm font-semibold text-white">Background</h3>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              My design career started in graphic design in 2010, before naturally expanding into
              web design. Since 2012, I’ve worked in web design full-time and have completed well
              over 100 websites across a wide range of industries, including e-commerce,
              hospitality, consulting, nonprofit, energy, and SaaS. I specialise in Framer and Wix
              Studio, with Figma as part of my design process.
            </p>

            <h3 className="text-sm font-semibold text-white">Approach</h3>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              I work with a limited number of clients each year so I can give every project the
              attention it deserves. My approach is collaborative, thoughtful, and adapted to each
              brand. I care about my clients’ successes, celebrate their wins, and always aim to
              meet their needs, solve problems, and nurture them. Always learning. Always growing.
            </p>
          </div>

          <img
            src={portrait}
            alt="Black and white portrait of Jolene Koekemoer"
            loading="lazy"
            width={896}
            height={1152}
            className="w-full max-w-sm self-start rounded-lg object-cover grayscale"
          />
        </div>

        <div className="mt-24 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3 md:gap-16">
          {credentials.map((c) => (
            <div key={c.title}>
              <div className="mb-4 text-white">{c.icon}</div>
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <p className="mt-1 max-w-xs text-sm leading-snug text-white/55">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* (02) Portfolio */}
      <section id="portfolio" className="w-full bg-white text-black">
        <div className="flex items-center justify-between border-t border-black/15 px-6 py-4 text-xs md:px-14">
          <span>(02)</span>
          <span>Portfolio</span>
        </div>

        <div className="grid grid-cols-1 gap-10 px-6 pb-32 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-14">
          <div className="md:sticky md:top-24 md:h-fit md:self-start md:pt-16">
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">Portfolio</h2>
            <p className="mt-1 text-lg text-black/70">2022–2026</p>
          </div>

          <div className="pt-8 md:pt-16">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="sticky bg-white pb-6"
                style={{ top: `${80 + i * 18}px`, zIndex: i + 1 }}
              >
                <img
                  src={p.img}
                  alt={`${p.name} website mockup`}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full rounded-xl object-cover shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
                />
                <div className="mt-3 grid grid-cols-3 items-start text-xs">
                  <span>({String(i + 1).padStart(2, "0")})</span>
                  <span className="justify-self-center text-center">
                    <span className="block font-semibold">{p.name}</span>
                    <span className="block text-black/45">{p.category}</span>
                  </span>
                  <span className="justify-self-end">{p.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* (03) Services */}
      <section id="services" className="w-full bg-neutral-950 text-white">
        <div className="flex items-center justify-between border-t border-white/15 px-6 py-4 text-xs font-semibold md:px-14">
          <span>(03)</span>
          <span>Services</span>
        </div>

        {/* Intro */}
        <div className="flex flex-col gap-10 px-6 pt-14 pb-24 md:flex-row md:items-start md:gap-16 md:px-14 md:pt-20 md:pb-32">
          <img
            src={portrait}
            alt="Grayscale portrait of Jolene Koekemoer"
            loading="lazy"
            width={896}
            height={1152}
            className="w-40 shrink-0 rounded-lg object-cover grayscale md:w-52"
          />
          <h2 className="max-w-5xl text-[7.5vw] font-bold leading-[1.04] tracking-[-0.03em] md:text-[3.9vw]">
            A thoughtful mix of planning, design, and development for clean, modern websites that
            are simple to use, easy to manage, and designed to support real business needs.
          </h2>
        </div>

        {/* Stages */}
        <div>
          {services.map((s) => (
            <div
              key={s.n}
              className="grid gap-10 border-t border-white/15 px-6 py-16 md:grid-cols-[1fr_1.2fr_1fr] md:gap-16 md:px-14 md:py-24"
            >
              <div>
                <span className="text-sm font-semibold text-white">{s.n}</span>
                <h3 className="mt-2 text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">
                  {s.title}
                </h3>
              </div>
              <img
                src={s.img}
                alt={s.imgAlt}
                loading="lazy"
                width={960}
                height={640}
                className="w-full rounded-xl object-cover"
              />
              <div className="max-w-sm md:justify-self-end">
                <h4 className="text-base font-semibold text-white">{s.heading}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Template-based projects */}
        <div className="grid gap-6 border-t border-white/15 px-6 py-16 md:grid-cols-[1fr_1.2fr_1fr] md:gap-16 md:px-14 md:py-24">
          <h3 className="text-base font-semibold text-white md:col-start-1">Template-Based Projects</h3>
          <p className="max-w-md text-sm leading-relaxed text-white/55 md:col-start-2">
            Alongside custom website projects, I also offer{" "}
            <span className="font-semibold text-white">Framer template</span> selection and
            customisation for businesses that want to launch faster with a strong foundation.
          </p>
        </div>
      </section>

      {/* (04) Testimonials */}
      <section id="testimonials" className="w-full bg-white text-black">
        <div className="flex items-center justify-between border-t border-black/15 px-6 py-4 text-xs md:px-14">
          <span>(04)</span>
          <span>Testimonials</span>
        </div>

        <div
          key={tick}
          className="grid animate-fade-in gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-24 md:px-14 md:py-24"
        >
          <div className="flex flex-col gap-6">
            <img
              src={t.img}
              alt={t.imgAlt}
              loading="lazy"
              width={800}
              height={800}
              className="w-44 rounded-lg object-cover md:w-52"
            />
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-sm text-black/45">{t.company}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/5 text-black transition-all duration-200 hover:bg-black/10 active:scale-90"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/5 text-black transition-all duration-200 hover:bg-black/10 active:scale-90"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <blockquote className="max-w-4xl text-[6.5vw] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[3.4vw]">
            “{t.quote}”
          </blockquote>
        </div>
      </section>

      {/* (05) Estimates */}
      <section id="estimates" className="w-full bg-white text-black">
        <div className="flex items-center justify-between border-t border-black/15 px-6 py-4 text-xs md:px-14">
          <span>(05)</span>
          <span>Estimates</span>
        </div>

        <div className="grid gap-4 px-6 pb-10 pt-10 md:grid-cols-3 md:px-14 md:pt-14">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-xl p-7 md:p-8 ${
                p.dark ? "bg-[#0c0c0c] text-white" : "bg-black/[0.045] text-black"
              }`}
            >
              <h3 className="text-base font-semibold tracking-[-0.01em]">{p.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${p.dark ? "text-white/55" : "text-black/45"}`}>
                {p.blurb}
              </p>

              <p className="mt-10 flex items-baseline gap-1.5 md:mt-14">
                <span className="text-5xl font-bold tracking-[-0.03em]">{p.price}</span>
                <span className="text-sm font-medium">
                  <sup>+</sup>/website
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className={`rounded-md px-3 py-1.5 text-xs font-semibold ${p.dark ? "bg-white text-black" : "bg-black text-white"}`}>
                  Development
                </span>
                <span className={`rounded-md border px-3 py-1.5 text-xs font-medium ${p.dark ? "border-white/25 text-white/85" : "border-black/20 text-black/70"}`}>
                  Design + Development
                </span>
              </div>

              <p className="mt-9 text-sm font-semibold">What's included</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`flex gap-2.5 text-sm ${p.dark ? "text-white/65" : "text-black/50"}`}>
                    <span className="mt-0.5">+</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 px-6 pb-14 md:flex-row md:items-start md:gap-16 md:px-14">
          <p className="shrink-0 text-sm font-semibold md:w-64">Custom quotes and add-ons</p>
          <p className="max-w-3xl text-sm leading-relaxed text-black/45">
            These prices are general estimates based on typical custom website scopes.{" "}
            <span className="font-semibold text-black">Framer template</span> customisation, branding, copywriting, and
            other supporting digital assets are quoted separately where needed. All enquiries begin with a
            questionnaire, followed by a personalised quote.
          </p>
        </div>
      </section>

      <SiteClosing />
    </main>
  );
}
