import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PreLoaderStories.css";

const PreLoadedStories = () => {
  const stories = [
    { id: 1, title: 'The Brave Little Toaster', age: '3-5' },
    { id: 2, title: 'The Magical Unicorn', age: '6-8' },
    { id: 3, title: 'The Space Adventure', age: '9-12' },
    { id: 4, title: 'The Friendly Dragon', age: '3-5' },
    { id: 5, title: 'The Enchanted Forest', age: '6-8' },
    { id: 6, title: 'Time Travel Tales', age: '9-12' },
    { id: 7, title: 'Learning with Shapes', age: '3-5' },
    { id: 8, title: 'The Secret Garden', age: '6-8' },
    { id: 9, title: 'Space Explorers', age: '9-12' },
    { id: 10, title: 'Peekaboo! Who’s There?', age: '6-8' },
    { id: 11, title: 'Baby Animals Sounds', age: '0-2' },
    { id: 12, title: 'Colors Everywhere!', age: '0-2' },
    { id: 13, title: 'Goodnight Moon', age: '9-12' },
    { id: 14, title: 'The Very Hungry Caterpillar', age: '3-5' },
    { id: 15, title: 'Where Is Baby?', age: '0-2' },
    { id: 16, title: 'My First Words', age: '9-12' },
    { id: 17, title: 'Little Blue Truck', age: '0-2' },
  ];
  
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const ageGroups = ['all','0-2', '3-5', '6-8', '9-12'];

  const filteredStories = selectedAgeGroup === 'all' 
    ? stories 
    : stories.filter(story => story.age === selectedAgeGroup);

  return (
    <div className="pre-loaded-stories">
      <h1>Pre-loaded Stories</h1>
      
      <div className="age-filter">
        <label htmlFor="ageGroup">Select Age Group: </label>
        <select
          id="ageGroup"
          value={selectedAgeGroup}
          onChange={(e) => setSelectedAgeGroup(e.target.value)}
        >
          {ageGroups.map(age => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      <div className="stories">
        {filteredStories.map((story) => (
          <div key={story.id} className="story">
            <div className="story-content">
              <h2>{story.title}</h2>
              <p>Age: {story.age}</p>
              <Link to={`/story/${story.id}`}>Read Story</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLoadedStories;
