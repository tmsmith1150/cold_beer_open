import React from "react"; 
import "./style.css";

import { UncontrolledCarousel } from 'reactstrap';






const items = [
    {
      src: '../assets/images/20184.jpg',
      altText: 'Slide 1',
      header: <h1 className="event-name rounded">Cold Beer Open 2018</h1>,
      key: '1'
    },
    {
        src: '../assets/images/20185.jpg',
        altText: 'Slide 2',
        header: <h1 className="event-name rounded">Cold Beer Open 2018</h1>,
        key: '1'
      },
      {
      src: '../assets/images/20186.jpg',
        altText: 'Slide 3',
        header: <h1 className="event-name rounded">Cold Beer Open 2018</h1>,
        key: '1'
      },
      {
        src: '../assets/images/20187.jpg',
          altText: 'Slide 3',
          header: <h1 className="event-name rounded">Cold Beer Open 2018</h1>,
          key: '1'
        },
        {
          src: '../assets/images/20188.jpg',
            altText: 'Slide 3',
            header: <h1 className="event-name rounded">Cold Beer Open 2018</h1>,
            key: '1'
          },
];


const PhotoCarousel2018 = () =>

      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />




</div>

export default PhotoCarousel2018;