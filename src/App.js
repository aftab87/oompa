import "./App.css";
import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import About from "Pages/About";
import SignUp from "Pages/SignUp";
import Login from "Pages/Login";
import Page404 from "Pages/Page404";
import Dashboard from "Pages/Dashboard";
import EmailConfirmation from "Pages/EmailConfirmation";
import MainLayout from "Layouts/MainLayout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme"


export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => { }
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const ThemeContextProvider = [darkMode, setDarkMode];

  return (
    <>
      <DarkModeContext.Provider value={ThemeContextProvider}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {/* <Route index element={isLoggedIn ? <Home /> : <Signin />} /> */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="emailconfirmation" element={<EmailConfirmation />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;