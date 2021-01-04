
import "./style.css";
import React from 'react';
import {
    Button, 
  } from 'reactstrap';



function LoginFlipBtn (props) {


return(
    <div className="btn-div" >
      
     <Button className="flip-btn" 
      onClick={props.handleClick()}
>{props.buttonName}
</Button>
    </div>
  )
}





export default LoginFlipBtn;