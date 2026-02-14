// risk.js - v30.2 (Anti-NaN Logic)
const RiskCalculator = {
    calculate: function(issues) {
        if (!issues || issues.length === 0) return 10;

        let totalScore = 0;
        let maxPossible = 0;

        issues.forEach(i => {
            // 安全检查：如果缺少数值，默认设为 1，防止 NaN 错误
            const s = i.severity || 1;
            const f = i.frequency || 1;
            const l = i.long_term_factor || 1.0;

            const impact = s * f * l;
            totalScore += impact;
            maxPossible += 18; 
        });

        let normalized = (totalScore / Math.max(maxPossible, 20)) * 100;
        normalized += 20;

        // 确保结果一定是数字
        const final = Math.min(Math.round(normalized), 99);
        return isNaN(final) ? 50 : final; // 如果还是算出NaN，强制返回50分
    },

    getLevel: function(score) {
        if (score >= 80) return { label: "HIGH RISK", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500", icon: "fa-radiation" };
        if (score >= 50) return { label: "MEDIUM RISK", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500", icon: "fa-triangle-exclamation" };
        return { label: "LOW RISK", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500", icon: "fa-check-circle" };
    }
};
