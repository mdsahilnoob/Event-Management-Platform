import { useState, useEffect } from "react";

export default function useDarkSide() {
    // const initialTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(""); // Initialize with an empty string

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setTheme(storedTheme || "light");
    }, []);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) {
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
