// app.js - v37.0 ENHANCED (Sorting, Stats, Top Lists, Visuals)

let currentSort = 'risk-desc'; // 默认排序：风险从高到低

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
    image.src = "https://placehold.co/600x400/1e293b/475569?text=Image+Unavailable";
    return true;
}

// --- HELPER: Sorting Logic (Part 1) ---
function getSortedProducts(products) {
    let sorted = [...products];
    switch (currentSort) {
        case 'risk-desc': // Risk High -> Low
            return sorted.sort((a, b) => RiskCalculator.calculate(b.risk_data.issues) - RiskCalculator.calculate(a.risk_data.issues));
        case 'risk-asc': // Risk Low -> High
            return sorted.sort((a, b) => RiskCalculator.calculate(a.risk_data.issues) - RiskCalculator.calculate(b.risk_data.issues));
        case 'price-asc': // Price Low -> High
            return sorted.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        case 'price-desc': // Price High -> Low
            return sorted.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        default:
            return sorted;
    }
}

// --- HELPER: Statistics Calculation (Part 2) ---
function getDbStats() {
    const totalModels = productsDB.length;
    const totalIssues = productsDB.reduce((acc, p) => acc + (p.risk_data.issues ? p.risk_data.issues.length : 0), 0);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return { totalModels, totalIssues, date };
}

// --- HELPER: Get Top Lists (Part 3) ---
function getTopLists() {
    // Calculate scores for all products
    const withScores = productsDB.map(p => ({
        ...p,
        score: RiskCalculator.calculate(p.risk_data.issues)
    }));
    
    // Sort High to Low for Risk
    const highRisk = [...withScores].sort((a, b) => b.score - a.score).slice(0, 5);
    // Sort Low to High for Reliable
    const reliable = [...withScores].sort((a, b) => a.score - b.score).slice(0, 5);
    
    return { highRisk, reliable };
}

// --- RENDER HOME PAGE ---
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return;

    const stats = getDbStats();
    const { highRisk, reliable } = getTopLists();

    app.innerHTML = `
        <div class="bg-slate-950 border-b border-slate-800 py-3 px-4">
            <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-500">
                <span><i class="fa-solid fa-database mr-2 text-blue-500"></i> ${stats.totalModels} Models Tracked</span>
                <span><i class="fa-solid fa-bug mr-2 text-red-500"></i> ${stats.totalIssues} Failure Patterns</span>
                <span class="hidden md:inline"><i class="fa-solid fa-clock mr-2 text-emerald-500"></i> Updated: ${stats.date}</span>
            </div>
        </div>

        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Real-world failure ratings based on community evidence.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-6">
                <input type="text" placeholder="Search Model..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500"></i>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-4 text-sm z-10 relative">
                <div class="flex items-center justify-center gap-2">
                    <span class="text-slate-500 font-bold text-xs uppercase">Sort By:</span>
                    <select onchange="changeSort(this.value)" class="bg-slate-800 text-white text-xs p-2 rounded border border-slate-700 outline-none hover:border-blue-500 cursor-pointer">
                        <option value="risk-desc" ${currentSort === 'risk-desc' ? 'selected' : ''}>Risk: High to Low</option>
                        <option value="risk-asc" ${currentSort === 'risk-asc' ? 'selected' : ''}>Risk: Low to High</option>
                        <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                        <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                    </select>
                </div>
                <div class="flex items-center justify-center gap-4 text-slate-500 font-bold">
                    <span class="text-slate-700 hidden md:inline">|</span>
                    <button onclick="handleSearch('laptop')" class="hover:text-white transition flex items-center"><i class="fa-solid fa-laptop mr-2"></i> Laptops</button>
                    <button onclick="handleSearch('printer')" class="hover:text-white transition flex items-center"><i class="fa-solid fa-print mr-2"></i> Printers</button>
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
                    <h3 class="text-red-400 font-bold text-xs uppercase mb-4 flex items-center"><i class="fa-solid fa-triangle-exclamation mr-2"></i> High Risk Models</h3>
                    <ul class="space-y-3">
                        ${highRisk.map(p => `
                            <li onclick="window.location.hash='product/${p.id}'" class="cursor-pointer hover:bg-slate-800 p-2 rounded transition flex justify-between items-center group">
                                <span class="text-slate-300 text-xs font-bold group-hover:text-white">${p.model}</span>
                                <span class="bg-red-500/20 text-red-400 text-[10px] font-black px-1.5 py-0.5 rounded">${p.score}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h3 class="text-emerald-400 font-bold text-xs uppercase mb-4 flex items-center"><i class="fa-solid fa-shield-heart mr-2"></i> Most Reliable</h3>
                    <ul class="space-y-3">
                        ${reliable.map(p => `
                            <li onclick="window.location.hash='product/${p.id}'" class="cursor-pointer hover:bg-slate-800 p-2 rounded transition flex justify-between items-center group">
                                <span class="text-slate-300 text-xs font-bold group-hover:text-white">${p.model}</span>
                                <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded">${p.score}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="bg-slate-950 py-12 border-t border-slate-900 text-center px-4">
            <div class="max-w-3xl mx-auto">
                <p class="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Transparency Statement</p>
                <p class="text-sm text-slate-400 leading-relaxed">
                    TechDetective is a <strong>community-driven reliability database</strong>. 
                    We do not accept free review units from manufacturers. 
                    Risk scores based on aggregated failure data.
                </p>
            </div>
        </div>
    `;
}

// --- RENDER PRODUCT PAGE (Enhanced) ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    
    // Get Related Models (Part 4)
    const related = productsDB
        .filter(x => x.category === p.category && x.id !== p.id)
        .slice(0, 3); // Just take 3 for simplicity

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-4xl mx-auto px-4 py-8 fade-in">
            <button onclick="window.location.hash=''" class="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center"><i class="fa-solid fa-arrow-left mr-2"></i> Back to Search</button>

            <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl mb-8 flex flex-col md:flex-row">
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
                    
                    <div class="space-y-2 mt-4">
                        <div class="flex items-center text-xs">
                            <span class="w-24 text-slate-500 font-bold">Severity</span>
                            <div class="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full bg-red-500" style="width: ${Math.min(score, 100)}%"></div>
                            </div>
                        </div>
                        <div class="flex items-center text-xs">
                            <span class="w-24 text-slate-500 font-bold">Frequency</span>
                            <div class="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full bg-orange-500" style="width: ${Math.min(score * 0.8, 100)}%"></div>
                            </div>
                        </div>
                        <div class="flex items-center text-xs">
                            <span class="w-24 text-slate-500 font-bold">Repair Cost</span>
                            <div class="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full bg-blue-500" style="width: ${p.risk_data.maintenance_cost === 'High' ? '90%' : (p.risk_data.maintenance_cost === 'Medium' ? '50%' : '20%')}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            ${p.long_term_analysis ? `
            <div class="mb-8">
                <h3 class="text-white font-bold mb-3 flex items-center"><i class="fa-solid fa-microscope text-blue-500 mr-2"></i> Long-Term Analysis</h3>
                <p class="text-slate-300 text-sm leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-800">${p.long_term_analysis}</p>
            </div>` : ''}

            <div class="bg-slate-900/50 rounded-xl border border-slate-800 p-6 mb-8">
                <h3 class="text-slate-200 font-bold mb-4">Detailed Failure Points</h3>
                <div class="space-y-4">
                    ${issues.map(i => `
                        <div class="flex gap-4 p-3 bg-slate-900 rounded border border-slate-800">
                            <div class="mt-1"><div class="w-2 h-2 rounded-full ${i.severity >= 3 ? 'bg-red-500' : 'bg-yellow-500'}"></div></div>
                            <div>
                                <h4 class="text-white font-bold text-sm">${i.name}</h4>
                                <p class="text-slate-400 text-xs mt-1 leading-relaxed">${i.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="bg-emerald-900/10 border border-emerald-500/30 p-5 rounded-xl">
                    <div class="text-emerald-400 text-xs font-bold uppercase mb-2">Alternative Choice</div>
                    <h4 class="text-white font-bold mb-2">${p.recommendations.primary.name}</h4>
                    <a href="${p.links.solver}" target="_blank" class="text-xs text-white bg-emerald-600 px-3 py-2 rounded hover:bg-emerald-500 transition">Check Price</a>
                </div>
                ${p.accessories && p.accessories.length > 0 ? `
                <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl">
                    <div class="text-blue-400 text-xs font-bold uppercase mb-2">Essential Fix</div>
                    <h4 class="text-white font-bold mb-2">${p.accessories[0].name}</h4>
                    <a href="${p.accessories[0].link}" target="_blank" class="text-xs text-white bg-blue-600 px-3 py-2 rounded hover:bg-blue-500 transition">View Part</a>
                </div>` : ''}
            </div>

            <div class="mb-12 border-t border-slate-800 pt-8">
                <h3 class="text-slate-400 font-bold text-sm uppercase mb-4">Compare with Similar Models</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${related.map(r => `
                        <div onclick="window.location.hash='product/${r.id}'" class="bg-slate-900 p-3 rounded-lg border border-slate-800 cursor-pointer hover:border-slate-600 transition">
                            <div class="text-[10px] text-slate-500 uppercase">${r.brand}</div>
                            <div class="text-white font-bold text-xs">${r.model}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// --- CORE: Create Card ---
function createCard(p) {
    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const topIssue = issues.length > 0 ? issues[0].name : "Pending";

    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full group hover:border-blue-500 transition-all">
            <div class="h-40 bg-slate-950 relative overflow-hidden">
                <img src="${p.image}" onerror="imgError(this)" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div class="absolute top-2 right-2 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded border ${level.border} backdrop-blur-md">
                    ${score}
                </div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">${p.brand}</div>
                    <div class="text-[10px] font-bold text-slate-400">${p.price}</div>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 leading-tight">${p.model}</h3>
                <div class="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                    <span class="text-[10px] text-red-400 font-bold truncate pr-2"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${topIssue}</span>
                </div>
            </div>
        </div>
    `;
}

// --- Function to handle sorting changes ---
function changeSort(val) {
    currentSort = val;
    handleSearch(document.querySelector('input[type="text"]').value || '');
}

function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; 
    
    // 1. Filter
    const filtered = productsDB.filter(p => 
        p.model.toLowerCase().includes(term) || 
        p.brand.toLowerCase().includes(term) ||
        (p.category && p.category.toLowerCase().includes(term))
    );

    // 2. Sort (Using Helper)
    const sortedAndFiltered = getSortedProducts(filtered);
    
    // 3. Render
    grid.innerHTML = sortedAndFiltered.length ? sortedAndFiltered.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results found.</p>';
}
