import React from 'react';
import ReactIframe from 'react-iframe';
import './Highlights.css';
import HideScore from './HideScore';

const Highlights = () => {
    return (
        <div id="Highlights" className="Highlights">
            <h2>Highlights</h2>
            <HideScore />
            <ReactIframe 
            url="https://www.youtube.com/embed/vsJOylIqW6A"
            width="70%"
            height="70%"
            allow="fullscreen"            
            styles={
                {
                    maxWidth: "100%",
                }
            }
            />

        </div>
    );
};

export default Highlights;