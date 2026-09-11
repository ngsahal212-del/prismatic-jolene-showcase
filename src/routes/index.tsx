import { createFileRoute } from "@tanstack/react-router";
import fluted from "@/assets/fluted-glass.jpg";
import portrait from "@/assets/portrait-jo.jpg";

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
  { label: "Home", index: "01" },
  { label: "Portfolio", index: "02" },
  { label: "Contact", index: "03" },
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

function Index() {
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
                  href="#"
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
      <section className="w-full border-t border-white/10 bg-neutral-950 px-6 py-12 md:px-10 md:py-16">
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
    </main>
  );
}
