import React, { useState } from 'react';
import './style.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import LoginFlipBtn from '../LoginFlipBtn';
import LoginForm from '../LoginForm';


const SignUpForm = (props) => {

    // const [signUpComp, setSignUpComp]=useState(true)
    // const [buttonName , setButtonName] = useState("Already have an account? Log in here")
  
    // function handleClick(){
    //   if(signUpComp ===true){
    //     setSignUpComp(false)
  
    //   }else if (signUpComp ===false){
    //     setSignUpComp(true)
    //     setButtonName("Already have an account? Log in here")
    //   }
    //   if(signUpComp ===false){
    //     setSignUpComp(true)
  
    //   }else if (signUpComp ===true){
    //     setSignUpComp(false)
    //     setButtonName("Create new account")
    //       }
  
    // }

    return (
        <Form className="login-form">
            <div className="login-text">
            <p>Sign Up Here</p>
            </div>
            <div className="form-div">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" >Enter Email Address</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
          </FormGroup>
          </div>
          <div className="form-div">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" >Create Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
          </FormGroup>
          </div>
          <div className="submit-btn-div">
            <Button className="submit-btn">Submit</Button>
          </div>
          
        </Form>
      );
    }
    
    export default SignUpForm;