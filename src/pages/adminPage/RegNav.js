import React from "react";
import { Container,Nav, Navbar } from "react-bootstrap";


export function RegNav() {
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
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  );
}
