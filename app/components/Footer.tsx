// components/Footer.tsx
import { RESTAURANT } from "../lib/constants";

const FOOTER_LINKS = [
  { label: "Top",     href: "#hero"         },
  { label: "Menu",    href: "#menu"         },
  { label: "Contact", href: "#contact"      },
];

export default function Footer() {
  const {name} = RESTAURANT;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080400" }} className="py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif font-bold text-xl text-[#FDF6EC]">
          {name} 
        </p>
        <p className="text-[#F5E6D0]/20 text-sm text-center">
          Made with ❤️ and fire &nbsp;·&nbsp; © {year} {name} Kitchen
        </p>
        <div className="flex gap-6">
          {FOOTER_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[#F5E6D0]/30 hover:text-[#E8724A] text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
