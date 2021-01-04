import React, { useState } from "react"
import LoginForm from '../../comp/LoginForm';
import SignUpForm from '../../comp/SignUpForm';
import LoginFlipBtn from '../../comp/LoginFlipBtn';
import MyJumbotron from '../../comp/MyJumbotron';
import './style.css';
// import Copyright from "../../assets/images/copyright.jpg";



const Login = () => {


    const [signUpComp, setSignUpComp]=useState(true)
  const [buttonName , setButtonName] = useState("Already have an account? Log in here")

  function handleClick(){
    if(signUpComp ===true){
      setSignUpComp(false)

    }else if (signUpComp ===false){
      setSignUpComp(true)
      setButtonName("Already have an account? Click here to log in.")
    }
    if(signUpComp ===false){
      setSignUpComp(true)

    }else if (signUpComp ===true){
      setSignUpComp(false)
      setButtonName("Click here to create new account.")
        }

  }

    return(
        <div className="login-page">
          <div className="faux-nav"></div>
            <MyJumbotron  />
            <div>
            
            {signUpComp?<SignUpForm />:<LoginForm className="init-login"/>}
            <LoginFlipBtn className="flipper" handleClick={()=>handleClick}   buttonName={buttonName}/>
            
            </div>
        </div>
    )
}


export default Login;
  
    
{/* <div className="faux-nav">{ <img className="cbo-logo display-4 brand animate__animated animate__fadeIn animate__delay-1s" src={Copyright} alt="Logo"/> }</div> */}