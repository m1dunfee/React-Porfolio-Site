import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import '../App.css'


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="headerAndFooter sticky-top" dark expand="md">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* Link targets are in component/BodyComponents/X
                But Contact is in footer
            */}
            <NavItem>
              <NavLink href="#bio">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#work">Work</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;