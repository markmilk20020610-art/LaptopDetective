// app.js - v41.0 MOBILE FIRST TOOL & CALCULATOR EDITION

let currentSort = 'risk-desc';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsDB === 'undefined' || !Array.isArray(productsDB)) {
        document.body.innerHTML = '<div style="color:white;text-align:center;padding:50px;">❌ Error: data.js not loaded.</div>';
        return;
    }
    console.log("App Started. Products loaded:", productsDB.length);
    initRouter();
    window.addEventListener('hashchange', initRouter);
});

function initRouter() {
    const hash = window.location.hash;
    if (hash.startsWith('#product/')) {
        const modelId = hash.replace('#product/', '');
        renderProductPage(modelId);
    } else {
        renderHomePage();
    }
}

function imgError(image) {
    image.onerror = "";
    image.src = "https://placehold.co/600x400/1e293b/475569?text=Image+Missing";
    return true;
}

// --- HELPER FUNCTIONS ---
function parsePrice(str) {
    if (!str) return 0;
    const match = str.match(/(\d+)/); 
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
}

function getRiskTrend(score, frequency) {
    if (score > 80) return { text: 'Risk Trending ↑', color: 'text-red-400 border-red-400', icon: 'fa-arrow-trend-up' };
    if (frequency >= 3) return { text: 'Complaints Spiking', color: 'text-orange-400 border-orange-400', icon: 'fa-fire' };
    return { text: 'Stable Risk →', color: 'text-blue-400 border-blue-400', icon: 'fa-minus' };
}

function getSortedProducts(products) {
    let sorted = [...products];
    switch (currentSort) {
        case 'risk-desc': return sorted.sort((a, b) => RiskCalculator.calculate(b.risk_data.issues) - RiskCalculator.calculate(a.risk_data.issues));
        case 'risk-asc': return sorted.sort((a, b) => RiskCalculator.calculate(a.risk_data.issues) - RiskCalculator.calculate(b.risk_data.issues));
        case 'price-asc': return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        case 'price-desc': return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        default: return sorted;
    }
}

function getDbStats() {
    const totalModels = productsDB.length;
    const totalIssues = productsDB.reduce((acc, p) => acc + (p.risk_data.issues ? p.risk_data.issues.length : 0), 0);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { totalModels, totalIssues, date };
}

function getTopLists() {
    const laptops = productsDB.filter(p => p.category === 'laptop').map(p => ({...p, score: RiskCalculator.calculate(p.risk_data.issues)}));
    const printers = productsDB.filter(p => p.category === '3d_printer').map(p => ({...p, score: RiskCalculator.calculate(p.risk_data.issues)}));
    const riskyLaptops = [...laptops].sort((a, b) => b.score - a.score).slice(0, 3);
    const riskyPrinters = [...printers].sort((a, b) => b.score - a.score).slice(0, 3);
    return { riskyLaptops, riskyPrinters };
}

// --- RENDER HOME PAGE ---
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return;

    const stats = getDbStats();
    const { riskyLaptops, riskyPrinters } = getTopLists();

    app.innerHTML = `
        <div class="bg-slate-950 border-b border-slate-800 py-3 px-4">
            <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
                <span><i class="fa-solid fa-calculator mr-2 text-blue-500"></i> Repair vs Replace Tool</span>
                <span class="hidden md:inline"><i class="fa-solid fa-database mr-2 text-slate-600"></i> ${stats.totalModels} Models</span>
                <span><i class="fa-solid fa-clock mr-2 text-emerald-500"></i> Updated: ${stats.date}</span>
            </div>
        </div>

        <div class="bg-slate-900 py-12 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Repair or <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Replace?</span>
            </h1>
            <p class="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                A data-driven calculator to decide if your hardware is worth fixing.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-6">
                <input type="text" placeholder="Search Model (e.g. XPS, Ender)..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500"></i>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-4 text-sm z-10 relative">
                <div class="flex items-center justify-center gap-2">
                    <span class="text-slate-500 font-bold text-xs uppercase">Sort:</span>
                    <select onchange="changeSort(this.value)" class="bg-slate-800 text-white text-xs p-2 rounded border border-slate-700 outline-none cursor-pointer">
                        <option value="risk-desc">Highest Risk</option>
                        <option value="risk-asc">Most Reliable</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
                <div class="flex items-center justify-center gap-4 text-slate-500 font-bold">
                    <span class="text-slate-700">|</span>
                    <button onclick="handleSearch('laptop')" class="hover:text-white transition"><i class="fa-solid fa-laptop mr-1"></i> Laptops</button>
                    <button onclick="handleSearch('printer')" class="hover:text-white transition"><i class="fa-solid fa-print mr-1"></i> Printers</button>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div class="lg:col-span-3">
                <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${getSortedProducts(productsDB).map(p => createCard(p)).join('')}
                </div>
            </div>

            <div class="hidden lg:block lg:col-span-1 space-y-8">
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h3 class="text-red-400 font-bold text-xs uppercase mb-4 flex items-center"><i class="fa-solid fa-laptop mr-2"></i> Risky Laptops</h3>
                    <ul class="space-y-3">
                        ${riskyLaptops.map(p => `
                            <li onclick="window.location.hash='product/${p.id}'" class="cursor-pointer hover:bg-slate-800 p-2 rounded transition flex justify-between items-center group">
                                <div>
                                    <span class="text-slate-300 text-xs font-bold group-hover:text-white block">${p.model}</span>
                                    <span class="text-[9px] text-red-500 uppercase font-bold"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Trending</span>
                                </div>
                                <span class="bg-red-500/20 text-red-400 text-[10px] font-black px-1.5 py-0.5 rounded">${p.score}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h3 class="text-orange-400 font-bold text-xs uppercase mb-4 flex items-center"><i class="fa-solid fa-print mr-2"></i> Risky Printers</h3>
                    <ul class="space-y-3">
                        ${riskyPrinters.map(p => `
                            <li onclick="window.location.hash='product/${p.id}'" class="cursor-pointer hover:bg-slate-800 p-2 rounded transition flex justify-between items-center group">
                                <div>
                                    <span class="text-slate-300 text-xs font-bold group-hover:text-white block">${p.model}</span>
                                    <span class="text-[9px] text-orange-500 uppercase font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>High Fail Rate</span>
                                </div>
                                <span class="bg-orange-500/20 text-orange-400 text-[10px] font-black px-1.5 py-0.5 rounded">${p.score}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-slate-950 py-12 border-t border-slate-900 text-center px-4">
            <div class="max-w-3xl mx-auto">
                <p class="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Transparency</p>
                <p class="text-sm text-slate-400">TechDetective is a community-driven decision tool. Data updated daily.</p>
            </div>
        </div>
    `;
}

// --- RENDER PRODUCT PAGE (MOBILE OPTIMIZED) ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    
    // Decision Logic
    const devicePrice = parsePrice(p.price);
    const repairCostHigh = parsePrice(p.maintenance_cost_analysis); 
    const repairRatio = devicePrice > 0 ? (repairCostHigh / devicePrice) : 0;
    
    let verdict = "REPAIRABLE";
    let vColor = "bg-emerald-600";
    let vReason = "Cost < 30% of value";
    
    if (repairRatio > 0.5 || p.risk_data.maintenance_cost === 'Impossible' || p.risk_data.maintenance_cost === 'Total Loss') {
        verdict = "REPLACE";
        vColor = "bg-red-600";
        vReason = "Repair > 50% value";
    } else if (repairRatio > 0.3) {
        verdict = "BORDERLINE";
        vColor = "bg-orange-600";
        vReason = "High repair cost";
    }

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="fixed top-0 left-0 w-full z-50 ${vColor} text-white px-4 py-3 shadow-2xl flex justify-between items-center md:hidden">
            <div class="flex flex-col">
                <span class="text-[10px] font-bold uppercase opacity-80">Verdict</span>
                <span class="text-lg font-black leading-none">${verdict}</span>
            </div>
            <div class="text-right">
                <span class="text-[10px] font-bold uppercase opacity-80">Score</span>
                <span class="text-lg font-black leading-none block">${score}</span>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 py-8 fade-in mt-12 md:mt-0">
            <button onclick="window.location.hash=''" class="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center"><i class="fa-solid fa-arrow-left mr-2"></i> Back to Search</button>

            <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mb-6 flex flex-col md:flex-row">
                <div class="md:w-1/3 bg-slate-950 relative min-h-[200px]">
                    <img src="${p.image}" onerror="imgError(this)" class="absolute inset-0 w-full h-full object-cover opacity-80">
                </div>
                <div class="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">${p.brand}</span>
                        <div class="text-right hidden md:block">
                            <span class="text-4xl font-black ${vColor.replace('bg-', 'text-')}">${score}</span>
                        </div>
                    </div>
                    <h1 class="text-2xl md:text-3xl font-black text-white mb-2 leading-none">${p.model}</h1>
                    <p class="text-sm text-slate-400">${p.description_summary}</p>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div class="col-span-2 md:col-span-1 bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col justify-center items-center text-center">
                    <div class="text-xs text-slate-500 font-bold uppercase mb-1">Recommendation</div>
                    <div class="text-2xl font-black ${vColor.replace('bg-', 'text-')}">${verdict}</div>
                    <div class="text-[10px] text-slate-400">${vReason}</div>
                </div>
                <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                    <div class="text-[10px] text-slate-500 font-bold uppercase">Repair Cost</div>
                    <div class="text-lg text-white font-bold">${p.maintenance_cost_analysis ? '$' + repairCostHigh : '?'}</div>
                </div>
                <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                    <div class="text-[10px] text-slate-500 font-bold uppercase">Value</div>
                    <div class="text-lg text-white font-bold">${p.price}</div>
                </div>
            </div>

            <div class="bg-gradient-to-r from-emerald-900/60 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-8 relative shadow-lg text-center">
                <h2 class="text-lg font-black text-white mb-1">Switch to: ${p.recommendations.primary.name}</h2>
                <p class="text-xs text-slate-400 mb-4">Fixes ${issues.length > 0 ? issues[0].name.toLowerCase() : 'issues'} permanently.</p>
                
                <a href="${p.links.solver}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl shadow-lg transition-all active:scale-95">
                    <span class="block text-lg font-black uppercase tracking-widest">Switch Before Failure <i class="fa-solid fa-arrow-right ml-2"></i></span>
                </a>
                <p class="text-[10px] text-slate-500 mt-2 font-medium">Based on long-term failure patterns • Affiliate Link</p>
            </div>

            <div class="mb-8">
                <h3 class="text-slate-400 font-bold text-xs uppercase mb-3 ml-1">Failure Timeline</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="bg-slate-900 p-4 rounded-xl border-l-4 border-emerald-500">
                        <div class="text-[10px] font-bold text-emerald-500 uppercase mb-1">Month 0–6</div>
                        <div class="text-white text-sm font-bold">Stable Period</div>
                        <div class="text-xs text-slate-500 mt-1">Minor driver/firmware bugs only.</div>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl border-l-4 border-orange-500">
                        <div class="text-[10px] font-bold text-orange-500 uppercase mb-1">Month 6–12</div>
                        <div class="text-white text-sm font-bold">Warning Signs</div>
                        <div class="text-xs text-slate-500 mt-1">Thermal throttling, fan noise, or cosmetic wear begins.</div>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl border-l-4 border-red-500">
                        <div class="text-[10px] font-bold text-red-500 uppercase mb-1">Month 12+</div>
                        <div class="text-white text-sm font-bold">Failure Zone</div>
                        <div class="text-xs text-slate-500 mt-1">High risk of ${issues.length > 0 ? issues[0].name : 'component failure'} requiring repair.</div>
                    </div>
                </div>
            </div>

            ${p.long_term_analysis ? `<div class="mb-8"><h3 class="text-white font-bold mb-3 flex items-center"><i class="fa-solid fa-microscope text-blue-500 mr-2"></i> Analysis</h3><p class="text-slate-300 text-sm leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-800">${p.long_term_analysis}</p></div>` : ''}

            <div class="bg-slate-900/50 rounded-xl border border-slate-800 p-6 mb-8">
                <h3 class="text-slate-200 font-bold mb-4">Known Failures</h3>
                <div class="space-y-4">
                    ${issues.map(i => `<div class="flex gap-4 p-3 bg-slate-900 rounded border border-slate-800"><div class="mt-1 w-2 h-2 rounded-full ${i.severity >= 3 ? 'bg-red-500' : 'bg-yellow-500'}"></div><div><h4 class="text-white font-bold text-sm">${i.name}</h4><p class="text-slate-400 text-xs mt-1">${i.desc}</p></div></div>`).join('')}
                </div>
            </div>

            ${p.accessories && p.accessories.length > 0 ? `
            <div class="mb-12">
                <h3 class="text-slate-400 font-bold text-xs uppercase mb-3 ml-1">Required Parts</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${p.accessories.map(acc => `
                    <a href="${acc.link}" target="_blank" class="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-yellow-500"><i class="fa-solid fa-wrench"></i></div>
                        <div class="flex-grow">
                            <div class="text-white font-bold text-sm">${acc.name}</div>
                            <div class="text-slate-500 text-xs">${acc.desc}</div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-slate-600 group-hover:text-white"></i>
                    </a>
                    `).join('')}
                </div>
            </div>` : ''}
        </div>
    `;
}

function createCard(p) {
    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const trend = getRiskTrend(score, issues.length > 0 ? issues[0].frequency : 1);

    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full group hover:border-blue-500 transition-all">
            <div class="h-40 bg-slate-950 relative overflow-hidden">
                <img src="${p.image}" onerror="imgError(this)" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div class="absolute top-2 right-2 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded border ${level.border} backdrop-blur-md">
                    ${score}
                </div>
                <div class="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur rounded text-[9px] text-white font-bold border border-white/10">
                    <i class="fa-solid ${trend.icon} ${trend.text.includes('Spiking') ? 'text-orange-400' : 'text-blue-400'} mr-1"></i> ${trend.text}
                </div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">${p.brand}</div>
                    <div class="text-[10px] font-bold text-slate-400">${p.price}</div>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 leading-tight">${p.model}</h3>
            </div>
        </div>
    `;
}

function changeSort(val) { currentSort = val; handleSearch(document.querySelector('input[type="text"]').value || ''); }
function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; 
    const filtered = productsDB.filter(p => p.model.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || (p.category && p.category.toLowerCase().includes(term)));
    const sorted = getSortedProducts(filtered);
    grid.innerHTML = sorted.length ? sorted.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results found.</p>';
}
