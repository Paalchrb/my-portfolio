import React from 'react';
import TechIcons from './TechIcons';
import EducationItems from './EducationItems';
import ExperienceItems from './ExperienceItems';

const About = () => {
  return (
    <div className='main-container'>
      <div className='card-container'>
        <div className='about-card'>
          <h2 className='name-header'>Pål-Christian By</h2>
          <p className='about-text'>
            I have been working six years as a physiotherapist, but due to major changes in the field of study, my interest have been fading lately. <br />
            When I started coding April 2018 I absolutely loved it. I attended a web-based course in IT at Høgskolen in Molde from august 2018 to may 2019. In January 2020 I completed the Academy 2019 Javascript class and I am currently looking for work as a junior front-end developer. Technology I'm familiar with:
          </p>
          <div className='tech-icons'>
            <TechIcons />
          </div>
          <div className='experience-container'>
            <h2 className='header'>Education</h2>
            <EducationItems />
          </div>
          <div className='experience-container'>
            <h2 className='header bottom-head'>Experience</h2>
            <ExperienceItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;