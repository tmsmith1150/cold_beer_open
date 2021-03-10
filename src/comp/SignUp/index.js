import React, {useState} from "react"
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import './style.css';


import SignUpComplete from '../SignUpComplete';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const SignUp = (props) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
});

const isTabletOrPhone = useMediaQuery({
    query: '(max-device-width: 1023px)'
});



const inputGroupStyle = {

 
  
};

const [signUpComp, setSignUpComp]=useState(true)
const [buttonName, setButtonName]=useState("Submit")

function handleClick(){
  if(signUpComp ===true){
    setSignUpComp(false)

  }else if (signUpComp ===false){
    setSignUpComp(true)
    setButtonName("Submit")
  }
  if(signUpComp ===false){
    setSignUpComp(true)

  }else if (signUpComp ===true){
    setSignUpComp(false)
    setButtonName("Thank you!")
      }
}

     return (
         <div className="sign-up-main">

{isDesktopOrLaptop && <>
            

        

          <div className="tbd">
            <h1 className="tbd-h1">
              Dates and destinations are being finalized. Sign up will begin March 15th.
            </h1>
          </div>


          <div className="sign-up-form-div">


             <Form className="sign-up-form">

             <div className="input-group-info">
             <InputGroup className="name-info player-info">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
    
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Phone</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      
      </div>
      </Form>

      <div className="pairing-choices">
        <h2 className="pairing-choices-h1">Please list three players that you would like to be paired with. We make every effort to pair our players with one of their choices each day.</h2>
      </div>


      <Form className="sign-up-form pairings">

             <div className="input-group-info">
             <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
   
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
     
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
    
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />

      
      



      
      </div>
      </Form>
            
</div>
</>}


{isTabletOrPhone && <>
             

        

          <div className="tbd">
            <h1 className="tbd-h1">
              Dates and destinations are being finalized. Sign up will begin March 15th.
            </h1>
          </div>


          <div className="sign-up-form-div">


             <Form className="sign-up-form">

             <div className="input-group-info">
             <InputGroup className="name-info player-info">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
    
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Phone</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      
      </div>
      </Form>

      <div className="pairing-choices">
        <h2 className="pairing-choices-h1">Please list three players that you would like to be paired with. We make every effort to pair our players with one of their choices each day.</h2>
      </div>


      <Form className="sign-up-form pairings">

             <div className="input-group-info">
             <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
   
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
     
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup className="name-info pair-first-name">
        <InputGroupAddon addonType="prepend">First name</InputGroupAddon>
        <Input />
      </InputGroup>
    
      <InputGroup className="name-info">
        <InputGroupAddon addonType="prepend">Last name</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />

      
      



      
      </div>
      </Form>
            
</div>
</>}



         </div>
     );

}

export default SignUp;