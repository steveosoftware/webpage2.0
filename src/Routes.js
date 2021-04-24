import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';


class Routes extends Component {

  render(){
    return (
      <Switch >
        <Route exact path ="/" component={Home} />
        <Route exact path ="/about" component={About} />
        <Route exact path ="/projects" component={Projects}/>
        <Redirect path="/" />
      </Switch>
    )
  }
}

export default Routes;