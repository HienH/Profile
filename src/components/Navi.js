import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Navi = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Hien's profile</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Home
      </NavItem>
          <NavItem eventKey={2} href="#">
            Contacts
      </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;