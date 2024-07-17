import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryGeneration from './Components/StoryGeneration/StoryGeneration';
import PreLoadedStories from './Components/PreLoaderStories/PreLoaderStories';
import StoryGenerationTwo from "./Components/StoryGenerationTwo/StoryGenerationTwo";
import StoriesPage from "./Pages/StoryPage/StoriesPage";
import BookPage from "./Components/BookPage/BookPage";
import BookPageTwo from './Components/BookPageAnotherModal/BookPageAnother';
import './App.css';
import StoriesPageTwo from './Pages/StoryPageTwo/StoriesPageTwo';
import Sidebar from './Components/Sidebar/Sidebar';
import StoriesGrid from "./Components/TabCardNew";
import HomePage from 'Pages/HomePage/HomePage';
import { useLocation } from 'react-router-dom';
import PrivacyPolicy from 'Components/PrivacyPolicy/PrivacyPolicy';
import SecurityCenter from 'Components/SecurityCenter/SecurityCenter';
import TermsAndCondition from 'Components/TermsAndCondition/TermsAndCondition';
import Login from 'Components/Login';
import Signup from 'Components/Signup';
import ContactUs from 'Components/ContactUs';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  // List of paths where the sidebar should not be displayed
  const noSidebarPaths = ['/', '/privacyCenter', '/login','/signUp','/securityCenter', '/termsAndCondition'];

  // Determine if the sidebar should be displayed
  const isSidebarDisplayed = !noSidebarPaths.includes(location.pathname);

  return (
    <div className={`App ${isSidebarDisplayed ? 'with-sidebar' : 'without-sidebar'}`}>
      {isSidebarDisplayed && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/generate" element={<StoryGeneration />} />
          <Route path="/generateTwo" element={<StoryGenerationTwo />} />
          <Route path="/pre-loaded" element={<PreLoadedStories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/dashboard" element={<StoriesPage />} />
          <Route path="/homeTwo" element={<StoriesPageTwo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stories" element={<StoriesGrid />} />
          <Route path="/privacyCenter" element={<PrivacyPolicy />} />
          <Route path="/SecurityCenter" element={<SecurityCenter />} />
          <Route path="/termsAndCondition" element={<TermsAndCondition />} />

          <Route path="/book" element={<BookPage />} />
          <Route path="/bookTwo" element={<BookPageTwo />} />
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
  );
}

export default App;
