export type SideTool = "待办" | "计时器" | "笔记";
export type BottomTab = "首页" | "我的";

export interface QuoteCard {
  title: string;
  dateText: string;
  timeText: string;
  quote: string;
  imagePromptLabel: string;
}

export interface StatsCard {
  label: string;
  value: string;
  detail: string;
}

export interface TrendPoint {
  label: string;
  value: number;
}

export interface HabitMetric {
  label: string;
  progress: number;
}

export interface CalendarCell {
  key: string;
  dayNumber: number | null;
  isToday: boolean;
  isCurrentMonth: boolean;
}

export const sideTools: SideTool[] = ["待办", "计时器", "笔记"];
export const bottomTabs: BottomTab[] = ["首页", "我的"];

export const quoteCard: QuoteCard = {
  title: "今日励志语录",
  dateText: "2026 / 05 / 13",
  timeText: "08:30 AM",
  quote: "把今天过成一页清晰的手账，哪怕只完成一件小事，也是在认真靠近想要的生活。",
  imagePromptLabel: "手账插画",
};

export const statsCards: StatsCard[] = [
  { label: "连续记录", value: "18 天", detail: "比上周多 4 天" },
  { label: "本月专注时长", value: "26.5 h", detail: "平均每天 53 分钟" },
  { label: "已完成待办", value: "42 项", detail: "完成率 84%" },
];

export const trendPoints: TrendPoint[] = [
  { label: "一", value: 48 },
  { label: "二", value: 64 },
  { label: "三", value: 58 },
  { label: "四", value: 76 },
  { label: "五", value: 71 },
  { label: "六", value: 83 },
  { label: "日", value: 62 },
];

export const habitMetrics: HabitMetric[] = [
  { label: "晨间计划", progress: 84 },
  { label: "阅读摘录", progress: 61 },
  { label: "晚间复盘", progress: 72 },
];

export function buildCalendarCells(baseDate = new Date()): CalendarCell[] {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const totalCells = 42;

  return Array.from({ length: totalCells }, (_, index) => {
    if (index < firstDay) {
      const dayNumber = daysInPrevMonth - firstDay + index + 1;
      return {
        key: `prev-${dayNumber}`,
        dayNumber,
        isToday: false,
        isCurrentMonth: false,
      };
    }

    const currentDay = index - firstDay + 1;
    if (currentDay <= daysInMonth) {
      const isToday = currentDay === baseDate.getDate();

      return {
        key: `current-${currentDay}`,
        dayNumber: currentDay,
        isToday,
        isCurrentMonth: true,
      };
    }

    return {
      key: `next-${currentDay - daysInMonth}`,
      dayNumber: currentDay - daysInMonth,
      isToday: false,
      isCurrentMonth: false,
    };
  });
}
