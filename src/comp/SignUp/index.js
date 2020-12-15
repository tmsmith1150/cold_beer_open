import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';


const SignUp = () => {

     return (
         <div className="sign-up-main">
             <Navbar></Navbar>
             <Form className="form" />
             <p>sign up page</p>
         </div>
     );

}

export default SignUp;