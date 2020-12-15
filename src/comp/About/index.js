import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';


const About = () => {

     return (
         <div className="about-main">
             <Navbar></Navbar>
             <Form className="form" />
             <p>about page</p>
         </div>
     );

}

export default About;