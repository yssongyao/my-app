import React from 'react';
import InterLogo from "../../assets/image/inter_logo.png";
import TorinoLogo from "../../assets/image/Torino_Logo.png";

const UpcomingImg = () => {
    return (
        <div className='FlexUpcoming'>
                <img 
                 src={InterLogo}
                 alt='Inter Logo'
                 style={
                    {
                        width:'8%'
                    }
                }
                   />
                <h2>VS</h2>
                <img
                 src={TorinoLogo}
                 alt='Torino Logo'
                 style={
                    {
                        width:'8%'
                    }
                }
                   />
        </div>
    );
};

export default UpcomingImg;