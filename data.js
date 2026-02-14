// data.js - v32.0 STABLE IMAGES & DESCRIPTIONS
const productsDB = [
    // --- LAPTOPS ---
    {
        id: "dell-xps-13-plus",
        category: "laptop",
        brand: "Dell",
        model: "XPS 13 Plus",
        price: "$1,399",
        release_year: 2023,
        evidence_count: 420,
        // 更稳定的图片链接
        image: "https://images.unsplash.com/photo-1593642632823-8f7856677741?q=80&w=800&auto=format&fit=crop",
        links: {
            solver: "https://amzn.to/4ax1iM6",
            value: "https://amzn.to/4aLNfUh",
            antidote_1: "https://amzn.to/4kD8XgK",
            antidote_2: "https://amzn.to/4kyVXsv"
        },
        recommendations: {
            primary: { name: "MacBook Air M2", link: "https://amzn.to/4ax1iM6", benefits: ["18h Battery", "Real Keys"] },
            secondary: { name: "Dell XPS 13", link: "https://amzn.to/4aLNfUh", reason: "Classic layout." }
        },
        risk_data: {
            long_term_risk: "Capacitive touch bar fails.",
            maintenance_cost: "High",
            issues: [
                { name: "Dongle Hell", desc: "No headphone jack, requires adapters.", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { name: "Touch Bar Freeze", desc: "Function keys stop responding.", severity: 3, frequency: 3, long_term_factor: 1.5 },
                { name: "Battery Drain", desc: "Lasts only 5 hours.", severity: 2, frequency: 3, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "USB-C Hub", link: "https://amzn.to/4kD8XgK", desc: "Essential." },
            { name: "Power Bank", link: "https://amzn.to/4kyVXsv", desc: "Backup." }
        ]
    },
    {
        id: "lenovo-loq-15",
        category: "laptop",
        brand: "Lenovo",
        model: "LOQ 15",
        price: "$899",
        release_year: 2024,
        evidence_count: 850,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop",
        links: {
            solver: "https://amzn.to/4bS0yDI",
            value: "https://amzn.to/4qymUhm",
            antidote_1: "https://amzn.to/3OaX19O",
            antidote_2: "https://amzn.to/4kv8sFf"
        },
        recommendations: {
            primary: { name: "Acer Nitro 16", link: "https://amzn.to/4bS0yDI", benefits: ["Better Cooling"] },
            secondary: { name: "ASUS TUF F15", link: "https://amzn.to/4qymUhm", reason: "Durable." }
        },
        risk_data: {
            long_term_risk: "Motherboard failure on Intel HX models.",
            maintenance_cost: "Total Loss",
            issues: [
                { name: "Motherboard Dead", desc: "VRM failure kills laptop.", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { name: "Overheating", desc: "Hits 95C easily.", severity: 3, frequency: 3, long_term_factor: 1.5 },
                { name: "Battery Drain", desc: "Drains while plugged in.", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "Laptop Stand", link: "https://amzn.to/3OaX19O", desc: "For airflow." },
            { name: "Cooling Pad", link: "https://amzn.to/4kv8sFf", desc: "Active cooling." }
        ]
    },
    // --- 3D PRINTERS ---
    {
        id: "ender-3-v3-se",
        category: "3d_printer",
        brand: "Creality",
        model: "Ender 3 V3 SE",
        price: "$199",
        release_year: 2023,
        evidence_count: 2400,
        image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=800&auto=format&fit=crop",
        links: {
            solver: "https://amzn.to/4rO30zE",
            value: "https://amzn.to/4bV0DGS",
            antidote_1: "https://amzn.to/4avRTV1",
            antidote_2: "https://amzn.to/4rieR9m"
        },
        recommendations: {
            primary: { name: "Flashforge 5M", link: "https://amzn.to/4rO30zE", benefits: ["CoreXY Speed", "Reliable"] },
            secondary: { name: "Sovol SV06", link: "https://amzn.to/4bV0DGS", reason: "Linear Rails." }
        },
        risk_data: {
            long_term_risk: "Gantry wobble degrades quality.",
            maintenance_cost: "Medium",
            issues: [
                { name: "Gantry Wobble", desc: "Z-axis instability.", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { name: "Gear Wear", desc: "Plastic gears break.", severity: 2, frequency: 2, long_term_factor: 1.5 },
                { name: "Spaghetti", desc: "Print failure mess.", severity: 2, frequency: 2, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "CR Touch", link: "https://amzn.to/4avRTV1", desc: "Leveling fix." },
            { name: "Filament Dryer", link: "https://amzn.to/4rieR9m", desc: "Better prints." }
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
        image: "https://images.unsplash.com/photo-1581092921461-eab6245b0262?q=80&w=800&auto=format&fit=crop",
        links: {
            solver: "https://amzn.to/3Of1sjT",
            value: "https://amzn.to/3ZF3Oen",
            antidote_1: "https://amzn.to/4kyx6F0",
            antidote_2: "https://amzn.to/3ZCCYU7"
        },
        recommendations: {
            primary: { name: "Flashforge 5M Pro", link: "https://amzn.to/3Of1sjT", benefits: ["Quick Swap Nozzle"] },
            secondary: { name: "QIDI Tech Q1", link: "https://amzn.to/3ZF3Oen", reason: "Heated Chamber." }
        },
        risk_data: {
            long_term_risk: "Extruder jams frequently.",
            maintenance_cost: "High",
            issues: [
                { name: "Extruder Jam", desc: "Filament slips.", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { name: "VFA Ripples", desc: "Artifacts on walls.", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { name: "Tube Melt", desc: "PTFE tube melts.", severity: 2, frequency: 2, long_term_factor: 1.5 }
            ]
        },
        accessories: [
            { name: "Extruder Kit", link: "https://amzn.to/4kyx6F0", desc: "Essential fix." },
            { name: "Hyper PLA", link: "https://amzn.to/3ZCCYU7", desc: "Speed filament." }
        ]
    }
    // 注意：我只放了4个示例以防复制出错。
    // 请确认这4个能完美显示后，再把其他的加回来。
    // 这次我们先确保这4个不白屏！
];
