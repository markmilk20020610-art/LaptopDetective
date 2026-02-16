// app.js - v45.2 (SEO Injection + Trust Module + Compliance UI)

// Global State
let currentProductId = null;

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
    if (!hash || hash === '#') {
        renderHome();
        updateSEO(null); // Reset SEO to default
        window.scrollTo(0, 0);
        return;
    }

    if (hash.startsWith('#/product/')) {
        const id = hash.split('#/product/')[1];
        const product = productsDB.find(p => p.id === id);
        
        if (product) {
            currentProductId = id;
            renderProduct(product);
            updateSEO(product); // Inject Dynamic SEO
            window.scrollTo(0, 0);
        } else {
            // Product not found, redirect home
            window.location.hash = '#';
        }
    }
}

// --- 2. SEO Injection Engine (Pure Frontend) ---

function updateSEO(product) {
    const defaultTitle = "TechDetective | Hardware Failure Database & Risk Analysis";
    const defaultDesc = "Don't buy new tech until you check the failure timeline. We analyze long-term reliability risks for laptops and 3D printers.";

    if (!product) {
        document.title = defaultTitle;
        setMetaDescription(defaultDesc);
        return;
    }

    // Dynamic Title
    document.title = `${product.model} Failure Analysis & Risk Score | TechDetective`;

    // Dynamic Description
    const newDesc = `WARNING: ${product.model} Risk Score: ${product.risk_score}/100. Critical failure identified: ${product.risk_data.long_term_risk}. Check repair costs before buying.`;
    setMetaDescription(newDesc);
}

function setMetaDescription(text) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "description";
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", text);
}

// --- 3. Rendering Logic ---

function renderHome() {
    const app = document.getElementById('app');
    
    // Sort by Risk Score (Highest Risk First)
    const sortedDB = [...productsDB].sort((a, b) => b.risk_score - a.risk_score);

    let html = `
        <header class="hero">
            <div class="logo">TechDetective 🕵️‍♂️</div>
            <h1>Don't Buy A Time Bomb.</h1>
            <p>We analyze long-term failure rates so you don't waste money.</p>
        </header>
        
        <div class="container">
            <div class="grid">
    `;

    sortedDB.forEach(product => {
        // Color coding for Risk Score card
        let scoreColor = 'safe'; 
        if (product.risk_score > 80) scoreColor = 'critical';
        else if (product.risk_score > 60) scoreColor = 'warning';

        html += `
            <a href="#/product/${product.id}" class="card">
                <div class="card-badge ${scoreColor}">Risk Score: ${product.risk_score}</div>
                <img src="${product.image}" alt="${product.model}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
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
            <p style="font-size: 0.8rem; color: #666;">Disclaimer: We may earn affiliate commissions from links. Risk scores are based on aggregated user reports and technical analysis.</p>
        </footer>
    `;

    app.innerHTML = html;
}

function renderProduct(product) {
    const app = document.getElementById('app');

    // 3.1 Trust Module Logic
    let scoreColorClass = 'safe-text';
    if (product.risk_score > 80) scoreColorClass = 'critical-text';
    else if (product.risk_score > 60) scoreColorClass = 'warning-text';

    // Trend Badge Logic
    let trendHtml = '';
    if (product.risk_score > 60 && product.trend_badge === "Trending Risk") {
        trendHtml = `<span class="trend-badge warning-bg">⚠️ Trending Risk</span>`;
    } else if (product.trend_badge === "Verified Stable") {
        trendHtml = `<span class="trend-badge safe-bg">🛡️ Verified Stable</span>`;
    }

    // Confidence Level Logic
    let confColor = '#ccc'; // Low
    if (product.confidence_level === 'High') confColor = '#10b981'; // Green
    if (product.confidence_level === 'Medium') confColor = '#3b82f6'; // Blue
    
    const confidenceHtml = `
        <div class="confidence-meter">
            <span class="dot" style="background-color: ${confColor}"></span>
            <span class="conf-text">${product.confidence_level} Confidence</span>
        </div>
    `;

    // 3.2 HTML Construction
    const html = `
        <div class="nav-bar">
            <a href="#" class="back-btn">&larr; Back to List</a>
        </div>

        <div class="product-detail-container">
            <div class="detail-header">
                <img src="${product.image}" alt="${product.model}" class="detail-img" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
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
                            <div class="source-note">🛡️ Analysis based on aggregated user reports</div>
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
                        <h2>⚠️ Why it Fails (The Time Bomb)</h2>
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
                        <p>Already own it? Extend its lifespan with these specific fixes:</p>
                        <ul class="link-list">
                            ${product.accessories.map((acc, index) => {
                                // Dynamic link selection
                                const link = index === 0 ? product.links.antidote_1 : product.links.antidote_2;
                                return `<li><a href="${link}" target="_blank" rel="nofollow sponsored">👉 Get ${acc.name}</a><br><small>${acc.desc}</small></li>`;
                            }).join('')}
                        </ul>
                    </div>

                    <div class="solution-card solver-card">
                        <h3>🏆 The Better Choice</h3>
                        <p>Don't deal with these headaches. Get this instead:</p>
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
                        <p>Save money, lose the risk:</p>
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
            
            <div style="text-align:center; margin-top: 40px; color: #888; font-size: 0.8rem;">
                <p>Disclaimer: TechDetective is reader-supported. We may earn commissions if you buy through our links.</p>
            </div>
        </div>
    `;

    app.innerHTML = html;
}
