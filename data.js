// data.js - v45.8 (Cleaned: No Absolute Dates, No 'Total Loss' text)
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
        confidence_level: "High",
        trend_badge: null,
        risk_score: 92,
        image: "images/dell-xps-13-plus.jpg",
        links: { solver: "https://amzn.to/4ax1iM6", value: "https://amzn.to/4aLNfUh", antidote_1: "https://amzn.to/4kD8XgK", antidote_2: "https://amzn.to/4kyVXsv" },
        recommendations: { primary: { name: "MacBook Air M2", link: "https://amzn.to/4ax1iM6", benefits: ["18-Hour Battery", "Physical Keys", "Silent"] }, secondary: { name: "Dell XPS 13 (9315)", link: "https://amzn.to/4aLNfUh", reason: "Classic layout, $400 cheaper." } },
        description_summary: "The Dell XPS 13 Plus (9320) faces significant long term reliability reports regarding thermal management and capacitive touch bar responsiveness.",
        risk_data: {
            long_term_risk: "Capacitive touch bar failure requiring deck replacement.",
            maintenance_cost: "High", // Display logic will handle text
            issues: [
                { name: "Touch Bar Freeze", severity: 3, frequency: 3, desc: "Capacitive keys often stop responding due to heat." },
                { name: "Battery Degradation", severity: 2, frequency: 3, desc: "Health often drops below 80% within 12-18 months." },
                { name: "Dongle Wear", severity: 2, frequency: 3, desc: "Charging port wear from constant dongle usage." }
            ]
        },
        long_term_analysis: "Analysis indicates a higher failure rate for the XPS 13 Plus after extended use. The primary concern is the aggressive thermal profile combined with the experimental glass deck design.",
        maintenance_cost_analysis: "High ($400 – $700). The RAM and SSD are soldered. Touch bar failure typically requires top deck replacement.",
        who_should_avoid: "Software Developers (missing physical Esc key) and users in hot climates.",
        faq_section: [ { q: "What are the long term problems?", a: "Touch bar unresponsiveness and rapid battery degradation." }, { q: "Is it worth buying?", a: "Performance throttling makes it a poor value proposition." } ],
        accessories: [ { name: "USB-C Hub", link: "https://amzn.to/4kD8XgK", desc: "Required for usability." }, { name: "Anker 200W", link: "https://amzn.to/4kyVXsv", desc: "Backup power." } ]
    },
    {
        id: "lenovo-loq-15",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15 (Intel)",
        price: "$899",
        release_year: 2024,
        evidence_count: 850,
        confidence_level: "High",
        trend_badge: "Trending Risk",
        risk_score: 88,
        image: "images/lenovo-loq-15.jpg",
        links: { solver: "https://amzn.to/4bS0yDI", value: "https://amzn.to/4qymUhm", antidote_1: "https://amzn.to/3OaX19O", antidote_2: "https://amzn.to/4kv8sFf" },
        recommendations: { primary: { name: "Acer Nitro 16", link: "https://amzn.to/4bS0yDI", benefits: ["Dual-Fan Cooling", "Better VRMs", "Stable"] }, secondary: { name: "ASUS TUF F15", link: "https://amzn.to/4qymUhm", reason: "Military Grade Durability." } },
        description_summary: "The Lenovo LOQ 15 (Intel) has multiple reports of motherboard failures linked to VRM stress.",
        risk_data: {
            long_term_risk: "Intel HX CPUs stressing motherboard VRMs.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Motherboard Failure", desc: "Intel HX CPUs reported to stress VRMs.", severity: 3, frequency: 3 },
                { name: "Overheating", desc: "CPU hits 95°C under load.", severity: 3, frequency: 3 },
                { name: "Battery Drain", desc: "Drains battery while plugged in.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The motherboard VRMs struggle to sustain the power draw of Intel HX processors, leading to potential failure after 6-12 months of heavy gaming.",
        maintenance_cost_analysis: "High. VRM failure often requires mainboard replacement, exceeding resale value.",
        who_should_avoid: "Budget gamers looking for a long-term investment.",
        faq_section: [ { q: "What is the main issue?", a: "Potential motherboard failure on Intel HX models." }, { q: "Is it worth buying?", a: "Consider the AMD Ryzen version for better stability." } ],
        accessories: [ { name: "Laptop Stand", link: "https://amzn.to/3OaX19O", desc: "Airflow is mandatory." }, { name: "Cooling Pad", link: "https://amzn.to/4kv8sFf", desc: "Force air cooling." } ]
    },
    {
        id: "razer-blade-15",
        category: "laptop",
        brand: "Razer",
        model: "Blade 15",
        price: "$2,499",
        release_year: 2024,
        evidence_count: 610,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 85,
        image: "images/razer-blade-15.jpg",
        links: { solver: "https://amzn.to/4aoclHy", value: "https://amzn.to/3OCX12o", antidote_1: "https://amzn.to/46IyRJZ", antidote_2: "https://amzn.to/4aszZTn" },
        recommendations: { primary: { name: "ASUS ROG G16", link: "https://amzn.to/4aoclHy", benefits: ["Better Airflow", "Cooler Chassis", "Good Support"] }, secondary: { name: "Razer Blade 14 (AMD)", link: "https://amzn.to/3OCX12o", reason: "AMD chips = less bloat risk." } },
        description_summary: "The Razer Blade 15 is frequently cited for 'Spicy Pillow' issues (battery swelling) due to thermal design.",
        risk_data: {
            long_term_risk: "Battery swelling due to chassis heat.",
            maintenance_cost: "Very High",
            issues: [
                { name: "Battery Bloat", desc: "Chassis heat affects battery longevity.", severity: 3, frequency: 3 },
                { name: "Surface Heat", desc: "Keyboard becomes hot to touch.", severity: 2, frequency: 3 },
                { name: "Support Delays", desc: "RMA process often cited as slow.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "The unibody aluminum chassis acts as a heatsink, dissipating heat into the battery, often causing swelling within 12-24 months.",
        maintenance_cost_analysis: "Very High ($200+). DIY battery replacement carries safety risks.",
        who_should_avoid: "Users in hot climates.",
        faq_section: [ { q: "What is spicy pillow?", a: "Battery swelling due to heat exposure." }, { q: "Is it reliable?", a: "Thermal management is a known concern." } ],
        accessories: [ { name: "IETS GT600", link: "https://amzn.to/46IyRJZ", desc: "Prevent bloat." }, { name: "Mini Keyboard", link: "https://amzn.to/4aszZTn", desc: "Don't burn hands." } ]
    },
    {
        id: "hp-spectre-x360",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360",
        price: "$1,599",
        release_year: 2023,
        evidence_count: 230,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 72,
        image: "images/hp-spectre-x360.jpg",
        links: { solver: "https://amzn.to/4kRtsXf", value: "https://amzn.to/3M6LAPV", antidote_1: "https://amzn.to/4aN0WCk", antidote_2: "https://amzn.to/3Obi3oO" },
        recommendations: { primary: { name: "Dell XPS 13", link: "https://amzn.to/4kRtsXf", benefits: ["Solid Hinge", "Better Build", "No Bloat"] }, secondary: { name: "Lenovo Yoga 9i", link: "https://amzn.to/3M6LAPV", reason: "Better soundbar hinge." } },
        description_summary: "The 360-degree hinges are reported to loosen after extended daily usage.",
        risk_data: {
            long_term_risk: "Hinge mechanism loosening causing screen wobble.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Hinge Looseness", desc: "Hinge tension drops after 12+ months.", severity: 2, frequency: 2 },
                { name: "Bloatware", desc: "System slowed by pre-installed apps.", severity: 1, frequency: 3 },
                { name: "Tablet Heat", desc: "Uncomfortable in tablet mode.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Hinges may loosen significantly. Condensed motherboard layout leads to thermal stress.",
        maintenance_cost_analysis: "Medium ($300+). Hinge repair typically requires screen assembly replacement.",
        who_should_avoid: "Field workers needing a rugged device.",
        faq_section: [ { q: "Do hinges break?", a: "They loosen, causing wobble." }, { q: "Is it durable?", a: "Gem-cut design is prone to cosmetic damage." } ],
        accessories: [ { name: "Care Pack", link: "https://amzn.to/4aN0WCk", desc: "Extend warranty." }, { name: "Samsung SSD", link: "https://amzn.to/3Obi3oO", desc: "Clean Backup" } ]
    },
    {
        id: "asus-tuf-a15",
        category: "laptop",
        brand: "ASUS",
        model: "TUF Gaming A15",
        price: "$999",
        release_year: 2023,
        evidence_count: 1100,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 60,
        image: "images/asus-tuf-a15.jpg",
        links: { solver: "https://amzn.to/46wZnWM", value: "https://amzn.to/4rP6vGj", antidote_1: "https://amzn.to/4ttHnGR", antidote_2: "https://amzn.to/4rxSxZP" },
        recommendations: { primary: { name: "Lenovo Legion 5", link: "https://amzn.to/46wZnWM", benefits: ["Better Screen", "Quieter Fans", "Solid Build"] }, secondary: { name: "Acer Nitro V", link: "https://amzn.to/4rP6vGj", reason: "Budget king." } },
        description_summary: "Cooling fan bearings are reported to fail or begin grinding after 12 months.",
        risk_data: {
            long_term_risk: "Fan bearing failure and grinding noise.",
            maintenance_cost: "Low",
            issues: [
                { name: "Loud Fans", desc: "Fans hit 55dB under load.", severity: 1, frequency: 3 },
                { name: "Ghosting", desc: "Slow response time causes blurring.", severity: 2, frequency: 3 },
                { name: "Plastic Flex", desc: "Chassis feels budget-oriented.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Cooling fans are the weak link. Screen ghosting is common on base models.",
        maintenance_cost_analysis: "Low ($50). Fans are affordable but fail often.",
        who_should_avoid: "Students needing a quiet laptop.",
        faq_section: [ { q: "Is it loud?", a: "Yes, noticeably loud under load." }, { q: "Is the screen good?", a: "Ghosting is noticeable on fast games." } ],
        accessories: [ { name: "Headset", link: "https://amzn.to/4ttHnGR", desc: "Block fan noise." }, { name: "Monitor", link: "https://amzn.to/4rxSxZP", desc: "Fix ghosting." } ]
    },
    {
        id: "surface-laptop-5",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Laptop 5",
        price: "$1,299",
        release_year: 2022,
        evidence_count: 180,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 68,
        image: "images/surface-laptop-5.jpg",
        links: { solver: "https://amzn.to/4qx0a16", value: "https://amzn.to/3MBbFXr", antidote_1: "https://amzn.to/3Zu16Zb", antidote_2: "https://amzn.to/4qDObPt" },
        recommendations: { primary: { name: "Dell XPS 13", link: "https://amzn.to/4qx0a16", benefits: ["Metal Deck", "Cleanable", "Standard SSD"] }, secondary: { name: "Framework", link: "https://amzn.to/3MBbFXr", reason: "Repairable." } },
        description_summary: "Low repairability score. Alcantara stains and glued-in battery make maintenance difficult.",
        risk_data: {
            long_term_risk: "Battery cannot be replaced easily. Fabric stains.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Glue Construction", desc: "Zero user repairability.", severity: 2, frequency: 3 },
                { name: "Alcantara Stain", desc: "Fabric absorbs sweat and oils.", severity: 2, frequency: 3 },
                { name: "Thick Bezels", desc: "Dated design language.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Zero repairability. Alcantara fabric degrades cosmetically after 9-12 months.",
        maintenance_cost_analysis: "High. Often requires unit swap rather than repair.",
        who_should_avoid: "Right-to-repair advocates.",
        faq_section: [ { q: "Can you clean Alcantara?", a: "Difficult to restore fully." }, { q: "Can I change battery?", a: "No, it is glued in." } ],
        accessories: [ { name: "Sleeve", link: "https://amzn.to/3Zu16Zb", desc: "Protect fabric." }, { name: "Keyboard", link: "https://amzn.to/4qDObPt", desc: "Keep clean." } ]
    },
    {
        id: "acer-swift-go-14-old",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14 (2023)",
        price: "$799",
        release_year: 2023,
        evidence_count: 450,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 55,
        image: "images/acer-swift-go-14.jpg",
        links: { solver: "https://amzn.to/4rejrp5", value: "https://amzn.to/4kAUrGn", antidote_1: "https://amzn.to/462RKXU", antidote_2: "https://amzn.to/4raPoP7" },
        recommendations: { primary: { name: "MacBook Air M1", link: "https://amzn.to/4rejrp5", benefits: ["Glass Trackpad", "Stable WiFi", "Silent"] }, secondary: { name: "Zenbook 14", link: "https://amzn.to/4kAUrGn", reason: "OLED & Build." } },
        description_summary: "MediaTek Wi-Fi cards cited for persistent connection drops.",
        risk_data: {
            long_term_risk: "WiFi connection instability and trackpad peeling.",
            maintenance_cost: "Low",
            issues: [
                { name: "WiFi Dropouts", desc: "Connection instability reported.", severity: 2, frequency: 3 },
                { name: "Sticky Trackpad", desc: "Plastic surface wears down.", severity: 2, frequency: 3 },
                { name: "Bloatware", desc: "Popups out of the box.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Chronic Wi-Fi issues reported. Trackpad wear common after extended use.",
        maintenance_cost_analysis: "Low ($20). Swap Wi-Fi card to fix.",
        who_should_avoid: "Remote workers.",
        faq_section: [ { q: "Is WiFi bad?", a: "MediaTek cards are less reliable than Intel." }, { q: "Can I fix it?", a: "Yes, swap for Intel AX210." } ],
        accessories: [ { name: "USB WiFi", link: "https://amzn.to/462RKXU", desc: "Stable internet." }, { name: "Mouse", link: "https://amzn.to/4raPoP7", desc: "Fix trackpad." } ]
    },
    {
        id: "samsung-galaxy-book3",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book 3",
        price: "$1,099",
        release_year: 2023,
        evidence_count: 310,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 88,
        image: "images/samsung-galaxy-book3.jpg",
        links: { solver: "https://amzn.to/4cq58t4", value: "https://amzn.to/466tbt7", antidote_1: "https://amzn.to/46ORImL", antidote_2: "https://amzn.to/3MrfHkY" },
        recommendations: { primary: { name: "MacBook Air 15", link: "https://amzn.to/4cq58t4", benefits: ["Solid Hinge", "Sturdy Glass", "No Wobble"] }, secondary: { name: "LG Gram 16", link: "https://amzn.to/466tbt7", reason: "Flexible alloy." } },
        description_summary: "Thin glass screen reported to crack spontaneously due to chassis flex.",
        risk_data: {
            long_term_risk: "Screen cracks reported from hinge stress.",
            maintenance_cost: "High",
            issues: [
                { name: "Screen Fragility", desc: "Glass cracks cited from hinge stress.", severity: 3, frequency: 2 },
                { name: "Screen Wobble", desc: "Weak hinge mechanism.", severity: 2, frequency: 3 },
                { name: "Fingerprints", desc: "Looks dirty instantly.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "AMOLED screen is thin and prone to cracking under torque.",
        maintenance_cost_analysis: "High ($400+). Screens are expensive parts.",
        who_should_avoid: "Students with crowded backpacks.",
        faq_section: [ { q: "Does screen crack?", a: "Reports exist of spontaneous cracks." }, { q: "Is it expensive?", a: "Yes, repair is costly." } ],
        accessories: [ { name: "Hard Case", link: "https://amzn.to/46ORImL", desc: "Prevent cracks." }, { name: "Keyboard", link: "https://amzn.to/3MrfHkY", desc: "Desk setup." } ]
    },
    {
        id: "lenovo-legion-5",
        category: "laptop",
        brand: "Lenovo",
        model: "Legion 5 (Gen 8)",
        price: "$1,199",
        release_year: 2023,
        evidence_count: 980,
        confidence_level: "High",
        trend_badge: "Verified Stable",
        risk_score: 45,
        image: "images/lenovo-legion-5.jpg",
        links: { solver: "https://amzn.to/463YrsV", value: "https://amzn.to/3OpuxsR", antidote_1: "https://amzn.to/4kuLdLw", antidote_2: "https://amzn.to/4qtEyCJ" },
        recommendations: { primary: { name: "Zephyrus G14", link: "https://amzn.to/463YrsV", benefits: ["Portable", "Better WiFi", "Premium Build"] }, secondary: { name: "Legion 5 (Gen 7)", link: "https://amzn.to/3OpuxsR", reason: "Cheaper older model." } },
        description_summary: "Solid, but Realtek Wi-Fi cards cited for lag spikes.",
        risk_data: {
            long_term_risk: "WiFi card lag and heavy weight.",
            maintenance_cost: "Low",
            issues: [
                { name: "WiFi Lag", desc: "Realtek cards may cause lag.", severity: 2, frequency: 3 },
                { name: "Heavy Brick", desc: "Charger is massive.", severity: 1, frequency: 3 },
                { name: "Paint Chip", desc: "Palm rest wear over time.", severity: 1, frequency: 2 }
            ]
        },
        long_term_analysis: "Realtek WiFi cards cause high latency. Charging port stress from heavy brick.",
        maintenance_cost_analysis: "Low ($20). Swap WiFi card.",
        who_should_avoid: "Competitive gamers (unless upgrading WiFi).",
        faq_section: [ { q: "Is WiFi bad?", a: "Realtek cards are inconsistent." }, { q: "Is it heavy?", a: "Yes." } ],
        accessories: [ { name: "Intel WiFi", link: "https://amzn.to/4kuLdLw", desc: "Fix lag spikes." }, { name: "Slim Charger", link: "https://amzn.to/4qtEyCJ", desc: "Portability." } ]
    },
    {
        id: "macbook-pro-13-m2",
        category: "laptop",
        brand: "Apple",
        model: "MacBook Pro 13 (M2)",
        price: "$1,299",
        release_year: 2022,
        evidence_count: 720,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 65,
        image: "images/macbook-pro-13-m2.jpg",
        links: { solver: "https://amzn.to/3ZyvtO1", value: "https://amzn.to/3MsXTG7", antidote_1: "https://amzn.to/4adenvg", antidote_2: "https://amzn.to/3OCuytw" },
        recommendations: { primary: { name: "MacBook Pro 14", link: "https://amzn.to/3ZyvtO1", benefits: ["120Hz Screen", "HDMI Port", "No TouchBar"] }, secondary: { name: "MacBook Air M2", link: "https://amzn.to/3MsXTG7", benefits: ["Better Value", "MagSafe"] } },
        description_summary: "Zombie product. Touch Bar is a discontinued feature. Outdated chassis.",
        risk_data: {
            long_term_risk: "Obsolescence and potential Touch Bar failure.",
            maintenance_cost: "High",
            issues: [
                { name: "Zombie TouchBar", desc: "Feature is dead/glitchy.", severity: 2, frequency: 3 },
                { name: "60Hz Screen", desc: "Slow refresh rate.", severity: 2, frequency: 3 },
                { name: "720p Webcam", desc: "Poor quality.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Touch Bar has no OS support. Value retention will likely drop.",
        maintenance_cost_analysis: "High ($400+).",
        who_should_avoid: "Developers needing Esc key.",
        faq_section: [ { q: "Is Touch Bar good?", a: "No, discontinued." }, { q: "Is Air better?", a: "Yes." } ],
        accessories: [ { name: "4K Webcam", link: "https://amzn.to/4adenvg", desc: "Look better." }, { name: "Monitor", link: "https://amzn.to/3OCuytw", desc: "More space." } ]
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
        confidence_level: "Medium",
        trend_badge: "Trending Risk",
        risk_score: 78,
        image: "images/apple-macbook-air-15.jpg",
        links: { solver: "https://amzn.to/3IZ1234", value: "https://amzn.to/3IZ5678", antidote_1: "https://amzn.to/3TMxxxx", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "MacBook Pro 14", link: "https://amzn.to/placeholder_mbp", benefits: ["Active Cooling", "120Hz Screen", "HDMI Port"] }, secondary: { name: "Air 13 (M2)", link: "https://amzn.to/placeholder_air2", reason: "Better value for casual use." } },
        description_summary: "Fanless design leads to thermal throttling during sustained workloads.",
        risk_data: {
            long_term_risk: "Logic board failure risks and zero repairability.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Screen Fragility", severity: 3, frequency: 2, desc: "Thin screen prone to pressure cracks." },
                { name: "No Fan", severity: 2, frequency: 3, desc: "Performance drops during long tasks." },
                { name: "SSD Wear", severity: 2, frequency: 2, desc: "Soldered SSD means data risk if board dies." }
            ]
        },
        long_term_analysis: "The fanless design is great for silence but introduces thermal risks during sustained workloads. Heat spread degrades battery cells faster than actively cooled models.",
        maintenance_cost_analysis: "High. Screen or board replacement costs often exceed used unit value.",
        who_should_avoid: "Video editors, 3D renders, and multitaskers.",
        faq_section: [ { q: "Does it overheat?", a: "It throttles performance to stay safe." }, { q: "Is the screen fragile?", a: "Yes, thin glass requires care." }, { q: "Can I repair it myself?", a: "No, components are soldered." } ],
        accessories: [ { name: "Hard Shell Case", link: "https://amzn.to/3TMxxxx", desc: "Protect the screen." }, { name: "Thermal Pad Mod", link: "https://amzn.to/placeholder", desc: "Help dissipate heat." } ]
    },
    {
        id: "thinkpad-x1-carbon-gen12",
        category: "laptop",
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon Gen 12",
        price: "$1,899",
        release_year: 2025,
        evidence_count: 1250,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 65,
        image: "images/lenovo-thinkpad-x1.jpg",
        links: { solver: "https://amzn.to/3TPL8u1", value: "https://amzn.to/3vxM5qL", antidote_1: "https://amzn.to/49nXxyz", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "Framework Laptop 13", link: "https://amzn.to/placeholder_frame", benefits: ["Modular Ports", "User Repairable", "Cheaper RAM"] }, secondary: { name: "ThinkPad T14 (AMD)", link: "https://amzn.to/placeholder_t14", reason: "Better thermals & value." } },
        description_summary: "Soft-touch coating reported to degrade and become sticky after 18-24 months.",
        risk_data: {
            long_term_risk: "Soft-touch coating degradation. Soldered RAM.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Coating Peel", severity: 2, frequency: 3, desc: "Rubberized coating peels after extended use." },
                { name: "Thermal Throttle", severity: 2, frequency: 3, desc: "Ultra-thin chassis struggles with Core Ultra chips." },
                { name: "Soldered RAM", severity: 1, frequency: 3, desc: "Cannot upgrade memory later." }
            ]
        },
        long_term_analysis: "While durable against drops, cosmetic durability is cited as poor. The rubberized paint absorbs oils.",
        maintenance_cost_analysis: "Medium ($150-$300). Keyboard replacement is difficult as it is riveted.",
        who_should_avoid: "Users who need cosmetic perfection or RAM upgrades.",
        faq_section: [ { q: "Can I upgrade RAM?", a: "No, soldered." }, { q: "Does the paint peel?", a: "Reports exist of peeling on corners." }, { q: "Is the fan loud?", a: "Spins up frequently due to thin chassis." } ],
        accessories: [ { name: "Laptop Sleeve", link: "https://amzn.to/49nXxyz", desc: "Prevent coating wear." }, { name: "Thunderbolt Dock", link: "https://amzn.to/placeholder", desc: "Expand connectivity." } ]
    },
    {
        id: "dell-xps-13-plus-2026",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (2026)",
        price: "$1,499",
        release_year: 2026,
        evidence_count: 560,
        confidence_level: "Low",
        trend_badge: "Trending Risk",
        risk_score: 92,
        image: "images/dell-xps-13-plus-2026.jpg",
        links: { solver: "https://amzn.to/3xEplaceholder", value: "https://amzn.to/4aFplaceholder", antidote_1: "https://amzn.to/3vvplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "MacBook Air M3", link: "https://amzn.to/placeholder_air", benefits: ["Physical Keys", "Better Battery", "Cooler"] }, secondary: { name: "ThinkPad Z13", link: "https://amzn.to/placeholder_z13", reason: "More durable OLED." } },
        description_summary: "Capacitive touch bar and invisible trackpad cited for failure and usability issues.",
        risk_data: {
            long_term_risk: "Invisible trackpad drift and OLED burn-in.",
            maintenance_cost: "High",
            issues: [
                { name: "Touch Bar Fail", severity: 3, frequency: 3, desc: "Function row LEDs die or freeze." },
                { name: "Invisible Pad", severity: 2, frequency: 3, desc: "Haptic trackpad drift reported." },
                { name: "Heat Trap", severity: 2, frequency: 3, desc: "Glass deck traps heat." }
            ]
        },
        long_term_analysis: "The capacitive function row is a point of failure. Heat trapped by the glass palm rest degrades battery health.",
        maintenance_cost_analysis: "High ($500+). Requires replacing the entire top glass assembly.",
        who_should_avoid: "Developers (need physical F-keys) and writers.",
        faq_section: [ { q: "Are keys physical?", a: "No, top row is capacitive." }, { q: "Battery life?", a: "Poor due to OLED and heat." }, { q: "Does the trackpad fail?", a: "Drift issues reported." } ],
        accessories: [ { name: "USB-C Hub", link: "https://amzn.to/3vvplaceholder", desc: "You need ports." }, { name: "Bluetooth Keyboard", link: "https://amzn.to/placeholder", desc: "Backup input." } ]
    },
    {
        id: "hp-spectre-x360-14-amd",
        category: "laptop",
        brand: "HP",
        model: "Spectre x360 14 (Ryzen AI)",
        price: "$1,649",
        release_year: 2026,
        evidence_count: 410,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 72,
        image: "images/hp-spectre-x360-14.jpg",
        links: { solver: "https://amzn.to/3VYplaceholder", value: "https://amzn.to/4c9placeholder", antidote_1: "https://amzn.to/3xkplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "Lenovo Yoga 9i", link: "https://amzn.to/placeholder_yoga", benefits: ["Better Soundbar", "Sturdier Hinge"] }, secondary: { name: "LG Gram 2-in-1", link: "https://amzn.to/placeholder_gram", reason: "Lighter weight." } },
        description_summary: "Mechanical hinge issues reported. Hinges lose tension after daily flipping.",
        risk_data: {
            long_term_risk: "Hinge wobble and OLED flicker risks.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Hinge Play", severity: 2, frequency: 3, desc: "Screen wobbles after extended use." },
                { name: "PWM Flicker", severity: 1, frequency: 2, desc: "Headaches at low brightness reported." },
                { name: "Rubber Feet", severity: 1, frequency: 3, desc: "Bottom strips peel off easily." }
            ]
        },
        long_term_analysis: "Mechanical hinges are a weak point. Frequent flipping wears out resistance.",
        maintenance_cost_analysis: "Medium ($300). Hinge tightening often requires assembly replacement.",
        who_should_avoid: "Users sensitive to PWM flicker.",
        faq_section: [ { q: "Is the hinge durable?", a: "Loosens with daily flipping." }, { q: "Is it good for eyes?", a: "PWM flickering can cause strain." }, { q: "Does it get hot?", a: "Warm, but Ryzen manages heat well." } ],
        accessories: [ { name: "Stylus Pen", link: "https://amzn.to/3xkplaceholder", desc: "Reduce hinge stress." }, { name: "Super Glue", link: "https://amzn.to/placeholder", desc: "For rubber feet." } ]
    },
    {
        id: "asus-zephyrus-g14-2025",
        category: "laptop",
        brand: "ASUS",
        model: "ROG Zephyrus G14 (2025)",
        price: "$1,599",
        release_year: 2025,
        evidence_count: 1500,
        confidence_level: "Medium",
        trend_badge: "Trending Risk",
        risk_score: 85,
        image: "images/asus-rog-zephyrus-g14.jpg",
        links: { solver: "https://amzn.to/4cLplaceholder", value: "https://amzn.to/3vsplaceholder", antidote_1: "https://amzn.to/3xplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "Razer Blade 14", link: "https://amzn.to/placeholder_blade", benefits: ["Stiffer Chassis", "Vapor Chamber"] }, secondary: { name: "Lenovo Legion Slim", link: "https://amzn.to/placeholder_legion", reason: "Cooler VRMs." } },
        description_summary: "Runs at very high temperatures. Risk of liquid metal pump-out.",
        risk_data: {
            long_term_risk: "Overheating components and liquid metal displacement.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Surface Heat", severity: 2, frequency: 3, desc: "Keyboard becomes hot under load." },
                { name: "Liquid Metal", severity: 3, frequency: 1, desc: "Can leak or pump out, requiring repaste." },
                { name: "Coil Whine", severity: 1, frequency: 3, desc: "Electrical buzzing noise." }
            ]
        },
        long_term_analysis: "Components degrade faster when running hot. Liquid metal thermal compound requires maintenance.",
        maintenance_cost_analysis: "Medium ($100-$200). Repasting liquid metal is risky for DIY.",
        who_should_avoid: "Users uncomfortable with high temperatures.",
        faq_section: [ { q: "Is it hot?", a: "Yes, uncomfortable under load." }, { q: "Is it loud?", a: "Yes, in Turbo mode." }, { q: "Is screen good?", a: "OLED is great but risks burn-in." } ],
        accessories: [ { name: "Cooling Pad", link: "https://amzn.to/3xplaceholder", desc: "Mandatory for gaming." }, { name: "External Keyboard", link: "https://amzn.to/placeholder", desc: "Avoid burning fingers." } ]
    },
    {
        id: "surface-pro-11",
        category: "laptop",
        brand: "Microsoft",
        model: "Surface Pro 11",
        price: "$1,199",
        release_year: 2026,
        evidence_count: 650,
        confidence_level: "Low",
        trend_badge: "Trending Risk",
        risk_score: 95,
        image: "images/microsoft-surface-pro-11.jpg",
        links: { solver: "https://amzn.to/3IXplaceholder", value: "https://amzn.to/3TNplaceholder", antidote_1: "https://amzn.to/3PEplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "iPad Pro M4", link: "https://amzn.to/placeholder_ipad", benefits: ["Better Tablet App", "Resale Value"] }, secondary: { name: "Dell XPS 13 2-in-1", link: "https://amzn.to/placeholder_xps2in1", reason: "Better repairability." } },
        description_summary: "Glued construction makes repair extremely difficult. Battery replacement often requires screen removal.",
        risk_data: {
            long_term_risk: "Battery swelling risk and zero repairability.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Glue Design", severity: 3, frequency: 3, desc: "Difficult to open without breaking screen." },
                { name: "Keyboard Peel", severity: 2, frequency: 3, desc: "Alcantara cover frays." },
                { name: "Battery Bloat", severity: 3, frequency: 2, desc: "Heat affects battery longevity." }
            ]
        },
        long_term_analysis: "Battery degradation often leads to unit replacement rather than repair due to glued construction.",
        maintenance_cost_analysis: "High. Swap fee often exceeds repair value.",
        who_should_avoid: "Right-to-repair advocates.",
        faq_section: [ { q: "Can I replace battery?", a: "Extremely difficult." }, { q: "Is keyboard included?", a: "No, extra cost." }, { q: "Does it overheat?", a: "Back gets hot." } ],
        accessories: [ { name: "Rugged Case", link: "https://amzn.to/3PEplaceholder", desc: "Protect glass." }, { name: "Type Cover", link: "https://amzn.to/placeholder", desc: "Essential." } ]
    },
    {
        id: "acer-swift-go-14-new",
        category: "laptop",
        brand: "Acer",
        model: "Swift Go 14",
        price: "$899",
        release_year: 2025,
        evidence_count: 980,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 55,
        image: "images/acer-swift-go-14.jpg",
        links: { solver: "https://amzn.to/3TKplaceholder", value: "https://amzn.to/3vyplaceholder", antidote_1: "https://amzn.to/4cJplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "MacBook Air M1", link: "https://amzn.to/placeholder_airm1", benefits: ["Better Build", "Resale Value"] }, secondary: { name: "Asus Zenbook 14", link: "https://amzn.to/placeholder_zenbook", reason: "Better chassis rigidity." } },
        description_summary: "Budget build quality. Plastic trackpad wears down.",
        risk_data: {
            long_term_risk: "Chassis flex and Wi-Fi card issues.",
            maintenance_cost: "Low",
            issues: [
                { name: "Fan Noise", severity: 2, frequency: 3, desc: "Whining noise reported." },
                { name: "WiFi Drop", severity: 2, frequency: 3, desc: "MediaTek card issues." },
                { name: "Bloatware", severity: 1, frequency: 3, desc: "Ad-supported OS experience." }
            ]
        },
        long_term_analysis: "Cooling fans and Wi-Fi cards are weak points. Chassis flexes.",
        maintenance_cost_analysis: "Low ($30). Fans and WiFi card are swappable.",
        who_should_avoid: "Students needing silence.",
        faq_section: [ { q: "Is it loud?", a: "Fans are high-pitched." }, { q: "Is WiFi good?", a: "Consider swapping for Intel AX210." }, { q: "Does it feel cheap?", a: "Yes, plastic build." } ],
        accessories: [ { name: "Intel WiFi Card", link: "https://amzn.to/4cJplaceholder", desc: "Fix connectivity." }, { name: "Wireless Mouse", link: "https://amzn.to/placeholder", desc: "Fix trackpad issues." } ]
    },
    {
        id: "samsung-galaxy-book4-edge",
        category: "laptop",
        brand: "Samsung",
        model: "Galaxy Book4 Edge",
        price: "$1,349",
        release_year: 2026,
        evidence_count: 220,
        confidence_level: "Low",
        trend_badge: "Trending Risk",
        risk_score: 88,
        image: "images/samsung-galaxy-book4.jpg",
        links: { solver: "https://amzn.to/49kplaceholder", value: "https://amzn.to/4aLplaceholder", antidote_1: "https://amzn.to/3vAplaceholder", antidote_2: "https://amzn.to/placeholder" },
        recommendations: { primary: { name: "LG Gram 16", link: "https://amzn.to/placeholder_gram", benefits: ["Lighter", "Matte Screen Option"] }, secondary: { name: "MacBook Air 15", link: "https://amzn.to/placeholder_air15", reason: "Better chassis rigidity." } },
        description_summary: "Ultra-thin design leads to reports of screen cracking from chassis flex.",
        risk_data: {
            long_term_risk: "Screen cracking due to chassis flex.",
            maintenance_cost: "High",
            issues: [
                { name: "Screen Crack", severity: 3, frequency: 2, desc: "Cracks reported from pressure." },
                { name: "Chassis Flex", severity: 2, frequency: 3, desc: "Bends under pressure." },
                { name: "Touchpad Click", severity: 1, frequency: 2, desc: "Accidental clicks when lifting." }
            ]
        },
        long_term_analysis: "Internal torsion can crack the glass. Cooling is minimal.",
        maintenance_cost_analysis: "High ($400+). AMOLED screens are expensive.",
        who_should_avoid: "Students, commuters with packed bags.",
        faq_section: [ { q: "Is it fragile?", a: "Yes, reports of screen cracks exist." }, { q: "Is battery good?", a: "Excellent." }, { q: "Does screen wobble?", a: "Yes, weak hinges." } ],
        accessories: [ { name: "Hard Sleeve", link: "https://amzn.to/3vAplaceholder", desc: "Must have protection." }, { name: "Screen Protector", link: "https://amzn.to/placeholder", desc: "Extra layer of safety." } ]
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
        confidence_level: "High",
        trend_badge: null,
        risk_score: 55,
        image: "images/ender-3-v3-se.jpg",
        links: { solver: "https://amzn.to/4rO30zE", value: "https://amzn.to/4bV0DGS", antidote_1: "https://amzn.to/4avRTV1", antidote_2: "https://amzn.to/4rieR9m" },
        recommendations: { primary: { name: "Flashforge 5M", link: "https://amzn.to/4rO30zE", benefits: ["CoreXY Speed", "Auto-Leveling", "Reliable"] }, secondary: { name: "Sovol SV06", link: "https://amzn.to/4bV0DGS", reason: "Linear rails (durable)." } },
        description_summary: "Budget printer. Gantry wobble and plastic gear wear reported over time.",
        risk_data: {
            long_term_risk: "Gantry wobble and extruder wear.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Gantry Wobble", severity: 2, frequency: 3, desc: "X-gantry sagging on right side." },
                { name: "Gear Wear", severity: 2, frequency: 2, desc: "Plastic gears strip with heavy use." },
                { name: "Print Failure", severity: 2, frequency: 2, desc: "No AI detection." }
            ]
        },
        long_term_analysis: "Plastic frame mounts loosen. High-speed printing accelerates V-wheel wear.",
        maintenance_cost_analysis: "Low ($20–$50). Parts are cheap, but calibration takes time.",
        who_should_avoid: "Print farms needing reliability.",
        faq_section: [ { q: "What is gantry sag?", a: "Arm droops, causing crooked prints." }, { q: "Is it reliable?", a: "Requires tinkering." } ],
        accessories: [ { name: "CR Touch", link: "https://amzn.to/4avRTV1", desc: "Fix leveling." }, { name: "Filament Dryer", link: "https://amzn.to/4rieR9m", desc: "Better prints." } ]
    },
    {
        id: "bambu-a1-mini",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "A1 Mini",
        price: "$299",
        release_year: 2023,
        evidence_count: 920,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 40,
        image: "images/bambu-a1-mini.jpg",
        links: { solver: "https://amzn.to/3MIGFVp", value: "https://amzn.to/4agB7KS", antidote_1: "https://amzn.to/4kyuwPk", antidote_2: "https://amzn.to/4ataRvx" },
        recommendations: { primary: { name: "Prusa Mini+", link: "https://amzn.to/3MIGFVp", benefits: ["Open Source", "Offline Privacy", "Moddable"] }, secondary: { name: "AnkerMake M5C", link: "https://amzn.to/4agB7KS", reason: "Faster & Metal." } },
        description_summary: "Excellent mechanics but proprietary ecosystem. 180mm volume is limiting.",
        risk_data: {
            long_term_risk: "Proprietary parts lock-in.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Cloud Logs", desc: "Print logs sent to cloud.", severity: 2, frequency: 2 },
                { name: "Small Volume", desc: "180mm cube limits size.", severity: 1, frequency: 3 },
                { name: "Proprietary", desc: "Cannot use generic parts.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Reliance on Bambu Lab for parts. 180mm volume limits cosplay prints.",
        maintenance_cost_analysis: "Medium. Proprietary parts cost more than generic.",
        who_should_avoid: "Privacy-conscious users.",
        faq_section: [ { q: "Is it too small?", a: "Yes, for helmets." }, { q: "Generic nozzles?", a: "No, proprietary." } ],
        accessories: [ { name: "PEI Plate", link: "https://amzn.to/4kyuwPk", desc: "Better adhesion." }, { name: "eSun PLA+", link: "https://amzn.to/4ataRvx", desc: "Reliable filament." } ]
    },
    {
        id: "anycubic-photon-mono",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Photon Mono 2",
        price: "$180",
        release_year: 2023,
        evidence_count: 310,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 60,
        image: "images/anycubic-photon-mono.jpg",
        links: { solver: "https://amzn.to/4tCngpS", value: "https://amzn.to/469PUEF", antidote_1: "https://amzn.to/4tCG87Y", antidote_2: "https://amzn.to/4sblM4z" },
        recommendations: { primary: { name: "Flashforge 5M", link: "https://amzn.to/4tCngpS", benefits: ["Non-Toxic", "Easy Setup", "Safe for Home"] }, secondary: { name: "Elegoo Mars 4", link: "https://amzn.to/469PUEF", reason: "Built-in Air Filter." } },
        description_summary: "Resin printing requires ventilation. Screen is a consumable.",
        risk_data: {
            long_term_risk: "LCD screen burnout and resin fumes.",
            maintenance_cost: "High",
            issues: [
                { name: "Toxic Fumes", desc: "Requires ventilation.", severity: 3, frequency: 3 },
                { name: "FEP Leak", desc: "Resin leaks can ruin screen.", severity: 3, frequency: 1 },
                { name: "Messy Cleanup", desc: "Requires alcohol wash.", severity: 2, frequency: 3 }
            ]
        },
        long_term_analysis: "LCD screen burns out after ~2000 hours. FEP leaks are a risk.",
        maintenance_cost_analysis: "High. Screen replacement is expensive.",
        who_should_avoid: "Apartment dwellers without ventilation.",
        faq_section: [ { q: "Is it safe?", a: "Toxic without ventilation." }, { q: "Does screen last?", a: "No, consumable." } ],
        accessories: [ { name: "Wash & Cure", link: "https://amzn.to/4tCG87Y", desc: "Safety essential." }, { name: "Grey Resin", link: "https://amzn.to/4sblM4z", desc: "Standard material." } ]
    },
    {
        id: "elegoo-neptune-4",
        category: "3d_printer",
        brand: "Elegoo",
        model: "Neptune 4 Pro",
        price: "$280",
        release_year: 2023,
        evidence_count: 580,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 70,
        image: "images/elegoo-neptune-4.jpg",
        links: { solver: "https://amzn.to/4rhuAFL", value: "https://amzn.to/4rhu1M9", antidote_1: "https://amzn.to/4ctaUtW", antidote_2: "https://amzn.to/4rgiixg" },
        recommendations: { primary: { name: "Creality K1C", link: "https://amzn.to/4rhuAFL", benefits: ["Stable Firmware", "Enclosed", "Faster"] }, secondary: { name: "Ender 3 V3 KE", link: "https://amzn.to/4rhu1M9", reason: "Easier to fix." } },
        description_summary: "Fast but firmware bugs reported to cause nozzle crashes.",
        risk_data: {
            long_term_risk: "Firmware bugs and wheel wear.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Z-Offset Bug", desc: "Printer may lose height setting.", severity: 3, frequency: 2 },
                { name: "Loud Fans", desc: "Very loud fans.", severity: 2, frequency: 3 },
                { name: "Wheel Dust", desc: "POM wheels wear out.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "Firmware stability concerns. POM wheels wear down.",
        maintenance_cost_analysis: "Medium ($30+). Bed sheets need replacement often.",
        who_should_avoid: "Beginners.",
        faq_section: [ { q: "Is it buggy?", a: "Firmware issues reported." }, { q: "Is it quiet?", a: "No." } ],
        accessories: [ { name: "PEI Plate", link: "https://amzn.to/4ctaUtW", desc: "Spare plate." }, { name: "Noctua Fan", link: "https://amzn.to/4rgiixg", desc: "Silence it." } ]
    },
    {
        id: "prusa-mini",
        category: "3d_printer",
        brand: "Prusa",
        model: "Mini+",
        price: "$429",
        release_year: 2019,
        evidence_count: 1200,
        confidence_level: "High",
        trend_badge: "Verified Stable",
        risk_score: 40,
        image: "images/prusa-mini.jpg",
        links: { solver: "https://amzn.to/3MEIa77", value: "https://amzn.to/3OcjO5b", antidote_1: "https://amzn.to/4awdywx", antidote_2: "https://amzn.to/4qG8n3c" },
        recommendations: { primary: { name: "Flashforge 5M", link: "https://amzn.to/3MEIa77", benefits: ["4x Faster", "Modern Tech", "Cheaper"] }, secondary: { name: "Sovol SV07", link: "https://amzn.to/3OcjO5b", reason: "Larger & Faster." } },
        description_summary: "Reliable but technologically dated. Slower than modern competitors.",
        risk_data: {
            long_term_risk: "Technological obsolescence. Slow speed.",
            maintenance_cost: "Low",
            issues: [
                { name: "Slow Speed", desc: "Slower than modern rivals.", severity: 2, frequency: 3 },
                { name: "Bowden Jam", desc: "Gap causes jams.", severity: 2, frequency: 2 },
                { name: "Price", desc: "Expensive for age.", severity: 1, frequency: 3 }
            ]
        },
        long_term_analysis: "Obsolescence risk. Paying premium for older tech.",
        maintenance_cost_analysis: "Low. Parts are standard.",
        who_should_avoid: "Value seekers and speed demons.",
        faq_section: [ { q: "Is it fast?", a: "No." }, { q: "Is it reliable?", a: "Yes." } ],
        accessories: [ { name: "Raspberry Pi", link: "https://amzn.to/4awdywx", desc: "OctoPrint" }, { name: "Heatbreak", link: "https://amzn.to/4qG8n3c", desc: "Fix jams." } ]
    },
    {
        id: "creality-k1",
        category: "3d_printer",
        brand: "Creality",
        model: "K1 (Gen 1)",
        price: "$399",
        release_year: 2023,
        evidence_count: 750,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 75,
        image: "images/creality-k1.jpg",
        links: { solver: "https://amzn.to/3Of1sjT", value: "https://amzn.to/3ZF3Oen", antidote_1: "https://amzn.to/4kyx6F0", antidote_2: "https://amzn.to/3ZCCYU7" },
        recommendations: { primary: { name: "Flashforge 5M Pro", link: "https://amzn.to/3Of1sjT", benefits: ["Reliable Nozzle", "Better QC", "Plug & Play"] }, secondary: { name: "QIDI Tech Q1", link: "https://amzn.to/3ZF3Oen", reason: "Heated Chamber." } },
        description_summary: "Gen 1 extruders reported to jam. VFA ripples on prints.",
        risk_data: {
            long_term_risk: "Extruder jams and hotend issues.",
            maintenance_cost: "High",
            issues: [
                { name: "Extruder Jam", desc: "Gen 1 extruder issues.", severity: 3, frequency: 3 },
                { name: "VFA Ripples", desc: "Vertical artifacts on walls.", severity: 1, frequency: 3 },
                { name: "Tube Melt", desc: "PTFE tube issues.", severity: 2, frequency: 2 }
            ]
        },
        long_term_analysis: "High failure rates in Gen 1 extruder reported. Upgrades needed.",
        maintenance_cost_analysis: "High ($40+). Upgrades often required.",
        who_should_avoid: "Users wanting plug-and-play.",
        faq_section: [ { q: "Does it jam?", a: "Gen 1 extruders have issues." }, { q: "Print quality?", a: "VFA ripples reported." } ],
        accessories: [ { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." }, { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "High speed." } ]
    },

    // ================= [NEW] 3D PRINTERS (6 Models) =================
    {
        id: "bambu-lab-x1-carbon",
        category: "3d_printer",
        brand: "Bambu Lab",
        model: "X1-Carbon",
        price: "$1,199",
        release_year: 2024,
        evidence_count: 5200,
        confidence_level: "High",
        trend_badge: "Trending Risk",
        risk_score: 65,
        image: "images/bambu-lab-x1-carbon.jpg",
        links: { solver: "https://amzn.to/placeholder_flashforge", value: "https://amzn.to/placeholder_k1c", antidote_1: "https://amzn.to/placeholder_plate", antidote_2: "https://amzn.to/placeholder_nozzle" },
        recommendations: { primary: { name: "Flashforge 5M Pro", link: "https://amzn.to/placeholder_flashforge", benefits: ["Amazon Available", "Enclosed CoreXY", "Fast"] }, secondary: { name: "Creality K1C", link: "https://amzn.to/placeholder_k1c", reason: "Cheaper CoreXY alternative." } },
        description_summary: "Proprietary ecosystem lock-in. Carbon rod wear.",
        risk_data: {
            long_term_risk: "Proprietary parts lock-in and rod wear.",
            maintenance_cost: "High",
            issues: [
                { name: "AMS Jam", severity: 2, frequency: 3, desc: "Filament retraction issues." },
                { name: "Carbon Wear", severity: 2, frequency: 1, desc: "Rods wear out." },
                { name: "Noise", severity: 1, frequency: 3, desc: "Loud fans." }
            ]
        },
        long_term_analysis: "Proprietary parts are expensive. Carbon rods are consumable.",
        maintenance_cost_analysis: "High. Parts are proprietary.",
        who_should_avoid: "Open-source advocates.",
        faq_section: [ { q: "Can I repair?", a: "Yes, proprietary parts." }, { q: "Is it loud?", a: "Yes." } ],
        accessories: [ { name: "Textured PEI Plate", link: "https://amzn.to/placeholder_plate", desc: "Essential upgrade." }, { name: "Hardened Nozzle", link: "https://amzn.to/placeholder_nozzle", desc: "For abrasive materials." } ]
    },
    {
        id: "prusa-mk4",
        category: "3d_printer",
        brand: "Prusa",
        model: "MK4",
        price: "$799",
        release_year: 2024,
        evidence_count: 2100,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 45,
        image: "images/prusa-mk4.jpg",
        links: { solver: "https://amzn.to/placeholder_kobra3", value: "https://amzn.to/placeholder_sv06", antidote_1: "https://amzn.to/placeholder_enclosure", antidote_2: "https://amzn.to/placeholder_sheet" },
        recommendations: { primary: { name: "Anycubic Kobra 3", link: "https://amzn.to/placeholder_kobra3", benefits: ["Multi-Color", "Much Cheaper", "Faster"] }, secondary: { name: "Sovol SV06", link: "https://amzn.to/placeholder_sv06", reason: "Budget clone." } },
        description_summary: "Reliable but expensive. Printed parts may creep over time.",
        risk_data: {
            long_term_risk: "Printed part creep. Slow ROI.",
            maintenance_cost: "Low",
            issues: [
                { name: "Slow Speed", severity: 2, frequency: 3, desc: "Slower than CoreXY." },
                { name: "Part Creep", severity: 1, frequency: 2, desc: "Printed parts age." },
                { name: "Price", severity: 2, frequency: 3, desc: "Expensive." }
            ]
        },
        long_term_analysis: "Extremely reliable. Structure uses printed parts.",
        maintenance_cost_analysis: "Low. Parts are standard.",
        who_should_avoid: "Speed demons.",
        faq_section: [ { q: "Is it fast?", a: "Decent." }, { q: "Is it reliable?", a: "Yes." } ],
        accessories: [ { name: "Enclosure", link: "https://amzn.to/placeholder_enc", desc: "For ABS/ASA." }, { name: "Satin Sheet", link: "https://amzn.to/placeholder_satin", desc: "Best surface." } ]
    },
    {
        id: "creality-ender-3-v3-ke",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 KE",
        price: "$279",
        release_year: 2025,
        evidence_count: 3000,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 75,
        image: "images/creality-ender-3-v3-ke.jpg",
        links: { solver: "https://amzn.to/placeholder_m5c", value: "https://amzn.to/placeholder_kobra2", antidote_1: "https://amzn.to/placeholder_swiss", antidote_2: "https://amzn.to/placeholder_rail" },
        recommendations: { primary: { name: "AnkerMake M5C", link: "https://amzn.to/placeholder_m5c", benefits: ["Sturdier Frame", "Better App", "Reliable"] }, secondary: { name: "Anycubic Kobra 2", link: "https://amzn.to/placeholder_kobra2", reason: "Sturdier frame." } },
        description_summary: "High speed budget printer. 'Blob of Death' leaks reported.",
        risk_data: {
            long_term_risk: "Hotend leakage and gantry sag.",
            maintenance_cost: "Low",
            issues: [
                { name: "Blob of Death", severity: 3, frequency: 2, desc: "Hotend leakage reported." },
                { name: "Gantry Sag", severity: 2, frequency: 3, desc: "Right side droops." },
                { name: "Software", severity: 1, frequency: 3, desc: "Nebula pad bugs." }
            ]
        },
        long_term_analysis: "Vibrations loosen parts. Hotend leaks possible.",
        maintenance_cost_analysis: "Low. Parts are cheap.",
        who_should_avoid: "People who hate tinkering.",
        faq_section: [ { q: "Beginner friendly?", a: "No, requires tuning." }, { q: "Does it leak?", a: "Watch nozzle." } ],
        accessories: [ { name: "Micro Swiss Hotend", link: "https://amzn.to/placeholder_swiss", desc: "Prevent leaks." }, { name: "Linear Rail Kit", link: "https://amzn.to/placeholder_rail", desc: "Fix sag." } ]
    },
    {
        id: "anycubic-kobra-2-max",
        category: "3d_printer",
        brand: "Anycubic",
        model: "Kobra 2 Max",
        price: "$499",
        release_year: 2025,
        evidence_count: 850,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 70,
        image: "images/anycubic-kobra-2-max.jpg",
        links: { solver: "https://amzn.to/placeholder_neptune", value: "https://amzn.to/placeholder_artisan", antidote_1: "https://amzn.to/placeholder_sensor", antidote_2: "https://amzn.to/placeholder_belt" },
        recommendations: { primary: { name: "Elegoo Neptune 4 Max", link: "https://amzn.to/placeholder_neptune", benefits: ["Klipper Native", "Better Fans"] }, secondary: { name: "Snapmaker Artisan", link: "https://amzn.to/placeholder_artisan", reason: "Reliable large scale." } },
        description_summary: "Large bed inertia causes layer shifts. Proprietary nozzle.",
        risk_data: {
            long_term_risk: "Layer shifts and proprietary nozzle.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Layer Shift", severity: 3, frequency: 2, desc: "Y-axis motor skips." },
                { name: "Proprietary Nozzle", severity: 2, frequency: 3, desc: "Cannot use generic." },
                { name: "Bed Warping", severity: 2, frequency: 2, desc: "Large bed flatness." }
            ]
        },
        long_term_analysis: "Heavy bed wears belts. Proprietary nozzle supply.",
        maintenance_cost_analysis: "Medium. Large parts cost more shipping.",
        who_should_avoid: "Users printing small detailed items.",
        faq_section: [ { q: "Is it precise?", a: "No, better for props." }, { q: "Is bed flat?", a: "Rarely perfectly flat." } ],
        accessories: [ { name: "Filament Sensor", link: "https://amzn.to/placeholder_sensor", desc: "For long prints." }, { name: "Belt Tensioner", link: "https://amzn.to/placeholder_belt", desc: "Prevent slips." } ]
    },
    {
        id: "ankermake-m5",
        category: "3d_printer",
        brand: "AnkerMake",
        model: "M5",
        price: "$399",
        release_year: 2024,
        evidence_count: 900,
        confidence_level: "Medium",
        trend_badge: null,
        risk_score: 60,
        image: "images/ankermake-m5.jpg",
        links: { solver: "https://amzn.to/placeholder_k1", value: "https://amzn.to/placeholder_prusa", antidote_1: "https://amzn.to/placeholder_hardened", antidote_2: "https://amzn.to/placeholder_mod" },
        recommendations: { primary: { name: "Creality K1", link: "https://amzn.to/placeholder_k1", benefits: ["Enclosed", "Faster", "CoreXY"] }, secondary: { name: "Prusa Mini Clone", link: "https://amzn.to/placeholder_prusa", reason: "Standard parts." } },
        description_summary: "Proprietary lock-in. Wheel wear reported.",
        risk_data: {
            long_term_risk: "Wheel wear and proprietary hotend.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Wheel Dust", severity: 2, frequency: 3, desc: "Wheels wear at high speed." },
                { name: "AI Gimmick", severity: 1, frequency: 3, desc: "False positives reported." },
                { name: "Hotend Clog", severity: 2, frequency: 2, desc: "PTFE tube gap." }
            ]
        },
        long_term_analysis: "Rubber wheels wear out. Proprietary hotend.",
        maintenance_cost_analysis: "Medium. Wheels need replacing.",
        who_should_avoid: "Modders.",
        faq_section: [ { q: "Does AI work?", a: "Mixed reports." }, { q: "Is it fast?", a: "Yes." } ],
        accessories: [ { name: "Hardened Nozzle", link: "https://amzn.to/placeholder_hardened", desc: "Abrasive filament." }, { name: "Linear Rail Mod", link: "https://amzn.to/placeholder_mod", desc: "Fix wheel wear." } ]
    },
    {
        id: "formlabs-form-4",
        category: "3d_printer",
        brand: "Formlabs",
        model: "Form 4",
        price: "$4,499",
        release_year: 2025,
        evidence_count: 120,
        confidence_level: "High",
        trend_badge: null,
        risk_score: 85,
        image: "images/formlabs-form-4.jpg",
        links: { solver: "https://amzn.to/placeholder_gktwo", value: "https://amzn.to/placeholder_phenom", antidote_1: "https://amzn.to/placeholder_wash", antidote_2: "https://amzn.to/placeholder_tank" },
        recommendations: { primary: { name: "Uniformation GKtwo", link: "https://amzn.to/placeholder_gktwo", benefits: ["Open Resin System", "Much Cheaper"] }, secondary: { name: "Peopoly Phenom", link: "https://amzn.to/placeholder_phenom", reason: "Larger volume." } },
        description_summary: "Ecosystem lock-in and high consumable costs.",
        risk_data: {
            long_term_risk: "Ecosystem lock-in and consumable costs.",
            maintenance_cost: "Very High",
            issues: [
                { name: "Resin DRM", severity: 3, frequency: 3, desc: "Cartridges chipped." },
                { name: "Tank Wear", severity: 2, frequency: 3, desc: "Tanks need replacing." },
                { name: "Spill Risk", severity: 3, frequency: 1, desc: "Optics ruin if spill occurs." }
            ]
        },
        long_term_analysis: "Consumable costs are high. Closed ecosystem.",
        maintenance_cost_analysis: "Very High. Optics cleaning expensive.",
        who_should_avoid: "Cost-sensitive users.",
        faq_section: [ { q: "Other resin?", a: "Difficult." }, { q: "Reliable?", a: "Yes, but costly." } ],
        accessories: [ { name: "Form Wash", link: "https://amzn.to/placeholder_wash", desc: "Cleaning." }, { name: "Spare Resin Tank", link: "https://amzn.to/placeholder_tank", desc: "Consumable." } ]
    }
];
