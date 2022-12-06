import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import About from "Pages/About";
import SignUp from "Pages/SignUp";
import Login from "Pages/Login";
import Page404 from "Pages/Page404";
import EmailConfirmation from "Pages/EmailConfirmation";
import MainLayout from "Layouts/MainLayout";
import Dashboard from "Pages/Dashboard";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
