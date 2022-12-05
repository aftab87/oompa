import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import About from "Pages/About";
import SignUp from "Pages/SignUp";
import Login from "Pages/Login";
import Page404 from "Pages/Page404";
import EmailConfirmation from "Pages/EmailConfirmation";
import MainLayout from "Layouts/MainLayout";

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
          <Route path="emailconfirmation" element={<EmailConfirmation />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
