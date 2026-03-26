export const RESTAURANT = {
    name: "Big Taste",
    tagline: "Where Every Bite Tells a Story.",
    badge: "Est. 2019 · Artisan Kitchen",
    description:
        "Big Taste started as a tiny Sunday pop-up in a friend's backyard. Today we run a full kitchen — but the soul hasn't changed one bit. Everything is made from scratch, using locally sourced ingredients that change with the seasons.",
    descriptionExtra:
        "We believe food should be real, honest, and a little bit special. No shortcuts. No microwave. Just proper cooking, done with care.",
    phone: "+2348139333781",
    
    address: "iyekhie girls, opp. Hamaz filling station",
    addressSub: "Auchi 312101, Edo",
    hours: {
        weekday: "Mon–Fri: 11am – 10pm",
        weekend: "Sat–Sun: 10am – 11pm"
    },
    whatsapp: "+2348139333781",
    stats: [
        { value: "2,400+", label: "Happy Customers" },
        { value: "6 Days", label: "Open Per Week" },
        { value: "100%", label: "Made Fresh" }
    ]
};

export const MENU = [
    {
        emoji: "🍔",
        name: "Smoked Brisket Burger",
        desc: "Slow-smoked 12h, cheddar, pickled onion",
        price: "$14.99"
    },
    {
        emoji: "🍕",
        name: "Truffle Ricotta Pizza",
        desc: "Wood-fired, fresh basil, truffle oil",
        price: "$18.50"
    },
    {
        emoji: "🍗",
        name: "Herb Roasted Chicken",
        desc: "Rosemary, garlic butter, roasted veg",
        price: "$16.00"
    },
    {
        emoji: "🥗",
        name: "Garden Mezze Bowl",
        desc: "Hummus, falafel, tabbouleh, pita",
        price: "$13.50"
    },
    {
        emoji: "🍝",
        name: "Rigatoni Amatriciana",
        desc: "Guanciale, San Marzano, pecorino",
        price: "$15.00"
    },
    {
        emoji: "🍰",
        name: "Burnt Basque Cheesecake",
        desc: "Seasonal fruit compote, cream",
        price: "$9.00"
    }
];

export const REVIEWS = [
    {
        text: "The brisket burger is genuinely the best I've had in this city. I order it every single Friday without fail. The WhatsApp ordering is so convenient.",
        name: "Sarah M.",
        role: "Regular since 2021",
        initial: "S",
        featured: false
    },
    {
        text: "Ordered for a family gathering and everyone was obsessed. The herb chicken was perfectly moist and the portions are incredibly generous. We'll be back!",
        name: "James K.",
        role: "Food blogger",
        initial: "J",
        featured: true
    },
    {
        text: "The Basque cheesecake deserves its own award. Creamy, perfectly burnt on top, and the compote is seasonal — it changes every few weeks. Brilliant.",
        name: "Amara O.",
        role: "Dessert fanatic 🍰",
        initial: "A",
        featured: false
    }
];

export const NAV_LINKS = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
];
