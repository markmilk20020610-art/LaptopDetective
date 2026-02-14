// app.js - v33.1 Final Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. 安全检查：确保数据库已加载
    if (typeof productsDB === 'undefined' || !Array.isArray(productsDB)) {
        document.body.innerHTML = '<div style="color:white;text-align:center;padding:50px;">❌ Error: data.js not loaded properly.</div>';
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

// --- 图片加载失败时的备用方案 ---
function imgError(image) {
    image.onerror = "";
    image.src = "https://placehold.co/600x400/1e293b/475569?text=Image+Unavailable";
    return true;
}

// --- SEO: 注入结构化数据 ---
function injectSchema(product, score) {
    if (!product) return;
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId);
    if (script) script.remove();

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    
    const topIssue = (product.risk_data && product.risk_data.issues && product.risk_data.issues.length > 0)
        ? product.risk_data.issues[0].name 
        : "General Risk";

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.model,
        "brand": { "@type": "Brand", "name": product.brand },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (100 - score) / 20,
            "reviewCount": product.evidence_count || 50
        },
        "description": `Risk Score: ${score}/100. Top Issue: ${topIssue}`
    };

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = `${product.model} Risk Analysis | TechDetective`;
}

// --- 页面渲染: 首页 ---
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Real-world failure ratings based on community evidence.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-8">
                <input type="text" placeholder="Search Model (e.g. Dell, Bambu)..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500"></i>
            </div>

            <div class="flex justify-center gap-4 text-sm font-bold text-slate-500">
                <button onclick="handleSearch('laptop')" class="hover:text-white transition flex items-center"><i class="fa-solid fa-laptop mr-2"></i> Laptops</button>
                <span class="text-slate-700">|</span>
                <button onclick="handleSearch('printer')" class="hover:text-white transition flex items-center"><i class="fa-solid fa-print mr-2"></i> 3D Printers</button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-12">
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${productsDB.map(p => createCard(p)).join('')}
            </div>
        </div>
    `;
}

// --- 页面渲染: 产品详情页 ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    
    injectSchema(p, score);

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
                    <div class="inline-flex items-center px-3 py-1 rounded ${level.bg} ${level.color} text-xs font-black border ${level.border} mb-4">
                        <i class="fa-solid ${level.icon} mr-2"></i> ${level.label}
                    </div>
                </div>
            </div>

            <div class="bg-slate-900/50 rounded-xl border border-slate-800 p-6 mb-8">
                <h3 class="text-slate-200 font-bold mb-4 flex items-center"><i class="fa-solid fa-list-ul mr-2 text-blue-500"></i> Detailed Analysis</h3>
                <div class="space-y-4">
                    ${issues.map(i => `
                        <div class="flex gap-4 p-3 bg-slate-900 rounded border border-slate-800">
                            <div class="mt-1"><div class="w-2 h-2 rounded-full ${i.severity >= 3 ? 'bg-red-500' : 'bg-yellow-500'}"></div></div>
                            <div>
                                <h4 class="text-white font-bold text-sm">${i.name} <span class="text-[10px] text-slate-500 ml-2">Sev: ${i.severity}</span></h4>
                                <p class="text-slate-400 text-xs mt-1 leading-relaxed">${i.desc || 'Reported by community.'}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="bg-gradient-to-br from-emerald-900/30 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-8 relative shadow-lg">
                <div class="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-wider">The Stable Choice</div>
                <h3 class="text-2xl font-black text-white text-center mb-2 mt-2">${p.recommendations.primary.name}</h3>
                
                <div class="flex flex-wrap justify-center gap-2 mb-6">
                    ${p.recommendations.primary.benefits ? 
                      p.recommendations.primary.benefits.map(b => `<span class="text-emerald-200 text-xs bg-emerald-900/50 px-2 py-1 rounded"><i class="fa-solid fa-check mr-1"></i> ${b}</span>`).join('') 
                      : ''}
                </div>

                <a href="${p.links.solver}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm shadow-lg transition-all">
                    Check Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>
            
            <div class="text-center pt-8 border-t border-slate-800">
                <button onclick="openModal('${p.model}')" class="text-blue-500 text-sm font-bold hover:underline">Submit Failure Report</button>
            </div>
        </div>
    `;
}

// --- 卡片组件 ---
function createCard(p) {
    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const topIssue = issues.length > 0 ? issues[0].name : "Analysis Pending";

    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full group hover:border-blue-500 transition-all">
            <div class="h-40 bg-slate-950 relative overflow-hidden">
                <img src="${p.image}" onerror="imgError(this)" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                <div class="absolute top-2 right-2 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded border ${level.border} backdrop-blur-md">
                    Risk: ${score}
                </div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">${p.brand}</div>
                <h3 class="text-lg font-bold text-white mb-2 leading-tight">${p.model}</h3>
                <div class="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                    <span class="text-[10px] text-red-400 font-bold truncate pr-2"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${topIssue}</span>
                    <i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-white transition-colors text-xs"></i>
                </div>
            </div>
        </div>
    `;
}

// --- 搜索功能 (修复了分类搜索) ---
function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; 
    
    const filtered = productsDB.filter(p => 
        p.model.toLowerCase().includes(term) || 
        p.brand.toLowerCase().includes(term) ||
        (p.category && p.category.toLowerCase().includes(term))
    );
    
    grid.innerHTML = filtered.length ? filtered.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results found.</p>';
}

function openModal(model) {
    const m = document.getElementById('evidence-modal');
    m.querySelector('input[name="model"]').value = model;
    m.classList.remove('hidden');
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function handleEvidenceSubmit(e) {
    e.preventDefault();
    alert("Report Submitted! Thank you.");
    closeModal('evidence-modal');
}
