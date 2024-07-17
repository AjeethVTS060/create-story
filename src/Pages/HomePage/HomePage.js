import React from 'react';
import './HomePage.css';
import RotatingCube from '../../Components/RotatingCube/RotatingCube';
import Butterfly from '../../Components/Butterfly/Butterfly';
import Pricing from "../../Components/NewPricing";
import Footer from "../../Components/MiniCenteredFooter";
import FAQ from "../../Components/SimpleWithSideImage";
import { useNavigate } from 'react-router-dom';
import monkeyImage from '../../Assets/Images/monkey-climbing-up-vine.png'; // Import the monkey image

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div >
            <Butterfly />
            <header>
                <h1>Welcome to AI Story Generator</h1>
                <img src={monkeyImage} alt="Monkey Climbing" className="monkey-image" /> {/* Add the monkey image */}
                <div className="header-buttons">
                    <button onClick={() => navigate("/login")} className="header-button">Login</button>
                    <button onClick={() => navigate("/signUp")} className="header-button">Sign Up</button>
                </div>
            </header>

            <main>
                <section id="hero">
                    <div id="hero-animation">
                        <RotatingCube />
                    </div>
                    <h2>Discover Amazing Stories</h2>
                    <p>Engage your imagination with our interactive 3D storybooks!</p>
                    <a href="/login" className="cta-button">
                        Explore Stories
                    </a>
                </section>
                <section id="stories">
                    
                </section>
                <section id="ai-story-generator">
                    <h2>AI Story Generator</h2>
                    <p>Generate personalized stories using our advanced AI technology!</p>
                    <h2>Our Stories</h2>

                    <div className="ai-content">
                    <div className="story-card" onClick={() => navigate("/login")}>
                        <div className="story-image" id="story1"></div>
                        <h3>The Adventures of Fluffy Bunny</h3>
                    </div>
                    <div className="story-card" onClick={() => navigate("/signUp")}>
                        <div className="story-image" id="story2"></div>
                        <h3>Under the Sea</h3>
                    </div>
                    <div className="story-card" onClick={() => navigate("/login")}>
                        <div className="story-image" id="story3"></div>
                        <h3>The Adventures of hero boy</h3>
                    </div>
                    <div className="story-card" onClick={() => navigate("/signUp")}>
                        <div className="story-image" id="story4"></div>
                        <h3>Mother's Day Celebration</h3>
                    </div>
                    </div>
                </section>
                <div className='background-image-pricing'> 
                <section id="pricing">
                   <Pricing />
                </section>
                <section id="faq">
                   <FAQ />
                </section>
                </div>
            </main>
            {/* <footer> */}
                <Footer/>
                {/* <p>&copy; 2024 Kids Story World. All rights reserved.</p> */}
            {/* </footer> */}
        </div>
    );
};

export default HomePage;
