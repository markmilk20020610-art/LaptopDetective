// app.js - v32.0 Bulletproof Edition (Anti-White Screen)

document.addEventListener('DOMContentLoaded', () => {
    // 1. 防呆检查：如果 data.js 没加载，直接在屏幕显示错误，而不是白屏
    if (typeof productsDB === 'undefined') {
        document.body.innerHTML = `
            <div style="color:white; text-align:center; padding-top:50px;">
                <h1>⚠️ Critical Error</h1>
                <p>productsDB is missing. Please check if data.js is linked correctly.</p>
            </div>`;
        return;
    }

    console.log("App Started. Products found:", productsDB.length);
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

// --- Image Error Handler (防止图片挂了导致难看) ---
function imgError(image) {
    image.onerror = "";
    image.src = "https://placehold.co/600x400/1e293b/475569?text=Image+Unavailable";
    return true;
}

// --- SEO Injection ---
function injectSchema(product, score) {
    // 安全检查，防止崩溃
    if (!product) return;
    
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId);
    if (script) script.remove();

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    
    // 安全获取 Top Issue
    const topIssue = (product.risk_data && product.risk_data.issues && product.risk_data.issues.length > 0)
        ? product.risk_data.issues[0].name 
        : "General Hardware Risk";

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.model,
        "brand": { "@type": "Brand", "name": product.brand },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (100 - score) / 20,
            "reviewCount": product.evidence_count || 30
        },
        "description": `Risk score ${score}/100. Top issue: ${topIssue}.`
    };

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

// --- HOME PAGE ---
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return; // 再次防止崩溃

    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Real-world failure ratings. Don't buy e-waste.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-8">
                <input type="text" placeholder="Search Model (e.g. Dell, Bambu)..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500"></i>
            </div>

            <div class="flex justify-center gap-4 text-sm font-bold text-slate-500">
                <button onclick="handleSearch('laptop')" class="hover:text-white transition"><i class="fa-solid fa-laptop mr-2"></i> Laptops</button>
                <span class="text-slate-700">|</span>
                <button onclick="handleSearch('printer')" class="hover:text-white transition"><i class="fa-solid fa-print mr-2"></i> 3D Printers</button>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-12">
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${productsDB.map(p => createCard(p)).join('')}
            </div>
        </div>
    `;
}

// --- PRODUCT PAGE ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    // 防崩溃核心：如果没有 issues，给空数组
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
                        </div>
                    </div>
                    <h1 class="text-3xl font-black text-white mb-4 leading-none">${p.model}</h1>
                </div>
            </div>
            
            <div class="bg-gradient-to-br from-emerald-900/30 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-8">
                <h3 class="text-xl font-bold text-white mb-2 text-center">Better Alternative</h3>
                <h3 class="text-2xl font-black text-white text-center mb-4 text-emerald-400">${p.recommendations.primary.name}</h3>
                <a href="${p.links.solver}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm transition-all">
                    Check Price on Amazon
                </a>
            </div>
        </div>
    `;
}

// --- HELPER: CARD ---
function createCard(p) {
    // 即使 risk_data 缺失，也不会报错，而是显示 Unknown
    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const topIssue = issues.length > 0 ? issues[0].name : "Analysis Pending";

    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full group hover:border-blue-500 transition-all">
            <div class="h-40 bg-slate-950 relative">
                <img src="${p.image}" onerror="imgError(this)" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all">
                <div class="absolute top-2 right-2 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded border ${level.border} backdrop-blur-md">
                    Score: ${score}
                </div>
            </div>
            <div class="p-5 flex-grow">
                <div class="text-[10px] font-bold text-slate-500 uppercase mb-1">${p.brand}</div>
                <h3 class="text-lg font-bold text-white mb-2">${p.model}</h3>
                <p class="text-red-400 text-xs"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${topIssue}</p>
            </div>
        </div>
    `;
}

// --- Search Logic ---
function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; 
    const filtered = productsDB.filter(p => p.model.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term));
    grid.innerHTML = filtered.length ? filtered.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results.</p>';
}
