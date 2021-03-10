import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink, NavItem, NavLink } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import PhotoCarousel2021 from '../PhotoCarousel2021';
import Beachwood from '../../assets/images/beachwood.jpg';
import ThePearl from '../../assets/images/the-pearl-logo.jpg';
import LCLogo from '../../assets/images/lc_logo.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Year2021  = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

     return (
         <div className="2021-main">
              {isDesktopOrLaptop && <>
                <div className="nav-res">
             <Navbar></Navbar>
             </div>

             <div className="carousel-year">
             <PhotoCarousel2021/>
             </div>

             

             <div className="year-2021-title">WELCOME TO THE 42ND ANNUAL COLD BEER OPEN 1980 - 2021.</div>
             <div className="year-2021-para1-div"> 
               <p className="year-2021-para1">
                   WE ARE HAPPY YOU COULD JOIN US FOR THIS EDITION OF THE COLD BEER OPEN. THIS YEAR MARKS OUR 42ND YEAR. THE COLD BEER OPEN IS A GOLF TOURNAMENT FEATURING FOUR DAYS OF GOLF IN BEAUTIFUL NORTH MYRTLE BEACH, SOUTH CAROLINA. THE TOURNAMENT IS A POINTS BASED SYSTEM WITH MANY OPPORTUNITIES TO WIN PRIZES, MONEY AND A CHANCE TO WIN A FREE TRIP TO NEXT YEARS TOURNAMENT. WE BELIEVE THIS MAKES US UNIQUE IN THE FACT THAT WE HOST A VERY FINE TOURNAMENT WITH INCREDIBLY LOYAL AND DOWNRIGHT GOOD PEOPLE. WE BELIEVE WE HAVE THE BEST TOURNAMENT YOU CAN ATTEND. THIS IS DUE TO THE PARTICIPATION OF PEOPLE LIKE YOU. WE HOPE YOU ENJOY YOURSELF AS MUCH AS WE DO AND WILL MAKE THIS AN ANNUAL EVENT FOR YOURSELF AS WELL.
                   
               </p>
             </div>

             <div className="signup-2021-div">
            
<NavItem className="item">
                <NavLink href="/signuppage" className="links signup-2021-link">
                  Sign Up Here
                </NavLink>

              </NavItem>

             
             </div>

             <div className="flex-div-desktop">
             <div className="row" col="4">

                 
<div className="card-div">
<Card className="card" style={{ width: '13rem' }}>
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
             </div>
             </>}
             
             {isTabletOrPhone && <>
              <div className="nav-res">
             <Navbar></Navbar>
             </div>

             <div className="carousel-year">
             <PhotoCarousel2021/>
             </div>

             

             <div className="year-2021-title">WELCOME TO THE 42ND ANNUAL COLD BEER OPEN 1980 - 2021.</div>
             <div className="year-2021-para1-div"> 
               <p className="year-2021-para1">
                   WE ARE HAPPY YOU COULD JOIN US FOR THIS EDITION OF THE COLD BEER OPEN. THIS YEAR MARKS OUR 42ND YEAR. THE COLD BEER OPEN IS A GOLF TOURNAMENT FEATURING FOUR DAYS OF GOLF IN BEAUTIFUL NORTH MYRTLE BEACH, SOUTH CAROLINA. THE TOURNAMENT IS A POINTS BASED SYSTEM WITH MANY OPPORTUNITIES TO WIN PRIZES, MONEY AND A CHANCE TO WIN A FREE TRIP TO NEXT YEARS TOURNAMENT. WE BELIEVE THIS MAKES US UNIQUE IN THE FACT THAT WE HOST A VERY FINE TOURNAMENT WITH INCREDIBLY LOYAL AND DOWNRIGHT GOOD PEOPLE. WE BELIEVE WE HAVE THE BEST TOURNAMENT YOU CAN ATTEND. THIS IS DUE TO THE PARTICIPATION OF PEOPLE LIKE YOU. WE HOPE YOU ENJOY YOURSELF AS MUCH AS WE DO AND WILL MAKE THIS AN ANNUAL EVENT FOR YOURSELF AS WELL.
                   
               </p>
             </div>

             <div className="signup-2021-div">
            
<NavItem className="item">
                <NavLink href="/signup" className="links signup-2021-link">
                  Sign Up Here
                </NavLink>

              </NavItem>

             
             </div>

              <div className="flex-div">
             <div className="row" col="2">

                 
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
</div>

<div className="row" col="2">

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
             </div>
             </>}



         </div>
         
     );

}

export default Year2021;