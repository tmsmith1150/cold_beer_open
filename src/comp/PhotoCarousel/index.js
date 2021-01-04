import React from "react"; 
import "./style.css";

import { UncontrolledCarousel } from 'reactstrap';
import CBOHome from "../../assets/images/CBO-home.jpg";





const items = [
    {
      src: {CBOHome},
      altText: 'Slide 1',
      caption: <p className="descript rounded">Come join us to throw a bunch of axes!</p>,
      header: <h1 className="event-name rounded">Bad Axe Throwing</h1>,
      key: '1'
    },
    {
        src: '../assets/images/leopards-chase.png',
        altText: 'Slide 2',
        caption: <p className="descript rounded">Come join us to throw a bunch of axes!</p>,
        header: <h1 className="event-name rounded">Bad Axe Throwing</h1>,
        key: '1'
      },
      {
      src: '../assets/images/pearl-golf.png',
        altText: 'Slide 3',
        caption: <p className="descript rounded">Come join us to throw a bunch of axes!</p>,
        header: <h1 className="event-name rounded">Bad Axe Throwing</h1>,
        key: '1'
      },
];


const PhotoCarousel = () =>

      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />




</div>

export default PhotoCarousel;