// app.js - v45.3 (Restored Filters + Anti-Flicker + Trust Logic)

// Global State
let currentProductId = null;
let currentCategory = 'all'; // State for filter

// --- 1. Initialization & Routing ---

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    window.addEventListener('hashchange', handleRoute);
});

function initApp() {
    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash;
    
    // SEO Reset for Home
    if (!hash || hash === '#' || hash === '') {
        renderHome();
        updateSEO(null); // Reset SEO
        return;
    }

    if (hash.startsWith('#/product/')) {
        const id = hash.split('#/product/')[1];
        const product = productsDB.find(p => p.id === id);
        
        if (product) {
            currentProductId = id;
            renderProduct(product);
            updateSEO(product); 
            window.scrollTo(0, 0);
        } else {
            window.location.hash = '#';
        }
    }
}

// --- 2. Logic: Filtering ---

function setCategory(category) {
    currentCategory = category;
    renderHome(); // Re-render with new filter
}

// --- 3. SEO Injection (Stable) ---

function updateSEO(product) {
    const defaultTitle = "TechDetective | Hardware Failure Database";
    const defaultDesc = "Don't buy new tech until you check the failure timeline. We analyze long-term reliability risks.";

    if (!product) {
        document.title = defaultTitle;
        setMetaDescription(defaultDesc);
        return;
    }

    document.title = `${product.model} - Risk Analysis | TechDetective`;
    const newDesc = `WARNING: ${product.model} Risk Score: ${product.risk_score}/95. Failure: ${product.risk_data.long_term_risk}.`;
    setMetaDescription(newDesc);
}

function setMetaDescription(text) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "description";
        document.head.appendChild(meta);
    }
    // Only update if changed to prevent flashing
    if (meta.getAttribute("content") !== text) {
        meta.setAttribute("content", text);
    }
}

// --- 4. Rendering Logic ---

function renderHome() {
    const app = document.getElementById('app');
    
    // Filter & Sort
    let filteredDB = productsDB;
    if (currentCategory !== 'all') {
        filteredDB = productsDB.filter(p => p.category === currentCategory);
    }
    // Sort by Risk Score (Desc)
    filteredDB.sort((a, b) => b.risk_score - a.risk_score);

    // Active Button Styles
    const btnAll = currentCategory === 'all' ? 'btn-primary' : 'btn-secondary';
    const btnLap = currentCategory === 'laptop' ? 'btn-primary' : 'btn-secondary';
    const btnPrint = currentCategory === '3d_printer' ? 'btn-primary' : 'btn-secondary';

    let html = `
        <header class="hero">
            <div class="logo">TechDetective 🕵️‍♂️</div>
            <h1>Don't Buy A Time Bomb.</h1>
            <p>We analyze long-term failure rates so you don't waste money.</p>
        </header>

        <div class="container">
            <div style="display:flex; justify-content:center; gap:10px; margin-bottom: 2rem;">
                <button onclick="setCategory('all')" class="btn ${btnAll}" style="width:auto; padding: 8px 20px;">All</button>
                <button onclick="setCategory('laptop')" class="btn ${btnLap}" style="width:auto; padding: 8px 20px;">Laptops</button>
                <button onclick="setCategory('3d_printer')" class="btn ${btnPrint}" style="width:auto; padding: 8px 20px;">3D Printers</button>
            </div>

            <div class="grid">
    `;

    if (filteredDB.length === 0) {
        html += `<div style="text-align:center; grid-column: 1/-1; padding: 2rem;">No products found in this category.</div>`;
    }

    filteredDB.forEach(product => {
        let scoreColor = 'safe'; 
        if (product.risk_score >= 80) scoreColor = 'critical';
        else if (product.risk_score >= 60) scoreColor = 'warning';

        // Fix Flickering: Add background color to img container
        html += `
            <a href="#/product/${product.id}" class="card">
                <div class="card-badge ${scoreColor}">Risk Score: ${product.risk_score}</div>
                <div style="background:#f1f5f9; height:200px; width:100%;">
                    <img src="${product.image}" alt="${product.model}" 
                         style="width:100%; height:100%; object-fit:cover; display:block;"
                         onerror="this.onerror=null;this.src='https://via.placeholder.com/300x200?text=No+Image';">
                </div>
                <div class="card-content">
                    <h3>${product.model}</h3>
                    <p class="price">Price: ${product.price}</p>
                    <p class="summary">${product.description_summary.substring(0, 80)}...</p>
                    <span class="cta-link">View Analysis &rarr;</span>
                </div>
            </a>
        `;
    });

    html += `
            </div>
        </div>
        <footer>
            <p>&copy; 2026 TechDetective. Unbiased Reliability Analysis.</p>
        </footer>
    `;

    app.innerHTML = html;
}

function renderProduct(product) {
    const app = document.getElementById('app');

    // UI Logic for Colors
    let scoreColorClass = 'safe-text';
    if (product.risk_score >= 80) scoreColorClass = 'critical-text';
    else if (product.risk_score >= 60) scoreColorClass = 'warning-text';

    let trendHtml = '';
    if (product.risk_score > 60 && product.trend_badge === "Trending Risk") {
        trendHtml = `<span class="trend-badge warning-bg">⚠️ Trending Risk</span>`;
    } else if (product.trend_badge === "Verified Stable") {
        trendHtml = `<span class="trend-badge safe-bg">🛡️ Verified Stable</span>`;
    }

    let confColor = '#ccc'; 
    if (product.confidence_level === 'High') confColor = '#10b981';
    if (product.confidence_level === 'Medium') confColor = '#3b82f6';
    
    const confidenceHtml = `
        <div class="confidence-meter">
            <span class="dot" style="background-color: ${confColor}"></span>
            <span class="conf-text">${product.confidence_level || 'Low'} Confidence</span>
        </div>
    `;

    // Render HTML
    const html = `
        <div class="nav-bar">
            <a href="#" class="back-btn">&larr; Back to List</a>
        </div>

        <div class="product-detail-container">
            <div class="detail-header">
                <div style="flex:1; max-width:400px; background:#f1f5f9; border-radius:12px; overflow:hidden;">
                    <img src="${product.image}" alt="${product.model}" class="detail-img" 
                         style="display:block; width:100%;"
                         onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=No+Image'">
                </div>
                <div class="header-info">
                    <h1>${product.model}</h1>
                    <div class="meta-tags">
                        <span class="tag">${product.brand}</span>
                        <span class="tag">${product.release_year}</span>
                        <span class="tag">${product.category}</span>
                    </div>
                    
                    <div class="trust-module">
                        <div class="score-block">
                            <span class="score-label">Risk Score</span>
                            <span class="score-val ${scoreColorClass}">${product.risk_score}</span>
                        </div>
                        <div class="trust-meta">
                            ${trendHtml}
                            ${confidenceHtml}
                            <div class="source-note">🛡️ Based on aggregated user reports</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="verdict-bar">
                <div class="verdict-content">
                    <strong>Verdict:</strong> 
                    <span>${product.risk_data.long_term_risk}</span>
                </div>
            </div>

            <div class="detail-grid">
                <div class="col-left">
                    <section class="section warning-section">
                        <h2>⚠️ Why it Fails</h2>
                        <p class="analysis-text">${product.description_summary}</p>
                        <p class="analysis-text"><strong>Technical Analysis:</strong> ${product.long_term_analysis}</p>
                        <div class="issues-list">
                            ${product.risk_data.issues.map(issue => `
                                <div class="issue-item">
                                    <div class="issue-header">
                                        <span class="issue-name">${issue.name}</span>
                                        <span class="severity-dots">${'🔴'.repeat(issue.severity)}</span>
                                    </div>
                                    <p>${issue.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <section class="section">
                        <h2>💰 Maintenance Reality</h2>
                        <div class="cost-box">
                            <p><strong>Repairability:</strong> ${product.risk_data.maintenance_cost}</p>
                            <p>${product.maintenance_cost_analysis}</p>
                        </div>
                        <p><strong>Avoid if you are:</strong> ${product.who_should_avoid}</p>
                    </section>
                </div>

                <div class="col-right">
                    <div class="solution-card antidote-card">
                        <h3>💊 The Antidote (Fix It)</h3>
                        <ul class="link-list">
                            ${product.accessories.map((acc, index) => {
                                const link = index === 0 ? product.links.antidote_1 : product.links.antidote_2;
                                return `<li><a href="${link}" target="_blank" rel="nofollow sponsored">👉 Get ${acc.name}</a><br><small>${acc.desc}</small></li>`;
                            }).join('')}
                        </ul>
                    </div>

                    <div class="solution-card solver-card">
                        <h3>🏆 The Better Choice</h3>
                        <div class="rec-product">
                            <strong>${product.recommendations.primary.name}</strong>
                            <ul>
                                ${product.recommendations.primary.benefits.map(b => `<li>✅ ${b}</li>`).join('')}
                            </ul>
                            <a href="${product.links.solver}" target="_blank" rel="nofollow sponsored" class="btn btn-primary">View Best Alternative</a>
                        </div>
                    </div>

                    <div class="solution-card value-card">
                        <h3>🏷️ Best Value Alternative</h3>
                        <div class="rec-product">
                            <strong>${product.recommendations.secondary.name}</strong>
                            <p>${product.recommendations.secondary.reason}</p>
                            <a href="${product.links.value}" target="_blank" rel="nofollow sponsored" class="btn btn-secondary">Check Price</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="faq-container">
                <h2>Frequently Asked Questions</h2>
                ${product.faq_section.map(faq => `
                    <div class="faq-item">
                        <div class="faq-q">Q: ${faq.q}</div>
                        <div class="faq-a">A: ${faq.a}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    app.innerHTML = html;
}
