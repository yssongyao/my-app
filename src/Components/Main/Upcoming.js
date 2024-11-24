import React from 'react';
import InterLogo from "../../assets/image/inter_logo.png";
import TorinoLogo from "../../assets/image/Torino_Logo.png";
import './Upcoming.css';
import Weather from './Weather';

const Upcoming = () => {
    return (
        <div className="Upcoming">
            <h2>Upcoming</h2>
            <h3 style={{textAlign: 'center'}}>Match Day 34 of Series A</h3>
            <div className='FlexUpcoming'>
                <img 
                 src={InterLogo}
                 alt='Inter Logo'
                 style={
                    {
                        width:'12%'
                    }
                }
                   />
                <h1>VS</h1>
                <img
                 src={TorinoLogo}
                 alt='Torino Logo'
                 style={
                    {
                        width:'12%'
                    }
                }
                   />
            </div>
            <Weather />            
        </div>
    );
};

export default Upcoming;