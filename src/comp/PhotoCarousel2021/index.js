import React from "react"; 
import "./style.css";

import { UncontrolledCarousel } from 'reactstrap';






const items = [
    {
      src: '../assets/images/beachwood-current.jpg',
      altText: 'Slide 1',
      header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
      key: '1'
    },
    {
        src: '../assets/images/beachwood-2-current.jpg',
        altText: 'Slide 2',
        header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
        key: '1'
      },
      {
      src: '../assets/images/leopards-chase-1.jpg',
        altText: 'Slide 3',
        header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
        key: '1'
      },
      {
        src: '../assets/images/leopards-chase-2.jpg',
          altText: 'Slide 3',
          header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
          key: '1'
        },
        {
          src: '../assets/images/the-pearl-1.jpg',
            altText: 'Slide 3',
            header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
            key: '1'
          },
          {
            src: '../assets/images/the-pearl-2.jpg',
              altText: 'Slide 3',
              header: <h1 className="event-name rounded">Cold Beer Open 2021</h1>,
              key: '1'
            },
];


const PhotoCarousel2021 = () =>

      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />




</div>

export default PhotoCarousel2021;