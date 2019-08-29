import React from 'react';
import {ResumeProfileCard, ResumeBodyCard, ResumeBodyEducation} from '../index';
import './Home.css';

const Home = props => (
  <div className="home">
    <div className="home__background-divider"></div>
    <h2 className="home__title">{props.myName}</h2>
    <ResumeProfileCard {...props}/>
    <ResumeBodyCard {...props} />
    <ResumeBodyEducation {...props} />
  </div>
)

export default Home;