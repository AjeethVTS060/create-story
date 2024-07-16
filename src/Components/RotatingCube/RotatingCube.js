import React from 'react';
import './RotatingCube.css';

const RotatingCube = () => {
    return (
        <div className="wrapper">
            <div className="rotate-inner">
                <div className="side front"></div>
                <div className="side back"></div>
                <div className="side right"></div>
                <div className="side left"></div>
            </div>
        </div>
    );
};

export default RotatingCube;