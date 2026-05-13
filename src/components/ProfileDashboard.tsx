import { BarChart3, ChartColumnBig, NotebookPen, TrendingUp } from "lucide-react";

import { habitMetrics, statsCards, trendPoints } from "@/data/appData";

export default function ProfileDashboard() {
  return (
    <section className="paper-panel dashboard-panel">
      <div className="panel-heading">
        <div>
          <p className="section-eyebrow">我的页面</p>
          <h2>包含数据分析</h2>
        </div>
        <div className="profile-chip">
          <NotebookPen size={16} />
          <span>本周回顾</span>
        </div>
      </div>

      <div className="profile-summary">
        <div className="avatar-stamp">我</div>
        <div>
          <p className="meta-label">记录者</p>
          <h3>今日手账档案</h3>
          <p>把待办、专注、摘录和复盘汇总成一张清晰的生活分析页。</p>
        </div>
      </div>

      <div className="stats-grid">
        {statsCards.map((card) => (
          <article key={card.label} className="stats-card">
            <p className="meta-label">{card.label}</p>
            <strong>{card.value}</strong>
            <span>{card.detail}</span>
          </article>
        ))}
      </div>

      <div className="analytics-grid">
        <article className="chart-card">
          <div className="mini-title">
            <ChartColumnBig size={16} />
            <span>周趋势</span>
          </div>
          <div className="trend-chart" aria-label="本周趋势图">
            {trendPoints.map((point) => (
              <div key={point.label} className="trend-column-wrap">
                <div className="trend-column" style={{ height: `${point.value}%` }} />
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="chart-card">
          <div className="mini-title">
            <TrendingUp size={16} />
            <span>习惯完成度</span>
          </div>
          <div className="habit-list">
            {habitMetrics.map((metric) => (
              <div key={metric.label} className="habit-item">
                <div className="habit-head">
                  <span>{metric.label}</span>
                  <strong>{metric.progress}%</strong>
                </div>
                <div className="habit-track">
                  <div className="habit-fill" style={{ width: `${metric.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="analysis-note">
        <BarChart3 size={18} />
        <p>数据分析基于本地静态示例数据呈现，后续可以直接替换为真实接口。</p>
      </div>
    </section>
  );
}
