import Image from "next/image";

import { MENU } from "../lib/constants";
import { wa } from "../lib/utils";
import SectionHeader from "../components/shared/SectionHeader";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

function MenuCard({ emoji, name, desc, price, image }: (typeof MENU)[number]) {
    return (
        <a
            href={wa(`Hi! I'd like to order the ${name} 🍽️`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl overflow-hidden border border-[#F0DFC8]
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C2500A]/10
                       transition-all duration-300 cursor-pointer flex flex-col"
        >
            {/* Image area */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#FDF6EC]">
                {image ? (
                    <Image
        src={image} 
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
    
                       
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center text-6xl"
                        style={{
                            background:
                                "linear-gradient(135deg, #FDF6EC 0%, #F5E6D0 100%)"
                        }}
                    >
                        <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                            {emoji}
                        </span>
                    </div>
                )}

                {/* Bottom fade — blends image into card body */}
                <div
                    className="absolute inset-x-0 bottom-0 h-16
                                bg-gradient-to-t from-white/60 to-transparent"
                />

                {/* Price pill — floats over image bottom-left */}
                <div
                    className="absolute bottom-3 left-3 px-3 py-1 rounded-full
                               text-white text-sm font-bold"
                    style={{
                        background: "linear-gradient(135deg, #C2500A, #E8724A)"
                    }}
                >
                    ₦{price.toLocaleString()}
                </div>
            </div>

            {/* Card body */}
            <div className="p-4 pb-5 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-[#1A0F00] text-[0.95rem] leading-snug">
                    {name}
                </h3>
                <p className="text-[#4A2C0A]/50 text-xs mt-1.5 font-light leading-relaxed flex-1">
                    {desc}
                </p>
                <div
                    className="flex items-center gap-1.5 mt-4 text-[#C2500A] text-xs font-semibold
                               group-hover:gap-2.5 transition-all duration-200"
                >
                    <WhatsAppIcon size={13} />
                    Order on WhatsApp
                    <svg
                        className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5
                                   transition-all duration-200"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
