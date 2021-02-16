import React from "react"; 
import "./style.css";
import Navbar from '../Navbar';
import PhotosLeopardsChase2020Scroll from '../PhotosLeopardsChase2020Scroll';

// import CBOHome from "../../assets/images/CBO-home.jpg";







const PhotosLeopardsChase2020 = () => {

       return(

        
<div>

<div className="nav-div">
             <Navbar></Navbar>
             </div>

      <div className="carousel slide carousel-fade scroll">
     <PhotosLeopardsChase2020Scroll></PhotosLeopardsChase2020Scroll>
     

</div>


</div>




       );
    }

export default PhotosLeopardsChase2020;