import { ImageIcon, Sparkles } from "lucide-react";

import { quoteCard } from "@/data/appData";

export default function QuotePanel() {
  return (
    <section className="paper-panel quote-panel">
      <div className="panel-heading">
        <div>
          <p className="section-eyebrow">右侧卡片</p>
          <h2>{quoteCard.title}</h2>
        </div>
        <div className="quote-badge">
          <Sparkles size={16} />
          <span>每日更新</span>
        </div>
      </div>

      <div className="quote-image-card" role="img" aria-label="励志语录配图占位">
        <div className="quote-image-label">
          <ImageIcon size={18} />
          <span>{quoteCard.imagePromptLabel}</span>
        </div>
      </div>

      <div className="quote-meta">
        <div>
          <p className="meta-label">日期</p>
          <strong>{quoteCard.dateText}</strong>
        </div>
        <div>
          <p className="meta-label">时间</p>
          <strong>{quoteCard.timeText}</strong>
        </div>
      </div>

      <blockquote className="quote-content">“{quoteCard.quote}”</blockquote>
    </section>
  );
}
