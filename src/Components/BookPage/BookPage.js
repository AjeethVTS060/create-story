import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookPage.css';

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { story, images } = location.state || { story: '', images: [] };
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const utteranceRef = useRef(null);
  const pages = story.split('\n\n');

  useEffect(() => {
    if (isReading) {
      const synth = window.speechSynthesis;
      if (synth.speaking) {
        synth.cancel();
      }
      utteranceRef.current = new SpeechSynthesisUtterance(pages[currentPage]);
      utteranceRef.current.onend = () => {
        if (currentPage < pages.length - 1) {
          setIsFlipping(true);
          setTimeout(() => {
            setCurrentPage(prev => prev + 1);
            setIsFlipping(false);
          }, 100);
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
        <div className={`page-left ${isFlipping ? 'slide-down' : ''}`}>
          <p>{pages[currentPage]}</p>
        </div>
        <div className={`page-right ${isFlipping ? 'slide-up' : ''}`}>
          <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
        </div>
      </div>
      <button onClick={startReading} disabled={isReading}>
        {isReading ? 'Reading...' : 'Start Reading'}
      </button>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
    </div>
  );
};

export default BookPage;

