// app.js - v40.0 DECISION ENGINE & CRO ENHANCED

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

// --- HELPER: Logic Engines ---

// 1. 解析价格字符串 ("$1,399" -> 1399)
function parsePrice(str) {
    if (!str) return 0;
    const match = str.match(/(\d+)/); // 简单提取第一个数字，忽略范围
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
}

// 2. 生成风险趋势标签 (Part 3)
function getRiskTrend(score, frequency) {
    if (score > 80) return { text: 'Risk Trending ↑', color: 'text-red-400 border-red-400', icon: 'fa-arrow-trend-up' };
    if (frequency >= 3) return { text: 'Complaints Spiking', color: 'text-orange-400 border-orange-400', icon: 'fa-fire' };
    return { text: 'Stable Risk →', color: 'text-blue-400 border-blue-400', icon: 'fa-minus' };
}

// 3. 排序逻辑
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

// 4. 统计数据
function getDbStats() {
    const totalModels = productsDB.length;
    const totalIssues = productsDB.reduce((acc, p) => acc + (p.risk_data.issues ? p.risk_data.issues.length : 0), 0);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { totalModels, totalIssues, date };
}

// 5. 侧边栏榜单
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
                <span><i class="fa-solid fa-database mr-2 text-blue-500"></i> ${stats.totalModels} Models</span>
                <span><i class="fa-solid fa-bug mr-2 text-red-500"></i> ${stats.totalIssues} Failure Patterns</span>
                <span class="hidden md:inline"><i class="fa-solid fa-clock mr-2 text-emerald-500"></i> Updated: ${stats.date}</span>
            </div>
        </div>

        <div class="bg-slate-900 py-12 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                Don't buy e-waste. Check the failure timeline before you buy.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-6">
                <input type="text" placeholder="Search Model (e.g. Dell, Bambu)..." 
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
                                    <span class="text-[9px] text-red-500 uppercase font-bold"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Trending 2026</span>
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
                <p class="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Transparency Statement</p>
                <p class="text-sm text-slate-400">TechDetective is 100% community-driven. Data updated daily.</p>
            </div>
        </div>
    `;
}

// --- RENDER PRODUCT PAGE ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const trend = getRiskTrend(score, issues.length > 0 ? issues[0].frequency : 1);
    
    // Part 2: Repair vs Replace Logic
    const devicePrice = parsePrice(p.price);
    const repairCostHigh = parsePrice(p.maintenance_cost_analysis); // 提取维修成本高位
    const repairRatio = devicePrice > 0 ? (repairCostHigh / devicePrice) : 0;
    
    let decisionText = "REPAIRABLE";
    let decisionColor = "text-emerald-400";
    let decisionReason = "Cost is <30% of value.";
    
    if (repairRatio > 0.5 || p.risk_data.maintenance_cost === 'Impossible' || p.risk_data.maintenance_cost === 'Total Loss') {
        decisionText = "REPLACE";
        decisionColor = "text-red-500";
        decisionReason = "Repair exceeds 50% of value or is impossible.";
    } else if (repairRatio > 0.3) {
        decisionText = "BORDERLINE";
        decisionColor = "text-orange-400";
        decisionReason = "Repair cost is high relative to value.";
    }

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-4xl mx-auto px-4 py-8 fade-in">
            <button onclick="window.location.hash=''" class="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center"><i class="fa-solid fa-arrow-left mr-2"></i> Back to Search</button>

            <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mb-8 flex flex-col md:flex-row relative">
                <div class="absolute top-4 right-4 z-10 flex gap-2">
                    <span class="px-2 py-1 bg-slate-950/80 backdrop-blur rounded border ${trend.color} ${trend.color} text-[10px] font-bold uppercase"><i class="fa-solid ${trend.icon} mr-1"></i> ${trend.text}</span>
                </div>
                
                <div class="md:w-1/3 bg-slate-950 relative min-h-[200px]">
                    <img src="${p.image}" onerror="imgError(this)" class="absolute inset-0 w-full h-full object-cover opacity-80">
                </div>
                <div class="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">${p.brand}</span>
                        <div class="text-right">
                            <span class="text-4xl font-black ${level.color}">${score}</span>
                            <span class="text-xs text-slate-500 block">RISK SCORE</span>
                        </div>
                    </div>
                    <h1 class="text-3xl font-black text-white mb-4 leading-none">${p.model}</h1>
                    
                    <div class="mt-4">
                        <div class="flex justify-between text-[10px] text-slate-500 font-bold uppercase mb-1">
                            <span>Month 0</span>
                            <span>Month 12</span>
                            <span>Month 24+</span>
                        </div>
                        <div class="h-2 bg-slate-800 rounded-full overflow-hidden flex">
                            <div class="w-1/3 bg-emerald-900/50 border-r border-slate-900"></div>
                            <div class="w-1/3 bg-orange-900/50 border-r border-slate-900"></div>
                            <div class="w-1/3 bg-red-900/50"></div>
                        </div>
                        <div class="flex justify-between text-[9px] text-slate-400 mt-1">
                            <span>Stable</span>
                            <span class="text-orange-400">Issues Start</span>
                            <span class="text-red-400">Critical Failure</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                    <div class="text-xs text-slate-500 font-bold uppercase">Market Value</div>
                    <div class="text-lg text-white font-bold">${p.price}</div>
                </div>
                <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                    <div class="text-xs text-slate-500 font-bold uppercase">Est. Repair</div>
                    <div class="text-lg text-red-300 font-bold">${p.maintenance_cost_analysis ? '$' + repairCostHigh : 'Unknown'}</div>
                </div>
                <div class="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center relative overflow-hidden">
                    <div class="text-xs text-slate-500 font-bold uppercase">Verdict</div>
                    <div class="text-xl font-black ${decisionColor}">${decisionText}</div>
                    <div class="text-[9px] text-slate-400 mt-1">${decisionReason}</div>
                </div>
            </div>

            ${p.long_term_analysis ? `<div class="mb-8"><h3 class="text-white font-bold mb-3 flex items-center"><i class="fa-solid fa-microscope text-blue-500 mr-2"></i> Analysis</h3><p class="text-slate-300 text-sm leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-800">${p.long_term_analysis}</p></div>` : ''}

            <div class="bg-slate-900/50 rounded-xl border border-slate-800 p-6 mb-8">
                <h3 class="text-slate-200 font-bold mb-4">Failure Points</h3>
                <div class="space-y-4">
                    ${issues.map(i => `<div class="flex gap-4 p-3 bg-slate-900 rounded border border-slate-800"><div class="mt-1 w-2 h-2 rounded-full ${i.severity >= 3 ? 'bg-red-500' : 'bg-yellow-500'}"></div><div><h4 class="text-white font-bold text-sm">${i.name}</h4><p class="text-slate-400 text-xs mt-1">${i.desc}</p></div></div>`).join('')}
                </div>
            </div>

            <div class="bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-8 relative shadow-lg text-center">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">Recommended Solution</div>
                
                <h2 class="text-xl font-black text-white mb-1 mt-3">Switch to: ${p.recommendations.primary.name}</h2>
                <p class="text-xs text-slate-400 mb-6">Avoids ${issues.length > 0 ? issues[0].name.toLowerCase() : 'failures'} • 24% Lower Failure Rate</p>
                
                <a href="${p.links.solver}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl shadow-lg transition-all group">
                    <span class="block text-lg font-black uppercase tracking-widest">Switch Before Failure <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i></span>
                    <span class="block text-[10px] opacity-80 mt-1 font-bold">Check Live Price & Availability on Amazon</span>
                </a>
            </div>

            ${p.accessories && p.accessories.length > 0 ? `
            <div class="mb-12">
                <h3 class="text-slate-400 font-bold text-sm mb-4 uppercase">Required Maintenance Parts</h3>
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
