import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotoGallery = () => {

  return (
    <div className="PhotoGallery" id="PhotoGallery">
      <h3>PhotoGallery</h3>
      <Carousel>
        <div>
          <img src="https://img.lemde.fr/2024/04/22/0/0/2317/1621/700/0/75/0/0cf6895_2024-04-22t212339z-1754773059-up1ek4m1nfebz-rtrmadp-3-soccer-italy-mil-int-report.JPG" alt="the first news" />
          <p className="legend">Photo 1</p>
        </div>
        <div>
          <img src="https://icdn.sempreinter.com/wp-content/uploads/2024/04/Second-Star-SempreInter-Article-900x600.jpg" alt="the second news" />
          <p className="legend">Photo 2</p>
        </div>
        <div>
          <img src="https://citisportsonline.com/wp-content/uploads/2024/04/2024-04-22t210929z_1_lynxnpek3l0rc_rtroptp_3_soccer-italy-mil-int-report.jpg" alt="the third news" />
          <p className="legend">Photo 3</p>
        </div>
      </Carousel>
    </div>
  );
}
 
export default PhotoGallery;