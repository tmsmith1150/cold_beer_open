import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import PhotoCarousel2020 from '../PhotoCarousel2020';
import Beachwood from '../../assets/images/beachwood.jpg';
import ThePearl from '../../assets/images/the-pearl-logo.jpg';
import LCLogo from '../../assets/images/lc_logo.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Year2020  = () => {

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
             <PhotoCarousel2020/>
             </div>

             

             <div className="year-2020-title">A look back at 2020.</div>

             <div className="row" col="4">

                 
<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink href="/photosbeachwood2020">
  <CardImg variant="top" src={Beachwood} />
  </CardLink>
  <CardBody>
    <CardTitle>Beachwood Golf Club</CardTitle>
    <CardText>
    Beachwood Golf Club is a public 18-hole golf course located off of U.S. 17 in the heart of North Myrtle Beach.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink href="/photosthepearl2020">
  <CardImg className="the-logo-img" variant="top" src={ThePearl} />
  </CardLink>
  <CardBody>
    <CardTitle>The Pearl East</CardTitle>
    <CardText>
    The Pearl Golf Course and the 27 holes create three distinctly different 18 hole golf experiences, The Pearl East, The Pearl West, and The Pearl North.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink href="/photosthepearl2020">
  <CardImg className="the-logo-img" variant="top" src={ThePearl} />
  </CardLink>
  <CardBody>
    <CardTitle>The Pearl West</CardTitle>
    <CardText>
    The Pearl Golf Course and the 27 holes create three distinctly different 18 hole golf experiences, The Pearl East, The Pearl West, and The Pearl North.
    </CardText>
   
  </CardBody>
</Card>
</div>

<div className="card-div">
<Card style={{ width: '13rem' }}>
    <CardLink href="/photosleopardschase2020">
  <CardImg className="the-logo-img" variant="top" src={LCLogo} />
  </CardLink>
  <CardBody>
    <CardTitle>Leopard's Chase</CardTitle>
    <CardText>
    Named by Golf Digest and GOLF Magazine as one of the “Top 10 Best New Public Courses in America for 2007”.
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
                
            

            
             <div className="2020-title">The year 2020.</div>

             <div className="row" col="4">
             
            

             
          
             
             
             </div>
             </>}



         </div>
         
     );

}

export default Year2020;