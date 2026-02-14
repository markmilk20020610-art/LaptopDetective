// risk.js - v28.4 (More Realistic Scoring Algorithm)

const RiskCalculator = {
    // 新算法：不做人为加分，真实反映数据差异
    calculateScore: function(issues) {
        if (!issues || issues.length === 0) return 0;
        
        let totalImpact = 0;
        
        // 权重计算：
        // 严重性 (Severity) 权重更高，因为“爆炸”比“掉漆”严重得多
        issues.forEach(issue => {
            // 算法：(严重性 x 1.5) x 频率
            // 举例：严重性10(炸主板) x 频率5 = 75分
            // 举例：严重性3(风扇吵) x 频率10 = 45分
            totalImpact += (issue.severity * 1.5) * issue.frequency;
        });

        // 归一化：假设平均3个问题，最大得分为 3 * 10 * 1.5 * 10 = 450
        // 我们将其压缩到 0-100 区间
        // 调整系数 3.5 是为了让大多数产品落在 40-90 分之间
        let finalScore = Math.round(totalImpact / 3.5);

        // 封顶 99，保底 10
        return Math.min(Math.max(finalScore, 10), 99); 
    },

    getLevel: function(score) {
        // 重新定义评级区间
        if (score >= 85) return { label: "CRITICAL RISK", color: "text-red-500", bg: "bg-red-500", border: "border-red-500" };
        if (score >= 60) return { label: "MODERATE RISK", color: "text-orange-400", bg: "bg-orange-500", border: "border-orange-500" };
        if (score >= 40) return { label: "MINOR ISSUES", color: "text-yellow-400", bg: "bg-yellow-500", border: "border-yellow-500" };
        return { label: "SAFE BUY", color: "text-emerald-500", bg: "bg-emerald-500", border: "border-emerald-500" };
    }
};
