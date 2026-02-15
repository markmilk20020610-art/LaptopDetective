// data.js - v42.0 LOCAL IMAGES FINAL (16 Products)
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
        image: "images/dell-xps-13-plus.jpg", // ✅ 本地图片路径
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
        description_summary: "The Dell XPS 13 Plus (9320) faces significant long term problems regarding thermal management and capacitive touch bar failures.",
        risk_data: {
            long_term_risk: "Capacitive touch bar failure requires entire deck replacement.",
            maintenance_cost: "High",
            issues: [
                { name: "Touch Bar Freeze", severity: 3, frequency: 3, desc: "Capacitive keys stop responding due to heat." },
                { name: "Battery Degradation", severity: 2, frequency: 3, desc: "Health drops below 80% within 14 months." },
                { name: "Dongle Hell", severity: 2, frequency: 3, desc: "Charging port wear from constant dongle usage." }
            ]
        },
        long_term_analysis: "Our analysis indicates a high failure rate for the XPS 13 Plus after 6–12 months. The primary culprit is the aggressive thermal profile combined with the experimental glass deck design.",
        maintenance_cost_analysis: "High ($400 – $700). The RAM and SSD are soldered. Touch bar failure requires top deck replacement.",
        who_should_avoid: "Software Developers (missing physical Esc key) and users in hot climates.",
        faq_section: [
            { q: "What are the long term problems?", a: "Touch bar unresponsiveness and rapid battery degradation." },
            { q: "Is it worth buying?", a: "No. Thermal throttling makes it a poor value." }
        ],
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
        image: "images/lenovo-loq-15.jpg", // ✅ 本地图片路径
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
        description_summary: "The Lenovo LOQ 15 (Intel) suffers from catastrophic motherboard failures due to weak VRMs.",
        risk_data: {
            long_term_risk: "Intel HX CPUs are frying motherboard VRMs within 6 months.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Motherboard Dead", desc: "Specific Intel HX CPUs fry the VRMs.", severity: 3, frequency: 3 },
                { name: "Overheating", desc: "CPU hits 95°C easily.", severity: 3, frequency: 3 },
                { name: "Battery Drain", desc: "Drains battery while plugged in.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The motherboard VRMs cannot sustain the power draw of Intel HX processors, leading to sudden death within 6-9 months.",
        maintenance_cost_analysis: "Total Loss ($600+). VRM failure kills the mainboard.",
        who_should_avoid: "Budget gamers looking for a long-term investment.",
        faq_section: [
            { q: "What is the main issue?", a: "Sudden motherboard death on Intel HX models." },
            { q: "Is it worth buying?", a: "Only the AMD Ryzen version." }
        ],
        accessories: [
            { name: "Laptop Stand", link: "https://amzn.to/3OaX19O", desc: "Airflow is mandatory." },
            { name: "Cooling Pad", link: "https://amzn.to/4kv8sFf", desc: "Force air cooling." }
        ]
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15",
        price: "$2,499",
        release_year: 2024,
        evidence_count: 610,
        image: "images/razer-blade-15.jpg", // ✅ 本地图片路径
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
        description_summary: "The Razer Blade 15 suffers from the notorious 'Spicy Pillow' issue (battery swelling).",
        risk_data: {
            long_term_risk: "Battery swelling is guaranteed due to heat.",
            maintenance_cost: "Very High",
            issues: [
                { name: "Battery Bloat", desc: "Chassis heat cooks battery causing swelling.", severity: 3, frequency: 3 },
                { name: "Surface Lava", desc: "Keyboard becomes too hot to touch.", severity: 2, frequency: 3 },
                { name: "Bad RMA", desc: "Support takes weeks to respond.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The unibody aluminum chassis acts as a heatsink, dissipating heat into the battery, causing swelling within 12-18 months.",
        maintenance_cost_analysis: "Very High ($200+). DIY battery replacement is risky.",
        who_should_avoid: "Users in hot climates.",
        faq_section: [
            { q: "What is spicy pillow?", a: "Battery swelling due to heat." },
            { q: "Is it reliable?", a: "No, thermal management is poor." }
        ],
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
        image: "images/hp-spectre-x360.jpg", // ✅ 本地图片路径
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
        description_summary: "The 360-degree hinges often loosen after 12-18 months of use.",
        risk_data: {
            long_term_risk: "Hinge mechanism loosens causing screen wobble.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Hinge Snap", desc: "Hinge loosens after 1 year.", severity: 2, frequency: 2 },
                { name: "Bloatware", desc: "System slowed by junk apps.", severity: 1, frequency: 3 },
                { name: "Tablet Heat", desc: "Uncomfortable in tablet mode.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Hinges loosen significantly. Condensed motherboard layout leads to thermal stress.",
        maintenance_cost_analysis: "Medium ($300+). Hinge repair requires screen replacement.",
        who_should_avoid: "Field workers needing a rugged device.",
        faq_section: [
            { q: "Do hinges break?", a: "They loosen, causing wobble." },
            { q: "Is it durable?", a: "Gem-cut design is prone to damage." }
        ],
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
        image: "images/asus-tuf-a15.jpg", // ✅ 本地图片路径
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
        description_summary: "Cooling fan bearings often fail or begin grinding after 12 months.",
        risk_data: {
            long_term_risk: "Fan bearings grind and fail.",
            maintenance_cost: "Low",
            issues: [
                { name: "Jet Engine", desc: "Fans hit 55dB.", severity: 1, frequency: 3 },
                { name: "Ghosting", desc: "Slow response time causes blurring.", severity: 2, frequency: 3 },
                { name: "Plastic Flex", desc: "Chassis feels cheap.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Cooling fans are the weak link. Screen ghosting is common.",
        maintenance_cost_analysis: "Low ($50). Fans are cheap but fail often.",
        who_should_avoid: "Students needing a quiet laptop.",
        faq_section: [
            { q: "Is it loud?", a: "Yes, very loud." },
            { q: "Is the screen good?", a: "No, ghosting is bad." }
        ],
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
        image: "images/surface-laptop-5.jpg", // ✅ 本地图片路径
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
        description_summary: "Disposable design. Alcantara stains and glued-in battery.",
        risk_data: {
            long_term_risk: "Battery cannot be replaced. Fabric stains.",
            maintenance_cost: "Impossible",
            issues: [
                { name: "Glue Trap", desc: "Zero repairability.", severity: 2, frequency: 3 },
                { name: "Alcantara Stain", desc: "Fabric absorbs sweat.", severity: 2, frequency: 3 },
                { name: "Thick Bezels", desc: "Dated design.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Zero repairability. Alcantara fabric turns gross after 6-9 months.",
        maintenance_cost_analysis: "Impossible. Unit swap only.",
        who_should_avoid: "Right-to-repair advocates.",
        faq_section: [
            { q: "Can you clean Alcantara?", a: "Not really." },
            { q: "Can I change battery?", a: "No." }
        ],
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
        image: "images/acer-swift-go-14.jpg", // ✅ 本地图片路径
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
        description_summary: "MediaTek Wi-Fi cards lead to persistent connection drops.",
        risk_data: {
            long_term_risk: "WiFi card failure and trackpad peeling.",
            maintenance_cost: "Low",
            issues: [
                { name: "WiFi Dropouts", desc: "Connection instability.", severity: 2, frequency: 3 },
                { name: "Sticky Trackpad", desc: "Plastic wears down.", severity: 2, frequency: 3 },
                { name: "Bloatware", desc: "Popups out of the box.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Chronic Wi-Fi issues and trackpad wear.",
        maintenance_cost_analysis: "Low ($20). Swap Wi-Fi card to fix.",
        who_should_avoid: "Remote workers.",
        faq_section: [
            { q: "Is WiFi bad?", a: "Yes, MediaTek cards are unreliable." },
            { q: "Can I fix it?", a: "Yes, swap for Intel AX210." }
        ],
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
        image: "images/samsung-galaxy-book3.jpg", // ✅ 本地图片路径
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
        description_summary: "'Crack-Gate': Screens crack spontaneously due to thin glass.",
        risk_data: {
            long_term_risk: "Screen cracks spontaneously.",
            maintenance_cost: "High",
            issues: [
                { name: "Crack-Gate", desc: "Glass cracks from hinge stress.", severity: 3, frequency: 2 },
                { name: "Screen Wobble", desc: "Weak hinge.", severity: 2, frequency: 3 },
                { name: "Fingerprints", desc: "Looks dirty instantly.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "AMOLED screen is too thin and prone to cracking.",
        maintenance_cost_analysis: "High ($400+). Screens are expensive.",
        who_should_avoid: "Students with crowded backpacks.",
        faq_section: [
            { q: "Does screen crack?", a: "Yes, spontaneously." },
            { q: "Is it expensive?", a: "Yes, repair is costly." }
        ],
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
        image: "images/lenovo-legion-5.jpg", // ✅ 本地图片路径
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
        description_summary: "Solid, but suffers from 'Wi-Fi Lottery' (Realtek cards) and heavy brick.",
        risk_data: {
            long_term_risk: "WiFi card failure causing lag.",
            maintenance_cost: "Low",
            issues: [
                { name: "WiFi Lottery", desc: "Realtek cards cause lag.", severity: 2, frequency: 3 },
                { name: "Heavy Brick", desc: "Charger is massive.", severity: 1, frequency: 3 },
                { name: "Paint Chip", desc: "Palm rest wear.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Realtek WiFi cards cause high latency. Charging port stress from heavy brick.",
        maintenance_cost_analysis: "Low ($20). Swap WiFi card.",
        who_should_avoid: "Competitive gamers (unless upgrading WiFi).",
        faq_section: [
            { q: "Is WiFi bad?", a: "If you get Realtek, yes." },
            { q: "Is it heavy?", a: "Yes." }
        ],
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
        image: "images/macbook-pro-13-m2.jpg", // ✅ 本地图片路径
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
        description_summary: "Zombie product. Touch Bar is dead feature. Outdated chassis.",
        risk_data: {
            long_term_risk: "Obsolescence and Touch Bar failure.",
            maintenance_cost: "High",
            issues: [
                { name: "Zombie TouchBar", desc: "Feature is dead/glitchy.", severity: 2, frequency: 3 },
                { name: "60Hz Screen", desc: "Slow refresh rate.", severity: 2, frequency: 3 },
                { name: "720p Webcam", desc: "Poor quality.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Touch Bar has no OS support. Value retention will plummet.",
        maintenance_cost_analysis: "High ($400+).",
        who_should_avoid: "Developers needing Esc key.",
        faq_section: [
            { q: "Is Touch Bar good?", a: "No, discontinued." },
            { q: "Is Air better?", a: "Yes." }
        ],
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
        image: "images/ender-3-v3-se.jpg", // ✅ 本地图片路径
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
        description_summary: "Gantry wobble and plastic gears degrade print quality after 500 hours.",
        risk_data: {
            long_term_risk: "Gantry wobble and extruder wear.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Gantry Wobble", desc: "X-gantry sagging.", severity: 2, frequency: 3 },
                { name: "Gear Wear", desc: "Plastic gears strip.", severity: 2, frequency: 2 },
                { name: "Spaghetti", desc: "No AI detection.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Plastic frame mounts loosen. Wheels wear out creating slop.",
        maintenance_cost_analysis: "Low ($20–$50). Time cost is high.",
        who_should_avoid: "Schools needing reliability.",
        faq_section: [
            { q: "What is gantry sag?", a: "Print arm droops." },
            { q: "Is it reliable?", a: "Requires tinkering." }
        ],
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
        image: "images/bambu-a1-mini.jpg", // ✅ 本地图片路径
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
        description_summary: "Proprietary 'Walled Garden'. 100% reliance on Bambu for parts.",
        risk_data: {
            long_term_risk: "Proprietary parts.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Cloud Logs", desc: "Privacy concerns.", severity: 2, frequency: 2 },
                { name: "Small Volume", desc: "180mm limit.", severity: 1, frequency: 3 },
                { name: "Proprietary", desc: "No generic parts.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Reliable, but ecosystem lock-in is the risk. Small build volume limits use.",
        maintenance_cost_analysis: "Medium. Parts expensive.",
        who_should_avoid: "Privacy-conscious users.",
        faq_section: [
            { q: "Is it too small?", a: "Yes, for helmets." },
            { q: "Generic parts?", a: "No." }
        ],
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
        image: "images/anycubic-photon-mono.jpg", // ✅ 本地图片路径
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
        description_summary: "Resin printing is hazardous. FEP leaks and toxic fumes.",
        risk_data: {
            long_term_risk: "LCD burnout and health hazards.",
            maintenance_cost: "High",
            issues: [
                { name: "Toxic Fumes", desc: "Requires ventilation.", severity: 3, frequency: 3 },
                { name: "FEP Leak", desc: "Resin cures on screen.", severity: 3, frequency: 1 },
                { name: "Messy Cleanup", desc: "Isopropyl washing.", severity: 2, frequency: 3 }
            ]
        },
        long_term_analysis: "LCD screen burns out after 2000 hours. FEP leaks are catastrophic.",
        maintenance_cost_analysis: "High ($50+). Screen replacement.",
        who_should_avoid: "Apartment dwellers.",
        faq_section: [
            { q: "Is it safe?", a: "No, fumes are toxic." },
            { q: "Screen life?", a: "Consumable." }
        ],
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
        image: "images/elegoo-neptune-4.jpg", // ✅ 本地图片路径
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
        description_summary: "Klipper firmware bugs cause nozzle crashes. Very loud.",
        risk_data: {
            long_term_risk: "Firmware bugs and wheel wear.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Z-Offset Bug", desc: "Nozzle crashes into bed.", severity: 3, frequency: 2 },
                { name: "Loud Fans", desc: "Jet engine noise.", severity: 2, frequency: 3 },
                { name: "Wheel Dust", desc: "POM wheels wear out.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Z-Offset bug causes physical damage. POM wheels wear down fast.",
        maintenance_cost_analysis: "Medium ($30+). Bed sheets.",
        who_should_avoid: "Beginners.",
        faq_section: [
            { q: "Is it buggy?", a: "Yes, firmware is unstable." },
            { q: "Quiet?", a: "No, very loud." }
        ],
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
        image: "images/prusa-mini.jpg", // ✅ 本地图片路径
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
        description_summary: "Reliable tank but obsolete. Slow speeds make it poor value.",
        risk_data: {
            long_term_risk: "Obsolete technology.",
            maintenance_cost: "Low",
            issues: [
                { name: "Slow Speed", desc: "No input shaping.", severity: 2, frequency: 3 },
                { name: "Bowden Jam", desc: "Tube gap jams.", severity: 2, frequency: 2 },
                { name: "Overpriced", desc: "Paying for old tech.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Reliable but extremely slow and overpriced compared to modern printers.",
        maintenance_cost_analysis: "Low. Parts are standard.",
        who_should_avoid: "Value seekers.",
        faq_section: [
            { q: "Is it fast?", a: "No, very slow." },
            { q: "Reliable?", a: "Yes." }
        ],
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
        image: "images/creality-k1.jpg", // ✅ 本地图片路径
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
        description_summary: "Beta test product. Gen 1 extruders jam constantly.",
        risk_data: {
            long_term_risk: "Gen 1 extruder jamming.",
            maintenance_cost: "High (Upgrades needed)",
            issues: [
                { name: "Extruder Jam", desc: "Fails to grip filament.", severity: 3, frequency: 3 },
                { name: "VFA Ripples", desc: "Artifacts on walls.", severity: 1, frequency: 3 },
                { name: "Tube Melt", desc: "PTFE melt.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "High failure rates in Gen 1 extruder. VFA ripples common.",
        maintenance_cost_analysis: "High ($40+). Needs new extruder.",
        who_should_avoid: "Users wanting hassle-free.",
        faq_section: [
            { q: "Does it jam?", a: "Yes, Gen 1 jams often." },
            { q: "Can I fix it?", a: "Yes, buy Gen 2 kit." }
        ],
        accessories: [
            { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." },
            { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "High speed." }
        ]
    }
];
