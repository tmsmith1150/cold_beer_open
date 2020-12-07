import React, { useState } from 'react';
import './style.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1024px)'
  });
  
  const isTabletOrPhone = useMediaQuery({
      query: '(max-device-width: 1023px)'
  });
  
    return (
      
        <div className="nav">
          {isDesktopOrLaptop && <>
        <Navbar className="nav sticky-top brand" light expand="md">
  
          <NavbarBrand className="ml-3"></NavbarBrand>
          <NavbarToggler className="toggler" onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navLinks">
  
              <NavItem>
                <NavLink href="/" className="links">
                  Home
                </NavLink>
              </NavItem>
  
              <NavItem>
                <NavLink href="/merchandise" className="links">
                  Merchandise
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/signup" className="links">
                  Sign Up
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/sponsors" className="links">
                  Sponsors
                </NavLink>
              </NavItem>

    
            </Nav>
          </Collapse>
        </Navbar>
        </>}
  
        {isTabletOrPhone && <>
        <Navbar className="nav sticky-top brand" light expand="md">
  
          <NavbarBrand className="ml-3"></NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navLinks">
  
              <NavItem>
                <NavLink href="/" className="links">
                  Home
                </NavLink>
              </NavItem>
  
              <NavItem>
                <NavLink href="/merchandise" className="links">
                  Merchandise
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/signup" className="links">
                  Sign Up
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/sponsors" className="links">
                  Sponsors
                </NavLink>
              </NavItem>
    
            </Nav>
          </Collapse>
        </Navbar>
        </>}
        </div>
            
    );
  }
  
  export default Navigation;