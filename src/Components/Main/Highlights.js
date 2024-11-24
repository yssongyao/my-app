import React from 'react';
import ReactIframe from 'react-iframe';
import './Highlights.css';

const Highlights = () => {
    return (
        <div className="Highlights">
            <h2>Highlights</h2>
            <h3>Inter Milan vs AC Milan 2:1</h3>
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