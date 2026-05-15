// components/Hero.tsx
import { RESTAURANT } from "../lib/constants";
import { wa } from "../lib/utils";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

// Floating ingredient/drink orbs for atmosphere
function FloatingOrb({
    emoji,
    x,
    y,
    size,
    delay,
    duration
}: {
    emoji: string;
    x: string;
    y: string;
    size: number;
    delay: string;
    duration: string;
}) {
    return (
        <div
            className="absolute select-none pointer-events-none"
            style={{
                left: x,
                top: y,
                fontSize: `${size}px`,
                animationDelay: delay,
                animation: `float ${duration} ease-in-out infinite`,
                filter: "drop-shadow(0 8px 24px rgba(212,168,83,0.3))",
                opacity: 0.18
            }}
        >
            {emoji}
        </div>
    );
}

// Thin decorative lines — luxury editorial feel
function DecoLines() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top horizontal rule */}
            <div
                className="absolute"
                style={{
                    top: "11%",
                    left: "5%",
                    width: "18%",
                    height: "1px",
                    background:
                        "linear-gradient(to right, transparent, #D4A853, transparent)",
                    opacity: 0.3
                }}
            />
            {/* Vertical accent left edge */}
            <div
                className="absolute"
                style={{
                    top: "20%",
                    left: "5.5%",
                    width: "1px",
                    height: "60%",
                    background:
                        "linear-gradient(to bottom, transparent, #8B1A2F55, transparent)"
                }}
            />
            {/* Bottom horizontal rule */}
            <div
                className="absolute"
                style={{
                    bottom: "13%",
                    right: "8%",
                    width: "12%",
                    height: "1px",
                    background:
                        "linear-gradient(to left, transparent, #D4A853, transparent)",
                    opacity: 0.25
                }}
            />
        </div>
    );
}

// The dual-identity visual composition — restaurant meets bar
function DualComposition() {
    return (
        <div
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
            style={{ right: "-40px", width: "520px", height: "520px" }}
        >
            {/* Outer slow-spin dashed ring */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: "1px dashed rgba(212,168,83,0.15)",
                    animation: "spin 90s linear infinite"
                }}
            />
            {/* Mid ring — burgundy glow */}
            <div
                className="absolute rounded-full"
                style={{
                    inset: "40px",
                    border: "1px solid rgba(139,26,47,0.25)",
                    boxShadow:
                        "inset 0 0 80px rgba(139,26,47,0.12), 0 0 60px rgba(139,26,47,0.08)"
                }}
            />
            {/* Inner ring — gold shimmer */}
            <div
                className="absolute rounded-full"
                style={{
                    inset: "90px",
                    border: "2px solid rgba(212,168,83,0.2)",
                    boxShadow: "0 0 40px rgba(212,168,83,0.15)"
                }}
            />
            {/* Core glow blob */}
            <div
                className="absolute rounded-full"
                style={{
                    inset: "140px",
                    background:
                        "radial-gradient(circle at 45% 40%, rgba(212,168,83,0.2), rgba(139,26,47,0.15) 50%, transparent 75%)",
                    boxShadow: "0 0 100px 30px rgba(212,168,83,0.08)"
                }}
            />

            {/* Restaurant side — plate, top-left of centre */}
            <div
                className="absolute z-10 flex flex-col items-center gap-1"
                style={{
                    top: "28%",
                    left: "22%",
                    transform: "translateY(-50%)"
                }}
            >
                <span
                    style={{
                        fontSize: "4.5rem",
                        filter: "drop-shadow(0 12px 28px rgba(212,168,83,0.5))"
                    }}
                >
                    🍽️
                </span>
                <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "rgba(212,168,83,0.5)" }}
                >
                    Restaurant
                </span>
            </div>

            {/* Bar side — glass, bottom-right of centre */}
            <div
                className="absolute z-10 flex flex-col items-center gap-1"
                style={{
                    bottom: "28%",
                    right: "22%",
                    transform: "translateY(50%)"
                }}
            >
                <span
                    style={{
                        fontSize: "4.5rem",
                        filter: "drop-shadow(0 12px 28px rgba(139,26,47,0.6))"
                    }}
                >
                    🍷
                </span>
                <span
                    className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "rgba(139,26,47,0.6)" }}
                >
                    Bar
                </span>
            </div>

            {/* Orbiting accent dots — gold */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: i % 2 === 0 ? "6px" : "4px",
                        height: i % 2 === 0 ? "6px" : "4px",
                        top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 220}px - 3px)`,
                        left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 220}px - 3px)`,
                        background: i % 2 === 0 ? "#D4A853" : "#8B1A2F",
                        opacity: 0.25 + i * 0.06
                    }}
                />
            ))}
        </div>
    );
}

// Location pill — distinctive for a GRA venue
function LocationPill() {
    return (
        <div
            className="inline-flex items-center gap-2 mb-8"
            style={{
                background: "rgba(212,168,83,0.07)",
                border: "1px solid rgba(212,168,83,0.18)",
                borderRadius: "999px",
                padding: "6px 16px"
            }}
        >
            <span style={{ color: "#D4A853", fontSize: "10px" }}>📍</span>
            <span
                style={{
                    color: "#D4A853",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase"
                }}
            >
                GRA, Onitsha · Est. Restaurant & Bar
            </span>
        </div>
    );
}

// Badge trio — restaurant / bar / vibe
function IdentityBadges() {
    const items = [
        { icon: "🍛", label: "Nigerian Cuisine" },
        { icon: "🍷", label: "Full Bar" },
        { icon: "🌆", label: "GRA Onitsha" }
    ];
    return (
        <div className="flex flex-wrap gap-3 mt-9">
            {items.map(b => (
                <span
                    key={b.label}
                    className="inline-flex items-center gap-2"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "999px",
                        padding: "8px 16px",
                        color: "rgba(250,244,232,0.6)",
                        fontSize: "12px",
                        fontWeight: 500,
                        backdropFilter: "blur(8px)"
                    }}
                >
                    <span>{b.icon}</span>
                    {b.label}
                </span>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <>
            {/* Float keyframes injected once */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-14px) rotate(3deg); }
          66%       { transform: translateY(8px) rotate(-2deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-word {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

            <section
                id="hero"
                className="relative min-h-screen flex items-center overflow-hidden"
                style={{
                    background:
                        "linear-gradient(145deg, #04060A 0%, #0A0810 25%, #120818 50%, #1A0812 75%, #200A10 100%)"
                }}
            >
                {/* ── Noise grain ── */}
                <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
                    }}
                />

                {/* ── Atmosphere blobs ── */}
                {/* Gold glow — restaurant warmth, top right */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        width: "700px",
                        height: "700px",
                        top: "-200px",
                        right: "-80px",
                        background:
                            "radial-gradient(circle, rgba(212,168,83,0.11) 0%, rgba(180,120,40,0.06) 40%, transparent 65%)"
                    }}
                />
                {/* Burgundy glow — bar depth, bottom left */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        width: "500px",
                        height: "500px",
                        bottom: "-150px",
                        left: "-100px",
                        background:
                            "radial-gradient(circle, rgba(139,26,47,0.14) 0%, rgba(100,10,30,0.08) 45%, transparent 65%)"
                    }}
                />
                {/* Centre ambient warmth */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        width: "800px",
                        height: "400px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background:
                            "radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 60%)"
                    }}
                />

                {/* ── Floating atmosphere emojis ── */}
                <FloatingOrb
                    emoji="🌶️"
                    x="6%"
                    y="20%"
                    size={26}
                    delay="0s"
                    duration="7s"
                />
                <FloatingOrb
                    emoji="🧄"
                    x="14%"
                    y="72%"
                    size={20}
                    delay="1.5s"
                    duration="9s"
                />
                <FloatingOrb
                    emoji="🫒"
                    x="58%"
                    y="10%"
                    size={18}
                    delay="0.8s"
                    duration="8s"
                />
                <FloatingOrb
                    emoji="🥃"
                    x="70%"
                    y="80%"
                    size={22}
                    delay="2.5s"
                    duration="6s"
                />
                <FloatingOrb
                    emoji="🌿"
                    x="82%"
                    y="25%"
                    size={16}
                    delay="3.2s"
                    duration="11s"
                />

                {/* ── Thin editorial lines ── */}
                <DecoLines />

                {/* ── Right visual composition ── */}
                <DualComposition />

                {/* ── Main content ── */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40 w-full">
                    <div className="max-w-[560px]">
                        {/* Location pill */}
                        <LocationPill />

                        {/* Headline — editorial mixed weight */}
                        <h1
                            className="leading-[0.9] mb-8"
                            style={{
                                fontFamily:
                                    "'Georgia', 'Times New Roman', serif",
                                letterSpacing: "-0.03em"
                            }}
                        >
                            {/* Line 1 — thin weight, muted */}
                            <span
                                className="block hero-word"
                                style={{
                                    fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                                    fontWeight: 300,
                                    color: "rgba(250,244,232,0.45)",
                                    animationDelay: "0s",
                                    marginBottom: "0.05em"
                                }}
                            >
                                Good Food.
                            </span>

                            {/* Line 2 — heavy, gold, dominant */}
                            <span
                                className="block hero-word relative"
                                style={{
                                    fontSize: "clamp(3.8rem, 10vw, 7rem)",
                                    fontWeight: 900,
                                    fontStyle: "italic",
                                    color: "#D4A853",
                                    animationDelay: "0.1s",
                                    lineHeight: 1,
                                    textShadow: "0 0 80px rgba(212,168,83,0.3)"
                                }}
                            >
                                Cold Drinks.
                                {/* Underline flourish */}
                                <svg
                                    className="absolute -bottom-2 left-0"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    style={{ width: "100%", height: "10px" }}
                                >
                                    <path
                                        d="M4 8 Q75 2 150 7 Q225 12 296 5"
                                        stroke="#8B1A2F"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        fill="none"
                                        opacity="0.6"
                                    />
                                </svg>
                            </span>

                            {/* Line 3 — medium weight, cream */}
                            <span
                                className="block hero-word"
                                style={{
                                    fontSize: "clamp(2.8rem, 7.5vw, 5.2rem)",
                                    fontWeight: 700,
                                    color: "rgba(250,244,232,0.9)",
                                    animationDelay: "0.2s",
                                    marginTop: "0.08em"
                                }}
                            >
                                Great Company.
                            </span>
                        </h1>

                        {/* Divider rule */}
                        <div
                            className="mb-7"
                            style={{
                                width: "48px",
                                height: "2px",
                                background:
                                    "linear-gradient(to right, #8B1A2F, #D4A853)",
                                borderRadius: "999px"
                            }}
                        />

                        {/* Subheading */}
                        <p
                            style={{
                                color: "rgba(250,244,232,0.55)",
                                fontSize: "1.05rem",
                                fontWeight: 300,
                                lineHeight: 1.8,
                                maxWidth: "420px",
                                marginBottom: "2.5rem",
                                fontFamily: "Georgia, serif"
                            }}
                        >
                            Authentic Nigerian cuisine and a well-stocked bar in
                            the heart of{" "}
                            <em
                                style={{
                                    color: "rgba(212,168,83,0.8)",
                                    fontStyle: "normal"
                                }}
                            >
                                GRA, Onitsha.
                            </em>{" "}
                            Your table is always ready.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Primary — WhatsApp order */}
                            <a
                                href={wa("Hi! I want to place an order 🍽️")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 font-semibold
                           hover:-translate-y-0.5 transition-all duration-200"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #25D366, #128C7E)",
                                    color: "#fff",
                                    padding: "15px 28px",
                                    borderRadius: "14px",
                                    fontSize: "15px",
                                    boxShadow:
                                        "0 8px 32px rgba(37,211,102,0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
                                }}
                            >
                                <WhatsAppIcon size={20} />
                                Order on WhatsApp
                            </a>

                            {/* Secondary — Menu */}
                            <a
                                href="#menu"
                                className="inline-flex items-center justify-center gap-2 font-medium
                           hover:-translate-y-0.5 transition-all duration-200"
                                style={{
                                    color: "rgba(250,244,232,0.75)",
                                    padding: "15px 24px",
                                    borderRadius: "14px",
                                    border: "1px solid rgba(212,168,83,0.2)",
                                    background: "rgba(212,168,83,0.05)",
                                    fontSize: "15px"
                                }}
                            >
                                Explore Menu
                                <svg
                                    width="14"
                                    height="14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>

                            {/* Tertiary — Bar */}
                            <a
                                href="#bar"
                                className="inline-flex items-center justify-center gap-2 font-medium
                           hover:-translate-y-0.5 transition-all duration-200"
                                style={{
                                    color: "rgba(139,26,47,0.9)",
                                    padding: "15px 24px",
                                    borderRadius: "14px",
                                    border: "1px solid rgba(139,26,47,0.25)",
                                    background: "rgba(139,26,47,0.07)",
                                    fontSize: "15px"
                                }}
                            >
                                🍷 See the Bar
                            </a>
                        </div>

                        {/* Identity badges */}
                        <IdentityBadges />
                    </div>
                </div>

                {/* ── Scroll indicator ── */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <p
                        style={{
                            color: "rgba(212,168,83,0.3)",
                            fontSize: "9px",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            fontWeight: 600
                        }}
                    >
                        Scroll
                    </p>
                    <div
                        style={{
                            width: "1px",
                            height: "40px",
                            background:
                                "linear-gradient(to bottom, rgba(212,168,83,0.3), transparent)"
                        }}
                    />
                    <div
                        className="animate-bounce"
                        style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "999px",
                            background: "#D4A853",
                            opacity: 0.4
                        }}
                    />
                </div>
            </section>
        </>
    );
}
