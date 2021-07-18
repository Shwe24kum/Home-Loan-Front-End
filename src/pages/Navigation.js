import React from "react";
import { Container,Nav, Navbar } from "react-bootstrap";


export function Navigation() {
  return (
    <div>
    <Navbar variant="dark" expand="lg" style={{ background: "black" }}>
  <Container>
    <Navbar.Brand href="/">
     🏠Home Loan
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="ml-auto">
    <Nav.Link href="/">
      Home
    </Nav.Link>
    <Nav.Link href="/about">
      About
    </Nav.Link>
    <Nav.Link href="/register">
      Register
    </Nav.Link>
    <Nav.Link href="/login">
      Login
    </Nav.Link>
    <Nav.Link href="/contact">
      Contact
    </Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}
