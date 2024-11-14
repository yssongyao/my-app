import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import news1 from './assets/image/news1.jpg';
import news2 from './assets/image/news2.jpg';
import news3 from './assets/image/news3.jpg';

const PhotoGallery = () => {

  return (
    <div className="PhotoGallery" id="PhotoGallery">
      <h3>PhotoGallery</h3>
      <Carousel>
        <div>
          <img src={news1} alt="the first news" />
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src={news2} alt="the second news" />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src={news3} alt="the third news" />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
  );
}
 
export default PhotoGallery;