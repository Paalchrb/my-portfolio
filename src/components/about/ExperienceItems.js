import React, { Fragment } from 'react';
import { experiences } from '../../assets/data';

const ExperienceItems = () => {
  return (
    <Fragment>
      {
        experiences.map((experience, index) => (
          <div key={index} className='education-item'>
            <p className='from-to'>{experience.from} - {experience.to}</p>
            <p className='description'>{experience.institution}, {experience.description} <br />
              <span className='job-desc'>{experience.category}</span>
            </p>
         </div>
        ))
      }
    </Fragment>
  );
};

export default ExperienceItems;
