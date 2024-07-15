import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { FFmpeg } from '@ffmpeg/ffmpeg';
import jsPDF from 'jspdf';
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
  // const ffmpeg = useRef(new FFmpeg({ log: true }));

  // Define audio file URLs (replace with actual URLs)
  const audioFiles = images.map((_, index) => `https://example.com/audio/audio${index}.mp3`);

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

  const createPDF = async () => {
    const pdf = new jsPDF();

    pages.forEach((page, index) => {
      pdf.text(page, 10, 10);
      if (images[index]) {
        pdf.addImage(images[index], 'PNG', 10, 20, 180, 160);
      }
      if (audioFiles[index]) {
        pdf.textWithLink(`Audio for Page ${index + 1}`, 10, 180, { url: audioFiles[index] });
      }
      if (index < pages.length - 1) {
        pdf.addPage();
      }
    });

    pdf.save('story.pdf');
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
        <button onClick={startReading} className='btn-book' disabled={isReading}>
          {isReading ? 'Reading...' : 'Start Reading'}
        </button>
        <button onClick={createPDF} className='btn-book'>Download Story as PDF</button>
        <button onClick={() => navigate('/')} className='btn-book'>Go Back</button>
      </div>
    </div>
  );
};

export default BookPage;
