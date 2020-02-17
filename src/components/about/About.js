import React from 'react';
import { educations, experiences } from '../../assets/data';

const About = () => {
  const educationMarkup = educations.map((education, index) => (
    <div key={index} className='education-item'>
      <p className='from-to'>{education.from} - {education.to}</p>
      <p className='description'>{education.institution}, {education.description}</p>
    </div>
  ));

  const experienceMarkup = experiences.map((experience, index) => (
    <div key={index} className='education-item'>
      <p className='from-to'>{experience.from} - {experience.to}</p>
      <p className='description'>{experience.institution}, {experience.description} <br />
        <span className='job-desc'>{experience.category}</span>
      </p>
   </div>
  ));


  return (
    <div className='main-container'>
      <div className='card-container'>
        <div className='about-card'>
          <h2 className='name-header'>Pål-Christian By</h2>
          <p className='about-text'>
            I have been working six years as a physiotherapist, but due to major changes in the field of study my interest have been fading lately. <br />
            When I started coding April 2018 I absolutely loved it. I attended a web-based course in IT at Høgskolen in Molde from august 2018 to may 2019. In January 2020 I completed the Academy 2019 Javascript class and I am currently looking for work as a junior front-end developer. Technology I'm familiar with:
          </p>
          <div className='tech-icons'>
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-heroku-plain-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
          </div>
          <div className='tech-icons'>
            <i className="devicon-github-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-git-plain-wordmark"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-bootstrap-plain-wordmark"></i>
          </div>

          <div className='experience-container'>
            <h2 className='header'>Education</h2>
            {educationMarkup}
          </div>

          <div className='experience-container'>
            <h2 className='header bottom-head'>Experience</h2>
            {experienceMarkup}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;