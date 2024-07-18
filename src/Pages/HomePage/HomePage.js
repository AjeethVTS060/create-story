import React from 'react';
import './HomePage.css';
import RotatingCube from '../../Components/RotatingCube/RotatingCube';
import Butterfly from '../../Components/Butterfly/Butterfly';
import Pricing from "../../Components/NewPricing";
import Footer from "../../Components/MiniCenteredFooter";
import FAQ from "../../Components/SimpleWithSideImage";
import { useNavigate } from 'react-router-dom';
import monkeyImage from '../../Assets/Images/monkey-climbing-up-vine.png'; // Import the monkey image
import leaf1 from '../../Assets/Images/leaf1.png';
import leaf2 from '../../Assets/Images/leaf2.png';
import leaf3 from '../../Assets/Images/leaf3.png';
import leaf4 from '../../Assets/Images/leaf4.png';
import leaf5 from '../../Assets/Images/leaf5.png';
import leaf6 from '../../Assets/Images/leaf6.png';


const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Butterfly />
            <header>
                <h1>Welcome to AI Story Generator</h1>
                <img src={monkeyImage} alt="Monkey Climbing" className="monkey-image" />
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
                    <h2 style={{color:"#000"}}>Discover Amazing Stories</h2>
                    <p style={{color:"#000"}}>Engage your imagination with our interactive 3D storybooks!</p>
                    <a href="/login" className="cta-button">
                        Explore Stories
                    </a>
                </section>
                <section id="stories">
                    {/* Stories content */}
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
                            <h3>The Adventures of Hero Boy</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/signUp")}>
                            <div className="story-image" id="story4"></div>
                            <h3>Mother's Day Celebration</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/login")}>
                            <div className="story-image" id="story5"></div>
                            <h3>Jungle Safari</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/signUp")}>
                            <div className="story-image" id="story6"></div>
                            <h3>Dinosaur Era</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/login")}>
                            <div className="story-image" id="story7"></div>
                            <h3>Magic School</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/signUp")}>
                            <div className="story-image" id="story8"></div>
                            <h3>Robot Revolution</h3>
                        </div>
                        <div className="story-card" onClick={() => navigate("/login")}>
                            <div className="story-image" id="story9"></div>
                            <h3>Space Adventure</h3>
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
            <Footer />
            <div className="leaf-container">
                <img src={leaf1} className="leaf leaf1" alt="leaf" />
                <img src={leaf2} className="leaf leaf2" alt="leaf" />
                <img src={leaf3} className="leaf leaf3" alt="leaf" />
                <img src={leaf4} className="leaf leaf4" alt="leaf" />
                <img src={leaf5} className="leaf leaf5" alt="leaf" />
                <img src={leaf6} className="leaf leaf6" alt="leaf" />
            </div>
        </div>
    );
};

export default HomePage;
