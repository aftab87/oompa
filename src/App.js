import './App.css';
import React, { useContext } from 'react';
import Main from "./Components/Main"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"


function App() {

    const [theme, setTheme] = useContext('light');
    
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Main />
        </ThemeProvider>
    );
}

export default App;