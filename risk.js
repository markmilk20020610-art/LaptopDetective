// risk.js
const RiskCalculator = {
    // 算法：Σ(frequency * severity) / max_possible * 100
    calculateScore: function(issues) {
        if (!issues || issues.length === 0) return 0;
        
        let totalScore = 0;
        let maxPossibleScore = issues.length * 80; // 假设每项最高影响因子

        issues.forEach(issue => {
            // 严重性 x 频率 x 长期因子(默认1.2)
            totalScore += (issue.severity * issue.frequency * 1.2);
        });

        // 归一化到 0-100
        let finalScore = Math.min(Math.round((totalScore / maxPossibleScore) * 100) + 40, 99); 
        // +40 是为了让分数看起来更“严厉”，起步就有风险
        
        return finalScore;
    },

    getLevel: function(score) {
        if (score >= 80) return { label: "CRITICAL RISK", color: "text-red-500", bg: "bg-red-500", border: "border-red-500" };
        if (score >= 50) return { label: "MODERATE CAUTION", color: "text-yellow-500", bg: "bg-yellow-500", border: "border-yellow-500" };
        return { label: "LOW RISK", color: "text-emerald-500", bg: "bg-emerald-500", border: "border-emerald-500" };
    }
};