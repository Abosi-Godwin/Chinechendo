// components/shared/SectionHeader.tsx

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean; // true = light text (for dark backgrounds)
}

export default function SectionHeader({ eyebrow, title, subtitle, light = false }: Props) {
  const mutedText  = light ? "text-[#F5E6D0]/50" : "text-[#4A2C0A]/60";
  const titleColor = light ? "text-[#FDF6EC]"    : "text-[#1A0F00]";

  return (
    <div className="flex flex-col items-center text-center mb-16">
      <p className="text-[#E8724A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
        {eyebrow}
      </p>
      <div className="w-10 h-px bg-gradient-to-r from-[#C2500A] to-[#E8724A] mb-5" />
      <h2
        className={`font-serif font-bold ${titleColor}`}
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`${mutedText} mt-3 max-w-sm text-base font-light`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
