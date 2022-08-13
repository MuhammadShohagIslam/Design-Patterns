import React from "react";
import useThemeContext from "../hooks/useThemeContext";

export default function Toogle() {
    const { theme } = useThemeContext();

    if (!theme) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }

    return (
        <label className="switch">
            <input type="checkbox" onClick={theme.toggleTheme} />
        </label>
    );
}
