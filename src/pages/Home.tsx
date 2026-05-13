import BottomNav from "@/components/BottomNav";
import CalendarPanel from "@/components/CalendarPanel";
import ProfileDashboard from "@/components/ProfileDashboard";
import QuotePanel from "@/components/QuotePanel";
import SidebarTools from "@/components/SidebarTools";
import { useJournalStore } from "@/store/useJournalStore";

export default function Home() {
  const activeTab = useJournalStore((state) => state.activeTab);
  const activeTool = useJournalStore((state) => state.activeTool);
  const setActiveTab = useJournalStore((state) => state.setActiveTab);
  const setActiveTool = useJournalStore((state) => state.setActiveTool);

  return (
    <main className="journal-app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <section className="hero-copy">
        <p className="hero-kicker">手绘草图还原</p>
        <h1>日历、励志语录与数据分析汇成一张桌面手账页。</h1>
        <p className="hero-text">
          纸张感底色、手写感标题和轻微错位边框共同还原草图气质，首页与“我的”通过底部导航切换。
        </p>
      </section>

      {activeTab === "首页" ? (
        <section className="workspace-board">
          <SidebarTools activeTool={activeTool} onSelect={setActiveTool} />
          <CalendarPanel />
          <QuotePanel />
        </section>
      ) : (
        <section className="workspace-board single-view">
          <ProfileDashboard />
        </section>
      )}

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </main>
  );
}
