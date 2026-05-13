import { Home, UserRound } from "lucide-react";

import { bottomTabs, type BottomTab } from "@/data/appData";

const tabIcons = {
  首页: Home,
  我的: UserRound,
} satisfies Record<BottomTab, typeof Home>;

interface BottomNavProps {
  activeTab: BottomTab;
  onChange: (tab: BottomTab) => void;
}

export default function BottomNav({ activeTab, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="底部导航">
      {bottomTabs.map((tab) => {
        const Icon = tabIcons[tab];
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            className={`nav-pill ${isActive ? "is-active" : ""}`}
            onClick={() => onChange(tab)}
            aria-pressed={isActive}
          >
            <Icon size={18} />
            <span>{tab}</span>
          </button>
        );
      })}
    </nav>
  );
}
