// components/FloatingWA.tsx
import { wa } from "../lib/utils";
import WhatsAppIcon from "../components/icons/WhatsAppIcon";

export default function FloatingWA() {
  return (
    <a
      href={wa("Hi! I want to place an order 🍽️")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 md:hidden
                 w-14 h-14 rounded-full
                 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white
                 flex items-center justify-center
                 shadow-2xl shadow-green-500/40
                 hover:scale-110 active:scale-95 transition-transform"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
