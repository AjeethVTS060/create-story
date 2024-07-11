import React from 'react';
import { Link } from 'react-router-dom';
import "./PreLoaderStories.css";

const PreLoadedStories = () => {
  const stories = [
    { id: 1, title: 'The Brave Little Toaster', age: '3-5' },
    { id: 2, title: 'The Magical Unicorn', age: '6-8' },
    { id: 3, title: 'The Space Adventure', age: '9-12' },
    // Add more stories here
  ];

  return (
    <div className="pre-loaded-stories">
      <h1>Pre-loaded Stories</h1>
      <div className="stories">
        {stories.map((story) => (
          <div key={story.id} className="story">
            <h2>{story.title}</h2>
            <p>Age: {story.age}</p>
            <Link to={`/book`}>Read Story</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLoadedStories;
