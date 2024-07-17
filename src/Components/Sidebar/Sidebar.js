import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaInfoCircle, FaBars, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { MdWebStories } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="toggle-button">
          <FaBars />
        </button>
      </div>
        <div className="logo" onClick={() => navigate("/")}>AI Story Generator</div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard">
              <FaWandMagicSparkles />
              <span>Create</span>
            </Link>
          </li>
          <li>
            <Link to="/stories">
              <FaBook />
              <span>Stories</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <MdWebStories />
              <span>My Stories</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaInfoCircle />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-button" onClick={() => navigate("/")}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
