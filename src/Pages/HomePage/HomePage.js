import React from 'react';
import './HomePage.css';
import RotatingCube from '../../Components/RotatingCube/RotatingCube';
import Butterfly from '../../Components/Butterfly/Butterfly';
import Pricing from "../../Components/NewPricing";
import Footer from "../../Components/MiniCenteredFooter";
import FAQ from "../../Components/SimpleWithSideImage";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
 
    const navigate = useNavigate();
    // useEffect(() => {
    //     const butterfly = document.getElementById('butterfly');
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         butterfly.style.transform = `translateY(${scrollPosition * 0.5}px) translateX(${scrollPosition * 0.3}px)`;
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <div>
            <Butterfly />
            <header>
                <h1>Welcome to AI Story Generator</h1>
            </header>
            <main>
                <section id="hero">
                    <div id="hero-animation">
                        <RotatingCube />
                    </div>
                    <h2>Discover Amazing Stories</h2>
                    <p>Engage your imagination with our interactive 3D storybooks!</p>
                    <a href="#stories" className="cta-button">
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
                    <div className="story-card" onClick={()=> navigate("/dashboard")}>
                        <div className="story-image" id="story1"></div>
                        <h3>The Adventures of Fluffy Bunny</h3>
                    </div>
                    <div className="story-card" onClick={()=> navigate("/dashboard")}>
                        <div className="story-image" id="story2"></div>
                        <h3>Under the Sea</h3>
                    </div>
                    <div className="story-card" onClick={()=> navigate("/dashboard")}>
                        <div className="story-image" id="story3"></div>
                        <h3>The Adventures of hero boy</h3>
                    </div>
                    <div className="story-card" onClick={()=> navigate("/dashboard")}>
                        <div className="story-image" id="story4"></div>
                        <h3>Mother's Day Celebration</h3>
                    </div>
                    </div>
                </section>
                <section id="pricing">
                   <Pricing />
                </section>
                <section id="faq">
                   <FAQ />
                </section>
            </main>
            <footer>
                <Footer/>
                <p>&copy; 2024 Kids Story World. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
