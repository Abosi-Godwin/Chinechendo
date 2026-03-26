// components/Menu.tsx
import { MENU } from "../lib/constants";
import { wa } from "../lib/utils";
import SectionHeader from "../components/shared/SectionHeader";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

function MenuCard({ emoji, name, desc, price }: (typeof MENU)[number]) {
    return (
        <a
            href={wa(`Hi! I'd like to order the ${name} 🍽️`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl overflow-hidden border border-[#F0DFC8]
                 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C2500A]/10
                 transition-all duration-300 cursor-pointer"
        >
            {/* Image placeholder */}
            <div
                className="aspect-[4/3] flex items-center justify-center text-5xl relative overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #FDF6EC 0%, #F5E6D0 100%)"
                }}
            >
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                    {emoji}
                </span>
                {/* Subtle inner vignette */}
                <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(245,230,208,0.8)]" />
            </div>

            <div className="p-4 pb-5">
                <h3 className="font-serif font-bold text-[#1A0F00] text-[0.95rem] leading-snug">
                    {name}
                </h3>
                <p className="text-[#4A2C0A]/45 text-xs mt-1 font-light leading-relaxed">
                    {desc}
                </p>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-[#C2500A] font-bold text-lg">{price}</p>
                    <span className="text-[#C2500A]/40 text-xs font-medium group-hover:text-[#C2500A]/70 transition-colors">
                        Order →
                    </span>
                </div>
            </div>
        </a>
    );
}

export default function Menu() {
    return (
        <section id="menu" className="py-24 bg-[#FDF6EC]">
            <div className="max-w-5xl mx-auto px-6">
                <SectionHeader
                    eyebrow="What We Cook"
                    title="Today's Favourites"
                    subtitle="Crafted fresh daily. Tap any item to order via WhatsApp."
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {MENU.map(item => (
                        <MenuCard key={item.name} {...item} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href={wa("Hi! Can I see the full menu? 🍽️")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#C2500A] to-[#E8724A] text-white font-semibold
                       px-8 py-4 rounded-2xl inline-flex items-center gap-2.5
                       shadow-lg shadow-[#C2500A]/25 hover:-translate-y-0.5 transition-transform"
                    >
                        See Full Menu on WhatsApp
                        <WhatsAppIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
