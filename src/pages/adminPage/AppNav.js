import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "black" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/admin">
          🏠Admin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 " as={Link} to="/viewAll">
              Loan Application List
            </Nav.Link>
            <Nav.Link className="mr-5 " as={Link} to="/viewbyId">
              Loan Application By ID
            </Nav.Link>
            <Nav.Link className="mr-5 " as={Link} to="/status">
              Status
            </Nav.Link>
            <Nav.Link className="mr-5 " as={Link} to="/">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
