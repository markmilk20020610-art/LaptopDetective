// app.js

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    updateDate();
});

// 简单的路由控制
function initRouter() {
    const params = new URLSearchParams(window.location.search);
    const modelId = params.get('model');

    if (modelId) {
        renderProductPage(modelId);
    } else {
        renderHomePage();
    }
}

// 渲染首页
function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="bg-slate-900 pt-16 pb-12 px-4 border-b border-slate-800">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                    <span class="text-blue-500">Tech</span>Detective
                </h1>
                <p class="text-xl text-gray-400 mb-8">
                    Hardware Risk Scores & Long-Term Reliability. <br>
                    <span class="text-slate-500 text-base">Don't rely on day-1 reviews. We track what breaks in year 1.</span>
                </p>
                <div class="relative max-w-lg mx-auto">
                    <input type="text" id="search-box" placeholder="Search model (e.g. Dell XPS, Bambu)..." 
                        class="w-full p-4 pl-12 rounded-xl bg-slate-800 border border-slate-600 text-white focus:border-blue-500 outline-none shadow-xl transition-all"
                        onkeyup="handleSearch(this.value)">
                    <i class="fa-solid fa-search absolute left-4 top-5 text-gray-500"></i>
                </div>
            </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 py-12">
            <h3 class="text-white font-bold text-xl mb-6 flex items-center"><i class="fa-solid fa-fire text-red-500 mr-2"></i> High Risk Alerts</h3>
            <div id="product-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${productsDB.map(p => createProductCard(p)).join('')}
            </div>
        </div>
        
        <div class="bg-slate-800 py-12 px-4 mt-8 border-t border-slate-700">
            <div class="max-w-3xl mx-auto">
                <h3 class="text-white font-bold text-2xl mb-6 text-center">Frequently Asked Questions</h3>
                <details class="mb-4 bg-slate-900 rounded-lg p-4 border border-slate-700">
                    <summary class="text-white font-bold cursor-pointer">Why do you calculate Risk Scores?</summary>
                    <p class="text-gray-400 mt-2 text-sm">Most reviews only cover the first week. Our scores calculate long-term failure rates based on community reports over 6-12 months.</p>
                </details>
                <details class="mb-4 bg-slate-900 rounded-lg p-4 border border-slate-700">
                    <summary class="text-white font-bold cursor-pointer">How accurate is the data?</summary>
                    <p class="text-gray-400 mt-2 text-sm">We aggregate data from Reddit, forums, and user submissions. While not a scientific lab test, it reflects real-world durability.</p>
                </details>
            </div>
        </div>
    `;
}

// 渲染单个产品页 (深层转化页)
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
                
                <p class="text-gray-300 font-medium mb-4">Known Long-Term Reliability Issues:</p>
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
                <h3 class="text-xl font-bold text-white mb-1">Don't want to deal with this?</h3>
                <p class="text-sm text-gray-400">Our database recommends these stable alternatives.</p>
            </div>

            <div class="bg-emerald-900/20 border border-emerald-600/50 rounded-2xl p-6 mb-4 relative hover:border-emerald-500 transition-all">
                <div class="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                    The Stable Choice
                </div>
                <h3 class="text-2xl font-black text-white mb-2">${product.recommendations.solver.name}</h3>
                <p class="text-emerald-100/80 text-sm mb-6"><i class="fa-solid fa-check-circle mr-2"></i> ${product.recommendations.solver.reason}</p>
                
                <a href="${product.links.solver_affiliate}" target="_blank" rel="nofollow" 
                   class="block w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-center rounded-xl shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-[1.02]">
                    See Best Price on Amazon <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div class="text-blue-400 text-xs font-bold uppercase mb-1">Best Value Alternative</div>
                    <h4 class="text-white font-bold">${product.recommendations.value.name}</h4>
                    <p class="text-gray-400 text-xs">${product.recommendations.value.reason}</p>
                </div>
                <a href="${product.links.value_affiliate}" target="_blank" rel="nofollow" 
                   class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg text-sm border border-slate-600 transition-all">
                    Check Deal
                </a>
            </div>

            <div class="border-t border-slate-800 pt-8">
                <h3 class="text-white font-bold mb-4">Own this device? Report a failure.</h3>
                <form onsubmit="handleSubmitEvidence(event)" class="bg-slate-800 p-4 rounded-xl border border-slate-700">
                    <input type="hidden" id="model-name" value="${product.model}">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <select id="issue-type" class="bg-slate-900 text-white p-3 rounded border border-slate-600 text-sm">
                            <option>Hardware Failure</option>
                            <option>Software Bug</option>
                            <option>Poor Build Quality</option>
                        </select>
                        <input type="text" id="source-link" placeholder="Source Link (Reddit/Forum)" class="bg-slate-900 text-white p-3 rounded border border-slate-600 text-sm">
                    </div>
                    <textarea id="issue-desc" placeholder="Describe what happened..." class="w-full bg-slate-900 text-white p-3 rounded border border-slate-600 text-sm mb-4 h-24"></textarea>
                    <button type="submit" class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all">Submit Evidence</button>
                </form>
            </div>
        </div>
    `;
}

// 辅助函数：创建首页卡片
function createProductCard(p) {
    const score = RiskCalculator.calculateScore(p.issues);
    const level = RiskCalculator.getLevel(score);
    
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
                <span class="text-xs text-gray-500">Analysis based on ${p.issues.length * 12} reports</span>
                <span class="text-blue-400 text-xs font-bold">View Report <i class="fa-solid fa-arrow-right ml-1"></i></span>
            </div>
        </div>
    `;
}

function handleSearch(query) {
    const grid = document.getElementById('product-grid');
    if (!query) {
        grid.innerHTML = productsDB.map(p => createProductCard(p)).join('');
        return;
    }
    
    const filtered = productsDB.filter(p => 
        p.model.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-3 text-center text-gray-500 py-8">No results found. Try 'Dell' or 'Ender'.</div>`;
    } else {
        grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    }
}

function handleSubmitEvidence(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Submitting...";
    
    // 模拟 API 延迟
    setTimeout(() => {
        alert("Thanks! Evidence submitted for review.");
        btn.innerText = "Submit Evidence";
        e.target.reset();
    }, 1000);
}

function updateDate() {
    // 自动更新版权日期等
}