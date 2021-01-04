import React, { useState } from 'react';
import './style.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import LongLogo from '../../assets/images/long-logo.png';

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
                <NavLink>
            
                <div href="/home" className="long-logo-link">
                { <img className="long-logo" src={LongLogo} alt="long" width="100px" /> }
               </div>

               </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/home" className="links">
                  Home
                </NavLink>
              </NavItem>
  
              <NavItem>
                <NavLink href="/about" className="links">
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/schedule" className="links">
                  Schedule
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

              <NavItem>
                <NavLink href="/rules" className="links">
                  Rules
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/home" className="links">
                  Contact Us
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
                <NavLink href="/home" className="links links-res">
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about" className="links">
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/schedule" className="links">
                  Schedule
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/signup" className="links links-res">
                  Sign Up
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/sponsors" className="links links-res">
                  Sponsors
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/rules" className="links">
                  Rules
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/home" className="links links-res">
                  Contact Us
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