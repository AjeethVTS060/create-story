import React, { useState, useEffect } from 'react';
import './MyStoriesPage.css';

const MyStoriesPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch the created stories from the server
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch('/api/stories');
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  };

  const handleCreateStory = () => {
    // Redirect to the AI Story Generator page
    window.location.href = '/homeTwo';
  };

  return (
    <div className="stories-page">
      <div className="my-stories-page">
        <div className="create-story-box-container">
          <div className="create-story-box" onClick={handleCreateStory}>
            <span className="create-icon">+</span>
            <p>Create Story</p>
          </div>
        </div>

        <div className="created-stories">
          <h2>My Stories</h2>
          {stories.length > 0 ? (
            <div className="story-cards">
              {stories.map((story) => (
                <div key={story.id} className="story-card">
                  <img src={story.imageUrl} alt={story.title} />
                  <h3>{story.title}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p style={{color:"#fff"}}>No stories created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyStoriesPage;