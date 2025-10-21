import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
    setDark(!dark);
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={toggleTheme} checked={dark} />

      {/* Sun icon */}
      <IoSunny size={18} className={"swap-on"} />

      {/* Moon icon */}
      <MdDarkMode size={18} className="swap-off" />
    </label>
  );
};

export default ThemeToggle;
