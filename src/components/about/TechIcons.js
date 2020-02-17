import React, { Fragment } from 'react';
import { devIcons } from '../../assets/data';

const TechIcons = () => {
  return (
    <Fragment>
      {
        devIcons.map((icon, index) => (
          <i key={index} className={`devicon-${icon}`}></i>
        ))
      }
    </Fragment>
  );
};

export default TechIcons;
