import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";


function NavbarTab() {

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">Ines Radic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                  <Navbar.Text>...Coming Soon </Navbar.Text>
                  <Navbar.Text> Email</Navbar.Text>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default NavbarTab;