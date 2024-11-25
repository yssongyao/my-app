import React from 'react';
import ChopText from './ChopText';


const firstBlog=`David: This is the most exciting match I witnessed in my life. The most exciting part is Inter has won their 20th Series A title after beating city rivals at Milan Derby.`;
const secondBlog=`Anna: The players had a perfect match. They have played so perfectly in this season. Congratulations to the great team.`;

const Blog = () => {
    return (
        
        <div id="Blog" className="Blog">           
            
            <h2>Blog</h2>
            <ul>
                <li><ChopText text={firstBlog} /></li>
                <li><ChopText text={secondBlog} /></li>
            </ul>      

        </div>
    );
};

export default Blog;