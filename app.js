// app.js - v30.0 (SEO & Schema Enhanced)

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    window.addEventListener('hashchange', initRouter); // Listen for hash changes
});

function initRouter() {
    // Route format: #product/model-id
    const hash = window.location.hash;
    if (hash.startsWith('#product/')) {
        const modelId = hash.replace('#product/', '');
        renderProductPage(modelId);
    } else {
        renderHomePage();
    }
}

// --- SEO HELPER: Inject Schema.org JSON-LD ---
function injectSchema(product, score) {
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId);
    if (script) script.remove();

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    
    // Construct Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.model,
        "brand": { "@type": "Brand", "name": product.brand },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (100 - score) / 20, // Convert Risk (0-100) to Star Rating (5-0) roughly
            "reviewCount": product.report_count || 50
        },
        "description": `Risk analysis for ${product.model}. Top issue: ${product.issues[0].name}.`
    };

    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    // Update Page Title
    document.title = `${product.model} Risk Score: ${score}/100 - TechDetective`;
}

// --- HOME PAGE ---
function renderHomePage() {
    document.title = "TechDetective | Hardware Risk Scores & Reliability";
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="bg-slate-900 py-16 px-4 text-center border-b border-slate-800">
            <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                Hardware <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Risk Scores</span>
            </h1>
            <p class="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Real-world reliability ratings driven by community evidence.<br>
                <span class="text-sm text-slate-500">Don't rely on Day-1 reviews. See what breaks in Year 1.</span>
            </p>
            
            <div class="relative max-w-lg mx-auto mb-8 group">
                <input type="text" placeholder="Search Model (e.g. Dell XPS, Ender 3)..." 
                    class="w-full p-4 pl-12 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:border-blue-500 outline-none shadow-2xl transition-all"
                    onkeyup="handleSearch(this.value)">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-5 text-slate-500 group-hover:text-blue-500 transition"></i>
            </div>

            <div class="flex justify-center gap-4 text-sm font-bold text-slate-500">
                <button onclick="handleSearch('laptop')" class="hover:text-white transition"><i class="fa-solid fa-laptop mr-2"></i>Laptops</button>
                <span class="text-slate-700">|</span>
                <button onclick="handleSearch('printer')" class="hover:text-white transition"><i class="fa-solid fa-print mr-2"></i>3D Printers</button>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12">
            <h3 class="text-white font-bold text-xl mb-6 flex items-center"><i class="fa-solid fa-chart-line text-blue-500 mr-2"></i> Trending Investigations</h3>
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${productsDB.map(p => createCard(p)).join('')}
            </div>
        </div>
        
        <div class="bg-slate-950 py-12 border-t border-slate-900">
            <div class="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-sm">
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h4 class="text-white font-bold mb-2"><i class="fa-solid fa-scale-balanced text-emerald-500 mr-2"></i>How we calculate risk?</h4>
                    <p class="text-slate-400">Score = Frequency × Severity of reported failures. We aggregate data from Reddit, Discord, and user reports.</p>
                </div>
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <h4 class="text-white font-bold mb-2"><i class="fa-solid fa-money-bill-wave text-blue-500 mr-2"></i>Why trust us?</h4>
                    <p class="text-slate-400">We don't accept free review units. We only recommend "Solver" products that fix the specific flaws found.</p>
                </div>
            </div>
        </div>
    `;
}

// --- PRODUCT PAGE ---
function renderProductPage(modelId) {
    const p = productsDB.find(x => x.id === modelId);
    if (!p) return renderHomePage();

    const score = RiskCalculator.calculate(p.issues);
    const level = RiskCalculator.getLevel(score);
    
    // Inject SEO Schema
    injectSchema(p, score);

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 py-8 fade-in">
            <button onclick="window.location.hash=''" class="text-slate-500 hover:text-white mb-6 text-sm font-bold flex items-center"><i class="fa-solid fa-arrow-left mr-2"></i> Search Again</button>

            <div class="bg-slate-900 rounded-2xl border-2 ${level.border} p-6 mb-8 relative shadow-2xl overflow-hidden">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">${p.brand}</span>
                        <h1 class="text-3xl md:text-4xl font-black text-white mt-1">${p.model}</h1>
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
                    ${p.issues.slice(0, 3).map(i => `
                        <div class="flex gap-3">
                            <div class="mt-1 w-1.5 h-1.5 rounded-full ${level.color} flex-shrink-0"></div>
                            <div>
                                <h4 class="text-white font-bold text-sm">${i.name} <span class="text-slate-600 text-[10px] ml-2 border border-slate-700 px-1 rounded">Sev: ${i.severity}/3</span></h4>
                                <p class="text-slate-400 text-xs">${i.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${p.evidence_links && p.evidence_links.length > 0 ? `
                <div class="border-t border-slate-800 pt-3 mt-4">
                    <p class="text-[10px] text-slate-500 uppercase mb-2">Community Evidence:</p>
                    <div class="flex gap-3 flex-wrap">
                        ${p.evidence_links.map(link => `
                            <a href="${link.url}" target="_blank" class="text-xs text-blue-400 hover:underline flex items-center"><i class="fa-brands fa-reddit-alien mr-1"></i> ${link.title}</a>
                        `).join('')}
                    </div>
                </div>` : ''}
            </div>

            <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-white mb-2">Don't risk it.</h3>
                <p class="text-sm text-slate-400">Switch to these stable alternatives.</p>
            </div>

            <div class="bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/50 rounded-2xl p-6 mb-4 relative hover:border-emerald-400 transition-all shadow-lg group">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    Top Recommendation
                </div>
                <h3 class="text-2xl font-black text-white text-center mb-2 mt-2">${p.recommendations.solver.name}</h3>
                <p class="text-emerald-100/70 text-sm text-center mb-6"><i class="fa-solid fa-check-circle mr-2 text-emerald-500"></i> ${p.recommendations.solver.reason}</p>

                <a href="${p.links.solver}" target="_blank" rel="nofollow sponsored" 
                   class="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-center rounded-xl uppercase tracking-widest text-sm shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-[1.02]">
                    Check Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div class="text-blue-400 text-[10px] font-bold uppercase mb-1">Best Value Alternative</div>
                    <h4 class="text-white font-bold text-sm">${p.recommendations.value.name}</h4>
                    <p class="text-slate-400 text-xs mt-1">${p.recommendations.value.reason}</p>
                </div>
                <a href="${p.links.value}" target="_blank" rel="nofollow sponsored" 
                   class="px-6 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-bold rounded-lg text-xs whitespace-nowrap transition-all">Check Deal</a>
            </div>

            <div class="mb-12">
                <h3 class="text-slate-400 font-bold text-sm mb-4 uppercase tracking-wider">Required Fixes / Accessories</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${p.antidotes.map((acc, index) => `
                    <a href="${index === 0 ? p.links.antidote_1 : p.links.antidote_2}" target="_blank" rel="nofollow sponsored" class="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500"><i class="fa-solid fa-plug"></i></div>
                            <div>
                                <div class="text-white font-bold text-sm group-hover:text-yellow-400 transition">${acc.name}</div>
                                <div class="text-slate-500 text-xs">${acc.desc}</div>
                            </div>
                        </div>
                        <i class="fa-solid fa-chevron-right text-slate-600 group-hover:text-yellow-500"></i>
                    </a>
                    `).join('')}
                </div>
            </div>

            <div class="border-t border-slate-800 pt-8 text-center">
                <p class="text-slate-500 text-xs mb-3">Based on ${p.report_count} user reports.</p>
                <button onclick="openModal('${p.model}')" class="text-blue-500 text-sm font-bold hover:text-blue-400 transition underline decoration-blue-500/30">Submit a Failure Report</button>
            </div>
        </div>
    `;
}

// --- HELPERS ---
function createCard(p) {
    const score = RiskCalculator.calculate(p.issues);
    const level = RiskCalculator.getLevel(score);
    return `
        <div onclick="window.location.hash='product/${p.id}'" class="risk-card bg-slate-800 rounded-xl border border-slate-700 p-5 cursor-pointer relative overflow-hidden">
            <div class="absolute top-0 right-0 px-2 py-1 ${level.bg} ${level.color} text-[10px] font-black uppercase rounded-bl-lg border-b border-l ${level.border}">Risk: ${score}</div>
            <div class="text-xs font-bold text-slate-500 uppercase mb-1">${p.category.replace('_',' ')}</div>
            <h3 class="text-lg font-bold text-white mb-2">${p.model}</h3>
            <p class="text-red-400 text-xs font-bold mb-2"><i class="fa-solid fa-circle-exclamation mr-1"></i> ${p.issues[0].name}</p>
            <div class="text-[10px] text-slate-500 flex items-center mt-4">
                <i class="fa-solid fa-file-lines mr-1.5"></i> ${p.report_count} Reports
            </div>
        </div>
    `;
}

function handleSearch(val) {
    const term = val.toLowerCase();
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Only on home
    
    const filtered = productsDB.filter(p => p.model.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
    grid.innerHTML = filtered.length ? filtered.map(p => createCard(p)).join('') : '<p class="text-slate-500 col-span-3 text-center">No results.</p>';
}

function openModal(model) {
    const m = document.getElementById('evidence-modal');
    m.querySelector('input[name="model"]').value = model;
    m.classList.remove('hidden');
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function handleEvidenceSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    
    btn.innerText = "Sending...";
    btn.disabled = true;
    
    const formData = new FormData(form);
    // Replace with your email
    fetch("https://formsubmit.co/ajax/markmilk20020610@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert("Report Submitted! Thank you.");
        closeModal('evidence-modal');
        btn.innerText = "Submit Report";
        btn.disabled = false;
    })
    .catch(err => {
        alert("Error sending report.");
        btn.disabled = false;
    });
}
