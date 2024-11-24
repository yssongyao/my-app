import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import news1 from '../../assets/image/news1.jpg';
import news2 from '../../assets/image/news2.jpg';
import news3 from '../../assets/image/news3.jpg';
import './PhotoGallery.css';

const PhotoGallery = () => {

  return (
    <div className="PhotoGallery" id="PhotoGallery">      
      <Carousel>
        <div>
          <img src={news1} alt="the first news" />
          <p className="legend">Players celebration</p>
        </div>
        <div>
          <img src={news2} alt="the second news" />
          <p className="legend">2nd Star: 20th Champion</p>
        </div>
        <div>
          <img src={news3} alt="the third news" />
          <p className="legend">All team members celebration</p>
        </div>
      </Carousel>
    </div>
  );
}
 
export default PhotoGallery;