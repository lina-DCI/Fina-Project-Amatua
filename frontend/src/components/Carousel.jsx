import React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from "/images/first-photo-carousel.png";
import second from "/images/second-photo-carousel.png";
import third from "/images/third-photo-carousel.png";
import bigSize from "/images/blooming-collection-2023-green.svg";



const Carousels = () => {

  return (

    <Carousel>
<Carousel.Item>
  <div className="image-container">
    <img src={first} alt="First Slide" className="carousel-image" />
    <img src={bigSize} className="big-size-image" alt="Big Size" />
    <h5 className="discover-text">DISCOVER OUR</h5>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="image-container">
    <img src={second} alt="Second Slide" className="carousel-image" />
    <img src={bigSize} className="big-size-image" alt="Big Size" />
    <h5 className="discover-text">DISCOVER OUR</h5>
  </div>
</Carousel.Item>
<Carousel.Item>
  <div className="image-container">
    <img src={third} alt="Third Slide" className="carousel-image three" />
    <img src={bigSize} className="big-size-image" alt="Big Size" />
    <h5 className="discover-text">DISCOVER OUR</h5>
  </div>
</Carousel.Item>
  </Carousel>
  
);
};



export default Carousels;

