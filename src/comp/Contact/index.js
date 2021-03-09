
import { Form, Button, Fade, ListGroup, ListGroupItem, NavLink } from 'reactstrap';
import './style.css';
import React, { useState } from 'react';
import emailIcon from "../../assets/images/email-logo.png";
import baywatchLogo from "../../assets/images/baywatch.logo.png";
import MediaQuery, { useMediaQuery } from 'react-responsive';



const Contact = (props) => {

    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 1024px)'
  });
  
  const isTabletOrPhone = useMediaQuery({
      query: '(max-device-width: 1023px)'
  });

  const contactBtnStyle = {
    border: '3px solid teal',
    backgroundColor: '#009999',
    textAlign: 'center',
    justifyContent: 'center',
    width: '170px',
  
    
  };

     return (
         
        

         <div className="contact-main">

{isDesktopOrLaptop && <>
           <div className="contact-btn-div">
          <Button 
          style={contactBtnStyle} 
          className="contact-btn btn btn secondary" 
          onClick={toggle}>Contact Us</Button>
          </div>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            
            {/* This content will fade in and out as the button is pressed */}
                <div className="row">
                    <div className="column">
                <ListGroup>
                  <ul>
                <li className="contact-list">Terry Smith</li>
                <li className="contact-list">P.O. Box 550639</li>
                <li className="contact-list">Gastonia, NC 28055</li>
                <li className="contact-list">704-813-9523</li>
                <li className="contact-list">Fax: 704-869-6029</li>
                <li className="contact-list">Cell: 704-813-1296</li>
                
                <NavLink className="email-link" href="mailto:olepronc@earthlink.net"><img className="email-logo" src={emailIcon} alt="Logo"/> olepronc@earthlink.net</NavLink>
                </ul>
              </ListGroup>
              </div>

              <div className="column">
                <ListGroup>
                <ul>
                <NavLink className="baywatch-link" target="blank" href="https://www.baywatchresort.com/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-BayWatchResort"><img className="baywatch-logo" src={baywatchLogo} alt="logo" /></NavLink>

                
                <li className="contact-list">North Myrtle Beach, SC</li>
                <li className="contact-list">2701 South Ocean Blvd</li>
                <li className="contact-list">North Myrtle Beach, SC 29582</li>
                <li className="contact-list">843-272-4600</li>
                </ul>
              </ListGroup>
              </div>
                    
                </div>
                
            </Fade>
            </>}


            {isTabletOrPhone && <>
           <div className="contact-btn-div">
          <Button className="contact-btn btn" onClick={toggle}>Contact Us</Button>
          </div>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            
            {/* This content will fade in and out as the button is pressed */}
               
                    <div className="column">
                <ListGroup>
                  <ul>
                <li className="contact-list">Terry Smith</li>
                <li className="contact-list">P.O. Box 550639</li>
                <li className="contact-list">Gastonia, NC 28055</li>
                <li className="contact-list">704-813-9523</li>
                <li className="contact-list">Fax: 704-869-6029</li>
                <li className="contact-list">Cell: 704-813-1296</li>
                
                <NavLink className="email-link" href="mailto:olepronc@earthlink.net"><img className="email-logo" src={emailIcon} alt="Logo"/> olepronc@earthlink.net</NavLink>
                </ul>
              </ListGroup>
              </div>

              <div className="column">
                <ListGroup>
                <ul>
                <NavLink className="baywatch-link" target="blank" href="https://www.baywatchresort.com/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-BayWatchResort"><img className="baywatch-logo" src={baywatchLogo} alt="logo" /></NavLink>

                
                <li className="contact-list">North Myrtle Beach, SC</li>
                <li className="contact-list">2701 South Ocean Blvd</li>
                <li className="contact-list">North Myrtle Beach, SC 29582</li>
                <li className="contact-list">843-272-4600</li>
                </ul>
              </ListGroup>
              </div>
                    
            
                
            </Fade>
            </>}
              
         </div>
     );

}

export default Contact;