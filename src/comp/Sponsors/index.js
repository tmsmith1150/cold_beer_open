import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';


const Sponsors = () => {

     return (
         <div className="sponsors-main">
             <Navbar></Navbar>
             <Form className="form" />
             <p>sponsors page</p>
         </div>
     );

}

export default Sponsors;