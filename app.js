// app.js - v45.7 (Final Conversion Polish: Specific Risks + Community Anchors)

// Global State
let currentProductId = null;
let currentCategory = 'all';

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
            window.location.hash = '#';
        }
    }
}

// --- 2. Logic: Filtering & Sorting ---
function setCategory(category) {
    currentCategory = category;
    renderHome(); // Re-render logic will handle the filtering
}

// --- 3. SEO Injection (Dynamic Meta Tags) ---
function updateSEO(product) {
    const defaultTitle = "TechDetective | Hardware Failure Database";
    const defaultDesc = "Don't buy new tech until you check the failure timeline. We analyze long-term reliability risks.";

    if (!product) {
        document.title = defaultTitle;
        setMetaDescription(defaultDesc);
        return;
    }

    // Dynamic Title for Product Pages
    document.title = `${product.model} - Reliability Concern Identified | TechDetective`;
    const newDesc = `Risk Score: ${product.risk_score}/95. Concern: ${product.risk_data.long_term_risk}. Read the full analysis.`;
    setMetaDescription(newDesc);
}

function setMetaDescription(text) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "description";
        document.head.appendChild(meta);
    }
    // Update only if different to avoid DOM thrashing
    if (meta.getAttribute("content") !== text) {
        meta.setAttribute("content", text);
    }
}

// --- 4. Rendering Logic ---

function renderHome() {
    const app = document.getElementById('app');
    
    // A. Filter Logic
    let filteredDB = productsDB;
    if (currentCategory !== 'all') {
        filteredDB = productsDB.filter(p => p.category === currentCategory);
    }

    // B. Sorting Logic (Highest Risk First)
    filteredDB.sort((a, b) => b.risk_score - a.risk_score);

    // C. Button State Styling
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
        html += `<div style="text-align:center; grid-column: 1/-1; padding: 2rem; color:#666;">No products found in this category.</div>`;
    }

    filteredDB.forEach(product => {
        // Color Logic for Badges
        let scoreColor = 'safe'; 
        if (product.risk_score >= 80) scoreColor = 'critical';
        else if (product.risk_score >= 60) scoreColor = 'warning';

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
        <footer style="text-align:center; padding: 2rem; color: #64748b; font-size: 0.9rem;">
            <p>&copy; 2026 TechDetective. Unbiased Reliability Analysis.</p>
            <p style="margin-top:0.5rem; opacity: 0.8;"><strong>Affiliate Disclosure:</strong> TechDetective is reader-supported. We may earn a commission from qualifying purchases via our links.</p>
        </footer>
    `;

    app.innerHTML = html;
}

function renderProduct(product) {
    const app = document.getElementById('app');

    // UI Color Logic
    let scoreColorClass = 'safe-text';
    if (product.risk_score >= 80) scoreColorClass = 'critical-text';
    else if (product.risk_score >= 60) scoreColorClass = 'warning-text';

    // Trend Badge Logic
    let trendHtml = '';
    if (product.risk_score > 60 && product.trend_badge === "Trending Risk") {
        trendHtml = `<span class="trend-badge warning-bg">⚠️ Trending Risk</span>`;
    } else if (product.trend_badge === "Verified Stable") {
        trendHtml = `<span class="trend-badge safe-bg">🛡️ Verified Stable</span>`;
    }

    // Confidence Meter Logic
    let confColor = '#ccc'; 
    if (product.confidence_level === 'High') confColor = '#10b981';
    if (product.confidence_level === 'Medium') confColor = '#3b82f6';
    
    const confidenceHtml = `
        <div class="confidence-meter">
            <span class="dot" style="background-color: ${confColor}"></span>
            <span class="conf-text">${product.confidence_level || 'Low'} Confidence</span>
        </div>
    `;

    // Estimate Repair Cost (Community Avg Logic)
    let repairEst = "$150 - $300";
    if (product.risk_data.maintenance_cost === "High") repairEst = "$300 - $600";
    if (product.risk_data.maintenance_cost === "Total Loss") repairEst = "Total Unit Replacement";
    if (product.risk_data.maintenance_cost === "Low") repairEst = "$50 - $100";
    if (product.risk_data.maintenance_cost === "Very High") repairEst = "$500+";

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
                    <strong>Primary Concern:</strong> 
                    <span>${product.risk_data.long_term_risk}</span>
                </div>
            </div>

            <div class="detail-grid">
                <div class="col-left">
                    <section class="section warning-section">
                        <h2>⚠️ Reliability Analysis</h2>
                        <p class="analysis-text">${product.description_summary}</p>
                        <p class="analysis-text"><strong>Technical Detail:</strong> ${product.long_term_analysis}</p>
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
                        <h2>💰 Maintenance Outlook</h2>
                        <div class="cost-box">
                            <p><strong>Repairability:</strong> ${product.risk_data.maintenance_cost}</p>
                            <p>${product.maintenance_cost_analysis}</p>
                        </div>
                        <p><strong>Not recommended for:</strong> ${product.who_should_avoid}</p>
                    </section>
                </div>

                <div class="col-right">
                    
                    <div class="solution-card solver-card">
                        <h3>🏆 Recommended Alternative</h3>
                        
                        <div style="margin-bottom:1rem; font-size:0.85rem; color:#b45309; background:#fffbeb; padding:10px; border-radius:4px; border-left:4px solid #f59e0b;">
                            <strong>Reliability Concern Identified:</strong><br>
                            ${product.risk_data.long_term_risk}
                        </div>

                        <div class="rec-product">
                            <strong>${product.recommendations.primary.name}</strong>
                            <ul>
                                ${product.recommendations.primary.benefits.map(b => `<li>✅ ${b}</li>`).join('')}
                            </ul>
                            
                            <a href="${product.links.solver}" target="_blank" rel="nofollow sponsored" class="btn btn-primary">View Alternative</a>
                            
                            <div style="text-align:center; margin-top:12px; font-size:0.8rem; color:#64748b; border-top:1px solid #e2e8f0; padding-top:8px;">
                                Est. Maintenance (Community Avg):<br>
                                <strong>${repairEst}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="solution-card antidote-card">
                        <h3>💊 Maintenance Parts</h3>
                        <p style="font-size:0.9rem; margin-bottom:10px; color:#64748b;">Keep your existing unit running:</p>
                        <ul class="link-list">
                            ${product.accessories.map((acc, index) => {
                                const link = index === 0 ? product.links.antidote_1 : product.links.antidote_2;
                                return `<li><a href="${link}" target="_blank" rel="nofollow sponsored">👉 ${acc.name}</a><br><small>${acc.desc}</small></li>`;
                            }).join('')}
                        </ul>
                    </div>

                    <div class="solution-card value-card">
                        <h3>🏷️ Value Alternative</h3>
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

            <div style="text-align:center; margin-top: 40px; color: #888; font-size: 0.8rem; padding-bottom: 2rem;">
                <p><strong>Affiliate Disclosure:</strong> TechDetective is reader-supported. We may earn a commission from qualifying purchases made through our links.</p>
            </div>
        </div>
    `;

    app.innerHTML = html;
}
