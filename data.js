// data.js - FULL DATABASE v28.1
const productsDB = [
    // ================= LAPTOPS (10 Models) =================
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price_range: "$1,399",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/4ax1iM6",
            value_affiliate: "https://amzn.to/4aLNfUh",
            antidote_1: "https://amzn.to/4kD8XgK", // Updated Link
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        recommendations: {
            solver: { name: "MacBook Air M2", reason: "15+ hours battery. Real physical keys. Zero frustration." },
            value: { name: "Dell XPS 13 (9315)", reason: "Traditional layout, reliable function keys, $400 cheaper." }
        },
        issues: [
            { name: "Dongle Hell", desc: "No headphone jack. Cannot charge and use wired headphones simultaneously.", severity: 6, frequency: 10 },
            { name: "Battery Anxiety", desc: "Battery life is laughable (5 hours). You will be hugged to the wall outlet.", severity: 8, frequency: 9 },
            { name: "Touch Bar Freeze", desc: "Capacitive touch function row registers phantom touches or freezes.", severity: 7, frequency: 5 }
        ],
        antidotes: [
            { name: "USB-C to Audio Adapter", desc: "Essential Fix" },
            { name: "Anker Prime 200W", desc: "Survival Gear" }
        ],
        persona: "Music Producers: Nightmare."
    },
    {
        id: "lenovo-legion-5",
        category: "laptop",
        brand: "Lenovo",
        model: "Legion 5 (Gen 8)",
        price_range: "$1,199",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/463YrsV",
            value_affiliate: "https://amzn.to/3OpuxsR",
            antidote_1: "https://amzn.to/4kuLdLw",
            antidote_2: "https://amzn.to/4qtEyCJ"
        },
        recommendations: {
            solver: { name: "ASUS ROG Zephyrus G14", reason: "Weighs 1kg less and uses premium Intel WiFi components." },
            value: { name: "Lenovo Legion 5 (Gen 7)", reason: "Same GPU performance for $400 less. Upgrade WiFi yourself." }
        },
        issues: [
            { name: "WiFi Card Lottery", desc: "Cheap Realtek cards cause ping spikes and lost ranked matches.", severity: 7, frequency: 8 },
            { name: "The 300W Brick", desc: "Power adapter weighs almost as much as the laptop itself.", severity: 5, frequency: 10 },
            { name: "Cable Fraying", desc: "Heavy brick causes cable stress and fraying at connector.", severity: 6, frequency: 4 }
        ],
        antidotes: [
            { name: "Intel AX210 WiFi 6E Card", desc: "Essential Fix" },
            { name: "Lenovo Slim 135W Charger", desc: "Survival Gear" }
        ],
        persona: "Competitive Gamers: Lag Risk."
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15 (2024)",
        price_range: "$2,499",
        release_year: 2024,
        links: {
            solver_affiliate: "https://amzn.to/4aoclHy",
            value_affiliate: "https://amzn.to/3OCX12o",
            antidote_1: "https://amzn.to/46IyRJZ",
            antidote_2: "https://amzn.to/4aszZTn"
        },
        recommendations: {
            solver: { name: "ASUS ROG Zephyrus G16", reason: "Runs 10°C cooler thanks to better airflow." },
            value: { name: "Razer Blade 14 (AMD)", reason: "AMD chips run cooler, meaning less battery bloat risk." }
        },
        issues: [
            { name: "Spicy Pillow", desc: "Chassis heat cooks the battery, causing dangerous swelling (bloat).", severity: 10, frequency: 7 },
            { name: "Surface Lava", desc: "Keyboard area hits 55°C (131°F) while gaming.", severity: 6, frequency: 10 },
            { name: "Chassis Bending", desc: "Bloated battery physically bends the aluminum chassis.", severity: 9, frequency: 6 }
        ],
        antidotes: [
            { name: "IETS GT600 (New King)", desc: "Essential Fix" },
            { name: "Razer Huntsman Mini", desc: "Survival Gear" }
        ],
        persona: "Dorm Students: Fire Hazard."
    },
    {
        id: "hp-spectre-x360",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360",
        price_range: "$1,599",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/4kRtsXf",
            value_affiliate: "https://amzn.to/3M6LAPV",
            antidote_1: "https://amzn.to/4aN0WCk",
            antidote_2: "https://amzn.to/3Obi3oO"
        },
        recommendations: {
            solver: { name: "Dell XPS 13 Plus", reason: "Solid hinge design (non-convertible) is more durable." },
            value: { name: "Lenovo Yoga 9i", reason: "Better soundbar hinge design proven to last longer." }
        },
        issues: [
            { name: "Hinge Snap", desc: "One hinge loosens significantly causing screen flop.", severity: 8, frequency: 6 },
            { name: "Bloatware City", desc: "15+ pre-installed junk apps drain battery out of the box.", severity: 4, frequency: 10 },
            { name: "Ribbon Cable Stress", desc: "Constant flipping stresses internal display cables.", severity: 7, frequency: 5 }
        ],
        antidotes: [
            { name: "HP 3-Year Care Pack", desc: "Essential Fix" },
            { name: "Samsung T7 Shield SSD", desc: "Clean Install Backup" }
        ],
        persona: "Digital Artists: Fragile."
    },
    {
        id: "asus-tuf-a15",
        category: "laptop",
        brand: "ASUS",
        model: "TUF Gaming A15",
        price_range: "$999",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/46wZnWM",
            value_affiliate: "https://amzn.to/4rP6vGj",
            antidote_1: "https://amzn.to/4ttHnGR",
            antidote_2: "https://amzn.to/4rxSxZP"
        },
        recommendations: {
            solver: { name: "Lenovo Legion 5", reason: "Much better screen response times and quieter cooling." },
            value: { name: "Acer Nitro V 15", reason: "Similar performance for $100 less. Budget king." }
        },
        issues: [
            { name: "Jet Engine Fans", desc: "Fans hit 55dB. You will be kicked out of libraries.", severity: 5, frequency: 10 },
            { name: "Ghost Screen", desc: "Terrible response times (25ms+) cause blurring in shooters.", severity: 6, frequency: 10 },
            { name: "Bearing Grind", desc: "Cheap fan bearings start grinding after 9 months.", severity: 7, frequency: 6 }
        ],
        antidotes: [
            { name: "Razer BlackShark V2", desc: "Essential Fix" },
            { name: "BenQ Mobiuz 24", desc: "Survival Gear" }
        ],
        persona: "Library Users: Too Loud."
    },
    {
        id: "lenovo-loq",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15 (Intel)",
        price_range: "$899",
        release_year: 2024,
        links: {
            solver_affiliate: "https://amzn.to/4bS0yDI",
            value_affiliate: "https://amzn.to/4qymUhm",
            antidote_1: "https://amzn.to/3OaX19O",
            antidote_2: "https://amzn.to/4kv8sFf"
        },
        recommendations: {
            solver: { name: "Acer Nitro 16", reason: "Superior dual-fan cooling prevents thermal throttling." },
            value: { name: "ASUS TUF F15", reason: "Military-grade durability (MIL-STD-810H) won't snap." }
        },
        issues: [
            { name: "Motherboard Suicide", desc: "Specific Intel HX CPUs are frying motherboard VRMs.", severity: 10, frequency: 5 },
            { name: "Thermonuclear Heat", desc: "Single-fan cooling cannot handle modern GPUs. Hits 95°C.", severity: 8, frequency: 9 },
            { name: "Brick Risk", desc: "Laptop becomes a brick within 3-6 months.", severity: 10, frequency: 4 }
        ],
        antidotes: [
            { name: "Laptop Stand", desc: "Essential Fix" },
            { name: "IETS GT300 Cooling Pad", desc: "Survival Gear" }
        ],
        persona: "Budget Gamers: High Risk."
    },
    {
        id: "surface-laptop-5",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Laptop 5",
        price_range: "$1,299",
        release_year: 2022,
        links: {
            solver_affiliate: "https://amzn.to/4qx0a16",
            value_affiliate: "https://amzn.to/3MBbFXr",
            antidote_1: "https://amzn.to/3Zu16Zb",
            antidote_2: "https://amzn.to/4qDObPt"
        },
        recommendations: {
            solver: { name: "Dell XPS 13", reason: "Aluminum interior is easy to clean and won't stain." },
            value: { name: "Framework Laptop", reason: "Completely repairable and upgradeable. The anti-Surface." }
        },
        issues: [
            { name: "The Glue Trap", desc: "Zero repairability. Battery glued down. E-waste if broken.", severity: 8, frequency: 10 },
            { name: "Alcantara Stain", desc: "Fabric deck absorbs sweat/oil and turns yellow.", severity: 4, frequency: 8 },
            { name: "Yellow Deck", desc: "Permanent gross discoloration after 8 months.", severity: 3, frequency: 7 }
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
        links: {
            solver_affiliate: "https://amzn.to/4rejrp5",
            value_affiliate: "https://amzn.to/4kAUrGn",
            antidote_1: "https://amzn.to/462RKXU",
            antidote_2: "https://amzn.to/4raPoP7"
        },
        recommendations: {
            solver: { name: "MacBook Air M1", reason: "Glass trackpad perfection and zero WiFi issues." },
            value: { name: "Asus Zenbook 14", reason: "OLED screen and better build quality for $50 more." }
        },
        issues: [
            { name: "WiFi Dropouts", desc: "MediaTek WiFi cards struggle to maintain connection.", severity: 7, frequency: 8 },
            { name: "Plastic Trackpad", desc: "Feels sticky/cheap. Precision gestures misfire.", severity: 5, frequency: 10 },
            { name: "Surface Wear", desc: "Trackpad becomes shiny and inaccurate after 6 months.", severity: 4, frequency: 6 }
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
        links: {
            solver_affiliate: "https://amzn.to/4cq58t4",
            value_affiliate: "https://amzn.to/466tbt7",
            antidote_1: "https://amzn.to/46ORImL",
            antidote_2: "https://amzn.to/3MrfHkY"
        },
        recommendations: {
            solver: { name: "MacBook Air 15", reason: "Solid unibody aluminum hinge with zero screen wobble." },
            value: { name: "LG Gram 16", reason: "Ideally lighter and flexible magnesium chassis resists cracks." }
        },
        issues: [
            { name: "Crack-Gate Screen", desc: "Glass is too thin. Spontaneous cracks from opening lid.", severity: 9, frequency: 5 },
            { name: "The Wobble", desc: "Hinge is too weak for screen size. Wobbles when typing.", severity: 5, frequency: 10 },
            { name: "Backpack Risk", desc: "Cannot survive a packed backpack without protection.", severity: 8, frequency: 6 }
        ],
        antidotes: [
            { name: "Hard Shell Laptop Case", desc: "Essential Fix" },
            { name: "Bluetooth Keyboard", desc: "Survival Gear" }
        ],
        persona: "Frequent Travelers: Fragile."
    },
    {
        id: "macbook-pro-13-m2",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Pro 13 (M2)",
        price_range: "$1,299",
        release_year: 2022,
        links: {
            solver_affiliate: "https://amzn.to/3ZyvtO1",
            value_affiliate: "https://amzn.to/3MsXTG7",
            antidote_1: "https://amzn.to/4adenvg",
            antidote_2: "https://amzn.to/3OCuytw"
        },
        recommendations: {
            solver: { name: "MacBook Pro 14 (M3)", reason: "Real Pro screen (120Hz), MagSafe, and HDMI port." },
            value: { name: "MacBook Air M2", reason: "Same chip, better webcam, MagSafe, and cheaper." }
        },
        issues: [
            { name: "Zombie Touch Bar", desc: "Dead tech. No future OS support. No Esc key.", severity: 4, frequency: 10 },
            { name: "60Hz Time Machine", desc: "Spending $1300 for a 60Hz screen in 2024 is a crime.", severity: 3, frequency: 10 },
            { name: "Ancient Webcam", desc: "720p webcam looks grainy compared to Air M2.", severity: 3, frequency: 10 }
        ],
        antidotes: [
            { name: "Anker 4K Webcam", desc: "Essential Fix" },
            { name: "External 144Hz Monitor", desc: "Survival Gear" }
        ],
        persona: "Video Editors: Outdated."
    },

    // ================= 3D PRINTERS (6 Models) =================
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price_range: "$199",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/4rO30zE",
            value_affiliate: "https://amzn.to/4bV0DGS",
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            solver: { name: "Flashforge Adventurer 5M", reason: "CoreXY structure, auto-leveling, reliable workhorse." },
            value: { name: "Sovol SV06", reason: "Linear rails are more durable than plastic wheels." }
        },
        issues: [
            { name: "Gantry Wobble", desc: "Cheap construction leads to Z-axis wobble.", severity: 6, frequency: 8 },
            { name: "Spaghetti Monster", desc: "No AI detection. Failed prints waste filament.", severity: 5, frequency: 7 },
            { name: "Gear Wear", desc: "Extruder gears wear out in 3 months.", severity: 7, frequency: 6 }
        ],
        antidotes: [
            { name: "CR Touch Auto Leveling Kit", desc: "Essential Fix" },
            { name: "Sunlu Filament Dryer S1", desc: "Survival Gear" }
        ],
        persona: "Parents: Maintenance Heavy."
    },
    {
        id: "bambu-a1-mini",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "A1 Mini",
        price_range: "$299",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/3MIGFVp",
            value_affiliate: "https://amzn.to/4agB7KS",
            antidote_1: "https://amzn.to/4kyuwPk",
            antidote_2: "https://amzn.to/4ataRvx"
        },
        recommendations: {
            solver: { name: "Prusa Mini+", reason: "Open Source and offline privacy focus." },
            value: { name: "AnkerMake M5C", reason: "Faster printing speeds and solid aluminum build." }
        },
        issues: [
            { name: "Too Small", desc: "180mm volume limits cosplay prints.", severity: 4, frequency: 10 },
            { name: "Cloud Privacy", desc: "Files go through cloud. Black box data policy.", severity: 6, frequency: 5 },
            { name: "Proprietary Parts", desc: "Cannot upgrade or fix cheaply.", severity: 3, frequency: 10 }
        ],
        antidotes: [
            { name: "Textured PEI Plate", desc: "Essential Fix" },
            { name: "eSun PLA+ Filament White", desc: "Survival Gear" }
        ],
        persona: "Tinkerers: Closed System."
    },
    {
        id: "anycubic-photon-mono",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Photon Mono 2",
        price_range: "$180",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/4tCngpS",
            value_affiliate: "https://amzn.to/469PUEF",
            antidote_1: "https://amzn.to/4tCG87Y",
            antidote_2: "https://amzn.to/4sblM4z"
        },
        recommendations: {
            solver: { name: "Flashforge Adventurer 5M", reason: "Escape toxicity. FDM is safer for home use." },
            value: { name: "Elegoo Mars 4", reason: "Built-in air filter reduces toxic smell." }
        },
        issues: [
            { name: "Toxic Resin", desc: "Fumes are hazardous. Requires ventilation/mask.", severity: 9, frequency: 10 },
            { name: "FEP Film Tear", desc: "Leak destroys screen permanently.", severity: 10, frequency: 4 },
            { name: "Screen Burnout", desc: "LCD is a consumable, dies in 6 months.", severity: 5, frequency: 10 }
        ],
        antidotes: [
            { name: "Anycubic Wash & Cure", desc: "Essential Fix" },
            { name: "Anycubic Grey Resin 1kg", desc: "Survival Gear" }
        ],
        persona: "Apartment Users: Toxic."
    },
    {
        id: "elegoo-neptune-4",
        category: "3d_printer",
        brand: "Elegoo",
        model: "Neptune 4 Pro",
        price_range: "$280",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/4rhuAFL",
            value_affiliate: "https://amzn.to/4rhu1M9",
            antidote_1: "https://amzn.to/4ctaUtW",
            antidote_2: "https://amzn.to/4rgiixg"
        },
        recommendations: {
            solver: { name: "Creality K1C", reason: "Stable firmware and enclosed design." },
            value: { name: "Creality Ender 3 V3 KE", reason: "Better software experience, easier repair." }
        },
        issues: [
            { name: "Z-Offset Bug", desc: "Printer forgets height, nozzle crashes into bed.", severity: 9, frequency: 6 },
            { name: "Jet Engine Noise", desc: "Aux fan hits 65dB+. Unusable in bedroom.", severity: 6, frequency: 10 },
            { name: "POM Wheel Wear", desc: "Wheels wear out quickly at high speeds.", severity: 5, frequency: 8 }
        ],
        antidotes: [
            { name: "PEI Magnetic Build Plate", desc: "Essential Fix" },
            { name: "Noctua Silent Fan Mod", desc: "Survival Gear" }
        ],
        persona: "Beginners: Firmware Bugs."
    },
    {
        id: "prusa-mini",
        category: "3d_printer",
        brand: "Prusa",
        model: "Mini+",
        price_range: "$429",
        release_year: 2019,
        links: {
            solver_affiliate: "https://amzn.to/3MEIa77",
            value_affiliate: "https://amzn.to/3OcjO5b",
            antidote_1: "https://amzn.to/4awdywx",
            antidote_2: "https://amzn.to/4qG8n3c"
        },
        recommendations: {
            solver: { name: "Flashforge Adventurer 5M", reason: "Modern CoreXY, much faster, cheaper." },
            value: { name: "Sovol SV07", reason: "Faster Klipper speed and larger build volume." }
        },
        issues: [
            { name: "Painfully Slow", desc: "2019 tech. No input shaping. 4x slower than Bambu.", severity: 5, frequency: 10 },
            { name: "Tiny Volume", desc: "180mm cube is restrictive.", severity: 4, frequency: 10 },
            { name: "USB Port Wear", desc: "Port wears out after a year.", severity: 3, frequency: 5 }
        ],
        antidotes: [
            { name: "Raspberry Pi 4", desc: "For OctoPrint" },
            { name: "Bondtech Heatbreak", desc: "Prevent Jams" }
        ],
        persona: "Value Seekers: Overpriced."
    },
    {
        id: "creality-k1",
        category: "3d_printer",
        brand: "Creality",
        model: "K1 (Gen 1)",
        price_range: "$399",
        release_year: 2023,
        links: {
            solver_affiliate: "https://amzn.to/3Of1sjT",
            value_affiliate: "https://amzn.to/3ZF3Oen",
            antidote_1: "https://amzn.to/4kyx6F0",
            antidote_2: "https://amzn.to/3ZCCYU7"
        },
        recommendations: {
            solver: { name: "Flashforge 5M Pro", reason: "Reliable quick-swap nozzle, no jamming." },
            value: { name: "QIDI Tech Q1 Pro", reason: "Heated chamber for warp-free ABS." }
        },
        issues: [
            { name: "Extruder Jam", desc: "Gen 1 extruder fails. Filament slips.", severity: 9, frequency: 8 },
            { name: "VFA Ripples", desc: "Vibrations leave ugly patterns on walls.", severity: 5, frequency: 10 },
            { name: "PTFE Tube Melt", desc: "Tube melts inside hotend causing clogs.", severity: 7, frequency: 5 }
        ],
        antidotes: [
            { name: "Official Extruder Kit V3", desc: "Essential Fix" },
            { name: "Hyper PLA Filament", desc: "Survival Gear" }
        ],
        persona: "Speed Demons: Jamming Risk."
    }
];
