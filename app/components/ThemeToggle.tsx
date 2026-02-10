"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="rounded-lg p-2 text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
