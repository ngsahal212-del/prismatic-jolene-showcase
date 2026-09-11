import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteClosing } from "@/components/SiteClosing";
import proj01 from "@/assets/proj-01.jpg";
import proj02 from "@/assets/proj-02.jpg";
import proj03 from "@/assets/proj-03.jpg";
import proj04 from "@/assets/proj-04.jpg";
import proj05 from "@/assets/proj-05.jpg";
import proj06 from "@/assets/proj-06.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Jolene Koekemoer" },
      {
        name: "description",
        content:
          "Showcasing high-impact web design, development, and branding projects from 2022 to 2026.",
      },
      { property: "og:title", content: "Portfolio — Jolene Koekemoer" },
      {
        property: "og:description",
        content: "Showcasing high-impact web design, development, and branding projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const works = [
  { img: proj01, name: "Jessica Webster", category: "eCommerce", year: "2026" },
  { img: proj02, name: "Daka Safari Retreat", category: "Hospitality", year: "2025" },
  { img: proj03, name: "Aplin Martin", category: "Consulting", year: "2024" },
  { img: proj04, name: "New Leaders Foundation", category: "Nonprofit", year: "2023" },
  { img: proj05, name: "Samsar", category: "Energy", year: "2022" },
  { img: proj06, name: "Shootsy.io", category: "SaaS", year: "2022" },
];

const nav = [
  { label: "Home", index: "01", to: "/" },
  { label: "Portfolio", index: "02", to: "/portfolio" },
  { label: "Contact", index: "03", to: "/#contact" },
];

function PortfolioPage() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="text-sm font-medium tracking-tight">
          © J — K
        </Link>
        <nav className="flex items-center gap-8 text-sm" aria-label="Main">
          {nav.map((item) => (
            <a key={item.label} href={item.to} className="transition-colors duration-200 hover:text-black/50">
              {item.label}
              <sup className="ml-1.5 text-[0.6em] font-medium text-black/45">{item.index}</sup>
            </a>
          ))}
        </nav>
      </header>

      {/* Title block */}
      <section className="px-6 pb-10 pt-24 md:px-10 md:pt-40">
        <p className="text-xs text-black/60">(02)</p>
        <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="text-[13vw] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[6.5vw]">
            Portfolio
          </h1>
          <div className="flex items-end justify-between gap-10 md:pb-2">
            <p className="max-w-[180px] text-xs leading-snug text-black/55">
              Showcasing high-impact web design, development, and branding projects.
            </p>
            <p className="shrink-0 text-xs text-black/60">2022-2026</p>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section className="grid gap-x-4 gap-y-10 px-6 pb-20 md:grid-cols-2 md:px-10">
        {works.map((w, i) => (
          <article key={w.name} className="group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={w.img}
                alt={`${w.name} website mockup`}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between text-xs">
              <span className="text-black/50">({String(i + 1).padStart(2, "0")})</span>
              <span className="text-center">
                <span className="block text-sm font-medium">{w.name}</span>
                <span className="block text-black/50">{w.category}</span>
              </span>
              <span className="text-black/50">{w.year}</span>
            </div>
          </article>
        ))}
      </section>

      <SiteClosing />
    </main>
  );
}
