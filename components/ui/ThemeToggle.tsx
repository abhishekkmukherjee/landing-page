"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = (stored as "dark" | "light") || (prefersLight ? "light" : "dark");
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-3 py-2 text-xs font-semibold text-primary transition hover:border-strong hover:bg-surface-strong"
      aria-label="Toggle light and dark theme"
    >
      <span className="h-2 w-2 rounded-full bg-aurora" />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
