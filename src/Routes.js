import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';


class Routes extends Component {

  render(){
    return (
      <Switch >
        <Route exact path ="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;