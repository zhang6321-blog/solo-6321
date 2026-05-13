import { BookMarked, ListTodo, TimerReset } from "lucide-react";

import { sideTools, type SideTool } from "@/data/appData";

const toolIcons = {
  待办: ListTodo,
  计时器: TimerReset,
  笔记: BookMarked,
} satisfies Record<SideTool, typeof ListTodo>;

const toolDescriptions: Record<SideTool, string> = {
  待办: "整理今天最重要的三件事",
  计时器: "给专注留出完整时段",
  笔记: "收纳灵感、摘录与想法",
};

interface SidebarToolsProps {
  activeTool: SideTool;
  onSelect: (tool: SideTool) => void;
}

export default function SidebarTools({ activeTool, onSelect }: SidebarToolsProps) {
  return (
    <aside className="paper-panel sidebar-panel">
      <div className="section-title">侧边工具</div>
      <div className="sidebar-button-list">
        {sideTools.map((tool) => {
          const Icon = toolIcons[tool];
          const isActive = activeTool === tool;

          return (
            <button
              key={tool}
              type="button"
              className={`sidebar-button ${isActive ? "is-active" : ""}`}
              onClick={() => onSelect(tool)}
              aria-pressed={isActive}
            >
              <Icon size={18} strokeWidth={2.2} />
              <span>{tool}</span>
            </button>
          );
        })}
      </div>
      <div className="tool-note-card">
        <p className="tool-note-label">当前模块</p>
        <h3>{activeTool}</h3>
        <p>{toolDescriptions[activeTool]}</p>
      </div>
    </aside>
  );
}
