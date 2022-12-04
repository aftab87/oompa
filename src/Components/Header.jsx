
import "./Stylesheets/header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import logo from "./images/yourImage.png";

// Things to do:
// Need to include a dark and light mode

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="bs-indigo" >
            <div className="nav-con">
                <Navbar href="#home" className="navLogo">Logo</Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#login">
                            <button className="loginButton">
                                Login
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;