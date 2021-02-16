import React from "react"; 
import "./style.css";
import { UncontrolledCarousel } from 'reactstrap';






const items = [
    {
        src: '../assets/images/20182.jpg',
        altText: 'Slide 2',
        caption: <p className="descript rounded"></p>,
        header: <h1 className="event-name rounded">Leopard's Chase golf club 2020</h1>,
        key: '2'
      },
    {
      src: '../assets/images/20181.jpg',
      altText: 'Slide 1',
      caption: <p className="descript rounded"></p>,
      header: <h1 className="event-name rounded">Leopard's Chase golf club 2020</h1>,
      key: '1'
    },
      {
      src: '../assets/images/20183.jpg',
        altText: 'Slide 3',
        caption: <p className="descript rounded"></p>,
        header: <h1 className="event-name rounded">Leopard's Chase golf club 2020</h1>,
        key: '3'
      },
];


const PhotosLeopardsChase2020Scroll = () => 

        




      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />
</div>







      

export default PhotosLeopardsChase2020Scroll;