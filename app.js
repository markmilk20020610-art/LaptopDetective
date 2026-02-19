// app.js - v45.15 (SPA Routing + Advanced Filtering + High Fault Tolerance)

// Global State
let currentProductId = null;
let currentCategory = 'all';
let currentSearchTerm = '';
let currentSort = 'default';

// --- 1. Initialization & Routing ---
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    window.addEventListener('hashchange', handleRoute);
});

function initApp() {
    // 检查数据源是否存在
    if (typeof productsDB === 'undefined' || !Array.isArray(productsDB)) {
        document.getElementById('app').innerHTML = '<p style="color:red; text-align:center; padding:2rem;">Error: data.js is not loaded correctly.</p>';
        return;
    }
    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash;
    
    // Default to Home if no hash
    if (!hash || hash === '#' || hash === '') {
        renderHome();
        updateSEO(null);
        return;
    }

    // Product Page
    if (hash.startsWith('#/product/')) {
        const id = hash.split('#/product/')[1];
        const product = productsDB.find(p => p.id === id);
        
        if (product) {
            currentProductId = id;
            renderProduct(product);
            updateSEO(product); 
            window.scrollTo(0, 0);
        } else {
            window.location.hash = '#'; // 产品没找到回首页
        }
    }
}

// --- 2. Logic: Filtering & Sorting ---
function setCategory(category) {
    currentCategory = category;
    renderHome();
}

// --- 3. SEO Injection ---
function updateSEO(product) {
    const defaultTitle = "TechDetective | Hardware Failure Database";
    const defaultDesc = "Don't buy new tech until you check the failure timeline. We analyze long-term reliability risks.";

    if (!product) {
        document.title = defaultTitle;
        setMetaDescription(defaultDesc);
        return;
    }

    document.title = `${product.model} - Reliability Concern Identified | TechDetective`;
    const riskText = product.risk_data?.long_term_risk || "Known Issues";
    const newDesc = `Risk Score: ${product.risk_score || 'N/A'}/100. Concern: ${riskText}. Read the full analysis.`;
    setMetaDescription(newDesc);
}

function setMetaDescription(text) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "description";
        document.head.appendChild(meta);
    }
    if (meta.getAttribute("content") !== text) {
        meta.setAttribute("content", text);
    }
}

// --- 4. Rendering Logic (Home Page) ---

function renderHome() {
    const app = document.getElementById('app');
    
    // Header UI (加入了搜索和排序框)
    let html = `
        <header class="hero" style="background-color: #2c3e50; color: white; padding: 2.5rem 1rem; text-align: center; margin-bottom: 2rem;">
            <div class="logo" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">TechDetective 🕵️‍♂️</div>
            <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Don't Buy A Time Bomb.</h1>
            <p style="opacity: 0.85; font-size: 1.1rem;">We analyze long-term failure rates so you don't waste money.</p>
        </header>

        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
            
            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
                <div style="width: 100%; display: flex; justify-content: center;">
                    <input type="text" id="homeSearchInput" placeholder="Search laptops or printers... (e.g. XPS 13)" value="${currentSearchTerm}"
                           style="width: 100%; max-width: 600px; padding: 0.8rem 1.5rem; border: 2px solid #ddd; border-radius: 30px; font-size: 1.1rem; outline: none;">
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-bottom: 1px solid #eee; padding-bottom: 1rem;">
                    <div style="display:flex; gap:10px; flex-wrap: wrap;">
                        <button onclick="setCategory('all')" class="btn ${currentCategory === 'all' ? 'btn-primary' : 'btn-secondary'}" style="padding: 8px 20px; border-radius: 20px; border:none; cursor:pointer;">All</button>
                        <button onclick="setCategory('laptop')" class="btn ${currentCategory === 'laptop' ? 'btn-primary' : 'btn-secondary'}" style="padding: 8px 20px; border-radius: 20px; border:none; cursor:pointer;">Laptops</button>
                        <button onclick="setCategory('3d_printer')" class="btn ${currentCategory === '3d_printer' ? 'btn-primary' : 'btn-secondary'}" style="padding: 8px 20px; border-radius: 20px; border:none; cursor:pointer;">3D Printers</button>
                    </div>
                    
                    <div>
                        <select id="homeSortSelect" style="padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #ccc; font-size: 1rem; cursor: pointer; outline: none;">
                            <option value="default" ${currentSort === 'default' ? 'selected' : ''}>Sort by: Default</option>
                            <option value="risk-high" ${currentSort === 'risk-high' ? 'selected' : ''}>Risk Score: High to Low</option>
                            <option value="risk-low" ${currentSort === 'risk-low' ? 'selected' : ''}>Risk Score: Low to High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="dynamic-grid" class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
            </div>
            
            <footer style="text-align:center; padding: 3rem 1rem; color: #64748b; font-size: 0.9rem; margin-top: 3rem; background: #f8fafc;">
                <p>&copy; 2026 TechDetective. Unbiased Reliability Analysis.</p>
                <p style="margin-top:0.5rem; opacity: 0.8;"><strong>Affiliate Disclosure:</strong> TechDetective is reader-supported. We may earn a commission from qualifying purchases.</p>
            </footer>
        </div>
    `;

    app.innerHTML = html;

    // Attach listeners to newly created elements
    document.getElementById('homeSearchInput').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        renderGrid();
    });

    document.getElementById('homeSortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderGrid();
    });

    // Render the actual cards
    renderGrid();
}

function renderGrid() {
    const grid = document.getElementById('dynamic-grid');
    
    // Filter
    let filteredDB = productsDB.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = (product.model || "").toLowerCase().includes(currentSearchTerm);
        return matchesCategory && matchesSearch;
    });

    // Sort
    if (currentSort === 'risk-high') {
        filteredDB.sort((a, b) => (Number(b.risk_score) || 0) - (Number(a.risk_score) || 0));
    } else if (currentSort === 'risk-low') {
        filteredDB.sort((a, b) => (Number(a.risk_score) || 0) - (Number(b.risk_score) || 0));
    } else {
        // Default sort (original order or fallback)
    }

    if (filteredDB.length === 0) {
        grid.innerHTML = `<div style="text-align:center; grid-column: 1/-1; padding: 2rem; color:#666;">No products found matching your criteria.</div>`;
        return;
    }

    let gridHtml = '';
    filteredDB.forEach(product => {
        let scoreColor = 'safe'; 
        const score = Number(product.risk_score) || 0;
        if (score >= 80) scoreColor = 'critical';
        else if (score >= 60) scoreColor = 'warning';

        const summary = product.description_summary || "See detailed report for known issues.";
        const displayScore = product.risk_score ? product.risk_score : 'N/A';

        gridHtml += `
            <a href="#/product/${product.id}" class="card" style="background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.06); overflow: hidden; display: flex; flex-direction: column; text-decoration: none; color: #333; transition: transform 0.2s;">
                <div style="position:relative; background:#f1f5f9; height:200px; width:100%; display:flex; align-items:center; justify-content:center;">
                    <img src="${product.image || 'https://via.placeholder.com/400x250?text=No+Image'}" alt="${product.model}" 
                         style="max-width:80%; max-height:80%; object-fit:contain; mix-blend-mode:multiply;"
                         onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=No+Image';">
                    <span class="card-badge ${scoreColor}" style="position:absolute; top:10px; right:10px; padding:4px 8px; border-radius:4px; font-weight:bold; font-size:0.8rem; color:white; background: ${score >= 80 ? '#e74c3c' : (score >= 60 ? '#f39c12' : '#2ecc71')}">Risk: ${displayScore}</span>
                </div>
                <div class="card-content" style="padding: 1.2rem; flex-grow: 1; display:flex; flex-direction:column;">
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color:#111;">${product.model}</h3>
                    <p class="price" style="color: #666; font-weight: bold; margin-bottom: 0.8rem;">Price: ${product.price || 'Check Amazon'}</p>
                    <p class="summary" style="font-size: 0.9rem; color: #555; margin-bottom: 1rem; line-height:1.4;">${summary.substring(0, 90)}...</p>
                    <span class="cta-link" style="margin-top:auto; color: #3b82f6; font-weight:bold;">View Analysis &rarr;</span>
                </div>
            </a>
        `;
    });

    grid.innerHTML = gridHtml;
}

// --- 5. Rendering Logic (Product Detail Page) ---
function renderProduct(product) {
    const app = document.getElementById('app');

    // UI Logic
    const scoreNum = Number(product.risk_score) || 0;
    let scoreColorClass = 'safe-text';
    if (scoreNum >= 80) scoreColorClass = 'critical-text';
    else if (scoreNum >= 60) scoreColorClass = 'warning-text';

    let trendHtml = '';
    if (scoreNum > 60 && product.trend_badge === "Trending Risk") {
        trendHtml = `<span class="trend-badge warning-bg" style="background:#fef3c7; color:#b45309; padding:4px 8px; border-radius:4px; font-size:0.85rem; font-weight:bold;">⚠️ Trending Risk</span>`;
    } else if (product.trend_badge === "Verified Stable") {
        trendHtml = `<span class="trend-badge safe-bg" style="background:#dcfce7; color:#047857; padding:4px 8px; border-radius:4px; font-size:0.85rem; font-weight:bold;">🛡️ Verified Stable</span>`;
    } else if (product.trend_badge === "Avoid") {
        trendHtml = `<span class="trend-badge critical-bg" style="background:#fee2e2; color:#b91c1c; padding:4px 8px; border-radius:4px; font-size:0.85rem; font-weight:bold;">🚨 Avoid</span>`;
    }

    let confColor = '#ccc'; 
    if (product.confidence_level === 'High') confColor = '#10b981';
    if (product.confidence_level === 'Medium') confColor = '#3b82f6';
    
    const confidenceHtml = `
        <div class="confidence-meter" style="display:flex; align-items:center; gap:6px; font-size:0.85rem; margin-top:8px;">
            <span class="dot" style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color: ${confColor}"></span>
            <span class="conf-text">${product.confidence_level || 'Medium'} Confidence Data</span>
        </div>
    `;

    // High Fault Tolerance Data Reading
    const maintCost = product.risk_data?.maintenance_cost || "Varies";
    let repairEst = "$150 - $300";
    if (maintCost === "High") repairEst = "$300 - $600";
    if (maintCost === "Total Loss") repairEst = "May Exceed Resale Value";
    if (maintCost === "Low") repairEst = "$50 - $100";
    if (maintCost === "Very High") repairEst = "$500+";

    const riskText = product.risk_data?.long_term_risk || "See detailed analysis for known issues.";
    let formattedRisk = riskText;
    const splitIndex = riskText.search(/[-–()]/); 
    if (splitIndex > 0) {
        const component = riskText.substring(0, splitIndex).trim();
        const details = riskText.substring(splitIndex).trim();
        formattedRisk = `<strong>${component}</strong> ${details}`;
    }

    const issuesList = product.risk_data?.issues || [];
    const accessories = product.accessories || [
        {name: "Essential Maintenance Part", desc: "Keep it running"},
        {name: "Backup Option", desc: "In case of failure"}
    ];
    
    // Recommend Links
    const linkSolver = product.links?.solver || "#";
    const linkValue = product.links?.value || "#";
    const linkAnti1 = product.links?.antidote_1 || "#";
    const linkAnti2 = product.links?.antidote_2 || "#";
    
    const recPrimaryName = product.recommendations?.primary?.name || "Premium Alternative";
    const recPrimaryBens = product.recommendations?.primary?.benefits || ["Better Reliability", "Longer Lifespan"];
    const recSecName = product.recommendations?.secondary?.name || "Budget Alternative";
    const recSecReason = product.recommendations?.secondary?.reason || "Best value for the price.";

    const faqs = product.faq_section || [];

    const html = `
        <div class="nav-bar" style="padding: 1rem 0; max-width:1200px; margin:0 auto;">
            <a href="#" class="back-btn" style="text-decoration:none; color:#3b82f6; font-weight:bold;">&larr; Back to List</a>
        </div>

        <div class="product-detail-container" style="max-width:1200px; margin:0 auto; padding:0 1rem; font-family:sans-serif;">
            
            <div class="detail-header" style="display:flex; flex-wrap:wrap; gap:2rem; margin-bottom:2rem; align-items:flex-start;">
                <div style="flex:1; min-width:300px; max-width:500px; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; padding:1rem;">
                    <img src="${product.image || 'https://via.placeholder.com/400x300?text=No+Image'}" alt="${product.model}" 
                         style="max-width:100%; max-height:300px; object-fit:contain;"
                         onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=No+Image'">
                </div>
                
                <div class="header-info" style="flex:2; min-width:300px;">
                    <h1 style="font-size:2.5rem; margin-bottom:0.5rem; line-height:1.2; color:#1e293b;">${product.model}</h1>
                    <div class="meta-tags" style="display:flex; gap:10px; margin-bottom:1.5rem;">
                        <span style="background:#e2e8f0; padding:4px 10px; border-radius:15px; font-size:0.85rem; color:#475569;">${product.brand || 'Brand'}</span>
                        <span style="background:#e2e8f0; padding:4px 10px; border-radius:15px; font-size:0.85rem; color:#475569;">${product.category || 'Category'}</span>
                        <span style="color:#059669; font-weight:bold; margin-left:10px;">Price: ${product.price || 'Check Retailer'}</span>
                    </div>
                    
                    <div class="trust-module" style="background:#f8fafc; padding:1.5rem; border-radius:12px; border-left:5px solid ${scoreNum >= 80 ? '#ef4444' : (scoreNum >= 60 ? '#f59e0b' : '#10b981')};">
                        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                            <div>
                                <span style="display:block; font-size:0.9rem; color:#64748b; text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Risk Score</span>
                                <span style="font-size:3rem; font-weight:900; line-height:1; color:${scoreNum >= 80 ? '#ef4444' : (scoreNum >= 60 ? '#f59e0b' : '#10b981')};">${product.risk_score || 'N/A'}</span><span style="font-size:1.5rem; color:#94a3b8;">/100</span>
                            </div>
                            <div style="text-align:right;">
                                ${trendHtml}
                                ${confidenceHtml}
                                <div style="font-size:0.8rem; color:#94a3b8; margin-top:8px;">🛡️ Based on aggregated user reports</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="verdict-bar" style="background:${scoreNum >= 80 ? '#fef2f2' : (scoreNum >= 60 ? '#fffbeb' : '#f0fdf4')}; border:1px solid ${scoreNum >= 80 ? '#fca5a5' : (scoreNum >= 60 ? '#fcd34d' : '#86efac')}; padding:1.5rem; border-radius:12px; margin-bottom:2rem;">
                <div style="font-size:1.1rem; color:${scoreNum >= 80 ? '#991b1b' : (scoreNum >= 60 ? '#92400e' : '#166534')};">
                    <strong style="text-transform:uppercase;">⚠️ Primary Concern:</strong> 
                    <span style="font-size:1.2rem; display:block; margin-top:5px;">${product.risk_data?.long_term_risk || product.description_summary}</span>
                </div>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:2rem; margin-bottom:3rem;">
                
                <div style="flex:2; min-width:300px;">
                    <section style="margin-bottom:2rem;">
                        <h2 style="font-size:1.5rem; border-bottom:2px solid #e2e8f0; padding-bottom:0.5rem; margin-bottom:1rem; color:#1e293b;">🔍 Reliability Analysis</h2>
                        <p style="font-size:1.1rem; line-height:1.7; color:#334155; margin-bottom:1.5rem;">${product.description_summary}</p>
                        ${product.long_term_analysis ? `<p style="background:#f1f5f9; padding:1rem; border-radius:8px; color:#475569; font-size:0.95rem; border-left:3px solid #cbd5e1;"><strong>Technical Detail:</strong> ${product.long_term_analysis}</p>` : ''}
                        
                        <div style="margin-top:2rem;">
                            <h3 style="font-size:1.2rem; margin-bottom:1rem; color:#334155;">Reported Issues</h3>
                            <div style="display:grid; gap:1rem;">
                                ${issuesList.map(issue => `
                                    <div style="background:#fff; border:1px solid #e2e8f0; padding:1rem; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
                                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                                            <strong style="color:#0f172a;">${issue.name}</strong>
                                            <span style="letter-spacing:2px;">${'🔴'.repeat(issue.severity || 1)}</span>
                                        </div>
                                        <p style="font-size:0.9rem; color:#64748b; margin:0;">${issue.desc}</p>
                                    </div>
                                `).join('')}
                                ${issuesList.length === 0 ? '<p style="color:#888;">No specific sub-issues detailed.</p>' : ''}
                            </div>
                        </div>
                    </section>

                    <section style="background:#f8fafc; padding:1.5rem; border-radius:12px; border:1px solid #e2e8f0;">
                        <h2 style="font-size:1.3rem; margin-bottom:1rem; color:#1e293b;">💰 Maintenance Outlook</h2>
                        <p style="margin-bottom:0.5rem;"><strong>Est. Repairability:</strong> <span style="background:#e2e8f0; padding:2px 8px; border-radius:4px;">${maintCost}</span></p>
                        <p style="color:#475569; font-size:0.95rem; margin-bottom:1rem;">${product.maintenance_cost_analysis || 'Repair costs vary based on region and warranty status.'}</p>
                        ${product.who_should_avoid ? `<p style="color:#b91c1c; font-size:0.95rem;"><strong>🛑 Not recommended for:</strong> ${product.who_should_avoid}</p>` : ''}
                    </section>
                </div>

                <div style="flex:1; min-width:300px;">
                    
                    <div style="background:#fff; border:2px solid #3b82f6; border-radius:12px; padding:1.5rem; margin-bottom:1.5rem; box-shadow:0 10px 15px -3px rgba(59,130,246,0.1);">
                        <h3 style="color:#1d4ed8; margin-bottom:1rem; font-size:1.2rem; display:flex; align-items:center; gap:8px;">🏆 Buy This Instead</h3>
                        <p style="font-size:1.1rem; font-weight:bold; color:#0f172a; margin-bottom:0.5rem;">${recPrimaryName}</p>
                        <ul style="list-style:none; padding:0; margin-bottom:1.5rem;">
                            ${recPrimaryBens.map(b => `<li style="font-size:0.9rem; color:#475569; margin-bottom:4px;">✅ ${b}</li>`).join('')}
                        </ul>
                        <a href="${linkSolver}" target="_blank" rel="nofollow sponsored" style="display:block; background:#2563eb; color:white; text-align:center; padding:12px; border-radius:8px; font-weight:bold; text-decoration:none; transition:background 0.2s;">View Recommended Alternative</a>
                        <p style="text-align:center; font-size:0.8rem; color:#ef4444; margin-top:1rem; font-weight:600;">Avoid a potential ${repairEst} repair bill.</p>
                    </div>

                    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:1.5rem; margin-bottom:1.5rem;">
                        <h3 style="margin-bottom:0.5rem; font-size:1.1rem; color:#1e293b;">🛡️ Already Own It? Protect It.</h3>
                        <p style="font-size:0.85rem; color:#64748b; margin-bottom:1rem;">Essential items to delay or prevent the known failures.</p>
                        
                        <a href="${linkAnti1}" target="_blank" rel="nofollow sponsored" style="display:block; border:1px solid #cbd5e1; padding:10px; border-radius:8px; text-decoration:none; color:#334155; margin-bottom:10px; transition:border-color 0.2s;">
                            <strong style="display:block; color:#0f172a;">👉 ${accessories[0] ? accessories[0].name : 'Protective Gear'}</strong>
                            <span style="font-size:0.8rem; color:#64748b;">${accessories[0] ? accessories[0].desc : 'Recommended maintenance.'}</span>
                        </a>
                        
                        <a href="${linkAnti2}" target="_blank" rel="nofollow sponsored" style="display:block; border:1px solid #cbd5e1; padding:10px; border-radius:8px; text-decoration:none; color:#334155; transition:border-color 0.2s;">
                            <strong style="display:block; color:#0f172a;">👉 ${accessories[1] ? accessories[1].name : 'Backup Solution'}</strong>
                            <span style="font-size:0.8rem; color:#64748b;">${accessories[1] ? accessories[1].desc : 'In case of failure.'}</span>
                        </a>
                    </div>

                    <div style="background:#f8fafc; border:1px dashed #cbd5e1; border-radius:12px; padding:1.5rem;">
                        <h3 style="font-size:1rem; color:#475569; margin-bottom:0.5rem; text-transform:uppercase;">🏷️ Budget Value Pick</h3>
                        <strong style="display:block; color:#0f172a; margin-bottom:5px;">${recSecName}</strong>
                        <p style="font-size:0.85rem; color:#64748b; margin-bottom:1rem;">${recSecReason}</p>
                        <a href="${linkValue}" target="_blank" rel="nofollow sponsored" style="display:block; border:1px solid #94a3b8; background:white; color:#334155; text-align:center; padding:8px; border-radius:6px; font-weight:bold; text-decoration:none; font-size:0.9rem;">Check Price</a>
                    </div>

                </div>
            </div>

            ${faqs.length > 0 ? `
                <div class="faq-container" style="margin-top:2rem; border-top:1px solid #e2e8f0; padding-top:2rem;">
                    <h2 style="font-size:1.5rem; margin-bottom:1.5rem; color:#1e293b;">Frequently Asked Questions</h2>
                    <div style="display:grid; gap:1.5rem; max-width:800px;">
                        ${faqs.map(faq => `
                            <div>
                                <strong style="display:block; color:#0f172a; margin-bottom:0.3rem;">Q: ${faq.q}</strong>
                                <p style="color:#475569; margin:0; line-height:1.5;">A: ${faq.a}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="community-action" style="margin-top: 3rem; background: #fff; padding: 2rem; border-radius: 12px; text-align: center; border: 1px dashed #cbd5e1; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                <h3 style="font-size:1.3rem; color:#0f172a; margin-bottom:0.5rem;">🕵️‍♂️ Still Undecided?</h3>
                <p style="color: #64748b; margin-bottom: 1.5rem; font-size:1rem;">Don't gamble with your wallet. We'll help you make the right choice.</p>
                <a href="mailto:?subject=Question about ${product.model}&body=Hi TechDetective, I'm thinking about buying the ${product.model} but I'm worried about..." style="background:#e2e8f0; color:#334155; padding:12px 24px; border-radius:8px; font-weight:bold; text-decoration:none; display:inline-block;">📩 Ask the Detective</a>
            </div>

            <div style="text-align:center; margin-top: 3rem; color: #94a3b8; font-size: 0.85rem; padding-bottom: 3rem;">
                <p><strong>Affiliate Disclosure:</strong> TechDetective is reader-supported. We may earn a commission from qualifying purchases, which helps fund our independent research.</p>
            </div>
        </div>
    `;

    app.innerHTML = html;
}
