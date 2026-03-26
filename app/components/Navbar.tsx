// components/Navbar.tsx
import { RESTAURANT, NAV_LINKS } from "../lib/constants";
import { wa } from "../lib/utils";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

export default function Navbar() {
    const { name } = RESTAURANT;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6EC]/90 backdrop-blur-md border-b border-[#F0DFC8]">
            <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="font-serif font-bold text-xl text-[#1A0F00] tracking-tight"
                >
                    {name}
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-sm font-medium text-[#4A2C0A] hover:text-[#C2500A] transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href={wa("Hi! I want to place an order 🍽️")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-semibold
                     px-4 py-2 rounded-full flex items-center gap-2
                     shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-transform"
                >
                    <WhatsAppIcon size={15} />
                    Order Now
                </a>
            </div>
        </nav>
    );
}
