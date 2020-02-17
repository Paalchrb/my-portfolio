import React from 'react';
import { projects } from '../../assets/data';

const Projects = () => {
  const handleClick = url => {
    window.open(url, '_blank');
  }

  return (
    <div className='main-container'>
      <div className='card-container'>
        {
          projects.map((project, index) => (
            <div className='card' key={index}>
              <img src={project.imageUrl} alt='BTB landingpage' />
              <h2>{project.name}</h2>
              <div className='card-text-content' >
                <h4>{project.header}</h4> 
                <p className='description'>{project.description}</p>
                <div className="project-icons">
                  {
                    project.devIcons.map((icon, index) => (
                      <i key={index} className={`devicon-${icon}`}></i>
                    ))
                  }
                </div>
              </div>
              <button onClick={() => handleClick(project.url)}>
                Check out project!
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
