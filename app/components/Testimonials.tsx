// components/Testimonials.tsx
import { REVIEWS } from "../lib/constants";
import SectionHeader from "../components/shared/SectionHeader";

function ReviewCard({
    text,
    name,
    role,
    initial,
    featured
}: (typeof REVIEWS)[number]) {
    if (featured) {
        return (
            <div
                className="rounded-3xl p-7 relative overflow-hidden"
                style={{
                    background: "linear-gradient(145deg, #1A0F00, #2E1505)",
                    transform: "scale(1.04)",
                    boxShadow: "0 24px 60px rgba(194,80,10,0.2)"
                }}
            >
                {/* Glow accent */}
                <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(232,114,74,0.2), transparent 70%)"
                    }}
                />
                <p className="font-serif text-[5rem] leading-[0.75] text-[#E8724A]/25 select-none mb-1">
                    "
                </p>
                <p className="text-[#F5E6D0]/80 font-light leading-[1.75] text-[0.92rem]">
                    {text}
                </p>
                <div className="flex items-center gap-3 mt-6">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[#1A0F00]"
                        style={{ background: "#E8724A" }}
                    >
                        {initial}
                    </div>
                    <div>
                        <p className="font-semibold text-[#FDF6EC] text-sm">
                            {name}
                        </p>
                        <p className="text-[#F5E6D0]/35 text-xs">{role}</p>
                    </div>
                    <div className="ml-auto text-[#E8724A] text-sm tracking-wider">
                        ★★★★★
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="bg-white rounded-3xl p-7 border border-[#F0DFC8]
                    hover:border-[#E8724A]/20 hover:shadow-lg hover:shadow-[#C2500A]/05
                    transition-all duration-300"
        >
            <p className="font-serif text-[4.5rem] leading-[0.75] text-[#E8724A]/20 select-none mb-1">
                "
            </p>
            <p className="text-[#4A2C0A]/75 font-light leading-[1.75] text-[0.92rem]">
                {text}
            </p>
            <div className="flex items-center gap-3 mt-6">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{
                        background: "linear-gradient(135deg, #C2500A, #E8724A)"
                    }}
                >
                    {initial}
                </div>
                <div>
                    <p className="font-semibold text-[#1A0F00] text-sm">
                        {name}
                    </p>
                    <p className="text-[#4A2C0A]/40 text-xs">{role}</p>
                </div>
                <div className="ml-auto text-[#E8724A] text-sm tracking-wider">
                    ★★★★★
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#F5E6D0]">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeader
                    eyebrow="Kind Words"
                    title="What Our Guests Say"
                />
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    {REVIEWS.map(r => (
                        <ReviewCard key={r.name} {...r} />
                    ))}
                </div>
            </div>
        </section>
    );
}
