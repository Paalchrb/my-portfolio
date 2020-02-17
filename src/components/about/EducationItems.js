import React, { Fragment } from 'react';
import { educations } from '../../assets/data';

const EducationItems = () => {
  return (
    <Fragment>
      {
        educations.map((education, index) => (
          <div key={index} className='education-item'>
            <p className='from-to'>{education.from} - {education.to}</p>
            <p className='description'>{education.institution}, {education.description}</p>
          </div>
        ))
      }
    </Fragment>
  );
};

export default EducationItems;