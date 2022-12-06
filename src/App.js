import './App.css';
import React, { createContext, useState } from "react";
import Main from "./Components/Main"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme"


export const DarkModeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const ThemeContextProvider = [darkMode, setDarkMode];


    return (
        <DarkModeContext.Provider value={ThemeContextProvider}>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <Main />
                </>
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
}

export default App;