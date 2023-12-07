import React from 'react';
import '../scss/header.scss';

const Header = props => {
    return (
        <section>
       <div> 
        <h2>Upload Image</h2>
        <strong>Example of image to upload:</strong>
        <img src="exampleswatch.jpg" alt="close up, well-lit image of a cheek with no makeup"/>
        <ul>
            <li>A high-quality, well-lit selfie or portrait photo</li>
            <li>A close-up image of your cheek or neck, showing the texture and color of your skin</li>
        </ul>

        <strong>Good lighting:</strong>
        <ul>
            <li>Use natural light whenever possible, make sure it is diffused and even</li>
            <li>Avoid harsh shadows</li>
        </ul>

        <strong>Side profile zoomed in of cheek or neck:</strong>
        <ul>
            <li>This will help to see your skin texture and color more clearly</li>
            <li>Make sure your hair is pulled back or out of your face</li>
        </ul>
        </div>
        </section>
    );
}

export default Header;