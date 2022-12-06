import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "Components/Stylesheets/header.css";
import { DarkModeContext } from "../App";
import { Button } from "react-bootstrap";

// Need to include a dark and light mode
function Header() {
  const isLoggedIn = true;

  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const darkModeToggleHandler = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
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
            {isLoggedIn ? (
              <>
                <Nav.Link as={NavLink} to="/dashboard" className="d-flex align-items-center justify-content-center">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/rewards" className="d-flex align-items-center active justify-content-center">
                  Rewards
                </Nav.Link>
                <Button as={Link} variant="danger" className="m-2" to="/logout">
                  Logout
                </Button>
              </>
            ) : (
              <Button as={NavLink} variant="primary" className="m-2" to="/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
