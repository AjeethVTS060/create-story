import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryGeneration from './Components/StoryGeneration/StoryGeneration';
import PreLoadedStories from './Components/PreLoaderStories/PreLoaderStories';
import StoryGenerationTwo from "./Components/StoryGenerationTwo/StoryGenerationTwo"
import StoriesPage from "./Pages/StoryPage/StoriesPage"
import BookPage from "./Components/BookPage/BookPage"
import BookPageTwo from './Components/BookPageAnotherModal/BookPageAnother';
import './App.css';
import StoriesPageTwo from './Pages/StoryPageTwo/StoriesPageTwo';
import Sidebar from './Components/Sidebar/Sidebar';
import StoriesGrid from "./Components/TabCardNew"


function App() {
  return (
    <Router>
      <div className="App">
      {/* <h1>AI Storybook</h1> */}
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/generate" element={<StoryGeneration />} />
          <Route path="/generateTwo" element={<StoryGenerationTwo />} />
          <Route path="/pre-loaded" element={<PreLoadedStories />} />
          <Route path="/" exact element={<StoriesPage />} />
          <Route path="/homeTwo" exact element={<StoriesPageTwo />} />
          <Route path="/stories" exact element={<StoriesGrid />} />
          <Route path="/book" element={<BookPage/>} />
          <Route path="/bookTwo" element={<BookPageTwo/>} />
          <Route path="/landing" element={
            <div>
              <h1>Welcome to AI Story Generation for Kids</h1>
              <div>
                <a href="/generate">Generate a Story</a>
                <a href="/pre-loaded">Pre-loaded Stories</a>
              </div>
            </div>
          } />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
