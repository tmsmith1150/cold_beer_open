import React from "react"
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const SignUp = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
});

const isTabletOrPhone = useMediaQuery({
    query: '(max-device-width: 1023px)'
});

     return (
         <div className="sign-up-main">

{isDesktopOrLaptop && <>
             <div className="nav-div">
             <Navbar></Navbar>
             </div>

        

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

      <Button className="submit-signup-btn">Submit

      </Button>
      



      
      </div>
      </Form>
            
</div>
</>}


{isTabletOrPhone && <>
             <div className="nav-div">
             <Navbar></Navbar>
             </div>

        

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

      <Button className="submit-signup-btn">Submit

      </Button>
      



      
      </div>
      </Form>
            
</div>
</>}



         </div>
     );

}

export default SignUp;