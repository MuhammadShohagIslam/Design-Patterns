import { useContext } from "react";
import { ThemeContext } from "./../components/ThemeProvider/ThemeContext";

// use custome hook
function useThemeContext(params) {
    const theme = useContext(ThemeContext);
    return {
        theme,
    };
}

export default useThemeContext
