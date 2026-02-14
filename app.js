// app.js - v30.0 Conversion Engine

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});

function initRouter() {
    const params = new URLSearchParams(window.location.search);
    const model = params.get('model');
    if (model) renderProductPage(decodeURIComponent(model));
    else renderHomePage();
}

// --- HOME PAGE ---
function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Understand potential hardware risks before you buy. <br>
                <span class="text-sm text-slate-500">Reliability ratings driven by community evidence.</span>
            </p>
            
            <div class="relative max-w-lg mx-auto mb-8 group">
                <input type="text" placeholder="Search Model (e.g. Blade 15, Ender 3)..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500 group-hover:text-blue-500 transition"></i>
            </div>

            <div class="flex justify-center gap-4 text-sm font-bold text-slate-500">
                <button onclick="filterCategory('laptop')" class="hover:text-white transition"><i class="fa-solid fa-laptop mr-2"></i>Laptops</button>
                <span class="text-slate-700">|</span>
                <button onclick="filterCategory('3d_printer')" class="hover:text-white transition"><i class="fa-solid fa-print mr-2"></i>3D Printers</button>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12">
            <h3 class="text-white font-bold text-xl mb-6 flex items-center"><i class="fa-solid fa-chart-line text-blue-500 mr-2"></i> Trending Risks</h3>
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${productsDB.map(p => createCard(p)).join('')}
            </div>
        </div>

        <div class="bg-slate-950 py-12 px-4 border-t border-slate-900">
            <div class="max-w-3xl mx-auto space-y-4">
                <h3 class="text-center text-white font-bold text-2xl mb-8">Frequently Asked Questions</h3>
                <details class="bg-slate-900 p-4 rounded-lg border border-slate-800"><summary class="text-white font-bold cursor-pointer">How is Risk Score calculated?</summary><p class="text-slate-400 mt-2 text-sm">We use a formula: Frequency × Severity × Long Term Factor. It reflects how likely a device is to fail within 2 years.</p></details>
                <details class="bg-slate-900 p-4 rounded-lg border border-slate-800"><summary class="text-white font-bold cursor-pointer">Is the data real?</summary><p class="text-slate-400 mt-2 text-sm">Yes. We aggregate failure reports from Reddit, Discord, and user submissions via this website.</p></details>
            </div>
        </div>
    `;
}

// --- PRODUCT PAGE (The Funnel) ---
function renderProductPage(modelName) {
    const p = productsDB.find(x => x.model === modelName);
    if (!p) return renderHomePage();

    // SEO Injection
    document.title = `${p.model} Risk Score & Common Problems | TechDetective`;
    
    const score = RiskCalculator.calculate(p.risk_data.issues);
    const level = RiskCalculator.getLevel(score);

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 py-8 fade-in">
            <button onclick="renderHomePage()" class="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center"><i class="fa-solid fa-arrow-left mr-2"></i> Search Again</button>

            <div class="bg-slate-900 rounded-2xl border-2 ${level.border} p-6 mb-8 relative shadow-2xl overflow-hidden">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">${p.brand}</span>
                        <h1 class="text-3xl md:text-4xl font-black text-white leading-tight">${p.model}</h1>
                    </div>
                    <div class="text-right">
                        <div class="text-4xl font-black ${level.color}">${score}</div>
                        <div class="text-[10px] text-slate-500 uppercase tracking-widest">Risk Score</div>
                    </div>
                </div>
                
                <div class="inline-flex items-center px-3 py-1 rounded ${level.bg} ${level.color} text-xs font-black border ${level.border} mb-6">
                    <i class="fa-solid ${level.icon} mr-2"></i> ${level.label}
                </div>

                <div class="space-y-4 mb-6">
                    ${p.risk_data.issues.slice(0, 3).map(i => `
                        <div class="flex gap-3">
                            <div class="mt-1 w-1.5 h-1.5 rounded-full ${level.color} flex-shrink-0"></div>
                            <div>
                                <h4 class="text-white font-bold text-sm">${i.name} <span class="text-slate-600 text-[10px] ml-2 border border-slate-700 px-1 rounded">Sev: ${i.severity}/3</span></h4>
                                <p class="text-slate-400 text-xs">${getIssueDesc(i.name)}</p> </div>
                        </div>
                    `).join('')}
                </div>

                <div class="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                    <div>
                        <div class="text-[10px] text-slate-500 uppercase">Long Term Risk</div>
                        <div class="text-xs text-slate-300 font-medium">${p.risk_data.long_term_risk}</div>
                    </div>
                    <div>
                        <div class="text-[10px] text-slate-500 uppercase">Maint. Cost</div>
                        <div class="text-xs text-slate-300 font-medium">${p.risk_data.maintenance_cost}</div>
                    </div>
                </div>
            </div>

            <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-white">Don't risk it.</h3>
                <p class="text-sm text-slate-400">Our data suggests these stable alternatives.</p>
            </div>

            <div class="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-4 relative hover:border-emerald-400 transition-all shadow-lg group">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    Top Recommendation
                </div>
                <h3 class="text-2xl font-black text-white text-center mb-4 mt-2">${p.recommendations.primary.name}</h3>
                
                <ul class="space-y-2 mb-6">
                    ${p.recommendations.primary.benefits.map(b => `
                        <li class="flex items-center justify-center text-sm text-emerald-100/90"><i class="fa-solid fa-check text-emerald-400 mr-2"></i> ${b}</li>
                    `).join('')}
                </ul>

                <a href="${p.recommendations.primary.link}" target="_blank" class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-[1.02]">
                    Check Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-10 flex items-center justify-between gap-4">
                <div>
                    <div class="text-blue-400 text-[10px] font-bold uppercase mb-1">Best Value Option</div>
                    <h4 class="text-white font-bold text-sm">${p.recommendations.secondary.name}</h4>
                    <p class="text-slate-400 text-xs mt-0.5">${p.recommendations.secondary.reason}</p>
                </div>
                <a href="${p.recommendations.secondary.link}" target="_blank" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-bold rounded-lg text-xs whitespace-nowrap transition-all">
                    View Deal
                </a>
            </div>

            <div class="mb-12">
                <h3 class="text-slate-400 font-bold text-sm mb-4 uppercase tracking-wider">Required Accessories</h3>
                ${p.accessories.map(acc => `
                    <a href="${acc.link}" target="_blank" class="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-500 transition-all group mb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500"><i class="fa-solid fa-plug"></i></div>
                            <div>
                                <div class="text-white font-bold text-sm group-hover:text-yellow-400 transition">${acc.name}</div>
                                <div class="text-slate-500 text-xs">${acc.reason}</div>
                            </div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-slate-600 group-hover:text-yellow-500"></i>
                    </a>
                `).join('')}
            </div>

            <div class="border-t border-slate-800 pt-8 text-center">
                <p class="text-slate-500 text-xs mb-3">Data updated: <span id="last-updated">Today</span> • Reports: <span id="report-count">${p.evidence_count}</span></p>
                <button onclick="openModal('${p.model}')" class="text-blue-500 text-sm font-bold hover:text-blue-400 transition underline decoration-blue-500/30">Submit a Failure Report</button>
            </div>
        </div>
    `;
}

// --- HELPERS ---
function createCard(p) {
    const score = RiskCalculator.calculate(p.risk_data.issues);
    const level = RiskCalculator.getLevel(score);
    return `
        <div onclick="renderProductPage('${p.model}')" class="risk-card bg-slate-800 rounded-xl border border-slate-700 p-5 cursor-pointer relative overflow-hidden">
            <div class="absolute top-0 right-0 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded-bl-lg border-b border-l ${level.border}">Risk: ${score}</div>
            <div class="text-xs font-bold text-slate-500 uppercase mb-1">${p.category.replace('_',' ')}</div>
            <h3 class="text-lg font-bold text-white mb-2">${p.model}</h3>
            <p class="text-red-400 text-xs font-bold mb-2"><i class="fa-solid fa-circle-exclamation mr-1"></i> ${p.risk_data.issues[0].name}</p>
            <div class="text-[10px] text-slate-500 flex items-center mt-4">
                <i class="fa-solid fa-file-lines mr-1.5"></i> ${p.evidence_count} Reports
            </div>
        </div>
    `;
}

function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Only on home
    
    const filtered = productsDB.filter(p => p.model.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term));
    grid.innerHTML = filtered.length ? filtered.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results.</p>';
}

function filterCategory(cat) {
    const grid = document.getElementById('product-grid');
    const filtered = productsDB.filter(p => p.category === cat);
    grid.innerHTML = filtered.map(p => createCard(p)).join('');
}

// --- MODAL & SUBMIT ---
function openModal(model) {
    const m = document.getElementById('evidence-modal');
    m.querySelector('input[name="model"]').value = model;
    m.classList.remove('hidden');
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function handleEvidenceSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Submitting...";
    
    const formData = new FormData(e.target);
    fetch("https://formsubmit.co/ajax/markmilk20020610@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert("Success! Your evidence has been logged and the Risk Score will update shortly.");
        closeModal('evidence-modal');
        btn.innerText = "Submit Report";
        
        // SIMULATE UPDATE (Instant Gratification)
        const countSpan = document.getElementById('report-count');
        if(countSpan) countSpan.innerText = parseInt(countSpan.innerText) + 1;
    })
    .catch(err => alert("Error submitting form."));
}

// Fallback for issue description
function getIssueDesc(name) {
    const map = {
        "Dongle Hell": "Lack of ports forces expensive dongles.",
        "Touch Bar Freeze": "Capacitive keys become unresponsive.",
        "Battery Degradation": "Capacity drops below 80% quickly.",
        "Battery Bloat": "Dangerous swelling requiring disposal.",
        "Surface Lava": "Uncomfortable to touch under load.",
        "Bad RMA": "Weeks of waiting for support.",
        "Z-Wobble": "Visible banding lines on prints.",
        "Gear Wear": "Extruder slips, causing under-extrusion.",
        "Bed Warp": "First layer adhesion fails often.",
        "Extruder Jam": "Heat creep causes filament clogs.",
        "VFA Ripples": "Vertical artifacts on walls.",
        "Tube Melt": "PTFE liner degrades at high temps.",
        "Toxic Fumes": "Requires ventilation.",
        "FEP Leak": "Risk of curing resin on screen.",
        "Messy": "Post-processing is dirty work."
    };
    return map[name] || "Documented long-term reliability issue reported by community.";
}
