// data.js
const productsDB = [
    // --- LAPTOPS ---
    {
        model: "XPS 13 Plus (9320)",
        brand: "Dell",
        category: "laptop",
        price_range: "$1,399",
        release_year: 2023,
        // 变现核心：推荐
        recommendations: {
            // 首推 (High Margin / High Conversion)
            primary: { 
                name: "MacBook Air M2", 
                link: "https://amzn.to/4ax1iM6",
                benefits: ["18-Hour Battery Life", "Physical Function Keys", "Zero Fan Noise"]
            },
            // 次推 (Budget / Backup)
            secondary: { 
                name: "Dell XPS 13 (9315)", 
                link: "https://amzn.to/4aLNfUh",
                reason: "Classic reliable layout, $400 cheaper."
            }
        },
        // 风险数据
        risk_data: {
            long_term_risk: "Capacitive touch bar failure requires entire deck replacement ($300+).",
            maintenance_cost: "High. Battery is buried under glued components.",
            issues: [
                { type: "Design", name: "Dongle Hell", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Hardware", name: "Touch Bar Freeze", severity: 3, frequency: 2, long_term_factor: 1.5 },
                { type: "Battery", name: "Battery Degradation", severity: 2, frequency: 3, long_term_factor: 1.2 }
            ]
        },
        // 外设解药
        accessories: [
            { name: "USB-C Hub", link: "https://amzn.to/4kD8XgK", reason: "Required for basic usability." }
        ],
        evidence_count: 420
    },
    {
        model: "Blade 15 (2024)",
        brand: "Razer",
        category: "laptop",
        price_range: "$2,499",
        release_year: 2024,
        recommendations: {
            primary: { 
                name: "ASUS ROG Zephyrus G16", 
                link: "https://amzn.to/4aoclHy", 
                benefits: ["Runs 15°C Cooler", "Better Airflow Design", "Standard Warranty"]
            },
            secondary: { 
                name: "Razer Blade 14 (AMD)", 
                link: "https://amzn.to/3OCX12o",
                reason: "AMD chips produce less heat, reducing bloat risk."
            }
        },
        risk_data: {
            long_term_risk: "Battery swelling (Spicy Pillow) is almost guaranteed within 18-24 months due to chassis heat.",
            maintenance_cost: "Very High. Razer support is notoriously slow.",
            issues: [
                { type: "Safety", name: "Battery Bloat", severity: 3, frequency: 3, long_term_factor: 2.0 },
                { type: "Thermal", name: "Surface Lava", severity: 2, frequency: 3, long_term_factor: 1.0 },
                { type: "Support", name: "Bad RMA", severity: 2, frequency: 2, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "IETS GT600 Cooler", link: "https://amzn.to/46IyRJZ", reason: "Mandatory to prevent overheating." }
        ],
        evidence_count: 610
    },
    // --- 3D PRINTERS ---
    {
        model: "Ender 3 V3 SE",
        brand: "Creality",
        category: "3d_printer",
        price_range: "$199",
        release_year: 2023,
        recommendations: {
            primary: { 
                name: "Flashforge Adventurer 5M", 
                link: "https://amzn.to/4rO30zE", 
                benefits: ["CoreXY High Speed", "Full Auto-Leveling", "Plug & Play"]
            },
            secondary: { 
                name: "Sovol SV06", 
                link: "https://amzn.to/4bV0DGS",
                reason: "Linear rails outlast Ender's plastic wheels."
            }
        },
        risk_data: {
            long_term_risk: "Gantry sag and extruder gear wear will degrade print quality after 500 hours.",
            maintenance_cost: "Medium. Parts are cheap but require constant labor.",
            issues: [
                { type: "Mechanical", name: "Z-Wobble", severity: 2, frequency: 3, long_term_factor: 1.2 },
                { type: "Parts", name: "Gear Wear", severity: 2, frequency: 2, long_term_factor: 1.5 },
                { type: "QA", name: "Bed Warp", severity: 2, frequency: 3, long_term_factor: 1.0 }
            ]
        },
        accessories: [
            { name: "CR Touch Kit", link: "https://amzn.to/4avRTV1", reason: "Fixes leveling headaches." }
        ],
        evidence_count: 2400
    },
    {
        model: "K1 (Gen 1)",
        brand: "Creality",
        category: "3d_printer",
        price_range: "$399",
        release_year: 2023,
        recommendations: {
            primary: { 
                name: "Flashforge 5M Pro", 
                link: "https://amzn.to/3Of1sjT", 
                benefits: ["Enclosed & Filtered", "Quick Swap Nozzle", "Reliable Extruder"]
            },
            secondary: { 
                name: "QIDI Tech Q1 Pro", 
                link: "https://amzn.to/3ZF3Oen",
                reason: "Active heated chamber for ABS."
            }
        },
        risk_data: {
            long_term_risk: "Gen 1 extruder design is fundamentally flawed. PTFE tube inside hotend melts.",
            maintenance_cost: "High. You will replace the extruder eventually.",
            issues: [
                { type: "Mechanical", name: "Extruder Jam", severity: 3, frequency: 3, long_term_factor: 1.5 },
                { type: "Quality", name: "VFA Ripples", severity: 1, frequency: 3, long_term_factor: 1.0 },
                { type: "Design", name: "Tube Melt", severity: 2, frequency: 2, long_term_factor: 1.2 }
            ]
        },
        accessories: [
            { name: "Extruder Upgrade Kit", link: "https://amzn.to/4kyx6F0", reason: "The only permanent fix." }
        ],
        evidence_count: 780
    }
];
