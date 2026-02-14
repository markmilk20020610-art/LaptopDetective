// data.js - v28.4 (Realistic Data Spread)
const productsDB = [
    // ================= LAPTOPS =================
    {
        id: "lenovo-loq",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15 (Intel)",
        price_range: "$899",
        release_year: 2024,
        report_count: 842, // 真实感数据
        links: {
            solver_affiliate: "https://amzn.to/4bS0yDI",
            value_affiliate: "https://amzn.to/4qymUhm",
            antidote_1: "https://amzn.to/3OaX19O",
            antidote_2: "https://amzn.to/4kv8sFf"
        },
        recommendations: {
            solver: { name: "Acer Nitro 16", reason: "Superior dual-fan cooling prevents thermal throttling." },
            value: { name: "ASUS TUF F15", reason: "Military-grade durability (MIL-STD-810H)." }
        },
        issues: [
            // 致命问题：Severity 10
            { name: "Motherboard Suicide", desc: "Intel HX CPUs frying VRMs. Dead in 3 months.", severity: 10, frequency: 9 },
            { name: "Thermonuclear Heat", desc: "Hits 95°C just opening Chrome.", severity: 8, frequency: 10 },
            { name: "Battery Drain", desc: "Drains battery even while plugged in.", severity: 6, frequency: 7 }
        ],
        antidotes: [
            { name: "Laptop Stand", desc: "Essential Fix" },
            { name: "IETS GT300 Cooling Pad", desc: "Survival Gear" }
        ],
        persona: "Budget Gamers: High Risk."
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15 (2024)",
        price_range: "$2,499",
        release_year: 2024,
        report_count: 512,
        links: {
            solver_affiliate: "https://amzn.to/4aoclHy",
            value_affiliate: "https://amzn.to/3OCX12o",
            antidote_1: "https://amzn.to/46IyRJZ",
            antidote_2: "https://amzn.to/4aszZTn"
        },
        recommendations: {
            solver: { name: "ASUS ROG Zephyrus G16", reason: "Runs 10°C cooler with better airflow." },
            value: { name: "Razer Blade 14 (AMD)", reason: "AMD chips run cooler, less bloat risk." }
        },
        issues: [
            // 危险问题：Severity 9-10
            { name: "Spicy Pillow", desc: "Battery swells and bends the chassis within 1 year.", severity: 9, frequency: 8 },
            { name: "Surface Lava", desc: "Keyboard too hot to touch (55°C+).", severity: 7, frequency: 10 },
            { name: "Poor Support", desc: "RMA process is notoriously slow.", severity: 5, frequency: 6 }
        ],
        antidotes: [
            { name: "IETS GT600 Cooler", desc: "Essential Fix" },
            { name: "Razer Huntsman Mini", desc: "Survival Gear" }
        ],
        persona: "Dorm Students: Fire Hazard."
    },
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price_range: "$1,399",
        release_year: 2023,
        report_count: 328,
        links: {
            solver_affiliate: "https://amzn.to/4ax1iM6",
            value_affiliate: "https://amzn.to/4aLNfUh",
            antidote_1: "https://amzn.to/4kD8XgK",
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        recommendations: {
            solver: { name: "MacBook Air M2", reason: "Real physical keys. Zero frustration." },
            value: { name: "Dell XPS 13 (9315)", reason: "Traditional layout, $400 cheaper." }
        },
        issues: [
            // 设计缺陷：Severity 6-8
            { name: "Dongle Hell", desc: "No headphone jack. Dongle life is miserable.", severity: 6, frequency: 10 },
            { name: "Touch Bar Freeze", desc: "Capacitive keys stop working randomly.", severity: 8, frequency: 5 },
            { name: "Battery Anxiety", desc: "Barely lasts 5 hours.", severity: 7, frequency: 8 }
        ],
        antidotes: [
            { name: "USB-C to Audio Adapter", desc: "Essential Fix" },
            { name: "Anker Prime 200W", desc: "Survival Gear" }
        ],
        persona: "Music Producers: Nightmare."
    },
    {
        id: "asus-tuf-a15",
        category: "laptop",
        brand: "ASUS",
        model: "TUF Gaming A15",
        price_range: "$999",
        release_year: 2023,
        report_count: 1205,
        links: {
            solver_affiliate: "https://amzn.to/46wZnWM",
            value_affiliate: "https://amzn.to/4rP6vGj",
            antidote_1: "https://amzn.to/4ttHnGR",
            antidote_2: "https://amzn.to/4rxSxZP"
        },
        recommendations: {
            solver: { name: "Lenovo Legion 5", reason: "Better screen response times." },
            value: { name: "Acer Nitro V 15", reason: "Reliable budget king." }
        },
        issues: [
            // 体验问题：Severity 4-5 (分数会较低)
            { name: "Jet Engine Fans", desc: "Very loud (55dB). Annoying but not broken.", severity: 4, frequency: 10 },
            { name: "Ghost Screen", desc: "Screen blur in fast games.", severity: 5, frequency: 9 },
            { name: "Plastic Build", desc: "Feels cheap, flexes easily.", severity: 3, frequency: 8 }
        ],
        antidotes: [
            { name: "Razer BlackShark V2", desc: "Essential Fix" },
            { name: "BenQ Mobiuz 24", desc: "Survival Gear" }
        ],
        persona: "Library Users: Too Loud."
    },
    {
        id: "hp-spectre-x360",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360",
        price_range: "$1,599",
        release_year: 2023,
        report_count: 210,
        links: {
            solver_affiliate: "https://amzn.to/4kRtsXf",
            value_affiliate: "https://amzn.to/3M6LAPV",
            antidote_1: "https://amzn.to/4aN0WCk",
            antidote_2: "https://amzn.to/3Obi3oO"
        },
        recommendations: {
            solver: { name: "Dell XPS 13 Plus", reason: "Solid hinge design (non-convertible)." },
            value: { name: "Lenovo Yoga 9i", reason: "Better soundbar hinge design." }
        },
        issues: [
            // 机械故障：Severity 7
            { name: "Hinge Snap", desc: "Hinge loosens after 1 year of flipping.", severity: 7, frequency: 5 },
            { name: "Bloatware City", desc: "System slow due to pre-installed apps.", severity: 3, frequency: 10 },
            { name: "Heat Throttling", desc: "Gets hot in tablet mode.", severity: 5, frequency: 6 }
        ],
        antidotes: [
            { name: "HP 3-Year Care Pack", desc: "Essential Fix" },
            { name: "Samsung T7 Shield SSD", desc: "Clean Install Backup" }
        ],
        persona: "Digital Artists: Fragile."
    },
    {
        id: "surface-laptop-5",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Laptop 5",
        price_range: "$1,299",
        release_year: 2022,
        report_count: 156,
        links: {
            solver_affiliate: "https://amzn.to/4qx0a16",
            value_affiliate: "https://amzn.to/3MBbFXr",
            antidote_1: "https://amzn.to/3Zu16Zb",
            antidote_2: "https://amzn.to/4qDObPt"
        },
        recommendations: {
            solver: { name: "Dell XPS 13", reason: "Aluminum interior stays clean." },
            value: { name: "Framework Laptop", reason: "Completely repairable." }
        },
        issues: [
            { name: "The Glue Trap", desc: "Battery glued down. Impossible to repair.", severity: 6, frequency: 10 },
            { name: "Alcantara Stain", desc: "Fabric deck turns yellow/gross.", severity: 4, frequency: 8 },
            { name: "Old Bezel", desc: "Thick bezels look dated.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "Protective Sleeve", desc: "Essential Fix" },
            { name: "Logitech K380", desc: "Survival Gear" }
        ],
        persona: "DIY Fixers: Impossible."
    },
    {
        id: "acer-swift-go-14",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14",
        price_range: "$799",
        release_year: 2023,
        report_count: 405,
        links: {
            solver_affiliate: "https://amzn.to/4rejrp5",
            value_affiliate: "https://amzn.to/4kAUrGn",
            antidote_1: "https://amzn.to/462RKXU",
            antidote_2: "https://amzn.to/4raPoP7"
        },
        recommendations: {
            solver: { name: "MacBook Air M1", reason: "Glass trackpad perfection." },
            value: { name: "Asus Zenbook 14", reason: "Better OLED screen." }
        },
        issues: [
            { name: "WiFi Dropouts", desc: "MediaTek card disconnects often.", severity: 6, frequency: 7 },
            { name: "Plastic Trackpad", desc: "Feels sticky and cheap.", severity: 3, frequency: 9 },
            { name: "Bloatware", desc: "Too many popups out of box.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "TP-Link USB WiFi", desc: "Essential Fix" },
            { name: "Logitech MX Master 3S", desc: "Survival Gear" }
        ],
        persona: "Remote Workers: Unreliable."
    },
    {
        id: "samsung-galaxy-book3",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book 3",
        price_range: "$1,099",
        release_year: 2023,
        report_count: 288,
        links: {
            solver_affiliate: "https://amzn.to/4cq58t4",
            value_affiliate: "https://amzn.to/466tbt7",
            antidote_1: "https://amzn.to/46ORImL",
            antidote_2: "https://amzn.to/3MrfHkY"
        },
        recommendations: {
            solver: { name: "MacBook Air 15", reason: "Solid unibody aluminum." },
            value: { name: "LG Gram 16", reason: "Magnesium alloy resists cracks." }
        },
        issues: [
            { name: "Crack-Gate", desc: "Thin glass cracks spontaneously.", severity: 9, frequency: 4 },
            { name: "Screen Wobble", desc: "Hinge is too weak.", severity: 4, frequency: 9 },
            { name: "Fingerprint Magnet", desc: "Chassis looks dirty instantly.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "Hard Shell Laptop Case", desc: "Essential Fix" },
            { name: "Bluetooth Keyboard", desc: "Survival Gear" }
        ],
        persona: "Frequent Travelers: Fragile."
    },
    {
        id: "lenovo-legion-5",
        category: "laptop",
        brand: "Lenovo",
        model: "Legion 5 (Gen 8)",
        price_range: "$1,199",
        release_year: 2023,
        report_count: 950,
        links: {
            solver_affiliate: "https://amzn.to/463YrsV",
            value_affiliate: "https://amzn.to/3OpuxsR",
            antidote_1: "https://amzn.to/4kuLdLw",
            antidote_2: "https://amzn.to/4qtEyCJ"
        },
        recommendations: {
            solver: { name: "ASUS ROG Zephyrus G14", reason: "More portable, better WiFi." },
            value: { name: "Lenovo Legion 5 (Gen 7)", reason: "Cheaper, upgrade WiFi yourself." }
        },
        issues: [
            { name: "WiFi Card Lottery", desc: "Realtek cards cause lag.", severity: 6, frequency: 8 },
            { name: "Heavy Brick", desc: "Charger is massive.", severity: 3, frequency: 10 },
            { name: "Paint Chipping", desc: "Palm rest paint wears off.", severity: 2, frequency: 6 }
        ],
        antidotes: [
            { name: "Intel AX210 WiFi 6E Card", desc: "Essential Fix" },
            { name: "Lenovo Slim 135W Charger", desc: "Survival Gear" }
        ],
        persona: "Competitive Gamers: Lag Risk."
    },
    {
        id: "macbook-pro-13-m2",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Pro 13 (M2)",
        price_range: "$1,299",
        release_year: 2022,
        report_count: 670,
        links: {
            solver_affiliate: "https://amzn.to/3ZyvtO1",
            value_affiliate: "https://amzn.to/3MsXTG7",
            antidote_1: "https://amzn.to/4adenvg",
            antidote_2: "https://amzn.to/3OCuytw"
        },
        recommendations: {
            solver: { name: "MacBook Pro 14", reason: "120Hz ProMotion Screen." },
            value: { name: "MacBook Air M2", reason: "Better value, same chip." }
        },
        issues: [
            { name: "Zombie Touch Bar", desc: "No physical Esc key.", severity: 4, frequency: 10 },
            { name: "60Hz Screen", desc: "Slow refresh rate for price.", severity: 3, frequency: 10 },
            { name: "Old Design", desc: "Thick bezels, old webcam.", severity: 2, frequency: 10 }
        ],
        antidotes: [
            { name: "Anker 4K Webcam", desc: "Essential Fix" },
            { name: "External 144Hz Monitor", desc: "Survival Gear" }
        ],
        persona: "Video Editors: Outdated."
    },

    // ================= 3D PRINTERS =================
    {
        id: "anycubic-photon-mono",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Photon Mono 2",
        price_range: "$180",
        release_year: 2023,
        report_count: 140,
        links: {
            solver_affiliate: "https://amzn.to/4tCngpS",
            value_affiliate: "https://amzn.to/469PUEF",
            antidote_1: "https://amzn.to/4tCG87Y",
            antidote_2: "https://amzn.to/4sblM4z"
        },
        recommendations: {
            solver: { name: "Flashforge Adventurer 5M", reason: "FDM is safer/easier." },
            value: { name: "Elegoo Mars 4", reason: "Better air filter." }
        },
        issues: [
            { name: "Toxic Fumes", desc: "Requires mask/ventilation.", severity: 8, frequency: 10 },
            { name: "FEP Leak", desc: "Resin leak ruins screen.", severity: 10, frequency: 3 },
            { name: "Messy Cleanup", desc: "Needs isopropyl alcohol wash.", severity: 5, frequency: 10 }
        ],
        antidotes: [
            { name: "Anycubic Wash & Cure", desc: "Essential Fix" },
            { name: "Anycubic Grey Resin", desc: "Survival Gear" }
        ],
        persona: "Apartment Users: Toxic."
    },
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price_range: "$199",
        release_year: 2023,
        report_count: 2200,
        links: {
            solver_affiliate: "https://amzn.to/4rO30zE",
            value_affiliate: "https://amzn.to/4bV0DGS",
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            solver: { name: "Flashforge 5M", reason: "Faster, less tinkering." },
            value: { name: "Sovol SV06", reason: "More durable rails." }
        },
        issues: [
            { name: "Gantry Wobble", desc: "Z-axis isn't stable.", severity: 6, frequency: 7 },
            { name: "Extruder Wear", desc: "Plastic gears break.", severity: 7, frequency: 5 },
            { name: "Bed Leveling", desc: "Auto-leveling is inconsistent.", severity: 5, frequency: 8 }
        ],
        antidotes: [
            { name: "CR Touch Kit", desc: "Essential Fix" },
            { name: "Sunlu Dryer", desc: "Survival Gear" }
        ],
        persona: "Parents: High Maintenance."
    },
    {
        id: "bambu-a1-mini",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "A1 Mini",
        price_range: "$299",
        release_year: 2023,
        report_count: 890,
        links: {
            solver_affiliate: "https://amzn.to/3MIGFVp",
            value_affiliate: "https://amzn.to/4agB7KS",
            antidote_1: "https://amzn.to/4kyuwPk",
            antidote_2: "https://amzn.to/4ataRvx"
        },
        recommendations: {
            solver: { name: "Prusa Mini+", reason: "Privacy focused." },
            value: { name: "AnkerMake M5C", reason: "Sturdier build." }
        },
        issues: [
            { name: "Cloud Privacy", desc: "Logs sent to China server.", severity: 5, frequency: 10 },
            { name: "Build Volume", desc: "Too small (180mm).", severity: 4, frequency: 10 },
            { name: "Closed System", desc: "Hard to repair yourself.", severity: 3, frequency: 9 }
        ],
        antidotes: [
            { name: "Textured PEI Plate", desc: "Essential Fix" },
            { name: "eSun PLA+", desc: "Survival Gear" }
        ],
        persona: "Tinkerers: Locked Down."
    },
    {
        id: "elegoo-neptune-4",
        category: "3d_printer",
        brand: "Elegoo",
        model: "Neptune 4 Pro",
        price_range: "$280",
        release_year: 2023,
        report_count: 650,
        links: {
            solver_affiliate: "https://amzn.to/4rhuAFL",
            value_affiliate: "https://amzn.to/4rhu1M9",
            antidote_1: "https://amzn.to/4ctaUtW",
            antidote_2: "https://amzn.to/4rgiixg"
        },
        recommendations: {
            solver: { name: "Creality K1C", reason: "More stable firmware." },
            value: { name: "Ender 3 V3 KE", reason: "Easier to use." }
        },
        issues: [
            { name: "Z-Offset Bug", desc: "Head crashes into bed.", severity: 9, frequency: 5 },
            { name: "Loud Fans", desc: "Sounds like a jet.", severity: 5, frequency: 10 },
            { name: "Firmware", desc: "Klipper bugs are common.", severity: 7, frequency: 6 }
        ],
        antidotes: [
            { name: "PEI Plate", desc: "Essential Fix" },
            { name: "Noctua Fans", desc: "Survival Gear" }
        ],
        persona: "Beginners: Buggy."
    },
    {
        id: "prusa-mini",
        category: "3d_printer",
        brand: "Prusa",
        model: "Mini+",
        price_range: "$429",
        release_year: 2019,
        report_count: 1100,
        links: {
            solver_affiliate: "https://amzn.to/3MEIa77",
            value_affiliate: "https://amzn.to/3OcjO5b",
            antidote_1: "https://amzn.to/4awdywx",
            antidote_2: "https://amzn.to/4qG8n3c"
        },
        recommendations: {
            solver: { name: "Flashforge 5M", reason: "Much faster." },
            value: { name: "Sovol SV07", reason: "Bigger and faster." }
        },
        issues: [
            { name: "Slow Speed", desc: "Ancient printing speeds.", severity: 5, frequency: 10 },
            { name: "Bowden Jam", desc: "Tube gap causes jams.", severity: 6, frequency: 4 },
            { name: "Pricey", desc: "Expensive for size.", severity: 3, frequency: 10 }
        ],
        antidotes: [
            { name: "Raspberry Pi", desc: "For OctoPrint" },
            { name: "Bondtech Heatbreak", desc: "Fix Jams" }
        ],
        persona: "Value Seekers: Bad Deal."
    },
    {
        id: "creality-k1",
        category: "3d_printer",
        brand: "Creality",
        model: "K1 (Gen 1)",
        price_range: "$399",
        release_year: 2023,
        report_count: 780,
        links: {
            solver_affiliate: "https://amzn.to/3Of1sjT",
            value_affiliate: "https://amzn.to/3ZF3Oen",
            antidote_1: "https://amzn.to/4kyx6F0",
            antidote_2: "https://amzn.to/3ZCCYU7"
        },
        recommendations: {
            solver: { name: "Flashforge 5M Pro", reason: "Reliable nozzle." },
            value: { name: "QIDI Tech Q1", reason: "Heated chamber." }
        },
        issues: [
            { name: "Extruder Jam", desc: "Gen 1 extruder fails.", severity: 9, frequency: 7 },
            { name: "VFA Ripples", desc: "Wall patterns are ugly.", severity: 4, frequency: 10 },
            { name: "Error Codes", desc: "Random key errors.", severity: 6, frequency: 5 }
        ],
        antidotes: [
            { name: "Extruder Kit V3", desc: "Essential Fix" },
            { name: "Hyper PLA", desc: "Survival Gear" }
        ],
        persona: "Speed Demons: Risky."
    }
];
