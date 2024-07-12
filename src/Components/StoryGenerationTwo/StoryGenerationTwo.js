import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoryGenerationTwo.css';
import image1 from '../../Assets/Images/123-(1).png'; // Adjust the path to your actual image location
import image2 from '../../Assets/Images/123-(3).png';
import image3 from '../../Assets/Images/123-(4).png';
import image4 from '../../Assets/Images/123-(2).png';

const StoryGenerationTwo = () => {
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [characters, setCharacters] = useState('');
  const [voiceTone, setVoiceTone] = useState('');
  const [storyLength, setStoryLength] = useState('');
  const navigate = useNavigate();

  const handleGenerateStory = () => {
    // Generate the story and images (mock data used here)
    const generatedStory = `Once upon a time, in a faraway land, there was a magical forest.\n\nIn this forest lived a young girl named Alice.\n\nAlice loved exploring the forest with her friend Bob.\n\nOne day, they found a hidden treasure chest.`;
    const generatedImages = [image1, image2, image3, image4];

    // Navigate to the BookPage with the generated story, images, and story length
    navigate('/book', {
      state: {
        story: generatedStory,
        images: generatedImages,
        storyLength: storyLength // Include the selected story length
      }
    });
  };

  return (
    <div className="story-generation">
      <h1>AI Story Generation for Kids</h1>
      <form>
        <div>
          <label>Age:</label>
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">Select Age</option>
            <option value="3-5">3-5</option>
            <option value="6-8">6-8</option>
            <option value="9-12">9-12</option>
          </select>
        </div>
        <div>
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>
        <div>
          <label>Characters:</label>
          <input
            type="text"
            placeholder="Enter character names"
            value={characters}
            onChange={(e) => setCharacters(e.target.value)}
          />
        </div>
        <div>
          <label>Voice Tone:</label>
          <select value={voiceTone} onChange={(e) => setVoiceTone(e.target.value)}>
            <option value="">Select Voice Tone</option>
            <option value="Joyful">Joyful</option>
            <option value="Serious">Serious</option>
            <option value="Excited">Excited</option>
          </select>
        </div>
        <div>
          <label>Story Length:</label>
          <select value={storyLength} onChange={(e) => setStoryLength(e.target.value)}>
            <option value="">Select Story Length</option>
            <option value="short">Less than 300 words</option>
            <option value="medium">Short stories: 350 to 500 words</option>
            <option value="long">Medium Stories: 550 to 700 words</option>
            <option value="para">Long Stories: 750 to 1000 words</option>
          </select>
        </div>
        <button type="button" onClick={handleGenerateStory}>Generate Story</button>
      </form>
    </div>
  );
};

export default StoryGenerationTwo;





