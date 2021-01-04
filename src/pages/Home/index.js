import React from "react"
import './style.css';
import Contact from '../../comp/Contact';
import Navbar from '../../comp/Navbar';
// import PhotoCarousel from '../../comp/PhotoCarousel';
import MyJumbotron from '../../comp/MyJumbotron';



const Home = () => {

    

    return (
        <div className="home-main">
         <Navbar></Navbar>
       

         <div >
         {/* <PhotoCarousel className="carousel"></PhotoCarousel> */}
         <div className="faux-nav">
            <MyJumbotron  />
            </div>

         </div>


         
         
         
        <div>
         <Contact className="contact-info"></Contact>
         </div>
         
        </div>
    );


}

export default Home;



