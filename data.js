// data.js - Full Product Database v29.0
const productsDB = [
    // --- LAPTOPS (10 Models) ---
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price: "$1,399",
        release_year: 2023,
        report_count: 420,
        links: {
            solver: "https://amzn.to/4ax1iM6",
            value: "https://amzn.to/4aLNfUh",
            antidote_1: "https://amzn.to/4kD8XgK", // Updated!
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        recommendations: {
            solver: { name: "MacBook Air M2", reason: "15+ hours battery. Real physical keys." },
            value: { name: "Dell XPS 13 (9315)", reason: "Traditional reliable layout, $400 cheaper." }
        },
        issues: [
            { name: "Dongle Hell", desc: "No headphone jack. Cannot charge & listen.", severity: 6, frequency: 10 },
            { name: "Touch Bar Freeze", desc: "Capacitive row stops responding.", severity: 8, frequency: 6 },
            { name: "Battery Anxiety", desc: "Lasts barely 5 hours.", severity: 7, frequency: 9 }
        ],
        antidotes: [
            { name: "USB-C Audio Adapter", desc: "Essential Fix" },
            { name: "Anker Prime 200W", desc: "Survival Gear" }
        ],
        persona: "Music Producers"
    },
    {
        id: "lenovo-loq-15",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15 (Intel)",
        price: "$899",
        release_year: 2024,
        report_count: 850,
        links: {
            solver: "https://amzn.to/4bS0yDI",
            value: "https://amzn.to/4qymUhm",
            antidote_1: "https://amzn.to/3OaX19O",
            antidote_2: "https://amzn.to/4kv8sFf"
        },
        recommendations: {
            solver: { name: "Acer Nitro 16", reason: "Superior dual-fan cooling prevents death." },
            value: { name: "ASUS TUF F15", reason: "Military-grade durability certification." }
        },
        issues: [
            { name: "Motherboard Failure", desc: "Intel HX CPUs frying VRMs. Dead in months.", severity: 10, frequency: 9 },
            { name: "Thermonuclear Heat", desc: "Hits 95°C easily. Throttles hard.", severity: 8, frequency: 10 },
            { name: "Battery Drain", desc: "Drains battery while plugged in.", severity: 6, frequency: 7 }
        ],
        antidotes: [
            { name: "Laptop Stand", desc: "Essential Fix" },
            { name: "IETS GT300 Cooler", desc: "Survival Gear" }
        ],
        persona: "Budget Gamers"
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15",
        price: "$2,499",
        release_year: 2024,
        report_count: 610,
        links: {
            solver: "https://amzn.to/4aoclHy",
            value: "https://amzn.to/3OCX12o",
            antidote_1: "https://amzn.to/46IyRJZ",
            antidote_2: "https://amzn.to/4aszZTn"
        },
        recommendations: {
            solver: { name: "ASUS ROG G16", reason: "Runs 10°C cooler." },
            value: { name: "Razer Blade 14", reason: "AMD chips = less heat/bloat." }
        },
        issues: [
            { name: "Spicy Pillow", desc: "Battery swells and bends chassis.", severity: 9, frequency: 8 },
            { name: "Surface Lava", desc: "Keyboard too hot to touch.", severity: 7, frequency: 10 },
            { name: "Bad Support", desc: "RMA takes forever.", severity: 5, frequency: 7 }
        ],
        antidotes: [
            { name: "IETS GT600", desc: "Essential Fix" },
            { name: "Mini Keyboard", desc: "Survival Gear" }
        ],
        persona: "Students"
    },
    {
        id: "hp-spectre-x360",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360",
        price: "$1,599",
        release_year: 2023,
        report_count: 230,
        links: {
            solver: "https://amzn.to/4kRtsXf",
            value: "https://amzn.to/3M6LAPV",
            antidote_1: "https://amzn.to/4aN0WCk",
            antidote_2: "https://amzn.to/3Obi3oO"
        },
        recommendations: {
            solver: { name: "Dell XPS 13", reason: "Solid hinge (non-convertible)." },
            value: { name: "Lenovo Yoga 9i", reason: "Better soundbar hinge." }
        },
        issues: [
            { name: "Hinge Snap", desc: "Loosens after 1 year of flipping.", severity: 7, frequency: 6 },
            { name: "Bloatware", desc: "System slowed by 15+ junk apps.", severity: 3, frequency: 10 },
            { name: "Heat", desc: "Hot in tablet mode.", severity: 5, frequency: 5 }
        ],
        antidotes: [
            { name: "Care Pack", desc: "Essential Fix" },
            { name: "Samsung SSD", desc: "Clean Backup" }
        ],
        persona: "Artists"
    },
    {
        id: "asus-tuf-a15",
        category: "laptop",
        brand: "ASUS",
        model: "TUF Gaming A15",
        price: "$999",
        release_year: 2023,
        report_count: 1100,
        links: {
            solver: "https://amzn.to/46wZnWM",
            value: "https://amzn.to/4rP6vGj",
            antidote_1: "https://amzn.to/4ttHnGR",
            antidote_2: "https://amzn.to/4rxSxZP"
        },
        recommendations: {
            solver: { name: "Lenovo Legion 5", reason: "Better screen response." },
            value: { name: "Acer Nitro V", reason: "Budget king." }
        },
        issues: [
            { name: "Jet Engine Fans", desc: "Loud (55dB+).", severity: 4, frequency: 10 },
            { name: "Ghost Screen", desc: "Blurry in fast games.", severity: 5, frequency: 9 },
            { name: "Plastic Build", desc: "Flexes easily.", severity: 3, frequency: 8 }
        ],
        antidotes: [
            { name: "Gaming Headset", desc: "Essential Fix" },
            { name: "Monitor", desc: "Survival Gear" }
        ],
        persona: "Library Users"
    },
    {
        id: "surface-laptop-5",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Laptop 5",
        price: "$1,299",
        release_year: 2022,
        report_count: 180,
        links: {
            solver: "https://amzn.to/4qx0a16",
            value: "https://amzn.to/3MBbFXr",
            antidote_1: "https://amzn.to/3Zu16Zb",
            antidote_2: "https://amzn.to/4qDObPt"
        },
        recommendations: {
            solver: { name: "Dell XPS 13", reason: "Aluminum stays clean." },
            value: { name: "Framework", reason: "Repairable." }
        },
        issues: [
            { name: "Glue Trap", desc: "Impossible to repair.", severity: 6, frequency: 10 },
            { name: "Alcantara Stain", desc: "Deck turns yellow.", severity: 4, frequency: 9 },
            { name: "Bezels", desc: "Dated design.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "Sleeve", desc: "Essential Fix" },
            { name: "Keyboard", desc: "Survival Gear" }
        ],
        persona: "DIY Fixers"
    },
    {
        id: "acer-swift-go",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14",
        price: "$799",
        release_year: 2023,
        report_count: 450,
        links: {
            solver: "https://amzn.to/4rejrp5",
            value: "https://amzn.to/4kAUrGn",
            antidote_1: "https://amzn.to/462RKXU",
            antidote_2: "https://amzn.to/4raPoP7"
        },
        recommendations: {
            solver: { name: "MacBook Air M1", reason: "Perfect trackpad." },
            value: { name: "Zenbook 14", reason: "OLED & Build." }
        },
        issues: [
            { name: "WiFi Dropouts", desc: "MediaTek card issues.", severity: 6, frequency: 8 },
            { name: "Trackpad", desc: "Plastic, sticky.", severity: 4, frequency: 9 },
            { name: "Bloatware", desc: "Popups.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "USB WiFi", desc: "Essential Fix" },
            { name: "Mouse", desc: "Survival Gear" }
        ],
        persona: "Remote Workers"
    },
    {
        id: "samsung-galaxy-book",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book 3",
        price: "$1,099",
        release_year: 2023,
        report_count: 310,
        links: {
            solver: "https://amzn.to/4cq58t4",
            value: "https://amzn.to/466tbt7",
            antidote_1: "https://amzn.to/46ORImL",
            antidote_2: "https://amzn.to/3MrfHkY"
        },
        recommendations: {
            solver: { name: "MacBook Air 15", reason: "Solid hinge." },
            value: { name: "LG Gram 16", reason: "Flexible magnesium." }
        },
        issues: [
            { name: "Crack-Gate", desc: "Thin glass cracks.", severity: 9, frequency: 5 },
            { name: "Wobble", desc: "Weak hinge.", severity: 4, frequency: 10 },
            { name: "Smudges", desc: "Fingerprint magnet.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "Hard Case", desc: "Essential Fix" },
            { name: "Keyboard", desc: "Survival Gear" }
        ],
        persona: "Travelers"
    },
    {
        id: "lenovo-legion-5",
        category: "laptop",
        brand: "Lenovo",
        model: "Legion 5",
        price: "$1,199",
        release_year: 2023,
        report_count: 980,
        links: {
            solver: "https://amzn.to/463YrsV",
            value: "https://amzn.to/3OpuxsR",
            antidote_1: "https://amzn.to/4kuLdLw",
            antidote_2: "https://amzn.to/4qtEyCJ"
        },
        recommendations: {
            solver: { name: "Zephyrus G14", reason: "Portable." },
            value: { name: "Legion 5 (Old)", reason: "Cheaper." }
        },
        issues: [
            { name: "WiFi Lottery", desc: "Realtek lag.", severity: 6, frequency: 8 },
            { name: "Heavy Brick", desc: "Massive charger.", severity: 3, frequency: 10 },
            { name: "Paint", desc: "Chipping.", severity: 2, frequency: 6 }
        ],
        antidotes: [
            { name: "Intel WiFi", desc: "Essential Fix" },
            { name: "Slim Charger", desc: "Survival Gear" }
        ],
        persona: "Gamers"
    },
    {
        id: "macbook-pro-13",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Pro 13 (M2)",
        price: "$1,299",
        release_year: 2022,
        report_count: 720,
        links: {
            solver: "https://amzn.to/3ZyvtO1",
            value: "https://amzn.to/3MsXTG7",
            antidote_1: "https://amzn.to/4adenvg",
            antidote_2: "https://amzn.to/3OCuytw"
        },
        recommendations: {
            solver: { name: "MacBook Pro 14", reason: "120Hz Screen." },
            value: { name: "MacBook Air M2", reason: "Better value." }
        },
        issues: [
            { name: "Zombie Touch Bar", desc: "No Esc key.", severity: 4, frequency: 10 },
            { name: "60Hz", desc: "Slow screen.", severity: 3, frequency: 10 },
            { name: "Old Cam", desc: "720p webcam.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "4K Webcam", desc: "Essential Fix" },
            { name: "Monitor", desc: "Survival Gear" }
        ],
        persona: "Editors"
    },

    // --- 3D PRINTERS (6 Models) ---
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price: "$199",
        release_year: 2023,
        report_count: 2400,
        links: {
            solver: "https://amzn.to/4rO30zE",
            value: "https://amzn.to/4bV0DGS",
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            solver: { name: "Flashforge 5M", reason: "CoreXY speed, reliable." },
            value: { name: "Sovol SV06", reason: "Linear rails (durable)." }
        },
        issues: [
            { name: "Gantry Wobble", desc: "Z-axis instability.", severity: 6, frequency: 8 },
            { name: "Extruder Wear", desc: "Plastic gears break.", severity: 7, frequency: 6 },
            { name: "Spaghetti", desc: "No AI detection.", severity: 5, frequency: 7 }
        ],
        antidotes: [
            { name: "CR Touch", desc: "Essential Fix" },
            { name: "Filament Dryer", desc: "Survival Gear" }
        ],
        persona: "Parents"
    },
    {
        id: "bambu-a1-mini",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "A1 Mini",
        price: "$299",
        release_year: 2023,
        report_count: 920,
        links: {
            solver: "https://amzn.to/3MIGFVp",
            value: "https://amzn.to/4agB7KS",
            antidote_1: "https://amzn.to/4kyuwPk",
            antidote_2: "https://amzn.to/4ataRvx"
        },
        recommendations: {
            solver: { name: "Prusa Mini+", reason: "Open source privacy." },
            value: { name: "AnkerMake M5C", reason: "Faster, solid build." }
        },
        issues: [
            { name: "Cloud Privacy", desc: "Data sent to cloud.", severity: 5, frequency: 8 },
            { name: "Small Volume", desc: "180mm is limiting.", severity: 4, frequency: 10 },
            { name: "Proprietary", desc: "Hard to mod.", severity: 3, frequency: 10 }
        ],
        antidotes: [
            { name: "PEI Plate", desc: "Essential Fix" },
            { name: "eSun PLA+", desc: "Survival Gear" }
        ],
        persona: "Tinkerers"
    },
    {
        id: "anycubic-photon",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Photon Mono 2",
        price: "$180",
        release_year: 2023,
        report_count: 310,
        links: {
            solver: "https://amzn.to/4tCngpS",
            value: "https://amzn.to/469PUEF",
            antidote_1: "https://amzn.to/4tCG87Y",
            antidote_2: "https://amzn.to/4sblM4z"
        },
        recommendations: {
            solver: { name: "Flashforge 5M", reason: "FDM is non-toxic." },
            value: { name: "Elegoo Mars 4", reason: "Air filter built-in." }
        },
        issues: [
            { name: "Toxic Fumes", desc: "Hazardous smell.", severity: 8, frequency: 10 },
            { name: "FEP Leak", desc: "Destroys screen.", severity: 10, frequency: 4 },
            { name: "Messy", desc: "Cleanup is hard.", severity: 5, frequency: 9 }
        ],
        antidotes: [
            { name: "Wash & Cure", desc: "Essential Fix" },
            { name: "Resin", desc: "Survival Gear" }
        ],
        persona: "Apartment Users"
    },
    {
        id: "elegoo-neptune",
        category: "3d_printer",
        brand: "Elegoo",
        model: "Neptune 4 Pro",
        price: "$280",
        release_year: 2023,
        report_count: 580,
        links: {
            solver: "https://amzn.to/4rhuAFL",
            value: "https://amzn.to/4rhu1M9",
            antidote_1: "https://amzn.to/4ctaUtW",
            antidote_2: "https://amzn.to/4rgiixg"
        },
        recommendations: {
            solver: { name: "Creality K1C", reason: "Stable firmware." },
            value: { name: "Ender 3 V3 KE", reason: "Easier to fix." }
        },
        issues: [
            { name: "Z-Offset Bug", desc: "Nozzle crash.", severity: 9, frequency: 6 },
            { name: "Loud Fan", desc: "Jet engine noise.", severity: 6, frequency: 10 },
            { name: "Wheel Wear", desc: "POM wheels wear out.", severity: 5, frequency: 8 }
        ],
        antidotes: [
            { name: "PEI Plate", desc: "Essential Fix" },
            { name: "Noctua Fan", desc: "Survival Gear" }
        ],
        persona: "Beginners"
    },
    {
        id: "prusa-mini",
        category: "3d_printer",
        brand: "Prusa",
        model: "Mini+",
        price: "$429",
        release_year: 2019,
        report_count: 1200,
        links: {
            solver: "https://amzn.to/3MEIa77",
            value: "https://amzn.to/3OcjO5b",
            antidote_1: "https://amzn.to/4awdywx",
            antidote_2: "https://amzn.to/4qG8n3c"
        },
        recommendations: {
            solver: { name: "Flashforge 5M", reason: "Faster CoreXY." },
            value: { name: "Sovol SV07", reason: "Larger & Faster." }
        },
        issues: [
            { name: "Slow", desc: "Old tech speeds.", severity: 5, frequency: 10 },
            { name: "Bowden Jam", desc: "Tube gap jams.", severity: 6, frequency: 5 },
            { name: "Pricey", desc: "Costly for size.", severity: 3, frequency: 9 }
        ],
        antidotes: [
            { name: "Raspberry Pi", desc: "OctoPrint" },
            { name: "Heatbreak", desc: "Fix Jams" }
        ],
        persona: "Value Seekers"
    },
    {
        id: "creality-k1",
        category: "3d_printer",
        brand: "Creality",
        model: "K1 (Gen 1)",
        price: "$399",
        release_year: 2023,
        report_count: 750,
        links: {
            solver: "https://amzn.to/3Of1sjT",
            value: "https://amzn.to/3ZF3Oen",
            antidote_1: "https://amzn.to/4kyx6F0",
            antidote_2: "https://amzn.to/3ZCCYU7"
        },
        recommendations: {
            solver: { name: "Flashforge 5M Pro", reason: "Reliable nozzle." },
            value: { name: "QIDI Tech Q1", reason: "Heated chamber." }
        },
        issues: [
            { name: "Extruder Jam", desc: "Gen 1 fails.", severity: 9, frequency: 8 },
            { name: "VFA Ripples", desc: "Ugly walls.", severity: 4, frequency: 10 },
            { name: "Tube Melt", desc: "Clogs hotend.", severity: 7, frequency: 5 }
        ],
        antidotes: [
            { name: "Extruder Kit", desc: "Essential Fix" },
            { name: "Hyper PLA", desc: "Survival Gear" }
        ],
        persona: "Speed Demons"
    }
];
