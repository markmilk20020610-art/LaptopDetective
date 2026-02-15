// data.js - v45.1 ULTIMATE EDITION (30 Products: 16 Old + 8 New Laptops + 6 New Printers)
const productsDB = [
    // ================= [EXISTING] LAPTOPS (10 Models) =================
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price: "$1,399",
        release_year: 2023,
        evidence_count: 420,
        image: "images/dell-xps-13-plus.jpg",
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
        image: "images/lenovo-loq-15.jpg",
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
        image: "images/razer-blade-15.jpg",
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
        image: "images/hp-spectre-x360.jpg",
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
        image: "images/asus-tuf-a15.jpg",
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
        image: "images/surface-laptop-5.jpg",
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
        id: "acer-swift-go-14-old",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14 (2023)",
        price: "$799",
        release_year: 2023,
        evidence_count: 450,
        image: "images/acer-swift-go-14.jpg",
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
        image: "images/samsung-galaxy-book3.jpg",
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
        image: "images/lenovo-legion-5.jpg",
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
        image: "images/macbook-pro-13-m2.jpg",
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

    // ================= [NEW] LAPTOPS (8 Models) =================
    {
        id: "macbook-air-15-m3",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Air 15 (M3)",
        price: "$1,299",
        release_year: 2026,
        evidence_count: 3400,
        image: "images/apple-macbook-air-15.jpg",
        links: {
            solver: "https://amzn.to/3IZ1234",
            value: "https://amzn.to/3IZ5678",
            antidote_1: "https://amzn.to/placeholder_case",
            antidote_2: "https://amzn.to/placeholder_hub"
        },
        recommendations: {
            primary: { name: "MacBook Pro 14", link: "https://amzn.to/placeholder_mbp", benefits: ["Active Cooling", "120Hz Screen", "HDMI Port"] },
            secondary: { name: "Air 13 (M2)", link: "https://amzn.to/placeholder_air2", reason: "Better value for casual use." }
        },
        description_summary: "The 15-inch MacBook Air M3 pairs an exceptional chip with a fanless chassis, creating a specific long-term reliability profile. While the build quality is industry-leading, the lack of active cooling leads to significant thermal saturation during sustained workloads.",
        risk_data: {
            long_term_risk: "Logic board failure is a total loss. Zero repairability.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Crack-Gate", severity: 3, frequency: 2, desc: "Thin screen cracks easily with keyboard debris." },
                { name: "No Fan", severity: 2, frequency: 3, desc: "Performance drops 20% during long tasks." },
                { name: "SSD Wear", severity: 2, frequency: 2, desc: "Soldered SSD means data is lost if board dies." }
            ]
        },
        long_term_analysis: "The fanless design is great for silence but introduces long-term risks if you consistently push the M3 chip. Heat buildup spreads through the chassis, degrading the battery cells faster than actively cooled models.",
        maintenance_cost_analysis: "Total Loss ($700+). Screen or board replacement costs exceed the value of a used unit.",
        who_should_avoid: "Video editors, 3D renders, and multitaskers who need sustained performance without throttling.",
        faq_section: [
            { q: "Does it overheat?", a: "It gets hot and throttles performance to stay safe." },
            { q: "Is the screen fragile?", a: "Yes, the 15-inch glass is very thin and prone to pressure cracks." },
            { q: "Can I repair it myself?", a: "No, components are soldered and glued." }
        ],
        accessories: [
            { name: "Hard Shell Case", link: "https://amzn.to/3TMxxxx", desc: "Protect the screen." },
            { name: "Thermal Pad Mod", link: "https://amzn.to/placeholder", desc: "Help dissipate heat." }
        ]
    },
    {
        id: "thinkpad-x1-carbon-gen12",
        category: "laptop",
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon Gen 12",
        price: "$1,899",
        release_year: 2025,
        evidence_count: 1250,
        image: "images/lenovo-thinkpad-x1.jpg",
        links: {
            solver: "https://amzn.to/3TPL8u1",
            value: "https://amzn.to/3vxM5qL",
            antidote_1: "https://amzn.to/placeholder_sleeve",
            antidote_2: "https://amzn.to/placeholder_dock"
        },
        recommendations: {
            primary: { name: "Framework Laptop 13", link: "https://amzn.to/placeholder_frame", benefits: ["Modular Ports", "User Repairable", "Cheaper RAM"] },
            secondary: { name: "ThinkPad T14 (AMD)", link: "https://amzn.to/placeholder_t14", reason: "Better thermals & value." }
        },
        description_summary: "The corporate standard for durability, yet the Gen 12 suffers from modern 'thinness' trends. Long-term reliability analysis shows that the premium 'soft-touch' coating degrades and becomes sticky after 18 months.",
        risk_data: {
            long_term_risk: "Soft-touch coating turns sticky. Soldered RAM limits longevity.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Coating Peel", severity: 2, frequency: 3, desc: "Rubberized coating degrades and peels after 18 months." },
                { name: "Thermal Throttle", severity: 2, frequency: 3, desc: "Ultra-thin chassis struggles to cool Core Ultra chips." },
                { name: "Soldered RAM", severity: 1, frequency: 3, desc: "Cannot upgrade memory later." }
            ]
        },
        long_term_analysis: "While durable against drops, the cosmetic durability is poor. The rubberized paint absorbs oils and becomes sticky or peels at the corners. The cooling system is undersized for the CPU.",
        maintenance_cost_analysis: "Medium ($150-$300). Keyboard replacement is difficult as it is riveted to the palm rest.",
        who_should_avoid: "Users who keep laptops for 5+ years and need cosmetic perfection or RAM upgrades.",
        faq_section: [
            { q: "Can I upgrade RAM?", a: "No, it is completely soldered." },
            { q: "Does the paint peel?", a: "Yes, heavily on corners after 1-2 years." },
            { q: "Is the fan loud?", a: "Yes, it spins up frequently due to the thin chassis." }
        ],
        accessories: [
            { name: "Laptop Sleeve", link: "https://amzn.to/49nXxyz", desc: "Prevent coating wear." },
            { name: "Thunderbolt Dock", link: "https://amzn.to/placeholder", desc: "Expand connectivity." }
        ]
    },
    {
        id: "dell-xps-13-plus-2026",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (2026)",
        price: "$1,499",
        release_year: 2026,
        evidence_count: 560,
        image: "images/dell-xps-13-plus-2026.jpg",
        links: {
            solver: "https://amzn.to/3xEplaceholder",
            value: "https://amzn.to/4aFplaceholder",
            antidote_1: "https://amzn.to/placeholder_hub",
            antidote_2: "https://amzn.to/placeholder_pad"
        },
        recommendations: {
            primary: { name: "MacBook Air M3", link: "https://amzn.to/placeholder_air", benefits: ["Physical Keys", "Better Battery", "Cooler"] },
            secondary: { name: "ThinkPad Z13", link: "https://amzn.to/placeholder_z13", reason: "More durable OLED." }
        },
        description_summary: "A beautiful disaster of design over function. The XPS 13 Plus (2026) continues to plague users with its experimental capacitive touch bar and invisible trackpad. Common complaints focus on the touch row freezing or registering phantom inputs.",
        risk_data: {
            long_term_risk: "Invisible trackpad failure and OLED burn-in.",
            maintenance_cost: "High",
            issues: [
                { name: "Touch Bar Dead", severity: 3, frequency: 3, desc: "Function row LEDs die or freeze." },
                { name: "Invisible Pad", severity: 2, frequency: 3, desc: "Haptic trackpad drifts over time." },
                { name: "Heat Trap", severity: 2, frequency: 3, desc: "Glass deck traps heat, degrading battery." }
            ]
        },
        long_term_analysis: "Form strictly over function. The capacitive function row is a point of failure that requires replacing the entire top deck. The heat trapped by the glass palm rest degrades the battery health rapidly.",
        maintenance_cost_analysis: "High ($500+). Requires replacing the entire top glass assembly and palm rest.",
        who_should_avoid: "Developers (need physical F-keys), writers, and users in warm climates.",
        faq_section: [
            { q: "Are keys physical?", a: "No, the top row is capacitive touch." },
            { q: "Battery life?", a: "Poor due to OLED power draw and heat degradation." },
            { q: "Does the trackpad fail?", a: "Yes, the haptic motor can drift or fail." }
        ],
        accessories: [
            { name: "USB-C Hub", link: "https://amzn.to/3vvplaceholder", desc: "You need ports." },
            { name: "Bluetooth Keyboard", link: "https://amzn.to/placeholder", desc: "Backup input." }
        ]
    },
    {
        id: "hp-spectre-x360-14-amd",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360 14 (Ryzen AI)",
        price: "$1,649",
        release_year: 2026,
        evidence_count: 410,
        image: "images/hp-spectre-x360-14.jpg",
        links: {
            solver: "https://amzn.to/3VYplaceholder",
            value: "https://amzn.to/4c9placeholder",
            antidote_1: "https://amzn.to/placeholder_pen",
            antidote_2: "https://amzn.to/placeholder_care"
        },
        recommendations: {
            primary: { name: "Lenovo Yoga 9i", link: "https://amzn.to/placeholder_yoga", benefits: ["Better Soundbar", "Sturdier Hinge"] },
            secondary: { name: "LG Gram 2-in-1", link: "https://amzn.to/placeholder_gram", reason: "Lighter weight." }
        },
        description_summary: "The HP Spectre x360 offers a fantastic screen and Ryzen AI performance, but remains plagued by mechanical hinge issues. Long-term usage reports indicate that the 360-degree hinges lose tension after 12-18 months of daily flipping.",
        risk_data: {
            long_term_risk: "Hinge wobble and OLED burn-in.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Hinge Play", severity: 2, frequency: 3, desc: "Screen wobbles when typing after 1 year." },
                { name: "PWM Flicker", severity: 1, frequency: 2, desc: "Headaches at low brightness." },
                { name: "Rubber Feet", severity: 1, frequency: 3, desc: "Bottom strips peel off easily." }
            ]
        },
        long_term_analysis: "Mechanical hinges are the specific weak point here. Frequent flipping wears out the resistance mechanisms. While the Ryzen chip runs cooler than Intel, the condensed layout still leads to hot spots.",
        maintenance_cost_analysis: "Medium ($300). Hinge tightening is difficult; usually requires full assembly replacement.",
        who_should_avoid: "Users sensitive to screen flicker (PWM) and heavy typists who hate screen wobble.",
        faq_section: [
            { q: "Is the hinge durable?", a: "It loosens significantly with daily flipping." },
            { q: "Is it good for eyes?", a: "PWM flickering can cause strain at low brightness." },
            { q: "Does it get hot?", a: "Warm, but Ryzen manages heat better than Intel." }
        ],
        accessories: [
            { name: "Stylus Pen", link: "https://amzn.to/3xkplaceholder", desc: "Reduce hinge stress." },
            { name: "Super Glue", link: "https://amzn.to/placeholder", desc: "For rubber feet." }
        ]
    },
    {
        id: "asus-zephyrus-g14-2025",
        category: "laptop",
        brand: "ASUS",
        model: "ROG Zephyrus G14 (2025)",
        price: "$1,599",
        release_year: 2025,
        evidence_count: 1500,
        image: "images/asus-rog-zephyrus-g14.jpg",
        links: {
            solver: "https://amzn.to/4cLplaceholder",
            value: "https://amzn.to/3vsplaceholder",
            antidote_1: "https://amzn.to/placeholder_cooler",
            antidote_2: "https://amzn.to/placeholder_paste"
        },
        recommendations: {
            primary: { name: "Razer Blade 14", link: "https://amzn.to/placeholder_blade", benefits: ["Stiffer Chassis", "Vapor Chamber"] },
            secondary: { name: "Lenovo Legion Slim", link: "https://amzn.to/placeholder_legion", reason: "Cooler VRMs." }
        },
        description_summary: "The king of 14-inch gaming brings incredible performance but runs at volcanic temperatures. The compact chassis simply cannot dissipate the heat from high-end components effectively. Reliability analysis shows a high risk of 'Liquid Metal Pump-out'.",
        risk_data: {
            long_term_risk: "Overheating components and liquid metal pump-out.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Surface Lava", severity: 2, frequency: 3, desc: "Keyboard hits 50°C+ during use." },
                { name: "Liquid Metal", severity: 3, frequency: 1, desc: "Can leak or pump out, requiring repaste." },
                { name: "Coil Whine", severity: 1, frequency: 3, desc: "Electrical buzzing noise is audible." }
            ]
        },
        long_term_analysis: "Components degrade faster when running at 95°C constantly. The liquid metal thermal compound requires checking after 1-2 years, which is risky for users to DIY.",
        maintenance_cost_analysis: "Medium ($100-$200). Fans are replaceable, but repasting liquid metal is dangerous.",
        who_should_avoid: "Users who keep laptops on their laps and those uncomfortable with high temperatures.",
        faq_section: [
            { q: "Is it hot?", a: "Extremely. It is uncomfortable to touch under load." },
            { q: "Is it loud?", a: "Yes, fans scream in Turbo mode." },
            { q: "Is the screen good?", a: "Yes, OLED is beautiful but risks burn-in with static HUDs." }
        ],
        accessories: [
            { name: "Cooling Pad", link: "https://amzn.to/3xplaceholder", desc: "Mandatory for gaming." },
            { name: "External Keyboard", link: "https://amzn.to/placeholder", desc: "Avoid burning fingers." }
        ]
    },
    {
        id: "surface-pro-11",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Pro 11",
        price: "$1,199",
        release_year: 2026,
        evidence_count: 650,
        image: "images/microsoft-surface-pro-11.jpg",
        links: {
            solver: "https://amzn.to/3IXplaceholder",
            value: "https://amzn.to/3TNplaceholder",
            antidote_1: "https://amzn.to/placeholder_case",
            antidote_2: "https://amzn.to/placeholder_kb"
        },
        recommendations: {
            primary: { name: "iPad Pro M4", link: "https://amzn.to/placeholder_ipad", benefits: ["Better Tablet App", "Resale Value"] },
            secondary: { name: "Dell XPS 13 2-in-1", link: "https://amzn.to/placeholder_xps2in1", reason: "Better repairability." }
        },
        description_summary: "A repair nightmare wrapped in a sleek shell. The Surface Pro 11 continues Microsoft's trend of gluing everything together. The battery is buried under the fragile screen and motherboard, making replacement nearly impossible without breaking the display.",
        risk_data: {
            long_term_risk: "Battery swelling pushes screen out. Unrepairable.",
            maintenance_cost: "Impossible",
            issues: [
                { name: "Glue Design", severity: 3, frequency: 3, desc: "Opened only by risking screen breakage." },
                { name: "Keyboard Peel", severity: 2, frequency: 3, desc: "Alcantara keyboard cover frays." },
                { name: "Battery Bloat", severity: 3, frequency: 2, desc: "Heat kills battery quickly." }
            ]
        },
        long_term_analysis: "Once the battery degrades (typically 2-3 years), replacing it is not a viable option for most users. Microsoft stores typically offer a 'swap' for a high fee rather than a repair.",
        maintenance_cost_analysis: "Impossible. Microsoft replaces the unit for a ~$500 fee.",
        who_should_avoid: "Eco-conscious users, right-to-repair advocates, and heavy daily users.",
        faq_section: [
            { q: "Can I replace the battery?", a: "Extremely difficult and risky." },
            { q: "Is the keyboard included?", a: "No, costs $180 extra and wears out." },
            { q: "Does it overheat?", a: "Yes, the back gets very hot." }
        ],
        accessories: [
            { name: "Rugged Case", link: "https://amzn.to/3PEplaceholder", desc: "Protect glass." },
            { name: "Type Cover", link: "https://amzn.to/placeholder", desc: "Essential purchase." }
        ]
    },
    {
        id: "acer-swift-go-14-new",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14",
        price: "$899",
        release_year: 2025,
        evidence_count: 980,
        image: "images/acer-swift-go-14.jpg",
        links: {
            solver: "https://amzn.to/3TKplaceholder",
            value: "https://amzn.to/3vyplaceholder",
            antidote_1: "https://amzn.to/placeholder_wifi",
            antidote_2: "https://amzn.to/placeholder_mouse"
        },
        recommendations: {
            primary: { name: "MacBook Air M1", link: "https://amzn.to/placeholder_airm1", benefits: ["Better Build", "Resale Value"] },
            secondary: { name: "Asus Zenbook 14", link: "https://amzn.to/placeholder_zenbook", reason: "Better chassis rigidity." }
        },
        description_summary: "High specs for a cheap price, paid for by build quality. The Acer Swift Go 14 is a budget king that feels like a budget toy after a year. Long-term reliability issues plague the plastic trackpad, which wears down to a glossy, sticky mess.",
        risk_data: {
            long_term_risk: "Chassis flex, Wi-Fi failure, and fan bearing noise.",
            maintenance_cost: "Low",
            issues: [
                { name: "Fan Noise", severity: 2, frequency: 3, desc: "Whining noise develops after 9 months." },
                { name: "WiFi Drop", severity: 2, frequency: 3, desc: "MediaTek card is unreliable." },
                { name: "Bloatware", severity: 1, frequency: 3, desc: "Ad-supported OS experience." }
            ]
        },
        long_term_analysis: "The cooling fans are the weak link, often failing early. The chassis flexes significantly, potentially causing motherboard stress over time. Software bloatware requires a fresh install to get acceptable performance.",
        maintenance_cost_analysis: "Low ($30). Fans and WiFi card are cheap and easy to DIY swap.",
        who_should_avoid: "Students who need silence in libraries and those needing stable internet.",
        faq_section: [
            { q: "Is it loud?", a: "Yes, fans are high-pitched." },
            { q: "Is WiFi good?", a: "No, swap the card for an Intel AX210 immediately." },
            { q: "Does it feel cheap?", a: "Yes, plastic build quality." }
        ],
        accessories: [
            { name: "Intel WiFi Card", link: "https://amzn.to/4cJplaceholder", desc: "Fix connectivity." },
            { name: "Wireless Mouse", link: "https://amzn.to/placeholder", desc: "Fix trackpad issues." }
        ]
    },
    {
        id: "samsung-galaxy-book4-edge",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book4 Edge",
        price: "$1,349",
        release_year: 2026,
        evidence_count: 220,
        image: "images/samsung-galaxy-book4.jpg",
        links: {
            solver: "https://amzn.to/49kplaceholder",
            value: "https://amzn.to/4aLplaceholder",
            antidote_1: "https://amzn.to/3vAplaceholder",
            antidote_2: "https://amzn.to/placeholder_sleeve"
        },
        recommendations: {
            primary: { name: "LG Gram 16", link: "https://amzn.to/placeholder_gram", benefits: ["Lighter", "Matte Screen Option"] },
            secondary: { name: "MacBook Air 15", link: "https://amzn.to/placeholder_air15", reason: "Better chassis rigidity." }
        },
        description_summary: "Incredibly thin, incredibly fragile. Samsung continues to prioritize thinness over structural integrity, leading to the continuation of 'Crack-gate'. The ultra-thin AMOLED panels are highly susceptible to cracking from chassis flex.",
        risk_data: {
            long_term_risk: "Screen cracking from chassis flex.",
            maintenance_cost: "High",
            issues: [
                { name: "Screen Crack", severity: 3, frequency: 2, desc: "Cracks inside backpacks from pressure." },
                { name: "Chassis Flex", severity: 2, frequency: 3, desc: "Bends under pressure." },
                { name: "Touchpad Click", severity: 1, frequency: 2, desc: "Accidental clicks when lifting." }
            ]
        },
        long_term_analysis: "The internal torsion from opening the lid can crack the glass over time. The cooling is minimal, leading to hot spots. It is a device designed for a desk, not a backpack.",
        maintenance_cost_analysis: "High ($400+). AMOLED screens are premium parts and expensive to replace.",
        who_should_avoid: "Students, commuters with packed bags, and clumsy users.",
        faq_section: [
            { q: "Is it fragile?", a: "Yes, very. Screen cracks are common." },
            { q: "Is battery good?", a: "Excellent, but fragile build." },
            { q: "Does the screen wobble?", a: "Yes, hinges are weak for the size." }
        ],
        accessories: [
            { name: "Hard Sleeve", link: "https://amzn.to/3vAplaceholder", desc: "Must have protection." },
            { name: "Screen Protector", link: "https://amzn.to/placeholder", desc: "Extra layer of safety." }
        ]
    },

    // ================= [EXISTING] 3D PRINTERS (6 Models) =================
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price: "$199",
        release_year: 2023,
        evidence_count: 2400,
        image: "images/ender-3-v3-se.jpg",
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
        description_summary: "Budget king but suffers from mechanical wear. Gantry wobble and plastic gears degrade print quality after 500 hours.",
        risk_data: {
            long_term_risk: "Gantry wobble and extruder wear degrade quality over time.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Gantry Wobble", severity: 2, frequency: 3, desc: "Single Z-axis motor leads to X-gantry sagging on the right side." },
                { name: "Gear Wear", severity: 2, frequency: 2, desc: "Plastic extruder gears strip when using retractions heavily." },
                { name: "Spaghetti", severity: 2, frequency: 2, desc: "No AI detection for failed prints." }
            ]
        },
        long_term_analysis: "Plastic frame mounts and soft aluminum extrusions loosen from vibration. High-speed printing accelerates wear on the V-wheels, creating 'slop' in the motion system.",
        maintenance_cost_analysis: "Low ($20–$50). Parts are cheap, but the 'time cost' is high. You will spend hours recalibrating.",
        who_should_avoid: "Print farms and schools needing reliability.",
        faq_section: [
            { q: "What is gantry sag?", a: "The print arm droops on one side, making prints crooked." },
            { q: "Is it reliable?", a: "Only if you tinker with it constantly." }
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
        image: "images/bambu-a1-mini.jpg",
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
        description_summary: "Mechanically excellent but 'Walled Garden'. You rely 100% on Bambu for parts, and the 180mm volume is limiting.",
        risk_data: {
            long_term_risk: "Proprietary parts mean you rely 100% on Bambu for repairs.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Cloud Logs", desc: "Print logs sent to cloud servers.", severity: 2, frequency: 2 },
                { name: "Small Volume", desc: "180mm cube limits cosplay prints.", severity: 1, frequency: 3 },
                { name: "Proprietary", desc: "Cannot use generic cheap parts.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Mechanically reliable, but if Bambu Lab changes their parts catalog, the printer loses functionality. The 180mm build volume often causes buyer's remorse after 6 months.",
        maintenance_cost_analysis: "Medium. Proprietary parts cost 3x more than generic Ender parts. You are locked into their ecosystem.",
        who_should_avoid: "Privacy-conscious users and cosplay makers who need larger parts.",
        faq_section: [
            { q: "Is it too small?", a: "Yes, for helmets or large props." },
            { q: "Can I use generic nozzles?", a: "No, you need Bambu hotends." }
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
        image: "images/anycubic-photon-mono.jpg",
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
        description_summary: "Resin printing is hazardous. FEP leaks can ruin the screen, and ventilation is mandatory. High maintenance effort.",
        risk_data: {
            long_term_risk: "LCD screen is a consumable. Resin fumes are hazardous.",
            maintenance_cost: "High",
            issues: [
                { name: "Toxic Fumes", desc: "Resin fumes require ventilation.", severity: 3, frequency: 3 },
                { name: "FEP Leak", desc: "Resin leaks cure on the screen.", severity: 3, frequency: 1 },
                { name: "Messy Cleanup", desc: "Requires isopropyl alcohol washing.", severity: 2, frequency: 3 }
            ]
        },
        long_term_analysis: "The LCD screen is a 'consumable' component that burns out after ~2000 hours of UV exposure. FEP film leaks are a catastrophic failure mode that can ruin the screen and motor.",
        maintenance_cost_analysis: "High ($50+). Screen replacement is expensive. A spill can total the machine.",
        who_should_avoid: "Apartment dwellers without dedicated ventilation, families with pets/kids, and anyone unwilling to handle toxic chemicals.",
        faq_section: [
            { q: "Is it safe?", a: "No, resin fumes are toxic without ventilation." },
            { q: "Does the screen last?", a: "No, it burns out eventually." }
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
        image: "images/elegoo-neptune-4.jpg",
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
        description_summary: "Fast but buggy. Klipper firmware issues often cause the nozzle to crash into the bed. Fans are incredibly loud.",
        risk_data: {
            long_term_risk: "Firmware bugs cause nozzle crashes. Wheels wear out.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Z-Offset Bug", desc: "Printer forgets height, crashes into bed.", severity: 3, frequency: 2 },
                { name: "Loud Fans", desc: "Auxiliary fans sound like a jet engine.", severity: 2, frequency: 3 },
                { name: "Wheel Dust", desc: "POM wheels wear out at high speeds.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Long term stability is poor; the 'Z-Offset' bug often causes the nozzle to crash into the print bed, destroying the PEI sheet. The proprietary POM wheels wear down faster than standard V-wheels.",
        maintenance_cost_analysis: "Medium ($30+). Bed sheets need replacement often due to crashes.",
        who_should_avoid: "Beginners who don't know how to edit config files, and anyone who values a quiet working environment.",
        faq_section: [
            { q: "Is it buggy?", a: "Yes, firmware loses settings often." },
            { q: "Is it quiet?", a: "No, it is extremely loud." }
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
        image: "images/prusa-mini.jpg",
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
        description_summary: "Reliable tank but obsolete. Slow speeds and old tech make it a poor value proposition in 2025.",
        risk_data: {
            long_term_risk: "Obsolete technology. Very slow compared to modern printers.",
            maintenance_cost: "Low",
            issues: [
                { name: "Slow Speed", desc: "No input shaping. Very slow prints.", severity: 2, frequency: 3 },
                { name: "Bowden Jam", desc: "Gap in bowden tube causes jams.", severity: 2, frequency: 2 },
                { name: "Overpriced", desc: "Paying premium for 2019 tech.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "The long-term risk isn't hardware failure, but obsolescence. You are paying a premium price for speeds that are 4x slower than modern competitors. Reliability is excellent, but 'Value Risk' is extreme.",
        maintenance_cost_analysis: "Low. Parts are standard and open source. Support is legendary.",
        who_should_avoid: "Value seekers (it's overpriced) and speed demons (it's slow).",
        faq_section: [
            { q: "Is it fast?", a: "No, it is very slow by modern standards." },
            { q: "Is it reliable?", a: "Yes, extremely reliable." }
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
        image: "images/creality-k1.jpg",
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
        description_summary: "A beta test sold to the public. Gen 1 extruders jam constantly. VFA ripples on prints are common.",
        risk_data: {
            long_term_risk: "Gen 1 extruder and hotend are prone to jamming.",
            maintenance_cost: "High (Upgrades needed)",
            issues: [
                { name: "Extruder Jam", desc: "Gen 1 extruder fails to grip filament.", severity: 3, frequency: 3 },
                { name: "VFA Ripples", desc: "Vertical artifacts on walls due to belts.", severity: 1, frequency: 3 },
                { name: "Tube Melt", desc: "PTFE tube melts inside the hotend.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Long term analysis shows high failure rates in the extruder (filament slipping) and the hotend (error codes). Vertical Fine Artifacts (VFA) on walls are common due to pulley issues.",
        maintenance_cost_analysis: "High ($40+). You need to buy the upgraded Extruder Kit and Unicorn Nozzle to make it reliable.",
        who_should_avoid: "Users who want a 'unboxing and print' experience. This machine requires upgrades to be stable.",
        faq_section: [
            { q: "Does it jam?", a: "Yes, Gen 1 extruders jam often." },
            { q: "Is the print quality good?", a: "No, VFA ripples are visible." }
        ],
        accessories: [
            { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." },
            { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "High speed." }
        ]
    },

    // ================= [NEW] 3D PRINTERS (6 Models - Synced with Google Sheets) =================
    {
        id: "bambu-lab-x1-carbon",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "X1-Carbon",
        price: "$1,199",
        release_year: 2024,
        evidence_count: 5200,
        image: "images/bambu-lab-x1-carbon.jpg",
        links: {
            solver: "https://amzn.to/placeholder_flashforge",
            value: "https://amzn.to/placeholder_k1c",
            antidote_1: "https://amzn.to/placeholder_plate",
            antidote_2: "https://amzn.to/placeholder_nozzle"
        },
        recommendations: {
            primary: { name: "Flashforge 5M Pro", link: "https://amzn.to/placeholder_flashforge", benefits: ["Amazon Available", "Enclosed CoreXY", "Fast"] },
            secondary: { name: "Creality K1C", link: "https://amzn.to/placeholder_k1c", reason: "Cheaper CoreXY alternative." }
        },
        description_summary: "The Bambu Lab X1-Carbon is the current 'iPhone of 3D printing,' offering incredible speed and AI features, but it comes with a significant 'Walled Garden' trade-off. Long-term analysis indicates a maintenance peak around months 3-6.",
        risk_data: {
            long_term_risk: "Proprietary ecosystem lock-in. Carbon rods wear out.",
            maintenance_cost: "High",
            issues: [
                { name: "AMS Jam", severity: 2, frequency: 3, desc: "Filament retraction fails often causing downtime." },
                { name: "Carbon Wear", severity: 2, frequency: 1, desc: "Rods wear out, hard to replace, conductive dust." },
                { name: "Noise", severity: 1, frequency: 3, desc: "Very loud movement and fan noise." }
            ]
        },
        long_term_analysis: "If Bambu Lab changes their parts catalog, this printer loses functionality. The carbon rods are consumable and expensive ($100+) to replace. AMS units require frequent disassembly to clear jams.",
        maintenance_cost_analysis: "High ($150+). Parts are proprietary and pricey. Shipping times for spares can be long.",
        who_should_avoid: "Open-source advocates, quiet offices, and users who want to use cheap generic spare parts.",
        faq_section: [
            { q: "Can I repair it myself?", a: "Yes, but parts are exclusive to Bambu Lab." },
            { q: "Is it loud?", a: "Yes, extremely loud at high speeds." },
            { q: "Does the AMS jam?", a: "Frequently, especially with cardboard spools." }
        ],
        accessories: [
            { name: "Textured PEI Plate", link: "https://amzn.to/placeholder_plate", desc: "Essential upgrade." },
            { name: "Hardened Nozzle", link: "https://amzn.to/placeholder_nozzle", desc: "For abrasive materials." }
        ]
    },
    {
        id: "prusa-mk4",
        category: "3d_printer",
        brand: "Prusa",
        model: "MK4",
        price: "$799",
        release_year: 2024,
        evidence_count: 2100,
        image: "images/prusa-mk4.jpg",
        links: {
            solver: "https://amzn.to/placeholder_kobra3",
            value: "https://amzn.to/placeholder_sv06",
            antidote_1: "https://amzn.to/placeholder_enclosure",
            antidote_2: "https://amzn.to/placeholder_sheet"
        },
        recommendations: {
            primary: { name: "Anycubic Kobra 3", link: "https://amzn.to/placeholder_kobra3", benefits: ["Multi-Color", "Much Cheaper", "Faster"] },
            secondary: { name: "Sovol SV06", link: "https://amzn.to/placeholder_sv06", reason: "Budget clone with similar kinematics." }
        },
        description_summary: "The Prusa MK4 is the reliable workhorse of the industry, but it struggles to justify its price against modern CoreXY competitors. Reliability analysis shows it is incredibly stable, but printed PETG parts in the frame structure can suffer from 'creep'.",
        risk_data: {
            long_term_risk: "PETG printed parts creep/warp over years. Slow ROI.",
            maintenance_cost: "Low",
            issues: [
                { name: "Slow Speed", severity: 2, frequency: 3, desc: "Slower than CoreXY rivals by 50%." },
                { name: "Part Creep", severity: 1, frequency: 2, desc: "Printed frame parts sag over years." },
                { name: "Price", severity: 2, frequency: 3, desc: "Expensive for a bedslinger design." }
            ]
        },
        long_term_analysis: "Extremely reliable, but technology is aging. The structure relies on 3D printed parts which can crack or warp after years of heat cycling. Value proposition is low compared to modern multi-color printers.",
        maintenance_cost_analysis: "Low ($20). Most parts are standard and open source. Support is legendary.",
        who_should_avoid: "Speed demons, budget buyers, and those wanting an enclosed printer.",
        faq_section: [
            { q: "Is it fast?", a: "Decent, but not top tier like CoreXY." },
            { q: "Is it reliable?", a: "Yes, it is the gold standard for uptime." },
            { q: "Why is it expensive?", a: "You pay for 24/7 support and quality control." }
        ],
        accessories: [
            { name: "Enclosure", link: "https://amzn.to/placeholder_enc", desc: "For ABS/ASA printing." },
            { name: "Satin Sheet", link: "https://amzn.to/placeholder_satin", desc: "Best surface for PLA/PETG." }
        ]
    },
    {
        id: "creality-ender-3-v3-ke",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 KE",
        price: "$279",
        release_year: 2025,
        evidence_count: 3000,
        image: "images/creality-ender-3-v3-ke.jpg",
        links: {
            solver: "https://amzn.to/placeholder_m5c",
            value: "https://amzn.to/placeholder_kobra2",
            antidote_1: "https://amzn.to/placeholder_hotend",
            antidote_2: "https://amzn.to/placeholder_rail"
        },
        recommendations: {
            primary: { name: "AnkerMake M5C", link: "https://amzn.to/placeholder_m5c", benefits: ["Sturdier Frame", "Better App", "Reliable"] },
            secondary: { name: "Anycubic Kobra 2", link: "https://amzn.to/placeholder_kobra2", reason: "Sturdier frame construction." }
        },
        description_summary: "A high-speed bedslinger that pushes cheap components to their limit. The Ender 3 V3 KE offers immense value but suffers from a 'Quality Control Lottery'. The most critical issue is the 'Blob of Death', where the hotend leaks.",
        risk_data: {
            long_term_risk: "Hotend leakage destroys wiring. Gantry sag.",
            maintenance_cost: "Low",
            issues: [
                { name: "Blob of Death", severity: 3, frequency: 2, desc: "Hotend leaks, encasing head in plastic." },
                { name: "Gantry Sag", severity: 2, frequency: 3, desc: "Right side droops, causing bed level issues." },
                { name: "Software", severity: 1, frequency: 3, desc: "Nebula pad is buggy and loses WiFi." }
            ]
        },
        long_term_analysis: "This machine shakes itself apart. Screws loosen, V-wheels wear out rapidly at 500mm/s, and the hotend design is prone to catastrophic leaks if the nozzle isn't hot-tightened by the user.",
        maintenance_cost_analysis: "Low ($20-$40). Parts are cheap and widely available on Amazon/AliExpress.",
        who_should_avoid: "People who hate using a screwdriver and troubleshooting wiring.",
        faq_section: [
            { q: "Is it beginner friendly?", a: "No, requires mechanical setup and tuning." },
            { q: "Does it leak?", a: "Yes, watch the nozzle for leaks weekly." },
            { q: "Is the software stable?", a: "Klipper pad is often buggy." }
        ],
        accessories: [
            { name: "Micro Swiss Hotend", link: "https://amzn.to/placeholder_swiss", desc: "Prevent leaks permanently." },
            { name: "Linear Rail Kit", link: "https://amzn.to/placeholder_rail", desc: "Fix gantry sag." }
        ]
    },
    {
        id: "anycubic-kobra-2-max",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Kobra 2 Max",
        price: "$499",
        release_year: 2025,
        evidence_count: 850,
        image: "images/anycubic-kobra-2-max.jpg",
        links: {
            solver: "https://amzn.to/placeholder_neptune",
            value: "https://amzn.to/placeholder_artisan",
            antidote_1: "https://amzn.to/placeholder_sensor",
            antidote_2: "https://amzn.to/placeholder_belt"
        },
        recommendations: {
            primary: { name: "Elegoo Neptune 4 Max", link: "https://amzn.to/placeholder_neptune", benefits: ["Klipper Native", "Better Fans"] },
            secondary: { name: "Snapmaker Artisan", link: "https://amzn.to/placeholder_artisan", reason: "Reliable large scale (expensive)." }
        },
        description_summary: "Massive build volume meets basic physics. The Kobra 2 Max suffers from severe 'Bed Inertia' issues. Moving a 420x420mm heated bed at high speeds causes layer shifts and rapid belt wear.",
        risk_data: {
            long_term_risk: "Bed heavy inertia causes layer shifts. Proprietary nozzle.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Layer Shift", severity: 3, frequency: 2, desc: "Y-axis motor skips steps due to weight." },
                { name: "Proprietary Nozzle", severity: 2, frequency: 3, desc: "Cannot use generic cheap nozzles." },
                { name: "Bed Warping", severity: 2, frequency: 2, desc: "Large bed is rarely perfectly flat." }
            ]
        },
        long_term_analysis: "Physics works against this printer. Moving a massive heated bed at high speeds wears out belts, pulleys, and stepper motors quickly. Finding a replacement proprietary nozzle can be hard if Anycubic supply dries up.",
        maintenance_cost_analysis: "Medium ($50-$80). Large parts cost more shipping. Belts need frequent replacement.",
        who_should_avoid: "Users printing small detailed items or needing abrasive resistance.",
        faq_section: [
            { q: "Is it precise?", a: "No, better for large props and cosplay." },
            { q: "Is bed flat?", a: "Rarely, relies heavily on mesh leveling." },
            { q: "Can I upgrade nozzle?", a: "Only with Anycubic proprietary parts." }
        ],
        accessories: [
            { name: "Filament Sensor", link: "https://amzn.to/placeholder_sensor", desc: "For long prints." },
            { name: "Belt Tensioner", link: "https://amzn.to/placeholder_belt", desc: "Prevent slips." }
        ]
    },
    {
        id: "ankermake-m5",
        category: "3d_printer",
        brand: "AnkerMake",
        model: "M5",
        price: "$399",
        release_year: 2024,
        evidence_count: 900,
        image: "images/ankermake-m5.jpg",
        links: {
            solver: "https://amzn.to/placeholder_k1",
            value: "https://amzn.to/placeholder_prusa",
            antidote_1: "https://amzn.to/placeholder_hardened",
            antidote_2: "https://amzn.to/placeholder_mod"
        },
        recommendations: {
            primary: { name: "Creality K1", link: "https://amzn.to/placeholder_k1", benefits: ["Enclosed", "Faster", "CoreXY"] },
            secondary: { name: "Prusa Mini Clone", link: "https://amzn.to/placeholder_prusa", reason: "Standard parts & Reliability." }
        },
        description_summary: "Premium build quality marred by proprietary lock-in and failing AI promises. The 'AI spaghetti detection' is often a gimmick, providing false positives or missing failures entirely.",
        risk_data: {
            long_term_risk: "Wheel wear and proprietary hotend. AI failure.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Wheel Dust", severity: 2, frequency: 3, desc: "Wheels shred at 500mm/s speeds." },
                { name: "AI Gimmick", severity: 1, frequency: 3, desc: "Camera detection gives false positives." },
                { name: "Hotend Clog", severity: 2, frequency: 2, desc: "PTFE tube gap causes internal jams." }
            ]
        },
        long_term_analysis: "Anker over-engineered the wrong parts. The structure is solid, but the motion system uses rubber wheels that disintegrate at high speeds. The proprietary hotend is a single point of failure that costs 3x a standard Ender hotend.",
        maintenance_cost_analysis: "Medium ($40-$60). Wheels need constant replacing or upgrading to linear rails.",
        who_should_avoid: "Users expecting perfect AI monitoring and modders.",
        faq_section: [
            { q: "Does AI work?", a: "Barely, it's mostly marketing." },
            { q: "Is it fast?", a: "Yes, but it wears parts out quickly." },
            { q: "Can I use Cura?", a: "Yes, but Anker slicer is recommended." }
        ],
        accessories: [
            { name: "Hardened Nozzle", link: "https://amzn.to/placeholder_hardened", desc: "For abrasive filaments." },
            { name: "Linear Rail Mod", link: "https://amzn.to/placeholder_mod", desc: "Fix wheel wear." }
        ]
    },
    {
        id: "formlabs-form-4",
        category: "3d_printer",
        brand: "Formlabs",
        model: "Form 4",
        price: "$4,499",
        release_year: 2025,
        evidence_count: 120,
        image: "images/formlabs-form-4.jpg",
        links: {
            solver: "https://amzn.to/placeholder_gktwo",
            value: "https://amzn.to/placeholder_phenom",
            antidote_1: "https://amzn.to/placeholder_wash",
            antidote_2: "https://amzn.to/placeholder_tank"
        },
        recommendations: {
            primary: { name: "Uniformation GKtwo", link: "https://amzn.to/placeholder_gktwo", benefits: ["Open Resin System", "Much Cheaper"] },
            secondary: { name: "Peopoly Phenom", link: "https://amzn.to/placeholder_phenom", reason: "Larger volume for less." }
        },
        description_summary: "The industry standard for SLA, but it operates on a 'Printer is cheap, ink is expensive' model. The new print engine is fast, but the 'Chip DRM' on resin cartridges and tanks forces users to pay premium prices for consumables.",
        risk_data: {
            long_term_risk: "Ecosystem lock-in and massive consumable costs.",
            maintenance_cost: "Very High",
            issues: [
                { name: "Resin DRM", severity: 3, frequency: 3, desc: "Cartridges are chipped, blocking 3rd party resin." },
                { name: "Tank Wear", severity: 2, frequency: 3, desc: "Resin tanks cloud and need replacing often." },
                { name: "Spill Risk", severity: 3, frequency: 1, desc: "Optics ruin instantly if spill occurs." }
            ]
        },
        long_term_analysis: "Excellent print quality, but you will spend the printer's cost in resin within 2 years. Resin DRM prevents using affordable 3rd party materials. It is a closed ecosystem designed for enterprise budgets, not individuals.",
        maintenance_cost_analysis: "Very High ($500+). Optics cleaning or replacement is expensive. Consumables are pricey.",
        who_should_avoid: "Cost-sensitive businesses and hobbyists.",
        faq_section: [
            { q: "Can I use other resin?", a: "Difficult, 'Open Mode' voids some support." },
            { q: "Is it reliable?", a: "Yes, extremely, but costly." },
            { q: "Is it messy?", a: "Less than others due to automation." }
        ],
        accessories: [
            { name: "Form Wash", link: "https://amzn.to/placeholder_wash", desc: "Automated cleaning." },
            { name: "Spare Resin Tank", link: "https://amzn.to/placeholder_tank", desc: "Required consumable." }
        ]
    }
];
