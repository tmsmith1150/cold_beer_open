import React from "react"
import { Jumbotron } from 'reactstrap';
import './style.css';
import Contact from '../Contact';
import Navbar from '../Navbar';
import PhotoCarousel from '../PhotoCarousel';
// import CBOLogo from "../Gifs/CBO_final-web.png";


const Home = () => {

    

    return (
        <div className="home-main">
         <Navbar></Navbar>
         {/* <Jumbotron className="hero"> */}

         <div className="carousel">
         <PhotoCarousel></PhotoCarousel>

         </div>


         
         
         
         {/* </Jumbotron> */}
         <Contact className="contact-info"></Contact>
         
        </div>
    );


}

export default Home;



{/* <img className="cbo-logo display-4 brand animate__animated animate__fadeIn animate__delay-1s" src={CBOLogo} alt="Logo"/> */}