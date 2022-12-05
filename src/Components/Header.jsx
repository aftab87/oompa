import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Need to include a dark and light mode

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div href="#home" className="m-0 col-3">
          <Form.Check type="switch" id="custom-switch" label="Dark Mode" />
        </div>
        <Navbar.Brand href="#home" className="m-0 col-6 text-center">
          O ompa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-0 col-3 text-end border-0" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end" className="m-0 col-3 justify-content-end">
          <Nav className="ms-auto text-center">
            <Nav.Link className="d-flex align-items-center justify-content-center" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center justify-content-center" href="/about">
              About
            </Nav.Link>
            <Button variant="primary" className="m-2">
              Login
            </Button>
            <Button variant="danger" className="m-2">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
