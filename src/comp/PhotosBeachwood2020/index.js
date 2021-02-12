import React from "react"; 
import "./style.css";
import Navbar from '../Navbar';
import PhotosBeachwood2020Scroll from '../PhotosBeachwood2020Scroll';

// import CBOHome from "../../assets/images/CBO-home.jpg";







const PhotosBeachwood2020 = () => {

       return(

        
<div>

<div className="nav-div">
             <Navbar></Navbar>
             </div>

      <div className="carousel slide carousel-fade scroll">
     <PhotosBeachwood2020Scroll></PhotosBeachwood2020Scroll>
     

</div>


</div>




       );
    }

export default PhotosBeachwood2020;