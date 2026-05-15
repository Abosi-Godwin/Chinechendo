// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["700", "900"],
    style: ["normal", "italic"],
    display: "swap"
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500", "600"],
    display: "swap"
});

export const metadata: Metadata = {
    title: "Chinechendo Restaurant And Bar",
    description:
        "Chinechendo is where Onitsha comes to eat, drink, and unwind."
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
