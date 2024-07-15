import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './BookPageAnother.css';

const BookPageAnother = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { story, images } = location.state || { story: '', images: [] };
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

  const audioFiles = images.map((_, index) => `https://example.com/audio/audio${index}.mp3`); // Replace with actual URLs

  const createPDF = () => {
    const pdf = new jsPDF();

    pagesRef.current.forEach((page, index) => {
      pdf.text(page, 10, 10);
      if (images[index]) {
        pdf.addImage(images[index], 'PNG', 10, 20, 180, 160);
      }
      if (audioFiles[index]) {
        pdf.textWithLink(`Audio for Page ${index + 1}`, 10, 180, { url: audioFiles[index] });
      }
      if (index < pagesRef.current.length - 1) {
        pdf.addPage();
      }
    });

    pdf.save('story.pdf');
  };

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stories-page">
      <div className="book-page-1">
        <div className={`page-1 ${isReading ? 'turn-1' : ''}`}>
          <div className="story-content-new">
            <p>{pagesRef.current[currentPage]}</p>
          </div>
          <div className="page-content-1">
            <img src={images[currentPage]} alt={`Page ${currentPage + 1}`} />
          </div>
        </div>
        <button  className='btn-book' onClick={isReading ? stopReading : startReading}>
          {isReading ? 'Stop Reading' : 'Start Reading'}
        </button>
        <button  className='btn-book'  onClick={createPDF}>Download PDF with Audio Links</button>
        <button  className='btn-book'onClick={() => navigate('/homeTwo')}>Go Next Book Template</button>
      </div>
    </div>
  );
};

export default BookPageAnother;
