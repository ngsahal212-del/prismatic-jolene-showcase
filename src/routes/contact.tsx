import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { SiteClosing } from "@/components/SiteClosing";
import portrait from "@/assets/portrait-jo.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jolene Koekemoer" },
      {
        name: "description",
        content:
          "Get in touch with Jolene Koekemoer — website designer and no-code developer. Leave your contact details and request.",
      },
      { property: "og:title", content: "Contact — Jolene Koekemoer" },
      {
        property: "og:description",
        content: "Leave your contact details and request. I'd be happy to respond as soon as possible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const nav = [
  { label: "Home", index: "01", to: "/" },
  { label: "Portfolio", index: "02", to: "/portfolio" },
  { label: "Contact", index: "03", to: "/contact" },
];

function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-14">
        <Link to="/" className="text-sm font-medium tracking-tight">
          © J — K
        </Link>
        <nav className="flex items-center gap-8 text-sm" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="transition-colors duration-200 hover:text-black/50"
            >
              {item.label}
              <sup className="ml-1.5 text-[0.6em] font-medium text-black/45">{item.index}</sup>
            </Link>
          ))}
        </nav>
      </header>

      {/* Contact body */}
      <section className="grid gap-12 px-6 pb-16 pt-16 md:grid-cols-[1fr_1.35fr] md:gap-24 md:px-14 md:pt-24">
        {/* Left: details + portrait */}
        <div>
          <div className="text-sm leading-relaxed">
            <p>
              <span className="text-black/60">Phone.</span>{" "}
              <a href="tel:+34610341655" className="transition-colors hover:text-black/50">
                +34 610 341 655
              </a>
            </p>
            <p>
              <span className="text-black/60">Email.</span>{" "}
              <a
                href="mailto:jo@jolenekoekemoer.com"
                className="transition-colors hover:text-black/50"
              >
                jo@jolenekoekemoer.com
              </a>
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-md">
            <img
              src={portrait}
              alt="Grayscale portrait of Jolene Koekemoer"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Right: message form */}
        <form
          className="flex flex-col items-start"
          onSubmit={(e) => {
            e.preventDefault();
            if (!message.trim()) {
              toast.error("Please write a short message first.");
              return;
            }
            toast.success("Thanks! Your message has been noted.");
            setMessage("");
          }}
        >
          <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">Hey Jo...</h1>
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder="Leave your contact details and request. I'd be happy to respond as soon as possible."
            className="mt-2 w-full resize-none bg-transparent text-3xl font-medium leading-[1.1] tracking-[-0.02em] outline-none placeholder:text-black/25 md:text-5xl"
          />
          <button
            type="submit"
            className="mt-auto rounded-md border border-black/25 px-8 py-3 text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white active:scale-95"
          >
            Send
          </button>
        </form>
      </section>

      <SiteClosing showCta={false} />
    </main>
  );
}
