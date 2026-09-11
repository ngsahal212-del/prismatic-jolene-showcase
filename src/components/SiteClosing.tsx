import { useEffect, useState } from "react";

import fluted from "@/assets/fluted-glass.jpg";

export function SiteClosing({ showCta = true }: { showCta?: boolean }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(new Date()) + " GMT+5:30",
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* CTA banner */}
      {showCta && (
      <section id="contact" className="w-full bg-white px-4 pb-4 pt-2 md:px-6 md:pb-6">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={fluted}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
          <div className="relative flex h-[62vh] min-h-[420px] flex-col items-center justify-center gap-10 px-6">
            <div className="w-full overflow-hidden" aria-label="Let's talk about your project.">
              <div className="animate-marquee-x flex w-max whitespace-nowrap">
                {[0, 1].map((i) => (
                  <span
                    key={i}
                    aria-hidden={i === 1}
                    className="pr-16 text-[13vw] font-semibold leading-none tracking-[-0.03em] text-white md:text-[7vw]"
                  >
                    Let’s talk about your project.&nbsp;&nbsp;Let’s talk about your project.&nbsp;&nbsp;
                  </span>
                ))}
              </div>
            </div>
            <a
              href="mailto:hello@jolenekoekemoer.com"
              className="rounded-lg border border-white/60 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black active:scale-95"
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#0c0c0c] text-white">
        <div className="flex flex-col justify-between gap-10 px-6 pt-10 md:flex-row md:px-10">
          <div className="flex items-start gap-3 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M4 4h16l-8 8H4V4zm0 8h8l-8 8v-8zm8 0h8l-8 8 8-8z" fillRule="evenodd" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2z" />
            </svg>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            {[
              { label: "Contact", href: "mailto:hello@jolenekoekemoer.com" },
              { label: "Twitter / X", href: "https://x.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-md border border-white/25 px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 hover:bg-white hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </div>

          <nav className="flex flex-col items-start gap-1.5 text-sm font-medium md:items-end" aria-label="Footer">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Services", href: "/#services" },
              { label: "Estimates", href: "/#estimates" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="transition-colors duration-200 hover:text-white/60">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 px-6 md:mt-24 md:px-10">
          <p className="text-[13vw] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[8.5vw]">
            Jolene
            <br />
            Koekemoer
          </p>
          <div className="flex items-center justify-between pb-6 pt-8 text-xs text-white/70">
            <span className="flex-1 text-center">© 2026</span>
            <span>{time}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
