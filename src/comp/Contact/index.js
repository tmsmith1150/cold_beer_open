
import { Form, Button, Fade, ListGroup, ListGroupItem, NavLink } from 'reactstrap';
import './style.css';
import React, { useState } from 'react';
import emailIcon from "../Gifs/email-logo.png";
import baywatchLogo from "../Gifs/baywatch.logo.png";



const Contact = (props) => {

    const [fadeIn, setFadeIn] = useState(true);

    const toggle = () => setFadeIn(!fadeIn);

     return (
         
        

         <div className="contact-main">

          <Button className="contact-btn" onClick={toggle}>Contact Us</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">

            {/* This content will fade in and out as the button is pressed */}
                <div className="row">
                    <div className="column">
                <ListGroup>
                <ListGroupItem className="contact-list">Terry Smith</ListGroupItem>
                <ListGroupItem className="contact-list">P.O. Box 550639</ListGroupItem>
                <ListGroupItem className="contact-list">Gastonia, NC 28055</ListGroupItem>
                <ListGroupItem className="contact-list">704-813-9523</ListGroupItem>
                <ListGroupItem className="contact-list">Fax: 704-869-6029</ListGroupItem>
                <ListGroupItem className="contact-list">Cell: 704-813-1296</ListGroupItem>
                <NavLink className="email-link" href="mailto:olepronc@earthlink.net"><img className="email-logo" src={emailIcon} alt="Logo"/> olepronc@earthlink.net</NavLink>
              </ListGroup>
              </div>

              <div className="column">
                <ListGroup>
                <NavLink className="baywatch-link" target="blank" href="https://www.baywatchresort.com/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-BayWatchResort"><img className="baywatch-logo" src={baywatchLogo} alt="logo" /></NavLink>
                <ListGroupItem className="contact-list">North Myrtle Beach, SC</ListGroupItem>
                <ListGroupItem className="contact-list">2701 South Ocean Blvd</ListGroupItem>
                <ListGroupItem className="contact-list">North Myrtle Beach, SC 29582</ListGroupItem>
                <ListGroupItem className="contact-list">843-272-4600</ListGroupItem>
              </ListGroup>
              </div>
                    
                </div>
                
            </Fade>
              
         </div>
     );

}

export default Contact;