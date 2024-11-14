import React from 'react';
import { useState } from "react";

const Contact = () => {
    return (
        <div className="Contact">
            
            <h2>Contact</h2>
            <form>
                <label>First name
                <input type="text" name="firstname" placeholder="Enter your first name." />
                </label> <br />
                <label for="lastname">Last name    
                <input type="text" title="lastname" placeholder="Enter your last name." />
                </label> <br />
                <label for="email">Email
                <input type="text" title="email" placeholder="Enter your Email." />
                </label> <br />                 
                 <textarea rows="5" cols="40" placeholder="Enter your message" required></textarea> <br />
                 <input type="checkbox" name="newsletter" checked /> <br />
                 <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Contact;