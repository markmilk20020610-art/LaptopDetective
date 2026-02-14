// data.js
const productsDB = [
    // --- LAPTOPS ---
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus (9320)",
        price_range: "$1,399",
        release_year: 2023,
        // 变现链接
        links: {
            main_affiliate: "https://amzn.to/4kD8XgK", // 您的新链接
            solver_affiliate: "https://amzn.to/4ax1iM6", // MacBook Air
            value_affiliate: "https://amzn.to/4aLNfUh",  // Old XPS
            antidote_1: "https://amzn.to/4kD8XgK",
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        // 推荐替代品
        recommendations: {
            solver: { name: "MacBook Air M2", reason: "15+ hours battery. Real physical keys. Zero frustration." },
            value: { name: "Dell XPS 13 (9315)", reason: "Traditional layout, reliable function keys, $400 cheaper." }
        },
        // 故障数据 (Severity: 1-10, Frequency: 1-10)
        issues: [
            { type: "Design Flaw", name: "Dongle Hell", desc: "No headphone jack. Cannot charge & listen.", severity: 6, frequency: 10 },
            { type: "Quality Control", name: "Touch Bar Freeze", desc: "Capacitive row stops responding after sleep.", severity: 8, frequency: 5 },
            { type: "Battery", name: "Battery Anxiety", desc: "Barely lasts 5 hours on mixed usage.", severity: 7, frequency: 9 }
        ],
        persona: "Music Producers & Travelers"
    },
    // --- 3D PRINTERS ---
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price_range: "$199",
        release_year: 2023,
        links: {
            main_affiliate: "https://amzn.to/4avRTV1",
            solver_affiliate: "https://amzn.to/4rO30zE", // Flashforge
            value_affiliate: "https://amzn.to/4bV0DGS", // Sovol
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            solver: { name: "Flashforge Adventurer 5M", reason: "CoreXY speed, full auto-leveling, no tinkering needed." },
            value: { name: "Sovol SV06", reason: "Linear rails (durable) vs plastic wheels (wear out)." }
        },
        issues: [
            { type: "Mechanical", name: "Gantry Wobble", desc: "Z-axis wobble causes banding lines.", severity: 6, frequency: 8 },
            { type: "Safety", name: "Spaghetti Monster", desc: "No AI detection. Fails create massive plastic blobs.", severity: 5, frequency: 7 },
            { type: "Maintenance", name: "Extruder Gear Wear", desc: "Plastic gears wear out in 3 months.", severity: 7, frequency: 6 }
        ],
        persona: "Parents & Busy Professionals"
    }
    // ... 更多产品可按此格式添加
];