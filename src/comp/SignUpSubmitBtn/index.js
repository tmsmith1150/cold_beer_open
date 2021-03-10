import React, {useState} from "react"
import { Button } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const SignUpSubmitBtn = (props) => {

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
  marginLeft: '410px',
  width: '170px',
  position: 'relative',

  
};

// const [signUpComp, setSignUpComp]=useState(true)
// const [buttonName, setButtonName]=useState("Submit")

// function handleClick(props){
//     if(signUpComp ===true){
//       setSignUpComp(false)
  
//     }else if (signUpComp ===false){
//       setSignUpComp(true)
//       setButtonName("Submit")
//     }
//     if(signUpComp ===false){
//       setSignUpComp(true)
  
//     }else if (signUpComp ===true){
//       setSignUpComp(false)
//       setButtonName("")
//         }
//   }


return(
    <div className="btn-div" >
      
     <Button className="flip-btn" style={submitBtnStyle}
      onClick={props.handleClick()}
>{props.buttonName}
</Button>
    </div>
  )






}

export default SignUpSubmitBtn;