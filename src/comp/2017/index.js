import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import AboutSlide from '../../assets/images/about_slide_1.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Year2017  = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

     return (
         <div className="2020-main">
              {isDesktopOrLaptop && <>
                <div className="nav-res">
             <Navbar></Navbar>
             </div>

             <div className="row" col="2">

             <div className="2020-title">The year 2017.</div>
             
             <div className="cbo-about-div">
             { <img className="cbo-about display-4 brand animate__animated animate__fadeInDown animate__delay-1s" src={AboutSlide} alt="about"/> }
             </div>

             
          
             
           
             
             </div>
             </>}
             
             {isTabletOrPhone && <>
             <div className="nav-res">
                <Navbar></Navbar>
                </div>
                
             <div className="row" col="2">

            
             <div className="2020-title">The year 2017.</div>
             
             <div className="cbo-about-div cbo-res">
             { <img className="cbo-about display-4 brand animate__animated animate__fadeInDown animate__delay-1s" src={AboutSlide} alt="about"/> }
             </div>

             
          
             
             
             </div>
             </>}



         </div>
         
     );

}

export default Year2017;