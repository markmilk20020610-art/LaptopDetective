// app.js - v35.0 Trust & SEO Module Enhanced

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

// --- Render Home Page (With Transparency Statement) ---
function renderHomePage() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800 relative">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Real-world failure ratings. Don't buy e-waste.
            </p>
            
            <div class="relative max-w-lg mx-auto mb-8">
                <input type="text" placeholder="Search Model..." 
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

        <div class="bg-slate-950 py-12 border-t border-slate-900 text-center px-4">
            <div class="max-w-3xl mx-auto">
                <p class="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">Transparency Statement</p>
                <p class="text-sm text-slate-400 leading-relaxed">
                    TechDetective is a <strong>community-driven reliability database</strong>. 
                    We do not accept free review units from manufacturers. 
                    Our <strong>Risk Algorithm</strong> calculates scores based on the 
                    <span class="text-white">Frequency</span> and <span class="text-white">Severity</span> 
                    of hardware failures reported by real users on Reddit, YouTube, and independent forums.
                </p>
                <p class="mt-4 text-xs text-slate-600">
                    <i class="fa-solid fa-check-circle text-emerald-500 mr-1"></i> Data Last Updated: <strong>February 2026</strong>
                </p>
            </div>
        </div>
    `;
}

// --- Render Product Page (With SEO Content & Evidence Block) ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);

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
                    <p class="text-sm text-slate-400 mb-4">${p.description_summary || 'Analysis of long-term hardware risks.'}</p>
                </div>
            </div>

            ${p.long_term_analysis ? `
            <div class="mb-8">
                <h3 class="text-white font-bold mb-3 flex items-center"><i class="fa-solid fa-microscope text-blue-500 mr-2"></i> Long-Term Reliability Analysis</h3>
                <p class="text-slate-300 text-sm leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-800">${p.long_term_analysis}</p>
            </div>` : ''}

            <div class="evidence-summary bg-slate-900 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
                <h4 class="text-gray-300 font-bold text-xs uppercase mb-1">🛡️ Community Evidence</h4>
                <p class="text-gray-400 text-xs">
                    This risk assessment is based on aggregated community discussions, long-term user feedback from Reddit/Discord, and post-warranty repair data. We prioritize <strong>structural durability</strong> over initial performance benchmarks.
                </p>
            </div>

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
                ${p.maintenance_cost_analysis ? `
                <div class="bg-slate-900 p-5 rounded-xl border border-slate-800">
                    <h4 class="text-slate-400 text-xs font-bold uppercase mb-2">Est. Repair Cost</h4>
                    <p class="text-white text-sm font-bold">${p.maintenance_cost_analysis}</p>
                </div>` : ''}
                
                ${p.who_should_avoid ? `
                <div class="bg-slate-900 p-5 rounded-xl border border-slate-800">
                    <h4 class="text-slate-400 text-xs font-bold uppercase mb-2">Who Should Avoid?</h4>
                    <p class="text-red-300 text-sm font-medium">${p.who_should_avoid}</p>
                </div>` : ''}
            </div>

            <div class="bg-gradient-to-br from-emerald-900/30 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-8 relative shadow-lg">
                <div class="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-wider">The Stable Choice</div>
                <h3 class="text-xl font-bold text-white text-center mb-1 mt-2">Better Alternative</h3>
                <h2 class="text-2xl font-black text-emerald-400 text-center mb-6">${p.recommendations.primary.name}</h2>
                <a href="${p.links.solver}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm shadow-lg transition-all">
                    Check Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            ${p.faq_section ? `
            <div class="mb-12 border-t border-slate-800 pt-8">
                <h3 class="text-white font-bold mb-6 text-center">Frequently Asked Questions</h3>
                <div class="space-y-4">
                    ${p.faq_section.map(faq => `
                        <div class="bg-slate-900 p-4 rounded-xl">
                            <h4 class="text-blue-400 text-sm font-bold mb-2">Q: ${faq.q}</h4>
                            <p class="text-slate-400 text-sm leading-relaxed">A: ${faq.a}</p>
                        </div>
                    `).join('')}
                </div>
            </div>` : ''}
            
            <div class="text-center pt-8 border-t border-slate-800">
                <button onclick="openModal('${p.model}')" class="text-blue-500 text-sm font-bold hover:underline">Submit Failure Report</button>
            </div>
        </div>
    `;
}

function createCard(p) {
    const issues = (p.risk_data && p.risk_data.issues) ? p.risk_data.issues : [];
    const score = RiskCalculator.calculate(issues);
    const level = RiskCalculator.getLevel(score);
    const topIssue = issues.length > 0 ? issues[0].name : "Pending";

    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full group hover:border-blue-500 transition-all">
            <div class="h-40 bg-slate-950 relative overflow-hidden">
                <img src="${p.image}" onerror="imgError(this)" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all">
                <div class="absolute top-2 right-2 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded border ${level.border} backdrop-blur-md">
                    Risk: ${score}
                </div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <div class="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wider">${p.brand}</div>
                <h3 class="text-lg font-bold text-white mb-2">${p.model}</h3>
                <div class="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                    <span class="text-[10px] text-red-400 font-bold truncate pr-2"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${topIssue}</span>
                    <i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-white transition-colors text-xs"></i>
                </div>
            </div>
        </div>
    `;
}

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
function handleEvidenceSubmit(e) { e.preventDefault(); alert("Report Submitted!"); closeModal('evidence-modal'); }
