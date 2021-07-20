import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const Navigations = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/">
         <h5>🏠Home Loan</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark " as={Link} to="/viewcustomerpage">
              <h6>ViewCustomerPage</h6>
            </Nav.Link>
            <Nav.Link className="mr-5  text-dark" as={Link} to="/docsverification">
             <h6> DocsVerificationPage</h6>
            </Nav.Link>
            <Nav.Link className="mr-5  text-dark" as={Link} to="/statuspage">
              <h6>StatusPage</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};