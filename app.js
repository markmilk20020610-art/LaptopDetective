// app.js - Controller v29.0

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});

function initRouter() {
    const params = new URLSearchParams(window.location.search);
    const modelId = params.get('model');
    if (modelId) renderProductPage(modelId);
    else renderHomePage();
}

// ----------------------------------------------------
// PAGE: HOME
// ----------------------------------------------------
function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 border-b border-slate-800">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    <span class="text-blue-500">Tech</span>Detective
                </h1>
                <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                    We track <span class="text-white font-bold">Hardware Failure Rates</span> so you don't buy a lemon.<br>
                    Real data. Long-term risks. Brutally honest.
                </p>
                <div class="relative max-w-lg mx-auto mb-8">
                    <input type="text" id="search-box" placeholder="Search model (e.g. Dell XPS, Ender 3)..." 
                        class="w-full p-4 pl-12 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-blue-500 outline-none shadow-xl transition-all"
                        onkeyup="handleSearch(this.value)">
                    <i class="fa-solid fa-search absolute left-4 top-5 text-gray-500"></i>
                </div>
                
                <div class="flex justify-center gap-4 text-sm text-slate-500">
                    <span onclick="handleSearch('laptop')" class="cursor-pointer hover:text-blue-400 transition"><i class="fa-solid fa-laptop mr-1"></i> Laptops</span>
                    <span onclick="handleSearch('printer')" class="cursor-pointer hover:text-blue-400 transition"><i class="fa-solid fa-print mr-1"></i> 3D Printers</span>
                </div>
            </div>
        </div>

        <div class="bg-slate-950 py-8 border-b border-slate-900">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-center">
                <div>
                    <i class="fa-solid fa-shield-halved text-emerald-500 text-2xl mb-2"></i>
                    <h3 class="text-white font-bold">Risk Scores</h3>
                    <p class="text-xs text-slate-500">Calculated from severity x frequency of reports.</p>
                </div>
                <div>
                    <i class="fa-solid fa-users text-blue-500 text-2xl mb-2"></i>
                    <h3 class="text-white font-bold">Community Data</h3>
                    <p class="text-xs text-slate-500">Aggregated from Reddit, Forums, and User Submissions.</p>
                </div>
                <div>
                    <i class="fa-solid fa-check-double text-purple-500 text-2xl mb-2"></i>
                    <h3 class="text-white font-bold">Verified Fixes</h3>
                    <p class="text-xs text-slate-500">We recommend parts that actually solve the flaws.</p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-12">
            <h3 class="text-white font-bold text-xl mb-6 flex items-center"><i class="fa-solid fa-fire text-red-500 mr-2"></i> Investigated Models</h3>
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${productsDB.map(p => createProductCard(p)).join('')}
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// PAGE: PRODUCT DETAIL (THE FUNNEL)
// ----------------------------------------------------
function renderProductPage(id) {
    const product = productsDB.find(p => p.id === id);
    if (!product) return renderHomePage();

    const score = RiskCalculator.calculateScore(product.issues);
    const level = RiskCalculator.getLevel(score);

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 py-8 fade-in">
            <a href="index.html" class="text-slate-500 hover:text-white mb-6 block text-sm font-bold"><i class="fa-solid fa-arrow-left mr-2"></i>Back to Database</a>
            
            <div class="bg-slate-900 rounded-2xl border-2 ${level.border} p-6 mb-8 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 bg-slate-950/80 p-3 rounded-bl-xl border-b border-l border-slate-800 backdrop-blur-sm">
                    <span class="text-[10px] text-slate-400 uppercase tracking-widest mr-2 block text-right">Risk Score</span>
                    <span class="text-3xl font-black ${level.color}">${score}</span><span class="text-slate-600 text-sm">/100</span>
                </div>
                <div class="mb-4">
                    <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">${product.brand}</span>
                    <h1 class="text-3xl md:text-4xl font-black text-white mt-1">${product.model}</h1>
                </div>
                <div class="inline-block px-3 py-1 rounded ${level.bg} text-xs font-black ${level.color} mb-6 border ${level.border}">${level.label}</div>
                
                <h4 class="text-slate-300 font-bold text-sm mb-4 uppercase tracking-wide border-b border-slate-800 pb-2">Critical Failure Points</h4>
                <div class="space-y-4">
                    ${product.issues.map(i => `
                        <div class="flex items-start">
                            <div class="min-w-[4px] h-full bg-red-500/50 rounded mr-3 mt-1"></div>
                            <div>
                                <h4 class="text-red-400 font-bold text-sm flex items-center">${i.name} <span class="ml-2 text-[10px] bg-slate-800 text-slate-500 px-1 rounded">Sev: ${i.severity}</span></h4>
                                <p class="text-slate-400 text-xs mt-1 leading-relaxed">${i.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="text-center mb-8">
                <h3 class="text-xl font-bold text-white mb-2">Avoid these headaches?</h3>
                <p class="text-sm text-slate-400">Our data suggests these reliable alternatives.</p>
            </div>

            <div class="bg-emerald-900/10 border border-emerald-500/50 rounded-2xl p-6 mb-4 relative hover:border-emerald-500 transition-all shadow-lg group">
                <div class="absolute -top-3 left-6 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-wider">The Stable Choice</div>
                <h3 class="text-2xl font-black text-white mb-2">${product.recommendations.solver.name}</h3>
                <p class="text-emerald-100/70 text-sm mb-6 flex items-center"><i class="fa-solid fa-check-circle mr-2 text-emerald-500"></i> ${product.recommendations.solver.reason}</p>
                <a href="${product.links.solver}" target="_blank" rel="nofollow sponsored" 
                   class="btn-cta block w-full py-4 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm">
                    See Best Price <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div class="text-blue-400 text-[10px] font-bold uppercase mb-1">Best Value Alternative</div>
                    <h4 class="text-white font-bold">${product.recommendations.value.name}</h4>
                    <p class="text-slate-400 text-xs mt-1">${product.recommendations.value.reason}</p>
                </div>
                <a href="${product.links.value}" target="_blank" rel="nofollow sponsored" 
                   class="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-bold rounded-lg text-xs transition-all whitespace-nowrap">Check Deal</a>
            </div>

            <div class="border-t border-slate-800 pt-8 mb-12">
                <h3 class="text-white font-bold mb-6 flex items-center text-lg"><i class="fa-solid fa-screwdriver-wrench text-yellow-500 mr-2"></i> Already bought it? Fix it.</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="${product.links.antidote_1}" target="_blank" rel="nofollow sponsored" class="block p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="text-yellow-500 text-[10px] font-bold uppercase mb-1">Essential Fix</div>
                        <div class="text-white font-bold text-sm group-hover:text-yellow-400 mb-1">${product.antidotes[0].name}</div>
                        <div class="text-slate-500 text-[10px]">Get on Amazon <i class="fa-solid fa-arrow-right ml-1"></i></div>
                    </a>
                    <a href="${product.links.antidote_2}" target="_blank" rel="nofollow sponsored" class="block p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="text-yellow-500 text-[10px] font-bold uppercase mb-1">Survival Gear</div>
                        <div class="text-white font-bold text-sm group-hover:text-yellow-400 mb-1">${product.antidotes[1].name}</div>
                        <div class="text-slate-500 text-[10px]">Get on Amazon <i class="fa-solid fa-arrow-right ml-1"></i></div>
                    </a>
                </div>
            </div>

            <div class="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center">
                <i class="fa-solid fa-flag text-slate-600 text-2xl mb-3"></i>
                <p class="text-slate-400 text-sm mb-4">Own a ${product.model}? Help the community.</p>
                <button onclick="openEvidenceModal('${product.model}')" class="text-blue-500 text-sm font-bold hover:text-blue-400 transition-colors border border-blue-900/50 bg-blue-900/10 px-4 py-2 rounded-full">Submit Failure Report</button>
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// COMPONENT: CARD GENERATOR
// ----------------------------------------------------
function createProductCard(p) {
    const score = RiskCalculator.calculateScore(p.issues);
    const level = RiskCalculator.getLevel(score);
    
    return `
        <div class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer flex flex-col h-full"
             onclick="window.location.search='?model=${p.id}'">
            <div class="p-5 flex-grow">
                <div class="flex justify-between items-start mb-4">
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">${p.brand}</span>
                    <span class="${level.bg} ${level.color} text-[10px] font-black px-2 py-1 rounded uppercase">${level.label}</span>
                </div>
                <h3 class="text-lg font-bold text-white mb-2 leading-tight">${p.model}</h3>
                
                <div class="flex items-center gap-2 mb-4">
                    <div class="text-2xl font-black ${level.color}">${score}</div>
                    <div class="text-[10px] text-slate-500 leading-tight">Risk<br>Score</div>
                </div>

                <div class="bg-slate-900/50 p-2 rounded border border-slate-700/50">
                    <p class="text-red-400 text-[10px] font-bold mb-1 uppercase"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Top Issue</p>
                    <p class="text-slate-400 text-xs line-clamp-2">${p.issues[0].name}: ${p.issues[0].desc}</p>
                </div>
            </div>
            
            <div class="bg-slate-900 px-5 py-3 border-t border-slate-700 flex justify-between items-center mt-auto">
                <span class="text-[10px] text-slate-500"><i class="fa-solid fa-file-lines mr-1"></i> ${p.report_count} Reports</span>
                <span class="text-blue-400 text-xs font-bold group-hover:underline">View Analysis <i class="fa-solid fa-arrow-right ml-1"></i></span>
            </div>
        </div>
    `;
}

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------
function handleSearch(query) {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Guard clause if not on home page

    const filtered = productsDB.filter(p => 
        p.model.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center text-slate-500 py-12 border border-dashed border-slate-700 rounded-xl">No results found for "${query}".</div>`;
    } else {
        grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    }
}

function openEvidenceModal(modelName = '') {
    const modal = document.getElementById('evidence-modal');
    if(modelName) {
        const input = modal.querySelector('input[name="model"]');
        if(input) input.value = modelName;
    }
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function handleEvidenceSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Sending...";
    btn.disabled = true;
    btn.classList.add('opacity-50');

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/markmilk20020610@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const modalContent = form.parentElement;
        modalContent.innerHTML = `
            <div class="text-center py-8 fade-in">
                <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 text-3xl">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Report Received!</h3>
                <p class="text-slate-400 text-sm">Your evidence has been logged.</p>
                <button onclick="location.reload()" class="mt-6 text-blue-400 text-sm font-bold hover:underline">Close</button>
            </div>
        `;
    })
    .catch(error => {
        alert("Submission failed. Please try again.");
        btn.innerText = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-50');
    });
}
