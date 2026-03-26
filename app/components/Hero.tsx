// components/Hero.tsx
import { RESTAURANT } from "../lib/constants";
import { wa } from "../lib/utils";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

// Decorative sparkle/star marks scattered in the background
function Sparkle({ x, y, size, delay }: { x: string; y: string; size: number; delay: string }) {
  return (
    <svg
      className="absolute opacity-20 animate-[spin_20s_linear_infinite]"
      style={{ left: x, top: y, animationDelay: delay }}
      width={size} height={size} viewBox="0 0 24 24" fill="#E8724A"
    >
      <path d="M12 2 L13.5 10 L21 12 L13.5 14 L12 22 L10.5 14 L3 12 L10.5 10 Z" />
    </svg>
  );
}

// The large decorative ring composition — right side visual anchor
function RingComposition() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px]
                    hidden lg:flex items-center justify-center pointer-events-none"
         style={{ right: "-60px" }}>
      {/* Outermost dashed ring */}
      <div className="absolute inset-0 rounded-full border border-dashed border-[#E8724A]/20
                      animate-[spin_60s_linear_infinite]" />
      {/* Outer solid ring */}
      <div className="absolute inset-8 rounded-full border border-[#E8724A]/10" />
      {/* Mid ring with glow */}
      <div className="absolute inset-16 rounded-full border-2 border-[#C2500A]/20
                      shadow-[0_0_60px_rgba(194,80,10,0.15)]" />
      {/* Inner filled circle – warm glow core */}
      <div
        className="absolute inset-28 rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 35%, #E8724A33, #C2500A22 50%, transparent 75%)",
          boxShadow: "0 0 80px 20px rgba(232,114,74,0.12)",
        }}
      />
      {/* Centre emoji */}
      <div className="relative z-10 text-[7rem] select-none"
           style={{ filter: "drop-shadow(0 20px 40px rgba(194,80,10,0.4))" }}>
        🍽️
      </div>
      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#E8724A]"
          style={{
            top:  `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 195}px - 6px)`,
            left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 195}px - 6px)`,
            opacity: 0.3 + i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

// Trust badge row
function TrustBadges() {
  const badges = ["🌿 Locally Sourced", "🔥 Made Fresh Daily", "⚡ Fast Delivery"];
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {badges.map((b) => (
        <span
          key={b}
          className="text-[#F5E6D0]/70 text-xs font-medium px-3 py-1.5 rounded-full
                     border border-[#F5E6D0]/15 bg-white/5 backdrop-blur-sm"
        >
          {b}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0E0800 0%, #1A0F00 30%, #3A1F05 60%, #6B2D0A 85%, #C2500A 100%)",
      }}
    >
      {/* ── Noise grain overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Radial glow blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px", height: "600px",
          top: "-150px", right: "-50px",
          background: "radial-gradient(circle, rgba(194,80,10,0.18) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px", height: "400px",
          bottom: "-100px", left: "-80px",
          background: "radial-gradient(circle, rgba(232,114,74,0.12) 0%, transparent 65%)",
        }}
      />

      {/* ── Sparkles ── */}
      <Sparkle x="8%"  y="18%" size={16} delay="0s"   />
      <Sparkle x="20%" y="70%" size={10} delay="2s"   />
      <Sparkle x="55%" y="12%" size={12} delay="1s"   />
      <Sparkle x="72%" y="78%" size={8}  delay="3.5s" />

      {/* ── Right-side decorative ring ── */}
      <RingComposition />

      {/* ── Diagonal accent line ── */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div
          className="absolute opacity-[0.04]"
          style={{
            width: "2px", height: "140%",
            top: "-20%", left: "48%",
            background: "linear-gradient(to bottom, transparent, #E8724A, transparent)",
            transform: "rotate(20deg)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 pt-40 w-full">
        <div className="max-w-[520px]">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8724A]/15 border border-[#E8724A]/25
                          rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8724A] animate-pulse" />
            <span className="text-[#E8724A] text-xs font-semibold tracking-[0.15em] uppercase">
              {RESTAURANT.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-black text-[#FDF6EC] leading-[0.95] mb-7"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 5.8rem)", letterSpacing: "-0.025em" }}
          >
            Where Every<br />
            {/* Highlighted word with underline flourish */}
            <span className="relative inline-block mr-3">
              <em className="not-italic text-[#E8724A]">Bite</em>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 10" fill="none"
                preserveAspectRatio="none"
                style={{ height: "8px" }}
              >
                <path
                  d="M2 7 Q30 2 60 6 Q90 10 118 4"
                  stroke="#C2500A" strokeWidth="2.5"
                  strokeLinecap="round" fill="none" opacity="0.7"
                />
              </svg>
            </span>
            Tells<br />
            a Story.
          </h1>

          {/* Subheading */}
          <p className="text-[#F5E6D0]/65 text-[1.05rem] font-light leading-[1.75] mb-10 max-w-[400px]">
            Slow-cooked comfort food made with seasonal ingredients and a whole lot of love.
            Order fresh, delivered warm to your door.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={wa("Hi! I want to place an order 🍽️")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold
                         px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-3
                         text-base shadow-2xl shadow-green-500/25
                         hover:-translate-y-0.5 hover:shadow-green-500/40 transition-all duration-200"
            >
              <WhatsAppIcon size={21} />
              Order on WhatsApp
            </a>
            <a
              href="#menu"
              className="text-[#FDF6EC]/80 font-medium px-7 py-4 rounded-2xl
                         border border-[#FDF6EC]/15 hover:border-[#FDF6EC]/35 hover:bg-white/5
                         transition-all inline-flex items-center justify-center gap-2 text-base"
            >
              Explore Menu
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <TrustBadges />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-[#FDF6EC]/25 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-[#FDF6EC]/25 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-[#E8724A]/50 animate-bounce" />
      </div>
    </section>
  );
}
