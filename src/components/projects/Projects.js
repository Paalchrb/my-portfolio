import React from 'react'

const Projects = (props) => {
  const projectsInfo = [
    {
      name: 'BTB Market',
      header: '"An open platform designed to ease the B2B procurement- and salesprocesses for small businesses"',
      description: 'Project was created during a two weeks examination project at the Academy Javascript 2019 bootcamp. Written in collaboration with Robin Fiske, Frank Holmslet and Espen Sørby. The application is built with a MongoDB database and node.js express server for our back-end and react/redux for our front-end. You can try it out with our demo login, username: demo@test.no password: demo123.',
      url: 'https://perf-b2b.herokuapp.com/',
      imageUrl: './images/frontpage.png'
    }
  ];

  const handleClick = (url) => {
    window.location.replace(url);
  }

  const projectsJSX = projectsInfo.map((project, index) => (
    <div className='card' key={index}>
      <img src={project.imageUrl} alt='BTB landingpage' />
      <h2>{project.name}</h2>
      <div className='card-text-content' >
        <h4>{project.header}</h4> 
        <div></div>
        <div></div>
        <p className='description'>{project.description}</p>
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
