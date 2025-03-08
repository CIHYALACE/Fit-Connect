import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0">
      <Container>
      <NavLink><i class="fa-solid fa-search fs-5 d-sm-inline d-lg-none  px-2"></i></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home" className="font-weight-bold fs-3 fw-bold big-shoulders">
          <img
            alt=""
            src="../../public/icons8-dumbbell-50.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />{" "}
          Fit Connect
        </Navbar.Brand>
        <NavLink><i class="fa-solid fa-bag-shopping fs-5 d-sm-inline px-2 d-lg-none"></i></NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Products&Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Online Couching</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Training Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trainers List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink><i class="fa-solid fa-search fs-5 d-none d-lg-inline"></i></NavLink>
            <NavLink><i class="fa-solid fa-bag-shopping fs-5 d-none d-lg-inline"></i></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
