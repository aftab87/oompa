import "./App.scss";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme";
import MainLayout from "Layouts/MainLayout";
import Home from "Pages/Home";
import About from "Pages/About";
import SignUp from "Pages/SignUp";
import Login from "Pages/Login";
import Page404 from "Pages/Page404";
import Dashboard from "Pages/Dashboard";
import Rewards from "Pages/RewardsForm";
import EditRewardsForm from "Pages/EditRewardsForm";
import EmailConfirmation from "Pages/EmailConfirmation";
import ParentKids from "Components/Dashboard/Parents/ParentKids";
import KidOverview from "Components/Dashboard/Kids/KidOverview";
import ParentRewards from "Components/Dashboard/Parents/ParentRewards";
import ParentMissions from "Components/Dashboard/Parents/ParentMissions";
import ParentAccountSettings from "Components/Dashboard/Parents/ParentAccountSettings";
import KidMissions from "Components/Dashboard/Kids/KidMissions";
import KidRewards from "Components/Dashboard/Kids/KidRewards";
import KidSettings from "Components/Dashboard/Kids/KidSettings";
import AddRewardForm from "Components/Forms/Parents/AddRewardForm";
import TestPage from "./Pages/TestPage";

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const userContext = createContext({
  user: null,
  setUser: () => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark_mode")) || false);
  const ThemeContextProvider = [darkMode, setDarkMode];

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || false);
  const userContextProvider = [user, setUser];

  useEffect(() => {
    localStorage.setItem("dark_mode", JSON.stringify(darkMode));
    sessionStorage.setItem("user", JSON.stringify(user));
    !user && sessionStorage.clear();
  }, [darkMode, user]);

  const ParentDashboardRoutes = () => {
    return (
      <>
        <Route index element={<ParentKids />} />
        <Route path="kids" element={<ParentKids />} />
        <Route path="missions" element={<ParentMissions />} />
        <Route path="rewards" element={<ParentRewards />} />
        {/* NOTE: to be fixed for link to rewards/add */}
        <Route path="rewards/add" element={<AddRewardForm />} />
        <Route path="settings" element={<ParentAccountSettings />} />
      </>
    );
  };

  const KidsDashboardRoutes = () => {
    return (
      <>
        <Route index element={<KidOverview />} />
        <Route path="adventures" element={<KidOverview />} />
        <Route path="missions" element={<KidMissions />} />
        <Route path="rewards" element={<KidRewards />} />
        <Route path="settings" element={<KidSettings />} />
      </>
    );
  };

  return (
    <>
      <userContext.Provider value={userContextProvider}>
        <DarkModeContext.Provider value={ThemeContextProvider}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<MainLayout />}>
                {/* <Route index element={user ? <Home /> : <Signin />} /> */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="test" element={<TestPage />} />
                {user && (
                  <Route path="/dashboard" element={<Dashboard />}>
                    {user.type === "parent" && ParentDashboardRoutes()}
                    {user.type === "kid" && KidsDashboardRoutes()}
                  </Route>
                )}
                <Route path="emailconfirmation" element={<EmailConfirmation />} />
                {/* //TODO: Add these routes at the appropriate place */}
                <Route path="rewards" element={<Rewards />} />
                <Route path="rewards/:id/edit" element={<EditRewardsForm />} />

                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </DarkModeContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
