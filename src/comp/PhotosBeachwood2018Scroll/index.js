import React from "react"; 
import "./style.css";
import { UncontrolledCarousel } from 'reactstrap';






const items = [
    {
      src: '../assets/images/20181.jpg',
      altText: 'Slide 1',
      caption: <p className="descript rounded"></p>,
      header: <h1 className="event-name rounded">Beachwood golf club 2018</h1>,
      key: '1'
    },
    {
        src: '../assets/images/20182.jpg',
        altText: 'Slide 2',
        caption: <p className="descript rounded"></p>,
        header: <h1 className="event-name rounded">Beachwood golf club 2018</h1>,
        key: '2'
      },
      {
      src: '../assets/images/20183.jpg',
        altText: 'Slide 3',
        caption: <p className="descript rounded"></p>,
        header: <h1 className="event-name rounded">Beachwood golf club 2018</h1>,
        key: '3'
      },
];


const PhotosBeachwood2018Scroll = () => 

        




      <div className="carousel slide carousel-fade scroll">
     
<UncontrolledCarousel items={items} />
</div>







      

export default PhotosBeachwood2018Scroll;