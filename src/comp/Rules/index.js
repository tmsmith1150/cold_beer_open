import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';


const Rules = () => {

     return (
         <div className="rules-main">
             <Navbar></Navbar>
             <Form className="form" />
             <p>rules page</p>
         </div>
     );

}

export default Rules;