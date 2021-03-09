import React from "react"
import './style.css';
import Contact from '../../comp/Contact';
import Navbar from '../../comp/Navbar';
// import PhotoCarousel from '../../comp/PhotoCarousel';
import MyJumbotron from '../../comp/MyJumbotron';
import MediaQuery, { useMediaQuery } from 'react-responsive';



const Home = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });
    

    return (
        <div className="home-main">

            {isDesktopOrLaptop && <>

                <div className="nav-div">
             <Navbar></Navbar>
             </div>
       

        
       
         <div className="cbo-home-img">
            <MyJumbotron  />
            </div>

         

        
         <div className="year-2021-title">WELCOME TO THE 42ND ANNUAL COLD BEER OPEN 1980 - 2021.</div>
             <div className="year-2021-para1-div"> 
               <p className="year-2021-para1">
                   WE ARE HAPPY YOU COULD JOIN US FOR THIS EDITION OF THE COLD BEER OPEN. THIS YEAR MARKS OUR 42ND YEAR. THE COLD BEER OPEN IS A GOLF TOURNAMENT FEATURING FOUR DAYS OF GOLF IN BEAUTIFUL NORTH MYRTLE BEACH, SOUTH CAROLINA. THE TOURNAMENT IS A POINTS BASED SYSTEM WITH MANY OPPORTUNITIES TO WIN PRIZES, MONEY AND A CHANCE TO WIN A FREE TRIP TO NEXT YEARS TOURNAMENT. WE BELIEVE THIS MAKES US UNIQUE IN THE FACT THAT WE HOST A VERY FINE TOURNAMENT WITH INCREDIBLY LOYAL AND DOWNRIGHT GOOD PEOPLE. WE BELIEVE WE HAVE THE BEST TOURNAMENT YOU CAN ATTEND. THIS IS DUE TO THE PARTICIPATION OF PEOPLE LIKE YOU. WE HOPE YOU ENJOY YOURSELF AS MUCH AS WE DO AND WILL MAKE THIS AN ANNUAL EVENT FOR YOURSELF AS WELL.
                   
               </p>
             </div>
             
         
         
         
        <div>
         <Contact className="contact-info"></Contact>
         </div>

         </>}

         {isTabletOrPhone && <>
         <div className="nav-div">
             <Navbar></Navbar>
             </div>
       

        
        <div className="flex-cont">
          
        <div className="cbo-home-img">
            <MyJumbotron  />
            </div>

         

        
         
        <div className="year-2021-title">WELCOME TO THE 42ND ANNUAL COLD BEER OPEN 1980 - 2021.
         </div>
             <div className="year-2021-para1-div"> 
               <p className="year-2021-para1">
                   WE ARE HAPPY YOU COULD JOIN US FOR THIS EDITION OF THE COLD BEER OPEN. THIS YEAR MARKS OUR 42ND YEAR. THE COLD BEER OPEN IS A GOLF TOURNAMENT FEATURING FOUR DAYS OF GOLF IN BEAUTIFUL NORTH MYRTLE BEACH, SOUTH CAROLINA. THE TOURNAMENT IS A POINTS BASED SYSTEM WITH MANY OPPORTUNITIES TO WIN PRIZES, MONEY AND A CHANCE TO WIN A FREE TRIP TO NEXT YEARS TOURNAMENT. WE BELIEVE THIS MAKES US UNIQUE IN THE FACT THAT WE HOST A VERY FINE TOURNAMENT WITH INCREDIBLY LOYAL AND DOWNRIGHT GOOD PEOPLE. WE BELIEVE WE HAVE THE BEST TOURNAMENT YOU CAN ATTEND. THIS IS DUE TO THE PARTICIPATION OF PEOPLE LIKE YOU. WE HOPE YOU ENJOY YOURSELF AS MUCH AS WE DO AND WILL MAKE THIS AN ANNUAL EVENT FOR YOURSELF AS WELL.
                   
               </p>
             </div>

        
         
             
         
         
         
        <div>
         <Contact className="contact-info"></Contact>
         </div>

        </div>
         

         </>}
         
        </div>
    );


}

export default Home;



