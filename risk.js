// risk.js - v30.0 Logic
const RiskCalculator = {
    // Formula: Σ(frequency × severity × long_term_factor)
    // Scale: 0 to 100
    calculate: function(issues) {
        if (!issues || issues.length === 0) return 10;

        let totalScore = 0;
        let maxPossible = 0;

        issues.forEach(i => {
            // Severity (1-3) * Frequency (1-3) * LongTerm (1.0-2.0)
            const impact = i.severity * i.frequency * i.long_term_factor;
            totalScore += impact;
            // Max typical impact per issue is roughly 3*3*2 = 18
            maxPossible += 18; 
        });

        // Normalize to 100-scale with a curve
        // Base score increases quickly with first few issues
        let normalized = (totalScore / Math.max(maxPossible, 20)) * 100;
        
        // Add "Base Anxiety" (starting risk)
        normalized += 20;

        return Math.min(Math.round(normalized), 99);
    },

    getLevel: function(score) {
        if (score >= 80) return { label: "HIGH RISK", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500", icon: "fa-radiation" };
        if (score >= 50) return { label: "MEDIUM RISK", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500", icon: "fa-triangle-exclamation" };
        return { label: "LOW RISK", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500", icon: "fa-check-circle" };
    }
};
