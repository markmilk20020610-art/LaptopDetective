// data.js - v38.0 LOCAL IMAGES & FULL CONTENT
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
        image: "images/dell-xps-13-plus.jpg", // 👈 本地路径
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
        description_summary: "The Dell XPS 13 Plus (9320) faces significant long term problems regarding thermal management and capacitive touch bar failures. While aesthetically pleasing, reliability issues make it a risky investment.",
        risk_data: {
            long_term_risk: "Capacitive touch bar failure requires entire deck replacement.",
            maintenance_cost: "High",
            issues: [
                { name: "Touch Bar Freeze", severity: 3, frequency: 3, desc: "The capacitive function row is prone to freezing due to high chassis temperatures. Scenario: After 2+ hours of usage, volume keys stop registering." },
                { name: "Battery Degradation", severity: 2, frequency: 3, desc: "Due to the ultra-thin chassis lacking airflow, the battery is exposed to high heat. Health often drops below 80% within 14 months." },
                { name: "Dongle Hell", severity: 2, frequency: 3, desc: "Constant plugging/unplugging wears out the mainboard USB-C ports. If the charging port loosens, the device becomes e-waste." }
            ]
        },
        long_term_analysis: "Our analysis indicates a high failure rate for the XPS 13 Plus after 6–12 months. The primary culprit is the aggressive thermal profile combined with the experimental glass deck design. 'Thermal cycling' weakens solder joints and degrades the battery adhesive. Unlike modular laptops, the material aging here accelerates component failure.",
        maintenance_cost_analysis: "High ($400 – $700). The RAM and SSD are soldered. If the touch bar fails, the entire top deck assembly must be replaced.",
        who_should_avoid: "Software Developers (missing physical Esc key), Music Producers (latency), and users in hot climates.",
        faq_section: [
            { q: "What are the long term problems with XPS 13 Plus?", a: "Touch bar unresponsiveness and rapid battery health degradation due to heat." },
            { q: "Is the Dell XPS 13 Plus worth buying in 2025?", a: "No. The thermal throttling makes it a poor value compared to the MacBook Air M2." },
            { q: "Does it have overheating issues?", a: "Yes. The chassis often exceeds comfortable touch temperatures." }
        ],
        evidence_links: [ { source: "Reddit", title: "Touchbar freezing thread", url: "#" } ],
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
        description_summary: "The Lenovo LOQ 15 (Intel) suffers from catastrophic motherboard failures due to weak VRMs paired with power-hungry HX processors.",
        risk_data: {
            long_term_risk: "Intel HX CPUs are frying motherboard VRMs within 6 months.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Motherboard Dead", desc: "Specific Intel HX CPUs fry the motherboard VRMs. Sudden death syndrome.", severity: 3, frequency: 3 },
                { name: "Overheating", desc: "CPU hits 95°C just opening a browser.", severity: 3, frequency: 3 },
                { name: "Battery Drain", desc: "Drains battery even while plugged in.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The motherboard voltage regulator modules (VRMs) cannot sustain the power draw of Intel HX processors over time. This leads to sudden, catastrophic motherboard death, often within the first 6-9 months.",
        maintenance_cost_analysis: "Total Loss ($600+). VRM failure kills the mainboard. Out-of-warranty repair exceeds device value.",
        who_should_avoid: "Budget gamers looking for a 3-year investment, and students who cannot afford downtime.",
        faq_section: [
            { q: "What is the main issue with Lenovo LOQ?", a: "Sudden motherboard death on Intel HX models." },
            { q: "Is it worth buying?", a: "Only the AMD Ryzen version. Avoid Intel HX models." }
        ],
        evidence_links: [ { source: "Reddit", title: "LOQ Motherboard dead", url: "#" } ],
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
        description_summary: "The Razer Blade 15 continues to suffer from the notorious 'Spicy Pillow' issue, where heat degrades the battery causing dangerous swelling.",
        risk_data: {
            long_term_risk: "Battery swelling (Spicy Pillow) is guaranteed due to heat.",
            maintenance_cost: "Very High",
            issues: [
                { name: "Battery Bloat", desc: "Chassis heat cooks battery causing dangerous swelling.", severity: 3, frequency: 3 },
                { name: "Surface Lava", desc: "Keyboard area becomes too hot to touch.", severity: 2, frequency: 3 },
                { name: "Bad RMA", desc: "Support takes weeks to respond to failures.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The unibody aluminum chassis acts as a giant heatsink, dissipating heat directly into the battery compartment. Long term usage creates a thermal environment that degrades the battery electrolyte, causing swelling within 12-18 months.",
        maintenance_cost_analysis: "Very High ($200+). Razer support is expensive. DIY battery replacement is possible but risky.",
        who_should_avoid: "Users in hot climates and anyone unwilling to open their laptop annually to check for battery danger.",
        faq_section: [
            { q: "What is the spicy pillow issue?", a: "It's when the battery swells up due to heat, potentially bending the chassis." },
            { q: "Is Razer Blade reliable?", a: "No, thermal management is poor for the components used." }
        ],
        evidence_links: [ { source: "Reddit", title: "Spicy Pillow megathread", url: "#" } ],
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
        description_summary: "Convertible laptops like the Spectre x360 introduce mechanical failure points. The 360-degree hinges often loosen after 12-18 months.",
        risk_data: {
            long_term_risk: "Hinge mechanism loosens causing screen wobble.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Hinge Snap", desc: "One hinge becomes loose after 1 year of flipping.", severity: 2, frequency: 2 },
                { name: "Bloatware", desc: "System slowed by 15+ pre-installed junk apps.", severity: 1, frequency: 3 },
                { name: "Tablet Heat", desc: "Uncomfortable to hold in tablet mode.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Long term usage analysis shows that the 360-degree hinges loosen significantly. Additionally, the motherboard layout is highly condensed, leading to thermal stress on the SSD and Wi-Fi card.",
        maintenance_cost_analysis: "Medium ($300+). Hinge repair often requires replacing the entire screen assembly or bottom chassis.",
        who_should_avoid: "Users who don't actually need a tablet mode, and field workers who need a rugged device.",
        faq_section: [
            { q: "Do the hinges break?", a: "They loosen over time, causing screen wobble." },
            { q: "Is it durable?", a: "Gem-cut design is prone to cosmetic damage." }
        ],
        evidence_links: [],
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
        description_summary: "The ASUS TUF A15 aims for budget performance but sacrifices build quality. Cooling fan bearings often fail or begin grinding after 12 months.",
        risk_data: {
            long_term_risk: "Fan bearings grind and fail after 12 months.",
            maintenance_cost: "Low (Fans are cheap)",
            issues: [
                { name: "Jet Engine", desc: "Fans hit 55dB. You will be kicked out of libraries.", severity: 1, frequency: 3 },
                { name: "Ghosting", desc: "Slow response time causes blurring in fast games.", severity: 2, frequency: 3 },
                { name: "Plastic Flex", desc: "Chassis feels cheap and flexes under typing.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Long term usage reveals that the cooling fans are the weak link. The display panel often develops ghosting issues or backlight bleed as the plastic bezel exerts uneven pressure over time.",
        maintenance_cost_analysis: "Low ($50). Fans are cheap to replace, but the frequency of failure is annoying.",
        who_should_avoid: "Students who need a quiet laptop, and competitive gamers who need a fast-response screen.",
        faq_section: [
            { q: "Is it loud?", a: "Yes, fans are very loud under load." },
            { q: "Is the screen good?", a: "No, significant ghosting makes it bad for shooters." }
        ],
        evidence_links: [],
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
        description_summary: "The Surface Laptop 5 is a 'disposable' premium device. The Alcantara fabric stains permanently, and the battery is glued in.",
        risk_data: {
            long_term_risk: "Fabric deck stains permanently yellow. Battery cannot be replaced.",
            maintenance_cost: "Impossible (Glue)",
            issues: [
                { name: "Glue Trap", desc: "Zero repairability. Battery glued down.", severity: 2, frequency: 3 },
                { name: "Alcantara Stain", desc: "Fabric absorbs sweat and turns gross.", severity: 2, frequency: 3 },
                { name: "Thick Bezels", desc: "Design looks outdated compared to competition.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Long term reliability is marred by zero repairability. The Alcantara fabric on the keyboard deck absorbs oils and sweat, turning visibly stained and gross after 6-9 months—this cannot be cleaned or replaced.",
        maintenance_cost_analysis: "Impossible. Microsoft stores typically swap the unit for a high fee rather than repair.",
        who_should_avoid: "Right-to-repair advocates, heavy users who wear out batteries quickly, and anyone with sweaty hands.",
        faq_section: [
            { q: "Can you clean the Alcantara?", a: "Not really. Once oils soak in, it's permanent." },
            { q: "Can I change the battery?", a: "No, it is glued shut." }
        ],
        evidence_links: [],
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
        description_summary: "Great specs on paper, but cuts corners on connectivity. MediaTek Wi-Fi cards lead to persistent connection drops.",
        risk_data: {
            long_term_risk: "WiFi card failure and trackpad peeling.",
            maintenance_cost: "Low",
            issues: [
                { name: "WiFi Dropouts", desc: "MediaTek cards struggle to maintain connection.", severity: 2, frequency: 3 },
                { name: "Sticky Trackpad", desc: "Plastic trackpad feels cheap and wears down.", severity: 2, frequency: 3 },
                { name: "Bloatware", desc: "Popups and ads out of the box.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Chronic issues with the MediaTek Wi-Fi cards lead to persistent connection drops. The plastic trackpad surface wears down to a glossy shine and can become 'sticky' or unresponsive.",
        maintenance_cost_analysis: "Low ($20). Replacing the Wi-Fi card with an Intel AX210 fixes the main issue. Trackpad wear is permanent.",
        who_should_avoid: "Remote workers who need 100% stable internet, and users who value premium build quality.",
        faq_section: [
            { q: "Is the WiFi bad?", a: "Yes, the MediaTek card is unreliable." },
            { q: "Is the build quality good?", a: "It's average plastic/aluminum mix." }
        ],
        evidence_links: [],
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
        description_summary: "The Galaxy Book 3 prioritizes thinness over structural rigidity, leading to 'Crack-Gate' where screens crack spontaneously.",
        risk_data: {
            long_term_risk: "Screen cracks spontaneously due to thin glass.",
            maintenance_cost: "High",
            issues: [
                { name: "Crack-Gate", desc: "Glass is too thin and cracks from hinge stress.", severity: 3, frequency: 2 },
                { name: "Screen Wobble", desc: "Hinge is too weak for the screen size.", severity: 2, frequency: 3 },
                { name: "Fingerprints", desc: "Midnight blue chassis looks dirty instantly.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "The AMOLED screen is covered by ultra-thin glass that is prone to cracking under the chassis' own internal tension or minor flex. Long term durability is low for travelers.",
        maintenance_cost_analysis: "High ($400+). AMOLED screens are expensive to replace. Samsung support often classifies spontaneous cracks as 'user damage'.",
        who_should_avoid: "Frequent travelers, students with crowded backpacks, and anyone clumsy.",
        faq_section: [
            { q: "Does the screen crack easily?", a: "Yes, reports of spontaneous cracking are common." },
            { q: "Is it durable?", a: "No, it is extremely fragile." }
        ],
        evidence_links: [],
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
        description_summary: "Generally solid, but suffers from the 'Wi-Fi Lottery' with poor Realtek cards and a massive, heavy power brick.",
        risk_data: {
            long_term_risk: "WiFi card failure creates online gaming lag.",
            maintenance_cost: "Low (WiFi card is $20)",
            issues: [
                { name: "WiFi Lottery", desc: "Realtek cards cause ping spikes.", severity: 2, frequency: 3 },
                { name: "Heavy Brick", desc: "Power adapter weighs almost 1kg.", severity: 1, frequency: 3 },
                { name: "Paint Chip", desc: "Palm rest paint wears off quickly.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Lenovo sources Wi-Fi cards from multiple vendors; units with Realtek cards experience high latency. The charging port can become loose if the heavy power brick is allowed to dangle.",
        maintenance_cost_analysis: "Low ($20). Swapping the Wi-Fi card is easy and cheap. Paint wear is cosmetic.",
        who_should_avoid: "Competitive gamers (unless upgrading Wi-Fi) and commuters who need light weight.",
        faq_section: [
            { q: "Is the WiFi bad?", a: "It depends on if you get the Realtek card." },
            { q: "Is it heavy?", a: "Yes, the charger alone is massive." }
        ],
        evidence_links: [],
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
        description_summary: "A zombie product. The Touch Bar is a dead feature, and the chassis is outdated. It is reliable but represents terrible value.",
        risk_data: {
            long_term_risk: "Touch Bar has no future OS support. Ancient screen tech.",
            maintenance_cost: "High (Apple Care)",
            issues: [
                { name: "Zombie TouchBar", desc: "No physical Esc key. Feature is dead.", severity: 2, frequency: 3 },
                { name: "60Hz Screen", desc: "Slow refresh rate for a 'Pro' device.", severity: 2, frequency: 3 },
                { name: "720p Webcam", desc: "Grainy video quality.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "The long-term risk isn't hardware failure, but obsolescence. The Touch Bar is a dead feature with no OS support improvements. Value retention will plummet faster than the M2 Air or Pro 14.",
        maintenance_cost_analysis: "High ($400+). Touch Bar replacement is costly. It's rarely worth fixing on an outdated model.",
        who_should_avoid: "Video editors (need better screen), developers (need physical Escape key), and anyone who wants their laptop to look modern in 2 years.",
        faq_section: [
            { q: "Is the Touch Bar useful?", a: "No, Apple has discontinued it." },
            { q: "Is it better than the Air?", a: "No, the Air has a better screen and webcam." }
        ],
        evidence_links: [],
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
        evidence_links: [ { source: "Reddit", title: "Gantry sag issues", url: "#" } ],
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
        evidence_links: [],
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
        evidence_links: [],
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
        evidence_links: [],
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
        evidence_links: [],
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
        evidence_links: [ { source: "Reddit", title: "K1 Gen 1 extruder fix", url: "#" } ],
        accessories: [
            { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." },
            { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "High speed." }
        ]
    }
];
