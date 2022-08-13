import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider/ThemeContext";

export default function ListTheme() {
    const theme = useContext(ThemeContext);
    
    return (
        <div style={theme.theme}>
            <li style={theme.theme}>Theme</li>
        </div>
    );
}
