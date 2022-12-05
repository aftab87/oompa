import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// Need to include a dark and light mode

function Header() {
    return (
            <Navbar bg="light" expand="xl" className="mb-3">
                <Container fluid>
                    <Form.Check
                        type="switch"
                        id="darkSwitch"
                        label="Dark Mode"
                        className="flex-grow-1"
                    />
                    <Navbar.Brand href="/" className="flex-grow-1 text-center">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`navBar`} />
                    <Navbar.Offcanvas
                        id={`navBar`}
                        aria-labelledby={`navBar-label`}
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`navBar-label`}>
                                Welcome!
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex justify-content-end flex-grow-1">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Button variant="primary" >Sign up</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
    );
}

export default Header;

