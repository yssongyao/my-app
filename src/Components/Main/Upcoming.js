import React from 'react';
import './Upcoming.css';
import WeatherInfo from './WeatherInfo';
import UpcomingImg from './UpcomingImg';

const Upcoming = () => {
    return (
        <div id="Upcoming" className="Upcoming">
            <h2>Upcoming</h2>
            <h3 style={{textAlign: 'center'}}>Match Day 34 of Series A</h3>
            <UpcomingImg />
            <WeatherInfo />            
        </div>
    );
};

export default Upcoming;