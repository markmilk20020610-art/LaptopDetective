// app.js - v45.17 (Production Ready SPA)

// Global State
let currentCategory = 'all';
let currentSearchTerm = '';
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
    if (typeof productsDB === 'undefined' || !Array.isArray(productsDB)) {
        document.getElementById('app').innerHTML = '<h2 style="text-align:center; color:red; margin-top:100px;">Error: data.js database file is missing. Please ensure it is in the same folder.</h2>';
        return;
    }
    
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
});

function handleRoute() {
    const hash = window.location.hash;
    
    if (!hash || hash === '#' || hash === '') {
        renderHome();
        window.scrollTo(0, 0);
    } else if (hash.startsWith('#/product/')) {
        const id = hash.split('#/product/')[1];
        const product = productsDB.find(p => p.id === id);
        if (product) {
            renderProduct(product);
            window.scrollTo(0, 0);
        } else {
            window.location.hash = '#';
        }
    }
}

// =======================================================
// 1. Render Home Page
// =======================================================
function renderHome() {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <header class="hero">
            <div class="logo">TechDetective 🕵️‍♂️</div>
            <h1>Don't Buy A Time Bomb.</h1>
            <p>Check the hardware failure timeline before you buy.</p>
        </header>
        
        <main class="container">
            <div class="controls-wrapper">
                <input type="text" id="searchInput" class="search-input" placeholder="Search laptops or printers... (e.g., XPS 13, MacBook)" value="${currentSearchTerm}">
                
                <div class="filter-row">
                    <div class="filter-group">
                        <button class="btn ${currentCategory === 'all' ? 'active btn-primary' : 'btn-secondary'}" onclick="window.appSetCategory('all')">All Devices</button>
                        <button class="btn ${currentCategory === 'laptop' ? 'active btn-primary' : 'btn-secondary'}" onclick="window.appSetCategory('laptop')">Laptops</button>
                        <button class="btn ${currentCategory === '3d_printer' ? 'active btn-primary' : 'btn-secondary'}" onclick="window.appSetCategory('3d_printer')">3D Printers</button>
                    </div>
                    
                    <select id="sortSelect" class="sort-select" onchange="window.appSetSort(this.value)">
                        <option value="default" ${currentSort === 'default' ? 'selected' : ''}>Sort: Recommended</option>
                        <option value="risk-high" ${currentSort === 'risk-high' ? 'selected' : ''}>Risk: High to Low (Worst First)</option>
                        <option value="risk-low" ${currentSort === 'risk-low' ? 'selected' : ''}>Risk: Low to High (Safest First)</option>
                    </select>
                </div>
            </div>
            
            <div id="grid" class="grid"></div>
        </main>
        
        <footer>
            <p>&copy; 2026 TechDetective. Independent Hardware Analysis.</p>
            <p style="margin-top:0.5rem; opacity: 0.8;"><strong>Affiliate Disclosure:</strong> We are reader-supported and may earn a commission from purchases.</p>
        </footer>
    `;

    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        renderGrid();
    });

    renderGrid();
}

window.appSetCategory = function(category) {
    currentCategory = category;
    renderHome();
};

window.appSetSort = function(sortValue) {
    currentSort = sortValue;
    renderGrid();
};

// =======================================================
// 2. Render Product Grid
// =======================================================
function renderGrid() {
    const grid = document.getElementById('grid');
    
    let filtered = productsDB.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = (p.model || "").toLowerCase().includes(currentSearchTerm);
        return matchCat && matchSearch;
    });

    if (currentSort === 'risk-high') {
        filtered.sort((a, b) => (Number(b.risk_score) || 0) - (Number(a.risk_score) || 0));
    } else if (currentSort === 'risk-low') {
        filtered.sort((a, b) => (Number(a.risk_score) || 0) - (Number(b.risk_score) || 0));
    }

    if(filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 4rem; color:#64748b; font-size:1.2rem; background:white; border-radius:12px; border:1px dashed #cbd5e1;">No products found matching your search.</div>';
        return;
    }

    let cardsHtml = '';
    filtered.forEach(p => {
        const score = Number(p.risk_score) || 0;
        let badgeClass = score >= 80 ? 'critical' : (score >= 60 ? 'warning' : 'safe');
        const imgUrl = p.image || 'https://via.placeholder.com/400x250?text=No+Image';
        const summary = p.description_summary || 'Click to view full reliability report.';
        
        cardsHtml += `
            <a href="#/product/${p.id}" class="card">
                <div class="card-img-wrapper">
                    <img src="${imgUrl}" onerror="this.src='https://via.placeholder.com/400x250?text=Image+Missing'" alt="${p.model}">
                    <span class="badge ${badgeClass}">Risk Score: ${score}/100</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${p.model}</h3>
                    <div class="card-price">${p.price || 'Check Retailer'}</div>
                    <div class="card-summary">${summary.substring(0, 100)}...</div>
                    <div class="card-link">Read Full Analysis &rarr;</div>
                </div>
            </a>
        `;
    });
    grid.innerHTML = cardsHtml;
}

// =======================================================
// 3. Render Detail Page
// =======================================================
function renderProduct(product) {
    const app = document.getElementById('app');
    
    const score = Number(product.risk_score) || 0;
    let textClass = score >= 80 ? 'text-critical' : (score >= 60 ? 'text-warning' : 'text-safe');
    let alertClass = score >= 80 ? 'alert-critical' : (score >= 60 ? 'alert-warning' : 'alert-safe');
    let trendBadge = product.trend_badge || 'Data Gathering';
    
    const riskData = product.risk_data || {};
    const issues = riskData.issues || [];
    const accessories = product.accessories || [];
    const recs = product.recommendations || {};
    const links = product.links || {};

    let issuesHtml = issues.map(iss => `
        <div class="issue-item">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; align-items:center;">
                <strong style="color:#0f172a; font-size:1.1rem;">${iss.name || 'Reported Issue'}</strong>
                <span style="letter-spacing:2px; font-size:0.9rem;">${'🔴'.repeat(iss.severity || 1)}</span>
            </div>
            <p style="color:#475569; margin:0; font-size:0.95rem; line-height:1.5;">${iss.desc || ''}</p>
        </div>
    `).join('');
    if(!issuesHtml) issuesHtml = '<p style="color:#64748b;">No specific component issues logged yet.</p>';

    const linkSolver = links.solver || "#";
    const linkValue = links.value || "#";
    const linkAnti1 = links.antidote_1 || "#";
    const linkAnti2 = links.antidote_2 || "#";

    app.innerHTML = `
        <main class="container">
            <div class="nav-bar">
                <a href="#" class="back-link">&larr; Back to Directory</a>
            </div>
            
            <div class="detail-layout">
                <div class="detail-img-box">
                    <img src="${product.image || 'https://via.placeholder.com/400x300?text=No+Image'}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Missing'" alt="${product.model}">
                </div>
                
                <div class="detail-info">
                    <h1 class="detail-title">${product.model}</h1>
                    <div class="tags">
                        <span class="tag">${product.category === 'laptop' ? '💻 Laptop' : '🖨️ 3D Printer'}</span>
                        ${product.brand ? `<span class="tag">${product.brand}</span>` : ''}
                        <span class="tag" style="background:#dcfce7; color:#047857; font-weight:900;">Est. Price: ${product.price || 'N/A'}</span>
                    </div>
                    
                    <div class="trust-box">
                        <div>
                            <span style="font-size:0.9rem; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:1px;">Reliability Score</span>
                            <div><span class="score-num ${textClass}">${score}</span><span style="font-size:1.5rem; color:#cbd5e1;"> / 100</span></div>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-weight:800; padding:6px 12px; border-radius:6px; background:#f8fafc; color:#334155; display:inline-block; border:1px solid #cbd5e1;">
                                📈 ${trendBadge}
                            </div>
                            <div style="font-size:0.8rem; color:#94a3b8; margin-top:8px;">Based on aggregated repair data</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="alert-banner ${alertClass}">
                <div style="text-transform:uppercase; font-size:0.85rem; font-weight:800; letter-spacing:1px; margin-bottom:8px;">⚠️ Deal Breaker / Primary Concern</div>
                <div style="font-size:1.4rem; font-weight:bold; line-height:1.4;">${riskData.long_term_risk || product.description_summary || 'Check detailed analysis below.'}</div>
            </div>

            <div class="content-grid">
                <div class="left-col">
                    <div class="panel">
                        <h2>📋 Long-Term Reliability Report</h2>
                        <p style="font-size:1.1rem; line-height:1.7; margin-bottom:1.5rem; color:#334155;">${product.description_summary || ''}</p>
                        
                        ${product.long_term_analysis ? `
                            <div style="background:#f8fafc; padding:1.5rem; border-left:4px solid var(--accent-color); border-radius:4px; margin-bottom:2rem;">
                                <strong style="display:block; margin-bottom:5px; color:#0f172a;">🛠️ Technician Notes:</strong>
                                <span style="color:#475569; line-height:1.6;">${product.long_term_analysis}</span>
                            </div>
                        ` : ''}
                        
                        <h3 style="font-size:1.3rem; margin-bottom:1.2rem; color:#0f172a;">Frequent Failure Points</h3>
                        <div>${issuesHtml}</div>
                    </div>
                    
                    <div class="panel">
                        <h2>💸 Maintenance Outlook</h2>
                        <div style="font-size:1.1rem; margin-bottom:10px;">
                            <strong>Repairability Rating:</strong> 
                            <span style="background:#e2e8f0; padding:4px 10px; border-radius:6px; font-weight:bold; margin-left:5px;">${riskData.maintenance_cost || 'Varies'}</span>
                        </div>
                        <p style="color:#475569; margin-bottom:1.5rem; line-height:1.6;">${product.maintenance_cost_analysis || 'Out of warranty repairs can be expensive. Consider robust alternatives.'}</p>
                        ${product.who_should_avoid ? `<div style="background:#fef2f2; border:1px dashed #fca5a5; padding:1rem; border-radius:8px; color:#b91c1c;"><strong>🛑 Avoid If:</strong> ${product.who_should_avoid}</div>` : ''}
                    </div>
                </div>

                <div class="right-col">
                    <div class="affiliate-box">
                        <div style="font-size:0.9rem; font-weight:900; color:var(--accent-color); text-transform:uppercase; margin-bottom:8px; letter-spacing:1px;">✅ The Smart Choice</div>
                        <h3 style="color:#0f172a; font-size:1.6rem; margin-bottom:0.5rem; line-height:1.2;">Buy This Instead</h3>
                        <p style="color:#64748b; font-size:1rem; margin-bottom:1.5rem;">Avoid the headache. This is the community-verified reliable alternative.</p>
                        
                        <div style="background:#f8fafc; padding:1.2rem; border-radius:8px; text-align:left; border:1px solid #e2e8f0;">
                            <strong style="color:#1d4ed8; font-size:1.1rem; display:block; margin-bottom:12px; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">🏆 Premium Alternative Pick</strong>
                            <div style="font-weight:900; font-size:1.3rem; margin-bottom:8px; color:#0f172a;">${recs.primary?.name || 'Better Option'}</div>
                            <ul style="list-style:none; padding:0; margin-bottom:15px;">
                                ${(recs.primary?.benefits || ['Superior build quality', 'No known thermal issues']).map(b => `<li style="font-size:0.95rem; color:#475569; margin-bottom:6px; display:flex; gap:8px;"><span>✔️</span> <span>${b}</span></li>`).join('')}
                            </ul>
                            <a href="${linkSolver}" target="_blank" rel="nofollow sponsored" class="amz-btn" style="margin-top:0;">Check Price on Amazon</a>
                        </div>
                        
                        <div style="text-align:left; margin-top:1.5rem; padding:0 5px;">
                            <strong style="color:#64748b; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">🏷️ Budget Value Pick</strong>
                            <div style="font-weight:800; font-size:1.1rem; margin-top:5px; color:#0f172a;">${recs.secondary?.name || 'Value Alternative'}</div>
                            <p style="font-size:0.9rem; color:#64748b; margin-top:4px;">${recs.secondary?.reason || 'Best bang for the buck.'}</p>
                            <a href="${linkValue}" target="_blank" rel="nofollow sponsored" style="color:var(--accent-color); font-weight:bold; text-decoration:none; display:inline-block; margin-top:8px;">View Details &rarr;</a>
                        </div>
                    </div>

                    <div class="panel" style="padding:1.5rem;">
                        <h2 style="font-size:1.3rem; margin-bottom:1rem; border:none; padding:0;">💊 The Antidote</h2>
                        <p style="font-size:0.95rem; color:#64748b; margin-bottom:1.5rem; line-height:1.5;">Already own it? You <strong>MUST</strong> use these accessories to delay hardware failure.</p>
                        
                        <a href="${linkAnti1}" target="_blank" rel="nofollow sponsored" class="acc-btn">
                            <span style="font-weight:900; font-size:1.1rem; margin-bottom:6px;">🛡️ ${accessories[0]?.name || 'Protective Gear'}</span>
                            <span style="font-size:0.9rem; color:#64748b; line-height:1.4;">${accessories[0]?.desc || 'Essential to prevent long-term damage.'}</span>
                        </a>
                        
                        <a href="${linkAnti2}" target="_blank" rel="nofollow sponsored" class="acc-btn" style="margin-bottom:0;">
                            <span style="font-weight:900; font-size:1.1rem; margin-bottom:6px;">🔧 ${accessories[1]?.name || 'Maintenance Fix'}</span>
                            <span style="font-size:0.9rem; color:#64748b; line-height:1.4;">${accessories[1]?.desc || 'Bypass known hardware design flaws.'}</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer style="margin-top:0; border-top:none;">
            <p>&copy; 2026 TechDetective.</p>
        </footer>
    `;
}
