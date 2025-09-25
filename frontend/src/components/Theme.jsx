import React, { useEffect, useState } from "react";

const Theme = () => {
  const THEMES = [
    "Select a theme",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "pro",
  ];
  const [theme, setTheme] = useState("light");
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });
  console.log(theme);

  return (
    <div className="text-sm">
      <select
        defaultValue="Pick a language"
        className=" bg-white text-gray-900 border border-gray-300 focus:ring-blue-500 focus:ring-2 px-2 py-1 rounded-xl"
        onChange={handleThemeChange}
      >
        {THEMES.map((theme) => (
          <option value={theme} key={theme}>
            {theme.charAt(0).toLocaleUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Theme;
