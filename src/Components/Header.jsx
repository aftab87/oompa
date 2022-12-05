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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar bg="light" expand="lg">
    //   {/* <Container fluid>
    //     <Row> */}
    //   <Col>
    //     <Form.Check type="switch" id="custom-switch" label="Check this switch" />
    //   </Col>
    //   <Col className="text-center">
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   </Col>
    //   <Col>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   </Col>
    //   <Col>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="#/about">About</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Col>
    //   {/* </Row>
    //   </Container> */}
    // </Navbar>

    // <Navbar bg="light" expand="xl" className="mb-3">
    //     <Container fluid>
    //         <Form.Check
    //             type="switch"
    //             id="darkSwitch"
    //             label="Dark Mode"
    //             className="flex-grow-1"
    //         />
    //         <Navbar.Brand href="/" className="flex-grow-1 text-center">Logo</Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`navBar`} />
    //         <Navbar.Offcanvas
    //             id={`navBar`}
    //             aria-labelledby={`navBar-label`}
    //             placement="end">
    //             <Offcanvas.Header closeButton>
    //                 <Offcanvas.Title id={`navBar-label`}>
    //                     Welcome!
    //                 </Offcanvas.Title>
    //             </Offcanvas.Header>
    //             <Offcanvas.Body>
    //                 <Nav className="flex justify-content-end flex-grow-1">
    //                     <Nav.Link href="/">Home</Nav.Link>
    //                     <Nav.Link href="/about">About Us</Nav.Link>
    //                     <Button variant="primary" >Sign up</Button>
    //                 </Nav>
    //             </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //     </Container>
    // </Navbar>
  );
}

export default Header;
