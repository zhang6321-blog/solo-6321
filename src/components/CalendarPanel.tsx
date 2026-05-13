import { buildCalendarCells } from "@/data/appData";

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

export default function CalendarPanel() {
  const baseDate = new Date(2026, 4, 13);
  const monthText = `${baseDate.getFullYear()} 年 ${baseDate.getMonth() + 1} 月`;
  const calendarCells = buildCalendarCells(baseDate);

  return (
    <section className="paper-panel calendar-panel">
      <div className="panel-heading">
        <div>
          <p className="section-eyebrow">中间视图</p>
          <h2>日历</h2>
        </div>
        <div className="calendar-month-tag">{monthText}</div>
      </div>

      <div className="weekday-row">
        {weekDays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="calendar-grid" role="grid" aria-label="当前月份日历">
        {calendarCells.map((cell) => (
          <div
            key={cell.key}
            className={`calendar-cell ${cell.isCurrentMonth ? "" : "is-muted"} ${
              cell.isToday ? "is-today" : ""
            }`}
            role="gridcell"
            aria-selected={cell.isToday}
          >
            <span>{cell.dayNumber}</span>
          </div>
        ))}
      </div>

      <div className="calendar-footer">
        <div>
          <p className="meta-label">今日节奏</p>
          <strong>专注 + 阅读 + 复盘</strong>
        </div>
        <div>
          <p className="meta-label">提醒</p>
          <strong>晚 8:30 更新今日笔记</strong>
        </div>
      </div>
    </section>
  );
}
