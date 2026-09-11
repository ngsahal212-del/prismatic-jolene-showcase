import { createFileRoute } from "@tanstack/react-router";
import fluted from "@/assets/fluted-glass.jpg";

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

function Index() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-neutral-900 [height:100dvh]">
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
    </main>
  );
}
