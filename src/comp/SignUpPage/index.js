import React, {useState} from "react"
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import SignUpSubmitBtn from '../SignUpSubmitBtn';
import SignUpComplete from '../SignUpComplete';
import SignUp from '../SignUp';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const SignUpPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
});

const isTabletOrPhone = useMediaQuery({
    query: '(max-device-width: 1023px)'
});




const [signUpComp, setSignUpComp]=useState(true)
const [buttonName, setButtonName]=useState("Submit")

function handleClick(props){
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
    setButtonName("<--- Back")
      }
}

     return (
        
<div>
{isDesktopOrLaptop && <>

    <div className="nav-div">
             <Navbar></Navbar>
             </div>
             

             {signUpComp?<SignUp />:<SignUpComplete />}
             <SignUpSubmitBtn className="flipper" handleClick={()=>handleClick}
             buttonName={buttonName}></SignUpSubmitBtn>

        
</>}


{isTabletOrPhone && <>
    <div className="nav-div">
             <Navbar></Navbar>
             </div>
             

             {signUpComp?<SignUp />:<SignUpComplete />}
             <SignUpSubmitBtn className="flipper" handleClick={()=>handleClick}
             buttonName={buttonName}></SignUpSubmitBtn>

        

             </>}

             </div>
        
     );

}

export default SignUpPage;