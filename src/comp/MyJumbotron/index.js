import React, { useState } from 'react';
import './style.css';
import { Jumbotron } from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import CBOLogo from "../../assets/images/CBO_final-web.png";


const MyJumbotron = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });
     
    return (
     <div className="main-jum-div">
      
        {isDesktopOrLaptop && <>
            <div className="cbo-home-img">

         <Jumbotron className="my-jumbotron">{ <img className="cbo-logo display-4 brand animate__animated animate__fadeIn animate__delay-1s" src={CBOLogo} alt="Logo"/> }</Jumbotron>
         </div>
         </>}
         

        

            
        
         {isTabletOrPhone && <>

            <div className="">

          <Jumbotron className="my-jumbotron my-jumbotron-res">{ <img className="cbo-logo cbo-logo-res display-4 brand           animate__animated animate__fadeIn animate__delay-1s" src={CBOLogo} alt="Logo"/> }</          Jumbotron>
          </div>

          </>}
          


     </div>
     

    );
}


export default MyJumbotron;

