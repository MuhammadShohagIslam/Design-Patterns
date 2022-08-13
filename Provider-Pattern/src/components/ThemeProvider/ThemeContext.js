import React, { useState } from "react";

export const ThemeContext = React.createContext();
const themes = {
    light: {
        background: "#fff",
        color: "#000",
    },
    dark: {
        background: "#1717171",
        color: "#fff",
    },
};

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const providerValue = {
        theme: themes[theme],
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
}
