import React from "react"
import { Form, NavItem, NavLink, } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Schedule = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });


     return (
         <div className="schedule-main">

{isDesktopOrLaptop && <>
             <div>
             <div className="nav-div">
             <Navbar></Navbar>
             </div>
              
              <div className="years-div">

              <div className="year2021-link-div">
             <NavItem className="item">
                <NavLink href="/2021" className="links year-link">
                  2021
                </NavLink>
              </NavItem>
              </div>

              <div className="year2020-link-div">
              <NavItem className="item">
                <NavLink href="/2020" className="links year-link">
                  2020
                </NavLink>
              </NavItem>
              </div>

              {/* <NavItem className="item">
                <NavLink href="/2019" className="links">
                  2019
                </NavLink>
              </NavItem>

              <NavItem className="item">
                <NavLink href="/2018" className="links">
                  2018
                </NavLink>
              </NavItem>

              <NavItem className="item">
                <NavLink href="/2017" className="links">
                  2017
                </NavLink>
              </NavItem> */}
              </div>

             </div>
             </>}
             


             {isTabletOrPhone && <>
            
             <div>
             <div className="nav-div">
             <Navbar></Navbar>
             </div>

             <div className="years-div">
               <div className="years-item">
             <NavItem className="item">
                <NavLink href="/2021" className="links year-link">
                  2021
                </NavLink>
              </NavItem>
              </div>

              <div className="years-item">
              <NavItem className="item">
                <NavLink href="/2020" className="links year-link">
                  2020
                </NavLink>
              </NavItem>
              </div>
              </div>
              

             </div>
            
             </>}

         </div>

        
     );

}

export default Schedule;