import React from "react"; 
import "./style.css";
import Navbar from '../Navbar';
import PhotosThePearl2020Scroll from '../PhotosThePearl2020Scroll';

// import CBOHome from "../../assets/images/CBO-home.jpg";







const PhotosThePearl2020 = () => {

       return(

        
<div>

<div className="nav-div">
             <Navbar></Navbar>
             </div>

      <div className="carousel slide carousel-fade scroll">
     <PhotosThePearl2020Scroll></PhotosThePearl2020Scroll>
     

</div>


</div>




       );
    }

export default PhotosThePearl2020;