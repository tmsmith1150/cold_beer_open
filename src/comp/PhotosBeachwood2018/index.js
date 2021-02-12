import React from "react"; 
import "./style.css";
import Navbar from '../Navbar';
import PhotosBeachwood2018Scroll from '../PhotosBeachwood2018Scroll';

// import CBOHome from "../../assets/images/CBO-home.jpg";







const PhotosBeachwood2018 = () => {

       return(

        
<div>

<div className="nav-div">
             <Navbar></Navbar>
             </div>

      <div className="carousel slide carousel-fade scroll">
     <PhotosBeachwood2018Scroll></PhotosBeachwood2018Scroll>
     

</div>


</div>




       );
    }

export default PhotosBeachwood2018;