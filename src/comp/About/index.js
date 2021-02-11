import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import AboutSlide from '../../assets/images/about_slide_1.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const About = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

     return (
         <div className="about-main">
              {isDesktopOrLaptop && <>
             <Navbar></Navbar>
             <div className="row" col="2">

             <div className="about-title">The Cold Beer Open concept was born in 1980 and organized by Terry Smith and Earl Beahm.</div>
             
             <div className="cbo-about-div">
             { <img className="cbo-about display-4 brand animate__animated animate__fadeInUp animate__delay-1s" src={AboutSlide} alt="about"/> }
             </div>

             
          
             
             <p className="about-para">The original group consisted of eight golfers taking a trip to Amelia Island, Florida for a weekend of golf and fun. This proved to be one of the best outings anyone could remember. The next year we decided to go to Myrtle Beach and we recruited four more golfers to go with us. That was the year that we adopted the name of The Cold Beer Open. Each year saw more new friends being invited and having a wonderful time. Over the years our group has expanded to where we had 90 golfers in 2009. We have all made new friends and lasting friendships. We have lost some of our participants to bad health and even death. We miss these people greatly and think of them often. The Cold Beer Open concept has always been about friends and having a good time. The Cold Beer Open has never been associated with any business or industry. We do have several sponsors that help us tremendously and we a very grateful to each of them. We wish to acknowledge everyone that has participated over the years but that would just take too much space. Although our name says Open, the tournament is by invitation. A recent participant can invite other people to join our group. We are a very diverse group but this only served to make the friendships even stronger. Again, thanks to everyone that has participated and we look forward to another successful 30 years.</p>
             
             </div>
             </>}
             
             {isTabletOrPhone && <>
             <div className="nav-res">
                <Navbar></Navbar>
                </div>
             <div className="row" col="2">

            
             <div className="about-title title-res">The Cold Beer Open concept was born in 1980 and organized by Terry Smith and Earl Beahm.</div>
             
             <div className="cbo-about-div cbo-res">
             { <img className="cbo-about display-4 brand animate__animated animate__fadeInUp animate__delay-1s" src={AboutSlide} alt="about"/> }
             </div>

             
          
             <div className="about-para-div">
             <p className="about-para">The original group consisted of eight golfers taking a trip to Amelia Island, Florida for a weekend of golf and fun. This proved to be one of the best outings anyone could remember. The next year we decided to go to Myrtle Beach and we recruited four more golfers to go with us. That was the year that we adopted the name of The Cold Beer Open. Each year saw more new friends being invited and having a wonderful time. Over the years our group has expanded to where we had 90 golfers in 2009. We have all made new friends and lasting friendships. We have lost some of our participants to bad health and even death. We miss these people greatly and think of them often. The Cold Beer Open concept has always been about friends and having a good time. The Cold Beer Open has never been associated with any business or industry. We do have several sponsors that help us tremendously and we a very grateful to each of them. We wish to acknowledge everyone that has participated over the years but that would just take too much space. Although our name says Open, the tournament is by invitation. A recent participant can invite other people to join our group. We are a very diverse group but this only served to make the friendships even stronger. Again, thanks to everyone that has participated and we look forward to another successful 30 years.</p>
             </div>
             
             </div>
             </>}



         </div>
         
     );

}

export default About;