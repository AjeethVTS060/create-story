import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookPageAnother.css';
import { useNavigate } from 'react-router-dom';

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { story, images } = location.state || { story: "", images: [] };
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const utteranceRef = useRef(null);
  const pages = story.split('\n\n'); // Split the story into paragraphs as pages

  useEffect(() => {
    if (isReading) {
      const synth = window.speechSynthesis;
      if (synth.speaking) {
        synth.cancel(); // Clear any ongoing speech synthesis
      }
      utteranceRef.current = new SpeechSynthesisUtterance(pages[currentPage]);
      utteranceRef.current.onend = () => {
        if (currentPage < pages.length - 1) {
          setIsFlipping(true);
          setTimeout(() => {
            setCurrentPage((prev) => prev + 1);
            setIsFlipping(false);
          }, 100); // Adjusted flip timing to start earlier
        } else {
          setIsReading(false);
        }
      };
      synth.speak(utteranceRef.current);
    }
  }, [currentPage, isReading, pages]);

  const startReading = () => {
    setIsReading(true);
  };

  return (
    <div className="stories-page">
    <div className="book-page">
      <div className="page">
        <div className="page-left">
          <p>{pages[currentPage]}</p>
        </div>
        <div className={`page-right ${isFlipping ? 'flip' : ''}`}>
          <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
        </div>
      </div>
      <button onClick={startReading} disabled={isReading}>
        {isReading ? 'Reading...' : 'Start Reading'}
      </button>
      <button onClick={() => navigate('/bookTwo') }>
        Go Back
      </button>
    </div>
    </div>
  );
};

export default BookPage;
