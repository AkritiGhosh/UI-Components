import React, { useEffect, useState } from "react";

const useTheme = () => {
  const initialTheme = "dark";
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("theme") ||
      (document.body.classList.contains("dark") ? "dark" : "light") ||
      initialTheme
    );
  });

  useEffect(() => {
    // Apply the theme class to the body
    const body = document.body;

    // Remove any existing theme classes
    body.classList.remove("light", "dark");

    // Add the current theme class
    body.classList.add(theme);

    // Persist the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      return;
    }
    if (theme == "dark") {
      setTheme("light");
      return;
    }
  };

  return [theme, toggleTheme];
};

export default useTheme;
