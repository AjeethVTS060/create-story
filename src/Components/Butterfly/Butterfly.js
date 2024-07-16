import React, { useEffect } from 'react';
import './Butterfly.css';

const Butterfly = () => {
    const zigzagAmplitude = 300; // Increased width of zigzag for more dramatic movement
    const zigzagFrequency = 0.1;  // Adjusted frequency for a wider oscillation
    const speedFactor = 0.3;      // Adjust speed of vertical movement

    useEffect(() => {
        const butterfly = document.getElementById('butterfly');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowWidth = window.innerWidth;

            // Zigzag movement calculation
            const zigzagX = zigzagAmplitude * Math.sin(scrollPosition * zigzagFrequency);
            // Forward movement calculation
            const forwardX = (scrollPosition * 0.1) % windowWidth;
            // Vertical movement based on scroll
            const zigzagY = scrollPosition * speedFactor;

            // Combine forward and zigzag movement
            butterfly.style.transform = `translate(${forwardX + zigzagX}px, ${zigzagY}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div id="butterfly" className="butterfly"></div>;
};

export default Butterfly;
