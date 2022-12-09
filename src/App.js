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
import EmailConfirmation from "Pages/EmailConfirmation";
import ParentKids from "Components/Dashboard/Parents/ParentKids";
import KidOverview from "Components/Dashboard/Kids/KidOverview";
import ParentRewards from "Components/Dashboard/Parents/ParentRewards";
import ParentMissions from "Components/Dashboard/Parents/Missions/ParentMissions";
import ParentAccountSettings from "Components/Dashboard/Parents/ParentAccountSettings";
import KidMissions from "Components/Dashboard/Kids/KidMissions";
import KidRewards from "Components/Dashboard/Kids/KidRewards";
import KidSettings from "Components/Dashboard/Kids/KidSettings";
import AddRewardForm from "Components/Forms/Parents/AddRewardForm";
import EditRewardsForm from "Components/Forms/Parents/EditRewardsForm";

import KidMissionsAvailable from "Components/Dashboard/Kids/Missions/KidMissionsAvailable";
import KidMissionsCompleted from "Components/Dashboard/Kids/Missions/KidMissionsCompleted";
import KidMissionsApproved from "Components/Dashboard/Kids/Missions/KidMissionsApproved";
import KidRewardsAvailable from "Components/Dashboard/Kids/Rewards/KidRewardsAvailable";
import KidRewardsClaimed from "Components/Dashboard/Kids/Rewards/KidRewardsClaimed";
import KidRewardsReceived from "Components/Dashboard/Kids/Rewards/KidRewardsReceived";
import TestPage from "./Pages/TestPage";
import AddChoresForm from "Components/Forms/Parents/AddChoresForm";
import EditChoresForm from "Components/Forms/Parents/EditChoresForm";
import KidForm from "Components/Forms/Kids/KidForm";

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
  /******************************** PARENTS ROUTES *******************************/

  const ParentDashboardRoutes = () => {
    return (
      <>
        <Route index element={<ParentKids />} />
        <Route path="kids" element={<ParentKids />} />
        <Route path="kids/add/" element={<KidForm />} />
        <Route path="kids/edit" element={<KidForm />} />
        <Route path="missions" element={<ParentMissions />} />
        <Route path="rewards" element={<ParentRewards />} />

        <Route path="missions/add" element={<AddChoresForm />} />
        <Route path="missions/edit" element={<EditChoresForm />} />

        {/* NOTE: to be fixed for link to rewards/add */}
        <Route path="rewards/add" element={<AddRewardForm />} />

        {/* NOTE: to be fixed for link to rewards/add */}
        <Route path="rewards/:id/edit" element={<EditRewardsForm />} />

        <Route path="settings" element={<ParentAccountSettings />} />
      </>
    );
  };

  // // // TODO: Adapt and add routes
  // const ParentsMissionsRoutes = () => {
  //   return (
  //     <Route path="missions" element={<ParentMissions />}>
  //       <Route index element={<ParentsMissionsAvailable />} />
  //       <Route path="available" element={<ParentsMissionsAvailable />} />
  //       <Route path="completed" element={<ParentsMissionsCompleted />} />
  //       <Route path="approved" element={<ParentsMissionsApproved />} />
  //       <Route path="add" element={<ParentsMissionsAdd />} />
  //       <Route path="edit" element={<ParentsMissionsEdit />} />
  //       {/* delete > do we need a view for that? */}
  //     </Route>
  //   );
  // };

  // // TODO: Adapt and add routes
  // const ParentsRewardsRoutes = () => {
  //   return (
  //     <Route path="rewards" element={<ParentRewards />}>
  //       <Route index element={<ParentsRewardsAvailable />} />
  //       <Route path="available" element={<ParentsRewardsAvailable />} />
  //       <Route path="claimed" element={<ParentsRewardsClaimed />} />
  //       <Route path="awarded" element={<ParentsRewardsAwarded />} />
  //       <Route path="add" element={<ParentsRewardsAdd />} />
  //       <Route path="edit" element={<ParentsRewardsEdit />} />
  //       {/* delete > do we need a view for that? */}
  //     </Route>
  //   );
  // };

  /******************************** KIDS ROUTES *******************************/
  const KidsDashboardRoutes = () => {
    return (
      <>
        <Route index element={<KidOverview />} />
        <Route path="adventures" element={<KidOverview />} />
        {KidsMissionsRoutes()}
        {KidsRewardsRoutes()}
        <Route path="settings" element={<KidSettings />} />
      </>
    );
  };
  const KidsMissionsRoutes = () => {
    return (
      <Route path="missions" element={<KidMissions />}>
        <Route index element={<KidMissionsAvailable />} />
        <Route path="available" element={<KidMissionsAvailable />} />
        <Route path="completed" element={<KidMissionsCompleted />} />
        <Route path="approved" element={<KidMissionsApproved />} />
      </Route>
    );
  };

  const KidsRewardsRoutes = () => {
    return (
      <Route path="rewards" element={<KidRewards />}>
        <Route index element={<KidRewardsAvailable />} />
        <Route path="available" element={<KidRewardsAvailable />} />
        <Route path="claimed" element={<KidRewardsClaimed />} />
        <Route path="received" element={<KidRewardsReceived />} />
      </Route>
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
                <Route path="contactconfirmation" element={<EmailConfirmation />} />
                {/* //TODO: Add these routes at the appropriate place */}
                {/* <Route path="rewards" element={<Rewards />} /> */}
                {/* <Route path="rewards/:id/edit" element={<EditRewardsForm />} /> */}

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
