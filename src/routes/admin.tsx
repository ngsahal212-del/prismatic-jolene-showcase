import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Jolene Koekemoer" },
      {
        name: "description",
        content:
          "Minimal admin panel to manage the hero, about, portfolio, services, testimonials, pricing and enquiries.",
      },
      { property: "og:title", content: "Admin — Jolene Koekemoer" },
      {
        property: "og:description",
        content: "Manage every section of the portfolio site from one quiet, minimal dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type SectionKey =
  | "overview"
  | "hero"
  | "about"
  | "portfolio"
  | "services"
  | "testimonials"
  | "estimates"
  | "messages"
  | "settings";

const NAV: { key: SectionKey; label: string; index: string }[] = [
  { key: "overview", label: "Overview", index: "00" },
  { key: "hero", label: "Hero", index: "01" },
  { key: "about", label: "About", index: "02" },
  { key: "portfolio", label: "Portfolio", index: "03" },
  { key: "services", label: "Services", index: "04" },
  { key: "testimonials", label: "Testimonials", index: "05" },
  { key: "estimates", label: "Estimates", index: "06" },
  { key: "messages", label: "Enquiries", index: "07" },
  { key: "settings", label: "Settings", index: "08" },
];

/* ------------------------------ small pieces ------------------------------ */

function Field({
  label,
  value,
  onChange,
  area = false,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  area?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{label}</span>
      {area ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="mt-2 w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900"
        />
      )}
      {hint ? <span className="mt-1.5 block text-xs text-neutral-400">{hint}</span> : null}
    </label>
  );
}

function Panel({
  title,
  meta,
  children,
  onSave,
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
  onSave?: () => void;
}) {
  return (
    <section className="animate-fade-in">
      <header className="flex flex-wrap items-end justify-between gap-3 border-b border-neutral-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">{title}</h1>
          {meta ? <p className="mt-1 text-sm text-neutral-500">{meta}</p> : null}
        </div>
        {onSave ? (
          <button
            onClick={onSave}
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-transform duration-200 hover:bg-neutral-800 active:scale-95"
          >
            Save changes
          </button>
        ) : null}
      </header>
      <div className="pt-7">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">{children}</div>
  );
}

/* --------------------------------- page ---------------------------------- */

function AdminPage() {
  const [active, setActive] = useState<SectionKey>("overview");
  const [navOpen, setNavOpen] = useState(false);

  const [hero, setHero] = useState({
    mark: "© J — K",
    line1: "Jolene",
    line2: "Koekemoer",
    intro:
      "Professional website designer and developer creating modern, user-friendly websites built for visibility, usability, and performance.",
  });

  const [about, setAbout] = useState({
    headline:
      "I’m Jo, a website designer and no-code developer with over a decade of experience, specialising in clean, scalable website design in Framer and Wix Studio.",
    background:
      "My design career started in graphic design in 2010, before naturally expanding into web design.",
    approach:
      "I work with a limited number of clients each year so I can give every project the attention it deserves.",
  });

  const [projects, setProjects] = useState([
    { name: "Voxdale BV", type: "Consulting", year: "2026", live: true },
    { name: "Wander & Co", type: "Hospitality", year: "2025", live: true },
    { name: "Northlight", type: "Energy", year: "2025", live: true },
    { name: "Studio Mara", type: "E-commerce", year: "2024", live: false },
    { name: "Kindred", type: "Nonprofit", year: "2023", live: true },
    { name: "Shootsy.io", type: "SaaS", year: "2022", live: true },
  ]);

  const [services] = useState([
    { name: "Planning", note: "Discovery, sitemap, content structure" },
    { name: "Design", note: "Figma design, brand-led layouts" },
    { name: "Development", note: "Framer / Wix Studio build" },
  ]);

  const [testimonials, setTestimonials] = useState([
    { name: "Stephanie Straatman", company: "Voxdale BV", featured: true },
    { name: "Marc de Vries", company: "Northlight", featured: false },
    { name: "Ana Ferreira", company: "Studio Mara", featured: false },
  ]);

  const [plans, setPlans] = useState([
    { name: "Landing Page", price: "1,400" },
    { name: "Multi-Page Website", price: "3,400" },
    { name: "Advanced Website", price: "8,500" },
  ]);

  const [messages, setMessages] = useState([
    { name: "Lisa Brandt", email: "lisa@studiomara.com", note: "Rebrand + 6 page site", read: false },
    { name: "Tom Keller", email: "tom@northlight.io", note: "Framer template setup", read: false },
    { name: "Ravi Menon", email: "ravi@kindred.org", note: "Nonprofit donation page", read: true },
  ]);

  const [settings, setSettings] = useState({
    email: "hello@jolenekoekemoer.com",
    location: "GMT+5:30",
    instagram: "@jolene.designs",
  });

  const saved = () => toast.success("Changes saved");

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 [font-family:'Inter_Tight',sans-serif]">
      <Toaster position="top-center" />

      {/* top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white/90 px-5 py-3.5 backdrop-blur md:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNavOpen((v) => !v)}
            className="rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs md:hidden"
          >
            Menu
          </button>
          <span className="text-sm font-bold tracking-tight">© J — K</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-neutral-400 sm:inline">
            Admin
          </span>
        </div>
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          View site
        </Link>
      </div>

      <div className="mx-auto flex max-w-[1400px]">
        {/* sidebar */}
        <aside
          className={`${navOpen ? "block" : "hidden"} w-full shrink-0 border-b border-neutral-200 bg-white px-5 py-5 md:sticky md:top-[57px] md:block md:h-[calc(100vh-57px)] md:w-64 md:border-b-0 md:border-r md:px-6 md:py-8`}
        >
          <nav className="space-y-0.5">
            {NAV.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActive(item.key);
                  setNavOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active === item.key
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-[10px] tracking-widest ${
                    active === item.key ? "text-neutral-400" : "text-neutral-300"
                  }`}
                >
                  {item.key === "messages" && unread > 0 ? `${unread} new` : `(${item.index})`}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* content */}
        <main className="min-w-0 flex-1 px-5 py-8 md:px-10 md:py-12">
          {active === "overview" && (
            <Panel title="Overview" meta="A quiet snapshot of the site right now.">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Projects", v: String(projects.length) },
                  { k: "Live projects", v: String(projects.filter((p) => p.live).length) },
                  { k: "Testimonials", v: String(testimonials.length) },
                  { k: "New enquiries", v: String(unread) },
                ].map((s) => (
                  <Card key={s.k}>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{s.k}</p>
                    <p className="mt-3 text-4xl font-bold tracking-tight">{s.v}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-2">
                <Card>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    Latest enquiries
                  </p>
                  <ul className="mt-4 space-y-3">
                    {messages.slice(0, 3).map((m) => (
                      <li key={m.email} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium">{m.name}</p>
                          <p className="text-sm text-neutral-500">{m.note}</p>
                        </div>
                        {!m.read && (
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    Sections
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {NAV.slice(1, 7).map((n) => (
                      <li key={n.key} className="flex items-center justify-between">
                        <button
                          onClick={() => setActive(n.key)}
                          className="text-neutral-700 transition-colors hover:text-neutral-900"
                        >
                          {n.label}
                        </button>
                        <span className="text-xs text-neutral-400">Published</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Panel>
          )}

          {active === "hero" && (
            <Panel title="Hero" meta="The first screen visitors land on." onSave={saved}>
              <div className="grid max-w-3xl gap-6">
                <Field label="Mark" value={hero.mark} onChange={(v) => setHero({ ...hero, mark: v })} />
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Name line 1"
                    value={hero.line1}
                    onChange={(v) => setHero({ ...hero, line1: v })}
                  />
                  <Field
                    label="Name line 2"
                    value={hero.line2}
                    onChange={(v) => setHero({ ...hero, line2: v })}
                  />
                </div>
                <Field
                  label="Intro paragraph"
                  area
                  value={hero.intro}
                  onChange={(v) => setHero({ ...hero, intro: v })}
                  hint="Shown beside the globe, bottom right."
                />
              </div>
            </Panel>
          )}

          {active === "about" && (
            <Panel title="About" meta="Section (01)" onSave={saved}>
              <div className="grid max-w-3xl gap-6">
                <Field
                  label="Headline"
                  area
                  value={about.headline}
                  onChange={(v) => setAbout({ ...about, headline: v })}
                />
                <Field
                  label="Background"
                  area
                  value={about.background}
                  onChange={(v) => setAbout({ ...about, background: v })}
                />
                <Field
                  label="Approach"
                  area
                  value={about.approach}
                  onChange={(v) => setAbout({ ...about, approach: v })}
                />
              </div>
            </Panel>
          )}

          {active === "portfolio" && (
            <Panel title="Portfolio" meta="Section (02) — six featured projects" onSave={saved}>
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                {projects.map((p, i) => (
                  <div
                    key={p.name}
                    className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-neutral-100 px-5 py-4 last:border-b-0 sm:grid-cols-[2rem_1fr_1fr_5rem_auto]"
                  >
                    <span className="hidden text-xs text-neutral-400 sm:block">
                      (0{i + 1})
                    </span>
                    <span className="text-sm font-medium">{p.name}</span>
                    <span className="hidden text-sm text-neutral-500 sm:block">{p.type}</span>
                    <span className="hidden text-sm text-neutral-500 sm:block">{p.year}</span>
                    <button
                      onClick={() =>
                        setProjects(
                          projects.map((x, xi) => (xi === i ? { ...x, live: !x.live } : x)),
                        )
                      }
                      className={`rounded-full px-3 py-1 text-xs transition-colors ${
                        p.live
                          ? "bg-neutral-900 text-white"
                          : "border border-neutral-200 text-neutral-500"
                      }`}
                    >
                      {p.live ? "Live" : "Hidden"}
                    </button>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {active === "services" && (
            <Panel title="Services" meta="Section (03)" onSave={saved}>
              <div className="grid gap-4 md:grid-cols-3">
                {services.map((s) => (
                  <Card key={s.name}>
                    <p className="text-lg font-bold tracking-tight">{s.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.note}</p>
                  </Card>
                ))}
              </div>
            </Panel>
          )}

          {active === "testimonials" && (
            <Panel title="Testimonials" meta="Section (04)" onSave={saved}>
              <div className="grid gap-4 md:grid-cols-3">
                {testimonials.map((t, i) => (
                  <Card key={t.name}>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="mt-1 text-sm text-neutral-500">{t.company}</p>
                    <button
                      onClick={() =>
                        setTestimonials(
                          testimonials.map((x, xi) => ({ ...x, featured: xi === i })),
                        )
                      }
                      className={`mt-4 rounded-full px-3 py-1 text-xs transition-colors ${
                        t.featured
                          ? "bg-neutral-900 text-white"
                          : "border border-neutral-200 text-neutral-500 hover:border-neutral-900"
                      }`}
                    >
                      {t.featured ? "Featured" : "Make featured"}
                    </button>
                  </Card>
                ))}
              </div>
            </Panel>
          )}

          {active === "estimates" && (
            <Panel title="Estimates" meta="Section (05) — pricing" onSave={saved}>
              <div className="grid gap-4 md:grid-cols-3">
                {plans.map((p, i) => (
                  <Card key={p.name}>
                    <p className="text-sm font-medium">{p.name}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-2xl font-bold">€</span>
                      <input
                        value={p.price}
                        onChange={(e) =>
                          setPlans(
                            plans.map((x, xi) =>
                              xi === i ? { ...x, price: e.target.value } : x,
                            ),
                          )
                        }
                        className="w-full border-b border-neutral-200 bg-transparent pb-1 text-2xl font-bold tracking-tight outline-none focus:border-neutral-900"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </Panel>
          )}

          {active === "messages" && (
            <Panel title="Enquiries" meta={`${unread} unread`}>
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                {messages.map((m, i) => (
                  <div
                    key={m.email}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 px-5 py-4 last:border-b-0"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium">
                        {m.name}{" "}
                        <span className="font-normal text-neutral-400">{m.email}</span>
                      </p>
                      <p className="truncate text-sm text-neutral-500">{m.note}</p>
                    </div>
                    <button
                      onClick={() =>
                        setMessages(messages.map((x, xi) => (xi === i ? { ...x, read: !x.read } : x)))
                      }
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                    >
                      {m.read ? "Mark unread" : "Mark read"}
                    </button>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {active === "settings" && (
            <Panel title="Settings" meta="Contact details and footer links" onSave={saved}>
              <div className="grid max-w-2xl gap-6">
                <Field
                  label="Email"
                  value={settings.email}
                  onChange={(v) => setSettings({ ...settings, email: v })}
                />
                <Field
                  label="Timezone label"
                  value={settings.location}
                  onChange={(v) => setSettings({ ...settings, location: v })}
                />
                <Field
                  label="Instagram"
                  value={settings.instagram}
                  onChange={(v) => setSettings({ ...settings, instagram: v })}
                />
              </div>
            </Panel>
          )}
        </main>
      </div>
    </div>
  );
}
