import React from "react"
import { Form } from 'reactstrap';
import './style.css';
import Navbar from '../Navbar';


const Schedule = () => {

     return (
         <div className="schedule-main">
             <Navbar></Navbar>
             <Form className="form" />
             <p>schedule page</p>
         </div>
     );

}

export default Schedule;