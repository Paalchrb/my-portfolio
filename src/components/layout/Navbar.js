import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const links = (
  <Fragment>
    <Link to='/'>
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
     {/*  <Link to='/contact'>
        <i className="fas fa-at" id="top-right-icon">
          <p className="icon-text-top">Contact</p>
        </i>
      </Link> */}
    </div>
  </Fragment>
  );

  return (
    <nav className='navbar'>
      {links}
    </nav>
  );
}

export default Navbar;