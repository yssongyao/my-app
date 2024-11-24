import React from 'react';
import InterLogo from "../../assets/image/inter_logo.png";
import TorinoLogo from "../../assets/image/Torino_Logo.png";
import './Upcoming.css';
import WeatherInfo from './WeatherInfo';

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
            <WeatherInfo />            
        </div>
    );
};

export default Upcoming;