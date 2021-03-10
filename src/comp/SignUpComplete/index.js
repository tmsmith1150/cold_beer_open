import React, {useState} from "react"
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import SignUpSubmitBtn from '../SignUpSubmitBtn'
import MediaQuery, { useMediaQuery } from 'react-responsive';


const SignUpComplete = (props) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
});

const isTabletOrPhone = useMediaQuery({
    query: '(max-device-width: 1023px)'
});

const submitBtnStyle = {
  border: '3px solid teal',
  backgroundColor: '#009999',
  textAlign: 'center',
  justifyContent: 'center',
  marginLeft: '180px',
  width: '170px',
  

  
};

const inputGroupStyle = {

 
  
};

     return (
         <div className="sign-up-comp-main">

{isDesktopOrLaptop && <>
             

             <div>
                 <p>Thank you and welcome to our 42nd Annual Cold Beer Open! A confirmation has been sent to the email address you have provided.</p>
             </div>

            
        

         


             

      


      
            

</>}


{isTabletOrPhone && <>
    <div>
                 <p>Thank you and welcome to our 42nd Annual Cold Beer Open! A confirmation has been sent to the email address you have provided.</p>
             </div>

        

          


            



      
      
            

</>}



         </div>
     );

}

export default SignUpComplete;