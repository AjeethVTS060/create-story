import React, { useEffect, useRef, useState } from 'react';
import './BookPageAnother.css';
import { useLocation, useNavigate } from 'react-router-dom';

const BookPageAnother = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { story, images, storyLength } = location.state || { story: '', images: [], storyLength: '' };
  const [currentPage, setCurrentPage] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const utteranceRef = useRef(null);
  const pagesRef = useRef([]);

  useEffect(() => {
    if (story) {
      pagesRef.current = story.split('\n\n');
    }
  }, [story]);

  useEffect(() => {
    const synth = window.speechSynthesis;

    if (isReading) {
      if (utteranceRef.current) {
        synth.cancel();
      }

      utteranceRef.current = new SpeechSynthesisUtterance(pagesRef.current[currentPage]);
      utteranceRef.current.onend = () => {
        if (currentPage < pagesRef.current.length - 1) {
          setCurrentPage(prev => prev + 1);
        } else {
          setIsReading(false);
        }
      };
      synth.speak(utteranceRef.current);
    } else {
      if (utteranceRef.current) {
        synth.cancel();
      }
    }

    return () => {
      if (utteranceRef.current) {
        synth.cancel();
      }
    };
  }, [currentPage, isReading]);

  const startReading = () => {
    setCurrentPage(0);
    setIsReading(true);
  };

  const stopReading = () => {
    setIsReading(false);
  };

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stories-page">
      <div className="book-page-1">
        <div className={`page-1 ${isReading ? 'turn-1' : ''}`}>
        <div className="story-content">
          <p>{pagesRef.current[currentPage]}</p>
        </div>
          <div className="page-content-1">
            <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
          </div>
        </div>
        <button onClick={isReading ? stopReading : startReading}>
          {isReading ? 'Stop Reading' : 'Start Reading'}
        </button>
        <button onClick={() => navigate('/homeTwo')}>Go Next</button>
      </div>
    </div>
  );
};

export default BookPageAnother;
