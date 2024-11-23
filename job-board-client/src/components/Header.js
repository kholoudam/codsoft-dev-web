// job-board-client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Job Board</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jobs">Browse Jobs</Link>
      </nav>
    </header>
  );
}

export default Header;
