"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        backgroundColor: "var(--card)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border)",
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
