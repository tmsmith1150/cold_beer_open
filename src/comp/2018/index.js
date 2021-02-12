import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import PhotoCarousel2018 from '../PhotoCarousel2018';
import Beachwood from '../../assets/images/beachwood.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Year2018  = () => {

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

             <div className="carousel-year">
             <PhotoCarousel2018/>
             </div>

             

             <div className="2018-title">The year 2018.</div>

             <div className="row" col="4">

                 
<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink href="/photosbeachwood2018">
  <CardImg variant="top" src={Beachwood} />
  </CardLink>
  <CardBody>
    <CardTitle>Beachwood Golf Club</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink>
  <CardImg variant="top" src={Beachwood} />
  </CardLink>
  <CardBody>
    <CardTitle>Beachwood Golf Club</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink>
  <CardImg variant="top" src={Beachwood} />
  </CardLink>
  <CardBody>
    <CardTitle>Beachwood Golf Club</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink>
  <CardImg variant="top" src={Beachwood} />
  </CardLink>
  <CardBody>
    <CardTitle>Beachwood Golf Club</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
   
  </CardBody>
</Card>
</div>

             
          
             
           
             
             </div>
             </>}
             
             {isTabletOrPhone && <>
             <div className="nav-res">
                <Navbar></Navbar>
                </div>
                
            

            
             <div className="2018-title">The year 2018.</div>

             <div className="row" col="4">
             
            

             
          
             
             
             </div>
             </>}



         </div>
         
     );

}

export default Year2018;