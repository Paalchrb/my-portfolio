import React from 'react';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='introduction'>
        <h1 className="name">Pål-Christian <span className="name--last">By</span></h1>
        <h2 className='skillset'>Web Developer & Programmer</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/pal.by.9">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/pal-christian-by-a36339196/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/paalchrb">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/Paalchrb">
            <i className="fab fa-github"></i>
          </a>
        </div>  
      </div>
      <footer>&copy; Copyright 2020</footer>
    </div>
  );
};

export default LandingPage;