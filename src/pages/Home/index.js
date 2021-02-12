import React from "react"
import './style.css';
import Contact from '../../comp/Contact';
import Navbar from '../../comp/Navbar';
// import PhotoCarousel from '../../comp/PhotoCarousel';
import MyJumbotron from '../../comp/MyJumbotron';
import MediaQuery, { useMediaQuery } from 'react-responsive';



const Home = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });
    

    return (
        <div className="home-main">
            {isDesktopOrLaptop && <>
         <div className="nav-div">
             <Navbar></Navbar>
             </div>
       

         <div >
         {/* <PhotoCarousel className="carousel"></PhotoCarousel> */}
         <div className="faux-nav">
            <MyJumbotron  />
            </div>

         </div>


         
         
         
        <div>
         <Contact className="contact-info"></Contact>
         </div>

         </>}

         {isTabletOrPhone && <>
         <div className="nav-div">
             <Navbar></Navbar>
             </div>
       

         <div >
         {/* <PhotoCarousel className="carousel"></PhotoCarousel> */}
         <div className="faux-nav">
            <MyJumbotron  />
            </div>

         </div>


         
         
         
        <div>
         <Contact className="contact-info"></Contact>
         </div>

         </>}
         
        </div>
    );


}

export default Home;



