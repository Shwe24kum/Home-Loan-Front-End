import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AppFooter } from "./AppFooter";

export const AppNav = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "black" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/">
          🏠Home Loan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 " as={Link} to="/customer-list">
              My Details
            </Nav.Link>
            <Nav.Link className="mr-5 " as={Link} to="/customer-upsert">
              Customer Register
            </Nav.Link>
            <Nav.Link className="mr-5 " as={Link} to="/">
              Application Status
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/customer-list">
              Sign Out
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/admin-register">
              Admin Register
            </Nav.Link>
            <Nav.Link className="mx-auto " as={Link} to="/apply-loan">
              ApplyLoan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppFooter />
    </div>
  );
};
