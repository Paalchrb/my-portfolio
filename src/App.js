import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import LandingPage from './components/layout/LandingPage';
import About from './components/about/About';
import Projects from './components/projects/Projects';

const App = () => (
  <Router>
    <Navbar />
    <div className='content-area'>
      <Switch>
        <Route path='/my-portfolio' exact component={LandingPage} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/' component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
