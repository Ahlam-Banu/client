// header.tsx

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">Your Logo</div>
        <nav>
          <ul className="nav-links">
            <li><a href="/students">Students</a></li>
            <li><a href="/courses">Courses</a></li>
            {/* Add other links */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
