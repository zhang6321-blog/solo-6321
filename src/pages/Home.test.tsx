import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import Home from "@/pages/Home";
import { useJournalStore } from "@/store/useJournalStore";

describe("Home page", () => {
  beforeEach(() => {
    useJournalStore.setState({
      activeTab: "首页",
      activeTool: "待办",
    });
  });

  it("renders the sketch-inspired homepage sections", () => {
    render(<Home />);

    expect(screen.getByText("日历")).toBeInTheDocument();
    expect(screen.getByText("今日励志语录")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /笔记/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "底部导航" })).toBeInTheDocument();
  });

  it("switches side tool state and bottom tab view", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(screen.getByRole("button", { name: /笔记/i }));
    expect(screen.getByText("收纳灵感、摘录与想法")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /我的/i }));
    expect(screen.getByText("包含数据分析")).toBeInTheDocument();
    expect(screen.getByText("周趋势")).toBeInTheDocument();
  });
});
