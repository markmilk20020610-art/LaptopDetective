// risk.js - Logic Module
const RiskCalculator = {
    // 自动评分算法
    calculateScore: function(issues) {
        if (!issues || issues.length === 0) return 10; // 默认低风险
        
        let totalImpact = 0;
        issues.forEach(issue => {
            // 严重性 x 1.5 x 频率
            totalImpact += (issue.severity * 1.5) * issue.frequency;
        });

        // 归一化处理 (防止溢出)
        // 假设平均 3 个问题，最高分约 450。除以 3.8 压缩到 100 以内
        let finalScore = Math.round(totalImpact / 3.8);
        return Math.min(Math.max(finalScore, 15), 99); 
    },

    // 风险评级可视化
    getLevel: function(score) {
        if (score >= 80) return { label: "CRITICAL RISK", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500", badge: "bg-red-600" };
        if (score >= 55) return { label: "MODERATE RISK", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500", badge: "bg-orange-500" };
        return { label: "SAFE / LOW RISK", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500", badge: "bg-emerald-600" };
    }
};
