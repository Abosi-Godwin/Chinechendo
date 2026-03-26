// components/Contact.tsx
import { RESTAURANT } from "../lib/constants";
import { wa } from "../lib/utils";
import SectionHeader from "../components/shared/SectionHeader";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

const CONTACT_ITEMS = [
    {
        emoji: "📍",
        label: "Location",
        primary: RESTAURANT.address,
        secondary: RESTAURANT.addressSub
    },
    {
        emoji: "📞",
        label: "Phone",
        primary: RESTAURANT.phone,
        secondary: "Call or text anytime"
    },
    {
        emoji: "⏰",
        label: "Hours",
        primary: RESTAURANT.hours.weekday,
        secondary: RESTAURANT.hours.weekend
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#FDF6EC]">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeader eyebrow="Find Us" title="Come Say Hello" />

                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                    {/* Info cards */}
                    <div className="flex flex-col gap-4">
                        {CONTACT_ITEMS.map(
                            ({ emoji, label, primary, secondary }) => (
                                <div
                                    key={label}
                                    className="bg-white rounded-3xl p-5 border border-[#F0DFC8]
                           flex items-center gap-5 hover:border-[#E8724A]/20 transition-colors"
                                >
                                    <div
                                        className="w-13 h-13 min-w-[3.25rem] min-h-[3.25rem] rounded-2xl flex items-center
                             justify-center text-2xl"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #FDF6EC, #F5E6D0)"
                                        }}
                                    >
                                        {emoji}
                                    </div>
                                    <div>
                                        <p className="text-[#4A2C0A]/45 text-[10px] font-semibold uppercase tracking-widest">
                                            {label}
                                        </p>
                                        <p className="text-[#1A0F00] font-semibold text-[0.95rem] mt-0.5">
                                            {primary}
                                        </p>
                                        {secondary && (
                                            <p className="text-[#4A2C0A]/50 text-sm font-light">
                                                {secondary}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* CTA card */}
                    <div
                        className="rounded-3xl p-8 flex flex-col justify-center text-center relative overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(155deg, #1A0F00 0%, #2E1505 100%)"
                        }}
                    >
                        {/* Corner glows */}
                        <div
                            className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(194,80,10,0.2), transparent 70%)"
                            }}
                        />
                        <div
                            className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(232,114,74,0.08), transparent 70%)"
                            }}
                        />

                        <div className="relative z-10">
                            <div
                                className="text-5xl mb-5 select-none"
                                style={{
                                    filter: "drop-shadow(0 8px 20px rgba(194,80,10,0.5))"
                                }}
                            >
                                🛵
                            </div>
                            <h3 className="font-serif font-bold text-[#FDF6EC] text-2xl mb-3 leading-tight">
                                Ready to Order?
                            </h3>
                            <p className="text-[#F5E6D0]/50 font-light mb-8 text-sm leading-[1.8]">
                                Skip the queue. Chat with us on WhatsApp and
                                we'll have it ready for pickup or delivered hot
                                to your door.
                            </p>
                            <a
                                href={wa("Hi! I want to place an order 🍽️")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold
                           px-8 py-4 rounded-2xl w-full inline-flex items-center justify-center gap-3
                           text-base shadow-2xl shadow-green-500/20
                           hover:-translate-y-0.5 hover:shadow-green-500/35 transition-all"
                            >
                                <WhatsAppIcon size={21} />
                                Chat &amp; Order Now
                            </a>
                            <p className="text-[#F5E6D0]/25 text-xs mt-4">
                                Usually replies within 5 minutes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
