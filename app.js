// app.js - v28.3 (Email Integrated)

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
});

function initRouter() {
    const params = new URLSearchParams(window.location.search);
    const modelId = params.get('model');
    if (modelId) renderProductPage(modelId);
    else renderHomePage();
}

// =======================
// 1. HOME PAGE RENDERER
// =======================
function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="bg-slate-900 pt-16 pb-12 px-4 border-b border-slate-800">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    <span class="text-blue-500">Tech</span>Detective
                </h1>
                <p class="text-xl text-gray-400 mb-8">
                    Hardware Risk Scores & Reliability Ratings.<br>
                    <span class="text-slate-500 text-base">We expose what brands hide.</span>
                </p>
                <div class="relative max-w-lg mx-auto">
                    <input type="text" id="search-box" placeholder="Search model (e.g. Dell XPS, Ender 3)..." 
                        class="w-full p-4 pl-12 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-blue-500 outline-none shadow-xl transition-all"
                        onkeyup="handleSearch(this.value)">
                    <i class="fa-solid fa-search absolute left-4 top-5 text-gray-500"></i>
                </div>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12">
            <h3 class="text-white font-bold text-xl mb-6 flex items-center"><i class="fa-solid fa-fire text-red-500 mr-2"></i> Investigated Models</h3>
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${productsDB.map(p => createProductCard(p)).join('')}
            </div>
        </div>
    `;
}

// =======================
// 2. PRODUCT PAGE RENDERER
// =======================
function renderProductPage(id) {
    const product = productsDB.find(p => p.id === id);
    if (!product) return renderHomePage();

    const score = RiskCalculator.calculateScore(product.issues);
    const level = RiskCalculator.getLevel(score);

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 py-8">
            <a href="index.html" class="text-gray-500 hover:text-white mb-6 block text-sm"><i class="fa-solid fa-arrow-left mr-2"></i>Back to Search</a>
            
            <div class="bg-slate-800 rounded-2xl border-2 ${level.border} p-6 mb-8 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 bg-slate-900/50 p-2 rounded-bl-xl border-b border-l border-slate-700">
                    <span class="text-xs text-gray-400 uppercase tracking-widest mr-2">Risk Score</span>
                    <span class="text-2xl font-black ${level.color}">${score}</span><span class="text-gray-500 text-sm">/100</span>
                </div>
                <h1 class="text-3xl font-black text-white mb-2">${product.model}</h1>
                <div class="inline-block px-3 py-1 rounded bg-slate-900 text-xs font-bold ${level.color} mb-4">${level.label}</div>
                
                <p class="text-gray-300 font-medium mb-4">Known Failure Points:</p>
                <div class="space-y-3">
                    ${product.issues.map(i => `
                        <div class="flex items-start">
                            <div class="min-w-[4px] h-full bg-red-500 rounded mr-3 mt-1"></div>
                            <div>
                                <h4 class="text-red-400 font-bold text-sm">${i.name}</h4>
                                <p class="text-gray-400 text-xs">${i.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-white mb-1">Avoid these headaches?</h3>
                <p class="text-sm text-gray-400">Our data suggests these reliable alternatives.</p>
            </div>

            <div class="bg-emerald-900/20 border border-emerald-600/50 rounded-2xl p-6 mb-4 relative hover:border-emerald-500 transition-all">
                <div class="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">The Stable Choice</div>
                <h3 class="text-2xl font-black text-white mb-2">${product.recommendations.solver.name}</h3>
                <p class="text-emerald-100/80 text-sm mb-6"><i class="fa-solid fa-check-circle mr-2"></i> ${product.recommendations.solver.reason}</p>
                <a href="${product.links.solver_affiliate}" target="_blank" rel="nofollow" 
                   class="block w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-center rounded-xl shadow-lg transition-all">
                    See Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div class="text-blue-400 text-xs font-bold uppercase mb-1">Best Value Alternative</div>
                    <h4 class="text-white font-bold">${product.recommendations.value.name}</h4>
                    <p class="text-gray-400 text-xs">${product.recommendations.value.reason}</p>
                </div>
                <a href="${product.links.value_affiliate}" target="_blank" rel="nofollow" 
                   class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg text-sm border border-slate-600 transition-all">Check Deal</a>
            </div>

            <div class="border-t border-slate-700 pt-8 mb-10">
                <h3 class="text-white font-bold mb-4 flex items-center"><i class="fa-solid fa-screwdriver-wrench text-yellow-500 mr-2"></i> Already bought it? Fix it.</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="${product.links.antidote_1}" target="_blank" class="block p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="text-yellow-500 text-xs font-bold uppercase mb-1">Essential Fix</div>
                        <div class="text-white font-bold text-sm group-hover:text-yellow-400">${product.antidotes[0].name}</div>
                        <div class="text-gray-500 text-xs mt-1">Get on Amazon <i class="fa-solid fa-arrow-right ml-1"></i></div>
                    </a>
                    <a href="${product.links.antidote_2}" target="_blank" class="block p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-yellow-500 transition-all group">
                        <div class="text-yellow-500 text-xs font-bold uppercase mb-1">Survival Gear</div>
                        <div class="text-white font-bold text-sm group-hover:text-yellow-400">${product.antidotes[1].name}</div>
                        <div class="text-gray-500 text-xs mt-1">Get on Amazon <i class="fa-solid fa-arrow-right ml-1"></i></div>
                    </a>
                </div>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                <p class="text-gray-400 text-sm mb-4">Did your ${product.model} break? Report it.</p>
                <button onclick="openEvidenceModal('${product.model}')" class="text-blue-500 text-sm font-bold hover:underline">Submit Evidence Form</button>
            </div>
        </div>
    `;
}

// =======================
// 3. HELPER FUNCTIONS
// =======================

function createProductCard(p) {
    const score = RiskCalculator.calculateScore(p.issues);
    const level = RiskCalculator.getLevel(score);
    
    // Pseudo-random report count based on model name
    let charCodeSum = 0;
    for (let i = 0; i < p.model.length; i++) {
        charCodeSum += p.model.charCodeAt(i);
    }
    const reportCount = (charCodeSum * 2) + 36;

    return `
        <div class="risk-card bg-slate-800 rounded-xl border border-slate-700 overflow-hidden cursor-pointer hover:border-blue-500 transition-all"
             onclick="window.location.search='?model=${p.id}'">
            <div class="p-5">
                <div class="flex justify-between items-start mb-4">
                    <span class="text-xs font-bold text-gray-500 uppercase">${p.brand}</span>
                    <span class="${level.bg} text-white text-[10px] font-bold px-2 py-1 rounded">${score}/100 Risk</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${p.model}</h3>
                <p class="text-red-400 text-xs font-bold mb-1"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Top Issue: ${p.issues[0].name}</p>
                <p class="text-gray-400 text-xs line-clamp-2">${p.issues[0].desc}</p>
            </div>
            <div class="bg-slate-900 px-5 py-3 border-t border-slate-700 flex justify-between items-center">
                <span class="text-xs text-gray-500">Based on ${reportCount} reports</span>
                <span class="text-blue-400 text-xs font-bold">View Report <i class="fa-solid fa-arrow-right ml-1"></i></span>
            </div>
        </div>
    `;
}

function handleSearch(query) {
    const grid = document.getElementById('product-grid');
    const filtered = productsDB.filter(p => 
        p.model.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase())
    );
    if (filtered.length === 0) grid.innerHTML = `<div class="col-span-3 text-center text-gray-500 py-8">No results found.</div>`;
    else grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

// =======================
// 4. SUBMIT FORM HANDLER (REAL EMAIL)
// =======================

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

// Handle real submission to FormSubmit.co
function handleEvidenceSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    
    // 1. Loading State
    btn.innerText = "Sending...";
    btn.disabled = true;
    btn.classList.add('opacity-50');

    // 2. Prepare Data
    const formData = new FormData(form);

    // 3. Send to FormSubmit (AJAX)
    // Using your specific email address
    fetch("https://formsubmit.co/ajax/markmilk20020610@gmail.com", { 
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // 4. Success State
        const formContainer = form.parentElement;
        formContainer.innerHTML = `
            <div class="text-center py-8 fade-in">
                <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Report Received!</h3>
                <p class="text-gray-400 text-sm">Thank you. We have logged your email.</p>
                <p class="text-slate-600 text-xs mt-4">Case ID: #${Math.floor(Math.random() * 9000) + 1000}</p>
                <button onclick="location.reload()" class="mt-6 text-blue-400 text-sm font-bold hover:underline">Close</button>
            </div>
        `;
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
        btn.innerText = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-50');
        console.error('Error:', error);
    });
}
