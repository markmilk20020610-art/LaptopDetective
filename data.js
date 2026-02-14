// data.js - v30.2 FIXED DATABASE
const productsDB = [
    // ================= LAPTOPS (10 Models) =================
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price: "$1,399",
        release_year: 2023,
        evidence_count: 420,
        links: {
            solver: "https://amzn.to/4ax1iM6",
            value: "https://amzn.to/4aLNfUh",
            antidote_1: "https://amzn.to/4kD8XgK",
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        recommendations: {
            primary: { name: "MacBook Air M2", link: "https://amzn.to/4ax1iM6", benefits: ["18-Hour Battery", "Physical Keys", "Silent"] },
            secondary: { name: "Dell XPS 13 (9315)", link: "https://amzn.to/4aLNfUh", reason: "Classic layout, $400 cheaper." }
        },
        risk_data: {
            long_term_risk: "Capacitive touch bar failure requires entire deck replacement.",
            maintenance_cost: "High",
            issues: [
                { type: "Design", name: "Dongle Hell", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Hardware", name: "Touch Bar Freeze", severity: 3, frequency: 3, long_term_factor: 1.5 },
                { type: "Battery", name: "Battery Degradation", severity: 2, frequency: 3, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "USB-C Hub", link: "https://amzn.to/4kD8XgK", desc: "Required for usability." },
            { name: "Anker 200W", link: "https://amzn.to/4kyVXsv", desc: "Backup power." }
        ]
    },
    {
        id: "lenovo-loq-15",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15 (Intel)",
        price: "$899",
        release_year: 2024,
        evidence_count: 850,
        links: {
            solver: "https://amzn.to/4bS0yDI",
            value: "https://amzn.to/4qymUhm",
            antidote_1: "https://amzn.to/3OaX19O",
            antidote_2: "https://amzn.to/4kv8sFf"
        },
        recommendations: {
            primary: { name: "Acer Nitro 16", link: "https://amzn.to/4bS0yDI", benefits: ["Dual-Fan Cooling", "Better VRMs", "Stable"] },
            secondary: { name: "ASUS TUF F15", link: "https://amzn.to/4qymUhm", reason: "Military Grade Durability." }
        },
        risk_data: {
            long_term_risk: "Intel HX CPUs are frying motherboard VRMs within 6 months.",
            maintenance_cost: "Total Loss",
            issues: [
                { type: "Critical", name: "Motherboard Dead", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { type: "Thermal", name: "Overheating", severity: 3, frequency: 3, long_term_factor: 1.5 },
                { type: "Power", name: "Battery Drain", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Laptop Stand", link: "https://amzn.to/3OaX19O", desc: "Airflow is mandatory." },
            { name: "Cooling Pad", link: "https://amzn.to/4kv8sFf", desc: "Force air cooling." }
        ]
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15 (2024)",
        price: "$2,499",
        release_year: 2024,
        evidence_count: 610,
        links: {
            solver: "https://amzn.to/4aoclHy",
            value: "https://amzn.to/3OCX12o",
            antidote_1: "https://amzn.to/46IyRJZ",
            antidote_2: "https://amzn.to/4aszZTn"
        },
        recommendations: {
            primary: { name: "ASUS ROG G16", link: "https://amzn.to/4aoclHy", benefits: ["Better Airflow", "Cooler Chassis", "Good Support"] },
            secondary: { name: "Razer Blade 14 (AMD)", link: "https://amzn.to/3OCX12o", reason: "AMD chips = less bloat risk." }
        },
        risk_data: {
            long_term_risk: "Battery swelling (Spicy Pillow) is guaranteed due to heat.",
            maintenance_cost: "Very High",
            issues: [
                { type: "Safety", name: "Battery Bloat", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { type: "Thermal", name: "Surface Lava", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Support", name: "Bad RMA", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "IETS GT600", link: "https://amzn.to/46IyRJZ", desc: "Prevent bloat." },
            { name: "Mini Keyboard", link: "https://amzn.to/4aszZTn", desc: "Don't burn hands." }
        ]
    },
    {
        id: "hp-spectre-x360",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360",
        price: "$1,599",
        release_year: 2023,
        evidence_count: 230,
        links: {
            solver: "https://amzn.to/4kRtsXf",
            value: "https://amzn.to/3M6LAPV",
            antidote_1: "https://amzn.to/4aN0WCk",
            antidote_2: "https://amzn.to/3Obi3oO"
        },
        recommendations: {
            primary: { name: "Dell XPS 13", link: "https://amzn.to/4kRtsXf", benefits: ["Solid Hinge", "Better Build", "No Bloat"] },
            secondary: { name: "Lenovo Yoga 9i", link: "https://amzn.to/3M6LAPV", reason: "Better soundbar hinge." }
        },
        risk_data: {
            long_term_risk: "Hinge mechanism loosens causing screen wobble.",
            maintenance_cost: "Medium",
            issues: [
                { type: "Mech", name: "Hinge Snap", severity: 2, frequency: 2, long_term_factor: 1.5 },
                { type: "Software", name: "Bloatware", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Thermal", name: "Tablet Heat", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Care Pack", link: "https://amzn.to/4aN0WCk", desc: "Extend warranty." },
            { name: "Samsung SSD", link: "https://amzn.to/3Obi3oO", desc: "Clean Backup" }
        ]
    },
    {
        id: "asus-tuf-a15",
        category: "laptop",
        brand: "ASUS",
        model: "TUF Gaming A15",
        price: "$999",
        release_year: 2023,
        evidence_count: 1100,
        links: {
            solver: "https://amzn.to/46wZnWM",
            value: "https://amzn.to/4rP6vGj",
            antidote_1: "https://amzn.to/4ttHnGR",
            antidote_2: "https://amzn.to/4rxSxZP"
        },
        recommendations: {
            primary: { name: "Lenovo Legion 5", link: "https://amzn.to/46wZnWM", benefits: ["Better Screen", "Quieter Fans", "Solid Build"] },
            secondary: { name: "Acer Nitro V", link: "https://amzn.to/4rP6vGj", reason: "Budget king." }
        },
        risk_data: {
            long_term_risk: "Fan bearings grind and fail after 12 months.",
            maintenance_cost: "Low",
            issues: [
                { type: "Noise", name: "Jet Engine", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Display", name: "Ghosting", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Build", name: "Plastic Flex", severity: 1, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Headset", link: "https://amzn.to/4ttHnGR", desc: "Block fan noise." },
            { name: "Monitor", link: "https://amzn.to/4rxSxZP", desc: "Fix ghosting." }
        ]
    },
    {
        id: "surface-laptop-5",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Laptop 5",
        price: "$1,299",
        release_year: 2022,
        evidence_count: 180,
        links: {
            solver: "https://amzn.to/4qx0a16",
            value: "https://amzn.to/3MBbFXr",
            antidote_1: "https://amzn.to/3Zu16Zb",
            antidote_2: "https://amzn.to/4qDObPt"
        },
        recommendations: {
            primary: { name: "Dell XPS 13", link: "https://amzn.to/4qx0a16", benefits: ["Metal Deck", "Cleanable", "Standard SSD"] },
            secondary: { name: "Framework", link: "https://amzn.to/3MBbFXr", reason: "Repairable." }
        },
        risk_data: {
            long_term_risk: "Fabric deck stains permanently. Battery glued down.",
            maintenance_cost: "Impossible",
            issues: [
                { type: "Repair", name: "Glue Trap", severity: 2, frequency: 3, long_term_factor: 1.5 },
                { type: "Cosmetic", name: "Alcantara Stain", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Design", name: "Thick Bezels", severity: 1, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Sleeve", link: "https://amzn.to/3Zu16Zb", desc: "Protect fabric." },
            { name: "Keyboard", link: "https://amzn.to/4qDObPt", desc: "Keep clean." }
        ]
    },
    {
        id: "acer-swift-go-14",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14",
        price: "$799",
        release_year: 2023,
        evidence_count: 450,
        links: {
            solver: "https://amzn.to/4rejrp5",
            value: "https://amzn.to/4kAUrGn",
            antidote_1: "https://amzn.to/462RKXU",
            antidote_2: "https://amzn.to/4raPoP7"
        },
        recommendations: {
            primary: { name: "MacBook Air M1", link: "https://amzn.to/4rejrp5", benefits: ["Glass Trackpad", "Stable WiFi", "Silent"] },
            secondary: { name: "Zenbook 14", link: "https://amzn.to/4kAUrGn", reason: "OLED & Build." }
        },
        risk_data: {
            long_term_risk: "WiFi card failure and trackpad peeling.",
            maintenance_cost: "Low",
            issues: [
                { type: "Conn", name: "WiFi Dropouts", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Input", name: "Sticky Trackpad", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Software", name: "Bloatware", severity: 1, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "USB WiFi", link: "https://amzn.to/462RKXU", desc: "Stable internet." },
            { name: "Mouse", link: "https://amzn.to/4raPoP7", desc: "Fix trackpad." }
        ]
    },
    {
        id: "samsung-galaxy-book3",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book 3",
        price: "$1,099",
        release_year: 2023,
        evidence_count: 310,
        links: {
            solver: "https://amzn.to/4cq58t4",
            value: "https://amzn.to/466tbt7",
            antidote_1: "https://amzn.to/46ORImL",
            antidote_2: "https://amzn.to/3MrfHkY"
        },
        recommendations: {
            primary: { name: "MacBook Air 15", link: "https://amzn.to/4cq58t4", benefits: ["Solid Hinge", "Sturdy Glass", "No Wobble"] },
            secondary: { name: "LG Gram 16", link: "https://amzn.to/466tbt7", reason: "Flexible alloy." }
        },
        risk_data: {
            long_term_risk: "Screen cracks spontaneously due to thin glass.",
            maintenance_cost: "High",
            issues: [
                { type: "Fragile", name: "Crack-Gate", severity: 3, frequency: 2, long_term_factor: 1.5 },
                { type: "Build", name: "Screen Wobble", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Cosmetic", name: "Fingerprints", severity: 1, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Hard Case", link: "https://amzn.to/46ORImL", desc: "Prevent cracks." },
            { name: "Keyboard", link: "https://amzn.to/3MrfHkY", desc: "Desk setup." }
        ]
    },
    {
        id: "lenovo-legion-5",
        category: "laptop",
        brand: "Lenovo",
        model: "Legion 5 (Gen 8)",
        price: "$1,199",
        release_year: 2023,
        evidence_count: 980,
        links: {
            solver: "https://amzn.to/463YrsV",
            value: "https://amzn.to/3OpuxsR",
            antidote_1: "https://amzn.to/4kuLdLw",
            antidote_2: "https://amzn.to/4qtEyCJ"
        },
        recommendations: {
            primary: { name: "Zephyrus G14", link: "https://amzn.to/463YrsV", benefits: ["Portable", "Better WiFi", "Premium Build"] },
            secondary: { name: "Legion 5 (Gen 7)", link: "https://amzn.to/3OpuxsR", reason: "Cheaper older model." }
        },
        risk_data: {
            long_term_risk: "WiFi card failure creates online gaming lag.",
            maintenance_cost: "Low",
            issues: [
                { type: "Conn", name: "WiFi Lottery", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Design", name: "Heavy Brick", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Cosmetic", name: "Paint Chip", severity: 1, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Intel WiFi", link: "https://amzn.to/4kuLdLw", desc: "Fix lag spikes." },
            { name: "Slim Charger", link: "https://amzn.to/4qtEyCJ", desc: "Portability." }
        ]
    },
    {
        id: "macbook-pro-13-m2",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Pro 13 (M2)",
        price: "$1,299",
        release_year: 2022,
        evidence_count: 720,
        links: {
            solver: "https://amzn.to/3ZyvtO1",
            value: "https://amzn.to/3MsXTG7",
            antidote_1: "https://amzn.to/4adenvg",
            antidote_2: "https://amzn.to/3OCuytw"
        },
        recommendations: {
            primary: { name: "MacBook Pro 14", link: "https://amzn.to/3ZyvtO1", benefits: ["120Hz Screen", "HDMI Port", "No TouchBar"] },
            secondary: { name: "MacBook Air M2", link: "https://amzn.to/3MsXTG7", benefits: ["Better Value", "MagSafe"] }
        },
        risk_data: {
            long_term_risk: "Touch Bar has no future OS support. Ancient screen tech.",
            maintenance_cost: "High",
            issues: [
                { type: "Obsolete", name: "Zombie TouchBar", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Display", name: "60Hz Screen", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Cam", name: "720p Webcam", severity: 1, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "4K Webcam", link: "https://amzn.to/4adenvg", desc: "Look better." },
            { name: "Monitor", link: "https://amzn.to/3OCuytw", desc: "More space." }
        ]
    },

    // ================= 3D PRINTERS (6 Models) =================
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price: "$199",
        release_year: 2023,
        evidence_count: 2400,
        links: {
            solver: "https://amzn.to/4rO30zE",
            value: "https://amzn.to/4bV0DGS",
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            primary: { name: "Flashforge 5M", link: "https://amzn.to/4rO30zE", benefits: ["CoreXY Speed", "Auto-Leveling", "Reliable"] },
            secondary: { name: "Sovol SV06", link: "https://amzn.to/4bV0DGS", reason: "Linear rails (durable)." }
        },
        risk_data: {
            long_term_risk: "Gantry wobble and extruder wear degrade quality over time.",
            maintenance_cost: "Medium",
            issues: [
                { type: "Mech", name: "Gantry Wobble", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Parts", name: "Gear Wear", severity: 2, frequency: 2, long_term_factor: 1.5 },
                { type: "Fail", name: "Spaghetti", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "CR Touch", link: "https://amzn.to/4avRTV1", desc: "Fix leveling." },
            { name: "Filament Dryer", link: "https://amzn.to/4rieR9m", desc: "Better prints." }
        ]
    },
    {
        id: "bambu-a1-mini",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "A1 Mini",
        price: "$299",
        release_year: 2023,
        evidence_count: 920,
        links: {
            solver: "https://amzn.to/3MIGFVp",
            value: "https://amzn.to/4agB7KS",
            antidote_1: "https://amzn.to/4kyuwPk",
            antidote_2: "https://amzn.to/4ataRvx"
        },
        recommendations: {
            primary: { name: "Prusa Mini+", link: "https://amzn.to/3MIGFVp", benefits: ["Open Source", "Offline Privacy", "Moddable"] },
            secondary: { name: "AnkerMake M5C", link: "https://amzn.to/4agB7KS", reason: "Faster & Metal." }
        },
        risk_data: {
            long_term_risk: "Proprietary parts mean you rely 100% on Bambu for repairs.",
            maintenance_cost: "Medium",
            issues: [
                { type: "Privacy", name: "Cloud Logs", severity: 2, frequency: 2, long_term_factor: 1.5 },
                { type: "Size", name: "Small Volume", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Repair", name: "Proprietary", severity: 1, frequency: 3, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "PEI Plate", link: "https://amzn.to/4kyuwPk", desc: "Better adhesion." },
            { name: "eSun PLA+", link: "https://amzn.to/4ataRvx", desc: "Reliable filament." }
        ]
    },
    {
        id: "anycubic-photon-mono",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Photon Mono 2",
        price: "$180",
        release_year: 2023,
        evidence_count: 310,
        links: {
            solver: "https://amzn.to/4tCngpS",
            value: "https://amzn.to/469PUEF",
            antidote_1: "https://amzn.to/4tCG87Y",
            antidote_2: "https://amzn.to/4sblM4z"
        },
        recommendations: {
            primary: { name: "Flashforge 5M", link: "https://amzn.to/4tCngpS", benefits: ["Non-Toxic", "Easy Setup", "Safe for Home"] },
            secondary: { name: "Elegoo Mars 4", link: "https://amzn.to/469PUEF", reason: "Built-in Air Filter." }
        },
        risk_data: {
            long_term_risk: "LCD screen is a consumable. Resin fumes are hazardous.",
            maintenance_cost: "High",
            issues: [
                { type: "Health", name: "Toxic Fumes", severity: 3, frequency: 3, long_term_factor: 1.0 },
                { type: "Fail", name: "FEP Leak", severity: 3, frequency: 1, long_term_factor: 2.0 },
                { type: "Maintenance", name: "Messy Cleanup", severity: 2, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Wash & Cure", link: "https://amzn.to/4tCG87Y", desc: "Safety essential." },
            { name: "Grey Resin", link: "https://amzn.to/4sblM4z", desc: "Standard material." }
        ]
    },
    {
        id: "elegoo-neptune-4",
        category: "3d_printer",
        brand: "Elegoo",
        model: "Neptune 4 Pro",
        price: "$280",
        release_year: 2023,
        evidence_count: 580,
        links: {
            solver: "https://amzn.to/4rhuAFL",
            value: "https://amzn.to/4rhu1M9",
            antidote_1: "https://amzn.to/4ctaUtW",
            antidote_2: "https://amzn.to/4rgiixg"
        },
        recommendations: {
            primary: { name: "Creality K1C", link: "https://amzn.to/4rhuAFL", benefits: ["Stable Firmware", "Enclosed", "Faster"] },
            secondary: { name: "Ender 3 V3 KE", link: "https://amzn.to/4rhu1M9", reason: "Easier to fix." }
        },
        risk_data: {
            long_term_risk: "Firmware bugs cause nozzle crashes. Wheels wear out.",
            maintenance_cost: "Medium",
            issues: [
                { type: "Firmware", name: "Z-Offset Bug", severity: 3, frequency: 2, long_term_factor: 1.5 },
                { type: "Noise", name: "Loud Fans", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Wear", name: "Wheel Dust", severity: 2, frequency: 2, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "PEI Plate", link: "https://amzn.to/4ctaUtW", desc: "Spare plate." },
            { name: "Noctua Fan", link: "https://amzn.to/4rgiixg", desc: "Silence it." }
        ]
    },
    {
        id: "prusa-mini",
        category: "3d_printer",
        brand: "Prusa",
        model: "Mini+",
        price: "$429",
        release_year: 2019,
        evidence_count: 1200,
        links: {
            solver: "https://amzn.to/3MEIa77",
            value: "https://amzn.to/3OcjO5b",
            antidote_1: "https://amzn.to/4awdywx",
            antidote_2: "https://amzn.to/4qG8n3c"
        },
        recommendations: {
            primary: { name: "Flashforge 5M", link: "https://amzn.to/3MEIa77", benefits: ["4x Faster", "Modern Tech", "Cheaper"] },
            secondary: { name: "Sovol SV07", link: "https://amzn.to/3OcjO5b", reason: "Larger & Faster." }
        },
        risk_data: {
            long_term_risk: "Obsolete technology. Very slow compared to modern printers.",
            maintenance_cost: "Low",
            issues: [
                { type: "Perf", name: "Slow Speed", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Design", name: "Bowden Jam", severity: 2, frequency: 2, long_term_factor: 1.0 },
                { type: "Value", name: "Overpriced", severity: 1, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Raspberry Pi", link: "https://amzn.to/4awdywx", desc: "OctoPrint" },
            { name: "Heatbreak", link: "https://amzn.to/4qG8n3c", desc: "Fix jams." }
        ]
    },
    {
        id: "creality-k1",
        category: "3d_printer",
        brand: "Creality",
        model: "K1 (Gen 1)",
        price: "$399",
        release_year: 2023,
        evidence_count: 750,
        links: {
            solver: "https://amzn.to/3Of1sjT",
            value: "https://amzn.to/3ZF3Oen",
            antidote_1: "https://amzn.to/4kyx6F0",
            antidote_2: "https://amzn.to/3ZCCYU7"
        },
        recommendations: {
            primary: { name: "Flashforge 5M Pro", link: "https://amzn.to/3Of1sjT", benefits: ["Reliable Nozzle", "Better QC", "Plug & Play"] },
            secondary: { name: "QIDI Tech Q1", link: "https://amzn.to/3ZF3Oen", reason: "Heated Chamber." }
        },
        risk_data: {
            long_term_risk: "Gen 1 extruder and hotend are prone to jamming.",
            maintenance_cost: "High",
            issues: [
                { type: "Mech", name: "Extruder Jam", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { type: "Quality", name: "VFA Ripples", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Design", name: "Tube Melt", severity: 2, frequency: 2, long_term_factor: 1.5 }
            ]
        },
        accessories: [
            { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." },
            { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "High speed." }
        ]
    }
];
