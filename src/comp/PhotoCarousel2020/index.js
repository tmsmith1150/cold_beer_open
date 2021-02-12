import React from "react"; 
import "./style.css";

import { UncontrolledCarousel } from 'reactstrap';






const items = [
    {
      src: '../assets/images/20201.jpg',
      altText: 'Slide 1',
      header: <h1 className="event-name rounded">Cold Beer Open 2020</h1>,
      key: '1'
    },
    {
        src: '../assets/images/20202.jpg',
        altText: 'Slide 2',
        header: <h1 className="event-name rounded">Cold Beer Open 2020</h1>,
        key: '1'
      },
      {
      src: '../assets/images/20203.jpg',
        altText: 'Slide 3',
        header: <h1 className="event-name rounded">Cold Beer Open 2020</h1>,
        key: '1'
      },
      {
        src: '../assets/images/20204.jpg',
          altText: 'Slide 3',
          header: <h1 className="event-name rounded">Cold Beer Open 2020</h1>,
          key: '1'
        },
        {
          src: '../assets/images/20188.jpg',
            altText: 'Slide 3',
            header: <h1 className="event-name rounded">Cold Beer Open 2020</h1>,
            key: '1'
          },
];


const PhotoCarousel2020 = () =>

      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />




</div>

export default PhotoCarousel2020;