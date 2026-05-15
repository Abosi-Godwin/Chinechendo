import { Restaurant, MenuItem, Review, NavLink } from "./type";

import image1 from "../../public/web pics/image1.jpg";
import image2 from "../../public/web pics/image2.jpg";
import image3 from "../../public/web pics/image3.jpg";
import image4 from "../../public/web pics/image4.jpg";
import image5 from "../../public/web pics/image5.jpg";
import image6 from "../../public/web pics/image6.jpg";

export const RESTAURANT: Restaurant = {
    name: "Chinechendo Restaurant And Bar",
    shortName: "Chinechendo",
    tagline: "Good Food. Cold Drinks. Great Company.",
    badge: "Nigerian Cuisine · Full Bar · GRA Onitsha",
    description:
        "Chinechendo is where Onitsha comes to eat, drink, and unwind. We serve authentic Nigerian dishes made fresh daily alongside a well-stocked bar — right in the heart of GRA.",
    descriptionExtra:
        "Whether you're grabbing a quick lunch, dining with family, or ending the night with friends — your table is always ready at 1A Ezenwa Street.",
    phone: "FILL_IN", // e.g. "+2348XXXXXXXXX"
    address: "1A Ezenwa Street, GRA",
    addressSub: "Onitsha, Anambra State",
    hours: {
        weekday: "Mon–Fri: 10am – 10pm", // FILL_IN — confirm with owner
        weekend: "Sat–Sun: 10am – 11pm" // FILL_IN
    },
    whatsapp: "+2349066016591",
    stats: [
        { value: "GRA", label: "Prime Location" },
        { value: "Full", label: "Bar Service" },
        { value: "Daily", label: "Fresh Meals" }
    ]
};

export const MENU: MenuItem[] = [
    {
        emoji: "🍛",
        image: image1,
        name: "Jollof Rice + Chicken",
        desc: "Smoky party jollof rice served with well-seasoned grilled chicken",
        price: 2500
    },
    {
        emoji: "🥣",
        image: image2,
        name: "Egusi Soup + Pounded Yam",
        desc: "Rich, thick egusi soup with assorted meat and fresh fish",
        price: 2500
    },
    {
        emoji: "🍲",
        image: image3,
        name: "Ofe Onugbu + Fufu",
        desc: "Traditional Igbo bitter leaf soup with assorted meat",
        price: 2500
    },
    {
        emoji: "🐟",
        image: image4,
        name: "Catfish Pepper Soup",
        desc: "Hot, spicy catfish pepper soup — the perfect bar companion",
        price: 2500
    },
    {
        emoji: "🍚",
        image: image5,
        name: "Fried Rice + Turkey",
        desc: "Well-seasoned fried rice with mixed vegetables and turkey",
        price: 2500
    },
    {
        emoji: "🥩",
        image: image6,
        name: "Nkwobi",
        desc: "Spiced cow foot in palm kernel sauce — a true Onitsha classic",
        price: 2500
    }
];

// Extend MenuItem type to include drink category
type DrinkItem = MenuItem & {
    category: "Beer" | "Cocktail" | "Local" | "Spirit" | "Non-Alcoholic";
};

export const DRINKS: DrinkItem[] = [
    {
        emoji: "🍺",
        name: "Star Lager",
        desc: "Nigeria's favourite cold lager",
        price: 5000,
        category: "Beer"
    },
    {
        emoji: "🍺",
        name: "Heineken",
        desc: "Smooth premium lager, served ice cold",
        price: 5000,
        category: "Beer"
    },
    {
        emoji: "🍺",
        name: "Guinness",
        desc: "Rich and full-bodied stout",
        price: 5000,
        category: "Beer"
    },
    {
        emoji: "🍹",
        name: "Chapman",
        desc: "Fruity, refreshing Nigerian cocktail with a kick",
        price: 5000,
        category: "Cocktail"
    },
    {
        emoji: "🥛",
        name: "Palm Wine",
        desc: "Fresh, naturally fermented — straight from the tap",
        price: 5000,
        category: "Local"
    },
    {
        emoji: "🥤",
        name: "Soft Drinks",
        desc: "Coke, Fanta, Sprite, Maltina and more",
        price: 5000,
        category: "Non-Alcoholic"
    }
];

// FILL_IN — pull these from the owner's Google reviews
export const REVIEWS: Review[] = [
    {
        text: "Mr A is good",
        name: "Mr A",
        role: "Customer",
        initial: "F",
        featured: true
    },
    {
        text: "Mr B is good",
        name: "Mr B",
        role: "Regular Customer",
        initial: "F",
        featured: false
    },
    {
        text: "He is g",
        name: "Mr G",
        role: "Customer",
        initial: "F",
        featured: false
    }
];

export const NAV_LINKS: NavLink[] = [
    { label: "Menu", href: "#menu" },
    { label: "Bar", href: "#bar" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
];
