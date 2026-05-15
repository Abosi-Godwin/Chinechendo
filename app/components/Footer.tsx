// components/Footer.tsx
import { RESTAURANT, NAV_LINKS } from "../lib/constants";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { wa } from "../lib/utils";

export default function Footer() {
  const { name, address, addressSub, whatsapp } = RESTAURANT;
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #04060A 0%, #0A0810 50%, #120818 100%)",
      }}
    >
      {/* ── Atmosphere blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "300px",
          top: "-100px", left: "-80px",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px", height: "300px",
          bottom: "-80px", right: "-60px",
          background:
            "radial-gradient(ellipse, rgba(139,26,47,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ── Top border — gold gradient rule ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,168,83,0.4), rgba(139,26,47,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">

        {/* ── Main row ── */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand block */}
          <div className="flex flex-col gap-3">
            <p
              className="font-serif font-black italic"
              style={{
                fontSize: "1.7rem",
                color: "#D4A853",
                letterSpacing: "-0.02em",
                textShadow: "0 0 40px rgba(212,168,83,0.3)",
              }}
            >
              {name}
            </p>
            <p
              style={{
                color: "rgba(250,244,232,0.35)",
                fontSize: "12px",
                lineHeight: 1.7,
              }}
            >
              {address}<br />{addressSub}
            </p>
            {/* WhatsApp CTA */}
            <a
              href={wa("Hi! I want to place an order 🍽️")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-1
                         hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.2)",
                color: "#25D366",
                fontSize: "12px",
                fontWeight: 600,
                padding: "7px 14px",
                borderRadius: "999px",
                width: "fit-content",
              }}
            >
              <WhatsAppIcon size={13} />
              Order on WhatsApp
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p
              style={{
                color: "rgba(212,168,83,0.5)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Navigate
            </p>
            {NAV_LINKS.map(({ label, href }) => (
  <a
    key={href}
    href={href}
    className="text-[rgba(250,244,232,0.3)] hover:text-[#D4A853] transition-colors duration-200"
    style={{ fontSize: "13px" }}
  >
    {label}
  </a>
))}
          </div>
        </div>

        {/* ── Bottom rule + copyright ── */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(212,168,83,0.08)" }}
        >
          <p style={{ color: "rgba(250,244,232,0.15)", fontSize: "12px" }}>
            © {year} {name} · All rights reserved
          </p>
          <p style={{ color: "rgba(250,244,232,0.12)", fontSize: "11px" }}>
            Made with ❤️ and fire
          </p>
        </div>
      </div>
    </footer>
  );
}