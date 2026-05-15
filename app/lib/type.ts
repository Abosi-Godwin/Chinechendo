import type { StaticImageData } from "next/image";


type Stat = {
    value: string;
    label: string;
};

type Restaurant = {
    name: string;
    shortName: string;
    tagline: string;
    badge: string;
    description: string;
    descriptionExtra: string;
    phone: string;
    address: string;
    addressSub: string;
    hours: {
        weekday: string;
        weekend: string;
    };
    whatsapp: string;
    stats: Stat[];
};
 

type MenuItem = {
    emoji: string;
    name: string;
    desc: string;
    price: number;
    image?: StaticImageData;   
};
type Review = {
    text: string;
    name: string;
    role: string;
    initial: string;
    featured: boolean;
};

type NavLink = {
    label: string;
    href: string;
};

export { Restaurant, MenuItem, Review, NavLink };
