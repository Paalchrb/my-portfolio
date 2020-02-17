import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/my-portfolio'>
        <h4 id='title'><i id='home' className='fas fa-home'></i>Home</h4>
      </Link>
      <div className="top-right-nav">
        <Link to='/about'>
          <i className="fas fa-user" id="top-right-icon">
            <p className="icon-text-top">About</p>
          </i>
        </Link>
        <Link to='/projects'>
          <i className="fas fa-puzzle-piece" id="top-right-icon">
            <p className="icon-text-top">Projects</p>
          </i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;