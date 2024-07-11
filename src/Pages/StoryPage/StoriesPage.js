import React from 'react';
import PreLoadedStories from '../../Components/PreLoaderStories/PreLoaderStories';
import StoryGeneration from '../../Components/StoryGeneration/StoryGeneration';
import './StoriesPage.css';

const StoriesPage = () => {
  return (
    <div className="stories-page">
      <div className="left-panel">
        <PreLoadedStories />
      </div>
      <div className="right-panel">
        <StoryGeneration />
      </div>
    </div>
  );
};

export default StoriesPage;
