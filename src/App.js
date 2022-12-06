import "./App.scss";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
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
import { lightTheme, darkTheme } from "./Components/Theme";
import DashboardLayout from "Layouts/DashboardLayout";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const LoggedInContext = createContext({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark_mode")) || false);
  const ThemeContextProvider = [darkMode, setDarkMode];

  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(sessionStorage.getItem("is_logged_in")) || false);
  const LoggedInContextProvider = [isLoggedIn, setIsLoggedIn];

  useEffect(() => {
    localStorage.setItem("dark_mode", JSON.stringify(darkMode));
    sessionStorage.setItem("is_logged_in", JSON.stringify(isLoggedIn));
    !isLoggedIn && sessionStorage.clear();
  }, [darkMode, isLoggedIn]);

  return (
    <>
      <LoggedInContext.Provider value={LoggedInContextProvider}>
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
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                </Route>
                <Route path="emailconfirmation" element={<EmailConfirmation />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </DarkModeContext.Provider>
      </LoggedInContext.Provider>
    </>
  );
}

export default App;
