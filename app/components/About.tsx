// components/About.tsx
import { Flame } from "lucide-react";

import { RESTAURANT } from "../lib/constants";

function StatPill({ value, label }: { value: string; label: string }) {
    return (
        <div
            className="flex flex-col items-center text-center px-6 py-5 rounded-2xl
                    border border-[#E8724A]/15 bg-white/[0.03]"
        >
            <span
                className="font-serif font-black text-[#E8724A]"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
            >
                {value}
            </span>
            <span className="text-[#F5E6D0]/40 text-xs mt-1 font-light tracking-wide">
                {label}
            </span>
        </div>
    );
}

// Decorative corner brackets — frames the image/illustration area
function CornerBrackets() {
    const corner = "absolute w-8 h-8 border-[#E8724A]/30";
    return (
        <>
            <div
                className={`${corner} top-0 left-0   border-t-2 border-l-2 rounded-tl-lg`}
            />
            <div
                className={`${corner} top-0 right-0  border-t-2 border-r-2 rounded-tr-lg`}
            />
            <div
                className={`${corner} bottom-0 left-0  border-b-2 border-l-2 rounded-bl-lg`}
            />
            <div
                className={`${corner} bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg`}
            />
        </>
    );
}

// The visual centerpiece on the left: framed illustration with orbiting elements
function KitchenIllustration() {
    return (
        <div className="relative flex items-center justify-center w-full max-w-sm mx-auto lg:mx-0 aspect-square">
            {/* Dot grid background */}
            <div
                className="absolute inset-0 rounded-3xl opacity-[0.08]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #E8724A 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            {/* Main glow orb */}
            <div
                className="absolute inset-12 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle at 45% 40%, rgba(232,114,74,0.25) 0%, rgba(194,80,10,0.12) 50%, transparent 75%)",
                    boxShadow: "0 0 100px 30px rgba(194,80,10,0.1)"
                }}
            />

            {/* Outer ring */}
            <div className="absolute inset-6 rounded-full border border-[#E8724A]/10" />
            {/* Mid ring */}
            <div
                className="absolute inset-14 rounded-full border border-dashed border-[#E8724A]/15
                      animate-[spin_40s_linear_infinite]"
            />

            {/* Framed content box */}
            <div
                className="relative z-10 p-8 rounded-2xl"
                style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(4px)"
                }}
            >
                <CornerBrackets />
                <div className="text-center px-4 py-2">
                    <div
                        className="text-7xl mb-2 select-none text-center"
                        style={{
                            filter: "drop-shadow(0 16px 32px rgba(194,80,10,0.5))"
                        }}
                    >
                        <Flame
                            className="w-16 h-16 text-center text-orange-500
                        inline-block"
                        />
                    </div>
                    <p className="font-serif italic text-[#E8724A]/70 text-sm tracking-wide">
                        "Cooked with soul"
                    </p>
                </div>
            </div>

            {/* Floating ingredient badges */}
            {[
                { emoji: "🌿", top: "10%", left: "5%", delay: "0s" },
                { emoji: "🧄", top: "18%", right: "4%", delay: "1.5s" },
                { emoji: "🫒", bottom: "22%", left: "2%", delay: "3s" },
                { emoji: "🌶️", bottom: "12%", right: "6%", delay: "2s" }
            ].map(({ emoji, delay, ...pos }) => (
                <div
                    key={emoji}
                    className="absolute w-10 h-10 rounded-xl bg-[#FDF6EC]/05 border border-[#E8724A]/15
                     flex items-center justify-center text-xl
                     animate-[float_5s_ease-in-out_infinite]"
                    style={{ ...pos, animationDelay: delay }}
                >
                    {emoji}
                </div>
            ))}
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about"
            className="relative py-28 overflow-hidden"
            style={{
                background:
                    "linear-gradient(160deg, #0E0800 0%, #1A0F00 40%, #2A1500 100%)"
            }}
        >
            {/* Subtle full-section dot grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #E8724A 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />

            {/* Top-right corner glow */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 80% 20%, rgba(194,80,10,0.12) 0%, transparent 65%)"
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: illustration */}
                    <KitchenIllustration />

                    {/* Right: copy */}
                    <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-px bg-[#E8724A]/50" />
                            <p className="text-[#E8724A] text-xs font-semibold tracking-[0.2em] uppercase">
                                Our Story
                            </p>
                        </div>

                        <h2
                            className="font-serif font-black text-[#FDF6EC] mb-6"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em"
                            }}
                        >
                            Cooking with Heart
                            <br />
                            <span className="text-[#E8724A]">Since 2019.</span>
                        </h2>

                        <p className="text-[#F5E6D0]/60 font-light leading-[1.85] mb-4 text-[0.95rem]">
                            {RESTAURANT.description}
                        </p>
                        <p className="text-[#F5E6D0]/60 font-light leading-[1.85] mb-10 text-[0.95rem]">
                            {RESTAURANT.descriptionExtra}
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-[#E8724A]/20 via-[#E8724A]/10 to-transparent mb-8" />

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-3">
                            {RESTAURANT.stats.map(s => (
                                <StatPill key={s.label} {...s} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
