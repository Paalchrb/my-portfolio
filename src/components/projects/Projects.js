import React from 'react';
import projectsInfo from '../../assets/projectsInfo';

const Projects = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  const projectsJSX = projectsInfo.map((project, index) => (
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
  ));

  return (
    <div className='main-container'>
      <div className='card-container'>
        {projectsJSX}
      </div>
    </div>
  )
}

export default Projects;
