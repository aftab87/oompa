import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "Components/Stylesheets/header.css";
import { DarkModeContext, userContext } from "../App";
import { Button } from "react-bootstrap";

// Need to include a dark and light mode
function Header() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate()

  const darkModeToggleHandler = (e) => {
    setDarkMode(e.target.checked);
  };

  const [user, setUser] = useContext(userContext);

  function logout() {
    navigate("/?logout=true")
  }

  function login() {
    //find user in db
    //if user found
    //get data
    //parse json to object
    const aftab = {
      type: "parent",
      username: "aftab",
      kids: ["b1", "b2"],
    };
    const patrick = {
      type: "parent",
      username: "patrick",
      kids: ["b1", "b2", "b3"],
    };

    const juju = {
      type: "kid",
      username: "julieta",
    };

    setUser(juju);
  }

  return (
    <header>
      <Navbar collapseOnSelect bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg">
        <Container fluid>
          <div className="m-0 col-3">
            <Form.Check type="switch" id="custom-switch" label="Dark Mode" onChange={darkModeToggleHandler} checked={darkMode} />
          </div>
          <Navbar.Brand as={Link} to="/" className="m-0 col-6 text-center">
            <img className="" src={darkMode ? "./images/logo-oompa-light.svg" : "./images/logo-oompa-dark.svg"} alt="Oompa Logo" />
          </Navbar.Brand>
          <div className="m-0 col-3 d-lg-none text-end border-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="m-0 col-0 col-lg-3 justify-content-end">
            <Nav className="ms-auto text-center">
              <Nav.Link as={NavLink} to="/" className="d-flex align-items-center justify-content-center">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="d-flex align-items-center justify-content-center">
                About
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={NavLink} to="/dashboard" className="d-flex align-items-center justify-content-center">
                    Dashboard
                  </Nav.Link>
                  {/* <Nav.Link as={NavLink} to="/rewards" className="d-flex align-items-center justify-content-center">
                    Rewards
                  </Nav.Link> */}
                  <Button onClick={logout} variant="danger" className="m-2">
                    Logout
                  </Button>
                </>
              ) : (
                <Button as={Link} variant="primary" to="/login" className="m-2">
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
