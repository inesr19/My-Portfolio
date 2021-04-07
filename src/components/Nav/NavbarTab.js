import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavbarTab() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Ines Radic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
                <Navbar.Text>...Coming Soon </Navbar.Text>
                <Navbar.Text> Email</Navbar.Text>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarTab;