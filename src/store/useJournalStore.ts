import { create } from "zustand";

import type { BottomTab, SideTool } from "@/data/appData";

interface JournalState {
  activeTab: BottomTab;
  activeTool: SideTool;
  setActiveTab: (tab: BottomTab) => void;
  setActiveTool: (tool: SideTool) => void;
}

export const useJournalStore = create<JournalState>((set) => ({
  activeTab: "首页",
  activeTool: "待办",
  setActiveTab: (tab) => set({ activeTab: tab }),
  setActiveTool: (tool) => set({ activeTool: tool }),
}));
